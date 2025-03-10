# AToolBar
> **Extends** [AView](https://wikidocs.net/275135)

**AToolBar**는 상단 또는 하단에 위치하는 **툴바(메뉴 바) 컴포넌트**

내부 요소를 정렬하고, 가로 스크롤을 지원



## Instance Methods

### init(context, evtListener)

AToolBar 객체를 초기화 

동적으로 생성한 경우 init()을 호출

-   **context** `<String>` : 툴바 컴포넌트 생성 정보
-   **evtListener** `<String>` : 이벤트 수신 객체

```js
let toolbar = new AToolBar();
toolbar.init();
```

---

### isHscroll()


툴바가 **가로 스크롤이 가능한 상태인지** 확인

-   **Returns** `<Boolean>` : true이면 스크롤 가능, false이면 불가능

```js
if (toolbar.isHscroll()) {
    console.log('툴바 가로 스크롤 가능');
}
```

---

### scrollTo(leftPos)

툴바를 특정 위치(leftPos)로 이동

-   **leftPos** `<Number>` : 스크롤할 위치 값 (픽셀)

```js
toolbar.scrollTo(100); // 툴바를 왼쪽에서 100px 위치로 이동
```

---

### scrollOffset(offset)


현재 위치에서 **offset** 만큼 툴바를 좌우 이동

-   **offset** `<Number>` : 이동할 픽셀 값 (음수는 왼쪽, 양수는 오른쪽)

```js
toolbar.scrollOffset(50); // 오른쪽으로 50px 이동
toolbar.scrollOffset(-30); // 왼쪽으로 30px 이동
```

---