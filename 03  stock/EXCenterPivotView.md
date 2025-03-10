# EXCenterPivotView

> **Extends** [AView](https://wikidocs.net/275135)

**EXCenterPivotView**는 3개의 그리드(왼쪽, 피벗, 오른쪽)를 포함하고, **각 그리드 간에 스크롤 동기화 및 행 데이터 추가/삭제를 관리하는 뷰 컴포넌트**

이 컴포넌트는 주로 **데이터 시각화 또는 분석과 관련된 페이지**에서 사용

## Instance Variables

###   **leftGrid** `<AGrid>`

왼쪽 그리드 컴포넌트

---

###   **pivotGrid** `<AGrid>`

중앙 피벗 그리드 컴포넌트

---

###   **rightGrid** `<AGrid>`

오른쪽 그리드 컴포넌트

---

###   **frwName** `<String>`

**EXCenterPivotView** 클래스의 인스턴스에서 프레임워크 또는 컴포넌트의 이름

---

###   **leftView** `<AView | 해당 AView를 상속한 다른 타입>`

**EXCenterPivotView** 내에서 왼쪽 영역에 해당하는 뷰를 참조하는 변수

```js
const pivotView = new EXCenterPivotView();

console.log(pivotView.leftView);  
// 왼쪽에 위치하는 AView 인스턴스를 참조
```

---

###   **rightView** `<AView | 해당 AView를 상속한 다른 타입>`

**EXCenterPivotView** 내에서 오른쪽 영역에 해당하는 뷰를 참조하는 변수

```js
const pivotView = new EXCenterPivotView();

console.log(pivotView.rightView);  
// 쪽에 위치하는 AView 인스턴스를 참조
```

---


<br>

## Class Methods

### init(t, e)

**EXCenterPivotView**를 초기화

왼쪽, 피벗, 오른쪽 그리드를 설정하고, 스크롤 동기화를 관리

   -   **t** `<Object>`: 뷰 초기화 정보

   -   **e** `<Object>`: 이벤트 리스너 정보

```js
// EXCenterPivotView 컴포넌트를 초기화합니다. 
this.EXCenterPivotView.init();
```

---

### scrollSyncSet(t, e)

두 그리드의 스크롤을 동기화

   -   **t** `<AGrid>`: 첫 번째 그리드

   -   **e** `<AView>`: 두 번째 그리드

```js
// 그리드와 뷰 간에 스크롤을 동기화합니다. 
this.EXCenterPivotView.scrollSyncSet(this.leftGrid, this.view);
```

---

### scrollViewLeft()

왼쪽 그리드를 기준으로 뷰를 왼쪽으로 스크롤

```js
// 좌측 뷰의 스크롤 위치를 가장 오른쪽 끝으로 이동시킵니다. 
this.EXCenterPivotView.scrollViewLeft();
```

---

### addRow(t, e, i)

각 그리드에 행을 추가

leftGrid, pivotGrid, rightGrid 모두에 새로운 행을 추가

-   **t** `<Array>`: 왼쪽 그리드에 추가할 데이터

-   **e** `<Array>`: 피벗 그리드에 추가할 데이터

-   **i** `<Array>`: 오른쪽 그리드에 추가할 데이터

- **Returns**: 추가된 각 그리드의 행들

```js
// 좌측, 중간, 우측 그리드에 데이터를 추가합니다. 
let rowArr = this.EXCenterPivotView.addRow([1, 2, 3], ['center'], [4, 5, 6]); 
// rowArr[0], rowArr[1], rowArr[2]에 각각 추가된 로우가 저장됩니다.
```

---

### prependRow(t, e, i)

각 그리드의 상단에 행을 추가

-   **t** `<Array>`: 왼쪽 그리드에 추가할 데이터

-   **e** `<Array>`: 피벗 그리드에 추가할 데이터

-   **i** `<Array>`: 오른쪽 그리드에 추가할 데이터

- **Returns**: 추가된 각 그리드의 행들

```js
// 좌측, 중간, 우측 그리드의 상단에 데이터를 추가합니다. 
let rowArr = this.EXCenterPivotView.prependRow([1, 2, 3], ['center'], [4, 5, 6]); 
// rowArr[0], rowArr[1], rowArr[2]에 각각 추가된 로우가 저장됩니다.
```

---

### addHelper(t, e, i)

그리드에 헬퍼 행을 추가

각 그리드의 셀에 데이터를 설정하고 스타일을 지정

-   **t** `<AGrid>`: 데이터를 추가할 그리드

-   **e** `<Array>`: 각 셀에 추가할 데이터

-   **i** `<Boolean>` <br>
	true일 경우 행을 상단에 추가하고, false일 경우 하단에 추가

- **Returns**: 추가된 행의 인덱스

```js
// 그리드에 헬퍼 행을 추가합니다. 
let rowIndex = this.EXCenterPivotView.addHelper(this.leftGrid, ['data1', 'data2'], true);
```

---

### removeRow(t)

지정된 행을 모든 그리드에서 제거

   -   **t** `<Number>`: 제거할 행의 인덱스

```js
// 지정된 행을 모든 그리드에서 제거합니다. 
this.EXCenterPivotView.removeRow(2); // 2번째 인덱스의 행을 제거
```

---

### removeAll()

모든 그리드에서 모든 행을 제거

```js
this.EXCenterPivotView.removeAll()
```

---

### setAllGridSelect()

각 그리드의 셀 선택 기능을 설정

그리드의 선택된 셀을 모두 선택할 수 있도록 함

```js
// 각 그리드의 셀 선택 기능을 설정하여 모든 셀을 선택할 수 있도록 합니다. 
this.EXCenterPivotView.setAllGridSelect();
```

---

### scrollTo(t)

지정된 위치로 모든 그리드를 스크롤

   -   **t** `<Number>`: 스크롤할 위치

```js
// 뷰를 특정 위치로 스크롤합니다. 
this.EXCenterPivotView.scrollTo(100); // y 좌표 100으로 스크롤
```

---

### scrollOffset(t)

지정된 값만큼 각 그리드를 스크롤

   -   **t** `<Number>`: 스크롤할 값

```js
// 컴포넌트의 스크롤 위치를 지정된 오프셋만큼 이동시킵니다. 
this.component.scrollOffset(50); // 50만큼 스크롤 이동
```

---

### scrollIntoArea(t, e)

지정된 영역을 기준으로 각 그리드를 스크롤

   -   **t** `<Object>`: 스크롤 영역

   -   **e** `<Boolean>` <br>
	true일 경우 상단 정렬, false일 경우 하단 정렬

```js
// 특정 행을 뷰의 가시 영역으로 스크롤합니다. 
this.EXCenterPivotView.scrollIntoArea(1, true); 
// 1번째 행을 상단에 맞춰 스크롤
```

---

### scrollToTop()

모든 그리드를 상단으로 스크롤

```js
// 스크롤 위치를 최상단으로 이동시킵니다. 
this.component.scrollToTop();
```

---

### scrollToBottom()

모든 그리드를 하단으로 스크롤

```js
// 스크롤 위치를 최하단으로 이동시킵니다. 
this.component.scrollToBottom();
```

---

### scrollToCenter()

모든 그리드를 중앙으로 스크롤

```js
// 스크롤 위치를 중앙으로 이동시킵니다. 
this.component.scrollToCenter();
```

---

<br>

## Example Usage

```js
// EXCenterPivotView 인스턴스 생성
var centerPivotView = new EXCenterPivotView();

// 초기화
centerPivotView.init();

// 데이터 추가
centerPivotView.addRow([1, 2, 3], [4, 5, 6], [7, 8, 9]);

// 스크롤 조정
centerPivotView.scrollToTop();
centerPivotView.scrollToBottom();
centerPivotView.scrollToCenter();
```