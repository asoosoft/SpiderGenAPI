# DnDListView
> **Extends** AListView

HTML 드래그 앤 드롭 관리 리스트뷰

## Static Variables

### DndListVIew.dndManager `<DnDManager>`

DnDListView 에서 공용으로 사용하는 DnDManager 객체

## Instance Variables

### dragInx `<Number>`

드래그 되는 리스트 아이템의 인덱스

### option.longTabClass `<String>`

* **default**: "sys_border_cyan"

## Static Methods

### DnDListView.regDrag( item, listener )

DnDListView 의 공용 DnDManager 객체를 이용하여 item 의 드래그 모드를 설정.
<br/>DnDManager의 **regDrag** 함수를 참고

### DnDListView.regDrog( item, listener )

DnDListView 의 공용 DnDManager 객체를 이용하여 item 의 드랍 모드를 설정.
<br/>DnDManager의 **regDrop** 함수를 참고

## Instance Methods

### createItems( url, dataArray, posItem, isPrepend )

리스트뷰에 아이템을 추가하며 드래그 & 드랍 기능을 활성화 하는 메서드

* **url** `<String>` 아이템에 추가될 뷰 리소스 url
* **dataArray** `<Array>` 화면과 매핑될 데이터객체 배열
* **posItem** `<HTMLElement>` 아이템을 추가할 위치가 되는 아이템(생략될 경우 리스트뷰의 맨 앞이나 맨 뒤에 추가)
* **isPrepend** `<Boolean>` 아이템을 맨 앞에 추가하거나 맨 뒤에 추가(posItem이 존재하면 posItem 앞이나 뒤에 추가)
* **Returns** `<HTMLElement Array>` 아이템 엘리먼트 배열

```js
let items = await dndListView.createItems('itemView.lay', dataArray);
```

### getDragInx()

현재 드래그 중인 아이템의 인덱스 반환

* **Returns** `<Number>`

```js
// dndListView 는 DnDListView 객체
let inx = dndListView.getDragInx();
```


### onDragStart( dnd, e )

드래그가 시작될 때 호출되는 메서드.

* **dnd** `<Object>` DnDManager 객체
* **e** `<Object>` 이벤트 객체

```js
dndListView.onDragStart(dndManagerInstance, event);
```

### onDragEnd( dnd, e )

드래그가 종료될 때 호출되는 메서드.

* **dnd** `<Object>` DnDManager 객체
* **e** `<Object>` 이벤트 객체

```js
dndListView.onDragEnd(dndManagerInstance, event);
```


### onDragEnter( dnd, e )

드래그 요소가 드랍 가능 영역에 들어올 때 호출

* **dnd** `<Object>` DnDManager 객체
* **e** `<Object>` 이벤트 객체

```js
dndListView.onDragEnter(dndManagerInstance, event);
```

### onDragLeave( dnd, e )

드래그 요소가 드랍 가능 영역에서 나갈 때 호출

* **dnd** `<Object>` DnDManager 객체
* **e** `<Object>` 이벤트 객체

```js
dndListView.onDragLeave(dndManagerInstance, event);
```


### onElementDrop( dnd, e, dragEle )

드래그 작업이 종료 될 때 호출되는 메서드. <br>
드래그 되는 아이템 뷰의 위치를 변경하고 리스트뷰에 등록된 delegator의 onItemMoved(dragComp, dropComp, listview) 메서드를 호출.

* **dnd** `<Object>` DnDManager 객체
* **e** `<Object>` 이벤트 객체
* **dragEle** `<HTMLElement>` 드래그 엘리먼트

```js
dndListView.onElementDrop(dndManagerInstance, event, draggedElement);
```

### onViewLongTab( comp, info, e )

아이템 뷰가 롱탭되었을 때 발생하는 이벤트 함수.<br> 드래그뷰의 item 에 드래그모드를 설정.

* **comp** `<AView>` 드래그 뷰
* **info** `<Object>` 
* **e** `<Object>` 이벤트 객체

```js
dndListView.onViewLongTab(itemView, info, event);
```

### regDrag( item, listener )

dndManager 의 regDrag 메서드를 호출하여 드래그 모드를 설정.

* **item** `<HTMLElement>` 드래그할 리스트 아이템
* **listener** `<Object>` 이벤트를 수신할 객체

```js
DnDListView.regDrag(myItem, myListener);
```

### regDrop( item, listener )

dndManager 의 regDrag 메서드를 호출하여 드랍 모드를 설정.

* **item** `<HTMLElement>` 드래그할 리스트 아이템
* **listener** `<Object>` 이벤트를 수신할 객체

```js
DnDListView.regDrop(myItem, myListener);
```