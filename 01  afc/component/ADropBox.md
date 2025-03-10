# ADropBox
> **Extends**: AComponent

**ADropBox** 는 사용자가 클릭했을 때 선택할 수 있는 **드롭다운 리스트**를 제공하는 컴포넌트.<br/>
검색어를 입력하여 리스트를 필터링 하는 기능도 포함될 수 있으며, 선택된 아이템 데이터를 내부에서 쉽게 관리 가능.

## Static Variables

### ADropBox.inParent `<Boolean>`
드롭다운 리스트를 부모 컨테이너 내부에 표시할 지 여부를 결정하는 플래그.
	
	* true 라면, 부모 컨테이너 영역 안에서 리스트가 펼쳐진다.

```javascript
ADropBox.inParent = false;
```

### ADropBox.openedDropBox `<ADropBox>` or `<null>`

현재 화면에 열려 있는 드롭박스 인스턴스를 저장.

	* 동시에 여러 **ADropBox**를 열어두지 않도록 관리하는데 사용.

```javascript
ADropBox.openedDropBox = null;
```

### ADropBox.dropBoxH `<Number>`

드롭박스가 펼쳐졌을 때 리스트팝업의 최대 높이를 표시.

```javascript
ADropBox.dropBoxH = 300;
```

###  ADropBox.itemHeight `<Number>` or `<null>`
	
리스트 내부의 아이템(단일 li)의 높이를 지정.

```javascript
ADropBox.itemHeight = null;
```


## Instance Variables

### focusClass `<String>`

아이템에 포커스가 갔을 때 적용할 CSS 클래스 이름

### isTabable `<Boolean>`

탭 키를 사용하여 드롭박스 사이를 이동할 수 있는지 여부를 설정.

### items `<Array>`

DropBox 클릭 시 표시될 아이템들의 배열.

### normalClass `<String>`

아이템이 일반 상태일 때 적용할 CSS 클래스 이름

### openDir `<Boolean>`

DropBox를 펼칠 방향 (true : 하단으로 펼침, false: 상단으로 펼침)


### selectClass `<String>`

아이템이 선택된 상태일 때 적용할 CSS 클래스 이름

### selIndex `<Number>`

현재 선택되어있는 아이템의 인덱스를 표시. (기본값: **-1**)

### textfield `<HTMLElement>` or `<null>`

내부 **<input\>** 요소를 참조 (드롭박스의 텍스트 표시부)

### dropBtn  `<HTMLElement>` or `<null>`

내부 **<span\>** 요소 (드롭박스를 여는 버튼 역할)

### openDir `<Boolean>`

드롭박스를 펼칠 방향 (**true**: 아래로, **false**: 위로)

### useDropBox `<Boolean>`

드롭다운 사용 여부 (**false**면 리스트가 열리지 않음)

### listPopup `<AFloat>` or `<null>`

실제로 펼쳐진 리스트 팝업(**AFloat**) 객체 참조

### scrollArea `<jQueryObject>` or `<null>`

드롭다운 리스트(**<ul\>**)를 감싸는 스크롤 영역

### isEnableSM `<Boolean>`

**ScrollManager** 를 사 용해 터치 스크롤을 구현할지 여부

### isTabable `<Boolean>`

탭키로 포커스 이동이 가능한지 여부 (기본값: **true**)

### isReadyOnly `<Boolean>`

텍스트 입력이 불가능하고 읽기 전용 상태인지(**true** = read-only)

## Static Methods

### ADropBox.getOpenedDropBox()

현재 열려 있는 **ADropBox**를 반환하는 Class Method.<br/>이 Method 는 ADropBox 클래스의 인스턴스를 생성하지 않고도 호출할 수 있으며, DropBox의 정보를 얻는데 사용.

- **Returns** `<ADropBox>`

```javascript
ADropBox.getOpenedDropBox = function() {
	return ADropBox.openedDropBox;
}
```

### ADropBox.setOpenedDropBox(dropbox)

현재 열려 있는 **ADropBox** 인스턴스를 설정

```javascript
ADropBox.setOpenedDropBox = function(dropbox) {
	ADropBox.openedDropBox = dropbox;
}
```

## Instance Methods

### addItem( text, data )

DropBox에 새로운 아이템을 추가.

- **text** `<String>` 아이템 이름
- **data** `<Any>` 아이템에 저장될 데이터
- **Returns** `<Object>` 아이템

```js
let data; //아이템에 저장될 데이터, 형식 자유
dropBox.addItem('컴포넌트에 보이는 이름', data);
```

### bindData( ulObj )

DropBox 내부에서 **검색어 필터링**을 수행하여, 해당 목록에 아이템을 동적으로 추가.<br/>
검색어는 **getEditText()**로 가져오며, **readOnly**가 아니고 검색어가 존재하면 필터링

- **ulObj**  `<HTML Object>` 
- **Returns** `<boolean>`

### clearSelectItem()

현재 선택된 아이템을 초기화하여 선택된 상태가 없도록 함.

### enableScrlManagerY()

iOS 환경에서 부드러운 스크롤을 구현하기 위해 ScrollManager 를 활성화하는 내부 메서드

### enableScrollManager()

**isEnableSM = true** 로 설정해 터치 스크롤 매니저를 사용하지 여부를 제어

### getDataType()

내부 **<input\>** 요소의 type 을 반환

- **Returns**  `<String>`

### getEditText()

현재 **<input\>** 요소에 표시된 텍스트를 반환

- **Returns** `<String>`

### getItem( index )

특정 인덱스의 아이템 객체를 반환

- **index** `<String>` 아이템 위치
- **Returns** `<Object>`

### getItemData( index )

특정 인덱스의 아이템 data 필드 값을 반환

- **index** `<String>` 아이템 위치
- **Returns** `<String>`

### getItems()

DropBox에 있는 모든 아이템을 배열 형태로 반환.

- **Returns** `<Array Object>`

### getItemSize()

DropBox의 아이템 개수를 반환.

- **Returns** `<Number>`

### getItemText( index )

특정 인덱스의 아이템 text 필드 값을 반환

- **index** `<String>` 아이템위치
- **Returns** `<String>`

### getQueryData( dataArr, keyArr, queryData )

컴포넌트가 갖고 있는 정보를 keyArr 의 정보에 따라 dataArr에 채움.<br/>dataArr은 AQueryData 특정부분의 참조자.

- **dataArr** `<Array>` [ {key1:value, key2:value ...}, {}, ... ]
- **keyArr** `<Array>` [ key1, key3, key10 ]
- **queryData** `<AQueryData>` AQueryData의 전체 값, 필요시 참조

### getSelectedIndex()

현재 선택된 아이템의 인덱스를 반환.

- **Returns** `<Number>` (**-1**은 선택 없음)

### getSelectedItem()

현재 선택된 아이템 객체를 반환.

- **Returns** `<Object>`

### getSelectedItemData( key )

선택 아이템의 data 객체(혹은 그 일부 필드값)를 반환<br/>
key를 지정하면 item.data[key]값을 반환.

- **key** `<String>` 키 값
- **Returns** `<Any>`

### getSelectedItemText()

선택 아이템의 text 값을 반환

- **Returns** `<String>`

### getTextAlign()

내부 **<input\>** 의 텍스트 정렬을 반환

- **Returns** `<String>`

### indexOfData( data )

아이템 배열에서 data와 같은 값을 가진 인덱스를 탐색

- **data** `<String>` 아이템 데이터
- **Returns** `<Number>` (해당 아이템이 없으면 **-1**)

### indexOfText( text )

아이템 배열에서 text 와 같은 값을 가진 인덱스를 탐색

- **text** `<String>` 아이템 이름
- **Returns**  `<Number>` (해당 아이템이 없으면 **-1**)


### isMoreScrollBottom()

DropBox의 하단으로 더 스크롤할 수 있는지 여부를 반환.

- **Returns** `<Boolean>`

### isMoreScrollTop()

DropBox의 상단으로 더 스크롤할 수 있는지 여부를 반환.

- **Returns** `<Boolean>`


### isScroll()

DropBox가 스크롤 가능한지 여부를 반환.

- **Retunrs** `<Boolean>`

### listPopupClose()

열려 있는 드롭다운 팝업을 닫음.

### openBox()

DropBox를 펼침. (내부적으로 AFloat을 생성하여 리스트를 표시)<br/>
화면 바운더리와 비교해 자동으로 위/아래에 나타나도록 처리.

### removeAll()

모든 아이템을 제거하고 선택 상태를 해제.

### removeItem( index )

특정 인덱스의 아이템을 제거.

- **index** `<String\>` 아이템 위치

### scrollYImplement()

터치 스크롤 이벤트를 등록하는 내부 로직(iOS 환경용)
<br /> **enableScrlManagerY()**를 통해 호출.

### selectItem( index )

특정 인덱스의 아이템을 선택하고, 텍스트 필드를 해당 아이템의 text로 변경.

- **index** `<String>` 아이템 위치

### selectItemByData( data )

**data** 값을 갖는 아이템을 찾아 선택.

- **data** `<String>` 아이템 데이터

### selectItemByText( text )

**text** 값을 갖는 아이템을 찾아 선택.

- **text** `<String>` 아이템명

### setData( dataArr )

DropBox 아이템을 일괄 설정.

- **dataArr** 데이터 배열

```js
dropBox.setData(['사과', '바나나']);
```

### setDataType( dataType )

내부 **<input\>**의 type 속성을 설정.

- **dataType** `<String>` 텍스트 필드 타입

```js
dropBox.setDataType('text');
dropBox.setDataType('tel');
dropBox.setDataType('password');
```

### setDropBoxHeight( height )

**드롭박스 펼쳐질 최대 높이**를 지정. (기본값: `300`)
<br/>이 함수는 openBox가 호출되어서 open되기전에 호출.

- **height** `<Number>` 높이 값


### setEditText( text )

내부 **<input\>**에 표시될 텍스트를 설정.

- **text** `<String>` 텍스트

### setItem( index, text, data )

특정 인덱스의 아이템을 **{text, data}**로 변경.

- **index** `<String>` 아이템 위치
- **text** `<String>` 아이템 명
- **data** `<Any>` 아이템 데이터

```js
let data; //아이템에 저장될 데이터, 형식은 자유
dropBox.setItem(1, '아이템명', data);
```


### setItemData( index, data )

특정 인덱스 아이템의 data만 변경.

- **index** `<String>` 아이템 위치
- **data** `<Any>` 아이템 데이터

```js
let data; //아이템에 저장할 데이터, 형식은 자유
dropBox.setItemData(1, data);
```

### setItems( items )

DropBox에 모든 아이템을 일괄 설정 (**items** 는 **{text, data}** 배열)
<br/> 기존 items를 대체.

- **items** `<Object>` 아이템 객체

```js
let text1='텍스트1', data1 = 0;
let text2='텍스트2', data2 = 1;
.
.
dropBox.setItems([{ 'text':text1, 'data':data1 },{ 'text':text2, 'data':data2 }...]);
```


### setItemText( index, text )

특정 인덱스 아이템의 **text**만 변경.

- **index** `<String>` 아이템 위치
- **text** `<String>` 아이템 이름

```js
dropBox.setItemText(2,'아이템명');
```

### setOpenDirection( isDown )

DropBox를  펼칠 방향을 설정.

- **isDown** `<String>` 하단 방향 여부

```js
dropBox.setOpenDirection(true); // 밑으로 오픈
dropBox.setOpenDirection(false); // 위로 오픈
```

### setQueryData( dataArr, keyArr, queryData )

파라미터로 넘어온 dataArr 값을 keyArr 의 정보를 참조하여 컴포넌트에 세팅. <br/>dataArr은 AQueryData 특정부분의 참조자.<br/>

- **dataArr** `<Array>` [ {key1:value, key2:value ...}, {}, ... ]
- **keyArr** `<Array>` [ key1, key3, key10 ]
- **queryData** `<AQueryData>` AQueryData의 전체 값, 필요시 참조


### setReadOnly( isReadOnly )

내부 **<input\>** 을 읽기 전용(readonly)으로 설정/해제

- **isReadOnly** `<Boolean>` 읽기 전용 여부


### setSelectClass( selectClass )

DropBox 리스트에서 선택된 아이템에 적용될  CSS 클래스를 지정

- **selectClass** `<String>` 클래스 이름

### setTextAlign( align )

내부 **<input\>** 의 텍스트 정렬 설정

- **align** `<String>` 정렬 속성

```js
dropBox.setTextAlign('left');
dropBox.setTextAlign('center');
dropBox.setTextAlign('right');
```

### setUseDropBox( useDropBox )

DropBox 사용여부를 설정. (기본값 : true)

- **useDropBox** `<Boolean>` **true**:사용 **false**:미사용

### updatePosition( pWidth, pHeight )

부모의 너비/높이가 갱신될 때, 드롭박스의 위치를 재계산<br/>
호출 시 이미 펼쳐져 있는 팝업을 닫음.

* **pWidth** `<Number>` 부모의 너비
* **pHeight** `<Number>` 부모의 높이