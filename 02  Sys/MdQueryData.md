# MdQueryData

MdQueryData 클래스는 [AQueryData](https://wikidocs.net/275155) 클래스를 확장하여, 특정 데이터 쿼리를 처리하고, 해당 쿼리 데이터의 변환 및 관리 기능을 제공

이 클래스는 주로 **InBlock**과 **OutBlock** 데이터의 버퍼 처리 및 발생 횟수 계산을 담당

## Properties

### **queryObj** `<Object>`

쿼리 데이터 객체로, InBlock 및 OutBlock 데이터를 관리

```js
this.queryObj = {
	 InBlock1: [{ MENU_CHCK_CODE: '1500', USER_ID: 'z0622' }],
	 OutBlock1: [{ MENU_CHCK_CODE: '1500', USER_ID: 'z0622' }]
};
```
   
----------

<br>

## Instance Methods

### constructor(aquery)

MdQueryData 클래스의 생성자

AQueryData 클래스를 상속받고, 쿼리 데이터 처리에 필요한 플래그를 설정

   -   **aquery** `<AQuery>`: 쿼리 객체

```js
let mdQuery = new MdQueryData(aquery);
```

----------

### outBlockOccurs(block)

주어진 OutBlock에서 발생 횟수를 계산하여 반환

occursRef 속성에 기반해 발생 횟수를 결정

-  **block** `<Object>`: OutBlock 객체

-   **Returns** `<Number>`: 발생 횟수 

```js    
let occursCount = mdQuery.outBlockOccurs(someOutBlock);

console.log(occursCount); // 출력: 발생 횟수 
```

----------

### **inBlockOccurs(block)**

주어진 InBlock에서 발생 횟수를 반환

occurs 속성이 존재하면 해당 값을 사용하고, 그렇지 않으면 기본값 1을 반환

-  **block** `<Object>`: InBlock 객체
-   **Returns** `<Number>`: 발생 횟수
 
```js   
let occursCount = mdQuery.inBlockOccurs(someInBlock);

console.log(occursCount); // 출력: 발생 횟수 
```

----------

### **inBlockBuffer(abuf, offset)**

InBlock 데이터를 주어진 버퍼에 저장

데이터의 형식에 맞춰 문자열 또는 바이너리 데이터를 처리

-  **abuf** `<Object>`: 데이터를 저장할 버퍼 객체

-   **offset** `<Number>`: 버퍼의 시작 위치

```js
mdQuery.inBlockBuffer(abuf, 0);
```

----------

### **updatePosition(pWidth, pHeight)**

컴포넌트와 그 자식 뷰들의 위치를 업데이트

부모 뷰의 크기 변경 시 호출

-  **pWidth** `<Number>`: 부모 컴포넌트의 너비
-  **pHeight** `<Number>`: 부모 컴포넌트의 높이

```js
mdQuery.updatePosition(500, 300);
```

----------

### **getView(index)**

지정된 인덱스의 뷰를 반환

-  **index** `<Number>`: 뷰의 인덱스
-   **Returns**: AView 객체
    
```js 
let view = mdQuery.getView(0);

console.log(view); // 출력: 지정된 인덱스의 뷰
```

----------

### **removeAllViews()**

모든 뷰를 제거하고, 뷰 배열을 초기화

```js
mdQuery.removeAllViews(); 
``` 

----------

### **removeFromView(onlyRelease)**

부모 뷰에서 컴포넌트를 제거

onlyRelease가 true일 경우, 연관된 리소스만 해제하고 컴포넌트는 제거하지 않음

- **onlyRelease** `<Boolean>`: 리소스만 해제할지 여부

```js
mdQuery.removeFromView(true); // 리소스만 해제
```