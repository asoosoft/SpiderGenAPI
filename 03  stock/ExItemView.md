# EXItemView
> **Extends**: AView

종목 선택 뷰

종목을 선택할 수 있는 뷰 컴포넌트로,  
드롭다운, 검색, 최근 선택한 종목 등을 관리하는 기능을 제공.

<br/>

## Properties

### frwName `<String>`

해당 뷰가 속한 프레임워크 네임스페이스를 정의

-   **default** : stock
<br/>

### dropMaxCount `<Number>`

dropView에 표시되는 종목 최대 갯수

- 리스트에서 보여줄 최대 개수를 제한.
- **default** :  5

```js
this.itemView.setDropMaxCount(10);
```

<br/>

### typeArr `<Array>`

종목 정보를 담고 있는 배열. 
- 특정 타입의 종목만 필터링하여 검색할 때 사용 됨.

```js
const types = ["KOSPI", "KOSDAQ"];
this.itemView.setTypeArr(types);
```

<br/>

### **exceptArr** `<Array>`

검색 시 제외할 키 배열.
-   특정 조건의 종목을 검색 결과에서 필터링할 때 사용 됨.

```js
const exceptKeys = ["외국기업", "우선주"];
this.itemView.setExceptArr(exceptKeys);
```


### itemInfo `<Array>`

현재 설정된 종목 정보를 담고 있는 배열.

-   **[종목코드, 종목명, 분류값]** 형식으로 저장 됨.

```js
const itemInfo = this.itemView.getItemInfo();
```

### unshift `<Boolean>`

종목 검색 시 히스토리에 추가되는 순서를 결정.

-   **true**이면 최근 검색한 종목이 가장 앞으로 추가.
-   **default** : false

<br/>

## Static Methods


### EXItemView.getHistoryInfo()

히스토리 객체를 반환.

* **Returns** `<Object>` 히스토리 객체

```js
EXItemView.getHistoryInfo();
```

<br/>

### EXItemView.getMasterInfo()

종목 정보를 관리하는 객체를 반환.

* **Returns** `<Object>` 종목 마스터 객체

```js
EXItemView.getMasterInfo();
```

<br/>

## Instance Methods

### getItemInfo()

종목뷰에 설정된 종목 정보를 반환.

* **Returns** `<Array>`

```js
const itemInfo = this.itemView.getItemInfo(); 
console.log(itemInfo);
```

<br/>

### openDrop( itemsArr )

첫 번째 컴포넌트 아래에 **dropView**를 출력

- **dropView**에는 종목 정보가 리스트 형태로 표시되며,  
선택 시 해당 종목이 종목뷰에 반영 됨.

* **itemsArr** <Array> 종목 정보 배열

```js
const itemsArr = EXItemView.getHistoryInfo().search();
this.itemView.openDrop(itemsArr);
```

<br/>

### openSearchWindow()

종목 검색을 위한 풀팝업을 로드. 

팝업에서 종목을 선택하면 종목뷰에 종목 정보를 설정

```js
this.itemView.openSearchWindow();
```

<br/>

### setHistoryInfo( obj )

종목 뷰에서 쓰일 히스토리 객체를 지정

* **obj** <Object> 히스토리 객체

```js
EXItemView.setHistoryInfo(new HistoryInfo());
```

<br/>

### setItemInfo( itemInfo, isReport )

특정 종목을 선택하여 종목뷰에 반영
isReport가 **true**이면 **change** 이벤트가 발생.

>- 종목 세팅 순서<br/>1. 종목 정보가 없으면 히스토리 객체에서 최근종목정보를 가져온다. (history:getRecent)<br/>2. 최근종목정보도 없으면 기본종목정보를 가져와 세팅한다. (master:getDefaultItemInfo)<br/>3. 히스토리 객체에 최종 종목정보를 세팅한다. (history:set)<br/>4. 히스토리 정보를 저장한다. (history.saveInfo)<br/>5. 첫번째 자식 컴포넌트에 setText가 있으면 종목정보의 1번째 위치의 값인 종목표현명으로 세팅한다.<br/>6. isReport값이 true이면 change 이벤트를 발생시킨다.

* **itemInfo** `<Array>` 종목 정보 배열 [코드, 종목표현명, 분류값]
* **isReport** `<Boolean>` change 이벤트 전달 여부

```js
this.itemView.setItemInfo(['005930', '삼성전자', '001'], true);
```

<br/>

### setMasterInfo( obj )

종목뷰에서 사용할 **종목 마스터 객체**를 설정

필수 메서드:

-   **getDefaultItemInfo()**
-   **getItem(code, type)**
-   **get()**
-   **getInfoByItem(item)**


 - **obj** `<Object>` 종목 마스터 객체

```js
EXItemView.setMasterInfo(new MasterInfo());
```

<br/>

### setText( text )

종목 검색어를 설정.

* **text** `<String>` 종목 검색어

```js
EXItemView.setText("삼성전자");
```

<br/>

### getItem()

현재 설정된 종목 객체를 반환.

* **Returns** `<Object>` 종목 객체

```js
EXItemView.getItem();
```

<br/>

### setTypeArr( typeArr )

종목 타입 배열을 저장.

* **typeArr** `<Array>` Type 배열

```js
EXItemView.setTypeArr(["KOSPI", "KOSDAQ"]);
```

<br/>

### getTypeArr()

설정된 종목 타입 배열을 반환.

* **Returns** `<Array>` Type 배열 

```js
EXItemView.getTypeArr();
```

<br/>

### setExceptArr( exceptArr )

종목 검색시 제외할 키 배열을 저장.

* **exceptArr** `<Array>` 제외할 key 배열

```js
EXItemView.setExceptArr(["우선주", "외국기업"]);
```

<br/>

### getExceptArr()

제외할 키 배열을 반환.

* **Returns** `<Array>` key 배열 

```js
const excludedKeys = EXItemView.getExceptArr();
```

<br/>

### setDropMaxCount( dropMaxCount )

dropView에 표시할 최대 종목 개수를 설정.

* **dropMaxCount** `<Number>` dropbox 윈도우에 표시될 종목 최대값

```js
EXItemView.setDropMaxCount(dropMaxCount);
```

<br/>

### getDropMaxCount()

dropView에 표시할 최대 종목 개수를 반환.

* **Returns** `<Number>` dropbox 윈도우에 표시될 종목 최대값

```js
const maxCount = EXItemView.getDropMaxCount();
```

<br/>



### onSearchTextFieldChange()

검색 윈도우에서 텍스트 입력 변경 시 호출되는 함수.

<br/>

### onSearchGridSelect()

검색 윈도우에서 종목을 선택했을 때 호출되는 함수.

<br/>

### onDropGridSelect()

드롭다운에서 종목을 선택했을 때 호출되는 함수.

<br/>
<br/>


### resetSearch()

검색 필드를 초기화.

```js
this.itemView.resetSearch();
```

### setPlaceholder( placeholder )

 검색 필드의 placeholder를 설정

```js
this.itemView.setPlaceholder("종목을 입력하세요.");
```

### filterItems( criteria )

 특정 조건을 기반으로 종목 리스트를 필터링.

- **criteria** `<Function>` : 필터링 함수


```js
this.itemView.filterItems(item => item[2] === "KOSDAQ");
```




### getRecentItems()

최근 검색한 종목 리스트를 반환.

**Returns** `<Array>`

-   최근 검색된 종목 배열

```js
const recentItems = this.itemView.getRecentItems();
```