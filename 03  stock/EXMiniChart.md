# EXMiniChart
>  **Extends**: [BaseChart](https://wikidocs.net/275972)

**EXMiniChart** 는 **주식 데이터(가격 등)를 시각적으로 표시할 수 있는 미니 차트를 제공**. 

이 클래스는 **실시간 주식 가격 차트나, 특정 기간의 가격 변화를 표시**하는 데 적합하며, **가격 변동에 따른 차트의 색상 및 스타일을 조정**.

## Instance Variables

<br>

### basePrice `<Number>`

차트의 기준 가격을 설정

---

### maxCount `<Number>`

차트에서 표시할 최대 데이터 개수
	
> 기본값: **52**

---


### colorMode `<String>`

차트의 색상 모드를 설정
	
> 기본값: **black**

---


### dateKey` <Number>`

데이터에서 날짜 값을 참조하는 인덱스

---


### valueKey` <Number>`

데이터에서 가격 값을 참조하는 인덱스

---

### priceArr `<Array>`

가격 배열

---


### timeArr `<Array>`

시간 배열

---


### timeEnd `<Number>`

시간 끝값을 저장

---


### mode `<String>`

차트 모드

> 기본값은 **price**

---

### termW `<Number>`

차트의 항목 간 간격을 정의하는 값

---

### isRealMode `<Boolean>`

실시간 모드 여부를 나타내는 플래그

---

### maxAm `<Number>`

최대 값

---

### minAm `<Number>`

최소 값

---

### defColorObj `<Object>`

기본 색상 설정 객체

---

### colorObj `<Object>`

색상 설정 객체

---

### pos `<Object>`

차트 요소들의 위치를 설정하는 객체

---

### updateTime `<Number>`

차트 업데이트 시간 주기

---

### eleW` <Number>`

캔버스의 가로 크기를 나타내는 변수

---

### eleH `<Number>`

캔버스의 세로 크기를 나타내는 변수

---

### frwName `<string>`

**`EXMiniChart`** 클래스의 프레임워크 이름

---

### ctx `<CanvasRenderingContext2D>`

차트 캔버스를 그리기 위한 2D 렌더링 컨텍스트

---

<br>

## Instance Methods

### init(t, i)


**EXMiniChart** 인스턴스를 초기화하는 메서드.

기본 초기화를 수행하고, 테마에 따라 차트의 색상을 설정.

- **t** `<Any>`: 초기화에 필요한 첫 번째 매개변수

- **i** `<Any>`: 초기화에 필요한 두 번째 매개변수


```js
// EXMiniChart 컴포넌트를 초기화. 
this.EXMiniChart.init();
```

---

### setKeys(t, i)

데이터의 날짜와 값에 해당하는 키를 설정하는 메서드.

데이터를 설정하는 데 사용되며, 차트에서 날짜와 값을 정확하게 처리할 수 있도록 키 값을 설정.

- **t** `<Number>`: 날짜를 나타내는 키

	> 예 ) 날짜를 추출할 인덱스

- **i** `<Number>`: 값을 나타내는 키

	> 예 ) 값이 있는 인덱스


```js
// 데이터에 대한 인덱스 또는 키를 설정. 
this.chart.setKeys('date', 'value');
```

---

### calcPosition(t, i)

차트의 위치를 계산하는 메서드.

차트의 그리드나 항목들을 위치시키는 데 필요한 값을 계산하고, 이를 기반으로 위치를 설정.


- **t** `<Number>`: 차트의 가로 크기

- **i** `<Number>`: 차트의 세로 크기


```js
// 컴포넌트의 너비와 높이를 이용하여 캔버스에 들어갈 영역 x, y를 설정. 
this.EXMiniChart.calcPosition(t, i);
```

---

### tempDraw()


차트를 임시로 그리는 메서드.

차트가 준비되지 않은 상태에서도 차트를 임시로 그려주는 역할을 하며,<br>
 **그래픽을 초기화하거나 기본적인 레이아웃을 그릴 때** 사용.


```js
// 임시로 그리기 작업을 수행. 
this.chart.tempDraw();
```

---

### getQueryData(t, i)

특정 데이터를 요청하는 메서드.

차트에서 사용할 데이터나 정보들을 요청하는 데 사용. 
> 예 ) 외부에서 데이터를 가져오는 작업 등을 처리.

- **t** `<Any>`: 요청할 데이터

- **i** `<Any>`: 추가적인 쿼리 정보


```js
// EXMiniChart 컴포넌트의 데이터를 가져옴. 
this.EXMiniChart.getQueryData(dataArr, keyArr, queryData);
```

---

### setMaxCount(count)

차트에서 사용할 데이터의 최대 개수를 설정. 

이 값은 차트에 표시할 항목 수를 제한.

- **count** `<Number>`: 차트에 표시할 최대 데이터 개수를 설정

```js
// 표현할 데이터의 최대 개수를 설정. 
this.EXMiniChart.setMaxCount(360); // 최대 360개 데이터로 설정
```

---

### setColorMode(mode)

차트의 색상 모드를 설정. 

**white** 모드에서는 밝은 색상, **black** 모드에서는 어두운 색상을 사용.

- **mode** `<String>`: 색상 모드
	>  **black** 또는 **white**

```js
// 차트의 색상 모드를 설정. 
this.EXMiniChart.setColorMode('white'); 
// 색상 모드를 'white'로 설정
```

---

### setColors(colors, draw)

차트의 색상을 설정. 

색상 객체는 각 차트 요소(배경, 선, 텍스트 등)에 대한 색상 값을 포함할 수 있음

- **colors** `<Object>`: 사용자 정의 색상 객체

- **draw** `<Boolean>`: 색상 변경 후 차트를 다시 그릴지 여부를 설정

```js
// 차트의 색상을 설정함
this.chart.setColors({ 
	dividerLine: '#1f1f20', // 상단 그래프와 하단 텍스트 구분선 색 
	baseLine: '#c5c7ce', // 기준가 선 색 
	text: '#c5c7ce', // 하단 텍스트 색 
	timeLine: '#1f1f20', // 하단 텍스트 간격 선색 
	up: '#da2c03', // 상승 색 
	down: '#75b02c' // 하락 색 
}, true); // 설정한 색상을 바로 적용
```

---


### updatePosition(width, height)

차트의 위치를 업데이트하고, 그래프를 다시 그리기 위한 계산을 수행.

-   **width** `<Number>`: 차트의 너비

-   **height**` <Number>`: 차트의 높이

```js
// 컴포넌트의 위치나 크기를 갱신. 
this.chart.updatePosition(500, 300); // 너비 500, 높이 300으로 설정
```

---

### setData(data, basePrice)

차트에 데이터를 설정하고, 기준 가격을 지정. 

데이터는 주식 가격이나 기타 실시간 가격 정보일 수 있음

-   **data** `<Array>`: 차트에 표시할 데이터 배열

-   **basePrice**` <Number | undefined>`: 기준 가격

```js
// 차트 데이터를 설정. 
this.EXMiniChart.setData([1200, 1250, 1300], 1100); 
// 종가 데이터와 기준가 설정
```

---
### addNewData(newData)


새로운 데이터를 차트에 추가하고, 기존 데이터 배열을 업데이트. 

데이터가 너무 많으면 맨 앞의 데이터를 삭제하여 새 데이터를 추가

-   **newData**` <Array>`: 추가할 새 데이터 배열

```js
// 차트에 새로운 데이터를 추가. 
this.EXMiniChart.addNewData([1627891200000, 1350]); 
// [시간, 값] 형식의 데이터 추가
```

---
### checkDrawPossible()

차트를 그릴 수 있는지 여부를 확인. 

차트를 그릴 수 있으면 `true`를 반환.

```js
// 차트를 그릴 수 있는지 여부를 확인. 
let canDraw = this.EXMiniChart.checkDrawPossible();
```

---
### setMaxMin()

차트에서 가격의 최대 값과 최소 값을 계산하여 설정. 

이 값은 차트를 그릴 때 필요

```js
// 차트를 그리기 위해 필요한 위치와 값을 계산. 
this.EXMiniChart.setMaxMin();
```

---
### updateGraph()

차트를 업데이트. 

데이터와 최대/최소 값이 설정된 후 차트를 다시 그리기 위한 작업을 수행.

```js
// 현재 데이터로 차트를 갱신하여 표현. 
this.EXMiniChart.updateGraph();
```

---
### clearGraph()

차트를 초기화하고, 데이터를 지웁니다. 

실시간 모드에서 사용.

```js
// 차트를 초기화. 
this.EXMiniChart.clearGraph();
```

---
### setMode(mode)

차트 모드를 설정
> 기본값: **price**

-   **mode** `<String>`: 차트의 모드 설정
	
	> (`line`, `price` 등)

```js
this.EXMiniChart.setMode('line'); // 모드를 'line'으로 설정
```

---

### draw()


차트를 그림 

차트의 백그라운드, 선 등을 그리며, 데이터에 따라 차트를 업데이트.

```js
this.EXMiniChart.draw();
```

---

### drawBack()


차트의 배경을 그림

시간 및 가격 데이터를 차트에 표시.

```js
this.EXMiniChart.drawBack();
```

---

### drawHLine()

차트의 수평선을 그립니다. 

주요 가격 수준을 시각적으로 표시.

```js
// 최대값, 최소값, 기준값으로 가로선을 그립니다. 
this.EXMiniChart.drawHLine();
```

---

### drawOnly()

차트에서 가격 변동만 그립니다. 

"both" 모드가 아닐 경우 사용.

```js
// 특정 조건에 따라 차트를 그립니다. 
this.EXMiniChart.drawOnly();
```

---

### drawBoth()

가격 변동을 "상승" 또는 "하락"에 따라 다른 색상으로 그립니다. 

두 가지 가격을 모두 그릴 때 사용.

```js
// 값이 기준가 대비 상승과 하락이 섞인 경우 차트를 그립니다. 
this.EXMiniChart.drawBoth();
```

---

### drawGradient(startY, endY, color)

그라디언트 색상을 차트에 추가하여 더 부드러운 색상 전환을 제공.

-   **startY** `<Number>`: 그라디언트 시작 Y 위치

-   **endY** `<Number>`: 그라디언트 끝 Y 위치

-   **color** `<String>`: 색상값 

	> 예: **`rgba(255, 255, 255, 0.8)`**

```js
// 상승 하락에 대한 그라디언트를 표현. 
this.EXMiniChart.drawGradient(0, 100, '#ff0000'); 
// 시작 Y, 끝 Y, 그라디언트 색상 설정
```

---

### getMappingCount()

차트에서 사용하는 데이터의 개수를 반환. 

기본적으로 **Time, Value**를 반환.

```js
// 매핑할 수 있는 데이터의 개수를 가져옴. 
let mappingCount = this.component.getMappingCount();
```

---


### setQueryData(data, keys, options)

데이터를 차트에 설정.

실시간 모드일 경우 데이터를 새롭게 추가.

-   **data** `<Array>`: 데이터를 포함한 배열

-   **keys** `<Array>`: 데이터에서 필요한 값을 찾기 위한 키 배열

-   **options**` <Object>`: 추가 설정을 위한 객체

```js
// 컴포넌트에 데이터를 설정. 
this.component.setQueryData(dataArr, keyArr, queryData);
```

---