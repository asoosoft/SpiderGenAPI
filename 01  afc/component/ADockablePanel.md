# ADockablePanel( containerId )

> **Extends**: APanel

**ADockablePanel**은 **APanel**을 확장한 클래스로, 주로 도킹 가능한 프레임을 관리하는 데 사용. 

여러 개의 ADockingFrame을 도킹하거나 해제할 수 있는 기능을 제공.

## Instance Variables

### dockDir `<String>`

도킹 프레임이 도킹될 때 창 분할 방향을 지정

> 기본값은 'column'

## Instance Methods

### activeFrame( frame )

도킹된 특정 프레임을 활성화. 

```js 
dockablePanel.activeFrame(frame);
```


### activeFrameByIndex( inx )

특정 위치의 프레임을 활성화

* **inx** `<Number>` 활성화할 프레임의 위치

```js 
dockablePanel.activeFrameByIndex(0); // 첫 번째 프레임 활성화
```


### getActiveFrame() 

현재 활성화된 프레임을 반환

- **Returns** `<ADockingFrame>` 활성화된 프레임 

```js 
const activeFrame = dockablePanel.getActiveFrame(); 
console.log(activeFrame);
```




### dockFrame( frame, inx, pos, dockSize )

**ADockingFrame**을 지정된 위치와 크기로 도킹

> pos 파라미터는 도킹 위치를 지정하며, -1은 이전에 삽입, 0은 현재 위치에 할당, 1은 이후에 삽입을 의미.

* **frame** `<ADockingFrame>` 프레임
* **inx** `<Number>` 인덱스
* **pos** `<Number>` 도킹 되는 위치 ( -1:insert before, 0:assign, 1:insert after)
* **dockSize** `<Number>`  도킹 사이즈 ( pos가 0일경우 기존자리에 추가되므로 입력 불필요 )

```js
//frame은 ADockingFrame객체이다.
dockablePanel.dockFrame(frame, 1, 1);
```



### getDockedFrames() 

도킹 패널에 추가된 모든 프레임을 배열로 반환

- **Returns** `<Array<ADockingFrame>>` 도킹된 프레임 목록 

```js 
const frames = dockablePanel.getDockedFrames(); 
console.log(frames);
```


### setDockSize( index, size ) 

도킹된 패널의 크기를 설정

- **index** `<Number>` 조절할 패널의 인덱스 
- **size** `<Number>` 변경할 크기(px 단위) 

```js 
dockablePanel.setDockSize(0, 300);
```


### setDelegator( delegator )

도킹 이벤트를 수신할 객체를 지정

* **delegator** `<Object>` 도킹 이벤트 수신할 객체



### setDockDirection( dir )

도킹패널의 분할방향을 설정

* **dir** `<String>` 컨테이너 분할 방향 ["row"|"column"]

```js
dockablePanel.setDockDirection('row');   //열
dockablePanel.setDockDirection('column');  //행
```

<br/>

### undockFrame( frame, x, y, w, h )

도킹된 프레임을 해제하고 지정된 위치와 크기로 이동


* **frame** `<ADockingFrame>` 프레임
* **x** `<Number>` 도킹을 해제하고 나서 left값
* **y** `<Number>` 도킹을 해제하고 나서 top값
* **w** `<Number>` 도킹을 해제하고 나서 width값
* **h** `<String>` 도킹을 해제하고 나서 height값

```js
//frame은 ADockingFrame객체이다.
//포지션값은 %와 px를 생략하고 입력해야한다.
dockablePanel.undockFrame(frame, 100, 200, 500, 500);
```

### removeFrame( frame ) 

도킹 패널에서 특정 프레임을 제거

- **frame** `<ADockingFrame>` 제거할 프레임 객체 

```js 
dockablePanel.removeFrame(frame);
```