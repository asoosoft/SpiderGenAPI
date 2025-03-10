# ASlider
> **Extends**: [AComponent](https://wikidocs.net/274979)

ASlider는 AComponent를 확장한 슬라이더 컴포넌트로, 사용자가 특정 범위 내에서 값을 선택할 수 있도록 하는 UI 요소

이 컴포넌트는 슬라이더의 현재 값, 최소값, 최대값, 이동 단위값 등을 설정하고 관리할 수 있는 다양한 메서드를 제공

## Instance Variables
슬라이더 컴포넌트의 상태와 동작을 관리하는 데 사용되는 변수  

이 변수들은 슬라이더의 현재 값, 최소값, 최대값, 이동 단위(step) 등을 저장하고 관리

## Instance Methods

### init(context, evtListener)
슬라이더를 초기화하는 메서드

컴포넌트가 생성될 때 초기 속성 및 이벤트 리스너를 설정

- **context** `<Object>`: 컴포넌트의 초기 설정을 포함하는 컨텍스트 정보

- **evtListener** `<Object>`: 이벤트 리스너 객체

```js
var slider = new ASlider();
slider.init(context, evtListener);
```

### getMax()
슬라이더의 최대값을 반환

- **Returns** `<Number>` 최대값

```js
var maxValue = slider.getMax(); // 슬라이더의 최대값 반환
```

### getMin()
슬라이더의 최소값을 반환

- **Returns** `<Number>` 최소값

```js
var minValue = slider.getMin(); // 슬라이더의 최소값 반환
```

### getStep()
슬라이더의 이동 단위(step) 값을 반환

- **Returns** `<Number>` 이동 단위값

```js
var stepValue = slider.getStep(); // 슬라이더의 이동 단위값 반환
```

### getValue()
슬라이더의 현재 값을 반환

- **Returns** `<Number>` 현재 선택된 값

```js
var currentValue = slider.getValue(); // 현재 선택된 값 반환
```

### setMax(max)
슬라이더의 최대값을 설정

- **max** `<Number>` 슬라이더의 최대값

```js
slider.setMax(200); // 최대값을 200으로 설정
```

### setMin(min)
슬라이더의 최소값을 설정

- **min** `<Number>` 슬라이더의 최소값

```js
slider.setMin(10); // 최소값을 10으로 설정
```

### setStep(step)
슬라이더의 이동 단위값을 설정

- **step** `<Number>` 슬라이더의 단위 이동 값

```js
slider.setStep(5); // 단위 이동값을 5로 설정
```

### setValue(value)
슬라이더의 현재 값을 설정

- **value** `<Number>` 설정할 값

```js
slider.setValue(50); // 슬라이더의 값을 50으로 설정
```

### setData(data)
슬라이더의 값을 설정

배열 형식의 데이터를 전달하면 최대값, 최소값, 단위 이동 값까지 설정 가능

- **data** `<Array | Number>`  
  - 단일 값: 슬라이더의 현재 값을 설정

  - 배열 값: [value, max, min, step] 순서로 슬라이더의 여러 속성을 설정

```js
// 단일 값 설정
slider.setData(40);

// 배열을 사용하여 값, 최대값, 최소값, 단위값 설정
slider.setData([50, 200, 0, 10]); 
```

### getData()
슬라이더의 현재 값을 반환

- **Returns** `<Number>` 현재 값

```js
var data = slider.getData();
console.log("슬라이더 현재 값:", data);
```

### getQueryData(dataArr, keyArr, queryData)
슬라이더의 값을 데이터 배열(dataArr)에 저장하는 메서드

- **dataArr** `<Array>` 데이터 저장 배열

- **keyArr** `<Array>` 키 배열 (값을 저장할 키 목록)

- **queryData** `<Object>` 쿼리 데이터 객체

```js
var dataArr = [{}];
var keyArr = ['value', 'max', 'min', 'step'];
slider.getQueryData(dataArr, keyArr, {});

console.log(dataArr[0]); // { value: 50, max: 100, min: 0, step: 5 }
```

### setQueryData(dataArr, keyArr, queryData)
데이터 배열(`dataArr`)에서 값을 가져와 슬라이더 값을 설정.

- **dataArr** `<Array>` 데이터 배열

- **keyArr** `<Array>` 키 배열 (저장된 값을 불러올 키 목록)

- **queryData** `<Object>` 쿼리 데이터 객체

```js
var dataArr = [{ value: 75, max: 200, min: 10, step: 5 }];
var keyArr = ['value', 'max', 'min', 'step'];

slider.setQueryData(dataArr, keyArr, {}); 

console.log(slider.getValue()); // 75
console.log(slider.getMax()); // 200
console.log(slider.getMin()); // 10
console.log(slider.getStep()); // 5
```

### getMappingCount()

매핑 가능한 속성 배열을 반환  

슬라이더는 value, max, min, step 속성을 지원

- **Returns** `<Array>` : 슬라이더가 지원하는 매핑 가능한 속성들의 배열을 반환

	반환되는 배열은 ['value', 'max', 'min', 'step']로 구성되어 있으며,

	각각의 요소는 다음을 의미:

	- **value**: 슬라이더의 현재 값

	- **max**: 슬라이더의 최대값

	- **min**: 슬라이더의 최소값

	- **step**: 슬라이더의 이동 단위값

```js
console.log(slider.getMappingCount()); // ['value', 'max', 'min', 'step']
```

### setAttr(attrName, value)

슬라이더의 특정 속성을 설정

이 메서드를 사용하여 슬라이더의 HTML 속성을 동적으로 변경 가능

- **attrName** `<String>`: 설정할 속성의 이름
- **value** `<String>`: 설정할 속성의 값

```
  js
  // 슬라이더의 최대값을 100으로 설정
  this.setAttr('max', '100');
```
  

### getAttr(attrName)
getAttr 메서드는 슬라이더의 특정 속성 값을 반환

이 메서드를 사용하여 슬라이더의 현재 속성 값을 확인
  
- **attrName** `<String>`: 가져올 속성의 이름
- **반환값**: `<String>` 요청한 속성의 값

```
  js
  // 슬라이더의 현재 최대값을 가져옴
  var maxValue = this.getAttr('max');
  console.log('Slider max value:', maxValue);
```

## Events

### change(comp, e)
슬라이더의 값이 변경될 때 발생하는 이벤트

이벤트 핸들러를 통해 슬라이더 값이 변경될 때 동작을 정의

- **comp** `<AComponent>` 슬라이더 컴포넌트  

- **e** `<Object>` 이벤트 객체  

```js
slider.addEventListener('change', function(comp, e) {
    console.log('슬라이더 값 변경됨:', comp.getValue());
});
```