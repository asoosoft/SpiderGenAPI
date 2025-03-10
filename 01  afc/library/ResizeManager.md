# ResizeManager

**ResizeManager**는 UI 컴포넌트의 크기 조정 기능을 관리하는 클래스

이 클래스는 사용자가 지정한 크기 **변경 바를 드래그하여 컴포넌트의 크기를 동적으로 조정** 가능

세로/가로 방향으로 크기 조정을 처리하며, 드래그 이벤트와 함께 변경된 크기를 반영하는 기능을 제공

### new ResizeManager(isVertical)

**ResizeManager** 인스턴스를 생성

-   **isVertical** `<Boolean>`: 세로 방향 크기 조정 여부를 설정 <br>
true일 경우 세로 방향으로 크기 조정

	> 기본값: false (가로 방향)

```js
let resizeManager = new ResizeManager(true);
```
---

## Instance Methods

### setScaleGetter(getter)

스케일 값을 가져오는 함수를 설정

-   **getter** `<Function>`: 스케일 값을 반환하는 함수

```js
resizeManager.setScaleGetter(() => 1.2);
```

---

### setResizeCallback(callback)

크기 조정 후 호출될 콜백 함수를 설정

-   **callback** `<Function>`: 크기 조정 후 실행될 함수

```js
resizeManager.setResizeCallback(function(index, newSize) {
  console.log(`Column ${index} resized to ${newSize}px`);
});
```

---

### getScale()

현재 스케일 값을 반환

기본적으로 1을 반환

-   **Returns** `<Number>`: 현재 스케일 값

```js
let scale = resizeManager.getScale();
```

---

### updateResizeEle($resizeEles)

크기 조정 대상 요소를 업데이트

요소들에 대해 크기 조정 바를 생성하고, 설정된 크기 조정 바를 화면에 표시

-   **$resizeEles** `<jQuery Object>`: 크기 조정을 적용할 대상 요소들

```js
resizeManager.updateResizeEle($(".resize-element"));
```

---

### enableResize($cntr, $resizeEles)

크기 조정 기능을 활성화

주어진 컨테이너에서 크기 조정 바를 표시하고, 이벤트 리스너를 활성화

-   **$cntr** `<jQuery Object>`: 크기 조정 바를 추가할 컨테이너
-   **$resizeEles** `<jQuery Object>`: 크기 조정을 적용할 대상 요소들

```js
resizeManager.enableResize($("#container"), $(".resize-element"));
```
---

### updateBarPos()

크기 조정 바의 위치를 업데이트

그리드의 크기 변경 시, 위치 계산을 다시 수행

```js
resizeManager.updateBarPos();
```

---

<br>

## Example Usage

```js
// ResizeManager 인스턴스 생성
let resizeManager = new ResizeManager(true);

// 스케일 값을 가져오는 함수 설정
resizeManager.setScaleGetter(() => 1.2);

// 크기 조정 콜백 함수 설정
resizeManager.setResizeCallback(function(index, newSize) {
  console.log(`Column ${index} resized to ${newSize}px`);
});

// 크기 조정 기능 활성화
resizeManager.enableResize($("#container"), $(".resize-element"));
```