# ASplitView

> **Extends**: AComponent

**ASplitView** 는 컨테이너처럼 스플릿 기능을 갖고 있음.<br/>
**createSplit** 호출 시 비어있는 item 을 생성.<br/>
이후 분할된 곳에 **setSplitView** 함수를 호출하여 뷰를 셋팅 또는 로드.


## Static Variables

### ASplitter.BAR_COLOR `<String>`

분할 프레임 사이의 스플릿바 색상

* **Default** #bbb

## Instance Variables

### splitter

* this.splitter는 **ASplitter** 인스턴스이며, **ASplitView** 내부에서 스플릿 기능을 제어.
* null일 경우 스플릿이 아직 생성되지 않은 상태를 의미.


## Instance Methods

### appendSplit( splitSize )

분할 아이템을 마지막에 위치에 추가.

- **splitSize** `<Number>` 새로 추가되는 아이템의 크기
	- **splitDir** 가 **'row'**(좌우 분할)일 때 가로 크기,
	- **'column'**(상하 분할)일 때 세로 크기를 의미.

```javascript
this.splitView.appendSplit(120);
```

### createSplit( count, sizeArr, splitDir, barSize )

내부에 여러 개의 분할 아이템을 생성.<br/>
생성된 프레임에는 아직 뷰가 없고, `setSplitView` 등을 잉용해 뷰를 붙일 수 있음.

- **count** `<Number>` 분할할 아이템의 개수
- **sizeArr** `<Array>` 각 아이템의 크기를 담는 배열
	-  **-1** 이 들어가면 남은 공간을 자동으로 차지.
	- 예: **[100, -1]** -> 첫 번째 아이템 100px, 두 번째는 나머지 공간
- **splitDir** `<String>` 분리 방향 
	- **row**: 좌우
	- **column**: 상하
- **barSize** `<Number>` 스플릿바의 두께

```js
this.splitView.createSplit(2, [100, -1], 'column', 5);
```


### destroySplit()

스플릿으로 나눠진 뷰(프레임)들을 제거하고, 사용 중인 리소스를 해체.<br/>
내부적으로 생성된 ASplitter 객체(**this.splitter**)를 정리.

```javascript
this.splitView.destroySplit();
```

### getSplit( inx )

특정 인덱스의 분할 프레임을 반환. (HTMLElement)

* **inx** `<Number>` 분할 아이템의 인덱스
* **Returns** `<HTMLElement>` 분할 아이템의 요소 

```javascript
const frameElement = this.splitView.getSplit(0);
console.log(frameElement); // 해당 프레임의 DOM
```

### getSplitBar( inx )

특정 인덱스의 스플릿바를 가져옴.

- **inx** `<Number>` 스플릿바 인덱스
- **Returns** `<HTMLElement>` 스플릿바의 DOM 요소

```javascript
const barElement = this.splitView.getSplitBar(0);
console.log(barElement);
```

### getSplitView( inx )

특정 인덱스의 분할 프레임 안에 설정된 뷰 객체를 반환.
 
- **inx** `<Number>` 아이템 인덱스
- **Returns** `<AView>` 분할 프레임에 설정된 뷰

```javascript
const firstView = this.splitView.getSplitView(0);
if (firstView) firstView.someMethod();
```


### includeChildView()

부모 뷰에서 자식 뷰를 포함시키기 위한 함수<br/>
현재 코드에서는 주석 처리되어 있으며, 필요 시 오버라이드 하여 사용 가능


### insertSplit( inx, splitSize, isAfter )

특정 위치에 새 분할 프레임을 삽입.

* **inx** `<Number>` 삽입할 아이템의 인덱스
* **splitSize** `<Number>` 삽입될 아이템의 크기
* **isAfter** `<Boolean>` **true**이면 해당 인덱스 뒤쪽에 삽입, **false**면 앞쪽에 삽입

```js
this.splitView.insertSplit(0, 100, true);
```

### onSplitChanged( splitFrame )

분할 프레임의 크기가 변경될 때 호출되어 해당 프레임에 있는 뷰의 **updatePosition()** 등을 호출해줄 수 있는 이벤트 콜백.

- **splitFrame** `<HTMLElement>` 분할 프레임 객체

```javascript
ASplitView.prototype.onSplitChanged = function(splitFrame) {
	if(splitFrame.view) {
		splitFrame.view.updatePosition();
	}
}
```
*(기본적으로 코드 내에 구현이 있으므로, 상황에 따라 오버라이드 가능.)*

### prependSplit( splitSize )

분할 아이템을 맨 앞에 추가.

- **splitSize** `<Number>` 추가할 아이템의 크기

```js
this.splitView.prependSplit(100);
```

### removeFromView()

자신을 부모 뷰에서 제거.<br/>
내부적으로 destroySplit()을 먼저 호출해 모든 분할 아이템을 정리한 뒤, **AComponent.prototype.removeFromView**를 호출.

```javascript
this.splitView.removeFromView();
```

### removeSplit( inx )

특정 인덱스의 분할 아이템을 제거.

- **inx** `<Number>` 제거할 아이템의 인덱스

```javascript
this.splitView.removeSplit(0);
```

### setSplitView( inx, view )

**inx** 에 해당하는 분할 아이템에 뷰를 설정.<br/>
**view**는 문자열일 경우 해당하는 뷰를 로드하여 생성 후 붙이고, AView 인스턴스이면 그대로 붙임.

- **inx** `<Number>`  분할 아이템 인덱스
- **view** `<String>` or `<AView>` 뷰 경로(레이아웃) 혹은 뷰 인스턴스
- **Returns** `<AView>` 설정된 뷰 객체

```js
this.splitView.setSplitView(0, 'Source/t1.lay').then((view) => {
	console.log('뷰가 로드 및 설정되었습니다.', view);
});

// AView 인스턴스를 바로 붙일 수도 있다.
const someView = new AView(...);
this.splitView.setSplitView(1, someView);
```

### updatePosition( pWidth, pHeight )

**ASplitView**의 위치나 크기가 변경되었을 때, 내부적으로 갱신 처리가 필요하면 호출. <br/>
내부에서 **this.splitter.updateSize()**를 호출하여 분할뷰들의 크기를 재조정.
 
- **pWidth** `<String>` or `<Number>` 부모로부터 전달받은 너비 정보
- **pHeight** `<String>` or `<Number>` 부모로부터 전달받은 높이 정보

```javascript
// 보통 프레임워크 내부적으로 자동 호출되지만,
// 직접 사이즈를 변경한 뒤 수동으로 호출 가능
this.splitView.setStyle('width', '800px');
this.splitView.updatePosition(800,null);
```