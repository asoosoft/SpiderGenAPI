# EXHogaGrid
>  **Extends**: [AGrid](https://wikidocs.net/275178)

`EXHogaGrid` 는 주식 가격을 관리하고 표시할 수 있는 그리드 시스템을 제공. 

이 클래스는 주식 가격 추적, bid/ask 바, 가격 변동에 따른 색상 변경 등의 기능을 제공하며, 실시간으로 주식 가격을 시각화하는 데 유용.

## Instance Variables

<br>

### quoteCount `<Number>`

그리드에서 표시할 견적 정보의 행 수

> 기본값: 10

---

### rowLen `<Number>`

그리드의 행 수

---


### colLen `<Number>`

그리드의 열 수

---


### btmRowCnt `<Number>`

하단 행의 수

> 예: 푸터 정보 등을 표시하는 데 사용

---


### basePrice `<Number | undefined>`

주식 가격 변동을 결정하는 기준 가격

---


### basePriceKey `<String>`

행에서 기준 가격 데이터를 가져오기 위한 키 이름

---


### curPriceKey `<String>`

행에서 현재 가격 데이터를 가져오기 위한 키 이름

---


###  currentCell ` <Object>`

현재 선택된 셀

---


### currentPrice` <Number | undefined>`

현재 추적 중인 가격

---


### curPriceStyleArr `<Array>`

가격 변동에 따라 셀을 스타일링하는 데 사용되는 CSS 클래스 이름 배열 **`up, down, steady`**

---


### upColor `<String>`

상승 가격에 사용할 색상

---


### downColor `<String>`

하락 가격에 사용할 색상

---


### steadyColor `<String>`

안정된 가격에 사용할 색상

---

### barSize `<String>`

바의 크기를 정의하는 문자열

> 기본값: **`70%`**

---


### valArr `<Array>`

그리드의 셀 값들을 저장하는 배열

---


### rateMode `<Boolean>`

비율 모드 활성화 여부

---


### rateClass `<String>`

비율 텍스트에 적용할 CSS 클래스

---


### rateStyle `<String>`

비율 텍스트의 CSS 스타일

---
	
### eleW `<Number>`

요소의 너비를 저장하는 변수

---


### eleH `<Number>`

요소의 높이를 저장하는 변수

---


### frwName `<String>`

프레임워크 이름을 저장하는 변수

---


### ctx `<CanvasRenderingContext2D>`

**CanvasRenderingContext2D 객체**로, <br>
그리기 작업을 할 수 있는 컨텍스트

---


### decimalExp` <Number>`

실수 데이터를 표현할 때 소수점 이하 자리 수를 지정하는 변수

---


### rateSuffixStr` <String>`

비율에 추가할 접미사 문자열

> 기본값: **%**

---

<br>

## Class Methods

### setRateSuffixStr(suffix)

`rateSuffixStr`을 설정하여 비율 표시 후 추가할 접미사를 정의.

- suffix `<String>`: 비율 표시 후 추가할 접미사 문자열

	> 기본값: **%**

```js
// 등락률의 접미사를 설정.
this.hogaGrid.setRateSuffixStr('%');
```

---

<br>

## Instance Methods

### init(t, e)

그리드의 초기 설정을 진행하며, 필수적인 속성들을 초기화. 

`quoteCount`, `basePriceKey`, `curPriceKey` 등의 설정이 이 메서드에서 처리.

-   **t**` <Object>`: 컴포넌트의 설정 데이터를 포함한 객체
-   **e** `<Object>`: 이벤트 관련 데이터를 포함한 객체


---

### clearContents()

그리드의 모든 값을 초기화하고, 각 셀의 텍스트 및 데이터 마스크를 삭제.

```js
// 특정 이벤트나 조건에 따라 호가 그리드의 내용을 지움.
this.hogaGrid.clearContents();
```

---
### setBasePrice(price)

주어진 가격을 기준으로 각 셀의 가격 색상을 결정. 

기준 가격보다 높은 값은 상승 색상으로, 낮은 값은 하락 색상으로 표시.

-   **price**` <Number>`: 기준 가격

```js
// 기준가를 설정. 
this.hogaGrid.setBasePrice(2500);
```

---
### setCurrentPrice(price)

현재 가격을 설정하고, 그 가격이 일치하는 셀을 선택하여 스타일을 적용.

-   **price** `<Number>`: 현재 가격

```js
// 현재가를 설정. 
this.hogaGrid.setCurrentPrice(2300);
```

---
### setCurPriceKey(key)

현재가의 필드명을 설정.

-   **key** `<String>`: 현재가의 필드명

```js
// 현재가의 필드명을 설정. 
this.hogaGrid.setCurPriceKey('cur_price');
```

---
### setUpColor(color)

상승 가격에 해당하는 셀의 색상을 설정.

-   **color**` <String>`: 상승 가격에 사용할 색상

```js
// 상승 색상을 설정. 
this.hogaGrid.setUpColor('#ff0000'); // 빨간색으로 설정
```

---
### setDownColor(color)

하락 가격에 해당하는 셀의 색상을 설정.

-   **color** `<String>`: 하락 가격에 사용할 색상

```js
// 하락 색상을 설정. 
this.hogaGrid.setDownColor('#0000ff'); // 파란색으로 설정
```

---
### setSteadyColor(color)

안정적인 가격에 해당하는 셀의 색상을 설정.

-   **color** `<String>`: 안정된 가격에 사용할 색상

```js
// 보합 색상을 설정. 
this.hogaGrid.setSteadyColor('#000000'); // 검정색으로 설정
```

---

### setRateMode(mode)

등락률 표시 여부를 설정.

-   **mode** `<Boolean>`: 등락률 표시 또는 비표시

```js
this.hogaGrid.setRateMode(true); // 등락률을 표시하도록 설정
```

---

### setBarSize(size)

견적 정보를 나타내는 바의 크기를 설정.

-   **size**` <String>`: 바의 크기

	> 기본값: **70%**

```js
// 호가 잔량 바의 높이를 설정. 
this.hogaGrid.setBarSize('20px'); // 바 높이를 20px로 설정
```

---

### selectCurrentCell(cell)

현재 가격에 해당하는 셀을 선택하고 스타일을 적용하여 강조 표시.

-   **cell** `<Object>`: 현재 가격에 해당하는 셀

```js
// 현재 선택된 셀을 강조 표시. 
this.hogaGrid.selectCurrentCell(2, 3); // 2번째 행, 3번째 열의 셀을 선택
```

---
### setQueryData(data, fieldArr, rowData)

데이터를 그리드에 설정하고 각 셀에 값을 할당하며, <br>
비율 및 스타일을 업데이트.

-   **data** `<Array>`: 데이터 배열

	> 각 행의 데이터를 포함
	
-  **fieldArr** `<Array>`: 데이터 필드를 나타내는 배열

-  **rowData** `<Object>`: 데이터 행을 포함한 객체

```js
// 데이터 배열과 키 배열을 참조하여 컴포넌트에 데이터를 세팅. 
this.hogaGrid.setQueryData(data, fieldArr, rowData);
```

---

### getUpColor()

상승 가격에 사용할 색상을 반환.

```js
// 상승일 때의 글자 색상을 가져옴. 
const color = this.hogaGrid.getUpColor();
```

---

### getDownColor()

하락 가격에 사용할 색상을 반환.

```js
// 하락일 때의 글자 색상을 가져옴. 
const color = this.hogaGrid.getDownColor();
```

---

### getSteadyColor()

안정된 가격에 사용할 색상을 반환.

```js
// 보합일 때의 글자 색상을 가져옴. 
const color = this.hogaGrid.getSteadyColor();
```

---

### resetGrid()

그리드 데이터를 초기화하고, 비어 있는 데이터를 설정하는 메소드.

```js
// 그리드를 초기화. 
this.hogaGrid.resetGrid();
```

---

### setDecimal(t)

실수 데이터를 표현할 때 소수점 아래 자리 수를 설정하는 메소드.

- **t**` <Number>`: 소수점 자리 수

```js
// 호가의 소수점 아래 자리수를 설정. 
this.hogaGrid.setDecimal(4); // 소수점 아래 4자리로 설정
```

---

### setBasePriceKey(t)

기준가로 사용할 필드명을 설정하는 메소드.

- **t** `<Number>`: 기본 가격을 나타내는 키


```js
// 기준가로 사용할 필드명을 설정. 
this.hogaGrid.setBasePriceKey('base_price');
```

---

### decimalFunc(t, e, r)

값을 소수점 아래 자리 수에 맞게 표현하는 기능을 제공.

- **t**` <Any>`: 값

- **e** `<Array<number>>`: 소수점 자리 수

- **r** `<Any>`: 기타 값

```js
// 소수점 아래 자리수를 표현. 
const formattedValue = this.hogaGrid.decimalFunc(value, 2, 'round'); 
// value를 소수점 아래 2자리로 반올림하여 표현
```

---

### setAskBarBgImg(t)

매도 잔량 바의 배경 이미지를 설정하는 메소드.

- **t** `<String>`: 배경 이미지 URL

```js
// 매도 잔량바의 Background-image를 지정. 
this.hogaGrid.setAskBarBgImg('url/to/your/image.png');
```

---

### getAskBarBgImg()

매도 잔량 바의 배경 이미지를 가져오는 메소드.

- **Returns**` <String>`: 배경 이미지 URL

```js
// 매도 잔량바의 Background-image를 가져옴. 
const bgImage = this.hogaGrid.getAskBarBgImg();
```

---

### setBidBarBgImg(t)

매수 잔량 바의 배경 이미지를 설정하는 메소드.

- **t** `<String>`: 배경 이미지 URL

```js
// 매수 잔량바의 Background-image를 지정. 
this.hogaGrid.setBidBarBgImg('url/to/your/image.png');
```

---

### getBidBarBgImg()

매수 잔량 바의 배경 이미지를 가져오는 메소드.

- **Returns** `<String>`: 배경 이미지 URL

```js
// 매수 잔량바의 Background-image를 가져옴. 
const bgImage = t# setAskBarPositionX(t)

매도 잔량 바의 X 위치를 설정하는 메소드.

- **`t`** <String>: X 위치 값

```js
// 매도 잔량바의 시작 위치 x 값을 지정. 
this.hogaGrid.setAskBarPositionX('10px'); 
// x 위치를 10px로 설정
```

---

### getAskBarPositionX()

매도 잔량 바의 X 위치를 가져오는 메소드.

- **Returns** <String>: X 위치 값

```js
// 매도 잔량바의 시작 위치 x 값을 가져옴. 
const positionX = this.hogaGrid.getAskBarPositionX();
```

---

### setBidBarPositionX(t)

매수 잔량 바의 X 위치를 설정하는 메소드.



- **t**  `<String>`: X 위치 값


```js
// 매수 잔량바의 시작 위치 x 값을 지정### . 
this.hogaGrid.setBidBarPositionX('10px'); 
// x 위치를 10px로 설정
```

---

### getBidBarPositionX()

매수 잔량 바의 X 위치를 가져오는 메소드.

- **Returns** <String>: X 위치 값

```js
// 매수 잔량바의 시작 위치 x 값을 가져옴. 
const positionX = this.hogaGrid.getBidBarPositionX();
```

---

### setAskBarPositionY(t)

매도 잔량 바의 Y 위치를 설정하는 메소드.


- **t** `<String>`: Y 위치 값


```js
// 매도 잔량바의 시작 위치 Y 값을 지정. 
this.hogaGrid.setA## getAskBarPositionY()

매도 잔량 바의 Y 위치를 가져오는 메소드.

- **Returns**` <String>`: Y 위치 값

```js
// 매도 잔량바의 시작 위치 y 값을 가져옴. 
const positionY = this.hogaGrid.getAskBarPositionY();
```

---

### setBidBarPositionY(t)

매수 잔량 바의 Y 위치를 설정하는 메소드.

- **t** `<String>`: Y 위치 값

```js
// 매수 잔량바의 시작 위치 Y 값을 지정. 
this.hogaGrid.setBidBarPositionY('10px'); 
// Y 위치를 10px로 설정
```

---

### getBidBarPositionY()

매수 잔량 바의 Y 위치를 가져오는 메소드.

- **Returns** `<String>`: Y 위치 값

```js
// 매수 잔량바의 시작 위치 y 값을 가져옴. 
const positionY = this.hogaGrid.getBidBarPositionY();
```

---

### toggleRateMode()

호가 옆에 등락률을 표시하거나 제거하는 기능을 제공.

```js
// 호가 옆에 등락률을 토글. 
this.hogaGrid.toggleRateMode();
```

---

### setRateTag(t, e)

등락률을 표시할 HTML 요소를 설정하는 메소드.

- **t**` <Any>`: 값

- **e** `<HTMLElement>`: HTML 요소

```js
// 등락률을 표시할 HTML 요소에 값을 설정. 
this.hogaGrid.setRateTag('5%', document.getElementById('rateElement'));
```

---