# AAccordion  
> **Extends**: AComponent
  
특정 구조(p,div)로 된 태그 정보를 파라미터로 받아 accordion 메뉴를 구성
  
## Instance Variables
  
  
### downcss `<Object>`   
  
Accordion의 아이템이 열린상태의 화살표의 css 스타일을 정의하는 객체.<br/>아이템이 확장되었을 때의 화살표 모양을 커스터마이징 가능.
  
  
### menuHeight `<Number>`  
  
Accordion의 상단 메뉴 영역의 높이를 가지고 있는 변수.  
  
  
### paddingX `<Number>`  
  
AAccordion의 상단 메뉴 영역의 좌우 padding값을 가지고 있는 변수.  
  
  
### paddingY `<Number>`  
  
AAccordion의 상단 메뉴 영역의 상하 padding값을 가지고 있는 변수.  
  
  
### selectedItem `<Number>`  
  
현재 컨텐츠가 보여지고 있는 아이템의 인덱스를 나타내는 변수.
  
  
### upcss `<Object>`
  
Accordion의 아이템이 닫힌 상태의 화살표의 css 스타일을 정의하는 객체.  

  
## Instance Methods  
  
### getItemByIndex ( index )  
  
특정 인덱스의 아이템을 반환.  
  
- **index** `<Number>` : 아이템의 인덱스 

```javascript
 let item = aaccordion.getItemByIndex(0);  
```
  
### getItemByName ( name )  
  
특정 이름의 아이템을 반환.  
  
- **name** `<String>` : 아이템의 이름 

```javascript
 let item = accordion.getItemByName('itemName');
```
  
### getItemCount()  
  
Accordion에 포함된 아이템의 개수를 반환.  
  
- **Returns** `<Number>`  : 아이템의 개수

```javascript
let itemCount = accordion.getItemCount(); 
console.log('아이템의 개수:', itemCount);
``` 
 
  
### getItems()  
  
모든 아이템을 반환.  
  
- **Returns** `<JQuery Object>` : 아이템의 jQuery 객체  

```javascript
let items = accordion.getItems(); 
console.log('모든 아이템:', items);
```
  
### insertItem ( menuText, url, isOpenLoad )  
  
url뷰의 Item을 생성하여 Accordion에 삽입.  
  
- **menuText** `<String>` 메뉴 텍스트  
- **url** `<String>` 아이템뷰의 URL  
- **isOpenLoad** `<String>` 로드하여 오픈할것인지 여부  
  
```js  
aaccordion.insertItem('타이틀', 'view/item.lay');  
```  
  
  
### removeAllItems()  
  
모든 아이템을 삭제.  
  
### setAccordionOption ( option )  
  
아코디언 옵션을 설정.  

```js  
accordion.setOption({  
 showContent: false, //아코디언 메뉴 추가시점에 바로 컨텐츠가 보여질지 여부  
 speed: 'fast', //에니메이션 속도  
 isSingleShow: true, //하나의 메뉴만 펼칠지  
 isNoAnimation: true, // 애니메이션을 넣을지         
 isShowToggle: true, //펼쳐진 항목 다시 클릭시 숨길지  
 showEvent: 'click',//bind event name (ex: mouseover, ...)
 mouseOverEventDelay: 0,     
 beforeShow: null,  
 afterShow: null, 
 beforeHide: null, 
 afterHide: null, //isMobile: false});  
```

### setMenuDownIcon ( downIcon )  

DOWN아이콘을 설정. <br><br> ※ 주의 : 해당 함수는 insertItem함수를 호출하기 이전에 호출.  
  
- **downIcon** `<String>` 아이콘의 URL  

```js  
accordion.setMenuUpIcon('asset/icon/down.png');  
```
  
### setMenuPadding ( paddingX, paddingY )  
  
제목부분의 패딩을 설정. <br><br> ※ 주의 : 해당 함수는 insertItem함수를 호출하기 이전에 호출.  
  
- **paddingX** `<Number>` X축 패딩  
- **paddingY** `<Number>` Y축 패딩  
  
```js  
accordion.setMenuPadding(10, 20);  
//10% 나 10px을 넣으면 안됨.  
```  
  
### setMenuTooltip ( item, msg)  
  
특정 아이템의 툴팁을 변경.  
  
- **item** `<jQuery Object>` 아이템  
- **msg** `<String>` 변경 할 툴팁  
  
```js  
let item = aaccordion.getItemByIndex(0);  
accordion.setMenuTooltip(item, '새로운 툴팁');  
```  
  
### setMenuUpIcon ( upIcon )  
  
UP아이콘을 설정. <br><br> ※ 주의 : 해당 함수는 insertItem함수를 호출하기 이전에 호출.  
  
- **upIcon** `<String>` 아이콘의 URL  
  
```js  
accordion.setMenuUpIcon('asset/icon/up.png');  
```  
  
  
### showHideByIndex ( index, isAnimation )  
  
특정 인덱스의 아이템을 보여주거나 숨김.  
  
- **index** `<String>` 인덱스  
- **isAnimation** `<String>` 애니메이션 여부  
  
```js  
aaccordion.showHideByIndex(1, true);  
```  
  
  
### showHideByName ( name, isAnimation )  
  
특정 이름의 아이템을 보여주거나 숨김.  
  
- **name** `<String>` 이름  
- **isAnimation** `<String>` 애니메이션 여부  
  
```js  
aacordion.showHideByName('타이틀',true);  
```  
  
  
### showHideManage ( selItem )  
  
선택된 아이템을 관리하여 보여주거나 숨김.
  
- **selItem** `<String>` 파라미터 selItem 은 클릭되어진 메뉴의 상위 item Element.  
  
```js  
let item = aaccordion.insertItem('title','view/item.lay');  
aaccordion.showHideManage(item);  
```  