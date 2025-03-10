# AGrid
> **Extends** [AComponent](https://wikidocs.net/274979)

데이터를 테이블 형식으로 표시하고 관리할 수 있는 기능을 제공. 

다양한 속성과 메서드를 통해 그리드의 동작과 외형을 제어.

## Instance Variables

### columnCount `<Number>`

그리드의 열 개수를 나타내는 속성.

### isStoppagation `<Boolean>`
그리드 컴포넌트에서 터치 이벤트가 발생할 때 해당 이벤트가 상위 컴포넌트로 전파되는지를 제어하는 역할. 
> 기본값: true

* **true**: 그리드 내에서의 터치 이벤트가 다른 UI 요소나 상위 레이아웃에 영향을 주지 않도록 하고 싶을 때 사용. 그리드 내에서 스크롤이나 셀 선택 등의 작업을 할 때 상위 레이아웃의 스크롤이 방해되지 않도록 설정.

* **false**: 그리드에서 발생한 터치 이벤트를 상위 컴포넌트에서도 처리해야 할 필요가 있을 때 사용. 예를 들어, 그리드 내에서의 터치가 전체 화면의 다른 인터랙션을 유발해야 하는 경우에 유용.

### realMap `<Object>`

특정 키에 대응하는 row 객체를 저장하는 맵으로, 수신된 리얼 데이터에서 키를 추출하여 화면을 갱신하는 데 사용.

실시간 데이터 업데이트 시, 특정 데이터를 빠르게 찾고 갱신하기 위해 사용.
### scrlManager `<ScrollManager>`
스크롤 기능을 제공하는 객체. 그리드 내에서 스크롤을 관리하고, 스크롤 이벤트를 처리하는 역할.

그리드의 스크롤 동작을 제어하고, 사용자 인터페이스의 스크롤 관련 기능을 구현하는 데 사용.
### selectedCells `<Array>`
현재 선택된 셀들의 집합을 나타내는 배열. 사용자가 그리드에서 선택한 셀들을 추적.

선택된 셀에 대한 스타일 변경, 데이터 조작 등의 작업을 수행할 때 사용.
## shiftSelectedCells `<Array>`
Shift 키를 사용하여 선택한 셀들의 목록을 나타내는 배열. 연속된 셀 선택을 관리.
    
사용자가 Shift 키를 사용하여 여러 셀을 선택할 때, 선택된 셀들을 추적하고 관리하는 데 사용.
### savedScrollPos `<Number>`
스크롤 복원값을 나타내는 숫자. 스크롤 위치를 저장하여 나중에 복원할 수 있도록 하는 역할.

사용자가 페이지를 다시 방문하거나 특정 이벤트 후에 이전 스크롤 위치로 돌아가야 할 때 사용.
### hRowTmplHeight `<Number>`
헤더 행의 높이 합을 나타내는 숫자. 그리드의 헤더 부분의 총 높이를 계산.

그리드 레이아웃을 설정할 때, 헤더의 높이를 고려하여 전체 그리드의 높이를 조정하는 데 사용.
### rowTmplHeight `<Number>`
바디 템플릿 행의 높이 합을 나타내는 숫자. 그리드의 바디 부분의 총 높이를 계산.

그리드의 바디 영역의 높이를 설정하고, 스크롤 영역을 계산하는 데 사용.
### isCheckScrl `<Boolean>`
행이 추가되거나 제거될 때 스크롤의 생성, 제거 체크 여부를 나타내는 불리언 값.
    
데이터 변경 시 스크롤바의 필요성을 자동으로 확인하고, 스크롤바를 생성하거나 제거하는 로직을 제어하는 데 사용.
## Instance Methods
### setColumnWidth(colIndex, width)
특정 열의 너비를 설정하는 데 사용. 

이 메서드를 통해 사용자는 그리드의 특정 열의 너비를 원하는 값으로 조정. 

이 기능은 그리드의 레이아웃을 사용자 정의하거나 특정 데이터에 맞게 열의 크기를 조정할 때 유용.

* **colIndex**`<Number>`: 너비를 설정할 열의 인덱스를 나타내며, 0부터 시작.
* **width:**`<Number>`: 설정할 열의 너비를 나타내며, 픽셀 단위로 지정.

```js
// 그리드 컴포넌트를 가져옴. 
const grid = this.simpleGrid; 
// 첫 번째 열의 너비를 150픽셀로 설정. 
grid.setColumnWidth(0, 150); 
// 두 번째 열의 너비를 200픽셀로 설정. 
grid.setColumnWidth(1, 200);
```
### isColumnResize()
그리드의 열이 사용자가 크기를 조정할 수 있는지 여부를 확인하는 데 사용. 

이 메서드는 열 크기 조정 기능이 활성화되어 있는지 여부를 반환.

```js
// 그리드 컴포넌트를 가져옴.
const grid = this.simpleGrid;

// 열 리사이즈 가능 여부를 확인.
const canResize = grid.isColumnResize();

if (canResize) {
    console.log("열 리사이즈가 가능합니다.");
} else {
    console.log("열 리사이즈가 불가능합니다.");
}
```
### addColumn()
그리드에 열을 추가. 마지막 열 뒤에 추가.

```js
grid.addColumn();
```

### addRow( infoArr, rowData )
그리드에 새로운 데이터를 추가하여 RowSet 객체를 생성. 

RowSet은 한 번의 addRow 호출로 추가되는 행의 그룹을 의미하며, 화면 디자인 시점에 설정.

* **infoArr** `<Array>`: RowSet 구조와 매칭되는 배열 데이터. 각 요소는 그리드의 각 셀에 대응.
* **rowData** `<All>`: 추가되는 RowSet과 함께 저장할 데이터가 있을 경우 설정.

* **Returns** `<jQuery>` 추가된 Row 그룹이 jQuery 객체로 반환.

```js
let data = [ 1, 2, 3, 'a' ];
let row = grid.addRow(data);
```

### applyBackupScroll()
그리드에 백업 스크롤을 적용. 

그리드 내부에 표현될 항목의 최대 개수와 복원 개수를 지정하여 항목을 무한히 추가하지 않고 관리할 수 있도록 해주는 역할.

* **Returns** `<Number>` 적용된 백업스크롤 위치값

```js
const result = grid.applyBackupScroll();
```

### cellAddClass( rowIdx, colIdx, className )
그리드 바디의 특정 cell 에 스타일 클래스를 추가.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **className** `<String>` 스타일 클래스명

```js
grid.cellAddClass(1,1,'ClassName);
```

### cellRemoveClass( rowIdx, colIdx, className )
그리드 바디의 특정 cell 에 스타일 클래스를 제거함.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는  엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **className** `<String>` 스타일 클래스명

```js
grid.cellRemoveClass(1,1,'ClassName');
```

### changeRowCount( count, isHead )

그리드의 행 셋 카운트를 변경.

* **count** `<Number>` 행 셋을 구성할 행의 개수
* **isHead** `<Boolean>` 헤더 여부

```js
grid.changeRowCount(2);
```

### checkScrollbar( isAdd )
스크롤바 존재 여부에 따라 headerTable 의 사이즈를 조정.

* **isAdd** `<Boolean>` 스크롤바를 추가할지 여부 결정
*  **true**: 스크롤바가 보이지 않는 경우에만 체크하여 스크롤바를 추가.
* **false**: 스크롤바가 보이는 경우에만 체크하여 스크롤바를 제거.

```js
//add 인 경우는 스크롤바가 안 보이는 경우만 체크하고
//remove 인 경우는 스크롤바가 보이는 경우만 체크한다. 
grid.checkScrollbar(true);
```

### clearAll()
그리드의 모든 텍스트와 background style을 삭제.

```js
grid.clearAll();
```

### clearContents()
그리드의 모든 텍스트를 지우는 역할.

```js
grid.clearContents();
```

### clearSelected()
선택된 셀(행)을 모두 해제.(선택되지 않은 상태로 변경)

```js
grid.clearSelected();
```

### colIndexOfCell( cell )
파라미터로 넘어온 셀의 열 인덱스를 리턴.

* **cell** `<HTMLTableCellElement>` 셀 엘리먼트
* **Returns** `<Number>`

```js
//선택된 셀의 column  index
let index = grid.colIndexOfCell(grid.getSelectedCells()[0]);
```

### createBackup( maxRow, restoreCount )
백업 시스템이 작동하도록 BackupManager 를 생성. 그리드의 데이터 백업 및 복원을 위한 설정을 초기화.

* **maxRow** `<Number>` 백업을 시작할 최대 row 개수를 지정.
* **restoreCount** `<Number>` 한번에 백업 및 복원할 row 개수를 지정.

### createRow( rowData )
행을 추가하는 다른 함수에서 내부적으로 행을 생성할 때 호출.

* **rowData** `<Object>`: 생성할 행의 데이터. 
* **Returns** `<rowSet>`: 생성된 행 셋 객체를 반환.

### decreaseColSpan( tdDom )
열이 삭제될 때 호출되는 함수. 제거 되어야 할 td가 colspan을 가지고 있다면 하나 줄여주거나 colspan을 제거.

* **tdDom** `<HTML Object>` td DOM 객체

### deselectCell( cellArr )
파라미터로 넘어온 셀 또는 row를 선택 해제 해주고 배경색을 바꿔주는 함수.

* **cellArr** `<Array or jQueryObject>` element 를 담고 있는 배열이거나 jQuery 집합 객체

### destroyBackup()
백업 시스템을 중단하고 BackupManager 를 소멸시키는 역할.

### enableScrlManager( leftSyncArea, rightSyncArea )
터치 이벤트를 핸들링하여 자체적으로 구현한 스크롤 기능을 활성화. 내부적으로 ScrollManager가 사용.

* **leftSyncArea** `<HTML Object>` 그리드가 스크롤될 때 같이 움직일 좌측 스크롤 영역.
* **rightSyncArea** `<HTML Object>` 그리드가 스크롤될 때 같이 움직일 우측 스크롤 영역.

### findRowByCellData( nCol, data )
특정 열의 특정 Object 값을 가지는 row 객체를 리턴하는 함수. 단, 최초에 찾은 행만 리턴.

* **nCol** `<Number>` 검색하고자 하는 열.
* **data** `<Object>` 검색하고자 하는 Object.
* **Returns** `<HTMLTableRowElement>` 행 엘리먼트를 반환.

```js
// 검색하고자 하는 데이터 객체를 const로 선언 
const data = '검색하고자 하는 data Object'; 
// findRowByCellData 함수의 결과를 let으로 선언하여 재할당 가능하게 함 
let row = grid.findRowByCellData(3, data);
```

### findRowByCellText( nCol, text )
특정 열의 특정 문자열 값을 가지는 row 객체를 탐색. 단, 최초에 찾은 행만 리턴.

* **nCol** `<Number>` 검색하고자 하는 열.
* **text** `<String>` 검색하고자 하는 문자열.
* **Returns** `<HTMLTableRowElement>` 행 엘리먼트를 반환.

```js
//3번째 열이 휴지인 Row를 리턴한다.
const row = grid.findRowByCellText(3, '휴지');
```

### getAllLaiedComps()
그리드의 body에 추가된 컴포넌트들을 배열로 리턴.

* **Returns** `<Array>`: 컴포넌트 배열을 반환.

### getBodyColor()
그리드 바디의 배경색을 리턴.

* **Returns** `<String>`: 배경색을 반환.

```js
const result = grid.getBodyColor();
```

### getBodyHeight( row )
그리드 바디의 특정 행의 높이를 리턴.

* **row** `<Number>` 행의 높이를 반환.

```js
//0번째 행의 높이를 구하는 방법
const result = grid.getBodyHeight(0);
```

### getCell( rowIdx, colIdx )
그리드 컴포넌트에서 특정 위치의 셀을 가져오는 기능을 제공. 

그리드의 특정 행과 열에 위치한 셀을 직접 참조할 수 있도록 하는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트.
* **colIdx** `<Number>` 셀을 가져오고자 하는 열의 인덱스.
* **Returns** `<HTMLTableCellElement>` 지정된 행과 열에 위치한 셀의 HTML 요소 반환.

```js
//그리드의 (2,3)의 cell객체를 받아온다.
const cell= grid.getCell(2,3);

//방금 추가한 row의 1번째 열의 cell 객체를 받아온다.
let row = grid.addRow([1,2,3,'abc']);
let cell = grid.getCell(row, 1);
```

### getCellData( rowIdx, colIdx )
그리드 컴포넌트의 특정 셀에 저장된 데이터를 가져오는 기능을 제공.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트.
* **colIdx** `<Number>` 데이터를 가져오고자 하는 열의 인덱스를 숫자로 지정.
* **Returns** `<All>` 지정된 행과 열에 위치한 셀의 데이터를 반환.

```js
//[3.1]위치의 cell의 data
const result = grid.getCellData(3,1);
```

### getCellHeight( cell )
셀의 높이를 리턴.

* **cell** `<Object>` 셀의 객체
*  **Returns** `<Number>` : 셀의 높이를 반환

```js
let cell = grid.getCell(1, 2);
let result = grid.getCellHeight(cell);
```

### getCellIndex( cell )
해당 셀의 Row, Column 인덱스값을 배열로 리턴.

* **cell** `<Object>` 셀의 객체.
* **Returns** `<Array>` [rowIndex, colIndex] 배열을 반환.

```js
let cell = grid.getCell(0, 1);
let result = grid.getCellIndex(cell);
// result -> [0,1]
```

### getCellPos( cell )
해당셀의 위치를 배열로 리턴.

* **cell** `<Object>` 셀의 객체
* **Returns** `<Array>` 셀의 위치 배열을 반환

```js
const result = grid.getCellPos(cell);
//result -> [1,3];
```

### getCellTag( rowIdx, colIdx )
특정 셀의 태그를 얻어오는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **Returns** `<HTML Object>` 셀의 태그를 반환

```js
//[1,1]위치의 cell의 태그
const tag = grid.getCellTag(1,1);
```


### getCellText( rowIdx, colIdx )
특정 셀의 텍스트를 얻어오는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **Returns** `<String>` 셀의 텍스트를 반환

```js
//[2,2]위치의 cell의 텍스트
const text = grid.getCellText(2,2);
```

### getColumnCount()
열의 개수를 리턴.

* **Returns** `<Number>` 열 개수를 반환.
```js
const result = grid.getColumnCount();
```

### getDataByOption( rowInfo )
파라미터로 넘어온 객체의 엘리먼트에 저장되어 있는 데이터를 리턴하는 함수.

* **rowInfo** `<jQuery Object>` 그리드 이벤트에서 넘어오는 Info
* **Returns** `<All>` 데이터를 반환

```js
//그리드 셀렉트 이벤트 리스너 함수에서 다음과 같은 방식으로 data를 받아서 사용한다.
function 화면명:onGridSelect(comp, info)
{
const data = comp.getDataByOption(info);
}
```

### getFirstRow()
그리드의 첫 번째 행을 리턴.

* **Returns** `<HTMLTableRowElement>` 행 엘리먼트를 반환

```js
const row = grid.getFirstRow();
```

### getHeadColor()
헤더의 배경색을 리턴.

* **Returns** `<String>` 배경색을 반환.
```js
const result = grid.getHeadColor();
```

### getHeaderCell( rowIdx, colIdx )
특정 인덱스의 헤더 셀을 얻어오는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **Returns** `<HTMLTableCellElement>` 셀 엘리먼트를 반환.

```js
// 그리드 헤더의 [1,3] 위치에 있는 cell
const cell = grid.getHeaderCell(1,3);
```

### getHeaderRowCount()
그리드에서 헤더 행의 개수를 리턴.

* **Returns** `<Number>` 헤더행 개수를 반환.

```js
const result = grid.getHeaderRowCount();
```

### getHeadHeight( row )
헤드의 특정 Row의 높이를 리턴.

* **row** `<Number>` 헤더 행의 인덱스
* **Returns** `<Number>` 행 높이를 반환.

```js
const result = grid.getHeadHeight(1);
```

### getHideHeaderCell()
hideThead의 특정 셀을 리턴.

* **Returns** `<HTMLTableCellElement>` 셀 엘리먼트를 반환.

```js
//[1,1]위치의 cell 객체
const cell = grid.getHideHeaderCell(1,1);
```

### getLastRow()
마지막 row 를 얻어오는 역할.

* **Returns** `<HTMLTableRowElement>` 행 엘리먼트를 반환.

```js
const row = grid.getLastRow();
```

### getRealKey( data )
데이터 중 **setRealMap**을 통해 지정한 실시간 필드명에 해당하는 값을 가져오는 역할

* **data** `<String>` 데이터
* **Returns** 실시간 키값을 반환

### getRow( rowIdx )
특정 인덱스의 row 를 얻어오는 역할.

* **rowIdx** `<Number>` 행 위치
* **Returns** `<HTMLTableRowElement>` 행 엘리먼트를 반환

```js
//1번 index의 Row
const row = grid.getRow(1);
```

### getRowCount()
row 의 개수를 리턴.

* **Returns** `<Number>` 행 개수를 반환

```js
const result = grid.getRowCount();
```

### getRowDataByIndex( rowIdx )
그리드에서 파라미터로 넘어온 Row Index로 Row에 저장해둔 Data를 리턴.

* **rowIdx** `<Number>` 행 인덱스
* **Returns** `<Row Object>` 데이터를 반환

```js
//2번째 index의 데이터를 리턴한다.
const data = grid.getRowDataByIndex(2);
```

### getRowIndexByInfo( rowInfo )
행 객체의 row index 를 리턴하는 함수.

* **rowInfo** `<jQuery Object>` 이벤트 리스너에서 넘어오는 그리드 Info
* **Returns** `<Number>` 인덱스를 반환

```js
//화면에서 등록한 그리드 select 리스너 함수에서 사용법은 다음과 같다.
function 화면명:onGridSelect(comp, info, e)
{
const index = comp.getRowIndexByInfo(info);
}
```

### getRowParentTag( cell )
그리드의 해당 셀이 tHead인지 tBody인지 판단해서 리턴.

* **cell** `<Object>` 셀의 객체
* **Returns** `<String>` tHead 또는 tBody를 반환

```js
const result = grid.getRowParentTag(cell);
//result -> 'tHead' or 'tBody'
```

### getRows( start, end )

특정 영역의 row 집합을 얻어오는 역할. 파라미터가 없으면 모든 row 집합을 리턴.

* **start** `<Number>` 시작 인덱스
* **end** `<Number>` 끝 인덱스
* **Returns** `<JQueryObject Array>` row 객체의 배열을 반환

```js
//1~5번 index의 row 객체의 배열 (파라미터를 생략하면 모든 row를 리턴한다)
const rowArr = grid.getRows(1,5);
```

### getRowSet( rowIdx )
그리드의 특정 RowSet을 리턴.

* **rowIdx** `<Number>` 행 인덱스
* **Returns** `<jQueryObject>` 행셋 객체를 반환

```js
//2번째 index의 RowSet을 리턴한다.
const rowSet = grid.getRowSet(2);
```

### getRowSetCount()
그리드 행셋의 개수 리턴.

* **Returns** `<Number>` 행셋 개수를 반환

```js
const result = grid.getRowSetCount();
```

### getScrollPos()
스크롤의 위치값을 리턴.

* **Returns** `<Number>` 스크롤 위치값을 반환

```js
const result = grid.getScrollPos();
```

### getSelectedCells()
현재 선택되어져 있는 셀들을 배열로 리턴.

* **Returns** `<Array>` 선택된 셀 배열을 반환

```js
let cellArr = grid.getSelectedCells();
let cell = cellArr[0];
```

### hideHeader()
그리드 헤더를 숨기는 역할.

```js
grid.hideHeader();
```

### indexOfCell( cell )
파라미터로 넘어온 cell 의 rowIndex 와 colIndex 값을 배열로 리턴.

* **cell** `<HTMLTableCellElement>` index 값을 알고자 하는 셀 엘리먼트
* **Returns** `<Array>` [rowIndex, colIndex] 배열을 반환

```js
// [3,1] 위치의 cell
let result = grid.indexOfCell(cell);
// 다음과 같이 배열로 리턴된다.  -> [3,1]
```

### indexOfRow( row )
파라미터로 넘어온 row 의 index 를 리턴.

* **row** `<HTMLTableRowElement>` 행 엘리먼트
* **Returns** `<Number>` 행 위치를 반환

```js
//방금 추가한 행의 index를 받아온다.
let row = grid.addRow(data);
let index = grid.indexOfRow(row);
```

### insertDefaultCell( table, row, col, isAfter )
기본셀을 추가하는 함수. 열을 삽입하는 함수에서 호출해서 사용.

* **table** `<String>` 영역(showThead, hideThead, tBody)
* **row** `<Number>` 행 인덱스
* **col** `<Number>` 열 인덱스
* **isAfter** `<Boolean>` 셀을 현재 위치의 뒤에 추가할지(true) 앞에 추가할지(false)를 결정

### insertRow( nRow, infoArr, rowData )
그리드의 특정 row 앞에 infoArr 를 추가.

* **nRow** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **infoArr** `<Array>` 새로 추가될 행을 구성하는 데이터 배열. 이 배열은 행의 각 셀에 들어갈 데이터를 포함
* **rowData** `<All>` 행에 저장할 추가적인 데이터
* **Returns** `<jQueryObject>` 새로 추가된 행의 jQueryObject를 반환

```js
let infoArr = [1,2,3,'abc'];
//10번째 index의 Row앞에 Row를 추가함.
grid.insertRow(10, infoArr);

//특정 Row(해당 grid의 특정 Row Object라고 가정한다.) 앞에 Row를 추가함
let row = grid.getRow(9);
grid.insertRow(row, infoArr);
```

### insertSingleCol( colIndex, isAfter )
그리드의 해당 열 위치에 열을 삽입.

* **colIndex** `<Number>` 새로운 열이 삽입될 위치의 인덱스를 지정
* **isAfter** `<Boolean>` 새로운 열을 현재 위치의 뒤에 삽입할지(true) 앞에 삽입할지(false)를 결정

```js
//1번 열의 다음에 새로운 열을 삽입한다.
grid.insertSingleCol(1, true);

//1번 열의 이전에 새로운 열을 삽입한다.
grid.insertSingleCol(1, false);
```

### insertSingleRow( rowIndex, isAfter, isHead )
그리드의 특정 위치에 행을 삽입.

지정된 인덱스의 행 앞이나 뒤에 새로운 행을 추가할 수 있으며, 헤더인지 바디인지도 지정 가능.

* **rowIndex** `<Number>` 행 인덱스
* **isAfter** `<Boolean>` true일 경우 인덱스 뒤에, false일 경우 앞에 삽입.
* **isHead** `<Boolean>` true일 경우 헤더에, false일 경우 바디에 삽입.

```js
grid.insertSingleRow(2);
```

### isHeadCell( cell )
해당 셀이 헤더의 셀인지 여부를 체크하여 반환.

* **cell** `<Object>` 셀의 객체
* **Returns** `<Boolean>` 헤더 셀인지 여부를 반환

```js
const result = grid.isHeadCell(cell);
```

### isMoreScrollBottom()
하단으로 추가적인 스크롤이 가능한지 여부를 반환.

* **Returns** `<Boolean>`추가적인 스크롤 가능 여부를 반환

```js
const result = grid.isMoreScrollBottom();
```

### isMoreScrollTop()
상단으로 추가적인 스크롤이 가능한지 여부를 반환.

* **Returns** `<Boolean>` 추가적인 스크롤 가능 여부를 반환

```js
const result = grid.isMoreScrollTop();
```

### isScroll()
현재 스크롤이 가능한 상태인지 여부를 반환.

* **Returns** `<Boolean>` 스크롤 가능 여부를 반환

```js
const result = grid.isScroll();
```

### isScrollBottom()
현재 그리드의 스크롤이 가장 하단인지 여부를 반환.

* **Returns** `<Boolean>` 스크롤이 하단인지 여부를 반환

```js
const result = grid.isScrollBottom();
```

### isScrollTop()
현재 스크롤의 위치가 가장 상단인지 여부를 반환.

* **Returns** `<Boolean>` 스크롤이 상단인지 여부를 반환

```js
const result = grid.isScrollTop();
```

### layComponent( acomp, row, col, width, height )
특정 셀(row,col)에 컴포넌트를 추가. 셀을 지정하지 않으면 빈 자리에 추가.

* **acomp** `<Object>` 추가 컴포넌트 객체
* **row** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 객체.
* **col** `<Number>` 열 인덱스
* **width** `<String>` 가로 크기. 생략 시 100%로 설정.
* **height** `<String>` 세로 크기. 생략 시 100%로 설정.

```js
grid.layComponent(btn, 2, 1);
const row = grid.addRow(data);
grid.layComponent(btn, row, 2);
```

### layHeaderComponent( acomp, row, col, width, height )
특정 헤더(row,col)에 컴포넌트를 추가.

* **acomp** `<AComponent>` 추가할 컴포넌트 객체
* **row** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 객체
* **col** `<Number>` 열 인덱스
* **width** `<String>` 가로 크기. 생략시 100%로 설정
* **height** `<String>` 세로 크기. 생략시 100%로 설정

```js
grid.layHeaderComponent(btn, 2, 1);
```

### loadCellView( rowIdx, colIdx, url )
해당 셀에 view를 생성하고 레이아웃 URL을 로드. 이를 통해 셀 안에 다른 레이아웃을 삽입 가능.

* **rowIdx** `<Number>` 뷰를 로드할 셀이 위치한 행의 인덱스
* **colIdx** `<Number>` 뷰를 로드할 셀이 위치한 열의 인덱스
* **url** `<String>` 로드할 레이아웃의 URL
* **Returns** `<AView>` 로드된 뷰 객체를 반환

```js
const view = grid.loadCellView(1,1,'view/name.lay');
```

### mergeCol( row, col, span )
그리드 바디의 특정 열을 병합. 여러 셀을 하나의 셀로 합쳐서 표시할 때 사용.

* **row** `<Number>` 병합할 셀이 위치한 행의 인덱스
* **col** `<Number>` 병합할 셀이 시작되는 열의 인덱스
* **span** `<Number>` 병합할 열의 개수

```js
grid.mergeCol(2,1,3);
```

### mergeHeadCol( row, col, span )
그리드 헤더의 특정 열을 병합. 헤더의 여러 셀을 하나로 합쳐서 표시할 때 사용.

* **row** `<Number>` 병합할 셀이 위치한 헤더 행의 인덱스
* **col** `<Number>` 병합할 셀이 시작되는 열의 인덱스
* **span** `<Number>` 병합할 열의 개수

```js
grid.mergeHeadCol(2,1,3);
```

### mergeHeadRow( row, col, span )
그리드 헤더의 특정 행을 병합. 여러 행을 하나로 합쳐서 표시할 때 사용.

* **row** `<Number>` 병합할 셀이 시작되는 행의 인덱스
* **col** `<Number>` 병합할 셀이 위치한 열의 인덱스
* **span** `<Number>` 병합할 행의 개수

```js
grid.mergeHeadRow(2,1,3);
```

### mergeRow( row, col, span )
그리드 바디의 특정 행을 병합. 여러 셀을 하나의 셀로 합쳐서 표시할 때 사용.

* **row** `<Number>` 병합할 셀이 시작되는 행의 인덱스
* **col** `<Number>` 병합할 셀이 위치한 열의 인덱스
* **span** `<Number>` 병합할 행의 개수

```js
grid.mergeRow(2,1,3);
```

### moveRow( fromRow, toRow )
특정 행을 다른 위치로 이동. 행의 순서를 변경할 때 유용.

* **fromRow** `<Number or HTMLTableRowElement>` 이동할 행의 인덱스 또는 행 엘리먼트.
* **toRow** `<Number or HTMLTableRowElement>` 행을 이동시킬 목표 위치의 인덱스 또는 행 엘리먼트.

```js
grid.moveRow(3, 0);
```

### prependRow( infoArr, rowData )
rowData 를 그리드에 상단에 추가.

* **infoArr** `<Array>` 행셋을 구성하는 배열 데이터
* **rowData** `<All>` 행에 저장할 데이터
* **Returns** `<jQueryObject>` 추가된 행 jQueryObject를 반환

```js
let data = [1,2,3,'abc'];
let row = grid.prependRow(data);
```

### regCellEvent( $evtEle )
셀의 이벤트를 등록할 때 호출하는 함수.

* **$evtEle** `<jQuery Object>`: 이벤트 등록에서 예외적으로 dom element 가 아닌 jQuery 객체를 사용

### removeAll()
그리드의 모든 row 를 제거.

```js
grid.removeAll();
```

### removeColumn( colIdx )
그리드의 특정 열을 삭제.

* **colIdx** `<Number>` 열 인덱스

```js
grid.removeColumn(3);
```

### removeFirst()
첫번째 row를 제거.

```js
grid.removeFirst();
```

### removeHeaderRow( rowIdx )
그리드 헤더의 특정 Row를 제거.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트.

```js
grid.removeHeaderRow(1);
```

### removeLast()
마지막 Row를 제거.

```js
grid.removeLast();
```

### removeRow( rowIdx )
특정 row 를 그리드에서 제거.

row 인덱스나 row 엘리먼트를 사용하여 특정 row를 삭제 가능.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트

```js
grid.removeRow(1);

const row = grid.addRow(data);
grid.removeRow(row);
```

### removeRowSet( rowIdx )

특정 위치의 rowset을 제거하는 함수. 여러 row로 구성된 그룹을 의미.

* **rowIdx** `<Number>` 삭제하고자 하는 rowset 의 위치

```js
grid.removeRowSet(1);
```

### restoreScrollPos()
저장해둔 그리드의 위치로 스크롤. 이전에 저장된 스크롤 위치로 돌아가야 할 때 사용.

```js
grid.restoreScrollPos();
```

### rowIndexOfCell( cell )
파라미터로 넘어온 셀의 row index 를 반환. 셀의 위치를 파악할 때 유용.

* **cell** `<HTMLTableCellElement>` 셀 엘리먼트
* **Returns** `<Number>` 셀의 row 인덱스를 반환

```js
const index = grid.rowIndexOfCell(grid.getSelectedCells()[0]);
```

### saveScrollPos()
현재의 그리드 위치를 저장. 이후에 restoreScrollPos()를 사용하여 저장된 위치로 돌아갈 수 있음.

```js
grid.saveScrollPos();
```

### scrollIntoArea( row, isAlignTop )
파라미터로 넘어온 row 객체가 보이도록 그리드를 스크롤. 

row를 상단 또는 하단에 맞춰 스크롤 가능.

* **row** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **isAlignTop** `<Boolean>` row를 상단으로 해서 보일지 여부를 결정(false 일 경우 하단)

```js
const row = grid.getRow(1);
grid.scrollIntoArea(row);
grid.scrollIntoArea(1);
```

### scrollOffset( offset )
그리드를 현 위치에서 offset 만큼 스크롤.

양수는 아래로, 음수는 위로 스크롤.

* **offset** `<Number>` 스크롤 시킬 값

```js
grid.scrollOffset(100);
grid.scrollOffset(-100);
```

### scrollTo( pos )
그리드를 pos 의 위치로 스크롤. 특정 위치로 스크롤 할 때 사용.

* **pos** `<Number>` 스크롤의 위치값.

```js
grid.scrollTo(0);
grid.scrollTo(50);
```

### scrollToBottom()
그리드를 최하단의 위치로 스크롤. 그리드의 끝으로 이동할 때 사용.

```js
grid.scrollToBottom();
```

### scrollToCenter()
그리드를 중앙의 위치로 스크롤. 그리드의 중간으로 이동할 때 사용.

```js
grid.scrollToCenter();
```

### scrollToTop()
그리드를 최상단의 위치로 스크롤. 그리드의 시작으로 이동할 때 사용.

```js
grid.scrollToTop();
```

### selectCell( cellArr, e )
특정 cell 또는 row 를 선택된 상태로 변경.(중복, 연속 선택 가능)

* **cellArr** `<Array or jQueryObject>` 선택할 셀이나 행을 담고 있는 배열 또는 jQuery 객체
* **e** `<Object>` 선택 이벤트와 관련된 객체로, 이벤트 핸들링 시 사용

```js
const row = grid.getRow(0);
grid.selectCell(row);
```

### setBodyColor( color )
그리드 바디의 배경색을 설정.

* **color** `<String>` CSS의 background-color속성에 사용할 색상 값. 예를 들어, #000000은 검정색을 의미

```js
grid.setBodyColor('#000000');
```

### setBodyHeight( bodyHeight )
그리드 바디의 높이를 변경.

* **bodyHeight** `<String>` 그리드 바디의 높이를 설정할 값. 이 값은 픽셀(px), 퍼센트(%), 또는 다른 CSS 단위로 지정

```js
grid.setBodyHeight('50px');
```

### setCellBgColor2( cell, color )
해당 셀의 백그라운드 색상을 지정.

* **cell** `<Object>` 배경색을 변경할 셀의 객체
* **color** `<String>` RGB 색상 값으로, 셀의 배경색을 설정

```js
const cell = grid.getCell(1, 1);
grid.setCellBgColor2(cell, '#000000');
```

### setCellData( rowIdx, colIdx, data )
그리드 바디의 특정 셀의 데이터를 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 데이터 변경을 원하는 행의 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 데이터 변경을 원하는 열의 인덱스
* **data** `<All>` 셀에 설정할 데이터

### setCellHAlign( cell, align )
특정 셀의 텍스트 정렬을 설정.

* **cell** `<Object>` 텍스트 정렬을 변경할 셀의 객체
* **align** `<String>` CSS의 text-align 속성 값으로, left, center, right 중 하나를 사용

```js
const cell = grid.getCell(1, 2);
grid.setCellHAlign(cell, 'center');
```

### setCellHeight( cell, height )
셀의 높이를 변경. Row 전체가 바뀌어야 되므로 내부적으로 td 대신 tr의 높이를 변경.

* **cell** `<Object>` 높이를 변경할 셀의 객체
* **height** `<String>` 셀의 높이를 설정할 값으로, 픽셀(px), 퍼센트(%), 또는 다른 CSS 단위로 지정

```js
const cell = grid.getCell(1, 2);
grid.setCellHeight(cell, '10%');
grid.setCellHeight(cell, 100);
grid.setCellHeight(cell, '100px');
```

### setCellStyle( rowIdx, colIdx, key, value )
바디 부분의 특정 셀의 특정 스타일을 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 스타일을 변경할 셀의 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 스타일을 변경할 셀의 열 인덱스
* **key** `<String>` 변경할 스타일의 속성 이름. 예를 들어 background-color
* **value** `<String>` 스타일 속성에 설정할 값

```js
grid.setCellStyle(1,1,{'background-color':'black'});
```

### setCellTag( rowIdx, colIdx, tag )
그리드 바디의 특정 셀 태그를 변경.

* `rowIdx` `<Number or HTMLTableRowElement>` 태그를 변경할 셀의 행 인덱스 또는 행 엘리먼트
* `colIdx` `<Number>` 태그를 변경할 셀의 열 인덱스
* `tag` `<HTML Object>` 변경될 HTML 태그 객체

```js
//[1,1]위치의 cell의 tag를 변경한다.
const = 'html tag....';
grid.setCellTag(1,1, tag)
```

### setCellText( rowIdx, colIdx, txt )
그리드 바디의 특정 cell 텍스트를 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 텍스트를 변경할 셀의 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 텍스트를 변경할 셀의 열 인덱스
* **txt** `<String>` 설정할 텍스트

```js
//그리드 [1,1]위치의 body cell 텍스트를 '휴지'로 지정한다.
grid.setCellText(1,1,'휴지');
```

### setCellTextColor( rowIdx, colIdx, color )
그리드 바디의 특정 cell의 텍스트 색상을 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 텍스트 색상을 변경할 셀의 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 텍스트 색상을 변경할 셀의 열 인덱스
* **color** `<String>` 설정할 텍스트 색상(RGB 값)

```js
//그리드의 [0,3]위치의 셀의 색상을 변경한다.
grid.setCellTextColor(0,3,'#000000');
```

### setCellTextColor2( cell, color )
해당 셀의 텍스트 컬러를 변경. 이 함수는 셀의 인덱스가 아닌 셀의 객체를 이용.

* **cell** `<Object>` 텍스트 색상을 변경할 셀의 객체
* **color** `<String>` 설정할 텍스트 색상(RGB 값)

```js
//셀의 컬러를 변경한다.
const cell = grid.getCell(0, 0);
grid.setCellTextColor2(cell, '#000000');
```

### setCellVAlign( cell, align )
특정 셀의 수직 정렬을 설정.

* **cell** `<Object>` 수직 정렬을 변경할 셀의 객체
* **align** `<String>` CSS의 vertical-align 속성 값으로, top, middle, bottom 중 하나를 사용

```js
const cell = grid.getCell(1, 2);
grid.setCellVAlign(cell, 'middle');
```

### setFlexibleRow( enable )
행의 높이를 행 개수에 맞게 균등 변경되도록 설정하는 함수.
 
단, 특정 셀에 필요한 높이가 최소 높이가 작은 경우 동일한 높이로 표현불가. 

또한 행의 높이가 최소 높이가 된 경우에는 더 이상 작아지지 않음.

* **enable** `<Boolean>` true로 설정하면 행 높이가 자동으로 조정. false로 설정하면 자동 조정이 비활성화

```js
grid.setFlexibleRow(true);
```

### setHeadColor( color )
그리드 헤더의 배경색을 설정.

* **color**`<String>` CSS의 background-color 속성에 사용할 색상 값

```js
grid.setHeadColor('#000000');
```

### setHeaderCellText( rowIdx, colIdx, txt )
그리드 헤더의 특정 cell 텍스트를 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 텍스트를 변경할 셀의 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 텍스트를 변경할 셀의 열 인덱스
* **txt** `<String>` 설정할 텍스트

```js
//[2,2]위치의 header cell의 text를 '휴지'로 지정한다.
grid.setHeaderCellText(2,2,'휴지');
```

### setHeadHeight( headHeight )

헤더의 높이를 변경.

* **headHeight** `<String>` 헤더의 높이를 설정할 값. 이 값은 픽셀(px) 또는 다른 CSS 단위로 지정

```js
grid.setHeadHeight('50px');
```

### setRealMap( realKey )

리얼맵이 작동하도록 환경을 세팅. setQueryData 에서 사용.

* **realKey** `<String>` 리얼맵을 작동시키기 위한 키 값

### setRow( rowInx, rowData, start, end )

특정 행의 텍스트를 세팅.

* **rowInx** `<Number>` 텍스트를 설정할 행의 인덱스
* **rowData** `<Array>` 설정할 텍스트 배열
* **start** `<Number>` 시작 열 인덱스. 생략하면 행 전체에 적용
* **end** `<Number>` 종료 열 인덱스

```js
//1번 행의 텍스트를 각각[1,2,3]으로 지정
grid.setRow(1, [1,2,3]);
```

### setRowByObj( rowInx, rowData, start, end )

그리드의 특정 행의 텍스트와 타입을 세팅.

* **rowInx** `<Number>` 텍스트와 타입을 설정할 행의 인덱스
* **rowData** `<Array>` 설정할 오브젝트 배열
* **start** `<Number>` 시작 열 인덱스. 생략하면 행 전체에 적용
* **end** `<Number>` 종료 열 인덱스

```js
let data = [
  { text: 'abc', type:'checkbox', checked:true },
  { text: 'def', type:'checkbox', checked:false },
  { text: 'qqq', type:'checkbox', checked:false }
];
grid.setRowByObj(1, data);
```

### setScrollArrow( headHeight )

주로 모바일에서 사용되는 함수. 스크롤 표시가 없을 시 위, 아래 스크롤 아이콘을 표시.

* **headHeight** `<Number>` 스크롤을 표시할 top 위치값

```js
//파라미터를 생략하고 헤더를 숨기는 그리드 옵션을 활성화 할때 top을 0으로 세팅.
grid.setScrollArrow();
```

### setScrollComp( acomp )
그리드 스크롤과 관계되어 있는 컴포넌트를 세팅. 

그리드가 스크롤 될 때 세팅된 컴포넌트의 상하 위치값을 변경하여 같이 스크롤되는 것처럼 보이게 하는 역할.

단, enableScrlManager 가 호출된 경우에만 작동.

* **acomp** `<AComponent>` 스크롤과 연동할 컴포넌트
### showHeader()
그리드의 헤더를 보이게 하는 역할.

### splitCell( row, col )
그리드 바디의 특정 cell의 병합을 모두 해제.

* **row** `<Number>` 병합을 해제할 셀의 행 인덱스
* **col** `<Number>` 병합을 해제할 셀의 열 인덱스
```js
//그리드 바디[2,1] 좌표의 cell의 병합을 모두 해제한다.
grid.splitCell(2,1);
```

### splitCol( row, col )
그리드 바디의 특정 셀의 세로 병합을 해제.(colspan만 제거.)

* **row** `<Number>` 세로 병합을 해제할 셀의 행 인덱스
* **col** `<Number>` 세로 병합을 해제할 셀의 열 인덱스

```js
//그리드 바디 [1,1] 의 세로 병합을 해제함
grid.splitCol(1,1);
```

### splitHeadCell( row, col )
그리드 헤더의 병합된 셀을 모두 분리.

* **row** `<Number>` 병합을 해제할 셀의 행 인덱스
* **col** `<Number>` 병합을 해제할 셀의 열 인덱스

```js
//그리드 헤더 [2,1] 좌표의 cell의 병합을 모두 해제한다.
grid.splitHeadCell(2,1);
```

### splitRow( row, col )
그리드 바디의 특정 cell의 가로병합을 해제. (rowspan만 제거)

* **row** `<Number>` 가로 병합을 해제할 셀의 행 인덱스
* **col** `<Number>` 가로 병합을 해제할 셀의 열 인덱스

```js
//그리드 바디 [1,1] 의 가로 병합을 해제함
grid.splitRow(1,1);
```

### getCellComps( row, col )
하나의 셀에 들어있는 컴포넌트 배열을 리턴.

* **row** `<Number or HTMLTableRowElement>` 컴포넌트를 얻고자 하는 셀의 행 인덱스 또는 행 엘리먼트
* **col** `<Number>` 컴포넌트를 얻고자 하는 셀의 열 인덱스
* **Returns** `<Array>` 컴포넌트 배열

```js
const arr = grid.getCellComps(1,1);
```


### getColumnComps( colInx )
특정 열 위치의 모든 셀을 조사하여 들어있는 컴포넌트 목록을 가져오는 역할.

* **col** `<Number>` 컴포넌트를 얻고자 하는 열 인덱스
* **Returns** `<Array>` 컴포넌트 목록

```js
const arr = grid.getColumnComps(0);
```

### getDataMask( rowIdx, colIdx, maskIdx )
셀에 세팅한 ADataMask 인스턴스 또는 마스킹(데이터를 가공하는) 함수와 파라미터를 얻어오는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 마스킹 정보를 얻고자 하는 셀의 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 마스킹 정보를 얻고자 하는 셀의 열 인덱스
* **maskIdx** `<Number>` 마스킹 함수의 위치값

**Returns** `<ADataMask or Array>` 인스턴스 또는 배열
* maskIdx를 지정하지 않은 경우: ADataMask 인스턴스
* **maskIdx**를 지정한 경우: 해당 위치 마스킹 함수, 해당 위치 마스킹 파라미터

```js
grid.getDataMask(0, 0, 0); //[ ADataMask.Number.money.func, undefined ]
grid.getDataMask(0, 0); //ADataMask 인스턴스
```

### enableScrollIndicator()
커스텀 스크롤바를 스크롤 영역에 표현하여 스크롤을 표현. 

프로젝트 전체적으로 커스텀 스크롤바를 사용하고 싶은 경우에는 컴포넌트의 함수 대신 afc.enableScrollIndicator(); 함수를 호출.

```js
grid.enableScrollIndicator();
```

### getRowData( row )
해당 행에 저장된 데이터를 가져오는 역할.

* **row** `<Number or HTMLTableRowElement>` 숫자가 아닌 row 객체가 됨.
* **Returns** `<All>` 행에 저장된 데이터

```js
grid.setRowData(0, "rowdata");
grid.getRowData(0); //"rowdata"
```

### setRowData( row, rowData )
해당 행에 데이터를 저장.

* **row** `<Number or HTMLTableRowElement>` 숫자가 아닌 row 객체가 됨.
* **rowData** `<All>` 행에 저장할 데이터

```js
grid.setRowData(0, "rowdata");
grid.getRowData(0); //"rowdata"
```

### isHeadCell( cell )
헤더 셀여부를 가져오는 역할.

* **cell** `<HTMLTableCellElement>` 셀 엘리먼트
* **Returns** `<Boolean>` 헤더 셀여부

### setHeaderCellStyle( rowIdx, colIdx, key, value )
헤더 부분의 특정 셀의 특정 스타일을 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **key** `<String>` 스타일 키
* **value** `<String>` 스타일 값

### setHeaderCellStyleObj( rowIdx, colIdx, obj )
헤더 부분의 특정 셀의 스타일을 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **obj** `<Object>` 스타일 객체

### getHeaderCellStyle( rowIdx, colIdx, key )
헤더 부분의 특정 셀의 스타일 값을 가져오는 역할.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **key** `<String>` 스타일 키
* **Returns** `<String>` 스타일 값

### setCellStyleObj( rowIdx, colIdx, obj )
바디 부분의 특정 셀의 스타일을 변경.

* **rowIdx** `<Number or HTMLTableRowElement>` 행 인덱스 또는 행 엘리먼트
* **colIdx** `<Number>` 열 인덱스
* **obj** `<Object>` 스타일 객체

### hideColumn( colIdx )
해당 열을 숨기는 역할.

* **colIdx** `<Number>` 열 위치

### showColumn( colIdx )
해당 열을 보여주는 역할.

* **colIdx** `<Number>` 열 위치

### isColumnHided()
열 숨기기 여부를 가져오는 역할.

* **Returns** `<Boolean>` 열 숨김 여부

### toggleColumn( colIdx )
해당 열의 보임 여부에 따라 열을 숨기거나 보여주는 역할.

* **colIdx** `<Number>` 열 위치

### setRotateColumns( colIdxArr )

여러 열을 돌아가며 보여주고 싶을 때 설정하는 함수. 

[rotateColumns](#rotatecolumns-index) 함수를 호출하면 colIdxArr 안의 열위치 순서대로 보여줌.

* **colIdxArr** `<Number Array>` 열 위치 배열
* **Returns** `<Number>` 그리드에 로테이트 설정된 순서

```js
//3, 4, 5번째 열을 돌아가며 보여주는 설정
const index = this.grid.setRotateColumns([3,4,5]);
this.grid.rotateColumns(index);
```

### rotateColumns( index )

[setRotateColumns](#setrotatecolumns-colidxarr) 함수를 이용해 로테이트를 설정한 정보에 맞게 여러 열을 돌아가며 보여주는 함수.

* **index** `<Number>` 그리드에 로테이트 설정된 순서

```js
//3, 4, 5번째 열을 돌아가며 보여주는 설정
const index = this.grid.setRotateColumns([3,4,5]);
this.grid.rotateColumns(index);
```

### removeRotateColumns( index )
그리드에 로테이트 설정된 순서에 해당하는 정보를 제거. 

설정하면서 숨겨졌던 열은 모두 보임처리되며 이후 설정된 순서는 갱신되지 않음.

예를 들어 2,3열 4,5열을 각각 로테이트 설정한 경우 2,3열의 순서는 0이고 4,5열의 순서는 1. 

2,3열에 해당하는 순서 0의 로테이트 정보를 제거하더라도 4,5열의 순서 1은 0으로 변경되지 않음.

* **index** `<Number>` 제거할 로테이트 설정 순서

```js
let rotate1 = this.grid.setRotateColumns([2,3]);
let rotate2 = this.grid.setRotateColumns([4,5]);
this.grid.removeRotateColumns(rotate1);

//먼저 설정한 rotate1 을 제거하더라도 rotate2는 그대로 사용가능하다.
this.grid.rotateColumns(rotate2);
```

### isScroll()

상하 스크롤이 생긴 상태인지 가져오는 역할.

* **Returns** `<Boolean>` 상하 스크롤 유무

### setData( data )

컴포넌트에 데이터를 세팅.

- **data** `<Array>` 데이터 배열
    * [ [1,2,3], [4,5,6] ]
    * [ {col1: 1, col2: 2, col3: 3}, {col1: 4, col2: 5, col3: 6} ]

```js
//배열의 순서대로 데이터가 세팅된다.
this.grid.setData([ [1,2,3], [4,5,6] ]);

//그리드의 각 셀에 name 속성을 넣은 경우에는 아래와 같이 사용한다.
//name 속성을 넣지 않은 경우 Object 키 순서대로 데이터가 세팅된다.
this.grid.setData([ {col1: 1, col2: 2, col3: 3}, {col1: 4, col2: 5, col3: 6} ])
```

### setDirectBackup( isDirect )
createBackup 을 호출하여 백업매니저를 사용하는 경우 행을 추가되는 순간 화면에 표시되지 않고 바로 백업되도록 하는 역할. 

addRow 인 경우만 유효

* **isDirect** `<Boolean>` 바로 백업 처리 여부

```js
//반드시 BackupManager를 Default Load Settings 에서 체크를 해줄 것!
this.grid.createBackup(50, 20);
for(let i=0; i<100; i++) this.grid.addRow([i, i, i]);
//setDirectBackup 호출 이전의 addRow 와 이후의 addRow 호출시 화면에서 행 추가되는것을 확인해본다.
this.grid.setDirectBackup(true);
for(; i<110; i++) this.grid.addRow([i, i, i]);
```

### showGridMsg( isShow, msg )
그리드 내부에 메시지를 표현하는 함수. 주로 데이터가 없는 경우에 사용.

* **isShow** `<Boolean>` 보임 여부
* **msg** `<String>` 표현할 메시지 기본 : "no data"

```js
this.grid.showGridMsg(true);
this.grid.showGridMsg(false);
```

### setSortFunc( func )
열을 정렬할 때 값을 비교할 함수를 지정.

* **func** `<Function>` 정렬함수

```js
this.grid.setSortFunc(function(a, b)
{
    if(a < b) return -1;
    else if(a > b) return 1;
    else return 0;
})
this.grid.sortColumn(0);
```

### sortColumn( colInx, isAsc )
열을 정렬.

* **colInx** `<Number>` 열 위치
* **isAsc** `<Boolean>` 오름차순 여부 false: 내림차순

```js
this.grid.sortColumn(0, true);
```

### overscrollBehavior( disableScrlManager )
그리드의 enableScrlManager 를 호출한 상태에서 그리드의 스크롤이 상단 또는 하단에 이르러서 더이상 스크롤이 되지 않을 때 부모 엘리먼트의 스크롤이 되어야 할때 호출하는 함수.

단, 상위 컴포넌트에도 enableScrlManager 가 호출되어있어야 제대로 동작.

* **disableScrlManager** 부모 엘리먼트 스크롤 매니저

```js
let scrlMgr = this.view.enableScrlManagerY();
this.grid.enableScrlManager();
this.grid.overscrollBehavior(scrlMgr);
```

## Events
### dblclick( comp, info, e )
더블 클릭시 호출.

* **comp** `<AComponent>` 컴포넌트
* **info** `<jQuery Object>` 행 또는 cell의 jQuery객체
* **e** `<Object>` 이벤트 정보

### longtab( comp, info, e )
롱탭시 호출.

* **comp** `<AComponent>` 컴포넌트
* **info** `<jQuery Object>` 행 또는 cell의 jQuery객체
* **e** `<Object>` 이벤트 정보

### scrollbottom( comp, info, e )
그리드의 스크롤이 가장 아래에 도달하면 호출.

* **comp** `<AComponent>` 컴포넌트
* **info** `<String>` null
* **e** `<Object>` 이벤트 정보

### scrolltop( comp, info, e )
그리드의 스크롤이 가장 위에 도달하면 호출.

* **comp** `<AComponent>` 컴포넌트
* **info** `<String>` null
* **e** `<Object>` 이벤트 정보

### select( comp, info, e )
그리드의 행 또는 셀을 선택 시 호출.

* **comp** `<AComponent>` 컴포넌트
* **info** `<Object>` 행 또는 cell의 jQuery객체
* **e** `<Object>` 이벤트 정보