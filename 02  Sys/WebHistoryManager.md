# WebHistoryManager


웹 히스토리 매니저

> `WebHistoryManager`는 
> 브라우저의 히스토리 관리 기능을 확장하여 탭, 내비게이터, 윈도우 등의 컴포넌트와 함께 동작할 수 있도록 설계된 클래스. 
>
>이 클래스는 브라우저의 `history.pushState` 및 `popstate` 이벤트를 활용하여 네비게이션 히스토리를 관리.


<br/>

## Properties

### targets `<Object>`

히스토리 이동을 처리할 컴포넌트를 특정 키에 저장하는 객체

-   **Default**: null
    

### inc_uid `<Number>`

히스토리 식별을 위한 증가값 (UID)

-   **Default**: 0
    

### cur_uid  `<Number>`

현재 활성화된 히스토리 UID
    
-   **Default**: 0
    

### curTarget `<String>`

현재 활성화된 히스토리 타겟
    
-   **Default**: null
    

### isForceTabViewHistory `<Boolean>`

탭 뷰의 히스토리를 강제로 사용할지 여부 (전역 설정)
    
-   **Default**: true


## Instance Methods



### setUrlMark( urlMark )

URL 마커를 설정.

-   **urlMark** : `<String>` URL 마커 문자열
        

```js
whm.setUrlMark('?page=');
```


### setDelegator( delegator )

히스토리 이벤트를 위임할 객체를 설정

-   **delegator** : `<Object>` 히스토리 이벤트를 위임할 객체
        
```js
whm.setDelegator(customHandler);
```

### onPopState( e )

브라우저에서 **popstate** 이벤트가 발생했을 때 호출

-   **e** : `<Event>`*popstate* 이벤트 객체
        

```js
window.addEventListener('popstate', function(e) {
    whm.onPopState(e);
});
```

### setHistoryTarget( key, target )

히스토리 이동을 처리할 컴포넌트를 특정 키로 등록

* **key** : `<String>` 키
* **target** : `<ATabView>` `<ANavigator>` `<AWindow>` 컴포넌트 객체

```js
const whm = new WebHistoryManager();
whm.init();
whm.setHistoryTarget('tabview', this.tabView);
whm.pushHistory({target:'tabview', data1: 'data1' }; //...
```

<br/>

### pushHistory( data, title )

히스토리를 등록. 

> 데이터에는 이동할 `target` 키를 포함.

-   **data** : `<Object>` 히스토리 데이터 객체 (`target` 포함 필요)
    
-   **title** : `<String>` 상태 제목

```js
whm.pushHistory({ target: 'tabview', id: 'page1' }, 'Page 1');
```

<br/>

### popHistory()

히스토리 뒤로가기를 수행

```js
whm.popHistory()
```

<br/>