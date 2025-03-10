# ARadioButton

> **Extends**: AComponent

라디오 버튼을 구현하는 데 사용되는 컴포넌트.

> 사용자가 여러 옵션 중 하나를 선택할 수 있도록 하는 UI 요소



## Instance Variables

### isSelected `<Boolean>`

라디오버튼의 선택여부


### isTabable `<Boolean>`

탭키로 이동이 가능한 컴포넌트 여부



### selectClass `<String>`

라디오버튼의 선택시 추가할 클래스명


## Instance Methods

### getCheckAlign()

라디오 버튼의 체크 방향을 반환

> 반환값은 문자열로, 'left' 또는 'right' 중 하나

- **Returns** `<String>`


### getSelect()

라디오 버튼의 선택 여부를 반환

> 반환값은 Boolean 타입으로, 선택되었으면 true를 반환

- **Returns** `<Boolean>`

<br/>

### getText()

라디오 버튼의 라벨 텍스트를 반환

- **Returns** `<String>`

<br/>

### getValue()

라디오 버튼의 값을 반환
> 반환값은 String 타입으로, 라디오 버튼에 설정된 값을 반환

* **Returns** `<String>`

<br/>

### setCheckAlign( align )

라디오 버튼의 체크 방향을 설정

- **align** `<String>` 방향 (left / right)

```js
this.radio1.setCheckAlign('left');
```

<br/>

### setSelect( isSelect )

라디오 버튼의 선택 여부를 설정

- **isSelect** `<Boolean>` 선택 여부

```js
this.radio1.setSelect(true);
```


### setSelectStyle( selectClass ) 

라디오 버튼이 선택될 때 적용할 클래스를 설정

- **selectClass** `<String>` 선택 시 적용할 클래스명 

```js 
const radio = new ARadioButton(); 
radio.setSelectStyle('custom-selected');
```



### setText( text )

라디오버튼의 글자를 설정

- **text** `<String>` 텍스트


### setValue( value )

라디오버튼의 값을 설정

- **value** `<String>` 값


### setData( data )

라디오 버튼의 선택 상태를 데이터 배열에서 가져와 설정

-   **data** `<Boolean>` 선택 상태 (true 또는 false)

```js
const radio = new ARadioButton();
radio.setData(true);
```

### getData()

현재 라디오 버튼의 선택 상태와 값을 반환

-   **Returns** `<Boolean | String>`  
선택 상태가 true 이면 라디오 버튼의 값을 반환, 그렇지 않으면 false



### setQueryData( dataArr, keyArr, queryData ) 

라디오 버튼의 선택 상태를 데이터 배열에서 가져와 설정 

- **dataArr** `<Array>` 데이터 배열 
- **keyArr** `<Array>` 키 배열 
- **queryData** `<Object>` 추가적인 쿼리 데이터 (선택 사항) 

```js 
const radio = new ARadioButton();
const data = [{ selected: true }]; 

radio.setQueryData(data, ['selected']);
```



### getQueryData( dataArr, keyArr, queryData ) 

현재 선택 상태를 데이터 배열에 저장

- **dataArr** `<Array>` 데이터 배열 
- **keyArr** `<Array>` 키 배열 
- **queryData** `<Object>` 추가적인 쿼리 데이터 (선택 사항) 

```js
const radio = new ARadioButton(); 
radio.setData(true); 

const data = [{}]; 
radio.getQueryData(data, ['selected']); 

console.log(data[0].selected); // true
```