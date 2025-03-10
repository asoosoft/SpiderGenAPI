# AWindow( containerId )
> **Extends** AContainer


윈도우 컴포넌트

**다른 컨테이너 위에 팝업할 수 있는 기능을 제공**. 프레임, 타이틀바, 최대화, 최소화, 닫기 버튼 등의 기본 UI 요소는 포함되지 않으며, 사용자가 원하는 모양이나 기능을 추가할 수 있음.

### 💡 주요 특징

-   **다이얼로그 및 팝업 윈도우**를 지원
    
-   **모달 및 모달리스** 방식 선택 가능
    
-   **드래그 & 리사이즈** 지원
    
-   **백그라운드 터치 방지 기능** 제공


```js
💫예제 
const wnd = new AWindow('test');

//넓이와 높이를 생략하면 lay 파일의 넓이와 높이로 오픈.
wnd.open('Source/TestView.lay', null, 100, 100);

// 3초 후에 중앙으로 이동 
setTimeout(() => { 
	wnd.moveToCenter(); 
}, 3000);

// 5초 후 닫기 
setTimeout(() => { 
	wnd.close('닫힘', { reason: '테스트 종료' }); 
}, 5000);
```


## Instance Variables

### option
윈도우의 다양한 설정 옵션을 담고 있는 객체
<p class="bbqa">기본값은 아래와 같음</p>

    this.option = 
    {
		isModal: false,		        //modal 여부, 모바일인 경우 기본값이 true
		isCenter: false,			//창을 중앙에 배치할 지
		isFocusLostClose: false,	//모달인 경우 포커스를 잃을 때 창을 닫을지
		isFocusLostHide: false,		//모달인 경우 포커스를 잃을 때 창을 숨길지
		modalBgOption: 'none',		//none, light, dark 모달인 경우 배경을 어둡기 정도
		overflow: 'hidden',			//hidden, auto, visible, scroll
		dragHandle: null,			//드래가 핸들이 될 클래스명이나 아이디, .windowHandle or #windowHandle
		isResizable: false,         //윈도우 창을 리사이즈 가능하게 할지
		isDraggable: false,         //윈도우 창을 드래그로 움직이게 할지
		inParent: false,			//부모 컨테이너 안에 창을 띄울 경우, 모달리스(isModal:false)이고 부모를 클릭해도 항상 부모보다 위에 보이게 하려면 이 값을 true 로 셋팅
		focusOnInit: true			//init될때 자동으로 윈도우의 첫번째 컴포넌트(tabIndex기준)에 포커스
    }
		

### ❗setWindowOption( option, noOverwrite ) 

setOption()을 대신하여 사용되었으나 **현재는 지원되지 않음**.  
새로운 프로젝트에서는 setOption()을 사용.

```js
wnd.setWindowOption({ isModal: true });`` 

**대신 아래처럼 사용:**

```js
wnd.setOption({ isModal: true });
```


## Static Methods



### AWindow.getTopWindow()

현재 최상위 활성화된 윈도우를 반환.

```js
const topWnd = AWindow.getTopWindow();
```

### AWindow.addWindow(awnd)

윈도우를 전역 리스트에 추가.

```js
AWindow.addWindow(wnd);
```

### AWindow.removeWindow(awnd)

윈도우를 전역 리스트에서 제거.

```js
AWindow.removeWindow(wnd);
```

### AWindow.updateTopWindow()

최상위 윈도우를 갱신.

```js
AWindow.updateTopWindow();
```

### AWindow.reportBackKeyEvent()

현재 최상위 윈도우에 백 버튼 이벤트를 전달.

```js
AWindow.reportBackKeyEvent();

```
### AWindow.reportMoveCenter() 

오픈된 모든 윈도우 중 **isCenter: true** 옵션이 설정된 윈도우들을 화면 중앙으로 이동. 

```js 
AWindow.reportMoveCenter();
```

```js
💫예제
const wnd1 = new AWindow(); 
wnd1.setOption({ isCenter: true }); 
wnd1.open('Source/t1.lay'); 

const wnd2 = new AWindow(); 
wnd2.setOption({ isCenter: true }); 
wnd2.open('Source/t2.lay'); 

// 모든 중앙 정렬 윈도우를 다시 중앙으로 이동 
AWindow.reportMoveCenter();
```


### AWindow.makeTopWindow(toTopWnd, isFirst)

최상위 윈도우를 설정.
```js
AWindow.makeTopWindow(wnd, true);
```



## Instance Methods

### open( url, parent, left, top, width, height )

뷰를 로드하여 윈도우를 오픈.

- **url** `<String>` 뷰 객체를 로드할 lay 파일의 경로
- **parent** `<AContainer>` 자신의 부모가 될 컨테이너 지정, **null** 인 경우 기본적으로 **mainContainer**가 되고 설정되어 있지 않으면  **rootContainer** 순서로 부모.
- **left** `<String>` or `<Number>` 윈도우의 x 좌표 **10, '10px', '5%'**
- **top** `<String>` or `<Number>` 윈도우의 y 좌표
- **width** `<String>` or `<Number>` 윈도우의 넓이, 생략하면 lay 파일의 뷰 넓이로 셋팅
- **height** `<String>` or `<Number>` 윈도우의 높이, 생략하면 lay 파일의 뷰 높이로 셋팅

```js
const wnd = new AWindow('window1');
wnd.open('Source/t1.lay', null, 10, 10, 500, 500);
```

<br>


### close( result, data ) 

윈도우를 닫고 결과를 반환.

- **result** `<Any>` 윈도우 종료 시 반환할 값 
-  **data** `<Any>` 추가적인 데이터 

```js
const wnd = new AWindow(); 
wnd.open('Source/t1.lay'); 
wnd.setResultCallback((result, data) => { 
	console.log('결과:', result); 
	console.log('데이터:', data); }); 
	wnd.close('완료', { extraInfo: '추가 데이터' 
});
```
<br>


### hide() 

윈도우를 화면에서 숨김

```js 
const wnd = new AWindow(); 
wnd.open('Source/t1.lay');

// 일정 시간 후 숨김 
setTimeout(() => { 
	wnd.hide();
}, 3000);
```


### show( delay )

윈도우를 다시 보이게 함.

```js
wnd.show()
```


### enableDrag()
윈도우의 창 이동 기능을 활성화

> 윈도우 open 시점에 setOption 의 `isDraggable` 을 통해서도 설정.
> 
> setDragOption('disabled', `true`/`false`) 를 통해 기능을 스위치.

<br>

### enableResize()

윈도우의 리사이즈 기능을 활성화

> 윈도우 open 시점에 setOption 의 `isResizable` 을 통해서도 설정.
> 
> setResizeOption('disabled', `true`/`false`) 를 통해 기능을 스위치.

<br>

### move( x, y )

윈도우의 위치를 x, y 로 이동

- **x** `<Number>` or `<String>` 이동할 x 좌표, **10, 10px, 10%**
- **y** `<Number>` or `<String>` 이동할 y 좌표, **10, 10px, 10%**

```js
const wnd = new AWindow('window1');
wnd.openAsDialog('Source/t1.lay');
wnd.move(10, 10);
```
<br>

### moveToCenter()

윈도우를 중앙으로 이동

<br>

### moveX( x )

윈도우의 x 위치를 이동

- **x** `<Number>` or `<String>` 이동할 x 좌표, **10, 10px, 10%**

<br>

### moveY( y )

윈도우의 y 위치를 이동

- **y** `<Number>` or `<String>` 이동할 x 좌표, **10, 10px, 10%**

<br>







### offset( dx, dy )

윈도우의 현재 위치에서 dx, dy 값만큼 추가적으로 이동

- **dx** `<Number>` 이동할 x 거리
- **dy** `<Number>` 이동할 y 거리

<br/>

### modalManage( zIndex )

윈도우가 모달(**isModal: true**)일 경우 배경 요소를 생성하고 **z-index**를 조정.  
윈도우를 띄울 때 **자동으로 실행**되며, 필요하면 직접 호출.

```js
const wnd = new AWindow();
wnd.setOption({ isModal: true });
wnd.open('Source/t1.lay');

// 배경의 z-index를 1050으로 설정
wnd.modalManage(1050);
```




### openAsDialog( viewUrl, parent, width, height )

다이얼로그처럼 작동하도록 설정하여 윈도우를 오픈

- **viewUrl** `<String>` 윈도우에 보여질 뷰 리소스 url
- **parent** `<AContainer>` 자신의 부모 컨테이너
- **width** `<String>` or `<Number>` 윈도우의 넓이
- **height** `<String>` or `<Number>` 윈도우의 높이


<p class="bbqa">✅open() 과 차이점</p>

> - `isModal: true`가 자동으로 설정됨 (배경 클릭 차단) 
> - `isCenter: true`로 자동 정렬됨 (화면 중앙에 위치) 
> - `isFocusLostClose: false` 기본값 (포커스 잃어도 닫히지 않음)

```js 
const dlg = new AWindow(); 
dlg.openAsDialog('Source/dialog.lay', null, 400, 300);
```


<br/>

### openAsMenu( viewUrl, parent, width, height )

메뉴 팝업처럼 작동하도록 설정하여 윈도우를 오픈

- **viewUrl** `<String>` 윈도우에 보여질 뷰 리소스 url
- **parent** `<AContainer>` 자신의 부모 컨테이너
- **width** `<String>` or `<Number>` 윈도우의 넓이
- **height** `<String>` or `<Number>` 윈도우의 높이


<p class="bbqa">✅open() 과 차이점</p>

> - `isModal: true` (배경 클릭 차단) 
> - `isCenter: true` (화면 중앙 배치) 
> - `isFocusLostClose: true` (포커스를 잃으면 자동으로 닫힘)

```js 
const menu = new AWindow(); 
menu.openAsMenu('Source/menu.lay', null, 200, 300);
```


<br/>

### openCenter( viewUrl, parent, width, height )

윈도우를 화면 가운데 위치하도록 오픈

- **viewUrl** `<String>` 윈도우에 보여질 뷰 리소스 url
- **parent** `<AContainer>` 자신의 부모 컨테이너
- **width** `<String>` or `<Number>` 윈도우의 넓이
- **height** `<String>` or `<Number>` 윈도우의 높이

<br/>

### openFull( viewUrl, parent )

윈도우를 전체 화면으로 오픈

- **viewUrl** `<String>` 윈도우에 보여질 뷰 리소스 url
- **parent** `<AContainer>` 자신의 부모 컨테이너

<br>




### setDragOption( key, value )

jQuery draggable 옵션을 설정

<p class="bbqa">컨테이너 element 에 jQuery draggable 을 설정하는 것과 같음.</p> 

다음 링크 참조 [https://api.jqueryui.com/draggable/](https://api.jqueryui.com/draggable/)

- **key** `<String>` 설정 키
- **value** `<String>` 설정 값

```js
const wnd = AWindow();
wnd.setOption({isDraggable: true});
wnd.open(...);

//드래그 기능을 잠시 비활성, false 로 셋팅하면 다시 활성.
wnd.setDragOption('disabled', true);
```
<br>

### setModalBgOption( option )

모달 윈도우의 배경 투명도를 조절

| option | 설명 | 
|--|--|
 | `light` | 밝은 투명도 (`rgba(0,0,0,0.3)`) |
  | `dark` | 어두운 투명도 (`rgba(0,0,0,0.5)`) | 
  | `none` | 배경 없음 |

```js 
const wnd = new AWindow(); 
wnd.setOption({ isModal: true });
wnd.open('Source/t1.lay'); 

// 배경을 어둡게 설정 
wnd.setModalBgOption('dark');
```

### setResizeOption( key, value )
jQuery resizable 옵션을 설정

<p class="bbqa">컨테이너 element 에 jQuery resizable 을 설정하는 것과 같음.</p>

다음 링크 참조(https://api.jqueryui.com/resizable/)

- **key** `<String>` 설정 키
- **value** `<String>` 설정 값

```js
const wnd = AWindow();
wnd.setOption({isResizable: true});
wnd.open(...);

//리사이즈 기능을 잠시 비활성, false 로 셋팅하면 다시 활성화.
wnd.setResizeOption('disabled', true);
```
<br>

### setResultCallback( callback )

윈도우가 닫힌 후 실행할 콜백 함수를 설정

```js
const wnd = new AWindow();
wnd.open(...);
wnd.setResultCallback(function(result, data) 
{
    console.log(result);
    console.log(data);
});
```

<br/>

### setResultListener( resultListener )

윈도우 클로즈 시 결과값을 전달받을 객체를 설정

> 향후 윈도우가 닫히면 해당 객체의 onWindowResult 함수가 호출되며 AContainer 의 close(result, data)함수 호출 시 넘긴 파라미터를 그대로 넘겨줌.

* **resultListener** `<Object>` 결과를 받을 객체

```js
const wnd  = new AWindow('window1');
wnd.setResultListener(this);

//리스너 객체 의 멤버함수
function MainView*onWindowResult(result, data, cntr) 
{
    const cntrId = cntr.getContainerId();

    if(cntrId=='window1')
    {
        console.log(result);
        console.log(data);
    }
};
```