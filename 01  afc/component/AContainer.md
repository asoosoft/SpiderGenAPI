# AContainer( containerId )

최상위 추상 컨데이너<br>

**AContainer 클래스**는 다양한 기능과 이벤트를 통해 UI를 유연하게 구성하고 관리할 수 있도록 도움<br>
이를 통해 개발자는 복잡한 사용자 인터페이스를 효율적으로 구현 가능

비유하자면 **[AView](https://wikidocs.net/275135)** 는 그림이고 **AContainer** 는 그림을 감싸고 있는 액자라고 할 수 있음

- **containerId** `<String>`<br>
 컨테이너를 구분 짓는 고유 아이디<br> 

	컨테이너 아이디는 중복될 수 없으며 열려 있는 컨테이너를 찾거나 구별하는 경우에 사용

<br>

## Class Variables

### openContainers `<Object>`
현재 응용프로그램에서 열려 있는 모든 컨테이너를 저장하는 객체<br>

이 변수는 [findOpenContainer 함수](#acontainer.findopencontainer-cntrid-)를 통해 특정 컨테이너를 찾는 데 사용

---

### disableIosScroll `<Boolean>`

iOS 웹 환경에서 터치 드래그 바운스 효과를 방지하기 위한 설정 변수<br> 

기본값은 false이며, true로 설정하면 iOS에서 스크롤이 비활성화
```js
AContainer.disableIosScroll = true;
```
---

### **disableCount** `<Number>`

같은 컨테이너가 여러 윈도우에 의해 비활성화될 수 있기 때문에, **AContainer**에서 레퍼런스 카운팅을 관리하는 변수

```js
let container = new AContainer();

// 비활성화
container.disable(); // 비활성화 카운트 증가
container.disable(); // 비활성화 카운트 증가

console.log(container.disableCount); // 2

// 활성화
container.enable(); // 비활성화 카운트 감소
container.enable(); // 비활성화 카운트 감소

console.log(container.disableCount); // 0
```
---

### **wndList** `<Array>`

**AContainer** 내부에 열려 있는 윈도우 객체들을 관리하는 배열

addWindow(awnd)와 removeWindow(awnd) 메서드를 통해 윈도우 객체를 추가하거나 제거 가능

```js
// 새로운 AWindow 객체 생성 (가상의 AWindow 클래스)
let window1 = new AWindow();
let window2 = new AWindow();

let container = new AContainer();

// 윈도우 추가
container.addWindow(window1); // 윈도우1 추가
container.addWindow(window2); // 윈도우2 추가

// 윈도우 목록 출력
console.log(container.wndList); // [window1, window2]

// 윈도우 제거
container.removeWindow(window1); // 윈도우1 제거

// 윈도우 목록 출력
console.log(container.wndList); // [window2]
```
---

### **option** `<Object>`

컨테이너의 다양한 옵션을 설정하는 객체

기본적으로는 isAsync, inParent, isTitleBar, focusOnInit, noAutoScale 등의 속성이 포함

setOption()을 통해 값을 설정하고, noOverwrite 옵션을 사용하여 기존 값의 덮어쓰기를 방지 가능

> **setOption()**  참고

#### 👉 option 속성 설명

- **isAsync** `<Boolean>` : 기본값  true <br>

	이 옵션은 **컨테이너의 뷰 로딩 방식**이 비동기식인지 동기식인지를 설정
	
	isAsync가 true로 설정되면, **뷰 로딩을 비동기적으로 처리**하여 UI가 즉시 표시되도록 가능
```js
container.setOption({ isAsync: false }); 
// 동기 로딩
```

---

- **inParent** `<Boolean>` : 기본값 true (부모 컨테이너에 자동 추가) <br>

	이 옵션은 **컨테이너가 부모 컨테이너에 추가**될 때, 기본적으로 해당 컨테이너가 부모의 **element**에 포함될지 여부를 결정 
	
	inParent가 true로 설정되면 **부모 컨테이너의 element에 자동으로 추가**
	
```js
container.setOption({ inParent: false }); 
// 부모에 자동 추가하지 않음
```

---

- **isTitleBar** `<Boolean>` : 기본값 false (타이틀 바 미사용) <br>

	이 옵션은 **타이틀 바**를 사용할지 여부를 설정
	 
	isTitleBar가 true로 설정되면, 컨테이너는 **타이틀 바를 포함**하여, 제목 또는 메뉴를 표시하는 영역을 생성
	
```js
container.setOption({ isTitleBar: true }); 
// 타이틀 바 활성화
```

---

- **focusOnInit** `<Boolean>` : 기본값 true (초기화 시 포커스 설정) <br>

	이 옵션은 **컨테이너가 초기화될 때 자동으로 포커스를 설정**할지 여부를 결정
	
	focusOnInit가 true로 설정되면, **컨테이너 초기화 시** 지정된 입력 요소나 컴포넌트에 **자동으로 포커스**가 설정
	
```js
container.setOption({ focusOnInit: false }); 
// 초기화 시 포커스 설정 안 함
```

---

- **noAutoScale** `<Boolean>` : 기본값 false (자동 크기 조정 활성화) <br>

	이 옵션은 **컨테이너의 자동 크기 조정 기능**을 비활성화할지 여부를 결정
	
	noAutoScale이 true로 설정되면, 컨테이너 내에서 **자동 크기 조정이 이루어지지 않으며**, **수동으로 크기를 조정** 가능
```js
container.setOption({ noAutoScale: true }); 
// 자동 크기 조정 비활성화
```

---
<br>

## Instance Variables

### element `<HTMLElement>`
컨테이너를 구성하고 있는 HTMLElement 객체<br>
이 객체를 통해 컨테이너의 스타일이나 속성을 직접 조작 가능
```js
//순수 자바스크립트와 같이 다음 코드가 동작한다.
this.element.style.color = 'blue';
```
---

### $ele `<jQuery>`
this.element 의 jQuery 객체<br>
jQuery 메서드를 사용하여 컨테이너의 스타일이나 속성을 쉽게 조작 가능
```js
//jQyery 와 같이 다음 코드가 동작한다.
this.$ele.css('color', 'blue');
```
---

### option `<Object>`
컨테이너의 옵션 정보를 담고 있는 객체<br>
기본적으로 isAsync와 inParent 옵션이 포함

```js

    기본값은 다음과 같다.
    this.option = 
    {
	    isAsync: true,
	    inParent: true
    }

```
---

### parent `<AContainer>`
자신을 오픈한 부모 컨테이너 객체<br>
 AContainer 의 open 함수 호출 시 지정 가능<br>
 
 컨테이너의 계층 구조를 관리하는 데 사용

---

### view `<AView>`
컨테이너가 감싸고 있는 AView 객체<br>
AView는 화면을 구성하는 컴포넌트를 담고 있으며, <br>
컨테이너는 이를 감싸는 프레임 역할

---
<br>

## Class Methods

### findOpenContainer( cntrId )

주어진 컨테이너 아이디로 현재 열려 있는 컨테이너 객체를 반환<br>

이 메서드는 특정 컨테이너를 찾거나 구별하는 데 유용

- **cntrId**: `<String>` 컨테이너 아이디 

- **Returns** `<AContainer>`
```js
let cntr = AContainer.findOpenContainer('MenuWnd');
//`cntr`는 `AContainer`의 인스턴스이다.
//ex) AWindow, AFrameWnd, ADialog ...
cntr.show();
```

---

### getDefaultParent( self )

주어진 컨테이너(self)에 대한 기본 부모 컨테이너를 반환 <br>

open() 함수에서 parent가 지정되지 않았을 경우 자동으로 적절한 부모 컨테이너를 찾아 설정하는 역할

- **self**: `<Object>` 기본 부모 컨테이너를 찾고자 하는 객체

- **Returns** `<AContainer>`
```js
let defaultParent = AContainer.getDefaultParent(this);

console.log(defaultParent); 
// ex) rootContainer, mainContainer 등
```

---
<br>

## Instance Methods

### appendSplit( splitSize, panelClass )

컨테이너에 새로운 분할 영역을 맨 뒤에 추가<br>

분할 영역의 크기와 클래스 이름을 지정 가능

AContainer 분할에 대한 자세한 설명은 [createSplit](#createsplit-count-sizearr-splitdir-barsize-panelclass-) 함수 참조

- **splitSize**: `<Number>` 분할할 사이즈를 지정<br>
	  - 생략하거나 -1 지정시 자동으로 계산하여 영역 할당<br>
	  - 소수점 입력 시 비율만큼 할당 

- **panelClass**: `<String>` 추가할 APanel 클래스 이름

	> 생략시 기본값은 "APanel"

- **Returns** `<APanel>` 새로 추가된 패널 객체

```js
function MainView*onSplitBtnClick(acomp, info, evt)
{
	let cntr = this.getContainer();

    //현재 MainView를 감싸고 있는 컨테이너 영역을 분할하여 
    //250 픽셀의 새로운 컨테이너(패널)를 맨 뒤에 추가한다.
    let newCntr = cntr.appendSplit(250);

	...
};
```
---

### close( result, data )

컨테이너를 닫고, 결과값과 데이터를 콜백 함수에 전달

- **result**: `<Number>` resultCallback 함수에 전달할 결과값

- **data**: `<Object>` resultCallback 함수에 전달할 데이터 객체

```js
//another lay file ...
let wnd = new AWindow();
wnd.open('Source/MyTestView.lay', ... );
wnd.setResultCallback(function(result, data)
{
    console.log(result);    //-1
    console.log(data);      //{ value: 'test' }
});


//Source/MyTestView.lay 파일
function MyTestView*onCloseBtnClick(acomp, info, evt)
{
    ...

    this.getContainer().close(-1, { value: 'test' });

};
```

---

### createSplit( count, sizeArr, splitDir, barSize, panelClass )

컨테이너를 지정한 개수만큼 분할하고, <br>
각 영역에 새로운 컨테이너를 생성 <br>

분할 방향과 크기를 설정 가능

생성된 컨테이너들 끼리의 영역은 스플릿바를 통해 리사이즈 가능<br>

> 컨테이너 open 함수 호출 시 url 을 지정하지 않으면 빈 컨테이너가 생성<br>
>
>차후 [setView](#setview-url-isfull-asynccallback-) 함수로 AView를 로드할 수 있음

- **count**: `<Number>` 분할할 컨테이너 갯수 

- **sizeArr**: `<Array>` 분할할 각 컨테이너의 사이즈 배열
    - 배열의 각 요소는 **숫자로만** 지정 가능

		> [ 100, 200, 10 ]
    
    - **-1 지정**시 **자동**으로 남은 영역 할당 

		> [ 200, -1, 200 ]
    
    - **소수점 입력 시 비율**로 분할 

		> [ 0.2, 0.6, 0.2 ]
    
    - sizeArr 을 지정하지 않으면(또는 null) 분할 영역 전체를 자동 균등 분할 
    
    - sizeArr 자체를 배열이 아닌 -1 로 지정하면 분할 영역을 조정할 수 없는 static 상태가 되고, 내부에 로드된 View의 사이즈 만큼 컨테이너의 사이즈가 자동으로 조정되는 auto 사이즈 상태가 됨
  
- **splitDir**: `<String>` 컨테이너 분할 방향 

	> row : 가로방향, column : 세로방향
	
- **barSize**: `<Number>` 사이즈 조정 BarSize

	> 생략시 기본값은 5px


- **panelClass**: `<String>` 새롭게 생성할 APanel 클래스 이름
    > 생략시 기본값은 "APanel"
    
    - 생략하지 않고 명시적으로 '' 을 셋팅하면 컨테이너를 생성하지 않음 <br>
 이 경우 차후 **setSplitPanel** 함수를 호출하여 셋팅 가능
 
 
- **Returns** `<Array>` 뷰가 로드되어 있지 않은 빈 컨테이너 배열

```js
function TestWindow*onCreate()
{
	super.onCreate();

    //세로 방향으로 3분할, 상단 20px, 하단 20px, 중단 -1 은 남은 영역을 차지함
    let hCntrs = this.createSplit(3, [20, -1, 20], 'column');
    hCntrs[0].setView('Source/TopView.lay');
    hCntrs[2].setView('Source/BottomView.lay');

    //분할된 컨테이너 중에서 중단(2번째) 컨테이너를 다시 가로 방향으로 3분할
    let vCntrs = hCntrs[1].createSplit(3, [200, -1, 200], 'row');

    //다음과 같이 분할됨
    -----------------
    -----------------
    |   |       |   |
    |   |       |   |
    |   |       |   |
    |   |       |   |
    -----------------
    -----------------
};
```
---

### destroySplit()

분할된 모든 컨테이너를 삭제하고, 초기 상태로 되돌림 <br>
> createSplit 이전 상태로 돌린다.

---

### enable( isEnable )

컨테이너와 내부의 모든 컴포넌트를 활성화 또는 비활성화<br>

- **isEnable**: `<Boolean>` 활성화 여부

---

### enableChildren( isEnable )

컨테이너 내부의 모든 input, textarea, button 등의 요소를 활성화 또는 비활성화

- **isEnable**: `<Boolean>` 활성화 여부

```js 
cntr.enableChildren(false); // 내부 요소 비활성화
```
---

### getClassName()

컨테이너 객체의 클래스 이름을 반환

- **Returns** `<String>`

```js
let cntr1 = new ADialog();  //AContainer > AWindow > AFrameWnd > ADialog
let cntr2 = new APanel();   //AContainer > APanel

console.log(cntr1.getClassName());  //"ADialog"
console.log(cntr2.getClassName());  //"APanel"
```
---

### getContainerId()

컨테이너의 고유 아이디를 반환 <br>
>컨테이너 아이디는 중복될 수 없으며 열려 있는 컨테이너를 찾거나 구별하는 경우에 사용

- **Returns** `<String>`

---

### getData()

컨테이너에 설정된 데이터를 반환
>[setData](#setdata-data-) 를 통해 셋팅한 데이터 값을 리턴

- **Returns** `<All>`

---

### getHeight()

컨테이너의 높이를 반환

- **Returns** `<Number>`

---

### getParent()

컨테이너의 부모 객체를 반환
>AContainer 의 [open](#open-url-parent-left-top-width-height-) 함수 호출 시 지정한 부모 컨테이너 객체를 리턴

- **Returns** `<AContatiner>`

---

### getPos()

컨테이너의 위치 정보를 반환

- **Returns** `<Obejct>`

	>  { left: 100, top: 100 }
```js
// if wnd is a instance of AWindow

let pos = wnd.getPos();

console.log(pos.left + ', ' + pos.top);
```

---

### getSplitCount()

분할된 영역의 개수를 반환

- **Returns** `<Number\>`

---

### getSplitPanel( inx )

특정 인덱스의 분할 영역에 해당하는 패널을 반환<br> 

>분할에 대한 자세한 설명은 
[createSplit](#createsplit-count-sizearr-splitdir-barsize-panelclass-) 함수 참조

- **inx**: `<Number>` 분할된 영역의 index

- **Returns** `<APanel>`

```js
let panel = cntr.getSplitPanel(2);  //3번째 분할된 영역의 패널 리턴
```

---

### getView()

컨테이너가 감싸고 있는 AView 객체를 반환<br>

- **Returns** `<AView>`

---

### getWidth()

컨테이너의 넓이를 반환

- **Returns** `<Number>`

---

### getStyle( key )

특정 CSS 속성 값을 반환

-   **key**:  `<String>` CSS 속성 이름
-   **Returns** `<String>`

```js
let color = cntr.getStyle('background-color');
console.log(color); // ex) 'red'
```


---

### hide()

컨테이너를 숨김

---

### indexOfPanel( panel )

특정 패널의 인덱스를 반환

- **panel**: `<APanel>` 인덱스를 얻고자 하는 패널 객체

- **Returns** `<Number>`

```js
function TestView*onInitDone()
{
	super.onInitDone();

    let cntr = this.getContainer();
    let panels = cntr.createSplit(3, [100,-1,100]); //return APanel Array

    let inx = cntr.indexOfPanel(panels[1]);

    console.log(inx);   // inx is 1
};
```
---

### insertSplit( inx, splitSize, isAfter, panelClass )

특정 인덱스 위치에 새로운 분할 영역을 삽입<br>
 >AContainer 분할에 대한 자세한 설명은 [createSplit](#createsplit-count-sizearr-splitdir-barsize-panelclass-) 함수 참조

- **inx**: `<Number>` 분할해서 추가할 컨테이너 위치

- **splitSize**: `<Number>` 분할할 사이즈를 지정
    - 생략하거나 -1 지정시 자동으로 계산하여 영역 할당
    - 소수점 입력 시 비율만큼 할당 

- **isAfter**: `<Boolean>` inx 뒤로 추가할지 여부

- **panelClass**: `<String>` 추가할 APanel 클래스 이름

	> 생략시 기본값은 "APanel"

- **Returns** `<APanel>` 새로 추가된 패널 객체

```js
function MainView*onSplitBtnClick(acomp, info, evt)
{
	let cntr = this.getContainer();

    // 현재 MainView를 감싸고 있는 컨테이너 영역을 분할하여 
    // 200 픽셀의 새로운 컨테이너(패널)를 두번째 패널 뒤에 추가한다.
    let newCntr = cntr.insertSplit(1, 200, true);

	...
};
```
---

### isOpen()

컨테이너가 열려 있는지를 반환<br>
>open 함수가 호출되었는지 여부

- **Returns** `<Boolean>`

---

### isShow()

컨테이너가 화면에 표시되고 있는지를 반환

- **Returns** `<Boolean>`

---

### isValid()

컨테이너의 유효성을 반환<br>
>아직 open 이 호출되지 않았거나 open 후에 close 가 호출 되었으면 isValid 는 false(유효하지 않은 상황)

- **Returns** `<Boolean>`

---

### open( url, parent, left, top, width, height )

컨테이너를 열고, 지정된 URL의 뷰를 로드 <br>

> url 정보가 셋팅되어져 있으면 view 객체를 생성하고 자신의 공간으로 로드

- **url**: `<String>` 뷰 객체를 로드할 lay 파일의 경로

- **parent**: `<AContainer>` 자신의 부모가 될 컨테이너 지정, <br>**null** 인 경우 기본적으로 **mainContainer**가 되고<br> 설정되어 있지 않으면  **rootContainer** 순서로 부모가 됨

- **left**: `<String | Number>` 컨테이너의 X 위치 

	> ex ) 10, '10px', '5%`

- **top**: `<String | Number>` 컨테이너의 Y 위치

- **width**: `<String | Number>` 컨테이너의 넓이

	> 생략하면 lay 파일의 뷰 넓이로 셋팅

- **height**: `<String | Number>` 컨테이너의 높이

	> 생략하면 lay 파일의 뷰 높이로 셋팅

```js
let page = new APage('myPage');
page.open('Source/Views/TestView.lay', null);

// AContainer 는 추상 클래스이므로 일반적으로 AContainer 를 상속 받은 
// 클래스에서 open 함수를 오버라이드 하여 자신만의 파라미터를 구성하고 함수
// 내부에서 AContainer 의 open 함수를 호출하는 방식으로 사용된다.

//다음은 APage 클래스의 open 함수이다.
APage.prototype.open = function(viewUrl, parent)
{
	AContainer.prototype.open.call(this, viewUrl, parent, 0, 0, '100%', '100%');
};
```
---

### prependSplit( splitSize, panelClass )

새로운 분할 영역을 맨 앞에 추가<br>
>AContainer 분할에 대한 자세한 설명은 [createSplit](#createsplit-count-sizearr-splitdir-barsize-panelclass-) 함수 참조

- **splitSize**: `<Number>` 분할할 사이즈를 지정
    - 생략하거나 -1 지정시 자동으로 계산하여 영역 할당
    - 소수점 입력 시 비율만큼 할당 

- **panelClass**: `<String>` 추가할 APanel 클래스 이름

	> 생략시 기본값은 "APanel"

- **Returns** `<APanel>` 새로 추가된 패널 객체

```js
function MainView*onSplitBtnClick(acomp, info, evt)
{
	let cntr = this.getContainer();

    //현재 MainView를 감싸고 있는 컨테이너 영역을 분할하여 
    //250 픽셀의 새로운 컨테이너(패널)를 맨 앞에 추가한다.
    let newCntr = cntr.prependSplit(250);

	...
};
```
---

### removeSplit( inx )

특정 인덱스의 분할 영역을 삭제

- **inx**: `<Number>` 삭제하고자 하는 컨테이너의 인덱스

---

### setActiveRecursive( isRecursive )

컨테이너의 활성화/비활성화 이벤트를 자식 뷰들에게도 재귀적으로 전달할지 여부를 설정<br>

>이 값은  컨테이너 단위로 작동

- **isRecursive**: `<Boolean>` 자식 뷰들에게 active / deactive 이벤트를 전달할 지 여부

```js
let wnd = new AWindow();

wnd.setActiveRecursive(true);
wnd.open(...);
...
```
---

### setContainerId( containerId )

컨테이너의 고유 아이디를 설정<br>

>컨테이너 아이디는 중복될 수 없으며 열려 있는 컨테이너를 찾거나 구별하는 경우에 사용

- **containerId**: `<String>` 컨테이너 고유 아이디

---

### setData( data )

컨테이너에 데이터를 설정<br>

>이 값은 향후 컨테이너가 오픈된 후 참조하기 위해 주로 사용

- **data**: `<All>`
```js
let wnd = new AWindow();
wnd.setData({id:'test', value:100});
wnd.open('Source/TestView.lay', ...);

//컨테이너가 오픈되고 view 가 초기화 되고 난 후에...
function TestView*onInitDone()
{
    super.onInitDone();

    let data = this.getContainer().getData();

    console.log(data);
    //--------------------------
    // {id:'test', value:100}
};
```

---

### setHeight( height )

컨테이너의 높이를 설정

- **height**: `<String | Number>` 높이 값<br>
 
  >  ex ) 100, '100px', '100%`

---

### setParent( newParent, styleObj )

컨테이너의 부모를 새롭게 설정<br>

>컨테이너의 inParent 옵션이 true 로 셋팅되어져 있으면 부모가 바뀔 때,<br> 자신이 포함되어 있던 영역도 새로운 부모의 하위 공간으로 바꿈 

- **newParent**: `<AContainer>` 새로 설정 할 부모 컨테이너

- **styleObj**: `<Object>` 부모가 바뀌면서 설정할 스타일<br> 

	> ex ) { left:'0px', top:'0px' }


- **Returns** `<AContainer>` 기존에 셋팅되어 있던 parent

```js
let oldParent = cntr.setParent(theApp.getMainContainer(), {left:'0px', top:'0px'});
```

---

### setPos( pos )

컨테이너의 위치를 설정

- **pos**: `<Object>` 컨테이너 위치 정보

	> { left:10, top:20 }

  - **left** `<Number>`
  - **top** `<Number>`

---

### setView( url, isFull, asyncCallback )

컨테이너 내부에 뷰를 설정<br>

>일반적으로 open 함수 호출 시, url 값을 넣어주면 open 함수 내부에서 이 함수를 호출 <br>
>
>open 에 url 을 넣지 않은 경우 차후 별도로 setView 를 호출

<br>

- **url**: `<String | AView>` AView 객체를 로드할 lay 파일의 경로 **또는** 컨테이너 내부에 셋팅할 AView 객체

- **isFull**: `<Boolean>` 뷰가 생성되면서 컨테이너 내부를 가득 채울지 여부

- **asyncCallback**: `<Boolean | Function>` lay 파일을 비동기로 로드할 지 여부<br>
파라미터 타입이 Function이면 로드완료 후 콜백 함수를 호출<br>

	> url 파라미터가 파일의 경로일 경우만 유효

```js
let wnd = new AWindow();
wnd.open(null, null, 0, 0, 300, 300);

wnd.setView('Source/Views/TestView.lay', true, function(aview)
{
    //로드가 완료된 뷰 객체가 넘어온다.
    console.log(aview);
});
```
---

### awaitView()

현재 컨테이너에 뷰가 로드될 때까지 대기하는 함수 <br>
await 키워드를 사용하여 비동기적으로 호출 가능


- **Returns** `<Promise>` 뷰가 로드되면 resolve됨

```js 
async function loadView() { 
	let cntr = new AContainer(); 
	await cntr.awaitView(); 
	console.log('뷰 로드 완료'); 
}
```
---

### deleteView() 

현재 컨테이너 내부의 **view**를 제거<br>
기존 뷰가 있을 경우 문서를 닫고 제거한 후 **this.view = null**로 설정

```js 
let cntr = new AContainer(); 
cntr.deleteView(); // 기존 뷰 제거
```

---

### setWidth( width )

컨테이너의 넓이를 설정

- **width**: `<String | Number>` 높이 값<br>

	> ex ) 100, '100px', '100%'

---

### setStyle( key, value, priority )


- **key**: `<String>` CSS 속성 이름 
- **value**: `<String>` 적용할 값 
- **priority**: `<String>` (선택 사항) 'important'을 설정하면 해당 스타일이 강제 적용

```js 
cntr.setStyle('background-color', 'red', 'important');
 ```

---

### show()

숨겨진 컨테이너를 표시<br>
>AWindow 계열의 컨테이너인 경우는 앞으로 활성화

---

### toString()

컨테이너의 정보를 문자열로 반환

- **Returns** `<String>`

---

### setOption(option, noOverwrite)

컨테이너의 옵션을 설정 <br>

**this.option** 에 값을 셋팅해 주는 역할을 하며, <br>
option 의 세부 내용은 각 컨테이너 마다 다름

- **option**: `<Object>` 설정 값
	> AContainer.option의 속성 설명을 참조

- **noOverwrite**: `<Boolean>` true 이면, 기존의 값이 존재할 경우 덮어쓰지 않음
```js
let container = new AContainer();

// 여러 옵션을 설정
container.setOption({
  isAsync: false,
  inParent: true,
  isTitleBar: true,
  focusOnInit: true,
  noAutoScale: false
});

// 덮어쓰기 방지
container.setOption({
  isAsync: true
}, true); // 기존 값 덮어쓰지 않음
```

---

### onActive( isFirst )

컨테이너의 활성화가 시작될 때 호출

- **isFirst**: `<Boolean>` 컨테이너가 초기화 되고 최초로 호출되었는지 여부

---

### onActiveDone( isFirst )

컨테이너의 활성화가 완료될 때 호출

- **isFirst**: `<Boolean>` 컨테이너가 초기화 되고 최초로 호출되었는지 여부

---

### onBackKey()

브라우저 또는 모바일 기기의 Back Key가 눌렸을 때 호출

---

### onCreate()

컨테이너가 생성될 때 호출

---

### onCreateDone()

컨테이너 생성이 완료되면 호출

---

### onDeactive()

컨테이너의 비활성화가 시작될 때 호출

---

### onDeactiveDone()

컨테이너의 비활성화가 완료될 때 호출

---

### onResize()

컨테이너의 크기가 변경될 때 호출

---

### onSplitChanged( splitItem )

분할 영역의 크기가 변경될 때 호출

- **splitItem**: `<HTMLElement>` 컨테이너를 감싸고 있는 아이템<br> 

	> ex) { acont: null, ... }

  - **splitItem.acont**: `<AContainer>` 자신이 감싸고 있는 컨테이너 객체를 가지고 있음

```js
function MyContainer*onSplitChanged(splitItem)
{
    super.onSplitChanged(splitItem);

    let cntr = splitItem.acont;

    console.log(cntr.getWidth() + ', ' + cntr.getHeight());
};
```
---


### onWillActive( isFirst )

컨테이너의 활성화가 시작되기 직전에 호출

- **isFirst**: `<Boolean>` 컨테이너가 초기화 되고 최초로 호출되었는지 여부

---

### onWillDeactive()

테이너의 비활성화가 시작되기 직전에 호출

---


### addWindow(awnd)

현재 **AContainer** 객체에 **AWindow**를 추가하는 메서드 

**AContainer**는 여러 개의 **AWindow** 객체를 관리할 수 있음

- **awnd**: `<AWindow>` 추가할 윈도우 객체

- **Returns**: `<Boolean>` 추가 성공 여부

```js
let myWindow = new AWindow();

myContainer.addWindow(myWindow); 
// myWindow를 myContainer에 추가
```

---


### removeWindow(awnd)

현재 **AContainer** 객체에서 **AWindow**를 제거하는 메서드

특정 **AWindow** 객체를 **wndList**에서 제거

- **awnd**: `<AWindow>` 제거할 윈도우 객체

```js
let myWindow = new AWindow(); 

myContainer.removeWindow(myWindow); 
// myWindow를 myContainer에서 제거
```

---


### actionDelay()


**AContainer**의 활성화 상태를 비활성화 한 후 일정 시간 후 다시 활성화하는 메서드

이 메서드는 주로 애플리케이션에서 상태 전환이나 비동기 작업 중에 사용

```js
let myContainer = new AContainer(); 

myContainer.actionDelay(); // 3초 후 컨테이너가 활성화됩니다.
```

---


### makeViewItem()



**AContainer**의 **viewItem**을 생성

이 함수는 컨테이너 내부에서 **뷰**를 감싸는 요소를 생성하여 **viewItem**을 셋팅하는 역할

```js
let container = new AContainer();

container.makeViewItem();
```

---


### setSplitPanel(inx, acont)

**createSplit** 함수로 생성된 분할된 영역에 **AContainer** 객체를 추가하는 함수

이 함수는 분할된 컨테이너의 특정 인덱스에 **AContainer**를 설정

-   **inx**: `<Number>` 분할된 영역의 인덱스
-   **acont**: `<AContainer>` 설정할 컨테이너 객체

```js
let container = new AContainer();
let panel = new APanel();

container.setSplitPanel(0, panel);  
// 첫 번째 분할 영역에 패널 설정
```

---


### addComponent(acomp, isPrepend, insComp)

**AContainer** 내에 **AComponent**를 추가하는 함수

특정 위치에 컴포넌트를 삽입 가능

-   **acomp**: `<AComponent>` 추가할 컴포넌트 객체

-   **isPrepend**: `<Boolean>` `true`이면 맨 앞에 추가, false이면 맨 뒤에 추가
-   **insComp**: `<AComponent>` 삽입할 컴포넌트 (선택적)

```js
let container = new AContainer();
let button = new AButton();

container.addComponent(button, true);  // 맨 앞에 버튼 추가
```

---


### findCompById(strId)

**AContainer** 내에서 특정 **컴포넌트**를 **ID**로 찾는 함수

- **strId**: `<String>` 찾을 컴포넌트의 ID

- **Returns**: `<AComponent>` 해당 ID를 가진 컴포넌트 객체

```js
let container = new AContainer();
let component = container.findCompById("myButton");
```

---


### findCompByGroup(strGroup)

**AContainer** 내에서 특정 **그룹**에 속한 모든 **컴포넌트**를 찾는 함수

-   **strGroup** : `<String>` 찾을 그룹의 이름

-   **Returns** : `<Array>` 해당 그룹에 속한 컴포넌트들의 배열

```js
let container = new AContainer();
let components = container.findCompByGroup("myGroup");
```

---