# DDManager


AComponent의 드래그 & 드랍 기능을 관리하는 클래스


> 이 클래스를 사용하면 특정 UI 요소를 드래그 가능하도록 설정하고, 드랍 이벤트를 처리 가능.

<br/>

## Static Variables

### DDManager.DIR_BOTH `<Number>`


상하좌우로 드래그 가능 플래그 

**setDDOption** 에 direction 으로 지정.

-   **Default**  0

<br/>


### DDManager.DIR_VERTICAL  `<Number>`

상하로 드래그 가능 플래그

 **setDDOption** 에 direction 으로 지정.

-   **Default**  1
    

### DDManager.DIR_HORIZENTAL  `<Number>`

좌우로 드래그 가능 플래그 

**setDDOption** 에 direction 으로 지정.

-   **Default**  2


## Instance Variables


### acomp  `<AComponent>`

드래그&드랍 대상 AComponent 객체

### dragBound  `<DOMRect>`

드래그 가능 영역 

**{left:0, top:0, right:0, bottom:0}**  

> 보통 `AComponent`의 `getBoundRect()` 함수를 사용.

### isDraggable  `<Boolean>`

드래그 가능 여부

### isDroppable  `<Boolean>`

드랍 가능 여부

### offsetX  `<Number>`

드래그하는 동안 draggable 요소의 X 위치값을 지정. 

> 위치값은 상대값이며 위치값이 `0`인 경우 요소의 중앙이 마우스 포인터에 위치.

### offsetY  `<Number>`

드래그하는 동안 draggable 요소의 Y 위치값을 지정. 

> 위치값은 상대값이며 위치값이 `0`인 경우 요소의 중앙이 마우스 포인터에 위치.

### option  `<Object>`

드래그&드랍 옵션 

```js
isDropPropagation: false, 
// 드랍 이벤트를 최상위 드랍 컴포넌트에게만 전달할지 

direction: DDManager.DIR_BOTH 
// 드래그 이동 가능 방향, 기본은 가로, 세로 모두 가능
```
<br/>

## Instance Methods

### enableDrag( isDraggable, listener )

드래그 가능 여부를 지정. 
> 리스너에 드래그가 시작, 종료될 때 호출되는 이벤트 함수를 반드시 정의해야 한다.<br/>

드래그 시작 이벤트 : `onDragStart(dragComp, e)`<br/>드래그 종료 이벤트 : `onDragEnd(dragComp, e)`


-   **isDraggable**  `<Boolean>` 드래그 가능 여부
    
-   **listener**  `<Object>` 드래그시 이벤트 받을 객체

```js
// ddMgr 은 DDManager 객체
ddMgr.enableDrag(true, this);
ddMgr.enableDrag(false, this);
```

<br/>

### enableDrop( isDroppable, listener )

드랍 가능 여부를 지정. 

> 리스너에 드랍될 때 호출되는 이벤트 함수를 반드시 정의.

<br/>드랍 이벤트 : `onCompDrop(dragComp, e)`

-   **isDroppable**  `<Boolean>` 드랍 가능 여부
    
-   **listener**  `<Object>` 드랍 이벤트 받을 객체

```js
// ddMgr 은 DDManager 객체
ddMgr.enableDrop(true, this);
ddMgr.enableDrop(false, this);
```

<br/>

### setDDOption( option )

드래그&드랍 옵션을 설정.

- **option**  `<Object>` 옵션 

  - **{ isDropPropagation, direction, autoCenter }** 형식
    
   -   **isDropPropagation** : 드랍 이벤트를 최상위 드랍 컴포넌트에게만 전달할지(`<Boolean>`)
        
    -   **direction**: 드래그 이동 가능 방향(DDManager.DIR_BOTH, DIR_VERTICAL, DIR_HORIZENTAL)
        
    -   **autoCenter**: 드래그 시 요소를 자동으로 중앙 정렬할지(`<Boolean>`)

```js
// ddMgr 은 DDManager 객체
const option = {
	isDropPropagation: true, // 드랍 이벤트를 최상위 드랍 컴포넌트에게만 전달(`<Boolean>`)
	direction: DDManager.DIR_VERTICAL, // 드래그 이동 가능 방향
	autoCenter: true // 요소를 자동으로 중앙 정렬
};
ddMgr.setDDOption(option);
```

<br/>

### setDragBound( bound )

드래그 가능 영역을 설정.

- **bound**  `<DOMRect>` 

**{left:0, top:0, right:0, bottom:0}**

```js
// ddMgr 은 DDManager 객체
ddMgr.setDragBound(this.dragComp.getBoundRect());
```

<br/>

### setDropListener( listener )

드랍 가능 여부를 지정. 

> 리스너에 드랍될 때 호출되는 이벤트 함수를 반드시 정의.

드랍 이벤트 : **onCompDrop(dropComp, e)**

- **listener**  `<Object>` 드랍 이벤트 받을 객체

```js
// ddMgr 은 DDManager 객체
ddMgr.setDropListener(this);
```

<br/>

### setOffset( offsetX, offsetY )

드래그하는 동안 draggable 요소의 위치를 지정. 

> 위치값은 상대값이며 위치값이 0인 경우 요소의 중앙이 마우스 포인터에 위치.

-   **offsetX**  `<Number>` 위치값 x
    
-   **offsetY**  `<Number>` 위치값 y

```js
// ddMgr 은 DDManager 객체
ddMgr.setOffset(10, -10);
```