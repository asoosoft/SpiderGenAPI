# ATree

> **Extends**: AComponent

트리 구조의 데이터를 시각적으로 표현하고 관리할 수 있는 다양한 기능을 제공하는 트리 컴포넌트.

## Instance Variables

### iconMap `<String>` or `<Array>`

트리에 사용될 아이콘 경로를 저장하는 변수

### selectStyle `<String>`

아이템 선택 시 적용될 클래스 이름

```js
this.tree.selectStyle = 'tree-select';
```

### overStyle `<String>`

드래그 오버 시 적용될 클래스 이름

```js
this.tree.overStyle = 'tree-over';
```

### afterStyle `<String>`

드래그 오버 후 1.5초가 지나면 적용될 클래스 이름

```js
this.tree.afterStyle = 'tree-after';
```

## Instance Methods

### clearSelected()

선택된 아이템들을 모두 선택해제

### collapseAll()

트리의 모든 아이템을 접기

```js
this.tree.collapseAll();
```

### deleteAllItems()

루트 아이템을 제외한 모든 아이템을 삭제

### deleteItem( item, mergeHistory )

특정 트리 아이템을 삭제

* **item** `<HTMLElement>` 삭제될 트리 아이템
* **mergeHistory** `<Boolean>` 현재 offset 히스토리 정보에 추가로 등록할지 여부

```js
//트리에서 아이템을 삭제하는 예시
//트리 아이템명이 'test' 인 아이템을 찾아서 삭제한다.
const item = this.tree.findItemByName('test');
this.tree.deleteItem(item);
```

### deselectItem( item )

해당 아이템의 선택을 해제

* **item** `<HTMLElement>` 트리 아이템
* **Returns** `<Boolean>` 성공적으로 선택 해제 될 경우에 true를 반환

### expandItem( item, isExpand )

폴더 형식의 트리아이템을 펼침상태를 설정

* **item** `<HTMLElement>` 트리 아이템
* **isExpand** `<Boolean>` 펼침상태 여부

### findChildItemByData( data, pItem, compare )

매개변수 pItem의 한 단계의 하위 아이템 중에 아이템에 저장된 데이터가 매개변수 data와 일치하는 아이템을 찾아 반환

> 매개변수 pItem의 모든 하위 아이템에서 찾으려면 findItemByData 함수를 사용

* **data** `<All>` 데이터
* **pItem** `<HTMLElement>` 부모 아이템
* **compare** `<function>` 내부적으로 데이터를 비교 할때 사용될 필터 함수
* **Returns**`<HTMLElement>` 트리 아이템

```js
//매개변수 compare에 대한 예시
//데이터 비교를 할때 text만 비교되도록 한다.
//생략시에는 전체비교를 한다.
const sampleFilter = function(a, b)
{
	if(a.text == b.text) return true;
	else return false;
};

const item = this.tree.findChildItemByData(findData, pItem, sampleFilter);
```

### findChildItemByName( name, pItem )

매개변수 pItem의 한 단계의 하위 아이템 중에 아이템의 이름이 매개변수 name과 일치하는 아이템을 찾아 반환

> 매개변수 pItem의 모든 하위 아이템 중에서 찾으려면 findItemByName 함수를 사용

* **name** `<String>` 트리 아이템의 name
* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<HTMLElement>` 트리 아이템

### findItemByData( data, pItem, compare )

매개변수 pItem의 모든 하위 아이템 중에 아이템에 저장된 데이터가 매개변수 data와 일치하는 아이템을 찾아 반환

> 매개변수 pItem의 한 단계의 하위 아이템 중에서 찾으려면 findChildItemByData 함수를 사용

* **data** `<Object>` 데이터
* **pItem** `<Object>` 부모 아이템
* **compare** `<function>` 내부적으로 데이터를 비교 할때 사용될 필터 함수
* **Returns** `<Object>` 트리 아이템

```js
//매개변수 compare에 대한 예시
//데이터 비교를 할때 text만 비교되도록 한다.
//생략시에는 전체비교를 한다.
const sampleFilter = function(a, b)
{
	if(a.text == b.text) return true;
	else return false;
};

const item = this.tree.findItemByData(findData, pItem, sampleFilter);
```

### findItemByName( name, pItem )

매개변수 pItem의 모든 하위 아이템 중에 아이템의 이름이 매개변수 name과 일치하는 아이템을 찾아 반환

> 매개변수 pItem의 한 단계의 하위 아이템 중에서 찾으려면findChildItemByName 함수를 사용

* **name** `<String>` 트리 아이템의 name
* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<HTMLElement>` 트리 아이템

### findItemsByNameLike( name, pItem )

매개변수 pItem의 모든 하위 아이템들중에 이름에 매개변수 name이 포함되는 아이템들을 배열로 반환

* **name** `<String>` 키워드
* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<HTMLElement Array>` 트리 아이템 배열

```js
//아이템 이름에 'cat'이 포함된 모든 아이템을 반환한다.
const items = this.tree.findItemsByNameList('cat', pItem);
```

### getAllItems()

트리의 모든 아이템을 배열로 반환

* **Returns** `<Array<HTMLElement>>` 모든 트리 아이템

```js
const items = this.tree.getAllItems(); 
console.log(items);
```

### getExpandedItems()

확장된(펼쳐진) 트리 아이템 목록을 반환

* **Returns** `<Array<HTMLElement>>` 확장된 아이템 목록

```js
const expandedItems = this.tree.getExpandedItems(); 
console.log(expandedItems);
```

### getChildItems(pItem)

매개변수 pItem의 하위 아이템을 JQuery Array 형식으로 반환

* **pItem** `<HTMLElement>` 부모 아이템(생략시 루트 아이템 기준)
* **Returns** `<JQuery Array>`

### getChildren( pItem, callback )

부모아이템의 하위 아이템들에서 콜백함수를 호출

* **pItem** `<HTMLElement>` 부모 아이템
* **callback** `<Function>` 콜백함수

```js
this.tree.getChildren(pItem, function(item, idx){
    console.log(item, idx);
});
```

### getClickedItem()

가장 마지막에 클릭한 아이템을 반환

* **Returns** `<HTMLElement>` 가장 마지막에 클릭한 트리 아이템

### getFirstChildItem( pItem )

부모 아이템의 첫번째 자식 아이템을 반환

* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<HTMLElement>` 트리 아이템

### getLastChildItem( pItem )

부모 아이템의 마지막 자식 아이템을 반환

* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<HTMLElement>` 트리 아이템

### getParentItem( item )

부모 아이템을 반환

* **item** `<HTMLElement>` 트리 아이템
* **Returns** `<HTMLElement>` 부모 아이템

### getRootItem()

트리의 루트아이템을 반환

* **Returns** `<HTMLElement>`

### getSelectedIndex( item )

선택된 아이템의 포지션을 반환

* **item** `<HTMLElement>` 트리 아이템
* **Returns** `<Number>` 아이템의 위치 인덱스(선택된게 없다면 -1을 리턴)

### getSelectedItems()

트리에서 선택되어 있는 아이템을 배열로 반환

* **Returns** `<Array>`

### getSelectedParent( mItem )

매개변수 mItem 의 부모가 선택되어 있는지 여부를 반환

* **mItem** `<HTMLElement>` 트리 아이템.
* **Returns** `<Boolean>`

### initTree( iconMapUrl )

트리를 초기화

* **iconMapUrl** `<String>` iconMap파일의 Url

```js
this.tree.initTree('Source/img/tree_item.png');
```

### insertItem( pItem, pos, name, data, icon, isExpand, mergeHistory )

트리에 아이템을 추가

* **pItem** `<Object>` 부모 아이템, null 이면 루트에 추가
* **pos** `<Object>` 위치값
* **name** `<String>` 트리에 표시될 이름
* **data** `<Object>` 유저 데이터
* **icon** `<String>` 아이콘
* **isExpand** `<Boolean>` 트리 펼침여부
* **mergeHistory** `<String>` 각각 다른타겟의 액션을 한 history로 묶고 싶을때 사용한다. true일경우 현재 offset 히스토리 정보에 추가로 등록.
* **Returns** `<Object>` 새로 생성된 트리 아이템

### insertItemObj( itemInfo, isExpand, mergeHistory )

트리에 아이템을 추가

* **itemInfo** `<Object>` 아이템 정보 JSON
  * **pItem** : 부모 아이템, null 이면 루트에 추가
  * **pos** : 위치값
  * **name** : 트리에 표시될 이름
  * **data** : 유저 데이터
  * **icon** : 아이콘
  * **comment** : 코멘트값
* **isExpand** `<Boolean>` 펼침여부
* mergeHistory `<String>` 각각 다른타겟의 액션을 한 history로 묶고 싶을때 사용. true일경우 현재offset 히스토리 정보에 추가로 등록.
* **Returns** `<Object>`새로 생성된 트리 아이템

```js
this.tree.insertItemObj({
    pItem: null,      				//부모아이템
    pos : 0,          				//위치값
    name: 'item1',    				//이름
    data: {},         				//데이터
	icon: 'Source/icon.png',        //아이콘
	comment: '코멘트'				//코멘트
}, false, false);
```

### isExistRoot()

선택된 아이템들중에 root Item이 포함되어있는지 여부를 반환

* **Returns** `<Boolean>` 포함 여부

### isMovePossible( moveItem, pItem )

트리아이템이 부모 아이템으로 이동 가능 여부를 반환

* **moveItem** `<HTMLElement>` 트리 아이템
* **pItem** `<HTMLElement>` 부모 아이템
* **Returns** `<Boolean>` 이동 가능 여부

### moveItem( dropItem, mItems, isInsertAfter )

매개변수 mItems의 아이템들을 dropItem으로 이동. 자식 아이템이 있을 경우 같이 이동.

* **dropItem** `<HTMLElement>` 이동 될 기준 아이템
* **mItems** `<HTMLElement>` 이동 할 아이템들의 배열
* **isInsertAfter** `<Boolean>` 위치값
  * **true** : dropItem의 앞으로 이동
  * **false**: dropItem의 자식노드의 맨끝에 삽입

```js
const items = this.tree.getSelectedItems();
this.tree.moveItem(dropItem, items, true);
```

### redoTree()

트리의 히스토리 redo 기능을 호

### rename( item, name )

아이템의 표시될 이름을 변경

* **item** `<HTMLElement>` 트리 아이템.
* **name** `<String>` 변경될 라벨의 text

### scrollToItem( item )

해당 아이템의 보이도록 스크롤

* **pItem** `<HTMLElement>` 트리 아이템

### selectItem( item, isMulti, e )

아이템을 선택상태로 설정

* **item** `<HTMLElement>` 트리 아이템
* **isMulti** `<Boolean>` 다중 아이템 선택 가능 여부
* **e** `<JQuery Event>` 이벤트 객체

### selectNextItem()

트리에서 바로 다음 아이템을 선택

### selectPrevItem()

트리에서 바로 이전 아이템을 선택

### setItem( item, itemInfo )

info 데이터로 아이템을 설정

* **item** `<HTMLElement>` 트리 아이템
* **itemInfo** `<Object>` 아이템에 세팅할 정보
  * **name** : 트리에 표시할 이름
  * **data** : 사용자 데이터
  * **icon** : 트리에 사용할 아이콘

```js
this.tree.setItem(item, {
    name: 'newItem1',
    data: {},
    icon: ''
});
```

### setItemComment( item, comment )

아이템 name 오른쪽에 코멘트 라벨을 추가

* **pItem** `<HTMLElement>` 트리 아이템
* **comment** `<String>` 코멘트 text

```js
this.tree.setItemComment(item, '아이템 설명');
```

### startUseHistory()

히스토리 사용을 시작

### undoTree()

트리의 히스토리 undo 기능을 호출
