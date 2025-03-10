# ACanvasGrid

> **Extends** : AGrid

`ACanvasGrid`는 `AGrid`를 확장한 캔버스 기반 그리드 컴포넌트
데이터와 헤더/바디 영역을 캔버스에 직접 렌더링,
셀 스타일, 스크롤, 터치 이벤트, 선택, 애니메이션 프레임 등을 지원



## Instance Variables

### dmShrinkArr  `<Array>`

  각 로우 템플릿의 `<td>` 요소에서 읽어온 data mask 및 shrink 정보를 저장
  (메서드 `setDefaultBodyInfo()`에서 초기화되어, 이후 각 셀 데이터의 마스킹 처리에 사용)
        
### realMap `<Object>`
실시간 데이터 업데이트(삽입, 삭제, 갱신) 시, 데이터의 고유 키(예: `getRealKey(data)`)를 기준으로 해당 행(또는 행 배열)을 저장하는 매핑 객체  
 (메서드 `doRealPattern()`에서 참조되어, 업데이트 또는 삭제 시 해당 행을 찾아 처리)
        
### realField `<Any>`

실시간 데이터 업데이트에서 사용할 데이터의 고유 필드를 지정  
(`doRealPatt 초기 DOM 컨텍스트(예, row 템플릿)를 복제하여 보관
 (메서드 `createElement(context)`에서 `context.cloneNode(true)`를 통해 생성되며, 이후 스타일 추출 등에 사용)
        
### selectedStyle  `<Object>`

AGrid에 설정된 선택 스타일(selectStyle 클래스) 정보를 읽어와 저장
(생성자에서 `null`로 초기화되며, `onContextAvailable()` 등에서 CSS 속성 정보를 추출하는 데 활용)
        
### selectStyleName  `<String>`

선택된 셀에 적용할 CSS 클래스 이름을 나타냄
이 변수는 AGrid 또는 다른 상위 클래스에서 설정되어 있을 가능성이 있음)
        
### isFullRowSelect `<Boolean>`

선택 동작 시 전체 행을 선택할지 여부를 결정하는 옵션 
(메서드 `selectCellRange(startCell, endCell, e)`에서 `this.option.isFullRowSelect`를 검사하여,  
전체 행 선택 즉, 첫 번째 셀부터 마지막 셀까지 선택 을 적용)

### frameResult `<Number>`  
애니메이션 프레임 모드(`useAniFrame`)가 활성화된 경우, 1초 동안 렌더링된 프레임의 최종 개수를 저장
이는 주로 성능 측정(예: FPS 표시)에 사용
    
### frameCount `<Number>`

 애니메이션 프레임 루프 내에서 매 프레임마다 증가되는 카운터로, 1초마다 `frameResult`에 할당 후 초기화
    
### option.isClearRowTmpl  
캔버스 기반 그리드의 초기화 시, **행 템플릿(row template)** 을 유지할 것인지 삭제할 것인지를 결정하는 옵션 

### bodyData `<Array>` 
  바디 영역의 데이터 배열. 각 행은 셀 객체 배열로 구성

### headerData `<Array>`
  헤더 영역의 데이터 배열. 헤더 템플릿에서 읽어온 값을 저장

### realCanvas `<HTMLCanvasElement>`  
  실제 화면에 표시되는 캔버스 요소

### bufCanvas `<HTMLCanvasElement>`
  더블 버퍼링을 위해 사용되는 offscreen 캔버스 요소

### realCtx `<CanvasRenderingContext2D>`
  `realCanvas`의 2D 렌더링 컨텍스트

### bufCtx `<CanvasRenderingContext2D>`
  `bufCanvas`의 2D 렌더링 컨텍스트

 ### cellSizeInfo `<Array>`
  바디 행 템플릿의 각 셀에 대한 사이즈 정보 배열 (2차원 배열: 행별, 셀별).

###  hCellSizeInfo `<Array>`
  헤더 행 템플릿의 각 셀에 대한 사이즈 정보 배열 (2차원 배열).

### bodyRowStyles, bodyCellStyles `<Array>`
  바디 영역의 행과 셀에 적용된 스타일 객체 배열.

### headRowStyles, headCellStyles  ` <Array> ` 
  헤더 영역의 행과 셀에 적용된 스타일 객체 배열.

### selectedCellStyles  `<Array> `
  선택된 셀에 적용할 스타일 정보 (헤더/바디 구분 없이 2차원 배열)

### selectedCells `<Array> ` 
  현재 선택된 셀 정보를 저장하는 배열

### selectedCellRange `<Array>`
  선택된 영역의 시작 및 끝 셀 정보를 담고 있음 
  *(예: `[ startCell, endCell ]`)*

### scrlBarV  `<AScrollBar>`  
  그리드의 스크롤바 컴포넌트. 수직 스크롤을 담당

### scrlManager `<ScrollManager>`
  터치/마우스 이벤트를 통한 스크롤 동작을 관리하는 객체

### useDoubleBuffer `<Boolean>`
  이중 버퍼링 사용 여부.  
  `true`인 경우, `bufCanvas`에 그린 후 `realCanvas`에 복사

### useAniFrame `<Boolean>`  
  애니메이션 프레임을 사용한 주기적 업데이트 여부 (성능 테스트 용).

### scale `<Number>`  
  디바이스 픽셀 비율에 따른 캔버스 스케일.

### scrollY `<Number>`  
  세로 스크롤 위치 (음수 값으로 계산).

### drawMarginInfo` <Object>`
  캔버스 그리기 시 좌/우/상/하 여백 정보를 담은 객체  
  (예: `{ leftW, rightW, topH, headBtmH, btmH }`).

### headerTotalHeight, bodyTotalHeight `<Number>`  
  헤더와 바디 영역의 총 높이.  
  (행 템플릿의 높이 정보로 계산)

### drawRowCount` <Number>`
  현재 화면에 그려질 행의 개수.

## Instance Methods


### createElement(context)

DOM 컨텍스트가 전달되면,  
복사(clone)된 row 템플릿 노드를 보관, 
`document.createDocumentFragment()`를 이용해 임시 저장

  - **context** `<DOM Element>`: 원본 그리드 엘리먼트

```js
grid.createElement(someContextElement);
```


### setDefaultBodyInfo()

바디 영역의 기본 데이터 구조를 생성
- 각 row 템플릿의 `<td>` 요소에서 data mask 및 shrink 정보를 읽어와  
  `dmShrinkArr`와 `bodyData`를 구성

```js
grid.setDefaultBodyInfo();
```


### prependRow(infoArr, rowData, noUpdate)

바디 데이터의 최상단에 새 행을 추가
  
  - **infoArr** `<Array>`: 셀 데이터 배열 (각 셀의 값 또는 객체)  
  - **rowData** `<Object>`: 행에 부가된 데이터  
  - **noUpdate** `<Boolean>`: `true`이면 추가 후 그리드 업데이트를 생략

```js
grid.prependRow(['Cell1', 'Cell2', 'Cell3'], { key: 'row1' }, false);
```


### removeRow(rowIdx, noUpdate)

지정한 인덱스의 행을 삭제
  
  - **rowIdx** `<Number>`: 삭제할 행의 인덱스  
  - **noUpdate** `<Boolean>`: `true`이면 삭제 후 그리드 업데이트를 생략

```js
grid.removeRow(3, false);
```




### doUpdatePattern(dataArr, keyArr, queryData)

단건 데이터 업데이트 시 호출되며,  
bodyData의 각 셀의 텍스트를 업데이트
- 각 셀에 data mask가 적용되어 있으면 mask 처리 후 텍스트를 갱신

```js
grid.doUpdatePattern([dataObject], ['key1','key2'], queryData);
```



### doRealPattern(dataArr, keyArr, queryData, realType)

실시간 데이터 업데이트/삭제/삽입 시 사용

  - **dataArr** `<Array>`: 업데이트할 데이터 배열  
  - **keyArr** `<Array>`: 각 셀에 대응하는 키 배열  
  - **queryData** `<Object>`: 추가적인 쿼리 데이터  
  - **realType** `<Number>`:  
    - `0`: 업데이트  
    - `-1`: prepend (상단 추가)  
    - `1`: append (하단 추가)  
    - `2`: 삭제

```js
grid.doRealPattern([dataObject], ['key1','key2'], queryData, 1);
```


### getRow(rowIdx)

지정한 인덱스의 행 데이터를 반환

  - **rowIdx** `<Number>`

* **Returns** `<Array>`: 해당 행의 셀 데이터 배열

```js
let row = grid.getRow(0);
```


### getCell(rowIdx, colIdx)

특정 행의 특정 셀 데이터를 반환
  
  - **rowIdx** `<Number>`  
  - **colIdx** `<Number>`

* **Returns** `<Object>`: 셀 데이터 객체

```js
let cell = grid.getCell(0, 1);
```



### getRowCount()

현재 바디 데이터의 행 개수를 반환

* **Returns** `<Number>`

```js
let count = grid.getRowCount();
```



### getHeaderRowCount()

헤더 데이터의 행 개수를 반환

* **Returns** `<Number>`

```js
let headerCount = grid.getHeaderRowCount();
```





### removeAll()

바디 데이터를 모두 삭제한 후, 스크롤바 데이터와 그리드를 업데이트

```js
grid.removeAll();
```


### onContextAvailable()

컴포넌트의 DOM 컨텍스트가 완전히 생성된 후 호출,  
복사해둔 row/col 템플릿 노드에서 스타일 정보를 읽음  
`gridBgStyle`, `bodyRowStyles`, `bodyCellStyles`, `headRowStyles`, `headCellStyles`,  
`drawMarginInfo`, `colSizeInfo`, `selectedCellStyles` 등을 설정

```js
// 내부적으로 자동 호출
```
    

### setDefaultHeaderData()

헤더 템플릿($hRowTmpl)에서 텍스트 정보를 읽어와  
`headerData` 배열에 저장

```js
grid.setDefaultHeaderData();
```


### updateGrid(isUpdateFrame)

전체 그리드를 다시 그림
- 먼저 `_drawBackground()`를 호출하여 캔버스를 초기,
- `_drawGrid()`를 호출하여 헤더와 바디 영역을 캔버스에 그림.
- 만약 이중 버퍼링(`useDoubleBuffer`)이 활성화되어 있으면,  
  `bufCanvas`의 내용을 `realCanvas`에 복사.


  - **isUpdateFrame** `<Boolean>`: 애니메이션 프레임 업데이트 중 호출된 경우 `true`



### scrollTo(value)

수직 스크롤 위치(`scrollY`)를 설정하고 그리드를 다시 그림


  - **value** `<Number>`

```js
grid.scrollTo(150);
```



### scrollOffset(move)

현재 스크롤 위치에 상대적으로 `move` 만큼 이동

  
  - **move** `<Number>`

```js
grid.scrollOffset(-20);
```



### addHeaderRow(infoArr, noUpdate)

헤더 데이터에 새 행을 추가


  - **infoArr** `<Array>`: 셀 데이터 배열  
  - **noUpdate** `<Boolean>`: 업데이트 여부

```js
grid.addHeaderRow(['ID', 'Name', 'Age'], false);
```



### addRow(infoArr, rowData, noUpdate)

바디 데이터에 새 행을 추가
- 각 셀에 대해 data mask가 적용되어 있으면 처리 후 데이터가 추가
- 스크롤바 데이터도 갱신

 
  - **infoArr** `<Array>`: 셀 데이터 배열  
  - **rowData** `<Object>`: 추가적인 행 데이터  
  - **noUpdate** `<Boolean>`

```js
grid.addRow(['1', 'Alice', '30'], { id: 1, name: 'Alice', age: 30 }, false);
```

---

### updatePosition(pWidth, pHeight)

컴포넌트의 크기가 변경되었을 때 호출
- 부모의 updatePosition을 호출한 후,  
  열 너비(`_setColSizeInfo`), 행 템플릿 사이즈(`_setRowTmplSizeInfo`),  
  헤더/바디 영역 높이, 캔버스 크기, 스크롤 영역 등을 재계산
- 애니메이션 프레임 옵션이 활성화되어 있으면, 프레임 루프를 시작

 
  - **pWidth** `<Number>`: 변경된 넓이  
  - **pHeight** `<Number>`: 변경된 높이

```js
grid.updatePosition(800, 600);
```


### checkTouchMove()

캔버스(`realCanvas`)에 터치 이벤트(ACTION_DOWN, ACTION_MOVE, ACTION_UP)를 바인딩하여  
터치 스크롤 및 셀 선택을 관리합니다.
- 터치 시작 시 스크롤 매니저 초기화  
- 터치 이동 시 스크롤 업데이트  
- 터치 종료 시 셀 선택 처리 또는 스크롤 체크

```js
// 내부 호출: init()에서 실행됨.
```


### selectCellRange(startCell, endCell, e)

시작 셀과 끝 셀을 지정하여 선택된 영역으로 만듬
- 만약 fullRowSelect 옵션이 활성화되어 있다면, 전체 행이 선택
- 선택된 셀의 `selected` 속성을 true로 설정,  
  `selectedCells` 배열에 해당 정보를 추가

 
  - **startCell** `<Object>`: `{ row: Number, col: Number }`  
  - **endCell** `<Object>`: (생략 시 startCell과 동일)  
  - **e**: 이벤트 객체 (선택 이벤트 리포팅에 사용됨)

```js
grid.selectCellRange({ row: 1, col: 0 }, { row: 1, col: 2 }, evt);
```


### clearSelect()

현재 선택된 모든 셀의 선택 상태를 해제

```js
grid.clearSelect();
```

### getSelectedCells()

현재 선택된 셀들의 배열을 반환

* **Returns** `<Array>`

```js
let selCells = grid.getSelectedCells();
```


### getSelectedCellRange()

현재 선택된 영역의 시작/끝 셀 정보를 반환

* **Returns** `<Array>`: `[ startCell, endCell ]`

```js
let range = grid.getSelectedCellRange();
```



### renderSVGOnCanvas(svg)

SVG 문자열(또는 data URI)을 캔버스에 렌더링
- Image 객체를 사용하여 onload 시 캔버스에 drawImage 
- 옵션으로 콜백을 호출

 
  - **svg** `<String>`: SVG data URI 문자열

```js
grid.renderSVGOnCanvas(svgString);
```


### cookSVG(html)

HTML 문자열을 받아,  
SVG의 `<foreignObject>` 내에 포함시켜 data URI 형태의 SVG 문자열을 생성
- 기본 width와 height는 800px로 설정

 
  - **html** `<String>`: 포함할 HTML

* **Returns** `<String>`: data URI 형태의 SVG 문자열

```js
let svgURI = grid.cookSVG('<div style="color:red;">Hello</div>');
```