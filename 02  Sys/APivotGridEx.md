# APivotGridEx

> **Extends**: APivotGrid

APivotGrid의 확장 버전으로, 추가적인 스크롤 및 백업 기능을 제공.

## Properties

### scrlYView `<AView>`

세로 스크롤을 담당하는 뷰 컴포넌트

-   **Default**: null
    

### axisScrollLock `<Boolean>`

스크롤 방향을 고정하는 플래그

    
-   **Default**: false
    

### startX `<Number>`

터치 이벤트의 시작 X 좌표

    
-   **Default**: -1
    

### startY `<Number>`

터치 이벤트의 시작 Y 좌표

    
-   **Default**: -1
    

### pivotScrollAxisLock `<Boolean>`

축 스크롤 잠금 여부 (전역 옵션)

    
-   **Default**: false
    

## Instance Methods


### setData( pivotData, scrollData )

PivotGridEx에 데이터를 설정.

-   **pivotData** `<Array>` 고정 그리드 데이터
-   **scrollData** `<Array>` 스크롤 그리드 데이터
        
```js
grid.setData([['A1', 'B1']], [['C1', 'D1']]);
```  

### addRow( pivotData, scrollData )

PivotGridEx의 마지막 Row 뒤에 Row를 추가.

-   **pivotData** `<Array>` 고정 그리드 데이터
-   **scrollData** `<Array>` 스크롤 그리드 데이터
        
-   **Returns**: `<Array>` 추가된 row 정보

```js 
grid.addRow(
	['A2', 'B2'],
	['C2', 'D2']
);
```
    

### addRows( pivotInfoArr2, scrollInfoArr2, pivotRowData2, scrollRowData2 )

여러 개의 Row를 추가.

-   **pivotInfoArr2** `<Array>` 고정 그리드 정보
-   **scrollInfoArr2** `<Array>` 스크롤 그리드 정보
-   **pivotRowData2** `<Array>` 고정 그리드 데이터
 -   **scrollRowData2** `<Array>` 스크롤 그리드 데이터
        
-   **Returns**: `<Array>` 추가된 row 정보
    

### removeRow( rowIdx )

특정 row를 삭제.

 -   **rowIdx** `<Number>` 삭제할 rowIndex

```js
grid.removeRow(1);
```
        

### removeFirst()

첫 번째 row를 삭제

### removeLast()

마지막 row를 삭제

### removeAll()

모든 row를 삭제

### createBackup( maxRow, restoreCount )

그리드의 row 개수가 `maxRow`를 초과할 경우 `restoreCount` 개수만큼 백업.

-   **maxRow** `<Number>` 그리드 최대 Row 수
-   **restoreCount** `<Number>` 백업할 row 수

```js
grid.createBackup(100, 10);
```
        