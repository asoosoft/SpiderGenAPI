# AFlexView
> **Extends** [AComponent](https://wikidocs.net/274979)

뷰의 크기를 균등하게 분할하여 배치할 수 있는 기능을 제공. 

주로 여러 개의 뷰를 수직 또는 수평으로 정렬하고, 각 뷰의 크기를 자동으로 조정하여 화면에 균등하게 배치하는 데 사용.

## Properties

### views `<AView Array>`

화면을 구성하기 위해 구분된 뷰(AView)들을 저장하는 배열.

### viewDirection  `<String>`

뷰의 방향을 설정하는 문자열로, 'column' 또는 'row' 값을 소유. 

초기값은 'column'이며, 이는 뷰가 세로 방향으로 정렬 됨을 의미.

## Instance Methods

### getView( index )
지정된 인덱스의 뷰를 반환.

- **index** `<Number>` 순번

- **Returns** `<AView>` 뷰 객체

```js
// FlexView ID : flexView 일경우
// 뷰가 2개 추가 됨. view01.lay, view02.lay

this.flexView.setViewDirection('row');
this.flexView.insertView('Source/view01.lay');
this.flexView.insertView('Source/view02.lay');
console.log(this.flexView.getView(0));
-------------------------------------------------------
view01 {element: ... }
```

### insertView( view, index )
지정된 인덱스에 뷰를 삽입하거나 인덱스가 없을 경우 뷰를 추가하며 문자열 또는 객체 타입의 뷰를 처리.

- **view** `<AView | String>` 뷰 객체 또는 뷰 Url

- **index** `<Number>` 추가할 뷰의 기준 순번

```js
// FlexView ID : flexView 일경우
// 뷰가 2개 추가 됨. view01.lay, view02.lay

this.flexView.setViewDirection('row');
this.flexView.insertView('Source/view01.lay');
this.flexView.insertView('Source/view02.lay');

console.log(this.flexView.getView(1));              // 순번이 1인 뷰
this.flexView.insertView('Source/view03.lay', 1);   // 순번이 1인 뷰 앞에 추가
console.log(this.flexView.getView(1));              // 순번이 1인 뷰
// Output: view02 {element: ... }
// Output: view03 {element: ... }
```


### removeAllViews()
컴포넌트에서 모든 뷰를 제거하고 뷰 배열을 초기화.

```js
// FlexView ID : flexView 일경우
// 뷰가 2개 추가 됨. view01.lay, view02.lay, view03.lay

this.flexView.setViewDirection('row');
this.flexView.insertView('Source/view01.lay');
this.flexView.insertView('Source/view02.lay');	
this.flexView.insertView('Source/view03.lay');	
	
console.log(this.flexView.views.length);
this.flexView.removeAllViews();             // 모두 삭제	
console.log(this.flexView.views.length);
// Output: 3
// Output: 0
```

### setViewDirection( direction )
뷰의 방향을 설정하고 해당 CSS 스타일을 적용.

- **direction** `<String>`: 'row'는 가로 방향, 'column'은 세로 방향

```js
// FlexView ID : flexView 일경우
// 뷰가 2개 추가 됨. view01.lay, view02.lay, view03.lay

this.flexView.setViewDirection('row');
console.log(this.flexView.viewDirection);
// Output: row
```

### removeFromView(onlyRelease)
부모 뷰에서 컴포넌트를 제거하고, 선택적으로 리소스를 해제.

- **onlyRelease** `<Boolean>`: 
- true일 경우, 실제로 컴포넌트를 제거하지 않고 연관된 리소스만 해제. 
- false일 경우, 컴포넌트를 완전히 제거.

```
// 예시: onlyRelease가 true일 경우
this.flexView.removeFromView(true);
// 컴포넌트는 화면에서 제거되지 않지만, 리소스는 해제.

// 예시: onlyRelease가 false일 경우
this.flexView.removeFromView(false);
// 컴포넌트는 화면에서 완전히 제거.
```

### updatePosition(pWidth, pHeight)
주어진 너비와 높이에 따라 컴포넌트와 자식 뷰의 위치를 업데이트.

- **pWidth** `<Number>`: 부모의 너비
- **pHeight** `<Number>`: 부모의 높이

이 메서드는 브라우저의 크기가 변경될 때 자동으로 호출되어, 컴포넌트의 레이아웃을 적절히 조정.