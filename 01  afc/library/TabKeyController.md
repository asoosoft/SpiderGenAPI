# TabKeyController

**AContainer** 내에서 **Tab** 키를 이용한 **포커스 이동을 관리**하는 라이브러리

DOM 트리 기반으로 컴포넌트 간의 이동을 처리하며, 포커스 가능한 요소들을 자동으로 탐색하여 적절한 순서로 이동할 수 있도록 함.

> 이 라이브러리는 내부적으로 동작하며 일반적으로 직접 호출할 필요는 없지만, 필요에 따라 특정 상황에서 `nextFocus()` 등을 활용하여 커스텀 포커스 이동을 제어 가능.

```js
const tabController = new TabKeyController();
tabController.init(myContainerView);
```

<br/>


## Instance Variables

### componentMap `<Array>`

컴포넌트를 배열로 가지고 있음. HTML문서의 Dom Tree의 방식처럼 저장되므로 Depth가 존재.

<br/>

### tabIndexArr `<Array>`

TabIndex를 빠르게 검색하기 위한 배열

<br/>

## Class Methods

### nextFocus( acomp, e )

현재 포커스된 컴포넌트에서 다음 탭 가능한 컴포넌트로 이동.

-   **acomp** `<AComponent>` 현재 컴포넌트
-   **e** `<Event>` 키 이벤트
        
```js
TabKeyController.nextFocus(currentComponent, event);
```

## Instance Methods


### init( rootView )

**AContainer**가 처음 init될 때 자동으로 호출.

-   **rootView** `<AView>` AContainer의 rootView
        
```js
tabController.init(myContainerView);
```

<br/>


### focusOnInit( flag, noActive )

최초 포커스를 설정하는 함수.

-   **flag** `<Boolean>` 탭 이동 활성화 여부
-   **noActive** `<Boolean>` 활성화 여부
        

```js
tabController.focusOnInit(true, false);
```



### findNextTab( comp, isShift )

다음 탭이 가능한 컴포넌트를 찾음. 없으면 탭이 가능한 첫번째 컴포넌트로 포커스를 이동.

-   **comp** `<AComponent>` 현재 컴포넌트
-   **isShift** `<Boolean>` **Shift** 키 여부

```js
const nextComponent = 
tabController.findNextTab(currentComponent, event.shiftKey);
```

<br/>

### addCompMap( acomp, owner )

탭키 컨트롤러 배열을 생성.

-   **acomp** `<AComponent>` 추가할 컴포넌트
-   **owner** `<AComponent>` 부모 컴포넌트

<br/>

### saveOwnerMap( owner )

동적으로 로드된 탭 인덱스를 저장.

**owner** `<AComponent>` 부모 컴포넌트

<br/>


### makeTabIndexArr()

탭 가능한 컴포넌트의 배열을 최초 1회 생성.

```js
tabController.makeTabIndexArr();
```

### pushCompIntoMap( map, acomp )

컴포넌트를 `componentMap`에 삽입하는 함수.

-   **map** `<Array>` 대상 배열
 -   **acomp** `<AComponent>` 추가할 컴포넌트
        
