# MDMenuBar

> **Extends**: AMenuBar

메뉴 버튼들을 모아놓은 메뉴바를 만드는 컴포넌트. 

> 메뉴 버튼을 추가, 복제, 제거할 수 있으며, 메뉴 선택 시 이벤트를 발생

<br/>

## Properties

### activeMenu `<AMenu>`

현재 활성화된 메뉴



### $activeMenuBtn `<JQuery Object>`

현재 활성화된 버튼의 `jQuery` 객체

### $cloneMenuBar `<JQuery Object>`

복제된 메뉴바의 `jQuery` 객체


### isCloneActive `<Boolean>`

복제 메뉴가 활성화되었는지 여부


-   **Default**: `false`

<br/>
<br/>

## Instance Methods

### initWithMenuInfo( menuInfo )

메뉴 정보를 기반으로 초기화.

- **menuInfo** `<Object>` 메뉴 정보 객체

```js
//iconMap은 stl에 백그라운드 이미지를 입혀놓은 클래스명이거나 이미지의 주소이다.
//이미지는 각 16*16인 아이콘이 나열된 이미지이다.
//icon은 나열된 이미지 중 해당 인덱스이다.

const mdMenuBar = new MDMenuBar();
const menuInfo =
[
    {text: 'btn1', iconMap:'common_icon_map' , sub:
        [
            {text:'sub_btn1', shortKey:'Ctrl+Shift+S', id:'SUB1', icon: 2},
            {text:'sub_btn2', shortKey:'Ctrl+Shift+D', id:'SUB2', icon: 3}
        ]
    },
    {text: 'btn2', iconMap},
    {text: 'btn3', iconMap}
];

mdMenuBar.initWithMenuInfo(menuInfo);
```

<br/>

### addMenuButton( text, menuItem, iconMap)

새로운 메뉴 버튼을 추가.


-   **text** `<String>` 버튼 텍스트
-   **menuItem** `<Array>` 서브메뉴 배열
-   **iconMap** `<String>` 아이콘 맵


```js
const menuItem = [
    { text: 'Option 1', id: 'OPT1' },
    { text: 'Option 2', id: 'OPT2' }
];

mdMenuBar.addMenuButton('Settings', menuItem, 'icon_map');
```

```js
const menuItem = [
{
	text:'sub_btn1', 
	shortKey:'Ctrl+Shift+S', 
    id:'SUB1', 
    icon: 2
},
{
    text:'sub_btn2', 
    shortKey:'Ctrl+Shift+D', 
    id:'SUB2', 
    icon: 3
}];

mdMenuBar.addMenuButton('btn1', menuItem, 'common_icon_map');
```

<br/>


### makeCloneMenuBar()

메뉴바의 복사본을 생성하여 표시.

```js
mdMenuBar.makeCloneMenuBar();
```

### removeCloneMenuBar()

복제된 메뉴바를 제거.

```js
mdMenuBar.removeCloneMenuBar();
```

### doMakeMainMenu( $btn, menuItem, iconMap )

선택된 버튼에 대해 메인 메뉴를 생성.

    
-   **$btn** `<JQuery Object>` 클릭된 버튼
        
-   **menuItem** `<Array>` 메뉴 항목 배열
        
-   **iconMap** `<String>` 아이콘 맵
        

```js
const $btn = $('#menuButton');
const menuItem = [ { text: 'New File', id: 'NEW' } ];

mdMenuBar.doMakeMainMenu($btn, menuItem, 'icon_map');
```

### onMenuSelect( menu, info )

메뉴가 선택될 때 호출.

-   **menu** `<AMenu>` 선택된 메뉴 객체
        
-   **info** `<Object>` 선택된 메뉴 정보
        

```js
mdMenuBar.onMenuSelect(selectedMenu, { id: 'SAVE' });
```