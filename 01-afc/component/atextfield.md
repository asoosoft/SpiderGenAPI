# ATextField
> **Extends** AComponent

사용자가 텍스트를 입력할 수 있는 기본 텍스트 필드 컴포넌트

## Static Variables

* **ATextField.FOCUS**: 포커스 상태를 나타내는 숫자 상수(열거형).
* **ATextField.DISABLE**: 비활성화(disable) 상태를 나타내는 숫자 상수(열거형).
* **ATextField.STATE**: 텍스트필드 상태를 문자열 배열로 보관. 예: 상태 인덱스 0 -> 'focust', 1 -> 'disable'
* **ATextField.DELAY_TIME**: 내부적으로 텍스트 변경을 타이머로 체크할 때 사용되는 기본 지연 시간(200ms).

## Instance Variables

### txfStyles  `<Array>` 

텍스트필드의 여러 상태에 맞춰 적용할 스타일을 저장하는 배열<br/>
ex) **txtStyles[0]**: 포커스 시 스타일, **txtStyles[1]**: 비활성화 시 스타일 등.

```javascript
this.txfStyles = ['', ''];
```

### isTabable  `<Boolean>`

탭키로 해당 텍스트필드를 포커싱할 수 있는지 여부
```javascript
// true 시 탭키로 이동 가능
this.isTabable = true;
```

### isTimerChange `<Boolean>`

텍스트 변경을 체크하는 타이머 실행 여부

```javascript
// true일 경우 일정 간격으로 텍스트 변경 여부를 확인
this.isTimerChange = false;
```

## Instance Methods

### applyBaseState()

컴포넌트의 defStyle변수에 저장해둔 기본클래스를 적용.<br/>
저장해둔 defStyle이 없다면 baseState변수에서 background-color와 border style만 적용.

```javascript
const textField = new ATextField();
textField.applyBaseState();
```

### changeBtnState( newState )

TextField의 상태를 변경하여 그 상태에 해당하는 스타일을 적용.

- **newState** `<Number>` or `<String>` 변경할 상태값 (ATextField.OVER / ATextField.DOWN / ATextField.DISABLE)
- 내부적으로 txfStyles[newState] 에 따라 클래스를 적용.

```js
const btn = new ATextField();
btn.changeBtnState(ATextField.DISABLE);
```

### clearStateClass()

포커스, 비활성화 등으로 적용된 상태 클래스를 모두 제거.

```javascript
this.textField.clearStateClass();
```

### defaultTxfState()

텍스트 필드를 처음 로드됐을 때로 초기화.
<br/>현재 활성화 상태라면, 모든 상태 클래스를 제거하고 applyBaseState()로 초기 상태를 복원.

```javascript
this.textField.defaultTxfState();
```

### enable(isEnable)

TextField의 활성화/비활성화 상태를 설정.

* **isEnable** `<Boolean>`
	* **true** -> 활성화
	* **false** -> 비활성화 (**disabled** 속성 추가)


### enableTimerChange( enable )

텍스트 변경을 체크하는 타이머의 실행 여부를 설정.
 
- **enable** `<Boolean>` true이면 텍스트 변경 여부를 주기적으로 검사할 타이머를 활성화.

```js
this.textfield.enableTimerChange(true);
```

### getAttrValue()

현재 TextField의 값을 반환. (내부적으로 **getText()**와 동일)

- **Returns** `<String>` TextField에 입력된 값

```javascript
this.textField.getAttrValue();
```


### getDataType()

type 속성(**text**,**password**,**number** 등)을 반환.

- **Returns** `<String>` 데이터 타입

```javascript
const dataType = textField.getDataType();
console.log(dataType); // 예: 'text'
```

### getPadding()

패딩속성 값을 반환.

- **Returns** `<String>` or `<Number>` (예 : `10px`)

```javascript
const paddingVal = textField.getPadding();
console.log(paddingVal); // "10px" 형태로 반환
```

### getText()

TextField에 현재 입력된 값을 반환.

- **Returns** `<String>` 현재 텍스트 값

```javascript
this.textField.getText();
```


### getTextAlign()

TextField의 text-align 스타일(좌/우/중앙 정렬)을 반환.

- **Returns** `<String>`  **'left'** / **'center'** / **'right'**

```javascript
this.textField.getTextAlign();
```


### reset()

TextField의 값을 비움.(`''` 으로 설정)

```javascript
this.textField.reset();
```


### setAttr(name, value)

TextField의 속성을 설정.

* **name** `<String>` 속성명
* **value** `<String>` 속성값

```js
textField.setAttr("placeholder", "이름을 입력하세요");
```

### removeAttr(name)

TextField에서 특정 속성을 제거.

* **name** `<String>` 제거할 속성명

```js
textField.removeAttr("placeholder");
```

### setAttrValue( text )

**value** 속성 및 내부 TextField 값을 **text**로 설정.
<br/>내부적으로 **setText(text)**를 호출.

- **text** `<String>`

```javascript
this.textField.setAttrValue("Hello World");
```

### saveBaseState()

컴포턴트가 초기화될때 호출되는 함수로, **data-style** 속성을 **defStyle** 변수에 저장. <br>
만약 data-style 속성에 값이 없다면 **baseState** 변수에 background-color, border style값을 저장.

```javascript
this.textField.saveBaseState();
```

### setDataType( dataType )

TextField의 type 속성(**text**, **password**, **number**, **email**, **tel** 등)을 설정.

- **dataType** `<String>`

```javascript
this.textField.setDataType('password');
```

### setMaskValue(text)

TextField에 마스킹된 값을 설정.
내부적으로 `setAttrValue()`와 동일한 동작을 수행.

* **text** `<String>` 마스킹된 값

```js
textField.setMaskValue('010-****-5678');
```

### setDataMask(func, param, ele)

데이터 마스킹 기능을 설정.

* **func** `<Function>` 적용할 마스킹 함수
* **param** `<Any>` 함수에 전달할 추가 파라미터
* **ele** `<Element>` 적용할 대상 요소 (기본값: 현재 컴포넌트)

```js
textField.setDataMask(maskingFunction, { type: 'phone'});
```

### setImeOnIE()

IE 환경에서 IME(입력기, 한영 전환 등) 모드를 적절한 **css(ime-mode)** 로 지정.
<br/> 예: **ime-mode: active/inactive** 등

```javascript
this.textField.setImeOnIE();
```

### setIme()

IE(Internet Explorer)를 제외한 곳에서 IME(Input Method Editor)를 적절한 css 형태로 변경.

```javascript
this.textField.setIme();
```


### setPadding( padding )

TextField의 내부 여백(padding)을 설정.

- **padding** `<Number>` or `<String>` 
	- 숫자로만 전달하면 내부에서 'px'가 자동. 

```javascript
this.textField.setPadding(10);
```

### setPadOption( padOption )

패딩 옵션을 설정.

- **padOption** `<Object>`

```javascript
this.textField.setPadOption({ top: 5, bottom: 5});
```


### setPlaceholder()

TextField가 비어있을 때 표시될 안내 문구를 설정.

- **placeholder** `<String>`

```js
this.textfield.setPlaceholder('여기에 텍스트를 입력하면 됩니다.');
```


### setReadOnly( isReadOnly )

읽기 전용 여부를 설정.

- **isReadOnly** `<Boolean>` 
	- **true** -> readonly 속성 부여
	- **false** -> readonly 제거

```javascript
this.textField.setReadOnly(true);
```


### setSelectionRange(start, end, dir)

TextField에서 특정 범위를 블록 선택(커서 드래그) 상태로 만듦.

- **start** `<Number>` 첫 번째로 선택된 문자의 인덱스
- **end** `<Number>` 마지막으로 선택된 문자의 인덱스
- **dir** `<String>` 선택이 수행된 것으로 간주되는 방향( forward / backward / none )

```javascript
this.textField.setSelectionRange(0, 3, 'forward');
```

### setText( text )

TextField의 값을 `text`로 설정.

- **text** `<String>`

```javascript
this.textField.setText('입력값');
```


### setTextAlign( align )

TextField의 정렬 속성을 설정.  (left / right / center)

- **align** `<String>`

```js
this.textfield.setTextAlign('left');
```