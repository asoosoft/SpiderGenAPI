# APivotGrid

> Extends: [AView](https://wikidocs.net/275135)

APivotGrid는 AView를 확장한 컴포넌트로, 피벗 데이터와 스크롤 데이터를 함께 표시하는 강력한 그리드 컴포넌트

여러 행과 열을 추가, 삭제, 선택 및 스크롤할 수 있으며, 다양한 설정을 통해 그리드의 동작을 조정

## Properties

- **pivotData**: 피벗 데이터를 저장하는 객체<br>
피벗 데이터는 그리드의 주요 데이터로, 행과 열의 교차점에 표시

- **scrollData**: 스크롤 데이터를 저장하는 객체<br>
 추가적인 정보나 보조 데이터를 나타냄

- **selectedCells**: 선택된 셀 목록을 저장하는 배열<br>
사용자가 선택한 셀을 추적

- **isFullRowSelect**: true 설정 시 행 전체가 선택

- **backupData**: 백업된 데이터 객체<br>
데이터 변경 시 백업을 통해 복원

## Instance Methods
### init(context, evtListener)

APivotGrid를 초기화하는 함수

컨텍스트와 이벤트 리스너를 설정

- **context** `<Object>`: 초기 설정 정보를 포함하는 컨텍스트 객체
- **evtListener** `<Object>`: 이벤트를 감지하는 리스너 객체

```js
const pivotGrid = new APivotGrid();
pivotGrid.init(context, evtListener);
```

### applyOptionToChild()
옵션 정보를 하위 그리드(pivotGrid, scrollGrid)에 적용하는 내부 함수

이 함수는 주로 내부적으로 사용되며, 하위 그리드의 설정을 업데이트

```
APivotGrid.prototype.applyOptionToChild = function() {
    // 하위 그리드에 옵션 적용 로직
    this.pivotGrid.applyOptions(this.options);
    this.scrollGrid.applyOptions(this.options);
};
```

### setChildQueryInfo(aquery)
하위 컴포넌트에 쿼리 정보를 설정하는 내부 함수

- **aquery** `<Object>`: 쿼리 정보를 담고 있는 AQuery 객체

이 객체는 하위 컴포넌트에 설정될 쿼리 정보를 포함하고 있으며, <br>
해당 정보를 통해 컴포넌트가 데이터를 처리하거나 표시할 수 있도록 하는 역할

> 이 함수는 주로 컴포넌트가 특정 쿼리와 연동되어 데이터를 처리할 때 사용

```
APivotGrid.prototype.setChildQueryInfo = function(aquery) {
    // 하위 컴포넌트에 쿼리 정보 설정
    this.pivotGrid.setQueryInfo(aquery);
    this.scrollGrid.setQueryInfo(aquery);
};
```

### setUpdateType(updateType)

업데이트 유형을 설정하는 함수

- **updateType** `<String>`: 업데이트 유형 ('incremental' 등)

```js
pivotGrid.setUpdateType('incremental');
```

### setMainGridWidth(width)

메인 그리드의 너비를 설정하는 함수

- **width** `<Number>`: 설정할 그리드의 너비

```js
pivotGrid.setMainGridWidth(800);
```

### getMainGridWidth()

메인 그리드의 현재 너비를 반환하는 함수

- **Returns** `<Number>`: 메인 그리드의 너비

### setPivotGridWidth(width)
피벗 그리드의 너비를 설정하는 함수

- width `<Number>`: 설정할 피벗 그리드의 너비

```js
pivotGrid.setPivotGridWidth(300);
```

### getPivotGridWidth()

피벗 그리드의 현재 너비를 반환하는 함수

- **Returns** `<Number>`: 피벗 그리드의 너비


### setDataStyleObj(styleObj)
CSS 스타일을 객체 형태로 적용하는 함수

- **styleObj** `<Object>`: 적용할 스타일 객체 
> 예: { backgroundColor: '#f0f0f0', fontSize: '14px' }

```js
pivotGrid.setDataStyleObj({ backgroundColor: '#f0f0f0', fontSize: '14px' });
```

### getDataStyleObj()

현재 적용된 데이터 스타일 객체를 반환하는 함수

- **Returns** `<Object>`: 적용된 스타일 객체

### showHeader() / hideHeader()
헤더를 표시하거나 숨기는 함수

```js
pivotGrid.showHeader();
pivotGrid.hideHeader();
```

### showFooter() / hideFooter()
푸터를 표시하거나 숨기는 함수

### setData(pivotData, scrollData)

피벗 데이터와 스크롤 데이터를 설정하는 함수

- **pivotData** `<Array>`: 피벗 데이터 배열
- **scrollData** `<Array>`: 스크롤 데이터 배열

```js
pivotGrid.setData(
    [{ id: 1, name: 'Item 1' }], // 피벗 데이터
    [{ id: 1, value: 100 }]      // 스크롤 데이터
);
```

### addRow(pivotData, scrollData)
행을 추가하는 함수

- **pivotData** `<Object>`: 추가할 피벗 데이터
- **scrollData** `<Object>`: 추가할 스크롤 데이터

```js
pivotGrid.addRow(
    { id: 2, name: 'Item 2' }, // 피벗 데이터
    { id: 2, value: 200 }      // 스크롤 데이터
);
```

### removeRow(rowIdx)
특정 행을 삭제하는 함수

- **rowIdx** `<Number>`: 삭제할 행의 인덱스

```js
pivotGrid.removeRow(0); // 첫 번째 행 삭제
```

### removeAll()
모든 행을 삭제하는 함수

### scrollTo(pos)

지정된 위치로 스크롤을 이동하는 함수

- **pos** `<Number>`: 이동할 위치 값

```js
pivotGrid.scrollTo(100);
```

### scrollToTop() / scrollToBottom() / scrollToCenter()

스크롤을 최상단, 최하단, 중앙으로 이동하는 함수

```js
pivotGrid.scrollToTop();
pivotGrid.scrollToBottom();
pivotGrid.scrollToCenter();
```

### selectRows(startIdx, endIdx)

지정된 행을 선택하는 함수

- **startIdx** `<Number>`: 선택 시작 인덱스
- **endIdx** `<Number>`: 선택 끝 인덱스

```js
pivotGrid.selectRows(1, 3);
```

### calcHeight()

그리드의 높이를 계산하여 설정

이 메서드는 그리드의 레이아웃을 조정할 때 사용

그리드의 높이를 동적으로 계산하여 레이아웃을 최적화

```
APivotGrid.prototype.calcHeight = function() {
    // 그리드의 높이를 계산하는 로직
    const totalHeight = this.pivotGrid.getRowCount() * this.pivotGrid.getRowHeight();
    this.setHeight(totalHeight);
};
```
### getMappingCount()

그리드의 매핑된 데이터 항목의 개수를 반환

이 메서드는 그리드에 매핑된 데이터의 수를 확인할 때 유용

**Returns** `<Number>`: 매핑된 데이터 항목의 개수를 반환

```
APivotGrid.prototype.getMappingCount = function() {
    // 매핑된 데이터 항목의 개수를 반환
    return this.pivotGrid.getMappedData().length;
};
```

### setDirectBackup(isDirect)
이 메서드는 백업 기능을 직접적으로 수행할지 여부를 설정.

* **isDirect** `<Boolean>`: true로 설정하면 백업을 직접 수행하고, false로 설정하면 간접적으로 수행

```
APivotGrid.prototype.setDirectBackup = function(isDirect) {
    this.isDirectBackup = isDirect;
    // 백업 설정 로직
    if (isDirect) {
        this.createBackup();
    } else {
        this.destroyBackup();
    }
};
```
### applyBackupScroll()
백업된 스크롤 위치를 적용

이 메서드는 백업된 스크롤 위치를 복원하여 그리드의 스크롤 상태를 이전 상태로 되돌림

```
APivotGrid.prototype.applyBackupScroll = function() {
    const restoredScrollPos = this.backupScroll;
    this.scrollGrid.scrollTop(restoredScrollPos);
    return restoredScrollPos;
};

// 사용 예시
pivotGrid.applyBackupScroll();
```
### createBackup(maxRow, restoreCount)
백업 시스템을 초기화하고, 백업 및 복원에 필요한 데이터를 설정

* **maxRow**`<Number>`: 백업할 최대 행 수를 지정

* **restoreCount**`<Number>`: 복원할 행의 개수를 지정

```
APivotGrid.prototype.createBackup = function(maxRow, restoreCount) {
    this.maxRow = maxRow;
    this.restoreCount = restoreCount;
    // 백업 초기화 로직
    console.log(Backup created with maxRow: ${maxRow}, restoreCount: ${restoreCount});
};

// 사용 예시
pivotGrid.createBackup(100, 20);
```
### destroyBackup()
백업 시스템을 중단하고, 백업 데이터를 제거

이 메서드는 백업과 관련된 모든 데이터를 삭제하여 메모리를 해제

```
APivotGrid.prototype.destroyBackup = function() {
    // 백업 데이터 제거 로직
    this.maxRow = null;
    this.restoreCount = null;
    console.log('Backup destroyed');
};

// 사용 예시
pivotGrid.destroyBackup();
```

### overscrollBehavior(disableScrlManager)

스크롤 동작을 제어하는 메서드로, 스크롤 관리자를 비활성화할지 여부를 설정

**disableScrlManager**`<Boolean>`: 값으로 true로 설정하면 스크롤 관리자를 비활성화

```
APivotGrid.prototype.overscrollBehavior = function(disableScrlManager) {
    this.disableScrlManager = disableScrlManager;
    // 스크롤 관리자 설정 로직
    if (disableScrlManager) {
        this.scrollGrid.disableScrollManager();
    } else {
        this.scrollGrid.enableScrollManager();
    }
};
```
### lockScrollView()
스크롤 뷰를 잠가서 사용자가 스크롤 할 수 없도록 하는 역할

이 메서드는 스크롤을 일시적으로 비활성화하여 특정 작업 중에 스크롤이 발생하지 않도록 하는 역할

```
APivotGrid.prototype.lockScrollView = function() {
    this.scrollGrid.css('overflow', 'hidden');
    console.log('Scroll view locked');
};

// 사용 예시
pivotGrid.lockScrollView();
```

### unlockScrollView()
잠긴 스크롤 뷰를 해제하여 사용자가 다시 스크롤 할 수 있도록 하는 역할

이 메서드는 lockScrollView()로 잠긴 스크롤을 다시 활성화

```
APivotGrid.prototype.unlockScrollView = function() {
    this.scrollGrid.css('overflow', 'auto');
    console.log('Scroll view unlocked');
};

// 사용 예시
pivotGrid.unlockScrollView();
```

### scrollOffset(offset)

현재 스크롤 위치에 오프셋을 더하거나 빼서 스크롤 위치를 조정

**offset**`<Number>`: 스크롤 위치를 조정할 양을 지정

```
APivotGrid.prototype.scrollOffset = function(offset) {
    const currentScrollPos = this.scrollGrid.scrollTop();
    this.scrollGrid.scrollTop(currentScrollPos + offset);
    console.log(Scrolled by offset: ${offset});
};

// 사용 예시
pivotGrid.scrollOffset(50);
```
### scrollIntoArea(row, isAlignTop)

특정 행이 보이도록 그리드를 스크롤

* **row**`<Number|HTMLObject>`: 스크롤 할 행의 인덱스 또는 객체를 지정

* **isAlignTop**`<Boolean>`: 값으로 true로 설정하면 해당 행이 그리드의 상단에 위치하도록 스크롤

```
APivotGrid.prototype.scrollIntoArea = function(row, isAlignTop) {
    const rowElement = typeof row === 'number' ? this.getRow(row) : row;
    const position = isAlignTop ? rowElement.offset().top : rowElement.offset().top 
this.scrollGrid.height() + rowElement.height();
    this.scrollGrid.scrollTop(position);
    console.log(Scrolled into area of row: ${row}, alignTop: ${isAlignTop});
};

// 사용 예시
pivotGrid.scrollIntoArea(5, true);
```
### getSelectedCells()

현재 선택된 셀들을 배열로 반환

이 메서드는 사용자가 선택한 셀의 정보를 가져오는 데 사용

```
APivotGrid.prototype.getSelectedCells = function() {
    return this.selectedCells;
};

// 사용 예시
const selectedCells = pivotGrid.getSelectedCells();
console.log('Selected cells:', selectedCells);
```

### globalToast()

globalToast는 프로젝트 내에서 하나의 토스트 메시지를 전역적으로 관리하고자 할 때 사용

AToast 클래스의 single() 메서드를 통해 글로벌 토스트를 생성

이 메서드는 프로젝트 내에서 하나의 토스트 인스턴스를 생성하여 여러 곳에서 동일한 토스트를 사용할 수 있도록 하는 역할

이를 통해 메모리 사용을 줄이고, 일관된 사용자 경험을 제공

```
// AToast의 전역 인스턴스를 생성
var globalToast = AToast.single();

// 전역 토스트를 사용하여 메시지를 표시
globalToast.show('전역 토스트 메시지입니다.', 3);

// 다른 위치에서도 동일한 전역 토스트를 사용할 수 있습니다.
function showToastMessage() {
    globalToast.show('다른 위치에서 호출된 전역 토스트 메시지입니다.', 2);
}
```

### createSpan()
AToast 클래스 내부에서 사용되는 메서드로, 토스트 메시지를 표시할 때 텍스트를 감싸는 span 요소를 생성하는 역할

이 메서드는 토스트 메시지의 스타일링을 위해 span 요소에 특정 CSS를 적용할 수 있도록 돕는 역할

spanCss 속성을 통해 span 요소의 CSS를 설정할 수 있으며, 이를 통해 토스트 메시지의 글꼴, 색상, 크기 등을 조정하는 역할

```
// AToast 인스턴스를 생성
var toast = new AToast();

// spanCss 속성을 설정하여 span 요소의 스타일을 지정
toast.spanCss = {
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold'
};

// 토스트 메시지를 표시
toast.show('스타일이 적용된 토스트 메시지입니다.', 3);
```
## Events

- **scroll** → 스크롤 이벤트 발생 시 실행

- **scrolltop** → 그리드가 최상단에 도달했을 때 실행

- **scrollbottom** → 그리드가 최하단에 도달했을 때 실행

- **select** → 셀이 선택될 때 실행

- **dblclick** → 셀을 더블 클릭할 때 실행

- **actiondown** → 사용자가 터치/클릭을 시작할 때 발생

- **actionmove** → 사용자가 터치를 이동할 때 발생

- **actionup** → 사용자가 터치를 끝낼 때 발생