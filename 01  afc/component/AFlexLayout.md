# AFlexLayout
> **Extends** ALayout

플렉스 레이아웃 컴포넌트

> 유동적인 레이아웃을 형성할 수 있는 컴포넌트로, 화면 크기와 컴포넌트 크기에 따라 유연하게 배치


<br/>

## Instance Methods

### getCompIndex( acomp )

레이아웃 내부에서 특정 컴포넌트의 위치(인덱스)를 반환

-   **acomp**  `<AComponent>` 위치 정보를 알고 싶은 컴포넌트
    
-   **Returns**  `<Number>` 컴포넌트의 위치 인덱스 (없으면 -1 반환)

```js
//레이아웃 컴포넌트 ID : flexLayout
//레이아웃 컴포넌트 내에 3개 버튼 존재 ID는 각각 : btn1, btn2, btn3 
const result = this.flexLayout.getCompIndex(this.btn2);
console.log(result); // 1
```

<br/>

### getFlexAlign( index )

지정된 인덱스의 아이템 **align-self** 속성을 반환

-   **index**  `<Number>` 아이템의 순번
    
-   **Returns**  `<String>`  **align-self** 값 (auto/stretch/center/flex-start/flex-end/baseline 등)

```js
//레이아웃 컴포넌트 ID : flexLayout
const result = this.flexLayout.getFlexAlign(1);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
auto    
```

<br/>

### getFlexBasis( index )

아이템의 flex-basis 값을 반환

> flex-basis는 아이템의 기본 크기를 설정하는 속성.

**Returns**  `<String>` flex-basis 값 (auto 또는 특정 크기)

```js
//레이아웃 컴포넌트 ID : flexLayout
const result = this.flexLayout.getFlexBasis(1);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
auto   
```

<br/>


### getFlexDirection()

flex-direction 속성을 반환

-   **Returns**  `<String>` (row, row-reverse, column, column-reverse)

```js
const direction = this.flexLayout.getFlexDirection();
console.log(direction); // 'row'
```

### setFlexDirection( direction )

flex-direction을 설정

-   **direction**  `<String>` (row, row-reverse, column, column-reverse)

```js
this.flexLayout.setFlexDirection('column');
```





### getFlexGrow( index )

index 순번의 아이템 flex-grow 값을 반환.

>  flex-grow는 flex-item 요소가, flex-container 요소 내부에서 할당 가능한 공간의 정도를 설정.

- **index** `<Number>` 순번

- **Returns** `<Number>` flex-grow 값

```js
//레이아웃 컴포넌트 ID : flexLayout

const result = this.flexLayout.getFlexGrow(0);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
1       
```

<br/>

### getFlexOrder( index )

index 순번의 아이템 order 값을 반환. 
> order 속성은 flex item의 배치 순서를 제어하는 속성

>기본값은 ‘0‘이며 flex-direction 속성의 방향값(row, row-reverse, column, column-reverse)을 기준으로 낮은 숫자를 먼저 배치하고 높은 숫자를 나중에 배치

- **index** `<Number>` 순번

- **Returns** `<Number>` flex order 값

```js

//레이아웃 컴포넌트 ID : flexLayout
//버튼의 flex order 값이 각각 1, 2로 설정 되었을 경우

const result = this.flexLayout.getFlexOrder(1);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
2    
```

<br/>

### getFlexShrink( index )

index 순번의 아이템 flex-shrink 값을 반환.

>  flex-shrink은 flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 flex-shrink 속성을 사용
>  
> 설정된 숫자값에 따라 flex-container 요소 내부에서 flex-item 요소의 크기가 축소 됨.

- **index** `<Number>` 순번

- **Returns** `<Number>` flex-shrink 값

```js
//레이아웃 컴포넌트 ID : flexLayout

const result = this.flexLayout.getFlexShrink();
console.log(result);
------------------------------------------------------
// 콘솔창 결과
1		  
```

<br/>

### getFlexStringVal( index, valType )

index 순번 아이템의 valType 명의 flex css 속성값을 반환

- **index** `<String>` 순번

- **valType** `<String>` 키값

- **Returns** `<String>`

```js
//레이아웃 컴포넌트 ID : flexLayout

const result = this.flexLayout.getFlexStringVal(1, 'left');
console.log(result);
------------------------------------------------------
// 콘솔창 결과
0px		  
```

<br/>

### getFlexVal( index, valType )

index 순번 아이템의 valType 명의 flex css 속성값을 반환

- **index** `<String>` index
- **valType** `<String>` 키값

- **Returns** `<int>`

```js
//레이아웃 컴포넌트 ID : flexLayout

const result = flexLayout.getFlexVal(1, 'left');
console.log(result);
------------------------------------------------------
// 콘솔창 결과
0px 	
```

<br/>



### getFlexPadding( index )

index 번째 아이템의 padding 값을 반환

- **index** `<Number>` 순번

- **Returns** `<String>` padding 값

```js 
//레이아웃 컴포넌트 ID : flexLayout
//레이아웃 컴포넌트 내에 bt1, bt2 버튼이 존재한다.

const result = this.flexLayout.getFlexPadding(0); // 0:bt1
console.log(result);
------------------------------------------------------
// 콘솔창 결과
0px 
```

<br/>


### getFlexMargin( index )

index 번째 아이템의 margin 값을 반환

- **index** `<Number>` 순번

- **Returns** `<String>` margin 값

```js 
//레이아웃 컴포넌트 ID : flexLayout
//레이아웃 컴포넌트 내에 bt1, bt2 버튼이 존재한다.

const result = this.flexLayout.getFlexMargin(0);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
0px 
```

<br/>

### copyFlexProperty( srcComp )

srcComp로부터 flex 관련 속성을 복사하여 현재 컴포넌트에 적용

-   **srcComp** `<AComponent>` 복사할 flex 속성을 가진 컴포넌트
    
-   **Returns** `<void>`
    

```js
//레이아웃 컴포넌트 ID : flexLayout
const srcComp = this.flexLayout.getItemComp(0);  // 첫 번째 아이템 컴포넌트
this.flexLayout.copyFlexProperty(srcComp);  // 첫 번째 아이템의 flex 속성 복사
```

<br/>

### copyItemProperty( srcComp, inx )

srcComp의 특정 인덱스(`inx`)에 해당하는 flex 속성을 복사하여 현재 컴포넌트의 동일 인덱스에 적용

-   **srcComp** `<AComponent>` 복사할 속성을 가진 컴포넌트
    
-   **inx** `<Number>` 복사할 아이템의 인덱스
    
-   **Returns** `<void>`
    

```js
//레이아웃 컴포넌트 ID : flexLayout
const srcComp = this.flexLayout.getItemComp(0);  // 첫 번째 아이템 컴포넌트
this.flexLayout.copyItemProperty(srcComp, 1);  // 첫 번째 컴포넌트의 속성을 두 번째 컴포넌트에 복사
```
<br/>


### initLayoutComp( evtListener )

레이아웃 내부의 모든 컴포넌트를 초기화. 각 컴포넌트는 **evtListener** 를 통해 이벤트를 리스닝하며, 레이아웃이 초기화될 때 해당 컴포넌트들의 초기화가 이루어짐

-   **evtListener** `<Object>` 이벤트 리스너
    
-   **Returns** `<void>`
    

```js
//레이아웃 컴포넌트 ID : flexLayout
this.flexLayout.initLayoutComp(eventListener);
```
<br/>

### layComponent( acomp, inx, flexGrow )

컴포넌트를 inx 순번의 컴포넌트 앞에 추가.

- **acomp** `<String>` 컴포넌트
- **inx** `<Number>`  아이템 순번
- **flexGrow** `<String>` 컴포넌트들이 차지할 너비들에 대한 증가형 숫자를 지정 (flex-grow css값)

- **Returns** `<HTML Object>`

```js
//컴포넌트 ID가 flexLayout 일경우

const btn = new AButton(); // 버튼컴포넌트
btn.init();
const item = this.flexLayout.layComponent(btn, 2, 1); //2번째 아이템 앞에 같은 너비로 추가한다.
```

<br/>

### setFlexAlign( index, alignSelf )

index 순번에 있는 아이템의 align-self 값을 지정한다.

- **index** `<Number>` 순번
- **alignSelf** `<String>` align-self 값 (auto/stretch/center/flex-start/flex-end/baseline)

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃의 1번째 index에 있는 아이템의 align-self값을 center로 지정

this.flexLayout.setFlexAlign(1, 'center');
```

<br/>

### setFlexBasis( index, flexBasis )

index 순번에 있는 아이템의 flex-basis 값을 지정. flex-basis는 아이템의 기본 크기 값이고 auto가 기본값.

- **index** `<Number>` 순번
- **flexBasis** `<String>` flex-basis 값 (number/auto)

```js
//레이아웃 컴포넌트 ID : flexLayout
//레아이웃의 0번째 아이템의 flex-basis css value값을 10px로 지정한다.
//value의 단위는 px, em, rem, % 모두 사용 가능.

this.flexLayout.setFlexBasis(0, 10);
```

<br/>

### setFlexGrow( index, flexGrow )

아이템의 flex-grow 값을 설정

-   **index**  `<Number>` 아이템의 순번
    
-   **flexGrow**  `<Number>`  flex-grow 값

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃의 아이템이 3개 있다고 가정하고
//순서대로 1:1:2의 크기로 비율을 지정하고싶을떄 다음과 같이 사용한다.

this.flexLayout.setFlexGrow(0,1);
this.flexLayout.setFlexGrow(1,1);
this.flexLayout.setFlexGrow(2,1);
```

<br/>

### setFlexOrder( index, flexOrder )

아이템의 order 값을 설정

-   **index**  `<Number>` 아이템의 순번
    
-   **order**  `<Number>` 배치 순서 값

```js
//컴포넌트 ID가 flexLayout 일경우
//0번 째 index의 아이템의 order 속성을 1로 지정함

this.flexLayout.setFlexOrder(0,1);
```

<br/>

### setFlexShrink( index, flexShrink )

아이템의 flex-shrink 값을 설정

-   **index**  `<Number>` 아이템의 순번
    
-   **flexShrink**  `<Number>`  flex-shrink 값

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃의 0번째 index에 있는 아이템의 flex-shrink값을 2로 지정한다.

this.flexLayout.setFlexShrink(0, 2);
```

<br/>

### setFlexVal( index, valType, val )

index 순번 아이템의 flex css 속성중 valType 명의 속성값을 val 값으로 설정

- **index** `<String>` 순번
- **valType** `<String>` css 속성명
- **val** `<String>` css 값

```js
//컴포넌트 ID가 flexLayout 일경우

this.flexLayout.setFlexVal(0, 'left','100px');
```

<br/>

### indexOfItem( item )

레이아웃 컴포넌트 내의 item 순번을 반환

- **item** `<JQuery Object>` 아이템

- **Returns** `<Number>` 아이템 순번

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

const item = this.bt1.$ele.parent();
const result = this.flexLayout.indexOfItem(item);
console.log(result); // 0
------------------------------------------------------
// 콘솔창 결과
0 	
```

<br/>


### getItem( inx )

레이아웃 컴포넌트 내에 inx 번째 아이템을 반환

- **inx** `<Number>` 순번

- **Returns** `<JQuery Object>` 아이템 객체

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

const result = this.flexLayout.getItem(0);
console.log(result);
------------------------------------------------------
// 콘솔창 결과
jQuery.fn.init [div, prevObject: jQuery.fn.init(2)]
```

<br/>


### getAllLayoutComps()

레이아웃 내에 있는 모든 컴포넌트를 배열로 반환

-   **Returns** `<Array>` 레이아웃 내 모든 컴포넌트 배열

```js
//레이아웃 컴포넌트 ID : flexLayout
const comps = this.flexLayout.getAllLayoutComps();
console.log(comps);  // 레이아웃 내 모든 컴포넌트 출력
``` 

<br/>




### getItemComp( inx )

레이아웃 컴포넌트 내에 inx 번째 컴포넌트를 반환

- **inx** `<Number>` 순번

- **Returns** `<AComponent>` 컴포넌트

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

const result = this.flexLayout.getItemComp(1);
console.log(result);
console.log(result.getComponentId());
------------------------------------------------------
// 콘솔창 결과
AButton{element:button ... }
bt2
```

<br/>


### removeAllItems()

레이아웃 내부의 모든 아이템을 제거

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

console.log(this.flexLayout.getAllLayoutComps());
------------------------------------------------------
(2) [AButton, AButton]


const result = this.flexLayout.removeAllItems();
console.log(this.flexLayout.getAllLayoutComps());
------------------------------------------------------
[]
```

<br/>


### refreshFlexLayout()

레이아웃을 갱신하여 UI를 다시 렌더링

```js
//컴포넌트 ID가 flexLayout 일경우
this.flexLayout.refreshFlexLayout();
```

<br/>


### collapseAll()

모든 아이템을 접는 기능 (예제 프로젝트에서 지원하는 경우 추가됨)

```js
this.flexLayout.collapseAll();
```





### setFlexPadding( index, padding )

레이아웃 컴포넌트의 index 번째 아이템에 padding 값을 설정

- **index** `<Number>` 순번

- **padding** `<String>` padding 값

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

console.log(this.flexLayout.getFlexVal(1, 'padding'));
------------------------------------------------------
0px


this.flexLayout.setFlexPadding(1, '10px');
console.log(this.flexLayout.getFlexVal(1, 'padding'));
------------------------------------------------------
10px
```

<br/>


### setFlexMargin( index, margin )

레이아웃 컴포넌트의 index 번째 아이템에 margine 값을 설정

- **index** `<Number>` 순번

- **margin** `<String>` margin 값

```js
//컴포넌트 ID가 flexLayout 일경우
//레이아웃 컴포넌트 내에 버튼 bt1, bt2 순으로 존재 할 경우

console.log(this.flexLayout.getFlexVal(1, 'margin'));
------------------------------------------------------
0px


this.flexLayout.setFlexMargin(1, '10px');
console.log(this.flexLayout.getFlexVal(1, 'margin'));
------------------------------------------------------
10px
```

<br/>
<br/>
<br/>