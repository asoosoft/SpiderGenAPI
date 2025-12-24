import fs from "fs";
import path from "path";

const BASE_URL = "https://wikidocs.net/napi";
const TOKEN = process.env.WIKIDOCS_TOKEN;
const BOOK_ID = Number(process.env.WIKIDOCS_BOOK_ID);

const changedFiles = (process.env.CHANGED_FILES || "")
  .split("\n")
  .map(s => s.trim())
  .filter(Boolean)
  .filter(f => f.endsWith(".md"));

if (!TOKEN) throw new Error("Missing WIKIDOCS_TOKEN");
if (!BOOK_ID) throw new Error("Missing WIKIDOCS_BOOK_ID");

const headers = {
  Authorization: `Token ${TOKEN}`,
  "Content-Type": "application/json",
};

async function apiGet(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}\n${await res.text()}`);
  return res.json();
}

async function apiPut(url, body) {
  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`PUT ${url} -> ${res.status}\n${await res.text()}`);
  const text = await res.text();
  return text ? JSON.parse(text) : {};
}

// md 첫 "# 제목"을 subject로 사용 (없으면 파일명)
function inferSubject(filePath, md) {
  const m = md.match(/^#\s+(.+)\s*$/m);
  return (m?.[1]?.trim()) || path.basename(filePath, ".md");
}

function normalizeFolderName(name) {
  // 예: "01-afc" -> "01. afc"
  // 규칙: "숫자2자리-나머지" 패턴이면 "숫자. 공백+나머지"로 변환
  const m = name.match(/^(\d+)-(.+)$/);
  if (m) return `${m[1]}. ${m[2]}`;
  return name;
}

// GitHub 파일 경로 -> WikiDocs 트리 경로 문자열 생성
// 예) docs/01. afc/component/AAccordion.md -> "01. afc/component/AAccordion"
function inferWikidocsPath(filePath, subject) {
  const parts = filePath.split("/").filter(Boolean);

  // 필요시 docs/ 같은 루트 폴더 제거
  const withoutRoot = (parts[0] === "docs") ? parts.slice(1) : parts;

  // 마지막은 파일명이므로 제외하고 폴더들만
  const folderParts = withoutRoot.slice(0, -1).map(normalizeFolderName);

  // leaf는 subject(제목)로 맞춘다 (파일명 아니라 제목)
  return [...folderParts, subject].join("/");
}

// 트리에서 page 객체 찾는 함수
function findPageById(pages, targetId) {
  const stack = [...pages];
  while (stack.length) {
    const node = stack.pop();
    if (node.id === targetId) return node;
    if (node.children?.length) stack.push(...node.children);
  }
  return null;
}

// books/{id} 응답의 pages 트리를 경로 -> id 로 인덱싱
function buildIndex(pages) {
  const index = new Map();

  function walk(node, parentPath) {
    const currentPath = parentPath ? `${parentPath}/${node.subject}` : node.subject;
    index.set(currentPath, node.id);
    (node.children || []).forEach(child => walk(child, currentPath));
  }

  pages.forEach(p => walk(p, ""));
  return index;
}

async function main() {
  // 1) 책 전체 트리 로딩
  const book = await apiGet(`${BASE_URL}/books/${BOOK_ID}`);
  const pages = book.pages || [];

  // 2) 경로->id 인덱스
  const index = buildIndex(pages);

  // 3) 변경 파일만 업데이트
  for (const file of changedFiles) {
    const md = fs.readFileSync(file, "utf-8");
    const subject = inferSubject(file, md);
    const wikiPath = inferWikidocsPath(file, subject);
    const pageId = index.get(wikiPath);
    
    const pageObj = findPageById(pages, pageId);

    if (!pageObj) {
      console.log(`[SKIP] page object not found for id=${pageId} (from ${file})`);
      continue;
    }

    await apiPut(`${BASE_URL}/pages/${pageId}`, {
      id: pageObj.id,
      subject,
      content: md,
      parent_id: pageObj.parent_id,
      depth: pageObj.depth,
      seq: pageObj.seq,
      book_id: pageObj.book_id,
      open_yn: pageObj.open_yn,
    });
  }

  console.log("Done.");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
