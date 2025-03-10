# ARect
> **Extends**: Object

2D 직사각형 영역을 나타내는 클래스

위치(left, top) 및 크기(width, height)를 저장하며, 다양한 연산 및 좌표 변환 기능을 제공

>이  객체는 UI 컴포넌트의 영역을 계산하거나 충돌 감지, 이동 연산 등에 활용할 수 있음.
<br/>

## Properties


### left `<Number>`

사각형의 왼쪽 좌표. 화면 기준으로 가장 왼쪽의 X 좌표

### top `<Number>`

사각형의 위쪽 좌표. 화면 기준으로 가장 위쪽의 Y 좌표

### right `<Number>`

사각형의 오른쪽 좌표. left + width 값으로 자동 계산되며, 사각형의 가장 오른쪽 경계를 의미

### bottom `<Number>`

사각형의 아래쪽 좌표. top + height 값으로 자동 계산되며, 사각형의 가장 아래쪽 경계를 의미

### width `<Number>`

사각형의 가로 길이. right - left 값으로 자동 계산되며, 사각형이 차지하는 가로 공간

### height `<Number>`

사각형의 세로 길이. bottom - top 값으로 자동 계산되며, 사각형이 차지하는 세로 공간



## Instance Methods

### setEmpty()

사각형 정보를 (0,0,0,0) 으로 초기화

```js
const rect = new ARect();
rect.setEmpty();

console.log(rect); 
// {left: 0, top: 0, width: 0, height: 0, right: 0, bottom: 0}
```


<br/>

### setSizeRect(l, t, w, h)

사각형의 위치와 크기를 설정

-   **l** : `<Number>`  left 값
-   **t** :  `<Number>` top 값
-   **w**:  `<Number>` width 값
-   **h** : `<Number>` height 값

```js
const rect = new ARect();
rect.setSizeRect(10, 10, 10, 10);
console.log(rect);
---------------------------------------------------------------
ARect {left: 10, top: 10, width: 10, height: 10, right: 20, …}
```

<br/>

### setPointRect(l, t, r, b)

사각형의 좌표 정보를 설정

-   **l** : `<Number>`  left 값
-   **t** :  `<Number>` top 값
- **r** :  `<Number>` right 값
- **b** : `<Number>` bottom 값

<br/>

### offsetRect(offsetX, offsetY)

사각형을 offsetX, offsetY 만큼 이동

-   **offsetX** : `<Number>` X 방향 이동 거리
-   **offsetY** : `<Number>`  Y 방향 이동 거리

```js
rect.offsetRect(5, 10);
console.log(rect); // 모든 좌표가 (5,10)만큼 이동됨
```



<br/>

### copyRect( src )

다른 ARect 객체의 값을 복사

-   **src** `<ARect>` 복사할 사각형 객체

```js
// 버튼 ID : btn

const btnRect = this.btn.getBoundRect(); //컴포넌트 rect 정보 추출
console.log(btnRect);
	
const rect = new ARect();                   //rect 정보 객체 생성
rect.copyRect(this.btn.getBoundRect());   //컴포넌트 rect 정보 복사
	
console.log(rect);
------------------------------------------------------------------
DOMRect {x: 510, y: 50, width: 80, height: 22, top: 50, …}
ARect {x: 510, y: 50, width: 80, height: 22, top: 50, …}
```

<br/>

### absRect()

width 또는 height 값이 음수일 경우 left ↔ right, top ↔ bottom 값을 서로 교환하여 항상 양수 값이 되도록 조정

<br/>

### reverseX()

**left** ↔ **right** 값을 서로 교환.

<br/>

### reverseY()

**top** ↔ **bottom** 값을 서로 교환.

<br/>

### refreshSize()

**width** 및 **height** 값을 현재 left, right, top, bottom 값으로 다시 계산


```js
rect.refreshSize();
```

<br/>

### refreshRect()

**right** 및 **bottom** 값을 left + width, top + height 값으로 다시 계산

<br/>

### isSubsetPt(x, y)


점 **(x, y)**가 사각형 내부에 있는지 확인

-   **x** : `<Number>` X 좌표
-   **y** : `<Number>` Y 좌표
-   **Returns:**  true이면 내부에 포함됨, false이면 외부에 있음.
    
```js
const inside = rect.isSubsetPt(15, 15);
console.log(inside);
```

```js
const rect = new ARect(10,10,10,10); //left:10, top:10, width:10, height:10

const result1 = rect.isSubsetPt(5, 5);  //left:5, top:5
console.log(result1);
	
const result2 = rect.isSubsetPt(12, 12); //left:12, top:12
console.log(result2);
------------------------------------------------------------------
false
true
```

<br/>

### isSubsetRt( rt )


다른 ARect 객체가 현재 사각형 내부에 완전히 포함되는지 확인.

-   **rt**: `<ARect>` 비교할 사각형 객체
-   **Returns:**  true이면 포함됨, false 이면 포함되지 않음.

```js
// 뷰 ID : menuBarView, 버튼 ID : btn
// 버튼이 뷰 영역 밖에 위치시킨다.

const rect = new ARect();
rect.copyRect(this.menuBarView.getBoundRect());   //menuBarView 의 rect 정보를 복사한다.

const result = rect.isSubsetRt(this.btn.getBoundRect()); //btn이 menuBarView 영역내 있는지 확인한다.
	
console.log(result);
------------------------------------------------------------------
false
```

<br/>

### isIntersectRt( rt )


다른 ARect객체와 겹치는 부분이 있는지 확인

-   **rt** : `<ARect>` 비교할 사각형 객체
        
-   **Returns:**  true이면 겹침, false이면 겹치지 않음.
    


```js
const intersects = rect.isIntersectRt(otherRect);
console.log(intersects);
```

<br/>

### isRectEmpty()


현재 사각형이 비어 있는지 확인 (**width === 0 && height === 0**).

-   **Returns:**  true이면 비어 있음, false이면 비어 있지 않음.