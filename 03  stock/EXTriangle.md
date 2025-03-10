# EXTriangle
> **Extends** AComponent

삼각형 모양의 대비 부호를 표시하는 컴포넌트.

> 종목의 **상한, 상승, 보합, 하한, 하락** 상태를 시각적으로 표현하는 데 사용

> 지정된 `dir` 값에 따라 **삼각형 방향 및 색상**이 결정 됨.


<br/>

## Properties

### frwName `<String>`

해당 컴포넌트가 속한 프레임워크 네임스페이스를 정의

- **default**:  stock

<br/>

### dir `<Number>`

대비 부호(삼각형)의 방향을 설정하는 값.

-   **0**: 보합
-   **1**: 상한
-   **2**: 상승
-   **3**: 보합
-   **4**: 하한
-   **5**: 하락
-   **6**: 상승
-   **7**: 상승
-   **8**: 하락
-   **9**: 하락

```js
this.triangle.setDirection(2); // 상승 방향 설정
```

<br/>



### **arrowEl** `<HTMLDivElement>`

대비 부호를 표현하는 **삼각형 헤드(머리)** DOM 요소

```js
console.log(this.triangle.arrowEl); // 삼각형 헤드 DOM 요소
```

### **arrowBodyEl** `<HTMLDivElement>`

대비 부호를 표현하는 **삼각형 바디(몸통)** DOM 요소

```js
console.log(this.triangle.arrowBodyEl); // 삼각형 바디 DOM 요소
```

### arrowH `<Number>`

화살표 전체 높이 **(head + body)**

```js
console.log(this.triangle.arrowH); // 전체 화살표 높이 출력
```

### headH `<Number>`

삼각형 헤드(머리) 높이

```js
console.log(this.triangle.headH); // 헤드 높이 출력
```

### bodyH `<Number>`

삼각형 바디(몸통) 높이

```js
console.log(this.triangle.bodyH); // 바디 높이 출력
```

### arrowW `<Number>`

삼각형 헤드(머리)의 너비

```js
console.log(this.triangle.arrowW); // 헤드 너비 출력
```

### bodyW `<Number>`

삼각형 바디(몸통)의 너비

```js
console.log(this.triangle.bodyW); // 바디 너비 출력
```

### topPadding `<Number>`

삼각형을 위쪽으로 얼마나 이동시킬지 결정하는 패딩 값

```js
console.log(this.triangle.topPadding); // 패딩 값 확인
```

### headStyleArr `<Array>`

각 **dir** 값에 따라 삼각형 머리(헤드)의 스타일을 정의하는 배열

```js
console.log(this.triangle.headStyleArr); // 헤드 스타일 배열 확인
```

### bodyStyleArr `<Array>`

각 **dir** 값에 따라 삼각형 몸통(바디)의 스타일을 정의하는 배열

```js
console.log(this.triangle.bodyStyleArr); // 바디 스타일 배열 확인
```

### headColorArr `<Array>`

각 **dir** 값에 따라 삼각형 머리(헤드)의 색상을 지정하는 배열

```js
console.log(this.triangle.headColorArr); // 헤드 색상 배열 확인
```

### bodyColorArr `<Array>`

각 **dir** 값에 따라 삼각형 몸통(바디)의 색상을 지정하는 배열

```js
console.log(this.triangle.bodyColorArr); // 바디 색상 배열 확인
```

## Instance Methods


### initPos()

부호를 화면에 표현하기 위한 **높이, 너비 등의 정보를 설정**.  
arrowH, headH, bodyH, bodyW 등의 값이 계산되어 **EXTriangle**의 초기 상태가 설정 됨.

```js
this.triangle.initPos();
```
<br/>

### setUpDownColor( upColor, downColor )

상승과 하락의 색상을 지정.  
컴포넌트의 **data-color-up**, **data-color-down** 속성을 기반으로 기본값이 설정 됨.


* **upColor** `<String>` 상승색 "#ff0000"
* **downColor** `<String>` 하락색 "#0000ff"

```js
this.triangle.setUpDownColor("#ff0000", "#0000ff");
```
<br/>

### setDirection( dir )

대비부호 방향을 설정.

- **dir** `<Number>` : **대비 부호 값** 

(**0**: 보합, **1**: 상한, **2**: 상승, **3**: 보합, **4**: 하한, **5**: 하락)

해당 방향에 따라 **삼각형의 회전 및 색상**이 자동으로 변경 됨.

```js
this.triangle.setDirection(5); // 하락 방향 설정
```

<br/>

### getDirection()


현재 설정된 대비 부호 방향을 반환

**Returns** `<Number>`

-   **0**: 보합
-   **1**: 상한
-   **2**: 상승
-   **3**: 보합
-   **4**: 하한
-   **5**: 하락

```js
const dir = this.triangle.getDirection();
console.log(dir); // 현재 방향 출력
```

<br/>

### setData( data )


데이터를 **setDirection()**을 통해 설정

 - **data** `<Number>` : **대비 부호 값** 

(**0**: 보합, **1**: 상한, **2**: 상승, **3**: 보합, **4**: 하한, **5**: 하락)

```js
this.triangle.setData(2); // 상승 방향 설정
```

<br/>

### getData()

현재 설정된 대비 부호 방향을 반환

-   **getDirection()**을 호출하여 내부 값을 반환.


* **Returns** `<Number>`
-   **0**: 보합
-   **1**: 상한
-   **2**: 상승
-   **3**: 보합
-   **4**: 하한
-   **5**: 하락

```js
const data = this.triangle.getData();
console.log(data);
```
<br/>

### setQueryData( dataArr, keyArr, queryData )

쿼리 데이터를 기반으로 대비 부호 값을 설정.  

**dataArr**의 **keyArr**를 참조하여 적절한 값을 찾고, **setDirection()**을 호출.

-   **dataArr** `<Array>`: { key1: value, key2: value ... } 형태의 데이터 배열
-   **keyArr** `<Array>`: dataArr에서 사용할 키 배열
-   **queryData** `<AQueryData>`: AQueryData의 전체 값 (필요 시 참조)

```js
this.triangle.setQueryData([{ direction: 2 }], ["direction"], null);
```

<br/>

### **updatePosition(t, r)**

컴포넌트의 크기와 위치를 업데이트.  
isShow()가 **true**이고, dir이 **0**이나 **3**이 아닌 경우, **initPos()**를 다시 호출하여 크기를 조정

```js
this.triangle.updatePosition(100, 100);
```

<br/>

### **getMappingCount()**

매핑할 수 있는 데이터 개수를 반환

-   **getQueryData()**에서 사용할 key 개수를 나타냄

**Returns** `<Number>`

-   기본적으로 **2**를 반환

```js
const mappingCount = this.triangle.getMappingCount();
```