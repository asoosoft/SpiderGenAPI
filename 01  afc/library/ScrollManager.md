# ScrollManager

자체적인 스크롤기능을 구현해주는 클래스

> 스크롤 이벤트를 감지하고, 스크롤 속도를 조정하며, 자동 스크롤 애니메이션을 처리.

<br/>

## Class Variables

### scrlTimer `<Number | null>`

스크롤 애니메이션을 실행하는 타이머 ID.

>  `requestAnimationFrame` 또는 `setTimeout`을 사용하여 실행되며, 스크롤이 종료되면 `null`로 초기화.

### startTime, oldTime `<Number>`

스크롤이 시작된 시간과 가장 최근 업데이트된 시간을 나타냄. 

> 스크롤 속도 계산에 사용.

### startPos, oldPos, posGap `<Number>`

스크롤 시작 위치, 이전 위치, 그리고 변화량(이동 거리) 값을 저장. 
> `posGap`은 일정 값 이상 변화해야 스크롤이 시작.

### oldDis, totDis `<Number>`

이전 이동 거리와 총 이동 거리를 나타냄. 

> 스크롤이 얼마나 이동했는지를 추적하는 데 사용.

### scrollState `<Number>`

현재 스크롤 상태를 나타냄.

| `<Number>`|상태|
|-|-
|`1`| `initScroll` (스크롤 초기화 중)|
| `2`| `updateScroll` (스크롤 이동 중)|
| `3`| `scrollCheck` (스크롤 속도 체크 중)|
    

### isScrollStop `<Boolean>`

스크롤이 중지되었는지 여부를 나타냄. 

> 자동 스크롤 중지는 이 값을 `true`로 설정하여 감지 가능.

### scrollEnable `<Boolean>`

스크롤 가능 여부를 설정하는 플래그. 

> 기본적으로 `true`이며, `false`로 설정하면 스크롤 동작을 차단.

### disableManagers `<Array>`

스크롤 동작을 방해하지 않도록 특정 `ScrollManager` 인스턴스를 일시적으로 비활성화하는 리스트. 

>스크롤이 종료되면 다시 활성화.

### moveStart `<Boolean>`

스크롤이 시작되었는지를 나타내는 값. 
> 사용자가 충분한 거리를 이동하면 `true`가 됨.

### stopCallback `<Function | null>`

스크롤 애니메이션이 멈출 때 실행할 콜백 함수. 

>사용자가 정의할 수 있으며, 스크롤이 종료된 후 특정 동작을 수행 가능.

### option `<Object>`

스크롤 감속 및 이동 관련 설정을 저장하는 객체.

>  기본값으로 `moveDelay: 40`이 설정되어 있으며, 스크롤 반응성을 조정 가능.

- **moveDelay** `<Number>`: 사용자의 입력이 스크롤로 인식되는 최소 이동 거리(기본값: `40`). 
  - 값이 작을수록 스크롤이 즉시 반응하며, 클수록 작은 움직임에서는 스크롤이 시작되지 않음. 

```js 
scrollManager.setOption({ moveDelay: 30 }); // 더 빠르게 반응    
scrollManager.setOption({ moveDelay: 60 }); // 더 둔하게 반응   
```
<br/>

## Instance Methods

### addDisableManager( manager )

자신이 스크롤될 때 움직이지 말아야 할 **ScrollManager**를 지정.

- **manager** `<ScrollManager>` 스크롤 매니저 객체

```js
scrollManager.addDisableManager(otherScrollManager);
```

<br/>

### enableScroll( enable )

스크롤을 활성화/비활성화.

- **enable** `<Boolean>` 스크롤 가능 여부

```js
scrollManager.enableScroll(false); // 스크롤 비활성화
```

<br/>

### initScroll( pos )

스크롤 상태를 초기화.

**pos** `<Number>` 스크롤 시작 위치
```js
scrollManager.initScroll(0);
```

<br/>

### removeAllDisableManager()

모든 **ScrollManager**를 해제.

```js
scrollManager.removeAllDisableManager();
```

<br/>

### removeDisableManager( manager )

지정된 **ScrollManager**를 해제.

**manager** `<ScrollManager>` 해제할 스크롤 매니저 객체

```js
scrollManager.removeDisableManager(otherScrollManager);
```
<br/>

### scrollCheck( pos, scrollFunc )

스크롤을 체크하고, 속도에 따라 자동 스크롤을 시작할지 결정.

-   **pos** `<Number>` 현재 위치
-   **scrollFunc** `<Function>` 자동 스크롤 처리 함수
        
```js
scrollManager.scrollCheck(200, (move, velocity) => 
	console.log("속도:", velocity)
);
```

### autoScroll( acceleration, scrollFunc )

자동 스크롤을 실행.

-   **acceleration** `<Number>` 초기 가속도 값
-   **scrollFunc** `<Function>` 스크롤 업데이트 함수

```js
scrollManager.autoScroll(0.1, (move, velocity) =>
	console.log("자동 스크롤 진행")
);
```
<br/>

### setOption( option )

스크롤 이동 감도를 설정.

|option `<Object>`   | 옵션 정보|
|-|-|
|`startDelay` | 최초 자동 스크롤 시작시 속도값 (값이 커질수록 느려짐. 기본값 10)|
|`endDelay`|스크롤을 종료시킬 속도값. (값이 커질수록 천천히 멈춤. 기본값 20)|
|`scrollAmount`|스크롤 이동 수치. (값이 작아질 수록 미세하기 움직이며 이동량이 작아짐. 기본값 50) |
|`velocityRatio`| 스크롤 속도를 감속시킬 비율. (비율이 커질수록 최초 스크롤속도가 빨리 감속. 기본값 0.02)|


<br/>

### stopScrollTimer()

스크롤 타이머를 중지.

```js
scrollManager.stopScrollTimer();
```

<br/>

### setStopCallback( callback )


스크롤 애니메이션이 중지될 때 실행할 함수를 설정.

-   **Parameters:**
    
    -   **callback** `<Function>` 중지 시 실행할 함수
        
-   **Usage:**
    

```js
scrollManager.setStopCallback(() => 
	console.log("스크롤 멈춤")
);
```

<br/>

### updateScroll( pos, updateFunc )

스크롤 위치를 업데이트하고 이동량을 계산.

-   **pos** `<Number>` 현재 위치
    
-   **updateFunc** `<Function>` 스크롤 업데이트 함수

```js
scrollManager.updateScroll(100, (move) =>
	 console.log("이동 거리:", move)
);
```

<br/>