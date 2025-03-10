# EXMiniHoga  

> **Extends**: AGrid
  
호가와 거래량을 2열로 표시하는 호가그리드. 형태는 아래와 같음.  
  
1열 | 2열  
:--- | ---:  
매수호가N | 거래량  
... | ...  
매수호가1 | 거래량  
매도호가1 | 거래량  
... | ... | ...  
매도호가N | 거래량  
  
  
## Instance Variables

### frwName `<String>`

검색 뷰가 속한 프레임워크 이름을 지정하는 문자열

* **Default** "stock"

```js
const hoga = new EXMiniHoga();
console.log(hoga.frwName); // "stock"
``` 


### quoteCount `<Number>`  
호가 단계(5호가, 10호가)를 설정하는 변수.
  
* **Default** 10

```js
// 호가 데이터를 표시하는 그리드에서 기본적으로 10단계의 호가 데이터를 보여주도록 설정된다. 
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.quoteCount); // 10 (기본값)
hogaGrid.quoteCount = 5;
console.log(hogaGrid.quoteCount); // 5 (변경됨)
```
  
### rowLen `<Number>`  

호가가 적용된 로우의 개수  
  
```js
// 호가 데이터가 여러 개의 행으로 표시되는데, 초기에는 데이터가 없기 때문에 0으로 데이터를 설정하면 이 값이 증가한다.
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.rowLen); // 0 (초기값)
hogaGrid.rowLen = 20;
console.log(hogaGrid.rowLen); // 20 (변경됨)
```
  
### colLen `<Number>`  

호가를 표현할 컬럼의 개수  
  
* **Default** 0

```js
// 일반적으로 매수/매도 가격과 거래량이 포함된다.
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.colLen); // 0 (초기값)
hogaGrid.colLen = 2; 
console.log(hogaGrid.colLen); // 2 (변경됨)
```  
  
### btmRowCnt `<Number>`  
하단 데이터 영역의 로우 개수   

* **Default** 0
  
### basePrice `<Number>`  

기준가를 설정하여 상승, 하락 여부를 판단할 때 사용.

```js
// 기준가는 매수/매도 가격과 비교하여 상승, 하락, 보합을 결정하는 기준이 된다.
hogaGrid.setBasePrice(50000);
console.log(hogaGrid.basePrice); // 50000
```
  
### basePriceKey `<String>`  
수신데이터에서 기준가를 가져오기 위한 키값  
  
  
### curPriceKey `<String>`  
수신데이터에서 현재가를 가져오기 위한 키값  
  
  
### currentCell `<jQuery Object>`  
jQuery 현재가셀을 저장하는 변수  
  
  
### currentPrice `<Number>`  

현재가를 저장하는 변수
  
```js
const hogaGrid = new EXMiniHoga();
hogaGrid.currentPrice = 85000;  
console.log(hogaGrid.currentPrice); // 85000 (현재가)
```  
  
### upColor `<String>`  
  
기본 상승색(기본값 StockColor.UP_COLOR)  
  
```js
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.upColor); // "#ff0000" (상승색 기본값)
hogaGrid.upColor = "#ff6600"; // 상승 색상 변경
console.log(hogaGrid.upColor); // "#ff6600"
```
  
### downColor `<String>`  
  
기본 하락색(기본값 DOWN_COLOR.UP_COLOR)  
  
  
### steadyColor `<String>`  
  
기본 보합색(기본값 STEADY_COLOR.UP_COLOR)  
  
  
### barSize `<String>`  
  
매도, 매수 잔량을 표시하는 바 높이(기본값 70%)  
  
  
### valArr `<Array>`  
  
호가그리드의 데이터 값들을 저장하고 있는 2차원 배열. 그리드 형태와 동일  

### ctrtMode `<Boolean>`

계약 모드 활성화 여부를 나타내는 플래그

* **Default** false **true**이면 특정 거래 계약 모드에서 작동

```js
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.ctrtMode); // false (기본값)
hogaGrid.ctrtMode = true;
console.log(hogaGrid.ctrtMode); // true (변경됨)
```

### curPriceStyleArr`<Array>`

현재가에 해당하는 셀 스타일 목록을 지정하는 배열.

* 기본값: **["EXMiniHoga-CurPrice-Up", "EXMiniHoga-CurPrice-Down", "EXMiniHoga-CurPrice-Steady"]**

```js
const hogaGrid = new EXMiniHoga();
console.log(hogaGrid.curPriceStyleArr); 
// ["EXMiniHoga-CurPrice-Up", "EXMiniHoga-CurPrice-Down", "EXMiniHoga-CurPrice-Steady"]
```

### delegator `<Object>`

델리게이터(이벤트 핸들러) 객체.

* quoteCount, bottomRowCount가 변경될 때 호출되는 **change 이벤트**를 포함.

```js
const hogaGrid = new EXMiniHoga();

hogaGrid.setDelegator({
    onRowCountChange: () => {
        console.log("호가 단위 변경됨!");
    }
});
hogaGrid.setQuoteCount(10); // 델리게이터의 onRowCountChange() 실행

```

### currentCellBorderRight `<String>`

현재가 셀의 우측 테두리 속성을 저장하는 변수.

### currentCellBorderBottom `<String>`

현재가 셀의 하단 테두리 속성을 저장하는 변수.

  
## Instance Methods
  
  
### clearContents()  

호가 데이터를 초기화하는 함수(그리드를 비움.)

```js
const hogaGrid = new EXMiniHoga();
hogaGrid.clearContents(); // 그리드 내 데이터 삭제
```
  
  
### resetGrid()  

그리드를 초기화하고 기본 행을 추가.


### setDelegator( delegator )

델리게이터 객체를 설정하는 함수.

* **delegator** `<Object>`
	* **onRowCountChange()**: 호가 단계 변경 시 호출.

```js
const hogaGrid = new EXMiniHoga();

hogaGrid.setDelegator({
    onRowCountChange: () => {
        console.log("호가 단계가 변경되었습니다.");
    }
});

hogaGrid.setQuoteCount(5); // "호가 단계가 변경되었습니다." 출력
```

### setQueryData( data, keyArr, additionalData )

서버에서 수신된 데이터를 그리드에 반영하는 함수.

* **data** `<Array>` 서버에서 받은 데이터 배열
* **keyArr** `<Array>` 데이터 매핑을 위한 키 배열
* **additionalData** `<Object>` 추가 데이터

```js
const serverData = [{ price: 90000, volume: 500 }];
const keyMapping = ['price', 'volume'];

hogaGrid.setQueryData(serverData, keyMapping);
```

  
### setBasePrice( basePrice )  
  
호가 기준 가격을 설정하는 함수
  
* **basePrice** `<Number>`  
   
```js
const hogaGrid = new EXMiniHoga();
hogaGrid.setBasePrice(85000);
console.log(hogaGrid.basePrice); // 85000
```
  
### setBasePriceKey( basePriceKey )  
  
수신데이터에서 기준가를 뽑아올 키값을 설정한다.  
  
* **basePriceKey** `<String>`  

```js
hoga.setBasePriceKey('basePrice');
```
  
  
### setCurrentPrice( currentPrice )  
  
현재가를 설정하고, **현재가와 일치하는 셀을 강조 표시하는 함수.**
  
* **currentPrice** `<Number>`  
  
```js
const hogaGrid = new EXMiniHoga();
hogaGrid.setCurrentPrice(86000);
console.log(hogaGrid.currentPrice); // 86000
```
  
### setCurPriceKey( keyName )  
  
수신데이터에서 현재가를 뽑아올 키값을 설정.  
  
* **keyName** `<String>`  

```js
hoga.setCurPriceKey('currentPrice');
```

### setUpColor( color )  
  
호가 상승색을 설정.  
  
* **color** `<String>` #ff0000

```js
hoga.setUpColor('#ff0000');
```
  
  
### setDownColor( color )  
  
호가 하락색을 설정.  
  
* **color** `<String>` #0000ff  

```js
hoga.setDownColor('#0000ff');
```
  
  
### setSteadyColor( color )  
  
호가 보합색을 설정.  
  
* **color** `<String>` #000000  

```js
hoga.setSteadyColor('#000000');
```
  
  
### getUpColor()  
  
호가 상승색을 반환.  
  
* **Returns** `<String>` #ff0000  

```js
console.log(hoga.getUpColor());  // #ff0000
```
  
### getDownColor()  
  
호가 하락색을 반환.  
  
* **Returns** `<String>` #0000ff  

```js
console.log(hoga.getDownColor());  // #0000ff
```
  
### getSteadyColor()  
  
호가 보합색을 반환.  
  
* **Returns** `<String>` #000000  

```js
console.log(hoga.getSteadyColor()); // #000000
```
  
### selectCurrentCell( mapCell )  
  
파라미터로 전달받은 셀을 현재가의 상승, 하락, 보합에 따라 셀에 클래스를 지정.</br>  
(호가가 현재가와 일치한 셀)  
  
* **mapCell** `<HTMLTableCellElement>` 호가와 현재가가 일치하는 셀 엘리먼트  

```js
let cell = document.querySelector('.price-cell');
hoga.selectCurrentCell(cell);
```
  
  
### setCurrentPriceStyleArr( styleArr )  
  
현재가에 해당하는 셀에 추가할 상승, 하락, 보합의 클래스 목록을 지정.  
  
* **styleArr** `<Array>` [상승클래스, 하락클래스, 보합클래스]  
 
```js
hoga.setCurrentPriceStyleArr(['up-class', 'down-class', 'steady-class']);
```
  
### initBar()  
  
호가 잔량을 표현하는 바를 초기화.  
  
### setBarSize( barSize )  
  
호가 잔량을 표현하는 바의 높이를 지정.  
  
* **barSize** `<String>` 바 높이   
  
### getBarSize()  
  
호가 잔량을 표현하는 바의 높이를 반환.  
  
* **Returns** `<String>` 바 높이  
  
### setAskBarBgImg( bgImage )  
  
매도 잔량바의 Background-image를 지정.  
  
* **bgImage** `<String>`  
  
### getAskBarBgImg()  
  
매도 잔량바의 Background-image를 반환.  
  
* **Returns** `<String>`  
  
### setBidBarBgImg( bgImage )  
  
매수 잔량바의 Background-image를 지정.  
  
* **bgImage** `<String>`  
  
### getBidBarBgImg()  
  
매수 잔량바의 Background-image를 반환한다.  
  
* **Returns** `<String>`  

### setAskBarPositionX( pos )  
  
매도 잔량바의 시작 위치 x 값을 반환.  
  
* **pos** `<String>` background-position-x  
  
### getAskBarPositionX()  
  
매도 잔량바의 시작 위치 x 값을 반환.  
  
* **Returns** `<String>` background-position-x  
  
### setAskBarPositionY( pos )  
  
매도 잔량바의 시작 위치 y 값을 지정.  
  
* **pos** `<String>` background-position-y  
  
### getAskBarPositionY()  
  
매도 잔량바의 시작 위치 y 값을 반환.  
  
* **Returns** `<String>` background-position-y  
  
### setBidBarPositionX( pos )  
  
매수 잔량바의 시작 위치 x 값을 지정.  
  
* **pos** `<String>` background-position-x   

### setBidBarPositionY( pos )

매수 잔량바의 Y축 시작 위치를 지정.

* **pos** `<String>` background-position-y 
  
### getAskBarPositionX()  
  
매수 잔량바의 시작 위치 x 값을 반환.  
  
* **Returns** `<String>` background-position-x  
  
### setAskBarPositionY( pos )  
  
매수 잔량바의 시작 위치 y 값을 지정.  
  
* **pos** `<String>` background-position-y  
  
### getAskBarPositionY()  
  
매수 잔량바의 시작 위치 y 값을 반환.  
  
* **Returns** `<String>` background-position-y  
  
### setBottomRowCount( btmRowCnt )  
  
호가를 하단에 표현될 로우의 개수를 지정.  
  
* **btmRowCnt** `<Number>`   
  
### getBottomRowCount()  
  
호가를 하단에 표현된 로우의 개수를 반환.  
  
* **Returns** `<Number>`  
  
### setQuoteCount( cnt )  
  
호가의 단계를 지정. 5호가, 10호가 등  
  
* **cnt** `<Number>`  
  
```js
const hogaGrid = new EXMiniHoga();
hogaGrid.setQuoteCount(5);
console.log(hogaGrid.quoteCount); // 5
```
  
### getQuoteCount()  
  
호가의 단계를 반환. 5호가, 10호가 등  
  
* **Returns** `<Number>`  