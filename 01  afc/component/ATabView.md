# ATabView
> **Extends** [AComponent](https://wikidocs.net/274979)

**ATabView**는 여러 개의 뷰를 **탭 형식으로 관리**할 수 있는 컴포넌트

사용자는 **탭을 추가, 삭제, 선택, 이동**할 수 있으며, 애니메이션 및 히스토리 기능을 지원


## Instance Variables

### btnStyles `<Array>`

버튼 스타일 클래스명 배열 <br>
	[**선택된 탭 스타일**, **미선택된 탭 스타일**] <br>
	setBtnStyle() 메서드를 통해 설정 가능

```js
this.tabview.setBtnStyle(['tab-active', 'tab-inactive']);
```

---

### delegator `<AView>`

탭 이동 시 이벤트를 받을 객체 <br>
setDelegator() 메서드로 설정 가능

```js
this.tabview.setDelegator(this);
```

---

### lastSelectedTabId `<String>`

마지막으로 선택된 탭의 ID

---

### selectedTab `<HTMLObject>`

현재 선택된 탭 객체

---

### oldTab `<HTMLObject>`

 이전 탭 객체

---

### tabArea `<JQueryObject>`

탭 버튼들이 위치하는 영역

---

### tabContents `<JQueryObject>`

탭의 컨텐츠를 표시하는 영역

---

### tabBtnTpl `<JQueryObject>`

탭 버튼 템플릿

---

### isTabChanging `<Boolean>`

탭이 변경 중인지 여부 <br>
 true이면 변경 중, false이면 변경 없음

---

### **isRefresh** `<Boolean>`

탭이 새로고침 될지 여부

---

### option.enableAnimation `<Boolean>`

애니메이션 사용 여부 <br>
 setOption({ enableAnimation: true }) 로 활성화 가능

---

### option.slideDir `<String>`

슬라이드 애니메이션 방향 <br>
 기본값: 'left' <br>
 setSlideDir('right') 형태로 설정 가능

---

<br>

## Instance Methods

### setOption(option, noOverwrite)

ATabView의 옵션을 설정

-   **option** `<Object>` : 설정할 옵션을 포함한 객체

	##### 주요 옵션

	-   **contentReload**: 탭 전환 시 컨텐츠를 새로 로드할지 여부

	-   **enableAnimation**: 애니메이션 사용 여부

	-   **changeAnimation**: 탭 전환 애니메이션 방식 <br>
		> slide, fade 등

	-   **slideDir**: 슬라이드 애니메이션의 방향 
		> 'left', 'right' 등

	-   **sameTabCheck**: 동일한 탭을 다시 선택했을 때 동작 여부

	-   **deactiveGone**: 비활성화된 탭을 DOM에서 제거할지 여부

-   **noOverwrite** `<Boolean>` <br>
		 true일 경우 기존 옵션을 덮어쓰지 않습니다. 기본값은 false
		 
<br>

```js
tabview.setOption({ 
	enableAnimation: true, 
	changeAnimation: 'slide', 
	slideDir: 'right' 
});
```

---

### addTab(name, url, tabId, data, oneshot)

탭뷰에 **새로운 탭을 추가**

-   **name** `<String>` : 탭의 제목
-   **url** `<String>` : 탭이 로드할 레이아웃 파일(.lay) 경로
-   **tabId** `<String>` : 탭의 고유 아이디
-   **data** `<Object>` : 추가적인 데이터
-   **oneshot** `<Boolean>` : true이면 탭 해제 시 컨텐츠 삭제

```js
this.tabview.addTab('Tab 1', 'layout1.lay', 'tab1', {}, false, false, function(view) {
    console.log('Tab Loaded:', view);
});
```

---

### addTabEx(tabInfo)

탭뷰에 **탭을 추가하는 또 다른 방식**

-   **tabInfo** `<Object>` : 탭 설정 정보

-   **Returns** `<HTMLObject>` : 생성된 탭 요소

```js
this.tabview.addTabEx({
    name: 'Tab 2',
    url: 'layout2.lay',
    tabId: 'tab2',
    data: {},
    oneshot: false
});
```

---

### addTabWithLoad(name, url, tabId, data, oneshot, isActive)

새로운 탭을 추가하고, 해당 탭의 콘텐츠를 비동기적으로 로드

-   **name** `<String>` : 탭의 제목

-   **url** `<String>` : 탭이 로드할 레이아웃 파일 URL

- **tabId** `<String>` : 탭의 고유 ID

- **data** `<Object>` : 탭과 관련된 데이터

- **oneshot** `<Boolean>` : true이면 탭 해제 시 컨텐츠 삭제

- **isActive** `<Boolean>` : 탭을 활성화할지 여부

```js
tabview.addTabWithLoad('Tab 1', 'layout1.lay', 'tab1', {}, false, true);
```

---

### removeTab(tab)


특정 탭을 **삭제**

-   **tab** `<HTMLObject>` : 삭제할 탭 요소

```js
let tab = this.tabview.getTabById('tab1'); 
this.tabview.removeTab(tab);
```

---

### removeAllTab()

모든 탭을 삭제

```js
this.tabview.removeAllTab();
```

---

### selectTab(tab, data, isNoHistory)

특정 탭을 **선택**

-   **tab** `<HTMLObject>` : 선택할 탭 요소
-   **data** `<Object>` : 추가 데이터
-   **isNoHistory** `<Boolean>` : true이면 히스토리에 추가되지 않음

```js
let tab = this.tabview.getTabById('tab1'); 
this.tabview.selectTab(tab);
```

---

### selectTabById(tabId)

ID로 특정 탭을 **선택**

-   **tabId** `<String>` : 선택할 탭 ID

-   **Returns** `<HTMLObject>` : 선택된 탭

```js
this.tabview.selectTabById('tab1');
```

---

### selectTabByIndex(index)

인덱스로 특정 탭을 **선택**

-   **index** `<Number>` : 선택할 탭의 인덱스

-   **Returns** `<HTMLObject>` : 선택된 탭

```js
this.tabview.selectTabByIndex(0);
```

---

### getSelectedTab()

현재 **선택된 탭을 반환**

-   **Returns** `<HTMLObject>`

```js
let tab = this.tabview.getSelectedTab(); 
console.log(tab);
```

---

### getSelectedView()

현재 **선택된 탭의 뷰를 반환**

-   **Returns** `<AView>`

```js
let view = this.tabview.getSelectedView(); 
console.log(view);
```
---

### setDelegator(delegator)

탭 변경 이벤트를 받을 **대상(Delegator)을 설정**

-   **delegator** `<Object>` : 이벤트를 받을 객체

```js
this.tabview.setDelegator(this);
```

---

### enableHistory(enable)

탭뷰의 **히스토리 기능을 활성화/비활성화**

-   **enable** `<Boolean>` : true이면 활성화


```js
this.tabview.enableHistory(true);
```

---

### goPrevSelect()

이전 탭으로 이동

```js
this.tabview.goPrevSelect();
```

---

### goNextSelect()

다음 탭으로 이동

```js
this.tabview.goNextSelect();
```

---

### setSlideDir(dir)

탭 전환 애니메이션이 slide인 경우 **슬라이드 방향을 설정**

-   **dir** `<String>` : 'left' 또는 'right'

```js
this.tabview.setSlideDir('right');
```

---

### enableAnimation(enable)

탭 변경 시 **애니메이션 적용 여부를 설정**

-   **enable** `<Boolean>` : true이면 애니메이션 활성화

```js
this.tabview.enableAnimation(true);
```

---

### setTabOption(option)

탭의 **옵션을 설정**

-   **option** `<Object>` : 옵션 객체

```js
this.tabview.setTabOption({
    contentReload: false,
    changeAnimation: 'fade',
    sameTabCheck: true
});
```

---

### clearTabContent(tab)

탭의 콘텐츠를 삭제

탭이 활성화되었을 때 자동으로 호출되지 않으면 이 메서드를 사용하여 탭 콘텐츠를 명시적으로 삭제 가능

-   **tab** `<HTMLObject>` : 콘텐츠를 삭제할 탭 객체

```js
tabview.clearTabContent(tabview.getTabById('tab1'));
```

---

### setMaxLoadedCount(max)

최대 로드 가능한 탭 수를 설정

이 값을 초과할 경우, 오래된 탭을 자동으로 제거

-   **max** `<Number>` : 최대 로드 가능한 탭 수

```js
tabview.setMaxLoadedCount(5);
```

---

### checkMaxLoadedTabs()

현재 로드된 탭 수가 최대값을 초과하는지 확인하고, <br>
필요 시 오래된 탭을 제거

```js
tabview.checkMaxLoadedTabs();
```

---

### awaitTabById(tabId)

주어진 탭 ID에 해당하는 탭을 비동기적으로 반환

탭이 로드되지 않은 경우, 로딩 후 반환

-   **tabId** `<String>` : 가져올 탭의 ID

```js
tabview.awaitTabById('tab1').then(tab => {
  console.log('Tab Loaded:', tab);
});
```

---

### awaitTabByIndex(index)

주어진 인덱스에 해당하는 탭을 비동기적으로 반환

-   **index** `<Number>` : 가져올 탭의 인덱스

```js
tabview.awaitTabByIndex(0).then(tab => {
  console.log('Tab Loaded:', tab);
});
```

---

### awaitSelectedTab()

현재 선택된 탭을 비동기적으로 반환

```js
tabview.awaitSelectedTab().then(tab => {
  console.log('Selected Tab:', tab);
});
```

---

### getLastSelectedTabId()

마지막으로 선택된 탭의 ID를 반환

```js
const lastSelectedTabId = tabview.getLastSelectedTabId();
```

---

### getTabById(tabId)

탭 ID로 탭 객체를 반환

-   **tabId** `<String>` : 가져올 탭의 ID

- **Returns** `<HTMLObject>` : 해당하는 탭 객체

```js
const tab = tabview.getTabById('tab1');
```

---

### getTabByUrl(url)

URL로 탭 객체를 반환

-   **url** `<String>` : 가져올 탭의 URL

- **Returns** `<HTMLObject>` : 해당하는 탭 객체

```js
const tab = tabview.getTabByUrl('layout1.lay');
```

---

### getTabByInx(index)

인덱스로 탭 객체를 반환

-   **index** `<Number>` : 가져올 탭의 인덱스

- **Returns** `<HTMLObject>` : 해당하는 탭 객체

```js
const tab = tabview.getTabByInx(0);
```

---

### getAllTabs()

모든 탭 객체를 배열로 반환

- **Returns** `<Array>` : 모든 탭 객체 배열

```js
const allTabs = tabview.getAllTabs();
```

---

### activeTab(oldTab, newTab, reload)

탭을 활성화하는 메서드로, 이전 탭과 새 탭을 비교하여 전환

애니메이션을 포함한 탭 전환을 처리

-   **oldTab** `<HTMLObject>` : 이전 탭

- **newTab** `<HTMLObject>` : 새 탭

- **reload** `<Boolean>` : 새로 로드할지 여부

```js
tabview.activeTab(oldTab, newTab, true);
```

---

### updatePosition(pWidth, pHeight)

탭의 크기 및 위치를 업데이트하는 메서드

-   **pWidth** `<Number>` : 새 너비
- **pHeight** `<Number>` : 새 높이

```js
tabview.updatePosition(500, 400);
```

---

### removeFromView(onlyRelease)

탭을 뷰에서 제거

onlyRelease가 true일 경우, 리소스만 해제하고 DOM에서 제거하지 않음

-   **onlyRelease** `<Boolean>` <br>
true이면 리소스를 해제하고 DOM에서 제거하지 않음

```js
tabview.removeFromView(true);
```

---

### clearHistory()

탭 히스토리를 초기화

이전에 방문한 탭들을 모두 지움

```js
tabview.clearHistory();
```

---

### canGoPrev()

이전 탭으로 이동할 수 있는지 확인

-   **Returns** `<Boolean>` <br>
이전 탭으로 이동할 수 있으면 true, 그렇지 않으면 false

```js
if (tabview.canGoPrev()) {
  tabview.goPrevSelect();
}
```

---

### canGoNext()

다음 탭으로 이동할 수 있는지 확인

-   **Returns** `<Boolean>` <br>
다음 탭으로 이동할 수 있으면 true, 그렇지 않으면 false

```js
if (tabview.canGoPrev()) {
  tabview.goPrevSelect();
}
```

---


### showTabArea()

탭 영역을 표시하고, 탭 콘텐츠 영역의 높이를 조정

```js
tabview.showTabArea();
```

---


### hideTabArea()

탭 영역을 숨기고, 탭 콘텐츠 영역의 높이를 100%로 설정

```js
tabview.hideTabArea();
```

---

### setTabName(tab, name)

다음 탭으로 이동할 수 있는지 확인

- **tab** `<HTMLObject>` : 이름을 변경할 탭 객체
- **name** `<String>` : 새 탭 이름

```js
let tab = tabview.getTabById('tab1');
tabview.setTabName(tab, '새로운 탭 이름');
```

---

### clearSelectTab()

현재 선택된 탭을 초기화

```js
tabview.clearSelectTab();
```

---

<br>

## 프레임워크 자동 호출 함수

> 프레임워크가 자동으로 호출하지만<br>
> 필요 시 오바라이드(재정의)해서 동작을 바꿀 수 있음

- **changeBtnState()** - 탭의 상태를 변경
	> (예: 탭의 선택/비선택 상태에 따른 스타일 변경) 

- **beforeTabChanging()** : 탭 전환이 시작되기 전에 호출

- **tabChanging()** : 탭 전환 중에 호출

- **afterTabChanged()** : 탭 전환 후에 호출