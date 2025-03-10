# CompareChart

**CompareChart** 클래스는 **주식 데이터를 시각적으로 비교할 수 있는 차트를 제공**

여러 **주식 또는 가격 데이터를 비교**하고, 이를 차트에 나타내는 기능을 갖추고 있음

**실시간 데이터 업데이트, 줌 기능, 스크롤, 데이터 추가 등 다양한 기능**을 지원

## Instance Variables


###   **isCandleChart** `<HTMLDivElement>`

봉의 선 요소

---

###   **lineData** `<HTMLDivElement>`

봉(직선)의 요소

---

###   **lineDataText** `<String>`

상승 시 봉의 색상
> 기본값: "#da2c03"

---

###   **lineDataColor** `<String>`

하락 시 봉의 색상
> 기본값: "#75b02c"

---

###  **lineRate** `<String>`

변동이 없는 경우 봉의 색상
> 기본값: "#dee0e9"

---

###  **delegator** `<Boolean>`

상승 여부를 나타내는 플래그
> 기본값: false

---

###   **preScale** `<Boolean>`

포트 방향 여부를 나타내는 플래그
> 기본값: true

---

###   **rateVal** `<String>`

기본 색상
> 기본값: transparent

---

###   **zoomState** `<String>`

이전 주식 데이터를 나타내는 값

---

###   **lastDis** `<Number>`

터치 이벤트 시 두 지점 간의 거리

---

###   **scollSX** `<Number>`, **scollEX** `<Number>`

스크롤 시작 및 종료 좌표

---

###   **speed** `<Number>`

스크롤 속도

---

###   **mStartTime** `<Number>`, **mOldTime** `<Number>`

터치 또는 스크롤 이벤트의 시작 시간과 마지막 시간

---

###  **mStartX** `<Number>`, **mEndX** `<Number>`

스크롤 또는 터치 시작 위치와 종료 위치

---

###  **mScrollLR** `<Boolean>`

좌우 스크롤 방향을 나타내는 플래그

---

###   **timer** `<Number>`

자동 스크롤 타이머

---

###   **offset** `<Number>`

데이터의 오프셋 값

---

###   **startIdx** `<Number>`, **endIdx** `<Number>`

데이터의 시작 및 끝 인덱스

---

###   **BAR_CNT** `<Number>`

한 번에 표시할 막대의 수

---

###   **prdCls** `<Number>`

차트 데이터의 형식을 결정하는 값

---

###   **dateformatFunc** `<Array>`

날짜 형식을 지정하는 함수 배열

---

###   **dateformat** `<Function>`

현재 사용 중인 날짜 형식 함수

---

###   **dashType** `<Array>`

대시 선의 유형을 지정하는 배열

---

###   **TEXT_SIZE** `<String>`

텍스트 크기

---

###   **defColorObj** `<Object>`, **colorObj** `<Object>`

기본 및 사용자 정의 색상 설정 객체

---

###   **COLOR_ARR** `<Array>`

데이터의 색상 배열

---

###   **touchEvent** `<Object>`

터치 이벤트 객체

---

###   **isFirst** `<Boolean>`

첫 번째 데이터 로드 여부

---

###   **ROW_CNT** `<Number>`

차트의 행 수

---

###   **AM_R_WIDTH**, **AM_L_WIDTH** `<Number>`

차트의 왼쪽 및 오른쪽 여백 너비

---

###  **MAX_BAR_W** `<Number>`, **DEF_BAR_W** `<Number>`

차트에서 막대의 최대 및 기본 너비

---

###  **BAR_TERM** `<Number>`

바 간의 간격

---

###   **SIGAIDX**, **GOGAIDX**, **JEOGAIDX**, **JONGGAIDX**, **DEALQTIDX** `<Number>`

데이터의 인덱스 값

---

###   **upGrpMaxAm**, **upGrpMinAm** `<Number>`

최대값과 최소값을 저장

---

###   **pos** `<Object>`

차트의 위치 및 크기 정보를 저장하는 객체

---

###   **drawBackType**, **drawTextType**, **drawChartType** `<String>`

차트의 배경, 텍스트, 그래프의 종류를 설정

---

###   **compLeft** `<Number>`

비교 차트의 왼쪽 위치

---

###   **middleX** `<Number>`

화면 중간 위치

---

###   **frwName** `<String>`

프레임워크의 이름을 나타내는 문자열
> 기본값: **stock**

---

###  **subType** `<Number>`

서브 타입을 나타내는 숫자 값
> 기본값: **0**

---

###  **startLineX** `<Number>`

차트 시작 X 좌표
> 기본값: **0**

---

###   **nextIqryDate** `<String>`

다음 쿼리 날짜를 저장하는 변수

---

###   **data** `<Array<any\>\>`

차트 데이터 배열
> 데이터 포인트를 담고 있음

---

###   **upDownArr** `<Array<any\>\>`

데이터 값의 상승/하강 정보를 담는 배열

---

###  **curOffset** `<Number>`

현재 데이터 오프셋

---

###   **preTermIdx** `<Number>`

이전 기간의 인덱스를 나타내는 숫자

---

###   **EMA1, EMA2** `<Any>`

지수이동평균(EMA) 값으로, 차트 계산에서 사용될 수 있음

---

###   **preUpDown** `<Number>`

이전 상승/하강 상태를 나타내는 변수

---

<br>

## Instance Methods

### init(t, s)

차트의 초기 설정을 진행

이벤트 리스너를 등록하고, 기본 데이터 로딩을 처리


   -   **t** `<Object>`: 초기화에 필요한 DOM 요소 또는 설정
   -   **s** `<Object>`: 초기화 설정


---

### setDelegator(t)

차트의 이벤트 및 데이터 처리를 위임할 객체를 설정

- **t** `<Object>`: 데이터를 처리하거나 이벤트를 처리할 위임자 객체

```js
// Delegator 객체를 정의합니다. 
class ChartDelegator {
	// 사용할 이벤트 메서드
}

// Delegator 인스턴스를 생성합니다. 
const chartDelegator = new ChartDelegator();

// CompareChart에 Delegator를 설정합니다. 
compareChart.setDelegator(chartDelegator);
```

---
### updatePosition(t, s)

차트의 크기 및 위치를 업데이트하고, 그래프를 재갱신

   -   **t** `<Number>`: 차트의 너비

   -   **s** `<Number>`: 차트의 높이

---

### setZoomEvent()

줌 인과 줌 아웃 이벤트를 설정

```js
// setZoomEvent 메서드를 사용하여 줌 이벤트를 설정합니다. 
compareChart.setZoomEvent(zoomInButton, zoomOutButton);
```

---

### addCompareData(t)

비교할 데이터를 추가하고, 차트를 업데이트

데이터가 15개 이상일 경우 추가할 수 없음

   -   **t** `<Array>`: 추가할 비교 데이터

```js
// 비교할 데이터를 준비합니다. 
const compareData = ['Dataset', [20140312, 1320000, 1320000, 1293000, 1294000, 251585]];

compareChart.addCompareData(compareData);
```

---

### setData(t, s)

차트의 데이터를 설정하고, 데이터에 맞게 차트를 그림


   -   **t** `<Array>`: 차트에 표시할 데이터

   -   **s** `<Array>`: 데이터의 색상 배열

```js
// 차트 데이터를 설정합니다.
const dataArr =  [
	[20140312, 1320000, 1320000, 1293000, 1294000, 251585],
	// 추가 데이터...
];

const keyArr =  ['date', 'open', 'high', 'low', 'close', 'volume'];

this.compareChart.setData(dataArr, keyArr);
```

---

### setMaxMin()

차트의 데이터에서 최대값과 최소값을 계산하여 설정

이 값들은 차트의 Y 축 범위에 영향을 줌


```js
// setMaxMin 메서드를 호출하여 데이터의 최대값과 최소값을 설정합니다. 
compareChart.setMaxMin();
```

---

### draw()

차트를 그림

차트의 배경, 텍스트, 그래프를 모두 그리며, 데이터에 따라 업데이트


```js
// 차트를 그립니다.
compareChart.draw();
```

---

### drawGraph()


차트의 그래프를 그림

데이터에 따라 각각 다른 색상 및 스타일로 그래프를 그림

```js
compareChart.drawGraph();
```

---

### zoomInOut()


줌을 조정하고, 차트를 업데이트

줌 인 및 줌 아웃이 가능

```js
compareChart.zoomInOut(0.8); // 0.8배 축소
```

---

### scrollLToR(t)

차트를 왼쪽에서 오른쪽으로 스크롤

   -   **t** `<Number>`: 스크롤 이동 거리


```js
// 스크롤 버튼에 클릭 이벤트를 설정합니다. 
scrollButton.addEventListener('click', () => { 
	const scrollSpeed = 1000;
	compareChart.scrollLToR(scrollSpeed); // 왼쪽에서 오른쪽으로 스크롤을 실행합니다. 
});
```

---

### scrollRToL(t)

차트를 오른쪽에서 왼쪽으로 스크롤

   -   **t** `<Number>`: 스크롤 이동 거리

```js
// 스크롤 버튼에 클릭 이벤트를 설정합니다. 
scrollButton.addEventListener('click', () => { 
	const scrollSpeed = 1000;
	compareChart.scrollLToL(scrollSpeed); // 오른쪽에서 왼쪽으로 스크롤을 실행합니다. 
});
```

---

### addNewData(t, s)

새로운 데이터를 차트에 추가하고, 기존 데이터의 상태를 업데이트

   -   **t** `<Array>`: 추가할 데이터

   -   **s** `<Array>`: 데이터의 색상 배열

```js
compareChart.addNewData(newDataArr, keyArr);
```

---


### setTouchEvent()

터치 이벤트를 설정하여 차트의 스크롤 및 줌을 처리

```js
// 터치 이벤트 설정
compareChart.setTouchEvent();
```

---


### autoScroll(speed)


자동스크롤을 설정

   -   **speed** `<Number>`: 자동스크롤 속도

```js
// 자동 스크롤 설정
// 차트가 자동으로 왼쪽에서 오른쪽으로 이동합니다.
compareChart.autoScroll(1000); // 매 1000ms마다 스크롤을 이동합니다.
```

---


### drawLongTabLines()

롱탭 시 보여질 안내선 및 상세 데이터를 표시

```js
// 롱탭 데이터 표시
compareChart.drawLongTabLines(); 
```

---

### extractColorObj()

**colorObj**에서 색상 객체를 추출하고, **COLOR_ARR** 배열에 색상을 설정하는 메서드

```js
// 차트의 색상 정보를 추출합니다. 
const colorInfo = compareChart.extractColorObj();
```

---

### initEvent()

터치 및 줌 이벤트를 초기화

**setTouchEvent()**와 **setZoomEvent()**를 호출

```js
init(context, evtListener) {
    super.init(context, evtListener)
    this.initEvent();
}
initEvent() {
	// 이벤트 설정
}
```

---

### calcPosition(t, s)

차트의 크기(t, s)를 기반으로 차트 요소들의 위치와 크기를 계산하는 메서드

-   **t** `<Number>`: 차트의 가로 크기
-   **s** `<Number>`: 차트의 세로 크기

```js
// 특정 요소의 너비와 높이를 설정합니다. 
let elementWidth = 500; // 예시로 500px 너비 
let elementHeight = 300; // 예시로 300px 높이 

// calcPosition 메서드를 호출하여 캔버스의 위치를 계산합니다. 
this.compareChart.calcPosition(elementWidth, elementHeight); 
```


---

### barWidthChange()

막대 너비를 변경하고 barTot을 업데이트하여 새로운 막대의 너비를 계산

```js
// 초기 봉 너비를 설정합니다. 
this.compareChart.barW = compareChart.DEF_BAR_W; // 기본 봉 너비로 설정 

// 봉 너비를 변경하는 메서드를 호출합니다. 
compareChart.barWidthChange();
```


---

### isExistNextData()

데이터에 더 이상 추가할 항목이 있는지 확인하는 메서드

- **Returns** `<Boolean>`
다음 데이터가 있으면 true, 없으면 false

```js
// 데이터가 더 필요한지 확인합니다. 
if (this.compareChart.isExistNextData()) { 
	// 추가 데이터가 필요할 경우, 데이터를 로드하거나 요청합니다. 
	loadMoreData(); // 추가하는 함수 작성
} 
```


---

### getOffset()

데이터의 오프셋을 계산하고, 필요한 경우 **endIdx**를 갱신하는 메서드

```js
// 차트의 데이터를 설정합니다. 
this.compareChart.setData(someDataArray); 

// 현재 데이터의 오프셋을 가져옵니다. 
var currentOffset = compareChart.getOffset();
```

---

### makeChartCanvasData(t, s)

차트에 표시할 데이터를 처리하고 차트 데이터 배열을 업데이트하는 메서드
-   **t** `<Array<any\>\>`: 차트에 표시할 원본 데이터 배열
-   **s** `<Array<any\>\>`: 데이터의 인덱스 배열


---

### makeUpDownData()

차트의 상승/하강 데이터를 계산하여 **upDownArr 배열**에 저장하는 메서드

---

### drawCompareLine()

비교 라인을 그리는 메서드로, 여러 개의 데이터를 차트에 표시

```js
// drawCompareLine 메서드를 호출하여 비교 라인을 그립니다.
this.compareChart.drawCompareLine();
```

---

### drawBackLine()

차트의 배경에 그릴 선을 설정하는 메서드

```js
this.compareChart.drawBackLine();
```

---

### drawBackText()

차트의 배경에 텍스트를 그리는 메서드

```js
this.compareChart.drawBackText();
```


---

### drawLongTabData(t)

롱탭 데이터를 차트에 표시하는 메서드

-   **t** `<Number>`: 롱탭 데이터를 표시할 X 좌표

```js
// 롱탭한 위치의 X좌표를 기반으로 데이터를 표시합니다. 
this.chart.drawLongTabData(touchX);
```

---