# EXJisooChart
> **Extends** BaseChart

지수를 표현하는 차트

EXJisooChart는 금융 데이터를 시각적으로 표현하는 차트 컴포넌트로, **BaseChart** 를 확장하여 더욱 정교한 지수 기반 분석이 가능하도록 설계 됨.

> 이 차트는 확대/축소, 터치 이벤트, 자동 스크롤 등의 기능을 지원하며, 실시간 데이터 업데이트 및 사용자 인터랙션을 위한 다양한 메서드를 제공합니다.

<br/>

## Properties

### delegator `<Object>`

차트 데이터의 인덱스가 마지막에 도달했을 때 추가 데이터를 요청하는 역할을 하는 객체. 

> 주로 서버에서 새로운 데이터를 불러오는 역할을 수행.

```js
chart.setDelegator({
    callNextData: (nextDate) => {
        console.log(`다음 데이터 요청: ${nextDate}`);
    }
});
```
<br/>

### divisionVal `<Number>`

차트 데이터의 값을 특정 기준에 따라 나누어 표현할 때 사용되는 값. 

> 이 값을 조정하면 데이터의 스케일을 조정할 수 있음.

```js
chart.setDivisionVal(100);
```
<br/>

### preScale `<Number>`

현재 차트가 그려진 확대/축소 비율을 나타냄.

* **default** 1



<br/>

### rateVal `<Number>`

줌 기능을 수행할 때 적용되는 확대/축소 비율을 나타냄.

> 이 값을 조정하면 차트가 확대되거나 축소 됨.

* **default** 1

```js
chart.zoomInOut(1.2); // 1.2배 확대
```

<br/>

### zoomState `<Number>`

현재 줌 상태를 나타내는 값으로, 확대, 축소 등의 상태를 추적하는 데 사용 됨

<br/>

### lastDist `<Number>`

줌 동작 시 사용자의 두 손가락 간의 거리값을 저장하는 변수로, 줌 동작을 부드럽게 제어하는 데 사용 됨.

<br/>

### scollSX `<Number>`

스크롤 시작 위치를 나타내며, 차트의 이동 방향을 판단하는 데 활용 됨.

<br/>

### speed `<Number>`

스크롤 이동 속도를 조절하는 변수. 

> 사용자의 스와이프 속도에 따라 스크롤이 조정 됨.

<br/>



### mStartTime `<Number>`

사용자가 터치를 시작한 시간을 저장하는 변수. 

> 이를 통해 스크롤 속도를 계산할 수 있음.

<br/>

### mOldTime `<Number>`

터치를 끝낸 시간을 기록하여 스크롤 가속도를 조정하는 데 사용 됨.

<br/>

### mStartX `<Number>`

터치를 시작한 X 좌표값을 저장. 

> 이를 통해 스크롤 방향과 속도를 계산할 수 있음.

<br/>

### mEndX `<Number>`

터치를 끝낸 X 좌표값을 저장.

<br/>

### mScrollLR `<Boolean>`

스크롤이 왼쪽에서 오른쪽으로 이동하는지, 혹은 오른쪽에서 왼쪽으로 이동하는지를 나타내는 불리언 값.

<br/>


### timer `<Number>`

**autoScroll** 메서드에서 **setTimeout**의 반환값을 저장하는 변수로, 자동 스크롤 동작을 제어하는 데 사용 됨.

<br/>

### startIdx `<Number>`

현재 차트에서 표시되고 있는 데이터의 시작 인덱스. 스크롤 이동 시 업데이트.

<br/>

### startLineX `<Number>`

차트에서 데이터가 시작되는 X 좌표를 나타냄.

<br/>

### endIdx `<Number>`

현재 차트에서 표시되고 있는 데이터의 끝 인덱스. **startIdx**와 함께 스크롤 범위를 결정하는 데 사용 됨.

<br/>

### BAR_CNT `<Number>`

현재 차트에 표시되는 데이터의 개수를 나타냄. 

> 이 값은 차트의 해상도와 설정에 따라 변동될 수 있음.

<br/>


### prdCls `<Number>` (0:월, 1:주, 2:일, 5:분, 7:틱)

차트에서 사용할 날짜 또는 시간 단위를 설정하는 값.

<br/>

### dateformatFunc `<Function Array>`

시간 및 날짜를 특정 형식으로 변환하는 함수들의 배열. **prdCls** 값을 기반으로 적절한 포맷이 선택 됨.

<br/>

### dateformat `<Function>`

현재 **prdCls** 값에 따라 설정된 날짜/시간 포맷 함수.

<br/>

### dashType `<Array>`

차트의 가로 및 세로 구분선을 그릴 때 사용되는 대시 배열. 이 값을 조정하면 점선 스타일을 변경할 수 있음.

<br/>

### TEXT_SIZE `<Number>`

차트 내에서 텍스트의 크기를 나타냄. 화면 크기에 따라 자동으로 조정될 수도 있음.

<br/>


### colorObj `<Object>`

차트에서 사용되는 색상 설정을 저장하는 객체.

```js
{
    BACK: StockColor.BACK,
    TEXT: StockColor.TEXT,
    DOT: StockColor.DOT,
    DIVLINE: StockColor.DIVLINE,
    LINE: StockColor.LINE,
    START: StockColor.START,
    END: StockColor.END
}
```

<br/>

### ROW_CNT `<Number>`

차트 내 금액 단위를 구분하는 행(row)의 개수를 나타냄.  
이 값이 클수록 차트의 세로축이 더 촘촘하게 구분되며, 작은 값일수록 간격이 넓어짐.

-   **default** 14
    

<br/>

### AM_R_WIDTH `<Number>`

차트의 오른쪽 금액 표시 영역(우측 레이블 영역)의 너비를 정의.  
> 이 값이 클수록 오른쪽 금액 표시 공간이 넓어지며, 작은 값일수록 공간이 줄어듦.

* **default** 100

<br/>

### AM_L_WIDTH `<Number>`

차트의 왼쪽 금액 표시 영역(좌측 레이블 영역)의 너비를 정의.  
> 이 값이 0이면 왼쪽에 금액이 표시되지 않으며, 값을 증가시키면 왼쪽에 금액 레이블이 추가될 수 있음.

* **default** 0

<br/>

### MAX_BAR_W `<Number>`

봉차트(캔들 차트)의 최대 봉 너비를 설정.  
줌인(확대)할 때 봉 차트가 확장될 수 있는 최대 너비를 제한.

* **default** 80

<br/>

### DEF_BAR_W `<Number>`

봉차트의 기본 봉 너비를 설정.  
기본적인 축척에서 각 봉의 너비를 결정하며, 줌인/줌아웃 시 변경될 수 있음.

* **default** 8

<br/>

### BAR_TERM `<Number>`

봉차트 간의 간격을 설정.  
값이 `0`이면 봉들이 붙어 보이며, 값을 증가시키면 봉들 사이의 간격이 증가.

* **default** 0

<br/>

### upGrpMaxAm `<Number>`

상단 차트에서 나타낼 수 있는 최대 금액 값을 나타냄.  
차트가 렌더링될 때, 이 값에 따라 y축의 최대값이 결정.

* **default** 0

<br/>

### upGrpMinAm `<Number>`

상단 차트에서 나타낼 수 있는 최소 금액 값을 나타냄.  
차트가 렌더링될 때, 이 값에 따라 y축의 최소값이 결정.

* **default** 0

<br/>

### pos `<Object>`

위치, 크기 관련된 정보를 저장하는 객체
```js
{ 
	cavasW: 0,          //전체 캔버스 너비
	cavasH: 0,          //전체 캔버스 높이
	grpW: 0,            //상단,하단 그래프영역 너비
	grpEX: 0,           //상단,하단 그래프영역 끝 X좌표
	dtXs: [],           //상단,하단 그래프 세로구분 X좌표 배열 [1, 2, 3번째]
	amYs: [],           //상단 그래프 금액 구분선 Y좌표 배열[금액1, 금액2, 금액3, 금액4, 금액5]
	amPad: 0,           //금액 오른쪽 정렬시 마진
	txtY: 0,            //텍스트 세로 중간 정렬을 위한 Y위치  

	upGrpSY: 0,         //상단 그래프 시작 Y좌표
	upDtY: 0,           //상단 그래프 Date 영역 Y
	upGrpEY: 0,         //상단 그래프 끝 Y좌표
	upGrpH: 0,          //상단 그래프 그리는 영역 높이

	upRateH:  0,        //상단 높이 비율

	barW: this.DEF_BAR_W, //봉차트 너비

	barTot: 0           //봉차트 너비에 봉과 봉사이의 간격을 더한값(한봉이 그려지는 영역)
};
```
<br/>

### compLeft `<Number>`


차트 엘리먼트의 **왼쪽 기준 위치**(Left 지점)를 나타냄.
> 이 값은 차트 내에서 요소들의 상대적인 위치를 계산하는 데 사용 됨.

-   **default**: 0 (초기값, 필요에 따라 변경됨)

### middleX `<Number>`


차트 엘리먼트의 **가운데 X 좌표**를 나타냄.
> 이 값은 차트 내에서 중심을 기준으로 한 위치 계산이나 정렬 등에 활용될 수 있음.

-   **default**: 0 (초기값, 필요에 따라 변경됨)

## Instance Methods

### drawDashedLine( ctx, x1, y1, x2, y2, dashArray )

점선 형태의 선을 그리는 함수.

```js
EXJisooChart.prototype.drawDashedLine = function(ctx, x1, y1, x2, y2, dashArray) {
    ctx.setLineDash(dashArray);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]); // 원래 상태로 복구
};
```

### drawGraph()

지수차트를 생성. 
> 내부적으로 `drawBackLine()`을 호출하여 배경선을 그리고 데이터를 시각화.

```js
chart.drawGraph();
```

<br/>

### resetData()

지수차트 데이터를 초기화.

<br/>

### setColors( colors )

지수차트의 색상을 셋팅.

* **colors** `<Object>`

			색상객체
			TEXT: '#FFFFFF', //폰트색
			DOT: '#5d5d5d', //도트색
			LINE: '#F82008', //라인색
			START: '#00ff00', //그라디언트 시작색
			END: 'rgba(0, 250, 0, 0.0)' //그라디언트 끝색

<br/>

### setData( data )

지수차트 데이터를 셋팅.

* **data** `<Array>` [[일시, 시가, 고가, 저가, 종가, 누적거래량, 누적거래 대금],...]

<br/>

### setDelegator( delegator )

delegator를 셋팅.

* **delegator** `<Object>` 이벤트를 받을 객체

<br/>

### setDivisionVal( divisionVal )

지수차트 데이터를 나눗셈할 값을 셋팅.

* **divisionVal** `<Number>` 나눗셈할 값

<br/>

### setTitle( title )

지수차트 타이틀 문구를 셋팅.

* **title** `<String>` 타이틀 문구

<br/>


### initEvent()

터치이벤트와 줌이벤트를 셋팅.
<br/>

### updatePosition( pWidth, pHeight )

차트의 너비 및 높이를 업데이트.

* **pWidth** `<Number>` 업데이트 할 너비
* **pHeight** `<Number>` 업데이트 할 높이

<br/>

### setZoomEvent()

줌 이벤트를 설정. 확대 축소 비율은 점점 커짐.


<br/>

### getTitle()

차트 제목을 반환.

* **Returns** `<String>`


<br/>

### calcPosition( elWidth, elHeight )

컴포넌트의 너비와 높이값을 이용하여 canvas에 들어갈 영역 x, y값을 설정

* **elWidth** `<Number>` 컴포넌트 너비
* **elHeight** `<Number>` 컴포넌트 높이

<br/>

### setIsFirst( isFirst )

차트가 처음 로드되었는지 여부를 설정하는 함수.

* **isFirst** `<Boolean>` 호출 여부

```js
chart.setIsFirst(true);
```


<br/>

### getIsFirst()

차트가 처음 로드되었는지 여부를 반환하는 함수.

* **Returns** `<Boolean>`

```js
const isFirst = chart.getIsFirst();
console.log(isFirst);
```

<br/>

### setPrdCls( prdCls )

차트의 날짜/시간 단위를 설정하는 함수. **prdCls** 값에 따라 **dateformatFunc**을 적용.

* **prdCls** `<Number>` 포멧 함수(dateformatFunc) 인덱스

```js
chart.setPrdCls(2); // 일 단위 설정
```

<br/>

### setMaxMin()

차트의 최대값과 최소값을 계산하여 설정하는 함수.

```js
chart.setMaxMin();
```


<br/>

### draw()

차트의 모든 요소를 다시 그려 화면을 업데이트. 기존 데이터를 유지하면서 시각적인 변화를 적용할 때 사용 됨. 

> 이 함수는 `drawBackLine()` 및 `drawGraph()`를 호출하여 차트의 배경선과 데이터를 다시 렌더링.

```js
chart.draw(); // 차트를 새로 그림
```

<br/>

### drawBackLine()

차트의 배경선을 그리는 함수.

```js
chart.drawBackLine();
```

<br/>

### setBackLineColor(color, isRefresh)

백그라운드 컬러를 설정.

```js
chart.setBackLineColor('#f0f0f0', true);
```


* **color** `<String>` 백그라운드 컬러
* **isRefresh** `<Boolean>` 새로고침 여부

<br/>


### setTextColor(color, isRefresh)

텍스트 컬러를 설정.

```js
chart.setTextColor('#333333', true);
```

* **color** `<String>` 백그라운드 컬러
* **isRefresh** `<Boolean>` 새로고침 여부

<br/>

### setUpColor( color, isRefresh )

상승 컬러를 설정.

```js
chart.setUpColor('#00FF00', true);
```


* **color** `<String>` 백그라운드 컬러
* **isRefresh** `<Boolean>` 새로고침 여부


<br/>


### setDownColor( color, isRefresh )

하락 컬러를 설정.

```js
chart.setDownColor('#FF0000', true);
```

* **color** `<String>` 백그라운드 컬러
* **isRefresh** `<Boolean>` 새로고침 여부



<br/>

### isExistNextData()

데이터가 있는지 확인하는 함수.

* **Returns** `<Boolean>`

```js
const hasMoreData = chart.isExistNextData();
console.log(hasMoreData);
```

<br/>

### getOffset()

현재 데이터의 오프셋 값을 가져오는 함수.

```js
const offset = chart.getOffset();
console.log(offset);
```

<br/>

### barWidthChange()

차트의 봉 너비를 변경하는 함수.

```js
chart.barWidthChange();
```


<br/>


### scrollLToR()

왼쪽에서 오른쪽으로 스크롤을 실행.

```js
chart.scrollLToR(3); // 3칸 오른쪽으로 이동
```

### scrollRToL()

오른쪽에서 왼쪽으로 스크롤을 실행.

```js
chart.scrollRToL(2); // 2칸 왼쪽으로 이동
```


### updateGraph()

현재 데이터를 기준으로 차트를 갱신.

```js
chart.updateGraph();
```

<br/>

### zoomInOut()

확대 및 축소를 수행. **rateVal**을 기준으로 확대/축소 값을 결정하며, **MAX_BAR_W**와 **DEF_BAR_W** 사이에서 조정 됨.

```js
chart.zoomInOut(1.5); // 1.5배 확대
chart.zoomInOut(0.8); // 0.8배 축소
```

<br/>

### drawLongTabData(touchX)

롱탭 시 안내선을 표시하고 상세 데이터를 출력

* **touchX** `<Number>` 롱탭시 해당 터치 X좌표

```js
chart.drawLongTabData(150);
```

<br/>

### autoScroll(speed)

자동 스크롤을 설정

* **speed** `<Number>` 자동스크롤 속도

```js
chart.autoScroll(5);
```

<br/>


### setTouchEvent()

스크롤 또는 롱탭 감지를 위해 이벤트를 등록

```js
chart.setTouchEvent();
```

<br/>

### addNewData(dataArr, keyArr)

새로운 데이터를 추가하는 함수

* **dataArr** `<Array>`  데이터 배열
* **keyArr** `<Array>` 키 배열

```js
chart.addNewData(
  [['2024-02-11', 102, 112, 98, 107]],
  ['date', 'open', 'high', 'low', 'close']
);
```
<br/>

### drawLongTabLines()

롱탭한 위치에 십자가 모양의 가이드라인을 표시하는 함수.

```js
chart.drawLongTabLines();
```

<br/>

### setLongtabLineColor(color)

롱탭 시 가이드라인 색상을 변경하는 함수.

* **color** `<String>` 색상값

```js
chart.setLongtabLineColor('#FF00FF');
```

<br/>

### getLongtabLineColor()

롱탭 가이드라인 색상을 반환하는 함수.

* **Returns** `<String>`

```js
const color = chart.getLongtabLineColor();
console.log(color);
``` 

<br/>

### getMappingCount()

차트 데이터에서 매핑할 수 있는 필드 목록을 배열 형태로 반환. 
반환된 배열은 데이터 구조를 정의하는 데 사용 됨.

* **Returns** `<Array>`

```js
const mappingFields = chart.getMappingCount();
console.log(mappingFields);

// 출력 예시: ['Date', 'Start Price', 'High Price', 'Low Price', 'End Price', 'Trade Qty', 'Trade Price']
```


<br/>

### getQueryData(t, s)

특정 조건(**t**, **s**)에 따라 차트 데이터를 조회

```js
const data = chart.getQueryData('date', 'price');
console.log(data);
```

### setQueryData(t, s, i)

특정 조건(**t**, **s**, **i**)에 따라 차트 데이터를 설정

```js
chart.setQueryData([
	['2024-02-10', 100, 110, 95, 105]], 
	['date', 'open', 'high', 'low', 'close']
);
```