# EXBong

> **Extends** [AComponent](https://wikidocs.net/274979)

**주식 가격의 변동을 시각적으로 표시**하는 기능을 제공하는 컴포넌트

- 주식 차트에서 변동선을 보여주며, up, down, steady 상태를 색상으로 표시

- 방향 및 색상 등 다양한 속성을 조정하여 변동을 시각적으로 효과적으로 표현


## Instance Variables


###  **lineEl** `<HTMLDivElement>`
   
   봉의 선 요소
   
   ---

###   **bongEl** `<HTMLDivElement>`
   
   봉(직선)의 요소
   
   ---

###   **upColor** `<String>`
   
   상승 시 봉의 색상
   > 기본값: "#da2c03"
   
   ---

###   **downColor** `<String>`
   
   하락 시 봉의 색상
   > 기본값: "#75b02c"
   
   ---

###   **steadColor** `<String>`
   
   변동이 없는 경우 봉의 색상
   > 기본값: "#dee0e9"
   
   ---

###  **isUp** `<Boolean>`
   
   상승 여부를 나타내는 플래그
   > 기본값: false
   
   ---

###   **isPort** `<Boolean>`
   
   포트 방향 여부를 나타내는 플래그
   > 기본값: true
   
   ---

###   **defColor** `<String>`
   
   기본 색상
   > 기본값: transparent
   
   ---
   
###   **frwName** `<String>`
   
   EXBong 클래스의 프레임워크나 모듈 이름을 나타내는 문자열
   > 기본값: stock
   
   ---

###  **si**, **go**, **je**, **jo** `<Number>`
   
   **setData** 메소드에서 사용되는 값들로, 주식 데이터의 값
   
   ---

###   **prdyvrss** `<String>`
   
   이전 주식 데이터를 나타내는 값
   
 ---

<br>

## Class Methods

### init(t, o)

**EXBong**을 초기화하는 메소드로, HTML 마크업을 설정하고 스타일을 정의


   -   **t** `<Object>`: [AComponent](https://wikidocs.net/274979)에서 상속받은 기본 초기화 정보
   -   **o** `<Object>`: 이벤트 리스너 정보

```js
// EXBong의 봉 기본 위치와 크기룰 초기화합니다.
this.ExBong.init();
```

---

### initPos()

봉의 방향에 따라 **lineEl**과 **bongEl**의 위치와 스타일을 설정


```js
 // 시가, 고가, 저가, 종가 데이터를 설정합니다.
    let valueArr = [55, 100, 0, 25];
    exBong.setData(valueArr);
 // 봉 차트의 초기 위치를 설정합니다
this.ExBong.initPos();
```

---
### setUpColor(t)

상승 시 색상을 설정

   -   **t** `<String>`: 색상 값

```js
// 상승 상태에서 사용할 색상을 설정합니다.
this.ExBong.setUpColor("#ff0000");  // 예: 빨간색
```

---

### setDirection(t)

포트 방향을 설정

   -   **t**`<Boolean>`: 포트 방향 설정
> true이면 포트 방향, false이면 다른 방향

```js
// 포트레이트 모드(true) 또는 랜드스케이프 모드(false)로 설정합니다.
this.ExBong.setDirection(true);  // true: 세로, false: 가로
```

---

### setDownColor(t)

하락 시 색상을 설정

   -   **t** `<String>`: 색상 값

```js
// 하락 상태에서 사용할 색상을 설정합니다.
this.ExBong.setDownColor("#00ff00");  // 예: 초록색
```

---

### setSteadyColor(t)

변동이 없을 경우 색상을 설정


   -   **t** `<String>`: 색상 값

```js
// 변동(정체) 상태에서 사용할 색상을 설정합니다.
this.ExBong.setSteadyColor("#cccccc");  // 예: 회색
```

---

### setColor(t)

**lineEl**과 **bongEl**의 배경색을 설정


   -   **t** `<String>`: 색상 값

```js
// 봉의 전체 색상을 설정합니다.
this.ExBong.setColor("#123456");  // 예: 임의의 색상
```

---

### resetData()

**EXBong**의 데이터를 초기화하고 스타일을 리셋


```js
// 데이터 및 스타일을 초기 상태로 되돌립니다.
this.ExBong.resetData();
```

---

### setData(t, o)

주식 데이터를 설정하고 봉의 상태를 업데이트


-   **t** `<Array>`: 데이터 배열, **[si, go, je, jo]** 등의 값을 포함
-   **o** `<String>`: 선택적인 이전 주식 데이터

```js
// [시가, 고가, 저가, 종가] 순서의 데이터 배열과 선택적 이전 데이터를 전달합니다.
this.ExBong.setData([25, 100, 0, 75], "previousData");
```

---

### setQueryData(t, o, s)

쿼리 데이터를 설정하고 **setData** 메소드를 호출


-   **t** `<Array>`: 데이터를 포함한 배열
-   **o** `<Array>`: 데이터 배열에서 사용될 인덱스 정보
-   **s** `<Any>`: 선택적 값으로 이전 주식 데이터를 설정

```js
// 시가, 고가, 저가, 종가 데이터를 설정합니다.
    let valueArr = [55, 100, 0, 25];
     this.ExBong.setData(valueArr);

    // 쿼리 데이터 배열과 키 배열을 정의합니다.
    let dataArr = [];
    const keyArr = ["Open", "High", "Low", "Close"];

    // EXBong의 데이터를 쿼리 데이터 배열에 채웁니다.
     this.ExBong.getQueryData(dataArr, keyArr, null);
```

---

### getQueryData()

쿼리 데이터를 반환하는 메소드


```js
// 시가, 고가, 저가, 종가 데이터를 설정합니다.
    let valueArr = [55, 100, 0, 25];
     this.ExBong.setData(valueArr);
    // 쿼리 데이터 배열과 키 배열을 정의합니다.
    let dataArr = [];
    const keyArr = ["Open", "High", "Low", "Close"];
    // EXBong의 데이터를 쿼리 데이터 배열에 채웁니다.
    this.ExBong.getQueryData(dataArr, keyArr, null);
```

---

### getMappingCount()

매핑되는 데이터 항목들의 수를 반환

- **Returns** `<Array>`: 매핑된 데이터 항목들
	> 예: ["Open", "High", "Low", "Close", "Color"]

```js
// 매핑된 데이터 항목들을 가져와서 출력합니다.
const mapping = this.ExBong.getMappingCount();
console.log(mapping);  // 출력 예: ["Open", "High", "Low", "Close", "Color"]
```

---

<br>

## Example Usage

```js
// 초기화
this.ExBong.init();

// 데이터 설정
this.ExBong.setData([25, 100, 0, 75]);

// 색상 설정
this.ExBong.setUpColor("#ff0000");
this.ExBong.setDownColor("#00ff00");
this.ExBong.setSteadyColor("#cccccc");
```