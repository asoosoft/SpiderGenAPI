## KeyboardManager

KeyboardManager는 키보드의 표시 및 숨김 상태에 따라 화면 레이아웃을 동적으로 조정하는 기능을 제공

모바일 웹에서 사용되는 키보드의 크기와 위치에 맞추어 텍스트 입력 필드나 포커스된 컴포넌트의 위치를 조정

## Instance Variables

### displayHeight `<Number>`  
   화면에서 키보드가 나타날 때, 키보드의 높이를 저장하는 변수

---
    
###  topWnd `<AWindow>`  
   현재 키보드가 표시된 상태에서 화면의 최상위 윈도우를 나타내는 변수

---
    
###   wndMove `<Number>`  
   윈도우가 이동한 거리(세로 이동)을 추적하는 변수

---
    
###  oriPos `<Object>`  
   키보드가 나타나기 전, 최상위 윈도우의 원래 위치를 저장

---
    
### resizeWebview `<Boolean>`  
   true일 경우, 키보드가 화면에 표시될 때 웹뷰의 크기를 조정 

> 기본값 true

---
    
###   showCount `<Number>`  
   키보드가 표시된 횟수를 추적하는 변수. 보안 키보드와 키패드가 동시에 표시되는 경우 이를 처리하기 위해 사용

---

<br>

## **Class Methods**

### getFocus(doc)

현재 활성화된 포커스된 요소를 반환

만약 포커스된 요소가 iframe이라면, 그 안의 문서의 포커스된 요소를 찾아 반환

-   **doc** `<Document>` : 포커스를 확인할 문서 객체
    
-   **Returns** `<jQuery>` : 포커스된 요소의 jQuery 객체
    

```js
let focusElement = KeyboardManager.getFocus(document);

console.log(focusElement); // 현재 포커스된 요소 반환
```

----------

### onKeyBoardShow(displayHeight, keyboardHeight, focusComp)

키보드가 표시될 때 호출되는 메서드로, 포커스된 컴포넌트의 위치를 계산하고 조정

-   **displayHeight** `<Number>` : 화면에서 키보드가 차지하는 영역의 높이
    
-   **keyboardHeight** `<Number>` : 키보드의 높이
    
-   **focusComp** `<AComponent>`  : 포커스를 받는 컴포넌트. 만약 해당 컴포넌트가 없다면, 자동으로 문서에서 포커스를 찾음
    
```js
KeyboardManager.onKeyBoardShow(200, 300, focusComp); 
// 키보드가 나타날 때 화면을 조정
```

----------

### **onKeyBoardHide()**

키보드가 사라질 때 호출되는 메서드로, <br>
화면 레이아웃을 원래대로 복원

```js
KeyboardManager.onKeyBoardHide(); 
// 키보드가 숨겨질 때 레이아웃 복원
```

----------

### **replaceHeight(cntr, fullH)**

컨테이너의 높이를 변경하는 메서드로, <br>
웹뷰의 크기가 %로 설정되어 있을 경우 이를 픽셀 값으로 변환

-   **cntr** `<AComponent>`  : 높이를 변경할 컨테이너
    
-   **fullH** `<Number>`  : 변경될 전체 높이
    
```js
let container = new AContainer();

KeyboardManager.replaceHeight(container, 800); 
// 웹뷰 높이를 800px로 변경
```
----------

### **restoreHeight(cntr)**

replaceHeight로 변경된 컨테이너의 높이를 원래대로 복원

-   **cntr** `<AComponent>`  : 높이를 복원할 컨테이너

```js
KeyboardManager.restoreHeight(container); 
// 웹뷰 높이를 원래대로 복원
```
----------

### **inputScrollToCenter(input, isAppear)**

키보드가 나타날 때 입력 필드를 화면의 중앙으로 스크롤시키는 메서드

-   **input** `<HTMLElement>`  : 포커스를 받은 입력 필드
    
-   **isAppear** `<Boolean>` : 키보드가 나타날 때만 적용되는 플래그
    

```js
let inputField = document.getElementById('inputField');

KeyboardManager.inputScrollToCenter(inputField, true); 
// 키보드가 나타날 때 입력 필드를 중앙에 스크롤
```
----------


<br>

## **Usage Example**

### **1. 키보드 표시 시 화면 조정**

```js
KeyboardManager.onKeyBoardShow(200, 300, focusComp); 
// 키보드가 표시될 때 화면을 조정 
```

이 코드에서는 키보드가 표시될 때, displayHeight와 keyboardHeight에 맞춰 포커스된 컴포넌트의 위치를 조정

---

### **2. 키보드 숨김 시 화면 복원**

```js
KeyboardManager.onKeyBoardHide(); 
// 키보드가 사라질 때 화면을 복원 
```

이 코드에서는 키보드가 사라질 때 화면의 레이아웃을 원래대로 복원

---

### **3. 컨테이너 높이 변경**

```js
KeyboardManager.replaceHeight(container, 800); 
// 컨테이너 높이를 800px로 변경 
```

이 코드에서는 컨테이너의 높이를 키보드가 표시될 때 새로운 높이로 변경

---

### **4. 웹뷰 높이 복원**

```js
KeyboardManager.restoreHeight(container); 
// 컨테이너 높이를 원래대로 복원 
```

이 코드에서는 웹뷰 높이를 원래대로 복원

---