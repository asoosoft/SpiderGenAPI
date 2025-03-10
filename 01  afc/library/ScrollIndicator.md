# ScrollIndicator

**ScrollIndicator**는 스크롤 영역에 맞는 스크롤 인디케이터를 표시하고, 사용자가 스크롤할 때 인디케이터의 위치를 동적으로 업데이트하는 클래스

세로 또는 가로 스크롤을 지원하며, 스크롤이 멈추면 자동으로 인디케이터를 숨길 수 있는 기능을 제공


## Properties

-   **isVisible** `<Boolean>`: 인디케이터의 표시 여부

-   **$indicator** `<jQuery Object>`: 스크롤 인디케이터 요소

-   **isScrollVert** `<Boolean>`: 세로 방향 스크롤 여부

-   **scrollOffset** `<Number>`: 스크롤 오프셋 값

-   **isAutoHide** `<Boolean>`: 자동으로 인디케이터를 숨길지 여부

-   **scrlWidth** `<Number>` <br>
	스크롤 인디케이터의 기본 너비(세로) 또는 높이(가로)
	> 기본값: 5px

-   **isAutoHide** `<Boolean>`: 자동으로 인디케이터를 숨길지 여부
	> 기본값: true

-   **enableAutoHide(isAutoHide)** `<Function>` <br>
자동 숨김 기능을 활성화하거나 비활성화

-   **posArea** `<Number>`<br>
    인디케이터가 이동할 수 있는 영역의 크기
    > 세로/가로 스크롤에 따라 달라짐
    
-   **scrollArea** `<Number>`<br> 
    스크롤 가능한 전체 영역의 크기
    
-   **checkTime** `<Number>`<br> 
    스크롤 이벤트가 발생한 시간을 추적하여 스크롤이 멈췄는지 확인하는 데 사용
    
-   **timer** `<Number>`<br>
    스크롤이 멈췄는지 체크하는 타이머
    
-   **resetCallback** `<Function>`<br>
    스크롤 위치 초기화 후 호출될 콜백 함수

<br>

## Instance Methods

### init(type, scrlElement)

스크롤 인디케이터를 초기화

-   **type** `<String>`: 스크롤 방향 (vertical 또는 horizontal)
-   **scrlElement** `<Object>`: 스크롤을 적용할 대상 요소

```js
scrollIndicator.init('vertical', $('#scrollElement'));
```

---

### destroy()

스크롤 인디케이터를 제거하고, 관련된 이벤트와 타이머를 초기화

```js
scrollIndicator.destroy();
```

---

### hide()

스크롤 인디케이터를 숨김

```js
scrollIndicator.hide();
```

---

### setStyle(styleObj)

스크롤 인디케이터의 스타일을 설정

-   **styleObj** `<Object>`: 적용할 스타일 객체

```js
scrollIndicator.setStyle({ backgroundColor: 'rgba(0, 0, 0, 0.5)' });
```

---

### enableAutoHide(isAutoHide)

자동 숨김 기능을 활성화하거나 비활성화

-   **isAutoHide** `<Boolean>`: 자동 숨김을 사용할지 여부

```js
scrollIndicator.enableAutoHide(true);
```

---

### resetScrollPos(callback)

스크롤 위치를 초기화할 때 호출할 콜백 함수를 설정

-   **callback** `<Function>`: 초기화 후 호출될 함수

```js
scrollIndicator.resetScrollPos(function() {
  console.log('Scroll position reset');
});
```

---

### setScrollOffset(scrollOffset)

스크롤 오프셋을 설정

-   **scrollOffset** `<Number>`: 설정할 스크롤 오프셋 값

```js
scrollIndicator.setScrollOffset(10);
```

---

### update()

스크롤 인디케이터의 크기 및 위치를 업데이트

```js
scrollIndicator.update();
```

---

### show()

스크롤 인디케이터를 표시

```js
scrollIndicator.show();
```

---

<br>

## Example Usage

```js
// ScrollIndicator 인스턴스 생성
let scrollIndicator = new ScrollIndicator();

// 스크롤 인디케이터 초기화 (세로 방향)
scrollIndicator.init('vertical', $('#scrollElement'));

// 스크롤 인디케이터를 표시
scrollIndicator.show();

// 스크롤 오프셋 설정
scrollIndicator.setScrollOffset(20);

// 자동 숨김 비활성화
scrollIndicator.enableAutoHide(false);
```