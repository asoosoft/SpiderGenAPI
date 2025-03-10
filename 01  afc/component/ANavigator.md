# ANavigator
화면 전환을 관리하는 핵심 도구

이를 통해 여러 페이지를 등록하고, 페이지 전환 및 히스토리를 관리

사용자는 이전 페이지나 다음 페이지로 이동할 수 있으며, 특정 페이지로 직접 이동하는 것도 가능

## Instance Methods

### setFlipType(flipType)
화면 전환 시 애니메이션 효과를 설정
> 예 ) normal, slide, fade

- **flipType** `<String>`: normal, slide, fade 중 하나를 선택  

```js
navi.setFlipType('slide');
```

### getFlipType()
현재 설정된 화면 전환 타입을 반환

- **Returns**: `<String>` normal, slide, fade 중 하나  

```js
var flipType = navi.getFlipType();
```

### setSlideDir(slideDir)
화면 전환 타입이 slide일 경우 슬라이드 방향을 설정

- **slideDir** `<String>`: left, right, up, down 중 하나  

```js
navi.setSlideDir('right');
```

### getSlideDir()
현재 설정된 슬라이드 방향을 반환.

- **Returns**: `<String>` left, right, up, down 중 하나  

```js
var slideDir = navi.getSlideDir();
```

### enableOneshot(enable)
페이지가 비활성화될 경우 자동으로 close 하도록 설정.

- **enable** `<Boolean>`: true이면 활성화, false이면 비활성화  

```js
navi.enableOneshot(true);
```

### enableDeactiveGone(enable)
페이지가 비활성화 될 경우 DOM에서 제거할지 여부를 설정

- **enable** `<Boolean>`: true이면 제거, false이면 visibility: hidden 상태로 유지  

```js
navi.enableDeactiveGone(true);
```

### registerPage(url, pageId, pageClass, cond)
페이지를 네비게이터에 등록

- **url** `<String>`: 이동할 페이지의 리소스 경로

- **pageId** `<String>`: 페이지를 구분할 고유 아이디

- **pageClass** `<String>`: 페이지의 클래스 이름

	> 기본값은 APage

- **cond** `<Function>`: 조건에 따라 다른 페이지가 로드되도록 하기 위한 함수. 이 함수가 참이면 해당 페이지로 이동

```js
navi.registerPage('Source/MainView.lay', 'MainView');
```

### registerPageEx(pageInfo)
registerPage와 동일하지만, 매개변수를 객체 형태로 전달 가능

- **pageInfo** `<Object>`: registerPage 함수의 매개변수를 객체 형태로 전달
> 예 ) { url: 'Source/MainPage.lay', pageId: 'MainView' }와 같은 형태

```js
var pageInfo = { url: 'Source/MainPage.lay', pageId: 'MainView' };
navi.registerPageEx(pageInfo);
```

### unRegisterPage(pageId)
특정 페이지를 네비게이터에서 제거

 - **pageId** `<String>`: 등록을 해제하고자 하는 페이지의 아이디

```js
navi.unRegisterPage('MainView');
```

### getPageInfo(pageId)
특정 페이지 ID에 대한 정보 객체를 반환

- **pageId** `<String>`: 정보를 얻고자 하는 페이지의 아이디

- **Returns**: 페이지 정보 객체 반환

```js
var pageInfo = navi.getPageInfo('MainView');
```

### getPage(pageId)
registerPage로 등록된 페이지 중에서 특정 페이지를 얻어오는 역할

- **pageId** `<String>`: 얻고자 하는 페이지의 아이디

- **Returns** `<APage>`: 등록된 페이지 객체를 반환

```js
var page = navi.getPage('MainView');
```

### pushHistory(page)
페이지 이동 히스토리를 추가

```js
navi.pushHistory(page);
```

- **page**`<APage>`: 히스토리에 추가할 페이지 객체


### flipPage(willActivePage, isFirst)
지정한 페이지로 화면을 전환

- **willActivePage** `<APage>`: 전환할 대상 페이지 객체

- **isFirst** `<Boolean>`: 첫 번째 전환인지 여부를 나타냄

```js
navi.flipPage(targetPage, true);
```

### goPage(pageId, data, isNoHistory)

특정 페이지로 이동

- **pageId** `<String>`: 이동할 페이지의 아이디
- **data** `<Object>`: 이동할 페이지에게 넘길 데이터
- **isNoHistory** `<Boolean>`: true이면 화면 이동을 히스토리에 남기지 않는 특징

```js
navi.goPage('SubPage', { name: 'subtab01' });
```

### goPrevPage(data)
이전 페이지로 이동

- **data** `<Object>`: 이전 페이지로 이동할 때 넘길 데이터

- **Returns** `<Boolean>`: 이동할 페이지가 없을 경우 false를 반환

```js
navi.goPrevPage({ name: 'subtab01' });
```

### goNextPage(data)

다음 페이지로 이동

- **data** `<Object>`: 다음 페이지로 이동할 때 넘길 데이터

- **Returns** `<Boolean>`: 이동할 페이지가 없을 경우 false를 반환

```js
navi.goNextPage({ name: 'subtab01' });
```

### getPrevPage()

현재 페이지 히스토리에서 이전 페이지 객체를 반환

- **Returns** `<APage>`: 현재 페이지 히스토리에서 이전 페이지 객체를 반환

```js
var prevPage = navi.getPrevPage();
```

### getNextPage()

현재 페이지 히스토리에서 다음 페이지 객체를 반환

- **Returns**: `<APage>`: 현재 페이지 히스토리에서 다음 페이지 객체를 반환

```js
var nextPage = navi.getNextPage();
```

### getActivePage()

현재 활성화된 페이지를 반환

- **Returns**: `<APage>`: 현재 활성화된 페이지 객체를 반환

```js
var activePage = navi.getActivePage();
```

### canGoPrev()

이전 페이지로 이동할 수 있는지 여부를 반환

- **Returns**: `<Boolean>` 이동 가능 여부  

```js
if (navi.canGoPrev()) {
    navi.goPrevPage();
}
```

### canGoNext()

다음 페이지로 이동할 수 있는지 여부를 반환

- **Returns**: `<Boolean>` 이동 가능 여부  

```js
if (navi.canGoNext()) {
    navi.goNextPage();
}
```

### clearHistory()

페이지 이동 히스토리를 초기화

```js
navi.clearHistory();
```

### closePage(pageId)

지정된 pageId에 해당하는 페이지를 닫는 역할.

페이지의 컨테이너만 닫히며, 페이지 정보는 여전히 네비게이터에 등록된 상태.

따라서, 필요할 때 goPage를 통해 페이지를 다시 오픈

- **pageId** `<String>`: 닫고자 하는 페이지의 아이디

```js
navi.closePage('MainView');
```

### closeAllPage()

등록된 모든 페이지를 닫는 역할

```js
navi.closeAllPage();
```

### onResize()
현재 활성화된 페이지의 크기를 조정

```js
navi.onResize();
```

### reportBackKeyEvent()
네비게이터의 루트에서 백키 이벤트를 처리

- **Returns**: `<Boolean>` 백키 이벤트 처리 여부  

```js
var handled = ANavigator.reportBackKeyEvent();
if (handled) {
    console.log("백키 이벤트가 처리되었습니다.");
} else {
    console.log("백키 이벤트를 처리할 페이지가 없습니다.");
}
```

### Cntr `<AContainer>`
cntr는 ANavigator 인스턴스가 관리하는 컨테이너를 나타내는 변수.

이 컨테이너는 네비게이터가 페이지 전환을 관리하는데 사용

ANavigator는 여러 페이지를 등록하고 전환할 수 있는 기능을 제공하며, cntr는 이러한 페이지들이 포함될 컨테이너를 지정

### pageInfoMap()
pageInfoMap 메서드는 ANavigator가 관리하는 페이지 정보들을 맵 형태로 반환하거나 설정하는 메서드

이 메서드는 네비게이터가 어떤 페이지들을 관리하고 있는지에 대한 정보를 저장하고, 필요에 따라 이 정보를 수정하거나 조회가 가능

페이지 정보는 일반적으로 페이지의 URL, ID, 클래스, 조건 등을 포함

### isTabFlipping()
isTabFlipping 메서드는 현재 네비게이터가 탭 전환 애니메이션을 사용하고 있는지를 확인하는 메서드

이 메서드는 네비게이터가 페이지 전환 시 탭 전환 효과를 적용할지 여부를 반환

탭 전환 효과는 사용자 경험을 향상시키기 위해 페이지 전환 시 시각적인 효과를 추가하는 데 사용


## Events
### onWillActive(isFirst)
페이지가 활성화되기 직전에 호출되는 메서드

이 메서드는 페이지가 사용자에게 표시되기 바로 전에 필요한 작업을 수행할 수 있는 기회를 제공

- **isFirst** `<Boolean>`: 페이지가 처음 활성화되는 경우 true, 그렇지 않으면 false

	 > isFirst 매개변수는 페이지가 처음 활성화되는 것인지 여부를 나타내며, true이면 페이지가 처음 활성화되는 경우를 나타냄

```js
page.onWillActive = function(isFirst) {
    console.log("페이지가 활성화되기 전입니다.");
};
```

### onActive(isFirst)
페이지가 활성화될 때 호출되는 메서드

이 메서드는 페이지가 사용자에게 표시된 후에 필요한 작업을 수행할 수 있는 기회를 제공

- **isFirst** `<Boolean>`: 페이지가 처음 활성화되는 경우 true, 그렇지 않으면 false.

```js
page.onActive = function(isFirst) {
    console.log("페이지가 활성화되었습니다.");
};
```

### onDeactive()
페이지가 비활성화 될 때 실행

```js
page.onDeactive = function() {
    console.log("페이지가 비활성화되었습니다.");
};
```

### webkitAnimationEnd()
슬라이드 애니메이션이 끝날 때 발생하는 이벤트

```js
navi.getActivePage().$ele.one('webkitAnimationEnd', function() {
    console.log("애니메이션 종료됨");
});
```