# AButton
> **Extends**: AComponent

다양한 속성과 메서드를 통해 버튼의 스타일과 동작을 제어하는 버튼 컴포넌트

## Properties

### **btnStyles** `<Array>`
버튼의 상태별 스타일 클래스명

```js
// 순서대로 over, down, disable의 스타일
btn.btnStyles = ['', '', ''];
```

### **isTabable**  `<Boolean>`
탭키 이동이 가능한 컴포넌트 여부

```js
btn.isTabable = true;
```

---

## Instance Methods

### **applyBaseState()**

버튼의 `defStyle` 변수에 저장해둔 기본 클래스를 적용. 

- 툴 버튼인 경우: 배경 이미지 위치를 `0px 0px`로 설정  
- 일반 버튼인 경우: `defStyle` 클래스를 추가하고, `baseState`에 저장된 `background-color`를 적용

### **changeBtnState( newState )**

버튼 상태를 변경.

- **newState** `<String>` : 변경할 상태값  
  예: `AButton.OVER`, `AButton.DOWN`, `AButton.DISABLE`

```js
btn.changeBtnState(AButton.OVER);
```

### **clearStateClass()**

버튼 상태 클래스를 초기화(삭제)

### **defaultBtnState()**

버튼이 `enable`이 `true`일 때, 버튼 상태를 기본 상태로 돌림

내부적으로 `clearStateClass()`와 `applyBaseState()`를 호출

### **disableState()**
`downState()`를 호출해, 버튼을 비활성화와 유사한(어두워진) 상태로 변경

### **downState()**
버튼의 `background-color` 속성의 보색(Complementary Color)으로 `border`를 지정하고,  
밝기를 줄여주는 함수. (툴 버튼일 경우 배경 이미지 위치만 조정)

### **enable( isEnable )**
버튼의 활성/비활성 상태를 설정.

- **isEnable** `<Boolean>` : `true`면 활성, `false`면 비활성

### **getCheck()**
체크 버튼(`isCheckBtn = true`)인 경우 체크 상태를 반환.

- **Returns** `<Boolean>`

### **getHtml()**
버튼의 **HTML** 내용을 문자열로 반환.

- **Returns** `<String>`

### **getIconMargin()**
아이콘 버튼인 경우 아이콘에 적용된 마진(margin) 값을 반환.

- **Returns** `<String>` 예: `'10px 10px 10px 0px'`

### **getIconSize()**
아이콘 버튼인 경우 아이콘의 사이즈(`width`, `height`)를 반환.

- **Returns** `<String>` 예: `'auto 10px'`

### **getImage()**
버튼에 설정된 이미지의 `src` 값을 반환.

- **Returns** `<String>`

### **getQueryData( dataArr, keyArr, queryData )**
컴포넌트가 갖고 있는 정보를 `keyArr`의 정보에 따라 `dataArr`에 채움  
`dataArr`은 `AQueryData`의 특정 부분을 참조하며, 자세한 구조는 `QuerySystem.pptx` 참고

- **dataArr** `<Array>` 예: `[ {key1:value, key2:value ...}, {}, ... ]`
- **keyArr** `<Array>` 예: `[ key1, key3, key10 ]`
- **queryData** `<AQueryData>` 전체 값(필요 시 참조)

### **getText()**
버튼의 텍스트 값을 얻음

- **Returns** `<String>`


### **overState()**
버튼 밝기를 높이는 방식으로, **Over** 상태를 표현 (툴 버튼일 경우 배경 이미지 위치를 이동)



### **saveBaseState()**
버튼이 초기화될 때 호출되는 함수.  
- `data-style` 속성을 `defStyle`로 저장  
- `background-color`, `border` 등을 `baseState`에 저장

### **setBtnStyle( state, styles )**
버튼의 상태별 스타일 클래스를 설정

- **state** `<String>` : 버튼 상태 (`AButton.OVER`, `AButton.DOWN`, `AButton.DISABLE`)
- **styles** `<String>` : 클래스 이름

```js
btn.setBtnStyle(AButton.OVER, 'hoverStyleClass');
```

### **setCheck( check )**
체크 버튼(`isCheckBtn = true`)인 경우, 체크 상태를 변경

- **check** `<Boolean>` : 체크 상태 여부

### **setData( data )**
버튼에 임의의 데이터를 저장

- **data** `<Any>`

### **setDefStyle( style )**
버튼의 기본 스타일을 지정

- **style** `<Object>` 예: `{ width:'80px', height:'22px' }`

```js
btn.setDefStyle({ width:'80px', height:'22px' });
```

### **setHtml( text )**
버튼 내부의 HTML 내용을 설정

- **text** `<String>` : HTML 문자열

```js
btn.setHtml('<div>Button Content</div>');
```

### **setIconMargin( value )**
아이콘 버튼인 경우, 아이콘의 `margin`을 지정

- **value** `<String>` 예: `'10px 10px 10px 0px'`

```js
btn.setIconMargin('10px 5px 10px 0px');
```

### **setIconSize( value )**
아이콘 버튼의 크기를 설정
가로, 세로값을 띄어쓰기로 구분해 입력.

- **value** `<String>` 예: `'auto 10px'`

```js
btn.setIconSize('auto 15px');
```

### **setImage( url )**
버튼의 이미지를 설정
아이콘을 텍스트 앞에 배치할지 뒤에 배치할지는 `imgAfterText`, `imgNewLine` 등에 따라 변화

- **url** `<String>` : 이미지 경로

```js
btn.setImage('asset/img/btn_icon.png');
```

### **setQueryData( dataArr, keyArr, queryData )**
`dataArr` 값을 `keyArr` 정보에 따라 컴포넌트에 세팅
`dataArr`은 `AQueryData` 특정 부분 참조자

- **dataArr** `<Array>` 예: `[ {key1:value, key2:value ...}, {}, ... ]`
- **keyArr** `<Array>` 예: `[ key1, key3, key10 ]`
- **queryData** `<AQueryData>`

### **setText( text )**
버튼의 텍스트를 설정

- **text** `<String>`

```js
btn.setText('확인');
```
