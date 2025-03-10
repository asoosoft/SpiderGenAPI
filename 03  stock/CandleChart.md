### CandleChart

>**Extends**: BaseChart

**CandleChart**는 주식 및 금융 데이터를 시각화하기 위한 캔들(봉) 차트 컴포넌트.  

이 컴포넌트는 시가, 고가, 저가, 종가, 거래량 등의 데이터를 기반으로 캔들 차트를 그리며,  
이동평균선, OBV, MACD, RSI, 스토캐스틱 등 다양한 보조 지표를 함께 표시



## Instance Variables

### frwName` <String> ` 
  차트가 속한 프레임워크 이름을 지정  
  **Default** "stock" 
 
  (차트의 스타일과 동작이 프레임워크에 따라 일부 달라질 수 있음)

### isCandleChart `<Boolean>`
  차트가 캔들 차트로 그려질지 여부를 나타냄
  
  **Default** false

### lineData `<Array>`
  비교선 또는 추가 보조선의 원시 데이터 배열을 저장.

### lineDataText  `<Array>`  
  각 보조선에 대응하는 텍스트 레이블을 저장.

### lineDataColor  `<Array>`  
  보조선에 사용되는 색상 배열  
  **Default** StockColor.COMPARE_COLORS

### lineRate  `<Array> ` 
  보조선의 스케일링 비율을 저장하는 배열.

### delegator  `<Object>`  
  추가 데이터 요청이나 이벤트 처리를 위임할 객체.

### preScale`<Number>  `
  이전 줌 배율을 저장하며, 줌 동작 시 현재 배율과 비교하여 봉 너비를 조정하는 데 사용
  **Default** 1

### rateVal `<Number>  `
  현재 줌 배율을 나타내며, 이 값에 따라 봉의 너비가 확대 또는 축소
  **Default** 1

### zoomState ` <Number>`  
  현재 줌 상태를 나타내며 (예: 1 = 줌인, 2 = 줌아웃),  
  **Default** 0

### lastDist ` <Number>  `
  터치 줌 동작 시 두 손가락 간의 이전 거리를 저장

### scollSX ` <Number>  `
  터치 스크롤 시작 시 X 좌표를 저장

### speed `<Number>  `
  터치 스크롤 속도를 나타내며, 자동 스크롤 동작을 결정하는 기준으로 사용
  **Default** 10

### mStartTime, mOldTime `<Number>  `
  터치 동작 시작 시각과 마지막 시각을 저장하여 스크롤 속도 및 이동 거리를 계산

### mStartX,mEndX `<Number>  `
  터치 동작의 시작 및 종료 X 좌표를 저장

### mScrollLR  `<Boolean>`  
  터치 스크롤 방향(좌측 또는 우측)을 결정하는 플래그

### timer  
  자동 스크롤 및 기타 시간 기반 동작에 사용되는 타이머 객체

### offset`<Number>  `
  내부 데이터 배열에서 현재 처리 위치(오프셋)를 나타냄

### startIdx  `<Number>  `
  현재 화면에 표시되는 데이터의 시작 인덱스

### startLineX ` <Number>`  
  차트 데이터 그리기를 시작하는 X 좌표

### endIdx`<Number>  `
  현재 화면에 표시되는 데이터의 끝 인덱스

### BAR_CNT  `<Number>  `
  화면에 표시되는 봉(캔들)의 개수를 나타냄  
  **Default** 50

### subType `<Number> ` 
  하단 서브 차트의 타입을 나타내며, 보조 지표에 따라 변화
  **Default** 0

### prdCls `<Number>`  
  데이터의 기간 분류(월, 주, 일, 분, 틱 등)를 나타내며, 날짜 포맷 및 데이터 해석에 영향을 줌
  **Default** 0

### dateformatFunc `<Array>  `
  기간 분류에 따른 날짜 포맷 함수들을 저장하는 배열

### dateformat
  현재 기간 분류에 해당하는 날짜 포맷 함수 또는 포맷 문자열

### dashType  `<Array> ` 
  차트에서 사용되는 점선 스타일을 정의하는 배열  
  **Default** [1.5, 4]

### TEXT_SIZE `<String>  `
  차트 텍스트의 기본 크기를 지정  
  **Default** "16px"

### MIN_TEXT_SIZE ` <Number>`  
  텍스트의 최소 크기를 제한  
  **Default** 16

### defColorObj `<Object>`  
  차트의 기본 색상 설정을 포함하는 객체  
  (예: 백그라운드, 텍스트, 상승/하락 색상 등)

### colorObj  `<Object> ` 
  현재 차트에 적용되는 색상 설정 객체로, 사용자가 변경
  
### COLOR_ARR  `<Array>`  
  상승/하락 구분에 사용되는 색상 배열

### touchEvent
  터치 관련 동작을 제어하기 위한 옵션 값

### isFirst  `<Boolean>  `
  데이터가 처음 로드되었는지 여부를 나타냄  
  **Default** true

### ROW_CNT ` <Number>  `
  상단 가격 영역의 행 간격 계산에 사용되는 값  
  **Default** 18

### AM_R_WIDTH `<Number> ` 
  차트 우측의 금액 표시 영역 너비  
  **Default** 100

### AM_L_WIDTH `<Number>  `
  차트 좌측의 금액 표시 영역 너비

### MAX_BAR_W `<Number>  `
  봉 차트에서 사용할 최대 봉 너비  
  **Default** 80

### DEF_BAR_W  `<Number> ` 
  기본 봉 너비  
  **Default** 8

### MIN_BAR_W `<Number>  `
  봉 차트에서 사용할 최소 봉 너비  
  **Default** 8

### BAR_TERM ` <Number>  `
  봉과 봉 사이의 간격

### SIGAIDX `<Number> `
  데이터 배열에서 시가를 나타내는 인덱스  
  **Default** 1

### GOGAIDX ` <Number>`  
  데이터 배열에서 고가를 나타내는 인덱스  
  **Default** 2

### JEOGAIDX  `<Number>`  
  데이터 배열에서 저가를 나타내는 인덱스  
  **Default** 3

### JONGGAIDX  `<Number>`  
  데이터 배열에서 종가를 나타내는 인덱스  
  **Default** 4

### DEALQTIDX  `<Number> ` 
  데이터 배열에서 거래량을 나타내는 인덱스  
  **Default** 5

### upGrpMaxAm,upGrpMinAm` <Number>`  
  상단(가격) 차트 영역의 최대 및 최소 가격 값을 나타냄

### dwGrpMaxAm, dwGrpMinAm `<Number>`  
  하단(거래량 등) 차트 영역의 최대 및 최소 값을 나타냄

### pos `<Object>  `
  차트 그리기에 필요한 각 영역의 좌표와 크기 정보를 저장  
  (예: 캔버스 전체 너비/높이, 그래프 영역, 금액 좌표, 날짜 좌표, 봉 너비 등)

### drawBackType` <Function>`  
  현재 보조 지표에 따른 하단 서브 차트의 백그라운드 그리기 함수를 참조

### drawTextType `<Function>`  
  현재 보조 지표에 따른 서브 차트의 범례 텍스트 그리기 함수를 참조

### drawChartType `<Function>`  
  현재 보조 지표에 따른 차트 그리기 함수를 참조

### drawSubGrpFuncs ` <Array>  `
  보조 지표별 서브 차트 그리기 함수 집합을 2차원 배열로 저장

### calcMaxMinChartType `<Function>  `
  현재 보조 지표에 따른 차트의 최대/최소 값을 계산하는 함수를 참조

### compLeft `<Number> ` 
  차트 컴포넌트의 왼쪽 오프셋 값

### middleX ` <Number>  `
  차트 컴포넌트의 중간 X 좌표

### currentTickCount`<Number>  `
  틱 차트의 실시간 데이터 수신 개수를 추적하는 변수

---

## Static Methods


### setOption(options, flag)  
차트의 옵션을 설정.

- **options**` <Object> ` 
- **flag**` <Boolean>  `

```js
CandleChart.prototype.setOption = function(options, flag) { ... };
```

### setData(dataArray, keyArr)  
원시 데이터 배열과 키 배열을 사용하여 차트 데이터를 설정.

- **dataArray**` <Array>`  
- **keyArr**` <Array>  `
```js
CandleChart.prototype.setData = function(dataArray, keyArr) { ... };
```

### getData()  
현재 설정된 차트 데이터를 반환.
- **Returns** `<Array>`  
```js
CandleChart.prototype.getData = function() { ... };
```

### resetData()  
차트의 내부 데이터 및 계산값을 초기화하고 캔버스를 클리어.
```js
CandleChart.prototype.resetData = function() { ... };
```

### zoomIn()  
줌인 버튼의 ACTION_UP 이벤트를 디스패치하여 줌인 동작을 실행.
```js
CandleChart.prototype.zoomIn = function() { ... };
```

### zoomOut()  
줌아웃 버튼의 ACTION_UP 이벤트를 디스패치하여 줌아웃 동작을 실행.
```js
CandleChart.prototype.zoomOut = function() { ... };
```

### zoomInOut()  
현재 rateVal과 preScale을 비교하여 봉 너비를 조정한 후 차트를 갱신.
```js
CandleChart.prototype.zoomInOut = function() { ... };
```

### scrollLToR(t)  
왼쪽에서 오른쪽으로 스크롤.

- **t** `<Number>  `
```js
CandleChart.prototype.scrollLToR = function(t) { ... };
```

### scrollRToL(t)  
오른쪽에서 왼쪽으로 스크롤.

- **t** `<Number> ` 
```js
CandleChart.prototype.scrollRToL = function(t) { ... };
```

### setMode(mode, noUpdate)  
차트 모드를 설정. 모드에 따라 차트 표현(캔들 vs 라인)이 달라짐

- **mode** `<Number>`  
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setMode = function(mode, noUpdate) { ... };
```

### getMode()  
현재 차트 모드를 반환.
- **Returns** `<Number>`  
```js
CandleChart.prototype.getMode = function() { ... };
```

### setIndicator(indicator, noUpdate)  
보조 지표(Indicator)를 설정하고, 해당 indicator에 따른 서브 차트 그리기 함수를 업데이트.

- **indicator** `<Number> ` 
- **noUpdate**` <Boolean>  `
```js
CandleChart.prototype.setIndicator = function(indicator, noUpdate) { ... };
```

### initEvent()  
터치 이벤트 또는 롱탭 이벤트를 등록.
```js
CandleChart.prototype.initEvent = function() { ... };
```

### changeBtnStyle(inStyle, outStyle)  
줌인 및 줌아웃 버튼의 스타일 클래스를 변경.

- **inStyle** `<String>`  
- **outStyle** `<String> ` 
```js
CandleChart.prototype.changeBtnStyle = function(inStyle, outStyle) { ... };
```

### calcPosition(width, height)  
전체 너비와 높이를 기반으로 차트 내부의 각 영역(날짜, 가격, 그래프 등)의 위치와 크기를 계산.

- **width**` <Number>  `
- **height**` <Number>  `
```js
CandleChart.prototype.calcPosition = function(width, height) { ... };
```

### reCalcWidth(cnt)  
화면에 표시될 캔들 개수를 기반으로 봉 너비와 간격을 재계산.

- **cnt**` <Number>` (Optional)  
```js
CandleChart.prototype.reCalcWidth = function(cnt) { ... };
```

### updateGraph()  
현재 데이터 범위 내에서 최대/최소 값을 계산한 후 차트를 다시 그림
```js
CandleChart.prototype.updateGraph = function() { ... };
```


### draw()  
캔버스를 초기화한 후, 배경 라인, 백그라운드 텍스트, 차트 그래프를 순차적으로 그림
```js
CandleChart.prototype.draw = function() { ... };
```

### drawBackLine()  
차트의 배경 라인(눈금선, 구분선 등)을 그림
```js
CandleChart.prototype.drawBackLine = function() { ... };
```

### drawBackText()  
상단 범례 및 고정 텍스트를 그림
```js
CandleChart.prototype.drawBackText = function() { ... };
```

### setMaxMin()  
현재 표시 데이터의 최대/최소 값을 계산하고, 상단 및 하단 그래프의 비율을 설정.
```js
CandleChart.prototype.setMaxMin = function() { ... };
```

### drawGraph()  
캔들(또는 라인) 차트, 이동평균선, 보조 차트(OBV, MACD, RSI 등)를 그림
```js
CandleChart.prototype.drawGraph = function() { ... };
```

### drawAvgLine(color, prevPoint, x, y)  
이동평균선을 그림

- **color**` <String>`  
- **prevPoint** `<Object> ` 
- **x** `<Number>`  
- **y**` <Number>  `
```js
CandleChart.prototype.drawAvgLine = function(color, prevPoint, x, y) { ... };
```

### drawSubLine(color, prevPoint, x, y)  
보조 차트 선을 그림.

- **color**` <String>  `
- **prevPoint** `<Object>  `
- **x**` <Number> ` 
- **y** `<Number>  `
```js
CandleChart.prototype.drawSubLine = function(color, prevPoint, x, y) { ... };
```

### setBackLineColor(color, noUpdate)  
백그라운드(점선) 색상을 설정하고, 필요 시 차트를 업데이트.

- **color** `<String>  `
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setBackLineColor = function(color, noUpdate) { ... };
```

### setTextColor(color, noUpdate)  
텍스트 색상을 설정하고, 필요 시 차트를 업데이트.

- **color**` <String>  `
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setTextColor = function(color, noUpdate) { ... };
```

### setUpColor(color, noUpdate)  
상승(UP) 색상을 설정하고, 필요 시 차트를 업데이트.

- **color**` <String>  `
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setUpColor = function(color, noUpdate) { ... };
```

### setDownColor(color, noUpdate)  
하락(DOWN) 색상을 설정하고, 필요 시 차트를 업데이트.

- **color** `<String>  `
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setDownColor = function(color, noUpdate) { ... };
```


### drawBackType0()  
거래량 차트의 백그라운드(도트선)를 그림
```js
CandleChart.prototype.drawBackType0 = function() { ... };
```

### drawTextType0()  
거래량 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType0 = function() { ... };
```

### drawMaxMinType0()  
거래량 차트의 최대/최소 값을 표시.
```js
CandleChart.prototype.drawMaxMinType0 = function() { ... };
```

### drawChartType0(index, prevPoints, x)  
거래량 차트를 그림

- **index**` <Number>  `
- **prevPoints**` <Array>  `
- **x** `<Number>  `
```js
CandleChart.prototype.drawChartType0 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType0(index)  
거래량 차트의 최대/최소 값을 계산.

- index ` <Number>  `
```js
CandleChart.prototype.calcMaxMinChartType0 = function(index) { ... };
```

### drawBackType1()  
OBV 차트의 백그라운드를 그림
```js
CandleChart.prototype.drawBackType1 = function() { ... };
```

### drawTextType1()  
OBV 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType1 = function() { ... };
```

### drawMaxMinType1()  
OBV 차트의 최대/최소 값을 표시.
```js
CandleChart.prototype.drawMaxMinType1 = function() { ... };
```

### drawChartType1(index, prevPoints, x)  
OBV 차트를 그림

- **index** `<Number>  `
- **prevPoints** `<Array>  `
- **x** `<Number>  `
```js
CandleChart.prototype.drawChartType1 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType1(index)  
OBV 차트의 최대/최소 값을 계산.

- **index**` <Number>  `
```js
CandleChart.prototype.calcMaxMinChartType1 = function(index) { ... };
```

### drawBackType2()  
MACD 차트의 백그라운드(점선)를 그림
```js
CandleChart.prototype.drawBackType2 = function() { ... };
```

### drawTextType2()  
MACD 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType2 = function() { ... };
```

### drawMaxMinType2()  
MACD 차트의 최대/최소 값을 표시.
```js
CandleChart.prototype.drawMaxMinType2 = function() { ... };
```

### drawChartType2(index, prevPoints, x)  
MACD 차트를 그림

- **index**` <Number>  `
- **prevPoints** `<Array>  `
- **x**` <Number>  `
```js
CandleChart.prototype.drawChartType2 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType2(index)  
MACD 차트의 최대/최소 값을 계산.

- **index** `<Number>  `
```js
CandleChart.prototype.calcMaxMinChartType2 = function(index) { ... };
```

### drawBackType3()  
Slow 차트의 백그라운드(점선)를 그림
```js
CandleChart.prototype.drawBackType3 = function() { ... };
```

### drawTextType3()  
Slow 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType3 = function() { ... };
```

### drawMaxMinType3()  
Slow 차트의 최대/최소 텍스트(예: "80%", "20%")를 표시.
```js
CandleChart.prototype.drawMaxMinType3 = function() { ... };
```

### drawChartType3(index, prevPoints, x)  
Slow 차트를 그림

- **index**` <Number>  `
- **prevPoints** `<Array>  `
- **x**` <Number>  `
```js
CandleChart.prototype.drawChartType3 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType3()  
Slow 차트의 최대/최소 값을 계산.
```js
CandleChart.prototype.calcMaxMinChartType3 = function() { ... };
```

### setChartMode(mode, noUpdate)  
차트 모드를 설정. 모드에 따라 차트 표현을 변경.

- **mode** `<Number> ` 
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setChartMode = function(mode, noUpdate) { ... };
```

### getMode()  
현재 차트 모드를 반환.

- **Returns** `<Number> ` 
```js
CandleChart.prototype.getMode = function() { ... };
```

### setMode(mode, noUpdate)  
차트 모드를 설정하고, 필요 시 차트를 업데이트.

- **mode** `<Number>  `
- **noUpdate** `<Boolean>  `
```js
CandleChart.prototype.setMode = function(mode, noUpdate) { ... };
```

### drawBackType4()  
Fast 차트의 백그라운드(점선)를 그림
```js
CandleChart.prototype.drawBackType4 = function() { ... };
```

### drawTextType4()  
Fast 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType4 = function() { ... };
```

### drawMaxMinType4()  
Fast 차트의 최대/최소 텍스트(예: "80%", "20%")를 표시.
```js
CandleChart.prototype.drawMaxMinType4 = function() { ... };
```

### drawChartType4(index, prevPoints, x)  
Fast 차트를 그림

- **index** `<Number> ` 
- **prevPoints** `<Array>  `
- **x** `<Number>`  
```js
CandleChart.prototype.drawChartType4 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType4()  
Fast 차트의 최대/최소 값을 계산.
```js
CandleChart.prototype.calcMaxMinChartType4 = function() { ... };
```

### drawBackType5()  
이격도 차트의 백그라운드를 그림
```js
CandleChart.prototype.drawBackType5 = function() { ... };
```

### drawTextType5()  
이격도 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType5 = function() { ... };
```

### drawMaxMinType5()  
이격도 차트의 최대/최소 값을 표시.
```js
CandleChart.prototype.drawMaxMinType5 = function() { ... };
```

### drawChartType5(index, prevPoints, x)  
이격도 차트를 그림

- **index**` <Number>  `
- **prevPoints**` <Array>  `
- **x** `<Number>  `
```js
CandleChart.prototype.drawChartType5 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType5(index)  
이격도 차트의 최대/최소 값을 계산.

- **index**` <Number>  `
```js
CandleChart.prototype.calcMaxMinChartType5 = function(index) { ... };
```

### drawBackType6()  
RSI 차트의 백그라운드(점선)를 그림
```js
CandleChart.prototype.drawBackType6 = function() { ... };
```

### drawTextType6()  
RSI 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType6 = function() { ... };
```

### drawMaxMinType6()  
RSI 차트의 최대/최소 텍스트(예: "80%", "20%")를 표시.
```js
CandleChart.prototype.drawMaxMinType6 = function() { ... };
```

### drawChartType6(index, prevPoints, x)  
RSI 차트를 그림

- **index** `<Number> ` 
- **prevPoints** `<Array>  `
- **x** `<Number>  `
```js
CandleChart.prototype.drawChartType6 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType6()  
RSI 차트의 최대/최소 값을 계산.
```js
CandleChart.prototype.calcMaxMinChartType6 = function() { ... };
```

### drawBackType7()  
EMPTY 차트의 백그라운드를 그림
```js
CandleChart.prototype.drawBackType7 = function() { ... };
```

### drawTextType7()  
EMPTY 차트의 범례 텍스트를 그림
```js
CandleChart.prototype.drawTextType7 = function() { ... };
```

### drawMaxMinType7()  
EMPTY 차트의 최대/최소 텍스트를 표시.
```js
CandleChart.prototype.drawMaxMinType7 = function() { ... };
```

### drawChartType7(index, prevPoints, x)  
EMPTY 차트를 그림

- **index** `<Number> ` 
- **prevPoints** `<Array>  `
- **x** `<Number> ` 
```js
CandleChart.prototype.drawChartType7 = function(index, prevPoints, x) { ... };
```

### calcMaxMinChartType7()  
EMPTY 차트의 최대/최소 값을 계산.
```js
CandleChart.prototype.calcMaxMinChartType7 = function() { ... };
```

### isExistNextData()  
현재 화면 이후에 추가 데이터가 존재하는지 확인.

- **Returns** `<Boolean>  `
```js
CandleChart.prototype.isExistNextData = function() { ... };
```

### getOffset()  
startIdx와 BAR_CNT를 기반으로 현재 표시할 데이터의 끝 인덱스(endIdx)를 계산.
```js
CandleChart.prototype.getOffset = function() { ... };
```

### barWidthChange()  
봉(캔들) 너비와 봉 사이의 간격을 재계산하여 BAR_CNT와 시작선 X 좌표를 업데이트.
```js
CandleChart.prototype.barWidthChange = function() { ... };
```

### scrollLToR(t)  
왼쪽에서 오른쪽으로 스크롤

- **t** `<Number> ` 
```js
CandleChart.prototype.scrollLToR = function(t) { ... };
```

### scrollRToL(t)  
오른쪽에서 왼쪽으로 스크롤.

- **t**` <Number>  `
```js
CandleChart.prototype.scrollRToL = function(t) { ... };
```

### updateGraph()  
현재 데이터 범위 내에서 최대/최소 값을 계산한 후 차트를 다시 그림
```js
CandleChart.prototype.updateGraph = function() { ... };
```

### resetZoom(t)  
줌 배율(rateVal)을 1로 재설정하고 기본 봉 너비로 복원한 후 차트를 갱신.

- **t** `<Boolean> ` 
```js
CandleChart.prototype.resetZoom = function(t) { ... };
```

### drawLongTabData(t)  
터치 위치(t)를 기반으로 롱탭 시 상세 데이터를 표시.

- **t** `<Number>`  
```js
CandleChart.prototype.drawLongTabData = function(t) { ... };
```

### autoScroll(t)  
자동 스크롤 타이머를 설정하여 일정 속도로 스크롤.

- **t** `<Number>`  
```js
CandleChart.prototype.autoScroll = function(t) { ... };
```

### setTouchEvent()  
캔버스에 ACTION_DOWN, ACTION_MOVE, ACTION_UP 터치 이벤트를 바인딩하여 스크롤, 줌, 롱탭 동작을 처리.
```js
CandleChart.prototype.setTouchEvent = function() { ... };
```

### setLongTabEvent()  
롱탭 터치 이벤트를 별도로 처리하기 위해 터치 이벤트를 바인딩.
```js
CandleChart.prototype.setLongTabEvent = function() { ... };
```

### addNewData(data, keyArr)  
새로운 히스토리 데이터를 차트 데이터 배열 앞쪽에 추가하고, 관련 계산(이동평균, MACD, RSI 등)을 수행한 후 차트를 갱신.

- **data** `<Array>`  
- **keyArr** `<Array> ` 
```js
CandleChart.prototype.addNewData = function(data, keyArr) { ... };
```

### addRealData(data, keyArr)  
실시간 데이터를 차트 데이터 배열 앞쪽에 추가하고, 관련 계산을 수행한 후 차트를 갱신.

- **data** `<Array>  `
- **`keyArr`**` <Array>`  
```js
CandleChart.prototype.addRealData = function(data, keyArr) { ... };
```

### updateRealData(data, keyArr)  
실시간 데이터 업데이트 시 최신 데이터 행을 수정하고, 관련 계산(이동평균, MACD, RSI 등)을 수행한 후 차트를 갱신.

- **data** `<Array>`  
- **`keyArr`** `<Array>  `
```js
CandleChart.prototype.updateRealData = function(data, keyArr) { ... };
```

### drawLongTabLines()  
터치 이벤트에 따라 중앙 X 좌표와 터치 위치를 비교하여 infoDiv, longXdiv, longYdiv의 위치를 조정하고 drawLongTabData를 호출.
```js
CandleChart.prototype.drawLongTabLines = function() { ... };
```

### makeChartCanvasData(dataArray, keyArr)  
원시 데이터를 차트 그리기 형식으로 변환하고, 이동평균, OBV, MACD, RSI, 스토캐스틱 등의 계산을 수행.

- **dataArray**` <Array> ` 
- **keyArr** `<Array>  `
```js
CandleChart.prototype.makeChartCanvasData = function(dataArray, keyArr) { ... };
```

### makeUpDownData()  
현재 봉의 시가와 종가를 비교하여 상승/하락 여부와 차이 값을 계산하고, upDownArr에 저장.
```js
CandleChart.prototype.makeUpDownData = function() { ... };
```

### makeMoveAvgData()  
이동평균 데이터를 계산하여 topMaArr, bottomMaArr 및 관련 최대/최소 값을 업데이트.
```js
CandleChart.prototype.makeMoveAvgData = function() { ... };
```

### makeDptData()  
이격도 데이터를 계산하여 dptDataArr에 저장.
```js
CandleChart.prototype.makeDptData = function() { ... };
```

### makeMacdObvData()  
MACD, SIGNAL, OBV 데이터를 계산하여 macdDataArr와 obvDataArr에 저장.
```js
CandleChart.prototype.makeMacdObvData = function() { ... };
```

### makeRSIData()  
RSI와 RSISIGNAL을 계산하여 rsiDataArr에 저장.
```js
CandleChart.prototype.makeRSIData = function() { ... };
```

### makeStochasticData()  
스토캐스틱 데이터를 계산하여 stkDataArr에 저장.
```js
CandleChart.prototype.makeStochasticData = function() { ... };
```

### setLongtabLineColor(color)  
롱탭 가이드 라인의 색상을 설정.

- **color** `<String>  `
```js
CandleChart.prototype.setLongtabLineColor = function(color) { ... };
```

### getLongtabLineColor()  
현재 설정된 롱탭 가이드 라인 색상을 반환.

- **Returns** `<String>  `
```js
CandleChart.prototype.getLongtabLineColor = function() { ... };
```

### getMappingCount()  
매핑 가능한 데이터 필드 목록(예: Date, Start Price, High Price, Low Price, End Price, Trade Qty, Trade Price)을 반환.

- **Returns** `<Array>`  
```js
CandleChart.prototype.getMappingCount = function() { ... };
```

### getQueryData()  
현재 설정된 QueryData를 반환.
```js
CandleChart.prototype.getQueryData = function() { ... };
```

### setQueryData(dataArray, keyArr, queryData)  
전달받은 dataArray, keyArr, QueryData를 기반으로 차트 데이터를 업데이트.

- **dataArray** `<Array>  `
- **keyArr**` <Array> ` 
- **queryData** `<Object>`  
```js
CandleChart.prototype.setQueryData = function(dataArray, keyArr, queryData) { ... };
```