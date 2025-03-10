# ScrollArrow

**ScrollArrow**는 스크롤 영역의 위, 아래 또는 왼쪽, 오른쪽에 화살표를 표시하여, **사용자가 스크롤할 수 있는 위치에 따라 화살표를 동적으로 제어하는 클래스**

이 클래스는 스크롤 영역에 대해 **스크롤 방향에 맞는 화살표를 표시**하고, **스크롤 위치에 따라 화살표의 상태를 변경하는 기능**을 제공


## Properties

-   **scrlElement** `<Object>`: 스크롤이 적용될 요소

-   **checkAlready** `<Boolean>`: 스크롤 이벤트 처리 상태를 추적

-   **scrlDir** `<String>`: 스크롤 방향 (vertical 또는 horizontal)

-   **topClassName** `<String>`: 상단 화살표의 클래스 이름

-   **bottomClassName** `<String>`: 하단 화살표의 클래스 이름

-   **leftClassName** `<String>`: 좌측 화살표의 클래스 이름

-   **rightClassName** `<String>`: 우측 화살표의 클래스 이름

- **DISAPPEAR_TIME** `<Number>`: 화살표가 자동으로 사라지는 시간 
	> 기본값: 2000ms

<br>

## Instance Methods

### setArrow(dir, arrow1, arrow2)

스크롤 방향에 따라 화살표를 설정

-   **dir** `<String>`: 스크롤 방향 (vertical 또는 horizontal)
-   **arrow1** `<jQuery Object>`: 상단/좌측 화살표
-   **arrow2** `<jQuery Object>`: 하단/우측 화살표

```js
scrollArrow.setArrow('vertical', arrow1, arrow2);
```

----

### apply(scrlElement)

스크롤 요소에 화살표를 적용

-   **scrlElement** `<jQuery Object>`: 스크롤이 적용될 대상 요소

```js
scrollArrow.apply($("#scrollElement"));
```
---

### autoDisappear()

화살표가 자동으로 사라지도록 처리

```js
scrollArrow.autoDisappear();
```

---

### scrollVertProc()

세로 방향 스크롤에 맞는 화살표를 설정하고 스크롤 이벤트를 처리

```js
scrollArrow.scrollVertProc();
```

---

### scrollHoriProc()

가로 방향 스크롤에 맞는 화살표를 설정하고 스크롤 이벤트를 처리

```js
scrollArrow.scrollHoriProc();
```

---

### onScrollFirst()

스크롤이 상단에 있을 때 상단 화살표를 숨기고 하단 화살표를 표시

```js
scrollArrow.onScrollFirst();
```

---

### onScrollSecond()

스크롤이 하단에 있을 때 하단 화살표를 숨기고 상단 화살표를 표시

```js
scrollArrow.onScrollSecond();
```

---

### isMoreScrollTop()

스크롤이 상단을 벗어난 상태인지 확인

-   **Returns** `<Boolean>` <br>
상단을 벗어났다면 true, 그렇지 않으면 false

```js
let isScrolled = scrollArrow.isMoreScrollTop();
```

---

### isMoreScrollBottom()

스크롤이 하단을 벗어난 상태인지 확인

-   **Returns** `<Boolean>` <br>
하단을 벗어났다면 true, 그렇지 않으면 false

```js
let isScrolled = scrollArrow.isMoreScrollBottom();
```

---

### visibleCheckVert()

세로 방향에서 화살표의 가시성을 확인하고 표시

```js
scrollArrow.visibleCheckVert();
```

---

### isMoreScrollLeft()

스크롤이 왼쪽을 벗어난 상태인지 확인

-   **Returns** `<Boolean>` <br>
왼쪽을 벗어났다면 true, 그렇지 않으면 false

```js
let isScrolled = scrollArrow.isMoreScrollLeft();
```

---

### isMoreScrollRight()

스크롤이 오른쪽을 벗어난 상태인지 확인

-   **Returns** `<Boolean>` <br>
오른쪽을 벗어났다면 true, 그렇지 않으면 false

```js
let isScrolled = scrollArrow.isMoreScrollRight();
```

---

### visibleCheckHori()

가로 방향에서 화살표의 가시성을 확인하고 표시

```js
scrollArrow.visibleCheckHori();
```

---
<br>

## Example Usage

```js
// ScrollArrow 인스턴스 생성
let scrollArrow = new ScrollArrow();

// 화살표 설정 (세로 방향)
scrollArrow.setArrow('vertical', arrow1, arrow2);

// 스크롤 요소에 화살표 적용
scrollArrow.apply($("#scrollElement"));

// 자동으로 화살표가 사라지도록 설정
scrollArrow.autoDisappear();

// 세로 방향 스크롤 처리
scrollArrow.scrollVertProc();

// 가로 방향 스크롤 처리
scrollArrow.scrollHoriProc();
```