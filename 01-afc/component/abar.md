# ABar
> **Extends**: AComponent

**ABar**는 버튼을 추가할 수 있는 컴포넌트
기본적인 뷰 관리 기능을 제공하며, 동적으로 버튼을 추가하여 메뉴나 도구 모음 등의 역할을 수행



## Instance Methods


### **addToolButton(text)**

새 AButton 객체를 생성 및 초기화하고,
setText(text)로 버튼 텍스트를 설정하며,
기본 스타일(예: position: 'static', padding: '0 20px 0 20px')을 적용한 후,
addComponent로 ABar에 버튼을 추가함

* test()
0부터 3까지 반복하여 4개의 버튼(btn0 ~ btn3)을 생성하고, 각 버튼에 flex 속성, 패딩, 파란색 테두리(border: '1px solid blue')를 적용 후 추가함

* **text** `<String>` : 버튼에 표시할 텍스트
 
```js
bar.addToolButton('버튼');
```