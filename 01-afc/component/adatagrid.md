# ADataGrid
> **Extends** AView

**ADataGrid**는 테이블 형태의 데이터를 표시,관리,정렬,필터링 등을 수행할 수 있는 컴포넌트.


## Instance Variables

### dataArr2  `<Array>`

전체 데이터 배열을 저장.
<br/>그리드에 표시될 모든 데이터를 포함.


### dataInx  `<Number>`

현재 화면에 보여지는 데이터의 시작 인덱스를 표시.
<br/>스크롤이나 페이지 전환 시 이 값을 변경하여 다른 데이터를 표시.


### endCol  `<Number>`

현재 화면에 보여지는 컬럼의 종료 위치를 표시.
<br/>그리드의 가로 스크롤 상태에 따라 변경.


### realField `<String>`

실시간 키 데이터를 가져올 수 있는 필드명을 저장.
<br/>실시간 데이터 업데이트 시 이 필드를 사용하여 데이터를 식별.


### realMap  `<Object>`

실시간 키 별로 로우를 저장하는 객체
<br/>실시간 데이터가 수신되면 이 객체를 통해 해당 로우를 빠르게 찾고 업데이트 가능.


### renderRowCnt  `<Number>`

현재 화면에 보여지는 로우의 개수를 표시.
<br/> 그리드의 세로 크기와 로우 높이에 따라 결정.


### selObjs `<Array>`

사용자가 선택한 데이터 객체를 저장하는 배열.
<br/> 선택된 데이터의 상태를 관리하는 데 사용.


### showArr2  `<Array>`

현재 화면에 보여지는 데이터 배열.
<br/> dataArr2에서 dataInx와 renderRowCnt를 기준으로 잘라낸 부분을 저장.


### sortColInx `<Number>`

현재 정렬 설정된 컬럼의 위치 정보를 저장.

* **default** -1 : 정렬이 되지 않은 상태


### sortInfo  `<Array>`

정렬의 오름차순 또는 내림차순 정보를 저장하는 배열
<br/>각 컬럼의 정렬 상태를 관리.


### startCol  `<Number>`

현재 화면에 보여지는 컬럼의 시작 위치를 표시.
<br/>가로 스크롤 상태에 따라 이 값이 변경.

## Instance Methods

### addRowData( rowData, metaData, noUpdate )

마지막 줄에 로우 데이터를 추가.

* **rowData**   `<Array>` 각 컬럼에 들어갈 객체들의 배열
* **metaData**   `<Array>` (선택) 해당 로우에 저장할 meta data
* **noUpdate**   `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
// 컬럼이 3개인 경우
let dataArr = [
    // 각 컬럼에 설정할 객체(이 때 text 키는 셀에 들어갈 문자열)
    {text: 'text1', ...},   // 0번째 컬럼 세팅 값
    {text: 'text2', ...},   // 1번째 컬럼 세팅 값
    {text: 'text3', ...},   // 2번째 컬럼 세팅 값
];

dataGrid.addRowData(dataArr);
```

### addSelectObj( selObj, existCheck )

선택 데이터 객체를 추가. 
<br/>existCheck 값이 true 인 경우 이전에 선택된 데이터 객체가 있는 경우 제거.

* **selObj**  `<Object>` 선택 데이터 객체
* **existCheck**  `<Boolean>` 존재 체크 여부

```javascript
let selectedObj = { id: 102 };
dataGrid.addSelectObj(selectedObj, true);
```

### checkColPos()

좌우 스크롤 시, 표시되는 컬럼 범위(`startCol`, `endCol`) 를 갱신하기 위해 계산.

### clearSelected()

기존에 선택된 데이터를 모두 제거.

### colIndexOfSel( selObj )

select object 가 위치한 column 의 index 를 반환.

* **selObj**   `<Object>` 선택된 객체
* **Returns**  `<Number>` 컬럼 위치

```js
let index = dataGrid.colIndexOfSel(selObj);
//------------------------------------------------------
// 0 (객체가 존재하는 column의 index)
```

### filter( filterFunc, updateType )

원본 데이터에 대해 `filterFunc` 를 적용하여 필터링한 결과를 반영.
`updateType` 에 따라 렌더링(갱신) 시점이나 초기화 여부를 결정 가능.

* **filterFunc**  `<Function>` 
<br/>각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버린 후 세 가지 매개변수를 받음.
* **updateType**  `<Number>`
<br/>0: (update, init), 1: (noupdate, init), 2: (update,noinit)

```javascript
dataGrid.filter(function(row) { return row.age > 20; }, 'update');
```

### getCellData( rowInx, colInx )

전체 데이터 배열 중 **[rowInx, conInx]** 위치 셀의 데이터를 가져옴.

* **rowInx**   `<Number>` 로우 인덱스
* **colInx**   `<Number>` 컬럼 인덱스
* **Returns**  `<Object>` 셀 데이터

```js
let result = dataGrid.getCellData(0,1);
//------------------------------------------------------
// {text: (0, 1) 위치에 세팅된 값, ...}
```


### getCheckedIndices( colInx )

데이터 목록 중 특정 위치의 컬럼 checkbox가 checked 인 row 들을 배열로 반환하는 함수</br>
이 때 addRowData() 또는 setGridData() 시에 type 을 'checkbox' 로 해주어야 함

* **colInx** `<Number>` checkbox 가 존재하는 컬럼 인덱스
* **Returns** `<Array>`

```js
// 체크박스 데이터 예시
let dataArr = [
    {type: 'checkbox'},
    {text: 'checkboxRow'},
    ...
];

...

let checkedDataArr = dataGrid.getCheckedIndices(0);
//------------------------------------------------------
// [0, 1, 2]
```

### getData()

필터링 되지 않은 원본 데이터 배열을 반환.

* **Returns**  `<Array>`

```js
let resultArr = dataGrid.getData();
//------------------------------------------------------
// [
//    {text: 'data1', value: 'value1'},
//    {text: 'data2', value: 'value2'},
//    ...
// ]
```


### getFilteredData()

필터링 된 전체 데이터 배열을 반환.

* **Returns** `<Array>`

```js
let resultArr = dataGrid.getFilteredData();
//------------------------------------------------------
// [
//    {text: 'filteredData1', value: 'filteredValue1'},
//    {text: 'filteredData2', value: 'filteredValue2'},
//    ...
// ]
```

### getFilteredRowData( rowInx )

필터링 된 데이터 배열에서 **rowInx**번째 로우를 반환.

* **rowInx**  `<Number>` 로우 위치
* **Returns**  `<Array>` 

```js
let resultArr = dataGrid.getFilteredRowData(0);
//------------------------------------------------------
// [
//    {text: 'filteredData1', value: 'filteredValue1'},
//    {text: 'filteredData2', value: 'filteredValue2'},
//    ...
// ]
```


### getGridData()

필터링 되지 않은 원본 데이터 배열을 반환.

* **Returns**  `<Array>`

```js
let resultArr = dataGrid.getData();
//------------------------------------------------------
// [
//    {text: 'data1', value: 'value1'},
//    {text: 'data2', value: 'value2'},
//    ...
// ]
```

### getMetaData( row )

특정 위치의 로우에 저장해 놓은 meta data 를 가져옴.

* **row**  `<Number>` or `<Object>` 로우 위치 또는 로우
* **Returns**  `<All>` 로우에 저장해놓은 meta data

```js
let metaDataArr = dataGrid.getMetaData(0);
//------------------------------------------------------
// [
//    {value: 'value1'},
//    {value: 'value2'},
//    ...
// ]
```

### getPivotGrid()

고정 그리드가 있다면 그리드 컴포넌트를 가져옴.

* **Returns**  `<AGrid>` 고정 그리드

```js
let pivotGrid = dataGrid.getPivotGrid();
//------------------------------------------------------
// [AGrid]
```

### getRealKey( data )

**realField**로 지정된 키에 해당하는 값을 **data** 객체에서 추출하여 반환<br/>
실시간 업데이트 시 어떤 로우를 갱신해야 할지 찾는 데 사용

* **data**   `<Object>` 데이터
* **Returns**  `<String>` 실시간 키값

### getRowData( rowInx )

`rowInx`번째 로우의 데이터를 반환.

* **rowInx**  `<Number>` 로우 인덱스

```js
let result = dataGrid.getRowData();
//------------------------------------------------------
//[
//    {text: 'data1', value: 'value1'},
//    {text: 'data2', value: 'value2'},
//    ...
//]
```

### getSelectObjs()

선택된 모든 Object를 반환.

* **Returns** `<Object Array>` 선택된 객체들을 저장한 배열

```js
let result = dataGrid.getSelectObjs();
```


### getSelectRowArrs()

선택된 Object가 포함된 로우들을 배열로 반환.

* **Returns**  `<Array>` 선택 로우들을 저장한 배열

```js
let result = dataGrid.getSelectRowArrs();
```

### indexOfRowArr( rowArr )

원본 데이터 중에서 **rowArr**가 몇 번째 인덱스인지 반환

* **rowArr**   `<Array>` row array 는 object 담고 있는 1차원 배열이다.
* **Returns**  `<number>` 로우 위치

```js
let index = dataGrid.indexOfRowArr(rowArr);
```

### insertRowData( rowInx, rowData, metaData, noUpdate )

특정 위치(**rowInx**)에 새 로우를 삽입

* **rowInx**   `<Number>` 로우 인덱스
* **rowData**   `<Object>` 로우 데이터
* **metaData**  `<Object>` 로우에 저장할 meta data
* **noUpdate**  `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
// 3번째 index에 row data를 추가한다.
// 데이터 형식은 add 할 때와 같음
dataGrid.insertRowData(3, data);
```

### mergeCellData( rowInx, colInx, cellData, noUpdate )

**[rowInx, colInx]** 위치의 기존 셀 데이터와 **cellData**를 병합(merge) 처리

* **rowInx**   `<Number>` 로우 인덱스
* **colInx**   `<Number>` 컬럼 인덱스
* **cellData**   `<Object>` 셀 데이터
* **noUpdate**   `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
// [0,1] 위치의 기존 데이터와 새로운 데이터를 병합함.
dataGrid.mergeCellData(0, 1, data);
```

### mergeRowData( rowInx, rowData, noUpdate )

특정 로우의 모든 셀 데이터를 주어진 **rowData**로 병합<br/>
**rowData**는 컬럼 인덱스별로 필요한 값만 덮어씌울 수 있음

* **rowInx**   `<Number>` 로우 인덱스
* **rowData**   `<Object>` 로우 데이터
* **noUpdate**   `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
dataGrid.mergeRowData(1, data);
```

### removeAllRowData( noUpdate )

모든 데이터를 삭제.

* **noUpdate**  `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
dataGrid.removeAllRowData();
```

### removeRowData( rowInx, noUpdate )

특정 로우(`rowInx`)를 삭제.

* **rowInx**   `<Number>` 로우 인덱스
* **noUpdate**   `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
dataGrid.removeRowData(1);
```

### removeSelectObj( selObj )

선택된 데이터 객체를 저장 배열에서 제거.

* **selObj**  `<Object>` 제거할 데이터 객체
* **Returns**  `<Number>` 제거한 데이터 객체 위치(없는 경우 -1)

### renderData()

현재 인덱스, 스크롤 상태를 기준으로 화면에 표시할 데이터(`showArr2`)를 다시 렌더링

### resetInitRow()

모든 row 를 지우고 현재의 데이터와 상황에 맞게 row 를 다시 추가.

### rowIndexOfSel( selObj )

전체 데이터 중 select object가 위치한 row 의 index 를 반환.

* **selObj**   `<Object>` 선택된 객체
* **Returns**  `<number>` 로우 위치

```js
let index = dataGrid.rowIndexOfSel(selObj);
```


### setCellData( rowInx, colInx, cellData, noUpdate )

특정 셀 **[rowInx, colInx]**의 데이터를 새로운 **cellData**로 교체

* **rowInx**   `<Number>` 로우 인덱스
* **colInx**  `<Number>` 컬럼 인덱스
* **cellData**  `<Object>` 셀 데이터
* **noUpdate**  `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
//[0,1] 좌표의 셀에 데이터를 세팅한다.
dataGrid.setCellData(0, 1, data);
```


### setData( dataArr )

컴포넌트에 데이터를 세팅. 

- **dataArr** `<Array>` 컴포넌트에 세팅할 데이터 배열
```js
this.dataGrid.setData([
    [1,2,3],
    [4,5,6]
]);
```

### setGridData( dataArr, noUpdate )

데이터 배열을 세팅.<br/> 데이터만 반영할지 렌더링까지 할지도 설정 가능.

* **dataArr**  `<Array>` 데이터 배열
* **noUpdate**  `<Boolean>` 렌더링 여부 ( true:렌더링안함 / false or 생략: 렌더링까지함)

```js
//데이터 배열만 세팅하고 렌더링은 안함
dataGrid.setGridData(dataArr, true);
```


### setMetaData( row, metaData )

특정 위치의 로우에 meta data 를 저장.

* **row**  `<Number>` or `<Object>` 로우 위치 또는 로우
* **metaData** `<All>` 로우에 저장해놓을 meta data


### setPivotGrid( grid )

고정 그리드를 지정.

* **grid**  `<AGrid>` 고정 그리드로 사용할 컴포넌트

### setRealMap( realField )

**realField** 를 지정해 실시간 데이터 업데이트에 대응할 수 있도록 환경을 세팅
<br/>setQueryData 에서 사용(this.realMap 변수 설명 참조)

* **realField**  `<String>` 실시간 키 수신 필드


### setRowData( rowInx, rowData, metaData, noUpdate )

**[rowInx]** 로우 데이터를 통째로 설정(덮어쓰기)

* **rowInx**  `<Number>` 로우 인덱스
* **rowData**  `<Object>` 로우 데이터
* **metaData**  `<Object>` 로우에 저장할 meta data
* **noUpdate**  `<Boolean>` 렌더링 여부 ( true : 렌더링 안함 / false or 생략: 렌더링함)

```js
dataGrid.setRowData(0, rowData, metaData);
```


### sortColumn( colInx )

특정 컬럼(**colInx**)을 기준으로 정렬 처리<br/>
**sortInfo**, **sortColInx** 등을 활용하여 오름/내림차순을 전환

* **colInx**  `<Number>` 컬럼 인덱스

```js
dataGrid.sortColumn(1);
```

### updateDataGrid()

내부 데이터 변경사항을 스크롤 바 및 그리드 셀에 반영, 화면을 갱신

```js
dataGrid.updateDataGrid();
```

### resetColumnPos()

컬럼 이동 후 원래의 위치로 되돌림.

```js
dataGrid.resetColumnPos();
```

### enableMerge( enabled )

머지 기능을 활성화 또는 비활성화.

* **enabled** `<Boolean>` 머지 기능 활성화 여부 (**true**: 활성화, **false** : 비활성화)

```js
dataGrid.enableMerge(true);
```

### enableScrollIndicator()

스크롤 인디케이터를 활성화.

```js
dataGrid.enableScrollIndicator();
```

### getColumnWidth( colInx )

특정 컬럼의 너비를 가져옴.

* **colInx** `<Number>` 컬럼 인덱스
* **Returns** `<Number>` 컬럼 너비(px 단위)

```js
let width = dataGrid.getColumnWidth(2);
console.log(width);
```

### setColumnWidth( colInx, width )

특정 컬럼의 너비를 설정.

* **colInx** `<Number>` 컬럼 인덱스
* **width** `<String>` 컬럼 너비 (예: **"150px"**)

```js
dataGrid.setColumnWidth(2, "150px");
```

### getColumnName( colInx )

특정 컬럼의 이름을 가져옴.

* **colInx** `<Number>` 컬럼 인덱스
* **Returns** `<String>` 컬럼 이름

```js
let colName = dataGrid.getColumnName(2);
console.log(colName);
```

### setColumnName( colInx, name )

특정 컬럼의 이름을 변경.

* **colInx** `<Number>` 컬럼 인덱스
* **name** `<String>` 새로운 컬럼 이름

```js
dataGrid.setColumnName(2, "Product Name");
```

### setColumn( colIdx )

특정 컬럼을 화면에 표시.

* **colIdx** `<Number>` 컬럼 인덱스

```js
dataGrid.showColumn(2);
```

### hideColumn( colIdx )

특정 컬럼을 숨김.

* **colIdx** `<Number>` 컬럼 인덱스

```js
dataGrid.hideColumn(2);
```

### getAllColumnInfo()

모든 컬럼의 정보를 가져옴.

* **Returns** `<Object>` 컬럼 정보 객체

```js
let colInfo = dataGrid.getAllColumnInfo();
console.log(colInfo);
```

### getColumnCount()

컬럼 개수를 반환.

* **Returns** `<Number>` 컬럼 개수

```js
let count = dataGrid.getColumnCount();
console.log(count);
```

### getPivotColumnCount()

피벗 컬럼 개수를 반환.

* **Returns** `<Number>` 피벗 컬럼 개수

```js
let pivotCount = dataGird.getPivotColumnCount();
console.log(pivotCount);
```

### showHeader()

헤더를 표시.

```js
dataGrid.showHeader();
```

### hideHeader()

헤더를 숨김.

```js
dataGrid.hideHeader();
```

### showFooter()

푸터를 표시.

```js
dataGrid.showFooter();
```

### hideFooter()

푸터를 숨김.

```js
dataGrid.hideFooter();
```

### setOption( option, noOverwrite )

데이터 그리드 옵션을 설정.

* **option** `<Object>` 옵션 객체
* **noOverwrite** `<Boolean>` 기존 옵션 유지 여부 (**true**: 유지, **false**: 덮어쓰기)