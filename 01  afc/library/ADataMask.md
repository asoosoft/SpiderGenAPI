# ADataMask( ele, acomp )

* **ele**  `<HTMLElement>` 엘리먼트 객체
* **acomp** `<AComponent>` 컴포넌트 객체

컴포넌트에 설정된 데이터를 가공하거나 마스킹하는 함수와 파라미터를 관리


## Static Variables

### ADataMask.dataInfoArr

쿼리 데이터를 임시 저장하는 배열

- **ADataMask.setQueryData()**, **ADataMask.getQueryData()** 에서 활용.

```javascript
ADataMask.dataInfoArr = [];
```

### ADataMask.maskListArr

업데이트 시점에 전체 마스킹 함수 목록을 저장해두는 배열

* 새로 추가된 마스킹 함수 또는 제거된 마스킹 함수를 파악.

```javascript
ADataMask.maskListArr = [];
```

### ADataMask.removedArr

RootView가 내부 컴포넌트를 **realize** 하고 삭제된 마스킹 함수 목록을 추적하기 위한 배열

- 삭제된 함수들을 알림 등으로 확인할 수 있도록 관리.

```javascript
ADataMask.removeArr = [];
```

### ADataMask.Number/**ADataMask.Date**/**ADataMask.DataGrid** / **ADataMask.Text**
	
숫자, 날짜, 그리드 데이터, 일반 텍스트 등 다양한 타입별로 미리 정의된 함수들을 모아둔 객체들.

```js
ADataMask.Number.money // 천단위 콤마 함수
ADataMask.Number.removeComma // 콤마 제거 함수
ADataMask.Date.date // yyyy/MM/dd 형태로 변환
ADataMask.Text.prefix // 접두어(문자) 붙이기
```
 * 각 프로퍼티는 **title**과 **func**(실제 마스크 처리 함수), 경우에 따라 **param**(필요 파라미터) 로 구성.

## Instance Variables

### acomp `<AComponent>`

ADataMask가 연결된 AComponent 객체를 참조.
<br/>ADataMask는 특정 컴포넌트와 연관되어 데이터 마스킹을 처리하기 때문에, 이 변수는 해당 컴포넌트를 가리킴.

### ele `<HTMLElement>`

마스킹 처리가 적용될 HTML 요소.
<br/>mask(), unmask() 호출 시 이 요소의 텍스트나 value가 실제로 변경되거나 반환.

### maskFuncs  `<Array>`

삽입된 마스킹 함수들의 목록.
<br/>마스킹 처리를 순차적으로 적용할 때 사용.


### maskParams `<Array>`

각 마스킹 함수에 대응되는 파라미터들을 저장해두는 배열.

### isClear `<Boolean>`

마스킹이 해제되었는지 여부를 표시.
<br/>true이면 마스킹이 해제된 상태를 의미.


## Static Methods

### update()
* 내부적으로 **ADataMask.maskListArr**와 전체 마스크 함수 목록을 비교하여, 새로 추가된 함수 목록을 배열 형태로 반환.

```javascript
ADataMask.update = function() {
	// 전체 마스크 함수 목록을 다시 모으고
	// 이전 상태와 비교해 새로 추가된 함수를 리턴
};
```

### get( type, name )

특정 타입과 이름에 해당하는 마스킹 데이터를 가져옴.

* **type**  `<String>` 데이터의 종류
* **name** `<String>` 데이터의 식별자
* **Returns** `<Object>` { title:'설명', param:[], func:function(){} }

```javascript
ADataMask.get = function(type, name) {
	if(ADataMask[type]) return ADataMask[type][name];
}
```

### getFunc( type, name )

ADataMask.get()으로 가져온 객체 중, func(실제 마스킹 처리 함수)만 추출하여 반환.

* **type** `<String>` 함수의 종류
* **name** `<String>` 함수의 식별자
* **Returns** `<Function>` 마스크 함수

```javascript
ADataMask.getFunc = function(type, name) {
	let mask = ADataMask.get(type,name)
	if(mask) return mask.func;
}
```

### setQueryData( data, keyArr, queryData )

쿼리 데이터를 한꺼번에 지정하고자 할 때 사용.<br />
**ADataMask.dataInfoArr** 에 저장.

```javascript
ADataMask.setQueryData = function(data, keyArr, queryData) {
	ADataMask.dataInfoArr = [data, keyArr, queryData];
};
```

### getQueryData( data, keyArr, queryData )

**ADataMask.dataInfoArr**에 저장된 쿼리 데이터를 가져옴.
* **Returns**  [data, keyArr, queryData]

```javascript
ADataMask.getQueryData = function(data, keyArr, queryData) {
	return ADataMask.dataInfoArr;
}
```

### clearQueryData()

**ADataMask.dataInfoArr**를 초기화.

```javascript
ADataMask.clearQueryData = function(){
	ADataMask.dataInfoARr = [];
}
```


## Instance Methods

### getMaskFunc( inx )

특정 인덱스의 마스킹 함수와 파라미터를 배열 형태로 반환.

* **inx**  `<Number>` 함수 위치 값
* **Returns** `<Array>` [ 마스크함수, 마스크 파라미터 ]

```js
ADataMask.prototype.getMaskFunc = function(inx) {
	return [ this.maskFuncs[inx], this.maskParams[inx] ];
}
```

### insertMaskFunc( func, param, ?inx )

새 마스킹 함수를 리스트에 등록.<br/>
**inx**가 없으면 가장 뒤에 추가, 있으면 해당 위치에 삽입.

* **func** `<function>` 마스킹 함수
* **param** `<Array>` 마스킹 함수에 전달할 파라미터 배열
* **?inx** `<Number>` 함수 위치 값

```js
ADataMAsk.prototype.insertMaskFunc = function(func, param, inx) {
	// inx 가 undefined면 push, 아니면 splice로 삽입
}
```

### mask( value, ele )

등록된 마스킹 함수 ( **maskFuncs** )를 순서대로 적용하여 value 를 변환. <br/>
**ele**를 지정하면 해당 엘리먼트를 대상으로 삼으며, 없다면 기존 this.ele를 사용.<br/>
(옵션) **obj**는 마스킹 함수가 추가로 필요한 데이터 등을 전달받을 수 있음.

* **value**  `<String>` 가공할 값
* **ele** `<HTMLElement>` 마스킹 처리할 엘리먼트 객체(없으면 저장된 엘리먼트 객체 사용)

```js
let dm = new ADataMask(this.label.element, this.label);
dm.insertMaskFunc(ADataMask.Number.money.func);
console.log(dm.mask(12345)); //12,345
```

### moveMaskFunc( fromIdx, toIdx )

지정한 위치(fromIdx)의 마스킹 함수를 다른 위치(toIdx)로 옮김.

* **fromIdx**  `<Number>` 이동 시킬 함수 위치
* **toIdx** `<Number>` 이동할 함수 위치

```javascript
ADataMask.prototype.moveMaskFunc = function(fromIdx,toIdx) {
	// fromIdx의 [func,param]을 떼어내 toIdx 위치로 이동
}
```


### removeMaskFunc( inx )

특정 위치의 마스킹 함수와 파라미터를 제거.

* **inx** `<Number>` 제거할 위치 값

```javascript
ADataMask.prototype.removeMaskFunc = function(inx) {
	// inx 위치와 마스킹 함수와 파라미터를 제거
}
```

### unmask( ele )

마스킹 전 원본 데이터를 꺼냄.
**ele**를 지정하지 않으면 **this.ele** 기준으로 호출.

* **ele** `<HTMLElement>` 마스킹처리한 엘리먼트 객체(없으면 저장된 엘리먼트 객체 사용)

```js
let dm = new ADataMask(this.label.element, this.label);
dm.insertMaskFunc(ADataMask.Number.money.func);
console.log(dm.mask(12345)); //12,345
console.log(dm.unmask()); //12345
```


### updateMaskFunc( func, param, inx )

이미 등록된 마스킹 함수를 다른 함수로 교체하거나, 파라미터를 변경.

* **func** `<function>` 마스킹 함수
* **param** `<Array>` 마스킹 함수에 전달할 파라미터 배열
* **inx** `<Number>` 함수 위치값

```js
let dm = new ADataMask(this.label.element, this.label);
dm.insertMaskFunc(ADataMask.Number.money.func);
dm.insertMaskFunc(ADataMask.Number.toFixed.func, [2], 0);
dm.updateMaskFunc(ADataMask.Number.abs.func, null, 0);
console.log(dm.mask(-12345)); //12,345
```


### resetElement()

ADataMask가 적용된 HTML 요소를 초기 상태로 리셋.
<br/>마스킹이 적용되기 전의 원래 상태로 되돌리는데 사용.

```javascript
ADataMask.prototype.resetElement = function() {
	// 현재 ele 에 대해 다시 마스킹 적용 or 원본 복원
}
```


### setOriginal()

현재의 값을 원본 데이터로 설정.
<br/>마스킹이 해제되었을 때 복원할 수 있도록 현재 상태를 저장.

```javascript
ADataMask.prototype.setOriginal = function(original) {
	this.ele.dmOriginal = original;
}
```


### getOriginal()

저장된 원본 데이터를 반환.
<br/>마스킹이 해제되었을 때 원래의 값을 얻는 데 사용.

```javascript
ADataMask.prototype.getOriginal = function() {
	return this.ele.dmOriginal;
}
```