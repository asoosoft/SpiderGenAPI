# HistoryManager

**HistoryManager**는 히스토리 데이터를 관리하고, "undo(되돌리기)" 및 "redo(다시 실행)" 기능을 제공하는 클래스

이 클래스는 사용자가 수행한 작업을 기록하고, <br>
이전 및 다음 상태로의 전환을 관리

## Class Variables

### this.offset `<Number>`

현재 히스토리의 위치를 나타내는 변수
> 초기값은 -1

```js
let historyManager = new HistoryManager();

console.log(historyManager.offset);  // -1
```

---

### this.actData `<Array>`

히스토리 데이터를 저장하는 배열

각 항목은 info, undo, redo 등의 정보를 포함하는 객체로 구성
> 초기 상태는 빈 배열

```js
let historyManager = new HistoryManager();

console.log(historyManager.actData);  // []
```

<br>

## Instance Methods

### reg(info, undoFunc, redoFunc)

새로운 히스토리 항목을 등록

-   **info** `<Object>`: 등록할 히스토리 정보 <br>
	targets, undoData, redoData 등을 포함

-   **undoFunc** `<Function>`: 되돌리기 함수

-   **redoFunc** `<Function>`: 다시 실행 함수

-   **isMerge** `<Boolean>`: true일 경우 기존 히스토리에 병합하고, false일 경우 offset을 증가하여 새로운 히스토리를 추가

```js
historyManager.reg(
	{ 
		targets: [...], 
		undoData: {}, 
		redoData: {}, 
		isMerge: false // 새 히스토리 등록
	}, 
	undoFunction, 
	redoFunction
);
```

---

### clear()

히스토리 및 offset을 초기화
> offset을 -1로 설정하고, actData 배열을 비움

```js
historyManager.clear();
```

---

### undo()

이전 히스토리로 이동

-   **Returns** `<Boolean>`

	-   **true** `<Function>`: 이전 히스토리로 이동했음
	-   **false** `<Function>`: 이전 히스토리가 없어서 이동할 수 없음

```js
let result = historyManager.undo();

if (result) {
  console.log("이전 히스토리로 이동");
} else {
  console.log("이전 히스토리가 없습니다.");
}
```

---

### redo()

다음 히스토리로 이동

-   **Returns** `<Boolean>`

	-   **true** `<Function>`: 다음 히스토리로 이동했음
	-   **false** `<Function>`: 다음 히스토리가 없어서 이동할 수 없음

```js
let result = historyManager.redo();

if (result) {
  console.log("다음 히스토리로 이동");
} else {
  console.log("다음 히스토리가 없습니다.");
}
```

---

### getCurrentOffset()

현재 offset 값을 가져옴

-   **Returns** `<Number>` : 현재 히스토리의 offset 값

```js
let currentOffset = historyManager.getCurrentOffset();

console.log(currentOffset);
```

---

### getCurrentHistory()

현재 offset 위치의 히스토리 데이터를 반환

-   **Returns** `<Array>` : 현재 offset 위치의 히스토리 항목

```js
let currentHistory = historyManager.getCurrentHistory();

console.log(currentHistory);
```

---

### getPosHistory(pos)

특정 pos 위치의 히스토리 데이터를 반환

-   **pos** `<Number>` : 가져올 히스토리의 위치(0부터 시작)

-   **Returns** `<Array>` : 주어진 위치(pos)의 히스토리 항목

```js
let posHistory = historyManager.getPosHistory(2);

console.log(posHistory);
```

---

## Example Usage

```js
// HistoryManager 객체 생성
let historyManager = new HistoryManager();

// 히스토리 등록 (새 히스토리 추가)
historyManager.reg(
	{ 
		targets: ['target1'], 
		undoData: { data: 'undo1' }, 
		redoData: { data: 'redo1' }, 
		isMerge: false 
	}, 
	undoFunction, 
	redoFunction
);

// 현재 히스토리 상태 확인
console.log(historyManager.getCurrentHistory());

// 이전 히스토리로 이동
let undoResult = historyManager.undo();
if (undoResult) {
  console.log("이전 히스토리로 이동");
} else {
  console.log("이전 히스토리가 없습니다.");
}

// 다음 히스토리로 이동
let redoResult = historyManager.redo();
if (redoResult) {
  console.log("다음 히스토리로 이동");
} else {
  console.log("다음 히스토리가 없습니다.");
}
```

<br>