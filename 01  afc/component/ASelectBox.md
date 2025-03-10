# ASelectBox  

> Extends: [AComponent](https://wikidocs.net/274979)  

**ASelectBox**는 HTML의 <select\> 요소를 기반으로 하는 커스텀 셀렉트 박스 컴포넌트

AComponent를 확장하여 기본적인 UI 컴포넌트로 활용할 수 있으며, <br>
다양한 메서드를 제공하여 동적으로 아이템을 추가, 삭제, 선택


## Instance Variables

### isTabable `<Boolean>`
셀렉트 박스가 탭(Tab) 키를 통해 포커스를 받을 수 있는지 결정하는 속성
> 기본값: true <br>
> 기본적으로 셀렉트 박스는 탭 키를 통해 포커스를 받을 수 있음

이 속성은 사용자 인터페이스에서 키보드를 사용하여 셀렉트 박스 간에 이동할 수 있는지를 제어하는 데 사용

* **true** 일 때 <br>
사용자가 탭 키를 눌렀을 때 셀렉트 박스가 포커스를 받을 수 있음 <br>

	이는 키보드 내비게이션을 지원하여 사용자 경험을 향상 시키는 데 유용

* **false** 일 때 <br>
탭 키를 사용하여 셀렉트 박스로 포커스를 이동할 수 없음

	셀렉트 박스는 마우스 클릭 등 다른 방법으로만 포커스를 받을 수 있음

```
var selectBox = new ASelectBox();

selectBox.isTabable = false; 
// 탭 키로 포커스를 받을 수 없도록 설정
```

## Instance Methods
### getMappingCount()  
매핑 가능한 키 목록을 반환

**Returns** `<Array>`: ['value', 'text']  

```js
console.log(selectBox.getMappingCount()); 
// ['value', 'text']
```

### getQueryData(dataArr, keyArr, queryData) 
선택된 아이템의 값을 dataArr의 keyArr에 매핑하여 저장

- **dataArr** `<Array>`: 데이터 저장 배열  

- **keyArr** `<Array>`: 매핑할 키 배열  

- **queryData** `<Object>`: 추가 데이터 (옵션)  

```js
let data = [{}];
selectBox.getQueryData(data, ['key1', 'key2']);
console.log(data);
```

### applyType `<String>`
setQueryData() 메서드에서 동작 방식을 결정하는 속성

- **add**: 기존 아이템을 모두 삭제하고 dataArr의 데이터를 추가

- **select**: 매핑된 value 값을 기반으로 기존 아이템에서 해당 아이템을 선택

- **remove**: 매핑된 value 값을 가진 아이템을 삭제

```js
selectBox.applyType = 'select'; 
// 기존 데이터에서 매핑된 값을 선택하도록 설정
```

### setQueryData(dataArr, keyArr, queryData)  
주어진 dataArr의 값을 keyArr를 기준으로 추가, 선택, 삭제

- **dataArr** `<Array>`: 데이터 배열  

- **keyArr** `<Array>`: 매핑할 키 배열
  
- **queryData** `<Object>`: 추가 데이터 (옵션)  

```js
selectBox.setQueryData([{ key1: 'value1', key2: 'text1' }], ['key1', 'key2']);
```

### init(context, evtListener)  
ASelectBox를 초기화하는 메서드로, AComponent의 init()을 호출

- **context** `<Object>`: 실행 컨텍스트  
- **evtListener** `<Function>`: 이벤트 리스너  

```js
selectBox.init({ theme: "dark" }, (event) => console.log(event));
```

### getData()
현재 선택된 아이템의 데이터를 반환
> 선택된 아이템이 없다면 undefined를 반환

- **Returns** `<Any>`: 선택된 데이터 값

```
const data = selectBox.getData();
console.log(data);
```

### setData(dataArr)
기존의 모든 아이템을 제거한 후, 주어진 데이터 배열을 기반으로 새로운 아이템을 추가
 
- **dataArr** `<Array>`

> { text: '표시 텍스트', value: '값' }` 형식의 객체 배열  

```js
selectBox.setData([
    { text: '사과', value: 'apple' },
    { text: '바나나', value: 'banana' }
]);
```

### addItem(text, value, data) 
새로운 아이템을 추가

- **text** `<String>`: 아이템에 표시될 텍스트  

- **value** `<String>`: 아이템의 값  

- **data** `<Any>`: 아이템과 연결된 추가 데이터  

```js
selectBox.addItem('오렌지', 'orange', { origin: 'USA' });
```
### insertItem(text, value, data, index)  
지정한 위치에 새로운 아이템을 삽입

- **text** `<String>`: 표시될 텍스트  

- **value** `<String>`: 값  

- **data** `<Any>`: 추가 데이터  

- **index** `<Number>`: 삽입할 위치  

```js
selectBox.insertItem('포도', 'grape', null, 1);
```

### getItem(index)  
지정한 인덱스의 아이템을 반환

- **index** `<Number>`: 가져올 아이템의 위치  

- **Returns** `<Object>`: { text: '아이템 텍스트', value: '아이템 값' }  

```js
const item = selectBox.getItem(0);
console.log(item.text, item.value);
```

### getItemText(index)  
특정 인덱스의 아이템의 텍스트를 반환

- **index** `<Number>`: 가져올 아이템의 위치 (0부터 시작)  

- **Returns** `<String>`: 해당 아이템의 텍스트 값  

```js
console.log(selectBox.getItemText(1)); // 예: "사과"
```
### getItemData(index)  
특정 인덱스의 아이템과 연결된 데이터를 반환 

- **index** `<Number>`: 가져올 아이템의 위치  

- **Returns** `<Any>`: 해당 아이템과 연결된 데이터

```js
console.log(selectBox.getItemData(1)); // 예: { category: 'fruit' }
```

### getItemValue(index)  
특정 인덱스의 아이템의 값을 반환

- **index** `<Number>`: 가져올 아이템의 위치  

- **Returns** `<String>`: 해당 아이템의 값  

```js
console.log(selectBox.getItemValue(1)); // 예: "apple"
```

### getItemSize()  
현재 등록된 아이템 개수를 반환

- **Returns** `<Number>`: 아이템 개수  

```js
console.log(selectBox.getItemSize()); // 예: 5
```

### selectItem(index)  
지정한 인덱스의 아이템을 선택  

- **index** `<Number>`: 선택할 아이템의 위치  

```js
selectBox.selectItem(1);
```

### selectItemByText(text)  
주어진 텍스트를 가진 아이템을 찾아 선택

- **text** `<String>`: 선택할 아이템의 텍스트  

```js
selectBox.selectItemByText('사과');
```

### selectItemByData(data)  
주어진 데이터를 가진 아이템을 찾아 선택

- **data** `<Any>`: 선택할 아이템과 연결된 데이터  

```js
selectBox.selectItemByData({ category: 'fruit' });
```

### selectItemByValue(value)  
주어진 값을 가진 아이템을 찾아 선택

- **value** `<String>`: 선택할 아이템의 값  

```js
selectBox.selectItemByValue('apple');
```

### getSelectedIndex() 
현재 선택된 아이템의 인덱스를 반환 

- **Returns** `<Number>`: 선택된 아이템의 인덱스 

	> (선택된 아이템이 없으면 -1)  

```js
console.log(selectBox.getSelectedIndex()); // 예: 2
```

### getSelectedItem() 
현재 선택된 아이템을 반환

- **Returns** `<Object>`: 선택된 아이템 객체 

```js
console.log(selectBox.getSelectedItem());
```

### getSelectedItemText()  
현재 선택된 아이템의 텍스트를 반환 

- **Returns** `<String>`: 선택된 아이템의 텍스트 값 

```js
console.log(selectBox.getSelectedItemText()); // 예: "바나나"
```

### getSelectedItemData()
현재 선택된 아이템과 연결된 데이터를 반환

- **Returns** `<Any>`: 선택된 아이템과 연결된 데이터

```js
console.log(selectBox.getSelectedItemData()); // 예: { category: 'fruit' }
```

### getSelectedItemValue()  
현재 선택된 아이템의 값을 반환.  

- **Returns** `<String>`: 선택된 아이템의 값

```js
console.log(selectBox.getSelectedItemValue()); // 예: "apple"
```

### indexOfText(text)
주어진 텍스트와 일치하는 아이템의 인덱스를 반환

- **text** `<String>`: 검색할 아이템의 텍스트  

- **Returns** `<Number>`: 일치하는 아이템의 인덱스 

	> 없으면 -1 

```js
console.log(selectBox.indexOfText('사과')); // 예: 0
```

### indexOfValue(value)  
주어진 값과 일치하는 아이템의 인덱스를 반환

- **value** `<String>`: 검색할 아이템의 값  

- **Returns** `<Number>`: 일치하는 아이템의 인덱스 

	> 없으면 -1 

```js
console.log(selectBox.indexOfValue('apple')); // 예: 1
```

### indexOfData(data) 
주어진 데이터와 일치하는 아이템의 인덱스를 반환

- **data** `<Any>`: 검색할 데이터 값  

- **Returns** `<Number>`: 일치하는 아이템의 인덱스 

	> 없으면 -1

```js
console.log(selectBox.indexOfData({ category: 'fruit' })); // 예: 1
```

### removeItem(index)  
지정한 인덱스의 아이템을 제거

- **index** `<Number>`: 삭제할 아이템의 위치  

```js
selectBox.removeItem(1);
```

### removeAll()  
모든 아이템을 삭제

```js
selectBox.removeAll();
```

### setTextAlign(align)  
셀렉트 박스의 텍스트 정렬 속성을 설정 

- **align** `<String>`: left, center, right 중 하나  

```js
selectBox.setTextAlign('center');
```

### setPadding(padding) 
셀렉트 박스의 내부 패딩을 설정

- **padding** `<Number>`: 패딩 값 (픽셀 단위)  

```js
selectBox.setPadding(10);
```

## Events
### change(comp, info, e)  
셀렉트 박스의 값이 변경될 때 발생하는 이벤트  

- **comp** `<AComponent>`: 이벤트가 발생한 컴포넌트
  
- **info** `<String>`: 선택된 값  

- **e** `<Event>`: 이벤트 객체  

```js
selectBox.addEventListener('change', (comp, info, e) => {
    console.log('선택 변경:', info);
});
```