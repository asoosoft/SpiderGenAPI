# RadioBtnManager

**RadioBtnManager**는 라디오 버튼 스타일의 UI 컴포넌트를 관리하는 클래스

주로 **단일 선택 기능**을 제공하며, 버튼의 선택 상태를 추적하고, 선택된 버튼을 관리

**isCheckStyle**에 따라 체크 스타일과 일반 스타일을 다르게 처리

## Class Constructor

### new RadioBtnManager(view, isCheckStyle)

**RadioBtnManager** 인스턴스를 생성


```js
let radioBtnManager = new RadioBtnManager(view, true);
```

---

<br>

## Properties

- **view** `<Object>` : view 컴포넌트 객체로, 버튼을 찾고 관리할 뷰 객체

- **isCheckStyle** `<Boolean>` : 체크 스타일인지 여부를 설정

	- true이면 체크 스타일, false이면 일반 스타일로 동작


<br>

## Class Variables

### **selectBtn** `<Object|null>`

현재 선택된 버튼을 나타내는 변수
> 초기값은 null입니다

```js
let radioBtnManager = new RadioBtnManager(view, true);

console.log(radioBtnManager.selectBtn);  // null
```

---

### **view** `<Object>`

RadioBtnManager가 관리할 뷰 객체

버튼을 검색하고 상태를 변경하는 데 사용

```js
let radioBtnManager = new RadioBtnManager(view, true);

console.log(radioBtnManager.view);  // view 객체
```

---

### **isCheckStyle** `<Boolean>`

라디오 버튼 스타일이 체크 스타일인지 일반 스타일인지를 나타내는 변수

-   **true**일 경우 : <br>
버튼을 체크하고, 이전에 선택된 버튼을 체크 해제

-   **false**일 경우 : <br>
이전에 선택된 버튼을 활성화하고, 새로 선택된 버튼을 비활성화

```js
let radioBtnManager = new RadioBtnManager(view, true);

console.log(radioBtnManager.isCheckStyle);  // true
```

---

<br>

## Instance Methods

### selectButton(selBtn)

선택된 버튼을 처리

버튼을 선택하고, 이전에 선택된 버튼을 비활성화

-   **selBtn** `<Object | String>`: 선택할 버튼

    -   String일 경우, 해당 ID로 버튼을 찾음
    -   Object일 경우, 직접 버튼 객체를 전달

-   **Returns** `<Object | null>` <br>
선택된 버튼 객체 또는 null (체크 스타일에서 버튼을 다시 클릭하여 해제한 경우)

```js
let selectedButton = radioBtnManager.selectButton('btnId'); 
// ID로 버튼 선택

let selectedButton = radioBtnManager.selectButton(buttonObj);  
// 버튼 객체로 선택
```

---

### getSelectButton()

현재 선택된 버튼을 반환

-   **Returns** `<Object | null>`: 현재 선택된 버튼 객체 또는 null

```js
let selectedButton = radioBtnManager.getSelectButton();

console.log(selectedButton);
```

---

### reset(view)

선택된 버튼을 초기화

선택된 버튼의 상태를 원래대로 복구하고, view 객체를 설정

> 선택된 버튼이 있으면 그 버튼을 활성화 상태로 복귀시키고, selectBtn을 null로 설정

-   **view** `<Object | undefined>`: 새로운 뷰 객체를 설정할 수 있음 
	> 기본값은 undefined로, 기존 뷰 객체가 유지

```js
radioBtnManager.reset(view);  
// 선택된 버튼 초기화 및 뷰 객체 변경

radioBtnManager.reset();      
// 선택된 버튼만 초기화
```

---

<br>

## Example Usage

```js
// RadioBtnManager 객체 생성 (체크 스타일)
let radioBtnManager = new RadioBtnManager(view, true);

// 버튼 선택 (ID로 선택)
let selectedButton = radioBtnManager.selectButton('btnId');

// 선택된 버튼 확인
console.log(radioBtnManager.getSelectButton());

// 버튼 초기화
radioBtnManager.reset();

// 새로 뷰 객체를 설정하여 초기화
radioBtnManager.reset(newView);
```