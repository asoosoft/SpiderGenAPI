# AMenuBar
> **Extends**: [ABar](https://wikidocs.net/274971)
 
메뉴 아이템을 버튼 형식으로 추가하고, 각 버튼에 해당하는 메뉴 정보를 설정하여 사용자가 쉽게 메뉴를 탐색할 수 있도록 돕는 역할.
  
이 클래스는 메뉴 바를 구성하는 데 필요한 다양한 메서드를 제공.

## Instance Methods
### addMenuButton(text, menuItem)
주어진 text와 menuItem 배열을 사용하여 메뉴바에 새로운 버튼을 추가하고, 각 버튼에 서브메뉴를 연결. 

서브메뉴는 사용자가 버튼을 클릭할 때 드롭다운 형태로 표시.

- **text**`<String>` : 메뉴 버튼에 표시될 텍스트. 예를 들어, 'File', 'Edit'와 같은 메뉴 이름을 지정.
- **menuItem**`<Array>` : 메뉴 아이템 정보 객체로, 메뉴 버튼이 클릭될 때 선택되는 메뉴 항목 정보를 포함.

```js
 [
      {
        text: 'sub_btn1', // 서브메뉴의 텍스트
        shortKey: 'Ctrl+Shift+S', // 단축키 (선택 사항)
        id: 'SUB1', // 서브메뉴의 고유 ID
        icon: 2 // 아이콘 인덱스 (선택 사항)
      },
      {
        text: 'sub_btn2',
        shortKey: 'Ctrl+Shift+D',
        id: 'SUB2',
        icon: 3
      }
    ]
```

### initWithMenuInfo(menuInfo)
이 메서드는 menuInfo 객체를 이용하여 AMenuBar를 초기화하고,  주어진 메뉴 정보를 사용하여 자동으로 메뉴 버튼들을 생성.

**menuInfo**`<Array>` :  메뉴바 전체를 초기화할 때 사용되는 메뉴 정보 배열.

```js
var menuInfo = [
    {
        text: 'File', // 메뉴명
        sub: [ // 서브 메뉴들
            { text: 'Open File', id: 'OPEN_FILE', iconMapUrl: 'Assets/icon.png', icon: 0 },
            { text: 'Close File', id: 'CLOSE_FILE', iconMapUrl: 'Assets/icon.png', icon: 1, shortKey: 'Ctrl+F4' }
        ]
    }
];

var menuBar = new AMenuBar();
menuBar.initWithMenuInfo(menuInfo);  // 메뉴 정보로 메뉴 바 초기화
menuBar.addEventListener('select', this, 'onMenuSelect');  // 메뉴 선택 이벤트 처리 함수 등록
this.menuBarView.addComponent(menuBar);  // 화면에 메뉴 바 추가
```

### findMenuButton(index)
menuInfo 배열을 사용하여 메뉴바를 초기화하고, 각 메뉴와 서브메뉴를 생성. 

이 메서드는 메뉴바를 처음부터 설정할 때 유용하며, 메뉴 정보는 JSON 형태로 구성되어 있어 직관적.

**index**`<Number>` : 메뉴 버튼의 순번을 나타낸다. 이 순번은 메뉴바에 추가된 버튼의 배열에서의 위치를 의미. 

예를 들어, 첫 번째 버튼은 index가 0, 두 번째 버튼은 1이 됨.

**Returns**`<Object>` : 주어진 index에 해당하는 메뉴 버튼을 나타내는 HTML 요소를 반환. 

이 요소는 DOM에서 직접 조작할 수 있는 객체로, 버튼의 스타일을 변경하거나 이벤트를 추가하는 등의 작업을 수행.

```js
var menuBar = new AMenuBar();
menuBar.init();

// 2번째 메뉴 버튼을 찾는다.
var button = menuBar.findMenuButton(1);  
console.log(button);
```