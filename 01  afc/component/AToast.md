# AToast
> **Extends**: [AFloat](https://wikidocs.net/275188)

토스트 메시지를 표시하는 컴포넌트로, 일시적으로 화면에 나타나서 사용자에게 정보를 전달하는 기능


### isBgCheck `<Boolean>`
isBgCheck는 백그라운드를 클릭했을 때 토스트 메시지가 닫힐지 여부를 설정하는 플래그

기본값은 false이며, true로 설정하면 사용자가 배경을 클릭할 때 토스트가 사라짐

이 속성은 사용자 인터페이스의 상호작용을 제어하는 데 유용

```
var toast = new AToast();
toast.isBgCheck = true; // 배경을 클릭하면 토스트가 닫힘.
```

### curSpan`<HTMLSpanElement>`
AToast 클래스에서 사용되는 내부 변수로, 현재 표시되고 있는 토스트 메시지의 span 요소를 참조

이 변수는 토스트 메시지를 표시하거나 숨길 때, 해당 메시지의 스타일이나 내용을 조작하는 데 사용

curspan을 통해 현재 활성화된 토스트 메시지의 텍스트나 스타일을 동적으로 변경

```
var toast = new AToast();
toast.curSpan = document.createElement('span');
toast.curSpan.textContent = '현재 토스트 메시지입니다.';
document.body.appendChild(toast.curSpan);
```
### spanCss `<Array>`
spanCss는 토스트 텍스트에 적용할 CSS 스타일을 정의하는 배열

이 배열은 텍스트의 배경색, 글자 색, padding, font-size, 텍스트 정렬 등을 포함하여 텍스트의 외관을 설정하는 데 사용

각 배열 요소는 개별 스타일 속성을 나타내며, 이를 통해 텍스트의 시각적 표현을 세밀하게 조정

```
var toast = new AToast();
toast.spanCss = [
    { property: 'color', value: '#fff' },
    { property: 'fontSize', value: '16px' },
    { property: 'textAlign', value: 'center' },
    { property: 'padding', value: '5px' }
];

// 적용 예시
toast.curSpan.style.color = toast.spanCss[0].value;
toast.curSpan.style.fontSize = toast.spanCss[1].value;
toast.curSpan.style.textAlign = toast.spanCss[2].value;
toast.curSpan.style.padding = toast.spanCss[3].value;
```
## Class Methods

### AToast.callback( text, callback, duration )
매개변수 text의 값으로 토스트 메시지를 표시. 

매개변수 duration 값 동안 토스트 메시지를 표시하고, 그 후 매개변수 callback 함수가 호출

* **text** `<String>` : 토스트에 표시할 텍스트

* **callback** `<Function>` : 토스트가 표시된 후 호출할 콜백 함수

* **duration** `<Number>` : 토스트가 표시되는 지속 시간 (초 단위)

	> 기본값:  2초

```js
AToast.callback('텍스트 내용', function()
{
	alert('callback');
}, 2);
```

위 코드에서는 토스트가 2초 동안 표시되며, 표시가 끝나면 콜백 함수가 실행되어 alert('callback')이 실행

### AToast.show( text, duration )
매개변수 text의 값으로 토스트 메시지를 표시. 매개변수 duration 값동안 토스트 메시지를 화면에 표시

* **text** `<String>` : 토스트에 표시할 텍스트

* **duration** `<Number>` : 토스트가 표시되는 지속 시간 (초 단위)

	> 기본값은 2초

```js
AToast.show('텍스트 내용', 2);
```

### AToast.single()

글로벌 토스트 객체를 생성하여 애플리케이션 내에서 하나의 토스트 인스턴스만 사용

프로젝트 내에서 하나의 토스트 메시지로 모든 알림을 관리하고 싶을 때 사용

```js
AToast.single(); // 글로벌 토스트 생성
```

## Instance Methods

### callback( text, callback, duration )
매개변수 text의 값으로 토스트 메시지를 표시하고, duration만큼 후에 매개변수 callback 함수가 호출

* **text** `<String>` : 토스트에 표시할 텍스트

* **callback** `<Function>` : 토스트가 표시된 후 호출할 콜백 함수

* **duration** `<Number>` : 토스트가 표시되는 지속 시간 (초 단위)

```js
var toast = new AToast();
toast.callback('텍스트 내용', function()
{
	alert('callback');
}, 2);
```

위 예제에서는 '텍스트 내용'이 2초 동안 표시되고, 그 후 alert('callback')이 실행


### show( text, duration )

매개변수 text의 값으로 토스트 메시지를 표시하며, duration 동안 메시지가 화면에 표시

* **text** `<String>` : 토스트에 표시할 텍스트

* **duration** `<Number>` : 토스트가 표시되는 지속 시간 (초 단위)

```js
var toast = new AToast();
toast.show('텍스트 내용', 2);
```

### globalToast
프로젝트 내에서 하나의 토스트 인스턴스를 전역적으로 관리하고 사용할 수 있도록 하는 기능을 제공

이를 통해 여러 곳에서 동일한 토스트 인스턴스를 재사용할 수 있으며, 메모리 사용을 최적화

* **Returns** `<AToast>`: AToast 클래스의 인스턴스를 반환 <br>

> 이 인스턴스는 전역적으로 사용되며, 여러 곳에서 동일한 인스턴스를 참조

```
// AToast.js에서 globalToast를 사용하는 예제

// AToast의 전역 인스턴스를 생성하거나 가져옵니다.
var toast = AToast.single();

// 전역 토스트를 사용하여 메시지를 표시합니다.
toast.show('전역 토스트 메시지입니다.', 3);

// 전역 토스트를 사용하여 메시지를 표시하고, 콜백을 설정합니다.
toast.callback('전역 토스트 메시지입니다.', function() {
    console.log('토스트가 사라진 후 콜백이 호출되었습니다.');
}, 3);
```

### popupEx
AFloat 클래스의 인스턴스 메서드로, AFloat을 확장한 AToast 클래스에서도 사용

popupEx 메서드는 추가적인 정보(info)와 닫기 콜백(closeCallback)을 받아서 팝업을 설정하고 표시

> 이 메서드는 컴포넌트를 팝업 형태로 화면에 표시할 때 사용

```
var toast = new AToast();
toast.popupEx({left: 100, top: 100, width: 200, height: 50}, function() {
    console.log('Toast closed');
});
```