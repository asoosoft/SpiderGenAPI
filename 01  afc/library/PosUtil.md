# PosUtil

**PosUtil** 은 컴포넌트의 위치 및 크기 조정을 처리하는 유틸리티 클래스

이 클래스는 화면에서 **요소의 위치나 크기를 동적으로 조정**하고, <br>
**이동 및 크기 변경을 효과적으로 처리**하는 기능을 제공

주로 **UI 요소의 위치를 계산하고, 상대적인 이동과 크기 조정 값을 적용하는 데 사용**

### new PosUtil(acomp)

**PosUtil** 인스턴스를 생성

-   **acomp** `<Object>`: 위치 및 크기 조정을 수행할 컴포넌트 객체	
	> 해당 컴포넌트에서 스타일을 변경하고, 위치를 계산하는 데 사용

```js
let posUtil = new PosUtil(acomp);
```
---

<br>

## Properties

-   **PIXEL** `<Number>`: 기본 픽셀 값. 기본값은 10

-   **moveX** `<Number>`: X축으로 이동한 거리

-   **moveY** `<Number>`: Y축으로 이동한 거리

-   **dw** `<Number>`: 너비 변경 값

-   **dh** `<Number>`: 높이 변경 값

-   **stickyMoveX** `<Number>`: X축에서 스티키 효과로 이동한 거리

-   **stickyMoveY** `<Number>`: Y축에서 스티키 효과로 이동한 거리

<br>

## Instance Methods

### setSize(width, height)

컴포넌트의 너비와 높이를 설정

-   **width** `<Number>`: 설정할 너비
-   **height** `<Number>`: 설정할 높이

```js
posUtil.setSize(200, 100);
```

---

### offsetPos(moveX, moveY, isDetail, isMulti, stickyArr)

컴포넌트의 현재 위치를 기준으로 위치를 변경

-   **moveX** `<Number>`: X축 이동 거리

-   **moveY** `<Number>`: Y축 이동 거리

-   **isDetail** `<Boolean>`: 세부적인 위치 이동을 처리할지 여부

-   **isMulti** `<Boolean>`: 여러 컴포넌트를 동시에 이동할지 여부

-   **stickyArr** `<Array>`: 스티키 배열. 스티키 위치를 적용할 수 있음

```js
posUtil.offsetPos(100, 50, false, true, [{type: 'left', sticky: 20}]);
```

---

### offsetPosMoveX(moveX, isDetail, isMulti, stickyX)

X축으로 위치를 변경하는 함수

-   **moveX** `<Number>`: X축 이동 거리

-   **isDetail** `<Boolean>`: 세부적인 위치 이동을 처리할지 여부

-   **isMulti** `<Boolean>`: 여러 컴포넌트를 동시에 이동할지 여부

-   **stickyX** `<Number>`: X축에서 스티키 위치 값

```js
posUtil.offsetPosMoveX(50, true, false, 20);
```

---

### offsetPosMoveY(moveY, isDetail, isMulti, stickyY)

Y축으로 위치를 변경하는 함수

-   **moveY** `<Number>`: Y축 이동 거리

-   **isDetail** `<Boolean>`: 세부적인 위치 이동을 처리할지 여부

-   **isMulti** `<Boolean>`: 여러 컴포넌트를 동시에 이동할지 여부

-   **stickyY** `<Number>`: Y축에서 스티키 위치 값

```js
posUtil.offsetPosMoveY(50, true, false, 20);
```

---

### setPos(pos, posVal)

특정 위치에 값을 설정

-   **pos** `<String>`: 설정할 위치 (left, top, right, bottom, width, height)
-   **posVal** `<String | Number>`: 설정할 위치 값

```js
posUtil.setPos('left', '100px');
```

---

### resizeComp(guideInx, moveX, moveY, isDetail, isMulti)

컴포넌트의 크기 및 위치를 조정

-   **guideInx** `<Number>`: 위치 변경을 위한 가이드 인덱스

-   **moveX** `<Number>`: X축 이동 거리

-   **moveY** `<Number>`: Y축 이동 거리

-   **isDetail** `<Boolean>`: 세부적인 크기 변경을 처리할지 여부

-   **isMulti** `<Boolean>`: 여러 컴포넌트를 동시에 이동할지 여부

```js
posUtil.resizeComp(0, 50, 30, true, false);
```

---

### resizeRcomp(comp)

컴포넌트의 크기를 재조정

-   **comp** `<Object>`: 크기를 재조정할 컴포넌트

```js
posUtil.resizeRcomp(acomp);
```

---

### resetSticky(chk)

스티키 위치를 초기화

-   **chk** `<Boolean>`: 초기화 여부

```js
posUtil.resetSticky(true);
```

---

### setPosInfo(arr)

위치 정보를 설정

-   **arr** `<Array>`: 위치 정보 배열

```js
posUtil.setPosInfo(['left', '10px', 'top', '20px']);
```

---

### setStyle(key, value)

스타일을 설정

-   **key** `<String>`: 설정할 스타일의 키

-   **value** `<String | Number>`: 설정할 스타일의 값

```js
posUtil.setStyle('left', '100px');
```

---

### getPosInfo(isPixel)

현재 위치 정보를 가져옴

-   **isPixel** `<Boolean>`: 픽셀 값으로 반환할지 여부

```js
let posInfo = posUtil.getPosInfo(true);
```

---

### getMarginInfo(isPixel)

현재 마진 정보를 가져옴

-   **isPixel** `<Boolean>`: 픽셀 값으로 반환할지 여부

```js
let marginInfo = posUtil.getMarginInfo(true);
```

---

### getStretchValue(dataKey, isForce)

스트레치 관련 정보를 가져옴

-   **dataKey** `<String>`: 스트레치할 방향이나 크기 <br>
	> left, right, top, bottom, width, height

-   **isForce** `<Boolean>`: 강제로 값을 가져올지 여부

```js
let stretchValue = posUtil.getStretchValue('width');
```

---

### setStretchValue(dataKey, value)

스트레치 관련 값을 설정

-   **dataKey** `<String>`: 스트레치할 방향이나 크기 <br>
	> left, right, top, bottom, width, height

-   **value** `<String | Boolean>`: 설정할 스트레치 값

```js
posUtil.setStretchValue('width', '50%');
```

---

<br>

## Example Usage

```js
let posUtil = new PosUtil(acomp);

// 크기 설정
posUtil.setSize(200, 100);

// 위치 이동
posUtil.offsetPos(100, 50, false, true, [{type: 'left', sticky: 20}]);

// 스타일 설정
posUtil.setStyle('left', '100px');

// 스트레치 값 설정
posUtil.setStretchValue('width', '50%');
```