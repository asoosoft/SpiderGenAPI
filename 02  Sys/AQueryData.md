# AQueryData



**AQueryData**는 **쿼리 데이터(Query Data)** 를 관리하고 변환하는 클래스

이 클래스는 입력(InBlock) 및 출력(OutBlock) 데이터를 저장하고,  
쿼리 데이터를 버퍼(ABuffer)와 변환하는 기능을 제공


## Class Constructor

### new AQueryData(aquery)

AQueryData 인스턴스를 생성

- **aquery** `<AQuery>` 관리할 AQuery 객체

```js
let queryData = new AQueryData(myQuery);
```

---

<br>


## Class Variables

###  **aquery** `<AQuery>`

현재 AQueryData가 관리하는 **쿼리 객체(AQuery 인스턴스)**

```js
let myQueryData = new AQueryData(myQuery);

// 현재 설정된 AQuery 이름 가져오기
console.log(myQueryData.aquery.getName()); 
```

---

### **queryObj** `<Object>`

쿼리 데이터를 저장하는 객체

```js
{ 
	InBlock1: [ 
		{ 
			MENU_CHCK_CODE: '1500', 
			USER_ID: 'z0622' 
		} 
	], 
	OutBlock1: [ 
		{ 
			MENU_CHCK_CODE: '1500', 
			USER_ID: 'z0622' 
		} 
	], 
}
```

---

### **flagObj** `<Object>`

압축 및 암호화 여부 등의 **플래그(Flag) 정보**

```js
{
    zipFlag: '0',  // 0: 압축X, 1: 압축
    encFlag: '0'   // 0: 평문, 1: 암호화
}
```

---

### **contiKey** `<String>`

연속 데이터 요청 시 사용되는 **키(Key)**

---

### **headerInfo** `<Object>`

쿼리 요청에 대한 **헤더 정보(Header Information)**

```js
{
    biz_sys_tcd: null,
    biz_sys_seq: null,
    scrn_oprt_tcd: null,
    ac_pwd_skip_yn: null
}
```

---

### **isReal** `<Boolean>`

해당 데이터가 **실시간(Real) 데이터인지 여부**

-   true : 실시간 데이터
-   false : 일반 조회 데이터

---

### **isLazyUpdate** `<Boolean>`


비동기 처리 후 **업데이트를 지연할지 여부**를 결정하는 플래그
> 기본값: false

```js
queryData.isLazyUpdate = true;
```

---

### **dblTostr** `<Boolean>`


숫자형(double) 데이터를 **문자열로 변환**할지 여부를 결정하는 플래그
> 기본값: false

```js
queryData.dblTostr = true;
```

---



<br>


## Instance Methods

### setHeaderInfo(headerInfo)

쿼리의 **헤더 정보**를 설정

 -   **headerInfo** `<Object>` : 헤더 정보를 포함하는 객체

```js
queryData.setHeaderInfo({ biz_sys_tcd: "A001", ac_pwd_skip_yn: "Y" });
```

---

### getQueryName()

현재 관리하는 AQuery의 **쿼리 이름(Query Name)** 을 가져옴

-   **Returns** `<String>` : 쿼리 이름

```js
let queryName = queryData.getQueryName();
```

---

### setQuery(aquery)

관리할 **AQuery 객체**를 설정

-   **aquery** `<AQuery>` : 설정할 AQuery 객체

```js
queryData.setQuery(myQuery);
```

---

### getQuery()

현재 설정된 AQuery 객체를 반환

-   **Returns** `<AQuery>` : 현재 설정된 AQuery 객체

```js
let query = queryData.getQuery();
```

---

### enableLazyUpdate()

비동기 처리 후 **컴포넌트 업데이트를 지연**하도록 설정

이후 lazyUpdate()를 호출하여 업데이트

```js
queryData.enableLazyUpdate();
```

---

### getFlag(flagName)


특정 플래그 값을 가져옴

- **flagName** `<String>` 가져올 플래그 이름

-   **Returns** `<Any>` : 플래그 값

```js
let zipFlag = queryData.getFlag('zipFlag');
```

---

### setFlag(flagName, value)

플래그 값을 설정

-   **flagName** `<String>` : 설정할 플래그 이름

-  **value** `<Any>` : 설정할 값

```js
queryData.setFlag('zipFlag', '1');
```

---

### getContiKey()

연속 데이터를 조회할 때 사용되는 **연속 키(Continuation Key)** 를 가져옴

-   **Returns** `<String>` : 연속 키

```js
let key = queryData.getContiKey();
```

---

### setContiKey(contiKey)


연속 데이터를 조회할 때 사용되는 **연속 키(Continuation Key)** 를 설정

-   **contiKey** `<String>` : 설정할 연속 키

```js
queryData.setContiKey('12345');
```
---

### outBlockData(abuf, offset)

**출력 데이터(OutBlock)를 버퍼(ABuffer)에서 변환하여 저장**

-   **abuf** `<ABuffer>` : 변환할 버퍼 객체

-   **offset** `<Number>` : 버퍼의 시작 위치 (선택)

```js
queryData.outBlockData(myBuffer);
```

---

### inBlockPrepare()

입력 데이터(InBlock)를 **초기화 및 기본 데이터 설정**을 수행


```js
queryData.inBlockPrepare();
```

---

### inBlockBuffer(abuf, offset)

**입력 데이터(InBlock)를 버퍼(ABuffer)에 변환하여 저장**

-   **abuf** `<ABuffer>` : 변환할 버퍼 객체

-   **offset** `<Number>` : 버퍼의 시작 위치 (선택)

```js
queryData.inBlockBuffer(myBuffer);
```

---

### inBlockOccurs(block)

입력 데이터(InBlock)에서 **반복 횟수(occurs count)** 를 가져옴

- **block** `<Object>` : 블록 데이터 객체 

- **Returns** `<Number>` : 반복 횟수 (기본값 1)

```js 
let occursCount = queryData.inBlockOccurs(myBlock);
```

---

### inBlockBufferOccurs(block, blockData, abuf)

입력 데이터를 버퍼에 저장하기 전, **반복 횟수를 설정**

- **block** `<Object>` : 블록 데이터 객체 

- **blockData** `<Array>` : 입력 데이터 리스트

- **abuf** `<ABuffer>` : 데이터가 저장될 버퍼 객체

```js 
queryData.inBlockBufferOccurs(myBlock, myBlockData, myBuffer);
```

---

### outBlockOccurs(block, prevData, abuf) 

출력 데이터(OutBlock)에서 **반복 횟수(occurs count)** 를 가져옴

- **block** `<Object>` : 블록 데이터 객체 

- **prevData** `<Object>` : 이전 블록 데이터 (없을 경우 null) 

- **abuf** `<ABuffer>` : 데이터가 저장된 버퍼 

- **Returns** `<Number>` : 반복 횟수 (기본값 1) 

```js 
let occursCount = queryData.outBlockOccurs(myBlock, null, myBuffer);
```

---

### getQueryObj()

현재 저장된 **쿼리 데이터 객체**를 가져옴

-   **Returns** `<Object>` : 현재 저장된 쿼리 데이터

```js
let queryObject = queryData.getQueryObj();
```

---

### setQueryObj(queryObj)

쿼리 데이터를 저장할 객체를 설정

-   **queryObj** `<Object>` : 설정할 쿼리 데이터

```js
queryData.setQueryObj
(
	{ 
		InBlock1: 
			[
				{ 
					MENU_CHCK_CODE: '1500' 
				}
			] 
	}
);
```

---

### getBlockData(blockName)

특정 블록(InBlock 또는 OutBlock)의 데이터를 가져옴

-   **blockName** `<String>` : 가져올 블록 이름

-   **Returns** `<Object>` : 해당 블록의 데이터

```js
let inBlockData = queryData.getBlockData('InBlock1');
```

---

### searchBlockData(blockName)

주어진 blockName을 포함하는 **모든 블록 데이터를 검색**

-   **blockName** `<String>` : 검색할 블록 이름

-   **Returns** `<Object>` : 검색된 블록 데이터

```js
let result = queryData.searchBlockData('Block');
```

---

### printQueryData()

현재 저장된 쿼리 데이터를 **콘솔에 출력**

```js
queryData.printQueryData();
```

---

### getRealType(comp)

현재 쿼리의 **실시간(Real) 타입**을 가져옴

- **comp** `<AComponent>`: 연결된 컴포넌트

- **Returns** `<String>`: 실시간 데이터 타입

```js
let realType = queryData.getRealType(myComponent);
```

---

### extractFieldData(abuf, obj, blockData, fmt)

버퍼(ABuffer)에서 **필드 데이터를 추출하여 객체에 저장**

- **abuf** `<ABuffer>`: 데이터가 저장된 버퍼 객체

- **obj** `<Object>`: 데이터를 저장할 객체

- **blockData** `<Array>`: 블록 데이터 리스트

- **fmt** `<Array>`: 필드 포맷 정보

```js
queryData.extractFieldData(myBuffer, myData, myBlockData, myFormat);
```

---

### setFieldAttr(abuf, obj, blockData, fmt)

필드 데이터를 버퍼에 저장한 후, **추가적인 속성을 설정**

- **abuf** `<ABuffer>`: 데이터가 저장된 버퍼 객체

- **obj** `<Object>`: 데이터를 저장할 객체

- **blockData** `<Array>`: 블록 데이터 리스트

- **fmt** `<Array>`: 필드 포맷 정보

```js
queryData.setFieldAttr(myBuffer, myData, myBlockData, myFormat);
```

---

<br>


## Example Usage

```js
// AQueryData 객체 생성
let queryData = new AQueryData(myQuery);

// 입력 블록 데이터 설정
queryData.setQueryObj({
    InBlock1: [{ MENU_CHCK_CODE: '1500', USER_ID: 'z0622' }]
});

// 플래그 설정
queryData.setFlag('zipFlag', '1');

// 쿼리 데이터 출력
queryData.printQueryData();
```