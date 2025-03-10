# AListView
> **Extends**: [AComponent](https://wikidocs.net/274979)  

AListView는 리스트 형식으로 데이터를 표시하고 관리하는 컴포넌트. 

여러 개의 항목을 추가하고, 삭제하며, 스크롤을 조작할 수 있는 다양한 기능을 제공. 

또한, 선택한 항목을 강조하거나, 동적으로 데이터를 로드하는 기능도 포함.

## Instance Methods 
### itemWrapper()
itemWrapper는 리스트뷰의 각 아이템을 감싸는 HTML 요소. 

이 요소는 아이템의 레이아웃과 스타일을 정의하는 데 사용. 

itemWrapper를 통해 각 아이템의 외관을 커스터마이즈할 수 있으며, 필요에 따라 추가적인 스타일이나 속성을 적용.

itemWrapper는 HTML 요소로서 DOM API를 통한 접근과 조작이 가능.

itemWrapper는 일반적으로 **HTMLElement** 타입. 

이는 DOM 요소로서 다양한 속성과 메서드를 사용할 수 있음을 의미.

```
// itemWrapper에 스타일을 적용하여 아이템의 배경색을 변경
  listView.itemWrapper.style.backgroundColor = 'lightgray';
```

### beforeInit()  
초기화 전에 필요한 변수를 설정.  

```js
listView.beforeInit();
```

### init(context, evtListener)  
AListView를 초기화하고, 기본 옵션을 설정.  

- **context** `<Object>` 컨텍스트 객체  
- **evtListener** `<Function>` 이벤트 리스너  

```js
listView.init(someContext, someListener);
```

### setItemHeight(height)  
리스트 아이템의 높이를 설정.  

- **height** `<Number>` 높이 값  

```js
listView.setItemHeight(50);
```

### setDefaultUrl(url)  
기본 URL을 설정한다.  

- **url** `<String>` 기본 URL  

```js
listView.setDefaultUrl("template/itemTemplate.html");
```

### getDefaultUrl()  
기본 URL을 반환한다.  

- **Returns** `<String>`  

```js
console.log(listView.getDefaultUrl());
```

defaultUrl이 null일 경우
* 기본 URL이 null로 설정되어 있는 경우, addItem 함수를 호출할 때 URL을 명시하지 않으면 아이템 추가 불가능.

* 따라서, 리스트뷰에 아이템을 추가하기 위해서는 반드시 setDefaultUrl을 통해 기본 URL을 설정하거나, addItem 호출 시 URL을 명시. 

* 기본 URL이 설정되지 않은 상태에서 URL을 명시하지 않고 아이템을 추가하려고 하면, 오류가 발생하거나 아이템이 추가되지 않는 상황이 발생.

### enableScrlManager()  
스크롤 매니저를 활성화.  

```js
listView.enableScrlManager();
```

### setScrollComp(acomp)  
스크롤 컴포넌트를 설정.  

- **acomp** `<AComponent>` 스크롤 컴포넌트  

```js
listView.setScrollComp(myScrollComponent);
```

### scrollImplement()  
스크롤 이벤트를 구현.  

```js
listView.scrollImplement();
```

### setScrollArrow(topHeight)  
스크롤 화살표를 설정.  

- **topHeight** `<Number>` 상단 화살표 위치  

```js
listView.setScrollArrow(30);
```

### scrollTopManage()  
스크롤이 최상단에 도달했을 때의 동작을 관리.  
 
```js
listView.scrollTopManage();
```

### scrollBottomManage()  
스크롤이 최하단에 도달했을 때의 동작을 관리.  

```js
listView.scrollBottomManage();
```

### setDelegator(delegator)  
델리게이터를 설정. 

델리게이터는 리스트뷰의 특정 이벤트나 동작을 처리하기 위한 객체로, 리스트뷰와 관련된 사용자 정의 로직을 구현. 

예를 들어, 아이템이 추가되거나 삭제될 때, 델리게이터를 통해 해당 이벤트를 처리.

- **delegator** `<Object>` 델리게이터 객체 . 
- 이 객체는 리스트뷰의 이벤트를 처리하는 메서드를 포함. 
- 예를 들어, bindData(item, data, alistview)와 같은 메서드를 구현하여 데이터 바인딩을 처리.

```
// 델리게이터 객체 정의
var myDelegator = {
    bindData: function(item, data, alistview) {
        // 데이터 바인딩 로직
        item.view.setData(data);
    }
};

// 리스트뷰에 델리게이터 설정
listView.setDelegator(myDelegator);
```

### refreshListView()
리스트뷰의 자식 아이템 항목들을 갱신하여 화면에 다시 보여주는 함수.

이 메서드는 리스트뷰의 데이터가 변경되었을 때, 화면에 즉시 반영하기 위해 사용. 

예를 들어, 아이템의 데이터가 업데이트되었거나, 새로운 아이템이 추가된 경우에 호출하여 리스트뷰를 새로고침 .

```
// 리스트뷰의 데이터를 갱신한 후, 화면에 반영
listView.refreshListView();
```

#### setSelectClass(selectClass)  
선택된 항목에 적용할 클래스를 설정.  

- **selectClass** `<String>` 선택 클래스  

```js
listView.setSelectClass("selected-item");
```

### setDividerColor(color)  
구분선 색상을 설정.  

- **color** `<String>` 색상 값  

```js
listView.setDividerColor("#ff0000");
```

### insertItem(url, dataArray, posItem, isPrepend, itemHeight)  
특정 위치에 아이템을 추가.  

- **url** `<String>` 아이템 뷰 URL  
- **dataArray** `<Array>` 아이템 데이터 배열  
- **posItem** `<HTMLElement>` 기준이 되는 아이템  
- **isPrepend** `<Boolean>` 앞쪽에 추가할지 여부  
- **itemHeight** `<Number>` 아이템 높이  

```js
listView.insertItem("template/item.html", [{ name: "Item1" }], null, false, 50);
```

### addItem(url, dataArray, isPrepend, itemHeight)  
아이템을 추가.  

- **url** `<String>` 아이템 뷰 URL  
- **dataArray** `<Array>` 아이템 데이터 배열  
- **isPrepend** `<Boolean>` 앞쪽에 추가할지 여부  
- **itemHeight** `<Number>` 아이템 높이  

```js
listView.addItem("template/item.html", [{ name: "Item1" }], false, 50);
```

### getItems()  
리스트뷰의 모든 아이템을 가져옴.  

- **Returns** <Array> 아이템 목록  

```js
console.log(listView.getItems());
```

### getItemCount()  
현재 리스트뷰에 있는 아이템 개수를 반환.  

- **Returns** `<Number>` 아이템 개수  

```js
console.log(listView.getItemCount());
```

### scrollTo(pos, isAni)  
지정된 위치로 스크롤을 이동.  

- **pos** `<Number>` 스크롤 위치  
- **isAni** `<Boolean>` 애니메이션 여부  

```js
listView.scrollTo(100, true);
```

### removeItemByIndex(index)  
특정 인덱스의 아이템을 제거.  

- **index** `<Number>` 아이템 인덱스  

```js
listView.removeItemByIndex(2);
```

## Event

### select  
- 아이템이 선택될 때 발생  
  
```js
listView.addEventListener("select", function(event) {
    console.log("선택된 아이템:", event.detail);
});
```

### scrolltop  
- 리스트뷰가 최상단에 도달했을 때 발생  
 
```js
listView.addEventListener("scrolltop", function() {
    console.log("스크롤이 최상단에 도달함");
});
```

### scrollbottom  
- 리스트뷰가 최하단에 도달했을 때 발생  

```js
listView.addEventListener("scrollbottom", function() {
    console.log("스크롤이 최하단에 도달함");
});
```

### drop  
- 리스트뷰에서 드래그 앤 드롭이 발생했을 때 발생  

```js
listView.addEventListener("drop", function(event) {
    console.log("드롭 이벤트 발생:", event.detail);
});
```

### refresh  
- 리스트뷰가 갱신될 때 발생  

```js
listView.addEventListener("refresh", function() {
    console.log("리스트뷰가 새로고침됨");
});
```