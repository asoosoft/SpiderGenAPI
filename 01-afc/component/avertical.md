# AVertical

> **Extends** : AFlexLayout

버티컬 컴포넌트

> 내부 요소를 column 방향으로 정렬하며, align-items 및 justify-content 속성을 이용해 중앙 정렬을 지원


-   AFlexLayout을 기반으로 한 세로 방향 레이아웃 제공
    
-   flex-direction: column 을 기본값으로 설정하여 요소가 위에서 아래로 정렬
    
-   기본적으로 align-items: center,  justify-content: center 스타일 적용


<!--

## Instance Variables

### frwName `<String>`

컴포넌트가 속한 프레임워크 이름. 기본값은 `'afc'`입니다.

## Static Properties

### CONTEXT `<Object>`

AVertical의 기본 컨텍스트 정의.

-   `tag`  `<String>` : 컴포넌트의 기본 HTML 태그
    
-   `defStyle`  `<Object>` : 기본 스타일 설정 (예: width: 120px, height: 320px, flex-direction: column 등)
    
-   `events`  `<Array>` : 기본 이벤트 목록 (현재 없음)
    

## Instance Methods

### init( context, evtListener )

컴포넌트를 초기화하고, 부모 클래스를 호출하여 기본 설정을 적용합니다.

```js
verticalLayout.init(context, evtListener);
```


-->