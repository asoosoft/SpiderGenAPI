# ASlideView

**ASlideView**는 좌우 혹은 상하 방향으로 슬라이딩(페이징)할 수 있는 뷰 컨테이너.<br/>
슬라이드에 들어갈 아이템을 동적으로 추가/삭제할 수 있으며, 각 슬라이드로 쉽게 이동할 수 있도록 메서드를 제공.

## Instance Variables

### inx `<Number>`

현재 선택된 슬라이드의 인덱스 (기본값: 0)

### delegator `<Object>` or `<null>`

데이터 바인딩이나 특정 로직을 위임할 객체를 지정.

### isDown `<Boolean>`

슬라이드 이동(드래그) 중인지 여부를 표시. (ACTION_DOWN 시점에  true)

### scrlManager `<ScrollManager>`

슬라이드 움직임(드래그)을 관리하기 위해 내부적으로 사용하는 **ScrollManager** 인스턴스

### btnView `<AView>` or `<null>`

버튼들이 들어있는 뷰 객체(슬라이드 이동 시 선택 상태를 표시하기 위함)

### btnFlex `<AFlexLayout>` or `<null>`

플렉스 레이아웃 기반 버튼 객체들(슬라이드 이동 시 선택 상태 표시)

### selectBtn `<AComponent>` or `<null>`

현재 선택된 버튼(슬라이드 이동 시 버튼도 같이 highlight/disable 처리)

### option `<Object>`

* 슬라이드 뷰 설정값
	* **direction**: horizontal or vertical (기본 **horizontal**),
	* **moveSpeed**: 이동 속도(기본 100)
	* **easing**: 감속 옵션(기본 **'linear'**)
	* **slideRatio**: 이동해야 슬라이드가 넘어가는 임계값 비율(기본 0.2) 	

### this.lastLoadedHtml `<String>`

마지막으로 로드된 HTML 문자열을 저장하여, 아이템 추가 시 재사용.<br/>

예) **this.lastLoadedHtml**을 이용해 새로운 슬라이드를 추가할 때 기존 로드된 레이아웃을 사용하여 성능을 향상.

### this.scrlIndicator `<ScrollIndicator>`

스크롤 인디케이터를 사용하여 현재 슬라이드의 위치를 표시하는 객체.

### this.isValid `<Boolean>`

현재 ASlideView가 **유효한지 여부를 확인**하는 변수.<br/>
내부적으로 **this.isValid()** 체크하여 뷰가 존재하지 않는 경우 추가적인 로직 실행 방지.

### this.moveDelay `<Number>`

**scrollCheck()**에서 활용되는 이동 지연 값.<br/>
예) 터치 이벤트가 발생했을 때 **즉시 이동하지 않고, 일정 거리 이상 드래그해야 이동**하도록 조정.

* **Default** : 0
* **관련 메서드:** this.scrlManager.scrollCheck()

## Instance Methods

### addDisableManager( disableManager )

슬라이드뷰의 **ScrollManager**와 연동할 **DisableManager**를 추가.

- **disableManager** `<DisableManager>`

```javascript
this.slideView.addDisableManager(disableManager);
```

### addItem( urlArr, dataArr, isPrepend, asyncCallback )

단일 URL(레이아웃)으로부터 **하나 이상의 데이터**를 주어(배열 형태) 새 슬라이드 아이템을 추가.

- **urlArr** `<String>` 레이아웃 파일 경로
- **dataArr** `<Array>` 아이템에 바인딩할 데이터 배열 
- **isPrepend** `<Boolean>` **true**면 기존 슬라이드의 앞쪽(왼쪽/위쪽)에 추가 , **false**면 뒤쪽(오른쪽/아래쪽)에 추가.

- **Return** `<Promise<Array>>` 생성된 DOM 객체 배열

```js
this.slideView.addItem('Soruce/slideViewItem01.lay', [{title:'Hello'}])
	.then(items => {
		console.log('새 아이템이 추가되었습니다.', items);
});
```


### addItems( urlArr, dataArr, isPrepend, asyncCallback )

복수의 레이아웃 파일(**urlArr**)과 데이터(**dataArr**)은 1:1 대응으로 동시에 추가.

- **urlArr** `<String>` 여러 개의 레이아웃 파일 경로
- **dataArr** `<Object>` urlArr와 동일한 길이의 데이터 배열
- **isPrepend** `<Boolean>` True면 앞에, False면 뒤에 추가.
- **asyncCallback** `<Function>`
- **Return** `<Promise<Array>>` 생성된 DOM 객체 배열 모음

```javascript
let urlArr = ['Source/item1.lay','Source/item2.lay'];
let dataArr = [{title: 'A'},{title: 'B'}];

this.slideView.addItems(urlArr, dataArr, false)
	.then(newItems => {
		console.log('2개의 아이템이 추가되었습니다.', newItems);
});
```

### enableScrlManager()

슬라이드뷰에서 드래그로 슬라이드를 이동할 수 있도록 하는 `ScrollManager` 를 활성화.

```js
this.slideView.enableScrlManageR();
```

### scrollXImplement()

-   가로 방향(x축) 슬라이드를 구현
-   사용자의 드래그 입력을 감지하여 x축으로 이동
-   30% 이상 이동하면 해당 방향의 끝까지 이동
-   **ACTION_DOWN**, **ACTION_MOVE**, **ACTION_UP**, **ACTION_LEAVE** 이벤트를 통해 동작

### scrollYImplement()

-   세로 방향(y축) 슬라이드를 구현
-   사용자의 드래그 입력을 감지하여 y축으로 이동
-   30% 이상 이동하면 해당 방향의 끝까지 이동

### getMoveUnit()

-   현재 슬라이드가 한 번에 이동해야 할 거리(너비 또는 높이) 를 반환.
-   **가로 슬라이드(**horizontal**) → **this.getWidth()**
-   **세로 슬라이드(**vertical**) → **this.getHeight()**

```js
ASlideView.prototype.getMoveUnit = function() {
    if (this.option.direction == 'vertical') return this.getHeight();
    else return this.getWidth();
};
```

### getItem( index )

지정된 인덱스의 아이템 DOM 객체를 반환.

- **index** `<Number>` 원하는 아이템의 인덱스 값
- **Return** `<HTMLElement>` (슬라이드 아이템 div)

```js
let item = tihs.slideView.getItem(0);
console.log(item);
```

### getItems()

모든 슬라이드 아이템( **<div\>** ) 목록을 반환.

- **Return** `<jQuery Object>` 슬라이드 아이템들을 jQuery 객체 형태로 반환

```js
let itemList = this.slideView.getItems();
console.log('전체 슬라이드 개수:', itemList.length);
```

### getMoveUnit()

슬라이드가 한 번에 이동해야 할 길이(가로/세로 크기)를 반환.<br/>
(direction이 'horizontal'이면 **this.getWidth()**, 'vertical'이면 **this.getHeight()**)

- **Return** `<Number>`

```js
console.log('슬라이드 이동 단위:', this.slideView.getMoveUnit());
```

### indexOfItem( item )

특정 DOM 객체(item)가 몇 번째 슬라이드인지 인덱스를 구함.

- **item** `<HTMLElement>` 아이템 DOM
- **Return**  `<Number>` (해당 아이템 인덱스, 없으면 **-1**)

```js
let item0 = this.slideView.getItem(0);
let idx = this.slideView.indexOfItem(item0);
console.log(idx) // 0
```

### setScrollType( type )

슬라이드 뷰의 스크롤 방향을 설정.

-   **horizontal**: 좌우 스크롤
-   **vertical**: 상하 스크롤

```js
ASlideView.prototype.setScrollType = function(type) {
    this.option.direction = type;
};
```

### setButtonView( buttonView )

별도의 버튼 뷰와 연동하여, 각 버튼을 눌렀을 때 슬라이드를 이동하도록 설정.

- **buttonView** `<AView>`

```js
// buttonView 내부에 버튼이 여러 개 있다고 가정
this.slideView.setButtonView(this.buttonView);
```

### setButtonFlexLayout( buttonFlexLayout )

플렉스 레이아웃(AFlexLayout) 형태의 버튼들과 연결.

- **buttonFlexLayout**  `<AFlexLayout>`

```js
this.slideView.setButtonFlexLayout(this.buttonFlexLayout);
```

### setDelegator( delegator )

슬라이드 아이템 생성 후 데이터를 바인딩하거나, 슬라이드 변화 시 특정 로직을 수행할 델리게이터를 설정.

- **delegator** `<Object>`

```js
let delegator = {
	bindData: function(domItem, data, slideView) {
		console.log('bindData 호출', domItem,data);
	}
};
this.slideView.setDelegator(delegator);
```

### setEasing( easing )

슬라이드 이동 시 사용할 **Easing 효과**(감속 옵션)를 설정.<br />
(예: linear / swing / easeOutQuad, easeOutElastic 등)

- **easing** `<String>`

```js
this.slideView.setEasing('easeOutElastic');
```

### setSpeed( speed )

슬라이드 이동 속도를 설정. (기본값: 100)

- **speed** `<Number>` 숫자가 클수록 애니메이션 시간이 길어져 느리게 이동

```js
this.slideView.setSpeed(300); // 300ms 정도로 천천히 이동
```


### selectButton( selBtn )

슬라이드와 연동된 버튼뷰/플렉스 버튼 중 선택 상태를 갱신.<br/>
(이전 선택 버튼을 활성화하고, 새 선택 버튼을 비활성화 처리)

- **selBtn** `<AButton>` or `<AComponent>`

```js
// 두 번째 버튼을 선택 상태로 설정
let secondBtn = this.buttonView.getChildren()[1];
this.slideView.selectButton(secondBtn);
```

### slideNext()

현재 inx 다음 인덱스 ( inx+1 ) 로 슬라이드를 이동.

```js
this.slideView.slideNext();
```

### slidePrev()

현재 inx 다음 인덱스 (inx-1)로 슬라이드를 이동.

```js
this.slideView.slidePrev();
```

### slideTo(index, isReport)

지정된 index 슬라이드로 이동.<br/>
이동 후 this.inx가 변경되며, isReport 가 true면 change 이벤트가 발생.

- **index** `<Number>` 이동할 슬라이드 인덱스
- **isReport** `<Boolean>` change 이벤트를 발생할지 여부

```js
this.slideView.slideTo(2,true);
```

### getCurrentView()

현재 표시되고 있는 슬라이드의 내부 AView 객체를 반환. (존재하면)

- **Return** `<Aview>` or `<null>`

```js
let currerntView = this.slideView.getCurrentView();
if(currentView) currentView.someMethod();
```

### scrollXImplement()

x축으로 30%이상 이동시 해당 방향의 끝까지 이동.

### scrollYImplement()

y축으로 30%이상 이동시 해당 방향의 끝까지 이동.

### onBtnClick( comp, info )

makeButton으로 만든 버튼을 클릭했을때 호출되는 함수, 객체에 저장해둔 value값을 반환.

* **comp** `<AButton>` 버튼 객체
* **info** `<Object>` listener 의 이벤트 함수에 두번째 파라미터로 전달되는 값

### onFlexBtnClick( comp )

플렉스 레이아웃에 존재하는 버튼을 클릭.</br>
버튼의 인덱스 값과 슬라이드 뷰의 아이템 인덱스 값을 이용.

- **comp** `<AButton>`

### removeAllItems()

슬라이드 안의 모든 아이템을 제거하고 inx를 0으로 초기화.<br/>
버튼 뷰가 있다면 선택 버튼도 해제.

```js
this.slideView.removeAllItems();
```

### updatePosition( pWidth, pHeight )

슬라이드뷰 자체가 리사이즈되거나 부모가 변경되었을 때, 위치 및 크기를 재계산하고 자식 뷰들도 갱신.

* **pWidth** `<Number>` 부모의 너비
* **pHeight** `<Number>` 부모의 높이

```js
this.slideView.updatePosition(800, 400)
```

### stopSlide()

사용자가 드래그 도중에 슬라이드를 멈추도록 하여, 현재 인덱스 위치로 슬라이드를 복원.