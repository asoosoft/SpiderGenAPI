# AFloat

> **Extends**: AComponent

화면 위에 새로 띄워지는 플로팅(부동) 객체를 관리하는 클래스
`AFloat`는 기본적으로 `div` 태그를 생성하여 원하는 위치/크기로 화면에 표시하며, 옵션에 따라 배경을 생성해 뒤쪽 화면 인터랙션을 제한, 포커스를 잃을 때 자동으로 닫히도록 설정

## Instance Variables

### **isBgCheck** `<Boolean>`
플로팅 시 화면을 덮는 배경을 생성할지 여부.  
`true`일 경우 투명/반투명 등의 배경이 생성되어, 플로팅 영역 뒤쪽과의 상호 작용을 차단하거나 **포커스 아웃** 시 닫히는 기능을 구현 
기본값은 `true`

```js
if (float.isBgCheck) {
    // 백그라운드가 생성
}
```

### **isFocusLostClose** `<Boolean>`
배경을 터치(또는 클릭)했을 때 플로팅 객체가 자동으로 닫힐지 여부.  
기본값은 `true`이며, `AFloat` 생성 후 `float.isFocusLostClose = false;` 형태로 변경

```js
if (float.isFocusLostClose) {
    // 백그라운드 클릭 시 플로팅 객체가 자동으로 닫힘
}
```

### **zIndex** `<Number>`
플로팅 객체 `$frame`의 `z-index` 값.  
기본값은 `9999`이며, 필요에 따라 자유롭게 조정

### **closeCallback** `<Function \ null>`
플로팅 객체가 닫힐 때 실행할 콜백 함수.  
`popup()` 또는 `popupEx()` 메서드 호출 시 인자로 전달,  
`close(result)` 호출 이후 이 콜백이 **자동**으로 실행



## Instance Methods

### **constructor()**
```js
constructor() {
    this.$frame = null;
    this.$bg = null;

    this.isBgCheck = true;
    this.isFocusLostClose = true;
    this.zIndex = 9999;
    this.closeCallback = null;
}
```
- 배경 사용 여부(`isBgCheck`)와 포커스 아웃 시 닫힘(`isFocusLostClose`) 옵션 기본값 설정
- 기본 `zIndex`를 `9999`로 설정



### **append(ele)**
`ele`(문자열 또는 jQuery 엘리먼트 등)를 `$frame` 내부에 추가

- **ele**`<String | jQuery Element>`

```js
float.append('<div>Some Content</div>');
// 또는
const $element = $('<span>Something</span>');
float.append($element);
```



### **popup(left, top, width, height, closeCallback, cntr)**
지정한 좌표(`left`, `top`)와 크기(`width`, `height`)로 플로팅 객체를 화면에 표시
정수(`Number`)가 넘어오면 자동으로 `'px'` 단위가 붙음
백그라운드(`$bg`) 생성 여부(`isBgCheck`)에 따라, `_checkBg()`가 내부적으로 호출될 수 있음
닫힐 때 호출할 콜백 함수(`closeCallback`)와 추가 대상 컨테이너(`cntr`)를 지정할 수 있음

- **left** `<Number | String>`
- **top** `<Number | String>`
- **width** `<Number | String>`
- **height** `<Number | String>`
- **closeCallback** `<Function | null> ` 
  (플로팅 객체가 닫힌 후 `close(result)` 실행 시 호출)
- **cntr** `<Object | null>`  
  (플로팅 객체를 붙일 컨테이너. 생략 시 `AApplication.getFocusedApp()?.getRootContainer()` 사용)

```js
float.popup(100, 200, 300, 100, function(result) {
    console.log('플로팅 닫힘, result =', result);
});
```

#### 내부 동작
1. 숫자형 `left, top, width, height`에 `'px'`를 자동으로 추가  
2. `popupEx()` 메서드를 호출해 실제로 `$frame`을 화면에 표시  

---

### **popupEx(info, closeCallback, cntr)**
**info** 객체의 `left`, `top`, `width`, `height` 정보를 CSS로 적용하여 플로팅 객체를 화면에 생성 
위치(`position: 'fixed'`), `z-index`(`this.zIndex`) 등도 함께 설정  
`closeCallback`이 지정된 경우, `close()` 시점에 이 콜백을 호출  
`cntr`가 없으면 `AApplication.getFocusedApp()?.getRootContainer()`에 `$frame`을 추가

```js
float.popupEx({
   left: '100px',
   top: '200px',
   width: '300px',
   height: '100px'
}, function(res) {
   console.log('플로팅 닫힘, result =', res);
});
```

---

### **close(result)**
플로팅 객체를 닫음  

- 미리 지정된 `closeCallback`이 있으면 `closeCallback(result)`를 호출

- **result** `<Any> `: 콜백 함수에 전달할 결과값

```js
float.close('OK');
```

---

### **enableBgCheck(enable)**
플로팅 시 화면을 덮는 백그라운드를 생성할지 여부(`isBgCheck`)를 설정

- **enable** `<Boolean>` : `true`이면 배경 생성, `false`이면 생성 안 함

```js
// 배경 없이 플로팅만 띄우고 싶다면
float.enableBgCheck(false);
```


## Example
```js
// 1) AFloat 객체 생성 및 초기화
const float = new AFloat();
float.init();

// 2) 내용물 추가
float.append('<div style="padding:10px;">Hello AFloat!</div>');

// 3) 플로팅을 특정 위치(100, 200)에 폭 200px, 높이 80px로 표시
float.popup(
  100,
  200,
  200,
  80,
  function(result) {
    console.log('플로팅이 닫혔습니다. result=', result);
  }
);

// 4) 필요 시 배경 생성 여부나, 포커스 잃을 시 닫힘 여부를 수정
float.enableBgCheck(true);      // 배경을 표시할지
float.isFocusLostClose = false; // 배경 클릭해도 닫히지 않게
```

---