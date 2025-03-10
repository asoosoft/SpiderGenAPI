# AWebView

웹뷰 컴포넌트

웹 문서를 로드하고, 스크롤 및 확대/축소 기능을 지원하여 다양한 웹 콘텐츠를 쉽게 통합할 수 있도록 도와줌.



## Instance Variables

### iframe `<HTMLElement>`

웹뷰를 구성하고있는 iframe 태그

<br/>

### maxScale

웹뷰의 scale 최대값

<br/>

### minScale 

웹뷰의 scale 최소값

<br/>


## Instance Methods

### clear()

웹뷰의 내용을 모두 지우고 빈페이지로 만듬.

<br/>

### enableZoom( enable )

웹뷰의 확대,축소 기능의 활성여부를 지정

- **enable** `<Boolean>` 활성여부

<br/>

### getDoc()

웹뷰의 contentDocument 를 반환

- **Returns** `<Document>`

<br/>

### getScrollEle()

웹뷰의 contentDocument에서 body 요소를 반환

- **Returns** `<HTMLElement>`
  
<br/>

### getUrl()

웹뷰의 현재 페이지 경로 반환

- **Returns** `<String>`

<br/>

### getWnd()

웹뷰의 contentWindow 를 반환

- **Returns** `<contentWindow>`

<br/>

### reload()

웹뷰를 리로드

<br/>

### scrollOffset( offset )

문서의 y좌표값에서 매개변수 offset값만큼 더한 위치로 문서를 스크롤

- **offset** `<Number>` 더해지는 값

```js
this.webview.scrollOffset(50);
```

<br/>

### scrollTo( pos )

매개변수 pos값 위치로 문서를 스크롤

- **pos** `<Number>` y좌표값

```js
this.webview.scrollTo(50);
```

<br/>

### scrollToBottom()

문서의 최하단으로 스크롤

<br/>

### scrollToCenter()

문서의 가운데로 스크롤

<br/>

### scrollToTop()

문서의 최상단으로 스크롤

<br/>

### scrollBugFix() 

일부 환경에서 발생하는 스크롤 버그를 해결

```js 
this.webview.scrollBugFix();
```




### setDelegator( delegator )

delegate 함수를 호출할 객체를 컴포넌트에 세팅. 

- **delegator** `<Object> ` 
```js

init(context, evtListener)
{
	super.init(context, evtListener);
	
	//아래의 두가지 리스너를 사용하려면
	//url을 세팅하기전에  delegator 지정해야함.
	this.webView1.setDelegator(this);
	this.webView1.setUrl('sample/index.html');
	
};

//delegator를 세팅하면 아래의 두가지 리스너를 통해 결과를 전달 받을수있음.
//document가 준비되면 호출.
onDocReady(comp, doc)
{
	...
};

//웹뷰 iframe의 src 로드가 완료되면 호출.
onDocLoad(comp, doc)
{
	...
};
```

<br/>

### setHtml( html )

웹뷰 document에 매개변수 html 을 지정.

- **html** `<String>` html 형식의 태그
```js
this.webview.setHtml('<span>샘플</span>');
```

<br/>

<br/>

### setUrl( url )

웹뷰에 매개변수 url 경로의 문서를 로드

- **url** `<String>` 문서 경로

```js
this.webview.setUrl('Source/test.lay');
```

### setScale( scale ) 

웹뷰의 스케일을 설정

- **scale** `<Number>` 적용할 배율 (최소 `minScale`, 최대 `maxScale` 값 내에서 적용됨) 

```js 
this.webview.setScale(1.5);
```

### applyScale() 

현재 설정된 배율을 웹뷰에 적용

> `setScale()`을 사용하면 내부적으로 `applyScale()`이 호출. 

```js 
💫예제
this.webview.setScale(2.0); 
this.webview.applyScale();
```

<br/>

### zoom( ratio )

현재의 스케일에서 매개변수 ratio 의 비율만큼 확대,축소. 

- **ratio** `<Float>` 확대 / 축소 비율

```js
this.webview.zoom(0.1) // 현재 배율에서 10% 확대
this.webview.zoom(-0.1) // 현재 배율에서 10% 축소
```


### resetZoom() 

웹뷰의 확대/축소 상태를 초기화

```js 
this.webview.resetZoom()
```

<br/>

### setScale()

웹뷰영역의 스케일을 지정. 
