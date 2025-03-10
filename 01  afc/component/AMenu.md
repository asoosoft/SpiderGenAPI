# AMenu
Extends: [AFloat](https://wikidocs.net/275188)  

메뉴 항목을 동적으로 추가하고, 서브 메뉴를 표시하며, 메뉴 항목을 선택할 수 있는 기능을 제공하는 컴포넌트. 

메뉴 아이템을 추가하고, 해당 아이템에 대한 클릭 및 마우스오버 이벤트를 처리하며, 서브 메뉴를 띄울 수 있는 기능을 제공.

## Instance Methods  

### init()
AMenu를 초기화하고 메뉴를 생성.

```js
menu.init();
```

### Constructor(rootMenu, menuId, iconmap) 
메뉴를 초기화할 때 사용되며, 여러 매개변수를 통해 메뉴의 속성을 설정.

- **rootMenu** `<AMenu>`: 이 매개변수는 현재 메뉴가 서브 메뉴인 경우, 최상위 메뉴를 지정하는 데 사용됨. 만약 현재 메뉴가 최상위 메뉴라면 rootMenu는 null로 설정 가능.

- **menuId** `<String>`: 메뉴의 고유 식별자. 각 메뉴는 고유한 ID를 가져야 하며, 이를 통해 메뉴를 식별하고 관리.

- **iconMap** `<String>`: 메뉴 아이콘의 URL 또는 CSS. 메뉴 항목에 표시할 아이콘을 지정.

```
var rootMenu = new AMenu(null, 'rootMenu', 'Source/img/root_icon.png');
var subMenu = new AMenu(rootMenu, 'subMenu', 'Source/img/sub_icon.png');
```

### setIconMap(iconMap)
메뉴 아이템에 표시될 아이콘을 설정.

- **iconMap** `<String>`: 아이콘이 포함된 이미지의 경로  

```js
menu.setIconMap("icons/menu-icons.png");
```

### popup(left, top, width, height, closeCallback)
메뉴를 팝업하는 메서드. 

지정된 위치와 크기로 표시되며, 닫힐 때 콜백 함수를 호출.

- **left** `<Number>`: 왼쪽 위치  
- **top** `<Number>`: 위쪽 위치  
- **width** `<Number>`: 메뉴의 너비  
- **height** `<Number>`: 메뉴의 높이  
- **closeCallback** `<Function>`: 메뉴가 닫힐 때 호출되는 콜백 함수  

```js
menu.popup(100, 200, 300, 400, function() {
    console.log("메뉴가 닫혔습니다.");
});
```

### popupEx(info, closeCallback)
추가 정보를 받아 메뉴를 팝업하는 메서드.

- **info** `<Object>`: 메뉴의 추가 정보  

- **closeCallback** `<Function>`: 메뉴가 닫힐 때 호출되는 콜백 함수  

```js
menu.popupEx({ someData: true }, function() {
    console.log("메뉴가 닫혔습니다.");
});
```

### close(result)
메뉴를 닫고 선택된 항목에 대한 결과를 반환.

- **result** `<Any>`: 반환할 값  

```js
menu.close("닫은 결과");
```

### insertItemInfo(itemInfo, index)
메뉴 항목을 추가. 항목은 itemInfo 형식으로 추가.

- **itemInfo** `<Object>`: 추가할 항목 정보 

	> 예: { text: 'Open File...', icon: '', sub: [...] }
	
- **index** `<Number>`: 항목을 삽입할 인덱스  

```js
menu.insertItemInfo({ text: 'New File', icon: 'icon.png' }, 0);
```

### removeItemInfoByIndex(index, deleteCount)
지정된 인덱스의 메뉴 항목을 삭제.

- **index** `<Number>`: 삭제할 항목의 인덱스  
- **deleteCount** `<Number>`: 삭제할 항목의 개수 (기본값: 1)  

```js
menu.removeItemInfoByIndex(0);
```

### setItemInfoArr(itemInfoArr)
전체 항목 정보를 배열로 설정.

- **itemInfoArr** `<Array>`: 메뉴 항목 정보 배열 

	> 각 항목은 { text: '이름', icon: '아이콘' } 형태

```js
menu.setItemInfoArr([{ text: 'Open', icon: 'open_icon.png' }, { text: 'Close', icon: 'close_icon.png' }]);
```

### popupSubmenu(itemEle, itemInfoArr)
서브 메뉴를 특정 항목의 하위 메뉴로 팝업.

- **itemEle** `<HTMLElement>`: 메뉴 항목 요소  

- **itemInfoArr** `<Array>`: 서브 메뉴 항목 정보 배열  

```js
menu.popupSubmenu(itemElement, [{ text: 'Sub Item 1', icon: 'sub_icon.png' }]);
```

### setOverStyle(overStyle)
마우스를 올렸을 때 적용되는 CSS 스타일을 설정.

- **overStyle** `<String>`: 적용할 CSS 클래스명  

```js
menu.setOverStyle('highlight');
```

### setResultListener(listener)
메뉴가 선택되었을 때 결과를 수신받을 리스너 객체를 지정. 

리스너 객체에 정의된 onMenuResult(amenu, info, e) 함수를 호출하여 결과를 전달.

**listener** `<Object>`: 결과를 받을 리스너 객체.


### reportEvent(evtName, info, event)
자신에게 evtName으로 등록된 모든 리스너에게 이벤트를 전달. 

각 컴포넌트 별 이벤트 조건이 만족되었을 경우 자동으로 호출되지만, 코드를 통해 임의로 리스너에게 이벤트를 전달하고 싶을 때 사용 가능.

* **evtName** `<String>`: 발생시킬 이벤트 이름 

	> 예: "click", "focus"

* **info** `<Object>`: 발생된 이벤트 관련 정보로, 각 컴포넌트마다 전달되는 값이 다르며 이벤트 처리 함수의 두 번째 파라미터로 전달.

* **event** `<Event>`: 자바스크립트 이벤트 객체로, 이벤트 발생 시점의 값을 전달.


## Events
### select
메뉴 항목이 선택될 때 발생하는 이벤트.

```js
menu.addEventListener("select", function(event) {
    console.log("선택된 항목:", event.detail);
});
```

### mouseover
메뉴 항목에 마우스를 올렸을 때 발생하는 이벤트.

```js
menu.addEventListener("mouseover", function(event) {
    console.log("마우스 오버됨:", event.target);
});
```

### mouseout
메뉴 항목에서 마우스가 벗어났을 때 발생하는 이벤트.

```js
menu.addEventListener("mouseout", function(event) {
    console.log("마우스 아웃됨:", event.target);
});
```