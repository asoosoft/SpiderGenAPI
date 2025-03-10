# **APivotGrid**  
> **Extends**: AView

APivotGrid는 피벗 테이블과 유사한 형식으로 데이터를 표시하는 그리드 컴포넌트



## Static Variables  

### APivotGrid.pivotScrollAxisLock 
피벗 그리드의 스크롤 방향을 고정할지 여부를 설정  
- **Type**: `<Boolean>`  
- **Default**: false  



## Instance Variables

### frwName  `<String>`  
APivotGrid가 포함된 프레임워크 이름 
- **Default**: afc 

### axisScrollLock `<Boolean>`  
수직 또는 수평 스크롤을 잠그는 플래그
- **Default**: false

### startX  `<Number>`  
스크롤 시작 X 좌표  
- **Default**: -1

### startY   `<Number>`  
스크롤 시작 Y 좌표
- **Default**: -1 

### pivotGrid   `<AGrid>`  
피벗 데이터를 표시하는 그리드  

### scrollGrid  `<AGrid>`
스크롤 데이터를 표시하는 그리드

### scrollView  `<AView>`
스크롤 가능 영역을 담당하는 View

### scrlYView  `<AView>`  
세로 스크롤을 위한 추가적인 View



## Instance Methods


### getPivotGrid()  
PivotGrid 객체를 반환
- **Returns** `<AGrid>`  

```js
let pivot = pivotGrid.getPivotGrid();
```

### setMainGridWidth(width)
ScrollGrid의 너비를 설정
- **`width`** `<String>` 또는 `<Number>`  

```js
pivotGrid.setMainGridWidth("400px");
```

### getMainGridWidth()  
ScrollGrid의 너비를 반환
- **Returns** `<String>`  

```js
let width = pivotGrid.getMainGridWidth();
```

### setPivotGridWidth(width)  
PivotGrid의 너비를 설정
- **`width`** `<String>` 또는 `<Number>`  

```js
pivotGrid.setPivotGridWidth("200px");
```

### getPivotGridWidth() 
PivotGrid의 너비를 반환
- **Returns** `<String>`  

```js
let width = pivotGrid.getPivotGridWidth();
```



### setData(pivotData, scrollData)  
PivotGrid와 ScrollGrid에 데이터를 설정
- **`pivotData`** `<Array>` 피벗 데이터  
- **`scrollData`** `<Array>` 스크롤 데이터  

```js
pivotGrid.setData(pivotData, scrollData);
```

### **addRow(pivotData, scrollData)**  
PivotGrid와 ScrollGrid에 행을 추가
- **`pivotData`** `<Array>` 피벗 데이터  
- **`scrollData`** `<Array>` 스크롤 데이터  

```js
pivotGrid.addRow(pivotRow, scrollRow);
```

### **addRows(pivotInfoArr2, scrollInfoArr2, pivotRowData2, scrollRowData2)**  
여러 개의 행을 추가
- **`pivotInfoArr2`** `<Array>` 피벗 데이터 배열  
- **`scrollInfoArr2`** `<Array>` 스크롤 데이터 배열  

```js
pivotGrid.addRows(pivotDataArray, scrollDataArray);
```

### **removeRow(rowIdx)**  
지정된 인덱스의 행을 제거
- **`rowIdx`** `<Number>` 제거할 행 인덱스  

```js
pivotGrid.removeRow(2);
```

### **removeAll()**  
모든 행을 제거

```js
pivotGrid.removeAll();
```



### **scrollTo(pos)**  
PivotGrid와 ScrollGrid를 지정한 위치로 스크롤
- **`pos`** `<Number>` 스크롤 위치  

```js
pivotGrid.scrollTo(100);
```

### **scrollToTop()**  
PivotGrid와 ScrollGrid를 최상단으로 스크롤

```js
pivotGrid.scrollToTop();
```

### **scrollToBottom()**  
PivotGrid와 ScrollGrid를 최하단으로 스크롤.  

```js
pivotGrid.scrollToBottom();
```

### **scrollToCenter()**  
PivotGrid와 ScrollGrid를 중앙으로 스크롤.  

```js
pivotGrid.scrollToCenter();
```



### **enableScrollIndicator()**  
PivotGrid와 ScrollGrid의 스크롤 인디케이터를 활성화.  

```js
pivotGrid.enableScrollIndicator();
```

### **lockScrollView()**  
ScrollView의 스크롤을 잠금.

```js
pivotGrid.lockScrollView();
```

### **unlockScrollView()**  
ScrollView의 스크롤을 해제.  

```js
pivotGrid.unlockScrollView();
```
