# AGridLayout

> **Extends** ALayout

그리드 레이아웃을 제공하는 `ALayout` 확장 컴포넌트.  

> 동적으로 행과 열을 추가/삭제하고, 셀 병합, 크기 조절 등의 기능을 통해 유연한 레이아웃 구성이 가능

<br/>


## Instance Methods



### createLayout( rowCount, colCount, rowSizeArr, colSizeArr )

그리드 레이아웃의 기본 행(Row)과 열(Column)을 생성

> 각 행과 열의 크기는 배열(rowSizeArr, colSizeArr)을 통해 개별적으로 설정 가능

-   **rowCount**  로우의 개수
    
-   **colCount**  컬럼의 개수
    
-   **rowSizeArr**  로우의 사이즈 배열
    
-   **colSizeArr**  컬럼의 사이즈 배열

```js
const gridLayout = new AGridLayout(); 
gridLayout.createLayout(3, 3, 
	[50, 70, 100], 
	[100, 120, 150]
); 
// 3x3 그리드를 만들고, 행과 열의 크기를 각각 설정
```

### updatePosition( pWidth, pHeight )

레이아웃의 크기가 변경될 때 호출되며, **ResizeManager**를 통해 크기를 자동 조정

-   **pWidth**  부모 요소의 너비
    
-   **pHeight**  부모 요소의 높이
    
```js 
gridLayout.updatePosition(500, 400); 
// 부모 요소의 크기를 500x400으로 조정
```
### getRowCount()

현재 그리드 레이아웃에 포함된 행(Row)의 개수를 반환

```js 
const rowCount = gridLayout.getRowCount(); 
console.log(rowCount); // 현재 행 개수 출력
```


### getColumnCount()

현재 그리드 레이아웃에 포함된 열(Column)의 개수를 반환

```js
const colCount = gridLayout.getColumnCount(); 
console.log(colCount); // 현재 열 개수 출력
```

### convertColInfo()

**colgroup** 내에서 width 속성을 설정하는 방식으로 변환


### eachChild( callback, isReverse )

레이아웃 내 모든 컴포넌트에 대해 콜백 함수를 실행

-   **callback**  각 컴포넌트에 실행할 함수
    
-   **isReverse**  역순으로 실행할지 여부


### getAllLayoutComps()

레이아웃 내 모든 컴포넌트 객체를 배열로 반환


### setColsDivPercent()

컬럼 크기를 퍼센트 단위로 설정

### setRowsDivPercent()

로우 크기를 퍼센트 단위로 설정


### getCell( row, col )

특정 포지션의 cell을 반환


<hr>
   

### getCellAlign( row, col )

그리드 레이아웃 특정 위치의 셀의 text-align 값을 반환

-   **row** `<Number>` row 인덱스
    
-   **col** `<Number>` col 인덱스

### getCellPadding( row, col )

특정 포지션 셀의 Padding 값을 반환

-   **row** `<Number>` row 인덱스
    
-   **col** `<Number>` col 인덱스
    
### getCellValign( row, col )

특정 포지션 셀의 verticalAlign 값을 반환.

-   **row** `<Number>` row 인덱스
    
-   **col** `<Number>` col 인덱스

### getColGroupItem( col )

그리드 레이아웃의 컬럼그룹을 반환.

-   **row** `<Number>` row 인덱스
    
-   **col** `<Number>` col 인덱스

### getColGroupItems()

그리드 레이아웃의 컬럼의 개수를 반환.


### getCols()

컬럼의 개수를 반환.



### getColSize( col )

특정 컬럼의 너비값을 반환.



### getLayoutAlign()

레이아웃의 text-align값을 반환.



### getLayoutComp( row, col )

특정 인덱스의 컴포넌트를 반환.

-   **row** `<Number>` row 인덱스
    
-   **col** `<Number>` col 인덱스

### getLayoutPadding()

레이아웃의 Padding 값을 반환.


### getRow( row )

특정 인덱스의 로우를 반환.

<br/>

### getRows()

그리드 레이아웃 전체 로우의 개수를 반환.



### getRowSize( row )

특정 로우의 높이값을 반환.


<br/>


### insertCol( col, isAfter )

특정 컬럼 앞, 또는 뒤에 새로운 컬럼을 삽입

- **isAfter** `<Boolean>` 앞인지 뒤인지 여부

<br/>

### insertRow( row, isAfter )

그리드 레이아웃에서 특정 로우 앞, 또는 뒤에 새로운 로우를 삽입

- **isAfter** `<Boolean>` 앞인지 뒤인지 여부

<br/>

### layComponent( acomp, cell, width, height )

특정 셀에 컴포넌트를 추가. 셀을 지정해주지 않으면 빈자리에 추가 됨.

- **acomp** `<AComponent>` 추가 할 컴포넌트
- **cell** `<Object>` 셀
- **width** `<Number>` 너비
- **height** `<Number>` 높이

```js
// 버튼컴포넌트를 [2,1]위치에 삽입함
const btn = new AButton();
btn.init();
const cell = gridLayout.getCell(2,1);
const item = gridLayout.layComponent(btn, cell);
```

<br/>

### layComponentAt( acomp, row, col, width, height )

그리드 내 특정 위치(row, col)에 UI 컴포넌트를 배치

- **acomp** `<AComponent>` 추가 할 컴포넌트
- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **width** `<Number>` 너비 (생략하면 100%)
- **height** `<Number>` 높이 (생략하면 100%)

```js
const btn = new AButton(); // 버튼컴포넌트를 [2,1]위치에 삽입한다.
btn.init();
const item = gridLayout.layComponentAt(btn, 2, 1);
```

<br/>

### mergeCol( row, col, span )

그리드 레이아웃의 특정 컬럼을 병합

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **span** `<Number>` 병합하려는 개수

```js
//그리드 레이아웃 [1,1]위치의 셀로부터 2칸을 세로로 병합한다.
gridLayout.mergeCol(1,1,2);
```

<br/>

### mergeRow( row, col, span )

그리드 레이아웃의 특정 로우를 병합

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **span** `<Number>` 병합하려는 개수

```js
//그리드 레이아웃의 [2,1] 부터 3칸을 가로로 병합함.
gridLayout.mergeRow(2,1,3);
```

<br/>

### reduceColSpanCount( row, col )

특정 셀의 colspan을 감소. 1이하일 경우에는 제거.

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스

<br/>

### removeCol( col )

그리드 레이아웃의 특정 컬럼을 삭제. 

> 단, 숨겨진 cell에 colspan이 존재하면 안 됨.

- **col** `<Number>` col 인덱스

```js
gridLayout.removeCol(1); // 1번째 열 삭제 후 자동 정리
```

<br/>

### removeRow( row )

그리드에서 특정 행(Row)을 삭제

- **row** `<Number>` 로우 인덱스

```js 
gridLayout.removeRow(2); // 2번째 행 삭제 후 레이아웃 자동 정리
```

<br/>

### setCellAlign( row, col, align )

그리드 레이아웃 특정 셀의 text-align값을 설정

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **align** `<String>` text-align css value값

```js
//그리드 레이아웃의 [1,1]좌표에 있는 셀의 text-align css value값을 center로 지정
gridLayout.setCellAlign(1,1,'center');
```

<br/>

### setCellPadding( row, col, padding )

그리드 레이아웃 특정 셀의 패딩값을 설정

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **padding** `<Number>` 패딩값

```js
//그리드레이아웃 [1,2] 좌표의 패딩을 5로 지정
gridLayout.setCellPadding(1,2,5);
```

<br/>

### setCellValign( row, col, align )

그리드 레이아웃 특정 셀의 vertical-align를 설정

- **row** `<Number>` row 인덱스
- **col** `<Number>` col 인덱스
- **align** `<String>` vertical-align css value 값


```js
//그리드 레이아웃 [1,1]위치의 셀의 vertical-align값을 middle로 지정
gridLayout.setCellValign(1,1,'middle');
```

<br/>

### setCols( cols )

컬럼의 개수를 설정



### setColsDivPercent()

컬럼의 크기를 퍼센트로 설정



### setColSize( col, size )

그리드 레이아웃 특정 컬럼의 width를 설정

- **col** `<Number>` col 인덱스
- **size** `<Number>` 크기

```js
grid.setColSize(1, '20px');
```

<br/>

### setLayoutAlign( align )

레이아웃의 text-align 값을 설정

- **align** `<String>` text-align css value값

```js
gridLayout.setLayoutAlign('center');
```

<br/>

### setLayoutPadding( padding )

그리드 레이아웃의 패딩 값을 설정

- **padding** `<Object>` padding 값

<br/>

### setLayoutSize( rowSizeArr, colSizeArr )

레이아웃의 각 로우와 셀의 크기를 설정

- **rowSizeArr** `<Array>` 로우 사이즈 배열
- **colSizeArr** `<Array>` 컬럼 사이즈 배열

```js
const size = [50, 20, '30px'];
gridLayout.setLayoutSize(size, size);
```

<br/>

### setRows( rows )

로우의 개수를 설정

- **rows** `<Number>` 개수

<br/>

### setRowsDivPercent()

로우의 크기를 퍼센트로 설정


### setRowSize( row, size )

그리드 레이아웃의 특정 로우의 높이를 설정


```js
gridLayout.setRowSize(1, '15px');
```

<br/>

### splitCell( row, col )

병합된 특정 셀(row, col)을 개별 셀로 되돌림


```js
gridLayout.splitCell(0,1);
```

<br/>

### splitCol( row, col )

그리드 레이아웃의 특정 셀이 세로로 병합되어 있다면 분리 (해당 셀의 colspan을 제거)



<br/>

### splitRow( row, col )

그리드 레이아웃의 특정 셀이 가로로 병합되어 있다면 분리 (해당 셀의 rowspan을 제거)



<br/>
<br/>