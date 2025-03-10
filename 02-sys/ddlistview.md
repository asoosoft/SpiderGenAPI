# DDListView  
> **Extends** AListView
  
드래그 & 드랍 관리하는 리스트뷰.
  
  
## Instance Variables  

### this.option `<Object>`

**setOption()**을 통해 설정할 수 있는 드래그 & 드롭 관련 옵션

```js
this.setOption({
    'longTabClass': 'sys_box_shadow',  // 드래그 시작 시 적용할 클래스
    'removeClassDelay': 700,           // 드래그 종료 후 클래스 제거 지연 시간
    'isLongTabDrag': true,              // 롱탭으로 드래그 가능 여부
    'allowGlobal': false,               // 다른 리스트뷰로 드래그 & 드롭 가능 여부
    'moveDir': DDManager.DIR_VERTICAL,  // 드래그 방향 (기본값: 수직)
    'dropPrepend': true                 // 드래그된 아이템을 앞쪽에 추가할지 여부
}, true);
```
  
### dragInx `<Number>`  
  
드래그 되는 리스트 아이템의 인덱스 

* **Default** : -1 (드래그 중이지 않음)

```js
console.log(ddListView.getDragInx()); // 현재 드래그 중인 아이템의 인덱스 출력
```
  
## Instance Methods  


### enableDrop( isDroppable, listener )

아이템 및 리스트뷰 자체가 드롭을 허용할지 여부를 설정하는 메서드

-   createItems() 내에서 개별 아이템에 대해 호출됨
-   **isDroppable** `<Boolean>` : 드롭 가능 여부 (**true** → 허용, **false** → 불가)
-   **listener** `<Object>` : 드래그 이벤트를 수신할 객체

```js
ddListView.enableDrop(true, this);
```
  
### changeDragState( dragComp, evt )  
  
롱탭으로 드래그 모드를 활성화.
  
* **dragComp** `<AView>` 드래그 뷰  

```js
ddListView.changeDragState(myItemView, event);
```

### itemInsertManage( dragComp._item, posItem, isPrepend )

드래그한 아이템을 특정 위치에 삽입하는 내부 메서드

-   onCompDrop() 및 onDropFail()에서 사용됨
-   **dragComp._item** `<HTMLElement>`  이동할 아이템
-   **posItem** `<HTMLElement>`  기준이 되는 아이템 (없으면 맨 끝에 추가됨)
-   **isPrepend** `<Boolean>` : **true**면 posItem 앞에 추가, **false**면 뒤에 추가

```js
ddListView.itemInsertManage(draggedItem, targetItem, true);
```

### allowGlobal 옵션 (setOption 내 설정값)

*  **true**로 설정 시, 다른 리스트뷰로도 드래그 & 드롭 가능  
* enableGlobalDrag()에서 **setOption({'allowGlobal': true})** 호출하여 활성화

```js
ddListView.setOption({'allowGlobal': true});
```

```js
ddListView.enableGlobalDrag(); // 다른 리스트뷰로 드래그 & 드롭 가능하도록 설정
```

### moveDir 옵션 (setOption 내 설정값)

* 드래그 방향을 결정하는 옵션  
* 기본값: DDManager.DIR_VERTICAL (세로 방향)  
* enableGlobalDrag()에서 DIR_BOTH로 설정하여 자유롭게 이동 가능

```js
ddListView.setOption({'moveDir': DDManager.DIR_VERTICAL}); // 세로 이동만 가능
ddListView.setOption({'moveDir': DDManager.DIR_BOTH});     // 자유롭게 이동 가능
```

```js
ddListView.enableGlobalDrag(); // moveDir을 DIR_BOTH로 설정하여 자유 이동 가능
```

### createItems( url, dataArray, posItem, isPrepend )  
  
리스트뷰에 아이템을 추가하며, 드래그 기능도 활성화. 
  
* **url** `<String>` 아이템에 추가될 뷰 리소스 url  
* **dataArray** `<Array>` 화면과 매핑될 데이터객체 배열  
* **posItem** `<HTMLElement>` 아이템을 추가할 위치가 되는 아이템(생략될 경우 리스트뷰의 맨 앞이나 맨 뒤에 추가)  
* **isPrepend** `<Boolean>` 아이템을 맨 앞에 추가하거나 맨 뒤에 추가할지(posItem이 존재하면 posItem 앞이나 뒤에 추가)  
* **Returns** `<HTMLElement Array>` 아이템 엘리먼트 배열  

```js
let items = await ddListView.createItems('itemView.lay', dataArray);
console.log(items);
```
  
### getDragInx()  
  
현재 드래그 중인 아이템의 인덱스 반환
  
* **Returns** `<Number>` 드래그 아이템 인덱스  
  
```js  
// ddListView는 DDListView 객체  
let inx = ddListView.getDragInx();  
```  
  
  
### onCompDrop( dropComp, evt )  
  
드래그 작업이 완료 될 때 호출되는 메서드. <br/>
드래그 되는 아이템 뷰의 위치를 변경하고 리스트뷰에 등록된 delegator의 onItemMoved(dragComp, dropComp, listview) 메서드를 호출.  
  
* **dropComp** `<AView>` 드랍되는 아이템 뷰 또는 리스트뷰  
* **evt** `<Object>` 드래그 이벤트 정보 { dragComp, clientX, clientY } 

```js
ddListView.onCompDrop(targetItem,event);
``` 
  
### onDragEnd( dragComp, e )  
  
드래그가 종료될 때 호출되는 메서드.  
  
* **dragComp** `<AView>` 드래그 뷰  
* **e** `<Object>` 이벤트 객체  

```js
ddListView.onDragEnd(draggedItem, event);
```
  
### onDropFail( dragComp, e )  
  
드랍에 실패했을 경우 원래 위치로 복귀 
  
* **dragComp** `<AView>` 드래그 컴포넌트  
* **e** `<Object>` 이벤트 객체  

```js
ddListView.onDropFail(failedItem, event);
```
  
### onDragScrollTop( dir )  
  
드래그를 리스트뷰의 영역을 넘어선 상하의 위치로 이동시킨 하는 경우 리스트뷰의 스크롤탑 위치를 변경하여 상하의 영역이 보일수 있게 함.  
  
* **dir** `<Number>` 방향 -1: 상, 1: 하

```js
ddListView.onDragScrollTop(1);
```  

### enableGlobalDrag()

다른 컴포넌트에도 드래그 & 드랍이 가능하도록 설정하는 메서드<br/>
moveDir을 DIR_BOTH로 설정하여 자유롭게 이동 가능

```js
ddListView.enableGlobalDrag();
```

- 드래그 가능한 리스트 아이템을 다른 리스트뷰 또는 외부 컨테이너로 드래그 & 드랍 할 수 있도록 함.

### setOption()
리스트뷰의 다양한 옵션을 설정하는 메서드

```js
ddListView.setOption({
	longTabClass: 'hightlight',
	removeClassDelay: 500,
	isLongTabDrag: true
});
```

- 드래그 & 드랍 관련 옵션을 설정하는 데 사용. <br/>
옵션 값을 변경하면 드래그 시 CSS 클래스, 삭제 딜레이 시간 등을 조절.
  