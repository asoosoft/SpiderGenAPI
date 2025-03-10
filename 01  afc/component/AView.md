# AView
 
> **Extends**: AComponent

뷰 컴포넌트

> 모든 컴포넌트의 부모 역할을 하며, 컨테이너에 담겨 화면을 표현하는 시작 지점이 되기도 하고, 부분적으로 화면 폼을 구성하는 역할도 함.



## Static Methods


### AView.createView( item, url, owner, eventListener, skipUpdatePos, skipActiveDone, callback, turnback )

뷰 객체를 동적으로 생성하여 반환

| 매개값 | 설명 |
|--|--|
| item | 뷰를 삽입할 요소, 없을 경우 자동 생성 |
|url|뷰의 HTML 파일 경로|
|owner|뷰의 소유자|
|eventListener|이벤트 수신자|
|skipUpdatePos|위치 업데이트 스킵 여부|
|skipActiveDone|활성화 완료 스킵 여부|
|callback|비동기 로드 완료 후 실행할 콜백 함수|
|turnback|기존에 로드된 HTML을 재사용할 경우 전달|

**Returns**: Promise`<AView>` 생성된 AView 객체
<br>

### AView.setViewInItem( aview, item, owner )

뷰를 특정 DOM 요소에 추가하고, 소유자(owner) 정보를 설정

| 매개값 | 설명 |
|--|--|
| aview |추가할 뷰 객체|
| item |삽입할 DOM 요소  |
| owner | 뷰의 소유자 |


## Instance Methods

### bindDocument( doc )

뷰와 특정 문서를 연결하는 메서드

- doc (**ADocument** 객체): 뷰와 연결할 문서
  -   해당 문서를 뷰에 **바인딩**하여, 문서의 변경 사항이 뷰에도 반영될 수 있도록 함.
   -   바인딩된 문서는 getDocument() 메서드를 통해 다시 가져올 수 있음.

```js
let myView = new AView(); 
let myDocument = new ADocument(); 

// 문서를 뷰와 연결 
myView.bindDocument(myDocument);
 
// 바인딩된 문서 가져오기 
console.log(myView.getDocument()); // myDocument 객체 출력
```


### getDocument()

바인딩된 문서를 반환하는 메서드
> bindDocument(doc) 를 사용하여 문서를 바인딩한 후, 해당 문서를 가져오는 용도로 사용 됨.

- **Returns**
	-   **ADocument 객체**: 현재 뷰에 바인딩된 문서를 반환
	-   **null**: 문서가 바인딩되지 않은 경우 null 을 반환

```js
let myView = new AView(); 
let myDocument = new ADocument();

myView.bindDocument(myDocument); 

// 바인딩된 문서 가져오기 
let boundDoc = myView.getDocument(); 
console.log(boundDoc === myDocument); // true
```

### getItem()

뷰가 감싸고 있는 DOM 요소를 반환

 **Returns**
-   **DOM 요소 (HTMLElement)**: 뷰가 감싸고 있는 DOM 요소.
-   **null**: DOM 요소가 없는 경우 null을 반환.


### setQueryData(dataArr, keyArr, queryData)

뷰 내부의 컴포넌트에 데이터를 설정

-   **dataArr** `<Array>`: 뷰 내부 컴포넌트에 적용할 데이터 배열.
-   **keyArr** `<Array>`: 매핑할 데이터의 키 배열.
-   **queryData** `<Object>`: 쿼리 결과 데이터.

> -   내부적으로 **각 컴포넌트에 데이터를 매핑**
> -   keyArr를 사용하여 특정 **컴포넌트에 데이터 적용** 가능
> -   그리드 같은 복합적인 뷰에서도 사용할 수 있음

```js
let myView = new AView(); 

// 더미 데이터 
let dataArr = [{ name: "최성식", age: 29 }, { name: "신은섭", age: 26 }]; 
let keyArr = ["name", "age"]; 
let queryData = { name: "오건희", age: 28 }; 

// 데이터를 뷰에 적용 
myView.setQueryData(dataArr, keyArr, queryData);
```

### getQueryData(dataArr, keyArr, queryData)

뷰 내부의 컴포넌트에서 **queryData** 를 추출하는 메서드

-   **dataArr** `<Array>`: 데이터를 저장할 배열.
-   **keyArr** `<Array>`: 가져올 데이터의 키 배열.
-   **queryData** `<Object>`: 쿼리 결과 데이터.

**Returns** 
-   dataArr 에 **뷰 내부의 컴포넌트 데이터가 저장됨**.

> -   내부적으로 setQueryData와 반대로 동작하며, **뷰에서 데이터를 추출**하여 dataArr에 저장
> -   keyArr를 사용하여 특정 **컴포넌트에서 데이터만 가져올 수 있음**.

```js
let myView = new AView(); 

// 컴포넌트에서 가져올 데이터 배열 
let dataArr = []; 
let keyArr = ["name", "age"]; 
let queryData = {}; 

// 뷰에서 데이터를 가져오기 
myView.getQueryData(dataArr, keyArr, queryData); 

console.log(dataArr); // 뷰 내부 컴포넌트의 데이터가 배열로 저장됨
```



### getMappingCount()

뷰 내에서 매핑할 수 있는 컴포넌트 개수를 반환

-   **Returns**: `<Number>` 매핑 가능한 컴포넌트 개수

```js
const mappingCount = this.view.getMappingCount();
console.log(mappingCount);
```

### getDroppable()

뷰 컴포넌트 내에서 드롭이 가능한지 여부를 반환

-   **Returns**: `<Boolean>` 드롭 가능 여부
    

```js
const isDroppable = this.view.getDroppable();
console.log(isDroppable);
```


### awaitLoadView()

비동기적으로 로드된 뷰 객체를 반환하는 Promise

-   **Returns**: `<Promise<AView>>` 로드된 AView 객체
    

```js
this.view.awaitLoadView().then((loadedView) => {
    console.log("뷰가 로드됨:", loadedView);
});
```


### addComponent( acomp, isPrepend, posComp ) 

뷰 내부에 컴포넌트를 추가

| 매개값 | 설명 |
|--|--|
| acomp | 추가할 컴포넌트 |
| isPrepend |추가 할 위치가 앞인지 여부 `<Boolean>`  |
| posComp | 기준 컴포넌트 |


```js
const button = new AButton();
button.init();
this.view.addComponent(button, false, this.label);
```
<br/>

### disableScrlX() 

가로 스크롤을 비활성화
> enableScrlManagerX를 통해 구현된 경우에만 동작.


<br/>

### eachChild( callback, isReverse ) 

뷰 내부의 컴포넌트를 인자로 하는 콜백함수를 순차적으로 호출

| 매개값 | 설명 |
|--|--|
| callback | 콜백함수 `<Function>` |
| isReverse |호출순서를 역순으로 할지 여부 `<Boolean>`  |

```js
this.view.eachChild(function(comp, index) {
	console.log(comp, index); // 컴포넌트, 순서
	//콜백함수내에서 return false는 each함수를 중단시킨다.
	//for문의 break와 동일한 역할
	return false; 

	//콜백함수내에서 return true는 다음 루프로 이동한다.
	//for문의 continue와 동일한 역할

}, false);
```

<br/>

### enableActiveFocus( enable ) 

뷰가 활성화될 때 포커스를 설정할지 여부를 설정

- **enable**  포커스 여부 `<Boolean>`

<br/>

### enableScrlManagerX() 
터치 이벤트를 핸들링하여 자체적으로 구현한 **가로 스크롤** 기능을 활성화
> 내부적으로 ScrollManager 가 사용 됨.

```js
const scrlManagerX = this.view.enableScrlManagerX();
scrlManagerX.enableScroll(true);
```


### enableScrlManagerY() 

터치 이벤트를 핸들링하여 자체적으로 구현한 **세로 스크롤** 기능을 활성화

> 내부적으로 ScrollManager 가 사용 됨.

```js
const scrlManagerY = this.view.enableScrlManagerY();
scrlManagerY.enableScroll(true);
```

### enableScrlX() 

가로 스크롤을 활성화

> enableScrlManagerX를 통해 구현된 경우에만 동작.



### findCompByBase( baseName ) 

베이스명이 일치하는 뷰 내부의 컴포넌트를 배열로 반환

> 여기서 베이스명은 컴포넌트가 확장되기 이전의 클래스명을 뜻.



- **baseName** `<String>` 컴포넌트 베이스명
- **Returns** `<Array>`

```js
const compArr = this.view.findCompByBase('ALabel');
//컴포넌트가 배열로 리턴된다.
console.log(compArr); 
---------------------------
[...]
```


### findCompByClass( className ) 

클래스명이 일치하는 뷰 내부의 컴포넌트를 배열로 반환

- **className** `<String>` 컴포넌트 클래스명
- **Returns** `<Array>`

```js
const compArr = this.view.findCompByClass('ALabel');
//컴포넌트가 배열로 리턴된다.
console.log(compArr);
---------------------------
[...] 
```


### findCompByGroup( strGroup ) 

그룹명이 일치하는 뷰 내부의 컴포넌트 그룹을 배열로 반환

- **strGroup** `<String>` 컴포넌트 그룹명
- **Returns** `<Array>`

```js
const compArr = this.view.findCompByGroup('header');
//컴포넌트가 배열로 리턴된다.  ex) [ AButton, ALabel ... ]
console.log(compArr); 
---------------------------
[...] 
```

<br/>

### findCompById( strId ) 

아이디가 일치하는 뷰 내부의 컴포넌트를 반환

- **strId** `<String>` 컴포넌트 아이디
- **Returns** `<AComponent>`
```js
//아이디가 label1인 컴포넌트를 리턴받아서 사용하는 예제
const comp = this.view.findCompById('label1');
comp.setText('제목');
```

<br/>

### findCompByName( name ) 

name 속성이 일치하는 뷰 내부의 컴포넌트를 배열로 반환

- **name** `<String>` 컴포넌트 name 속성
- **Returns** `<Array>`

```js
const compArr = this.view.findCompByName('name1');
//컴포넌트의 네임속성이 name1인 컴포넌트가 배열로 리턴된다.
console.log(compArr); 
```
<br/>

### findCompByText( text ) 

텍스트가 일치하는 뷰 내부의 컴포넌트를 배열로 반환

- **text** `<String>` 컴포넌트 텍스트
- **Returns** `<Array>`

```js
const compArr = this.view.findCompByText('제목');
//텍스트가 제목인 컴포넌트를 배열로 리턴된다.
console.log(compArr); 
```
<br/>

<br/>

### getChild( index ) 

뷰 내부의 index 번째 컴포넌트를 반환

- **index** `<Number>` 인덱스 넘버
- **Returns** `<AComponent>`

<br/>

### getChildCount() 

뷰 내부의 컴포넌트의 갯수를 반환

- **Returns** `<Number>`

<br/>

### getChildren() 

뷰 내부의 컴포넌트들을 배열로 반환

- **Returns** `<Array>`

<br/>

### getCntrData() 

뷰 컴포넌트의 컨테이너의 데이터를 반환

- **Returns** `<All>` 저장된 데이터

<br/>

### getFirstChild() 

뷰 내부의 첫번째 컴포넌트를 반환

- **Returns** `<AComponent>`

<br/>

### getItemData() 

슬라이드뷰나 리스트뷰에 로드되어진 경우 선택시 넘겨준 데이터를 반환

- **Returns** `<All>` 저장된 데이터

```js
//슬라이드뷰나 리스트뷰에서 서브아이템 SampleSubView에서
//getItemData를 통해 데이터를 전달받을수있다.
class SampleSubView extends AView;
{
	onInitDone()
	{
		const tabData = this.getItemData();
	};
}
```

<br/>

### getLastChild() 

뷰 내부의 마지막 컴포넌트를 반환

- **Returns** `<AComponent>`

<br/>

### getLoadCntr() 

loadContaine 메소드로 불러온 컨테이너를 반환

- **Returns** `<AContainer>`

<br/>

### getLoadView() 

동적 로드된 뷰를 반환

- **Returns** `<AView>`

```js
const innerView = this.view.getLoadView();
```

<br/>

### getTabData() 

탭뷰에 로드되어진 경우 선택시 넘겨준 데이터를 반환

- **Returns** `<ALL>` 저장된 데이터

```js
//탭뷰에서 아래의 SampleSubView가 선택됐을경우에
//해당 뷰에서 getTabData를 통해 데이터를 전달받을수있다.
class SampleSubView extends AView
{
	//선택될때 마다 데이터가 바뀐다면
	//onActive에서 호출해야함.
	onActive()
	{
		super.onActive();
		const tabData = this.getTabData();
		...
	};
}
```

### getOwnerData()

뷰의 소유자로부터 데이터를 가져옴

-   **Returns**: `<Object | null>` 데이터 객체 또는 null
    

```js
const data = this.view.getOwnerData();
if (data) {
    console.log("소유자로부터 데이터를 가져왔습니다:", data);
}
```
> -   AListView 안에 있을 경우 getItemData() 를 호출함.
>     
> -   ATabView 안에 있을 경우 getTabData() 를 호출함.
>     
> -   일반 컨테이너 안에 있을 경우 getCntrData() 를 호출함.
>


### getUrl() 

뷰의 url을 반환

- **Returns** `<String>`



### inlineChildren() 

뷰 내부의 컴포넌트들을 인라인 스타일로 변경

<br/>

### isHscroll() 

현재 가로 스크롤이 가능한 상태인지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isMoreScrollBottom() 

하단으로 추가적인 스크롤이 가능한지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isMoreScrollLeft() 

좌측으로 추가적인 스크롤이 가능한지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isMoreScrollRight() 

우측으로 추가적인 스크롤이 가능한지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isMoreScrollTop() 

상단으로 추가적인 스크롤이 가능한지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isScroll() 

현재 스크롤이 가능한 상태인지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### isVscroll() 

현재 세로 스크롤이 가능한 상태인지 여부를 반환

- **Returns** `<Boolean>`

<br/>

### loadContainer( viewUrl, cntrId, cntrClass ) 

뷰 안에 컨테이너를 설정

| 매개값 | 데이터 타입 | 설명|
|--|--|--|
|viewUrl  | `<String>` |컨테이너안에 설정할 url 경로 |
|cntrId| `<String>` |컨테이너 id |
|cntrClass| `<String>` |컨테이너 클래스 (null 일 경우 APanel) |

- **Returns** `<AContainer>`

```js
this.view.loadContainer('Source/t1.lay', 'contId');
```

### loadView( url ) 

뷰 내부에 매개변수 url로 뷰를 동적으로 로드

- **url** `<String>` 파일경로

- **Returns** `<AView>`
```js
//로드된 뷰가 리턴된다.
const innerView = this.view.loadView('Source/t1.lay');
```

<br/>

### removeChildren( onlyRelease ) 

뷰 내부의 컴포넌트를 모두 삭제

> onlyRelease 가 true일 경우 실제로 컴포넌트를 제거하지 않고 연관된 자원만 해제.

```js
this.view.removeChildren();
```

<br/>

### removeComponent( acomp ) 

뷰에서 컴포넌트를 제거

- **acomp** `<AComponent>` 제거하고자 하는 컴포넌트 객체

```js
//this.label1이 참조하는 컴포넌트를 뷰에서 제거한다.
this.view.removeComponent(this.label1);
```

<br/>

### removeFromView( onlyRelease ) 

부모뷰로부터 자신을 제거

- onlyRelease : true일 경우 실제로 컴포넌트를 제거하지 않고 연관된 자원만 해제.

<br/>

### removeLoadView() 

뷰 내부에 동적 로드된 뷰를 제거

<br/>

### scrollOffset( offset ) 

뷰를 현 위치에서 offset 만큼 스크롤

- **offset** `<Number>` 스크롤 시킬 거리


```js
//현재 위치에서 50을 더한다.
this.view.scrollOffset(50);
```

<br/>

### scrollTo( pos ) 

뷰를 pos의 위치로 스크롤

- pos `<Number>` 이동 시킬 위치

<br/>

### scrollToBottom() 

뷰를 최하단의 위치로 스크롤

<br/>

### scrollToCenter() 

뷰를 중앙의 위치로 스크롤

<br/>

### scrollToTop() 

뷰를 최상단의 위치로 스크롤

<br/>

### setCntrData(data) 

뷰 컴포넌트의 컨테이너에 데이터를 세팅

- **data** `<All>` 저장할 데이터

<br/>

### setHtml( html ) 

뷰 객체 내부에 매개변수 html 을 설정

- **html** `<String>` 태그 문자열

```js
const html = '<span>최성식</span>';
this.view.setHtml(html);
```

<br/>

### setScrollArrowX() 

뷰에 가로 ScrollArrow을 설정

<br/>

### setScrollArrowY() 

뷰에 세로 ScrollArrow을 설정

<br/>

### setScrollXComp( acomp ) 

뷰의 가로 스크롤이 움직인 만큼 같이 움직일 컴포넌트를 설정

> enableScrlManagerX 를 통해 구현한 경우에만 동작.

- **acomp** `<AComponent>` 컴포넌트
```js
this.view.setScrollXComp(this.label);
```

<br/>

### setItemData(data) 

슬라이드뷰나 리스트뷰에 로드 될 떄 데이터를 세팅

- **data** `<All>` 저장할 데이터

<br/>

### setTabData(data) 

탭뷰에 로드 될 때 데이터를 세팅 

- **data** `<All>` 저장할 데이터

<br/>

### shrinkChildren( radio ) 

뷰 내부에 있는 컴포넌트들의 높이, 폰트값을 매개변수 ratio 만큼 확대 / 축소

- **radio** `<Float>` 배율 (0~1)

<br/>

### setWidth(w) 

컴포넌트의 넓이를 지정

- **w** `<String>` or `<Number>` 컴포넌트 넓이 값

```js
this.view.setWidth(10);
this.view.setWidth('10px');
this.view.setWidth('100%');
```

<br/>

### setHeight(h) 

컴포넌트의 높이를 지정

- **h** `<String>` or  `<Number>` 컴포넌트 높이 값

```js
this.view.setHeight(10);
this.view.setHeight('10px');
this.view.setHeight('100%');
```

<br/>

### updatePosition( pWidth, pHeight ) 

뷰 컴포넌트의 위치나 사이즈가 갱신되어져야 할 경우 호출
> 일반적으로 브라우저의 사이즈가 변경되면 자동으로 뷰 컴포넌트와 모든 하위 컴포넌트의 updatePosition 함수가 자동으로 호출. 


- **pWidth** `<Number>` 부모뷰의 넓이
- **pHeight** `<Number>` 부모뷰의 높이

```js
class SampleView extends AView
{
	//부모뷰의 사이즈가 변경됨에 따라 추가로 처리해야 할 사항이 있을 경우, 
	//이 함수를 override 하여 처리해 준다.
	updatePosition(pWidth, pHeight)
	{
	    super.updatePosition(pWidth, pHeight)
	    console.log(pWidth + ', ' + pHeight)

		//TODO:edit here
		...
	}
}



```

```js
//view1 또는 view1의 하위 컴포넌트의 위치값이나 크기 조정 후에
//refresh 목적으로 다음과 같이 직접 호출해도 된다.
this.view1.updatePosition();
```