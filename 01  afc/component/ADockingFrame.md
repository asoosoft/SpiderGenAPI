# ADockingFrame( containerId )

> **Extends**: AFrameWnd

**AFrameWnd**를 확장하여 도킹 기능을 제공하는 프레임 윈도우

> 주로 사용자 인터페이스에서 창을 도킹하거나 분리하여 배치할 수 있는 기능을 제공

## Instance Variables

### dockedCntr `<ADockablePanel>`

프레임이 도킹된 컨테이너

도킹될 때 설정되며, 기본값은 **null**

<br/>

### lastDockedCntr `<ADockablePanel>`

프레임이 마지막으로 도킹되었던 컨테이너

도킹될 때 설정되며, 기본값은 **null**

<br/>

### titleHeight `<Number>`

프레임의 타이틀 높이를 설정. 기본값은 22.

> makeTitle() 메서드는 도킹 프레임의 상단에 태그를 생성하여 타이틀을 표시



## Static Methods

### ADockingFrame.getFramePosition( ?frmId )

**frmId** 에 해당하는 프레임 위치 정보를 반환 

> frmId 가 없으면 지금까지 열려진 프레임들의 모든 프레임 위치 정보를 반환

* **?frmId** `<String>` 프레임 아이디
* **Returns** `<Object>` 위치 정보 객체 또는 모든 위치 정보 객체

<br/>

### ADockingFrame.getPosValue( frmId, key )

**frmId** 에 해당하는 프레임 위치 정보 중 특정 key 에 해당하는 값을 가져옴.

* **frmId** `<String>` 프레임 아이디
* **key** `<String>` 키
* **Returns** `<All>` 위치 정보 중 특정값 



### ADockingFrame.readFramePosition( path, defPos )

**path** 에 해당하는 파일을 읽어 프레임 위치 정보에 저장

* **path** `<String>` 위치 정보 저장 경로
* **defPos** `<Object>` 기본 위치 정보



### ADockingFrame.setFramePosition( frmId, posInfo )

**frmId** 에 해당하는 프레임 위치 정보를 저장

* **frmId** `<String>` 프레임 아이디
* **posInfo** `<Object>` 위치 정보



### ADockingFrame.setPosValue( frmId, key, value )

**frmId** 에 해당하는 프레임 위치 정보 중 특정 **key** 에 해당하는 값을 저장

* **frmId** `<String>` 프레임 아이디
* **key** `<String>` 위치 정보
* **value** `<All>` 값



### ADockingFrame.writeFramePosition( path )

프레임 위치 정보를 **path** 에 파일로 저장

* **path** `<String>` 위치 정보 저장 경로



## Instance Methods

### getPositionInfo()

현재 프레임의 위치 정보를 반환. 도킹된 상태인 경우 **dockedCntrId**, **dockedIndex** 정보를 포함.

* **Returns** `<Object>`

```js
dockingFrame.getPositionInfo();
//is Docked : {x:0, y:0, width:100, height:100}
```


### makeTitle()

도킹프레임 상단부분에 태그를 생성. **min**, **max** 버튼은 숨김처리.


### close( result )

프레임을 닫음. 도킹된 상태에서 닫을 경우, 도킹 해제 후 닫힘.

### show( delay )

프레임을 표시.  **close** 값을 **0**으로 변경.

### hide()

프레임을 숨김. **close** 값을 **2**로 설정.



### selectIfDocked()

프레임이 도킹된 경우, 해당 탭을 활성화

```js 
dockingFrame.selectIfDocked();
```




### setPositionInfo( obj )

프레임의 위치를 설정. 도킹상태로 지정하려면 **dockedCntrId**, **dockedIndex** 정보를 위치 정보에 포함.

* **obj** `<String>` 위치 정보 객체 {x:0, y:0, width:100, height:100}

```js
dockFrame.setPositionInfo(
	{x:100, y:100, width: 200, height:300}
);
```


### applyPositionInfo( obj )

저장된 위치 정보를 적용. 도킹된 컨테이너 정보가 있으면 해당 컨테이너에 도킹

-   **obj**  `<Object>` 위치 정보 객체 
- {x:0, y:0, width:100, height:100, dockedCntrId: "someId", dockedIndex: 2}


<!--
### onCreateDone() 

도킹 프레임이 생성된 후 호출. 드래그 옵션을 설정. 

```js 
dockingFrame.onCreateDone()
```
-->

### onDragStart(event, ui)

도킹 프레임이 드래그를 시작할 때 호출. 드래그 위치 창을 표시 

```js 
dockingFrame.onDragStart(event, ui);
```

### onDragStop(event, ui)

도킹 프레임 드래그가 끝난 후 호출. 드래그 위치 창을 숨김
```js 
dockingFrame.onDragStop(event, ui)
```
