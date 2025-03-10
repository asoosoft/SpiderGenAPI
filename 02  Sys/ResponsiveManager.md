# ResponsiveManager

**ResponsiveManager**는 프로젝트에서 사용되는 반응형 디자인 정보를 관리하는 객체

이 객체는 외부 JSON 파일인 ResponsiveInfo.json을 로드하고, <br>
해당 정보를 기반으로 특정 URL 및 모드에 대한 반응형 레이아웃을 반환하는 기능을 제공

## Class Methods

### loadMap()

ResponsiveManager 객체에 반응형 레이아웃 정보를 로드
<br> JSON 파일을 읽어 resMap 객체에 저장

```js
ResponsiveManager.loadMap();
```

---

### isExistFile(url, mode)

주어진 URL과 모드에 해당하는 반응형 레이아웃 파일이 존재하는지 확인

-   **url** `<String>`: 확인할 URL 경로
    
-   **mode** `<String>`: 레이아웃 모드 <br>

	> 예 )  'desktop', 'mobile' 등
    
-   **Returns** `<Boolean>` <br>
해당 URL과 모드에 맞는 반응형 레이아웃 파일이 존재하면 true, 그렇지 않으면 false
 
```js
let fileExists = ResponsiveManager.isExistFile('home.html', 'mobile');
```

---

<br>

## Example Usage

```js
// 반응형 레이아웃 정보 로드
ResponsiveManager.loadMap();

// 특정 URL과 모드에 대한 반응형 레이아웃 파일 확인
let exists = ResponsiveManager.isExistFile('index.html', 'desktop');
console.log(exists); // true 또는 false
```