# AScrollBar
> **Extends** AComponent

스크롤 가능한 영역에 스크롤바를 추가하여 사용자가 콘텐츠를 쉽게 탐색할 수 있도록 돕는 UI 요소.

## Instance Variables

### enableScrollIndicator()

스크롤바에 스크롤 인디케이터(시각적 표시)를 활성화.

-   이 메서드는 내부적으로 **ScrollIndicator** 객체를 생성하여, 세로 또는 가로 방향에 맞게 초기화.
-   스크롤 인디케이터는 스크롤 이동 시 화면에 표시되며, 보다 직관적인 사용자 경험을 제공.

```js
scrollBar.enableScrollIndicator();
```

### countPerArea `<Number>`

한 영역에 보여질 데이터 개수

### dataCount `<Number>`

스크롤 영역에 표현되는 데이터의 개수


### isScrollVert `<Boolean>`

스크롤바가 세로방향인지 가로방향인지 여부

* **Default**: true (세로 스크롤)

### scrollGap `<Number>`

하나의 데이터를 표현할 영역의 넓이. 보통 그리드에서 로우

### scrollPadding `<Number>`

스크롤 영역에서 제외할 상단 영역. (예: 그리드 헤더 높이)

### $cntLo `<jQueryObject>`

컨텐츠의 가상영역 1


### $cntHi `<jQueryObject>`

컨텐츠의 가상영역 2, 브라우저에 따라 1개로 데이터 개수를 모두 표현하지 못하므로 사용

## Instance Methods

### addDataCount( count )

이미 설정된 데이터 개수에 **count** 만큼 더하거나 빼서 스크롤 영역에 표현되는 데이터 총 개수를 갱신.

* **count**  `<Number>` 가감할 값 (양수 -> 증가, 음수 -> 감소)

```javascript
this.scrollBar.addDataCount(5);
```

### addWheelArea( wheelArea )

마우스 휠 이벤트를 해당 **wheelArea**에 등록하여, 휠 동작 시 **AScrollBar** 스크롤이 움직이도록 함.

* **wheelArea** `<HTMLElement>` 휠 이벤트가 발생할 대상 엘리먼트

```javascript
this.scrollBar.addWheelArea(myGridElement);
```

### getCountPerArea()

한 영역(**scrlAreaHeight - scrollPadding**)에서 실제 표현 가능한 데이터 개수를 반환.

* **Returns** `<Number>` 한 영역에서 표현되는 데이터 개수

```javascript
const cnt = this.scrollBar.getCountPerArea();
console.log(cnt);
```

### getBarPos()

현재 스크롤바의 위치 값을 반환.

* **Returns** `<Number>` 현재 스크롤 위치 (px 단위)

```js
let position = scrollBar.getBarPos();
console.log(position);
```

### scrollToTop()

스크롤바를 최상단으로 이동.

```js
scrollBar.scrollToTop();
```

### scrollToBottom()

스크롤바를 최하단으로 이동시키고, 이동 후의 **scrollTop** 값을 반환.

* **Returns** `<Number>` 스크롤이 이동된 후의 **scrollTop** 값

```js
let bottomPos = scrollBar.scrollToBottom();
console.log(bottomPos);
```

### isScrollBottom()

스크롤바가 최하단에 위치했는지 여부를 반환.

* **Returns** `<Boolean>` true 이면 최하단

```javascript
if(this.scrollBar.isScrollBottom()){
	console.log('최하단입니다.');
}
```

### isScrollLeft()

가로 스크롤바가 가장 왼쪽에 위치했는지 여부를 반환.

* **Returns** `<Boolean>` true 이면 스크롤이 맨 왼쪽

```javascript
if(this.scrollBar.isScrollLeft()){
	console.log('맨 왼쪽입니다.');
}
```

### isScrollRight()

가로 스크롤바가 가장 오른쪽에 위치했는지 여부를 반환.

* **Returns** `<Boolean>` true 이면 스크롤이 맨 오른쪽

### isScrollTop()

스크롤바가 최상단에 위치했는지 여부를 반환.

* **Returns** `<Boolean>` true 이면 최상단

```javascript
if(this.scrollBar.isScrollTop()) {
	console.log('최상단입니다.');
}
```


### offsetBarPos( move )

현재 스크롤 위치를 move 만큼 상대적으로 이동.

* **`move`** `<Number>` 이동학 픽셀(px) 값 (양수 -> 아래/오른쪽, 음수 -> 위/왼쪽)

```javascript
this.scrollBar.offsetBarPos(50);
```

### setBarPos(pos)
스크롤바의 위치를 절대값(**pos**)으로 설정.

* **pos** `<Number>` 이동할 스크롤 위치 (px 단위)

```js
scrollBar.setBarPos(200);
```

### setDataCount( dataCount )

스크롤 영역에 표현되는 데이터의 개수를 설정하고, 내부 가상영역의 크기를 조정.

* **dataCount** `<Number>` 새로운 데이터 개수

```javascript
this.scrollBar.setDataCount(1000);
```

### setScrollArea( scrlAreaHeight, scrollPadding, scrollGap, isBorder )

스크롤바가 표현해야 할  실제 스크롤 영역의 크기 정보를 설정하고, 그에 따라 **countPerArea** 등을 계산.

* **scrlAreaHeight** `<Number>` 스크롤 영역의 높이(또는 너비)
* **scrollPadding** `<Number>` 스크롤 영역에서 제외할 상단 영역.
* **scrollGap** `<Number>` 하나의 데이터를 표현할 영역의 넓이.
* **isBorder** `<Boolean>` 스크롤 계산 시 테두리 등을 추가로 고려할지 여부

```js
let scrlAreaHeight = grid.scrollArea.height(),
let scrollPadding = grid.hRowTmplHeight,
let scrollGap = grid.rowTmplHeight;

scrollBarV.addWheelArea(grid.element);
scrollBarV.setScrollArea(scrlAreaHeight, scrollPadding, scrollGap, true);
```

### setScrollType( type )

스크롤바의 방향(세로/가로)을 결정.<br />
**'vert'**(기본값) -> 세로 스크롤, **'hori'** -> 가로 스크롤

* **type** `<String>`  "vert | hori"

```js
this.scrollBar.setScrollType('hori')
```