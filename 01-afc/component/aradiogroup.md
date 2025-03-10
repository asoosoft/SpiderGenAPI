# ARadioGroup

> Extends: [AView](https://wikidocs.net/275135)

ARadioGroup은 여러 개의 라디오 버튼(ARadioButton)을 그룹화하여 하나의 버튼만 선택할 수 있도록 하는 컨테이너 역할

사용자가 버튼을 클릭하면 기존 선택을 해제하고 새로운 버튼을 선택하며, 변경된 값을 관리 및 제공

## Instance Variables
### radioBtns `<Array>`
그룹 내의 ARadioButton 객체들을 배열로 저장

### selectedBtn `<ARadioButton>`
현재 선택된 라디오 버튼을 나타냄

## Instance Methods

### init(context, evtListener)
라디오 버튼 그룹을 초기화하고, 기본 선택 상태를 설정하는 메서드

- **context** `<Object>`: 컴포넌트의 초기 설정을 포함하는 컨텍스트 정보

- **evtListener** `<Object>`: 이벤트를 감지할 리스너 객체

```js
var radioGroup = new ARadioGroup();
radioGroup.init(context, evtListener);
```

### btnClickEvent(radioBtn, info, e)
라디오 버튼 클릭 시 호출되는 이벤트 핸들러

- **radioBtn** `<ARadioButton>`: 클릭된 라디오 버튼 객체

- **info** `<Object>`: 추가적인 정보

- **e** `<Event>`: 발생한 이벤트 객체

```js
radioGroup.btnClickEvent(clickedBtn, {}, event);
```

### clearAll()
라디오 버튼들의 선택 상태를 모두 해제

```js
radioGroup.clearAll();
```

### selectBtnByValue(value)
특정 값(value)을 가진 라디오 버튼을 선택

- **value** `<String>`: 선택할 버튼의 값

```js
radioGroup.selectBtnByValue('option1');
```

### setSelectBtn(radioBtn)
특정 라디오 버튼을 선택

- **radioBtn** `<ARadioButton>`: 선택할 라디오 버튼 객체

```js
var btn = radioGroup.getRadioBtnByValue('option2');
radioGroup.setSelectBtn(btn);
```

### getSelectBtn()
현재 선택된 라디오 버튼을 반환

```js
var selectedBtn = radioGroup.getSelectBtn();
console.log(selectedBtn.getValue());
```

### getSelectIndex()
현재 선택된 라디오 버튼의 인덱스를 반환

- **Returns** `<Number>`: 선택된 라디오 버튼의 인덱스 (없으면 -1)

```js
var index = radioGroup.getSelectIndex();
console.log("선택된 버튼 인덱스:", index);
```

### getSelectValue()
현재 선택된 라디오 버튼의 값을 반환

- **Returns** `<String>`: 선택된 라디오 버튼의 value 값 (없으면 null)

```js
var selectedValue = radioGroup.getSelectValue();
console.log("선택된 값:", selectedValue);
```

### getRadioBtns()
그룹 내 모든 라디오 버튼을 배열로 반환

- **Returns** `<Array>`: ARadioButton 객체들의 배열

```js
var allBtns = radioGroup.getRadioBtns();
console.log("총 버튼 개수:", allBtns.length);
```

### getRadioBtnById(id)
특정 ID를 가진 라디오 버튼을 반환

- **id** `<String>`: 찾을 버튼의 ID

- **Returns** `<ARadioButton>`: 해당 ID를 가진 버튼 객체 (없으면 null)

```js
var btn = radioGroup.getRadioBtnById('radio1');
if (btn) console.log("버튼 ID:", btn.getComponentId());
```

### getRadioBtnByValue(value)
특정 값(`value`)을 가진 라디오 버튼을 반환

- **value** `<String>`: 찾을 버튼의 값

- **Returns** `<ARadioButton>`: 해당 값을 가진 버튼 객체 (없으면 null)

```js
var btn = radioGroup.getRadioBtnByValue('option3');
if (btn) console.log("버튼 값:", btn.getValue());
```

### setData(data)
라디오 버튼의 값을 설정

- **data** `<String>`: 선택할 버튼의 값

```js
radioGroup.setData('option1');
```

### getData()
현재 선택된 라디오 버튼의 데이터를 반환

- **Returns** `<Object>`: 선택된 버튼의 데이터 객체 (없으면 null)

```js
var data = radioGroup.getData();
console.log("선택된 버튼 데이터:", data);
```

### getQueryData(dataArr, keyArr, queryData)
라디오 버튼의 선택 값을 데이터 배열에 저장

- **dataArr** `<Array>`: 데이터 배열

- **keyArr** `<Array>`: 키 배열

- **queryData** `<Object>`: 쿼리 데이터

```js
var dataArr = [{}];
var keyArr = ['selectedOption'];
radioGroup.getQueryData(dataArr, keyArr, {});
console.log(dataArr[0]); // { selectedOption: 'option1' }
```

### setQueryData(dataArr, keyArr, queryData)
데이터 배열에서 값을 가져와 라디오 버튼을 설정

- **dataArr** `<Array>`: 데이터 배열

- **keyArr** `<Array>`: 키 배열

- **queryData** `<Object>`: 쿼리 데이터

```js
var dataArr = [{ selectedOption: 'option2' }];
var keyArr = ['selectedOption'];
radioGroup.setQueryData(dataArr, keyArr, {});
```

### getMappingCount()
매핑 가능한 개수를 반환

- **Returns** `<Number>`: 1 (항상 1개만 매핑 가능)

```js
var mappingCount = radioGroup.getMappingCount();
console.log("매핑 가능한 개수:", mappingCount);
```

### findCompByClass(className)
주어진 클래스명과 일치하는 뷰 내부의 컴포넌트를 배열로 반환

- **className** `<String>`: 찾고자 하는 컴포넌트의 클래스명

- **Returns** `<Array>`: 일치하는 컴포넌트들의 배열

```js
var compArr = this.view.findCompByClass('ALabel');
console.log(compArr);
```

### reportEvent(evtName, info, event)
자신에게 등록된 모든 리스너에게 지정된 이벤트를 전달

- **evtName** `<String>`: 발생시킬 이벤트 이름

- **info** `<Object>`: 발생된 이벤트와 관련된 정보

- **event** `<Event>`: 자바스크립트 이벤트 객체

```js
var event = new Event();
this.myBtn.reportEvent('click', null, event);
```

### SetSelect(radioBtn)
주어진 라디오 버튼을 선택 상태로 설정

이 메서드를 호출하면 해당 라디오 버튼이 선택되고, 그룹 내 다른 버튼들은 선택 해제

**radioBtn** `<ARadioButton>`: 선택할 라디오 버튼 객체

```
this.radioGroup.setSelect(this.radioButton1);
```

### getComponentId()
ARadioGroup의 컴포넌트 ID를 반환

> 이 ID는 컴포넌트를 식별하는 데 사용
  
**Returns** `<String>`: 컴포넌트의 ID를 반환

```
var compId = this.radioGroup.getComponentId();
console.log(compId);
```

### getValue()
현재 선택된 라디오 버튼의 값을 반환

> 이 값은 라디오 버튼이 의미하는 데이터

**Returns** `<String>`: 선택된 라디오 버튼의 값을 반환

> 선택된 버튼이 없으면 null을 반환할 수 있음

```
var selectedValue = this.radioGroup.getValue();
console.log(selectedValue);
```

### clearSelected()
ARadioGroup 내에서 선택된 라디오 버튼을 초기화하여, 모든 버튼의 선택을 해제

```
this.radioGroup.clearSelected();
```

## Events
### change(comp, info, e)
라디오 버튼이 변경될 때 발생하는 이벤트

- **comp** `<AComponent>`: 이벤트가 발생한 컴포넌트 객체

- **info** `<Object>`: 변경된 버튼 정보

- **e** `<Event>`: 이벤트 객체

```js
radioGroup.addEventListener('change', function(comp, info, e) {
    console.log('선택된 버튼 변경됨:', info.getValue());
});
```