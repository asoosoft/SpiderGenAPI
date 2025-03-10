# APagingBar

> **Extends**: [AView](https://wikidocs.net/275135)  

APagingBar는 AView를 확장한 컴포넌트로, 페이지네이션을 구현할 수 있는 툴바를 제공

이 컴포넌트는 총 페이지 수, 현재 페이지 수 등을 관리하고 이를 기반으로 페이징 뷰를 표시

## Properties 

페이지네이션의 상태와 동작을 설정하고 관리하는 데 사용

- **totalPage**: 전체 페이지 수를 나타내는 속성으로, 페이지네이션의 범위를 설정하는 데 사용

- **currentPage**: 현재 페이지 번호를 나타내며, 사용자가 보고 있는 페이지를 의미

- **perPage**: 한 페이지에 표시할 레코드 수를 설정하는 속성

- **blockSize**: 한 번에 표시되는 페이지 번호의 개수를 설정

- **isReadOnly**: true로 설정하면 사용자가 툴바를 수정할 수 없도록 설정

- **isDisabled**: true이면 툴바가 비활성화되며, 사용자 입력이 불가능 


## Instance Methods  

### createElement(context)  
컴포넌트를 동적으로 생성할 때 사용되는 메서드로, init 함수가 실행되기 전에 호출

**context** `<String>`: 컴포넌트 생성 정보
 > 이 정보는 컴포넌트의 초기 설정을 위한 데이터로 사용

```js
pagingBar.createElement(context);
```

### init(context, evtListener)  

createElement 실행 후 컴포넌트를 초기화하는 메서드로, 내부 속성(childComp)을 설정한다

**context** `<String>`: 컴포넌트 생성 정보. 컴포넌트의 초기 상태를 설정하는 데 사용

**evtListener** `<Object>`: 이벤트 발생 시 수신할 객체. 이벤트 핸들링을 위한 리스너 객체

```js
pagingBar.init(context, evtListener);
```

### clone(obj)  

객체를 얕은 복사(shallow copy)하는 기능을 제공

이 메서드는 주어진 객체의 속성들을 새로운 객체에 복사하여 반환

얕은 복사는 객체의 참조를 복사하므로, 원본 객체와 복사된 객체는 동일한 참조를 공유

**obj** `<Object>`: 복사할 객체 <br>
> 이 객체의 속성들이 복사

**Returns**: `<Object>` 복사된 객체. <br>
> 입력 객체의 얕은 복사본을 반환

```js
var originalObj = { a: 1, b: { c: 2 } };
var clonedObj = pagingBar.clone(originalObj);

console.log(clonedObj); // { a: 1, b: { c: 2 } }
clonedObj.b.c = 3;
console.log(originalObj.b.c); // 3, 원본 객체도 영향을 받음
```

### isNumber(s)
주어진 값이 숫자인지 확인하는 함수  

**s** `<String>`: 확인할 값. 숫자인지 여부를 확인할 문자열

**Returns**: `<Boolean>` 숫자이면 true, 아니면 false. 입력 값이 숫자인 경우 true를 반환

```js
if (pagingBar.isNumber("123")) {
    console.log("숫자입니다.");
}
```

### setReadOnly(isReadOnly)  
툴바를 읽기 전용 상태로 설정  

**isReadOnly** `<Boolean>`: true이면 읽기 전용, false이면 수정 가능
> 툴바의 편집 가능 여부를 설정

```js
pagingBar.setReadOnly(true);
```

### setDisabled(isDisabled) 
툴바를 비활성화 상태로 설정 

**isDisabled** `<Boolean>`: true이면 비활성화, false이면 활성화
> 툴바의 활성화 상태를 설정.  

```js
pagingBar.setDisabled(true);
```

### setTotalCount(cnt)  
총 카운트 수를 설정하고, 페이지 뷰를 새로 고침

**cnt** `<Number>`: 총 레코드 개수 
> 페이지네이션의 총 레코드 수를 설정

```js
pagingBar.setTotalCount(100);
```

### setPageIndex(idx)  
현재 페이지 번호를 설정

**idx** `<Number>`: 현재 페이지 번호
> 사용자가 보고 있는 페이지 번호를 설정

```js
pagingBar.setPageIndex(2);
```

### setPerPage(per)  
페이지당 표시할 레코드 수를 설정

**per** `<Number>`: 한 페이지 당 표시할 레코드 개수
> 페이지 당 표시할 데이터의 수를 설정

```js
pagingBar.setPerPage(10);
```

### setBlock(blk)  
페이지 블록 크기를 설정

**blk** <Number>: 한 번에 표시되는 페이지 번호 개수
> 페이지네이션에서 한 번에 표시할 페이지 번호의 수를 설정

```js
pagingBar.setBlock(5);
```

### setPage(cnt, idx, per, blk) 
한 번에 여러 개의 페이지 속성을 설정

**cnt** `<Number>`: 총 카운트 수
> 전체 레코드 수를 설정

**idx** `<Number>`: 현재 페이지 번호
> 현재 페이지를 설정

**per** `<Number>`: 페이지 당 레코드 수
> 페이지 당 표시할 레코드 수를 설정

**blk** `<Number>`: 블록 크기
> 페이지 블록 크기를 설정

```js
pagingBar.setPage(100, 2, 10, 5);
```

### getTotalCount()  
총 레코드 개수를 반환 

**Returns**: `<Number>` 총 레코드 개수
> 설정된 총 레코드 수를 반환.

```js
console.log(pagingBar.getTotalCount());
```

### getTotalPage()  
전체 페이지 개수를 반환

**Returns**: `<Number>` 전체 페이지 개수
> 설정된 전체 페이지 수를 반환

```js
console.log(pagingBar.getTotalPage());
```

### getPageIndex()
현재 페이지 인덱스를 반환

**Returns**: `<Number>` 현재 페이지 번호
> 현재 설정된 페이지 번호를 반환

```js
console.log(pagingBar.getPageIndex());
```

### getPerPage()  
페이지당 표시할 레코드 수를 반환

**Returns**: `<Number>` 페이지 당 레코드 개수
> 설정된 페이지 당 레코드 수를 반환

```js
console.log(pagingBar.getPerPage());
```

### getBlock()  
블록 크기를 반환

**Returns**: `<Number>` 페이지 블록 크기
> 설정된 페이지 블록 크기를 반환

```js
console.log(pagingBar.getBlock());
```

### getPage()  
현재 설정된 페이지 정보를 객체 형태로 반환 

**Returns**: `<Object>` 
> { totalCount, totalPage, pageIndex, perPage, block, param } 

현재 페이지 설정 정보를 포함하는 객체를 반환

```js
console.log(pagingBar.getPage());
```

### setComponent(acomp) 
그리드나 리스트뷰 컴포넌트를 설정  

페이지네이션이 적용될 대상 컴포넌트를 지정하며, 기존 내용을 초기화  

**acomp** `<AComponent>`: 설정할 컴포넌트. 페이지네이션이 적용될 대상 컴포넌트를 설정

```js
pagingBar.setComponent(gridComponent);
```

### setDelegator(delegator)  
이벤트 위임 객체를 설정

**delegator** `<Object>`: 위임할 이벤트 핸들러 객체
> 이벤트 처리를 위임할 객체를 설정

```js
pagingBar.setDelegator(eventDelegator);
```

### setPageView() 
현재 설정된 페이지 정보를 기반으로 UI를 갱신  

이 함수는 setTotalCount() 호출 후 자동 실행되며, 직접 호출하여 수동으로 페이지 뷰를 업데이트.  

```js
pagingBar.setPageView();
```

### getDroppable()  
컴포넌트 내부에서 드롭 가능한지 여부를 반환

**Returns**: `<Boolean>` 드롭 가능 여부 (false) 
> 컴포넌트가 드롭 가능한지 여부를 반환

```js
console.log(pagingBar.getDroppable());  // false
```

### setParam(data)
페이지 이동 시 전달할 데이터를 설정

기존에 설정된 데이터를 덮어쓰는 역할

**data** `<JSON Object>`: 페이지 이동 시 전달할 데이터
> 이 데이터는 페이지 전환 시 서버나 다른 컴포넌트로 전달 가능

```
pagingBar.setParam({
    key1: 'value1',
    key2: 'value2'
});
```

### addParam(data)
페이지 이동 시 전달할 데이터를 기존에 설정된 데이터와 병합 

새로운 데이터는 기존 데이터에 추가되며, 동일한 키가 있을 경우 새로운 값으로 덮어씀

**data** `<JSON Object>`: 병합할 데이터 <br>
> 기존 데이터와 병합되어 페이지 전환 시 사용

```
pagingBar.addParam({
    key3: 'value3',
    key4: 'value4'
});
```

### setIsCenter(bln)
컴포넌트를 중앙에 배치할지 여부를 설정

이 설정은 페이지네이션 컴포넌트가 화면의 중앙에 위치하도록 조정

**bln** `<Boolean>`: true이면 컴포넌트를 중앙에 배치하고, false이면 기본 위치에 배치

```
pagingBar.setIsCenter(true);
```