# RefreshIndicator

**RefreshIndicator**는 페이지나 스크롤 영역에서 **새로고침 기능**을 제공하는 컴포넌트

이 클래스는 사용자가 화면을 당길 때 로딩 상태를 시각적으로 표시하고, 새로고침을 트리거

다양한 상태를 관리하며, 스타일을 커스터마이징할 수 있는 기능을 제공


## Properties

-   **element** `<DOM Object>`<br>
	null로 초기화된 DOM 요소, 나중에 동적으로 생성

-   **acomp** `<Object>`<br>
	null로 초기화된 컴포넌트 객체

-   **iconColor** `<String>`<br>
	기본 아이콘 색상

-   **spinnerColor** `<String>`<br>
	기본 스피너 색상

-   **maxHeight** `<Number>`<br>
	새로고침 트리거 최대 높이

-   **type** `<Number>`<br>
	새로고침 스타일 유형 (기본값: OVERLAY)

-   **shadow** `<Boolean>`<br>
	그림자 여부 (기본값: true)

-   **isEnable** `<Boolean>`<br>
	새로고침 기능의 활성화 상태


## jQuery Properties

-   **$scrollEle** `<jQuery Object>`<br>
스크롤 이벤트가 발생할 요소를 나타내는 jQuery 객체

-  **$indicator** `<jQuery Object>`<br>
 새로고침 인디케이터 요소

-  **$controlDiv** `<jQuery Object>`<br>
인디케이터의 컨트롤 div 요소

-  **$iconDiv** `<jQuery Object>`<br>
인디케이터의 아이콘 div 요소

-  **$spinnerDiv** `<jQuery Object>`<br>
인디케이터의 스피너 div 요소

-  **$modalBg** `<jQuery Object>`<br>
인디케이터의 배경 모달 div 요소


## Class Variables

### RefreshIndicator.OVERLAY `<Number>`

0: 오버레이 스타일로 새로고침 표시

---

### RefreshIndicator.PUSHLAY `<Number>`

1: 푸시 레이 스타일로 새로고침 표시

---

### RefreshIndicator.shadow `<Boolean>`
> 기본값: true

새로고침 아이콘에 그림자 효과를 적용할지 여부

---

### RefreshIndicator.type `<Number>`
> 기본값: RefreshIndicator.OVERLAY

 새로고침 스타일 타입 (OVERLAY 또는 PUSHLAY)

---

### RefreshIndicator.maxHeight `<Number|null>`
> 기본값: null

새로고침이 트리거되는 최대 스크롤 높이

---

### RefreshIndicator.iconColor `<String>`
> 기본값: 'rgb(66, 133, 244)'

기본 아이콘 색상

---

### RefreshIndicator.spinnerColor `<String>`
> 기본값: 'rgb(66, 133, 244)'

기본 스피너 색상 

---

<br>

## Instance Methods

### setIconColor(iconColor)

아이콘 색상을 설정

-   **iconColor** `<String>`: 설정할 아이콘 색상

```js
RefreshIndicator.setIconColor('rgb(255, 0, 0)');
```

---

### setSpinnerColor(spinnerColor)

스피너 색상을 설정

-   **spinnerColor** `<String>`: 설정할 스피너 색상

```js
RefreshIndicator.setSpinnerColor('rgb(0, 255, 0)');
```

---

### setMaxHeight(h)

새로고침 트리거의 최대 높이를 설정

-   **h** `<Number>`: 설정할 최대 높이 값

```js
RefreshIndicator.setMaxHeight(200);
```

---

### setShadow(shadow)

아이콘의 그림자 효과를 설정

-   **shadow** `<Boolean>`: 그림자 적용 여부

```js
RefreshIndicator.setShadow(false);
```

---

### getIconColor()

현재 아이콘 색상을 반환

-   **Returns** `<String>`: 현재 설정된 아이콘 색상

```js
let iconColor = RefreshIndicator.getIconColor();
```

---

### getSpinnerColor()

현재 스피너 색상을 반환

-   **Returns** `<String>`: 현재 설정된 스피너 색상

```js
let spinnerColor = RefreshIndicator.getSpinnerColor();
```

---

### getMaxHeight()

현재 설정된 최대 높이를 반환

-   **Returns** `<Number | null>`: 현재 설정된 최대 높이 값

```js
let maxHeight = RefreshIndicator.getMaxHeight();
```

---

### getShadow()

현재 그림자 설정을 반환

-   **Returns** `<Boolean>`: 현재 그림자 설정 여부

```js
let shadow = RefreshIndicator.getShadow();
```

---

### init(comp, scrollEle)

RefreshIndicator를 초기화

> 이 메소드는 scrollEle에서의 스크롤 이벤트를 감지하고, <br>
> 새로고침 UI 요소를 추가

-   **comp** `<Object>`: 새로고침을 사용하는 컴포넌트 객체
-   **scrollEle** `<Object>`: 새로고침을 트리거할 스크롤 요소

```js
refreshIndicator.init(comp, scrollEle);
```

---

### setRefreshFunc(refreshFunc)

새로고침이 트리거될 때 실행할 함수를 설정

-   **refreshFunc** `<Function>`: 새로고침 시 실행할 함수

```js
refreshIndicator.setRefreshFunc(function() {
  console.log('Refreshing...');
});
```

---

### setIconColor(color)

아이콘 색상을 설정

-   **color** `<String>`: 아이콘 색상

```js
refreshIndicator.setIconColor('red');
```

---
### setSpinnerColor(color)

스피너 색상을 설정

-   **color** `<String>`: 스피너 색상

```js
refreshIndicator.setSpinnerColor('blue');
```

---

### setMaxHeight(h)

새로고침 트리거의 최대 높이를 설정

-   **h** `<Number>`: 최대 높이 값

```js
refreshIndicator.setMaxHeight(200);
```

---

### hide()

새로고침 UI를 숨김

```js
refreshIndicator.hide();
```

---

### destroy()

RefreshIndicator를 제거하고 관련된 이벤트 리스너를 해제

```js
refreshIndicator.destroy();
```

---

### enable(isEnable)

새로고침 기능을 활성화 또는 비활성화

-   **isEnable** `<Boolean>`: 활성화 여부

```js
refreshIndicator.enable(true);
```

---

<br>

## Example Usage

```js
// 새로고침 인디케이터 생성
let refreshIndicator = new RefreshIndicator();

// 새로고침 함수 설정
refreshIndicator.setRefreshFunc(function() {
  console.log('Content is refreshing...');
});

// 인디케이터 초기화
refreshIndicator.init(comp, scrollEle);

// 새로고침 상태 숨기기
refreshIndicator.hide();

// 새로고침 기능 비활성화
refreshIndicator.enable(false);
```