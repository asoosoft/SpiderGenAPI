# ATabBar
> **Extends** [AComponent](https://wikidocs.net/274979)


**ATabBar**는 여러 개의 탭 버튼을 포함하는 **탭 바 컴포넌트**
  
각 탭은 아이콘 및 텍스트를 가질 수 있으며, 선택 시 관련된 컨테이너를 표시



## Instance Variables

### iconMap `<String> | <Array>`
	
탭 버튼에 사용될 아이콘 경로 또는 CSS 클래스

---

### moreBtn `<AButton>`

탭 바의 **더보기 버튼** (▼)으로, 보이지 않는 탭을 선택할 수 있도록 함

---

### selectedTab `<Object>`

현재 **선택된 탭 객체**
	
---

###   ttTimer `<Object>`
    
   툴팁을 지연 시간 후 표시하기 위한 타이머 객체
	
---
    
###   curTooltip `<Object>`
    
   현재 활성화된 툴팁 객체
	
---
    
###   btnStyles `<Array>`
    
   기본 및 선택된 탭 버튼 스타일을 관리하는 배열
	
---
    
###   iconType `<String>`
    
   아이콘의 유형을 정의하는 변수
	
---	
    
###   delegator `<AView>`
    
  이벤트 위임 객체

---


<br>

## Instance Methods

### addTab(tabId, title, cntr, ttMsg, icon)

새로운 **탭을 추가**

 -   **tabId** `<String>` : 탭의 고유 ID
-   **title** `<String>` : 탭에 표시할 텍스트
-   **cntr** `<AContainer>` : 연결될 컨테이너
-   **ttMsg** `<String>` : 툴팁 메시지
-   **icon** `<Number>` : 아이콘 인덱스

```js
tabbar.addTab('tab1', '홈', new AContainer(), '홈 화면', 0);
```

---


### findTabById(tabId)

탭 ID로 **탭 객체를 검색**

-   **tabId** `<String>` : 찾을 탭의 ID

-   **Returns** `<AView>` : 해당하는 탭 객체

```js
let tab = tabbar.findTabById('tab1');
```

---

### findTabByIndex(index)

인덱스를 이용해 **탭 객체를 검색**

-   **index** `<Number>` : 찾을 탭의 인덱스

-   **Returns** `<AView>` : 해당하는 탭 객체

```js
let firstTab = tabbar.findTabByIndex(0);
```

---

### getActiveTabIdx()

현재 **선택된 탭의 인덱스**를 반환

-   **Returns** `<Number>` : 활성화된 탭의 인덱스

```js
let activeIndex = tabbar.getActiveTabIdx();
```

---

### getAllTabs()

모든 탭을 **배열로 반환**

-   **Returns** `<Array>` : 모든 탭 객체 배열

```js
let allTabs = tabbar.getAllTabs();
```

---

### getFirstTab()


첫 번째 탭을 반환

-   **Returns** `<AView>` : 첫 번째 탭 객체

```js
let firstTab = tabbar.getFirstTab();
```

---

### getHiddenTabs()

보이지 않는 **숨겨진 탭 목록을 반환**

-   **Returns** `<Array>` : 숨겨진 탭 객체 배열

```js
let hiddenTabs = tabbar.getHiddenTabs();
```

---

### getLastTab()


마지막 탭을 반환

-   **Returns** `<AView>` : 마지막 탭 객체

```js
let lastTab = tabbar.getLastTab();
```

---

### getNextTab(tab)


지정된 탭의 **다음 탭을 반환**

-   **tab** `<AView>` : 기준이 되는 탭
-   **Returns** `<AView>` : 다음 탭 객체

```js
let nextTab = tabbar.getNextTab(tabbar.getSelectedTab());
```
---

### getPrevTab(tab)


지정된 탭의 **이전 탭을 반환**

-   **tab** `<AView>` : 기준이 되는 탭
-   **Returns** `<AView>` : 이전 탭 객체

```js
let prevTab = tabbar.getPrevTab(tabbar.getSelectedTab());
```

---

### getSelectedCntr()


현재 **선택된 탭의 컨테이너**를 반환

-   **Returns** `<AContainer>` : 선택된 컨테이너


```js
let activeContainer = tabbar.getSelectedCntr();
```

---

### getSelectedTab()

현재 **선택된 탭 객체를 반환**

-   **Returns** `<AView>` : 선택된 탭 객체

```js
let activeTab = tabbar.getSelectedTab();
```

---

### getTabCount()

탭의 총 개수를 반환

-   **Returns** `<Number>` : 탭 개수

```js
let tabCount = tabbar.getTabCount();
```

---

### getTabTitle(tab)


지정된 **탭의 타이틀을 반환**

-   **tab** `<AView>` : 타이틀을 가져올 탭
-   **Returns** `<String>` : 탭 타이틀
```js
let title = tabbar.getTabTitle(tabbar.getSelectedTab());
```

---

### indexOfTab(tab)


지정된 탭의 **인덱스를 반환**

-   **tab** `<AView>` : 찾을 탭
-   **Returns** `<Number>` : 탭 인덱스

```js
let index = tabbar.indexOfTab(tab);
```

---

### moveTab(mvTab, posTab, isAfter)


탭의 위치를 이동

-   **mvTab** `<AView>` : 이동할 탭
-   **posTab** `<AView>` : 기준이 되는 탭
-   **isAfter** `<Boolean>` : true이면 posTab 뒤로 이동

```js
tabbar.moveTab(tab1, tab2, true);
```

---

### removeTab(rTab, noSelect, noClose)

탭을 제거

-   **rTab** `<AView>` : 제거할 탭 객체

-   **noSelect** `<Boolean>` <br>
	 true일 경우 탭을 제거 후 다른 탭을 활성화하지 않음<br>
	  (기본값: false)

-   **noClose** `<Boolean>`<br>
	true일 경우 탭과 연결된 컨테이너를 닫지 않음 <br>
	(기본값: false)

```js
tabbar.removeTab(tabbar.getSelectedTab(), false, true); 
// noClose를 true로 설정하여 탭을 제거해도 연결된 컨테이너를 닫지 않음
```

---

### selectFirstTab()

첫 번째 탭을 활성화

```js
tabbar.selectFirstTab();
```

---

### selectLastTab()

마지막 탭을 활성화

```js
tabbar.selectLastTab();
```

---

### selectTab(tab, moveFirst)

지정된 **탭을 활성화**

-   **tab** `<AView>` : 활성화할 탭
-   **moveFirst** `<Boolean>` : true이면 맨 앞으로 이동

```js
tabbar.selectTab(tabbar.getFirstTab(), true);
```

---

### selectTabById(tabId, moveFirst)

ID를 이용해 **탭을 활성화**

-   **tabId** `<String>` : 활성화할 탭 ID
-   **moveFirst** `<Boolean>` : 맨 앞으로 이동 여부

```js
tabbar.selectTabById('tab1', true);
```

---

### selectTabByIndex(index, moveFirst)

인덱스를 이용해 **탭을 활성화**

-   **index** `<Number>` : 활성화할 탭 인덱스
-   **moveFirst** `<Boolean>` : 맨 앞으로 이동 여부

```js
tabbar.selectTabByIndex(0, true);
```

---

### setDelegator(delegator)

**Delegator를 설정**

-   **delegator** `<AView>` : 이벤트 위임 객체

```js
tabbar.setDelegator(myView);
```

---

### setIconMap(iconMap)


탭 아이콘을 설정

-   **iconMap** `<String>` : 아이콘 CSS 클래스 또는 이미지 URL



```js
tabbar.setIconMap('tree_icon_map');
```

---

### setTabTitle(tab, title)

특정 **탭의 타이틀을 변경**

-   **tab** `<AView>` : 타이틀을 변경할 탭
-   **title** `<String>` : 변경할 제목

```js
tabbar.setTabTitle(tabbar.getSelectedTab(), '새로운 제목');
```

---

### onDropBtnClicked(acomp, info)

**더보기 버튼 클릭 시** 보이지 않는 탭을 표시하는 메서드

-   **acomp** `<AComponent>` : 타이틀을 변경할 탭
-   **info** `<Object>` : 변경할 제목

```js
tabbar.onDropBtnClicked(myButton, {});
```

---

### onMenuSelect(menu, info)

**메뉴 항목 선택 시** 해당 탭을 활성화하는 메서드

-   **menu** `<AMenu>` : 선택된 메뉴 객체
-   **info** `<Object>` : 선택된 항목에 대한 정보

```js
tabbar.onMenuSelect(myMenu, { id: 'tab1' });
```

---

### onCloseBtnClick(acomp, info)

**탭 닫기 버튼 클릭 시** 해당 탭을 제거하는 메서드

-   **acomp** `<AComponent>` : 클릭된 탭의 버튼 컴포넌트

-   **info** `<Object>` : 버튼 클릭에 대한 정보

```js
tabbar.onCloseBtnClick(tabbar.getSelectedTab(), {});
```

---

### changeIcon(tab, icon, iconType)

특정 **탭의 타이틀을 변경**

-   **tab** `<AView>` : 아이콘을 변경할 탭 객체

-   **icon** `<Number>` : 새로운 아이콘 인덱스

-  **iconType** `<String>` : 아이콘 유형 (예: 'CSS', 'URL')

```js
tabbar.changeIcon(tabbar.getSelectedTab(), 1, 'CSS');
```

---

### setIconType(iconType)

아이콘 유형을 **설정**하는 메서드

-  **iconType** `<String>` : 아이콘 유형 (예: 'CSS', 'URL')

```js
tabbar.setIconType('CSS');
```

---

### getBgPos(icon, iconType)

아이콘의 **배경 위치**를 계산하여 반환하는 메서드

-   **icon** `<Number | Array>` : 아이콘 인덱스 (혹은 인덱스 배열)
-   **iconType** `<String>` : 아이콘 유형 (예: 'CSS', 'URL')

```js
et bgPos = tabbar.getBgPos(0, 'CSS');
```

---

### setBtnStyle(defStyle, selStyle)

탭 버튼의 **기본 스타일과 선택된 스타일을 설정**하는 메서드

-   **defStyle** `<String>` : 기본 탭 버튼 스타일
-   **selStyle** `<String>` : 선택된 탭 버튼 스타일

```js
tabbar.setBtnStyle('default-btn', 'selected-btn');
```

---