# AQuery  
  
Query 파일의 구조 정보를 관리하는 클래스  
쿼리시스템을 이용한 통신에 대한 설명은 [IO System](https://wikidocs.net/24908) 참고  
  
## Static Variables  

### AQuery.IDESC `<Number>`
데이터 포맷 정보 중 설명 항목의 위치 인덱스 ( **0** )

### AQuery.IKEY `<Number>`
데이터 포맷 정보 중 키 항목의 위치 인덱스 ( **1** )

### AQuery.IFID `<Number>`
데이터 포맷 정보 중 FID 항목의 위치 인덱스 ( **2** )

### AQuery.IVALUE `<Number>`
데이터 포맷 정보 중 기본 값 항목의 위치 인덱스 ( **3** ) 

### AQuery.ITYPE `<Number>`
데이터 포맷 정보 중 타입 항목의 위치 인덱스 ( **4** )

### AQuery.ISIZE `<Number>`
데이터 포맷 정보 중 길이 항목의 위치 인덱스 ( **5** )

### AQuery.IEXP `<Number>`
데이터 포맷 정보 중 소수점 지수 항목의 위치 인덱스 ( **6** ) 
  
#### AQuery.BINARY  `<Number>`  
  
데이터 타입이 바이너리 **-2**  
  
#### AQuery.STRING `<Number>`  
  
데이터 타입이 문자열 **-1**  
  
#### AQuery.UNSIGNED `<Number>`  
  
데이터 타입이 양의 정수 **1**  
  
#### AQuery.SIGNED `<Number>`  
  
데이터 타입이 정수 **0**  

### AQuery.queryMap = {}

이미 로드된 쿼리 객체를 **qryName** 키로 저장해두는 맵(전역 캐시)

### AQuery.FORMAT

**'qry'**, **'res'**, **'xml'** 등 쿼리파일의 기본 확장자 형식을 저장.

### AQuery.OLD_PARSE = false

버전 호환성 유지를 위해 존재 (`true`면 v1 파싱 로직을 사용)

### AQuery.path
**'Query/'** 디렉토리 등 프로젝트 옵션에 따라 쿼리파일이 위치한 기본 경로
  
## Instance Variables  
  
### this.query `<Object>`  

로드된 쿼리 파일(**.qry**, **.res**, **.xml**)의 내용을 JSON 형태로 파싱해 저장한 객체.
  
```js  
this.query = {  
 "meta": {}, //... 그외 다른 항목 ex) "trType": 1,  ex)"realType": 0 "name": "obcpp_logn_101a", "input": { "InBlock1": { //"type": "input", "format": [ //설명,필드키,FID,custom,데이터형,사이즈,지수  
 ["단축코드","D1단축코드",16013,,-1,16,0],  
 ... ] },        ...  
 },     "output":  
 { "OutBlock1": { //"type": "output", "format": [ //설명,필드키,FID,기본값,데이터형,사이즈,지수  
 ["현재가","D1현재가",15001,,0,4,-2],   
             ...  
 ] },        ...  
 }};  
```  
  
### this.queryComps `<Object>`  
  
쿼리와 연결된 컴포넌트 정보를 저장하는 객체<br/>
화면 ID(containerId) 별로, **'input'** / **'output'** 타입에 해당하는 컴포넌트를 분류하여 저장
  
* **Default** {}  
  
```js  
this.queryComps =  
{  
 //화면 번호  
 '1500': [AButton, ALabel, ...], '2500': [AEdit, AEdit, ...],};  
```  

### this.isPending `<Boolean>`

-   쿼리 로드가 진행 중인지 여부 (**true**면 비동기 로딩 중)
-   여러 개의 쿼리를 한 번에 로드할 때 상태를 추적하는 데 사용.

### this.pendingQueue `<Array<Function>>`

-   쿼리가 로드되는 동안 대기해야 하는 콜백 함수 목록.
-   쿼리 로드 완료 후, 대기 중인 함수들을 실행.


## Static Methods  
  
### AQuery.getQuery( qryName )  

이미 로드된 쿼리 객체가 `AQuery.queryMap[qryName]`에 있다면 그 인스턴스를 반환하고, 없다면  null을 반환. (파일 로드를 시도하지 않음)
  
* **qryName** `<String>` 쿼리명  
* **Returns** `<AQuery>` or `<null>`
  
```js  
let aquery = AQuery.getQuery('sample01');  
```  
  
  
### AQuery.getSafeQuery( qryName )  
  
쿼리명을 기반으로 파일에서 로드하여 **AQuery** 객체를 생성하고,<br/>
이미 **queryMap**에 캐시되어 있다면 캐시된 객체를 반환.<br/>
파일이 실제로 존재하지 않으면 **null**을 반환.<br/>
확장자는 내부 **AQuery.FORMAT** 값을 사용.
  
* **qryName** `<String>` 쿼리명  
* **Returns** `<Promise<AQuery> or <null>>` (비동기)
  
```js  
AQuery.getSafeQuery('sample01').then(aquery => {
	if(aquery) console.log('쿼리 로드 성공:', aquery.getName());
	else console.log('쿼리 로드 실패');
});
```  

### AQuery.getSafeQuerys( qryNames, isAddProm )

여러 개의 쿼리를 한꺼번에 비동기로 로드하고, **Promise 배열을 반환** <br/>
**Promise.all(promise)** 을 사용하여 병렬적으로 처리.

* **qryNames** `<Array<String>>` 로드할 쿼리 이름 배열
* **isAddProm** `<Boolean>` (옵션) 추가 Promise 설정 여부
* **Return** `<Promise<Array<AQuery>>>` 로드된 쿼리 객체 배열을 Promise로 반환.

```js
AQuery.getSafeQuerys(['qry1', 'qry2']).then(queries => {
    console.log('모든 쿼리가 로드되었습니다.', queries);
});
```
  
### AQuery.setQuery( qryName, aquery )  
  
주어진 쿼리 객체(`aquery`)를 전역 맵(`AQuery.queryMap`)에 등록.  
  
* **qryName** `<String>` 등록할 이름  
* **aquery** `<AQuery>` 쿼리 객체  
  
```js
let myQuery = new AQuery();
AQuery.setQuery('myQueryName', myQuery);
```

### AQuery.setQueryFormat( format )

쿼리 파일 확장자를 **qry**, **res**, **xml** 등의 형식으로 설정.

* **format** `<String>` 쿼리 파일의 기본 확장자

```js
AQuery.setQueryFormat('xml');
```
  
## Instance Methods  
  
### addQueryComp( containerId, type, acomp )  
  
AQuery 객체에 type 과 연결된 컴포넌트를 등록.<br/>
컴포넌트는 containerId(화면)단위로 등록. <br/>
등록된 컴포넌트는 input 인 경우 데이터를 전송할 때 컴포넌트의 값을 참조하여 데이터를 버퍼에 세팅. output 인 경우 데이터 수신 시 수신된 데이터를 컴포넌트에 반영.  
  
* **containerId** `<String>` 화면(컨테이너) 식별 ID
* **type** `<String>` 'input' or 'output'  
* **acomp** `<AComponent>` 등록할 컴포넌트  
  
```js
let myQuery = AQuery.getSafeQuery('sample01');
myQuery.then(aquery => {
	if(!aquery) return;
	aquery.addQueryComp('screen1', 'input', this.editText);
	aquery.addQueryComp('screen1', 'output', this.labelPrice);
});
```
  
### eachQueryBlock( type, callback )  
  
지정된 type(**'input'** / **'output'**) 영역의 모든 블럭을 순회하며, 콜백(name,block)을 호출. 
  
* **type** `<String>` 'input' or 'output'  
* **callback** `<Function>` function(name, block) { ... }
	* **name** : 'InBlock1' 등 블록명
	* **block** : 블록 객체    

```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
aquery.eachQueryBlock('output', function(name, block)  
{  
	// 블락명, 블락 정보로 원하는 처리를 한다.  
});  
```  

### hasQueryBlock( type, blcokName )

특정 타입(input or output) 내에서 블록이 존재하는지 확인.

* **type** `<String>` input or output
* **blockName** `<String>` 블록 이름
* **Returns** `<Boolean>` 해당 블록이 존재하면 true, 없으면 false

```js
AQuery.prototype.hasQueryBlock = function(type, blockName) {
    return !!this.query[type] && !!this.query[type][blockName];
};
```

### getTypeIndex( mid )

mid에 해당하는 타입 인덱스를 반환.

* **mid** `<String>` 타입을 가져올 필드 ID
* **Returns**  `<Number>` 해당 타입 인덱스 ( 없으면 undefined)

```js
let typeIndex = aquery.getTypeIndex('D1단축코드');
console.log('타입 인덱스:', typeIndex);
``` 
  
### getIoVer()  
  
쿼리 파일의 resourceVersion 등을 나타내는 버전을 반환.
  
* **Returns** `<String>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let version = aquery.getIoVer();  
```  
  
### getMeta()  
  
쿼리 파일의 메타 정보를 반환.(파일의 meta 항목)  
  
* **Returns** `<Object>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let meta= aquery.getMeta();  
```  
  
### getName()  
  
쿼리명을 반환.(파일의 name 항목)  
  
* **Returns** `<String>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let name= aquery.getName();  
```  
  
### getQueryBlock( type, blockName )  
  
특정 영역('input' / 'output')의 특정 블록을 반환.
  
* **type** `<String>` 'input' or 'output'  
* **blockName** `<String>` ex) 'InBlock1', 'OutBlock2'  
* **Returns** `<Object>` 블록 객체  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let inblock1 = aquery.getQueryBlock('input', 'InBlock1');  
let outblokc2 = aquery.getQueryBlock('output', 'OutBlock2');  
```  
  
### getQueryComps( containerId, type )  
  
등록된 컴포넌트들 중, **containerId** 화면에 속한, **type** 타입 컴포넌트들을 배열로 반환.
  
* **containerId** `<String>` 컴포넌트가 포함된 화면의 id  
* **type** `<String>` 'input' or 'output'  
* **Returns** `<Array<AComponent>>` 컴포넌트 배열  
  
```js
let inputComps = aquery.getQueryComps('screen1', 'input');
```
  
### getQueryType()  
  
쿼리의 유형을 반환.(파일의 queryType 항목)  
  
* **Returns** `<String>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let qryType= aquery.getQueryType();  
```  
    
### getRealType()  

쿼리의 **realType** 값을 반환.  
  
* **Returns** `<String>` or `<undefined>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let realType= aquery.getRealType();  
```  
  
### getTrType()  
  
쿼리의 **trType** 값을 반환.
  
* **Returns** `<String>` or `<undefined>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let trType = aquery.getTrType();  
```  
  
### getValue( key )  
  
**this.query** 객체에서 특정 키에 해당하는 값을 반환.  
  
* **key** `<String>` 
* **Returns** `<Any>`  
  
```js  
let aquery = AQuery.getSafeQuery('sample01');  
if(!aquery) return;  
let qryName = aquery.getValue('name');  
```  
  
### hasQueryDataKey( queryData )  
  
해당 **queryData** 객체 안에, 현재 **AQuery** 정보가 사용하는 FID key가 하나라도 존재하는지 확인.
  
* **queryData** `<AQueryData>` 쿼리데이터 객체  
* **Returns** `<Boolean>`
	* **true** : 공통되는 키가 최소 1개 이상 존재
	* **false** : 현재 쿼리가 필요로 하는 FID key가 전혀 없음    

```js
if(aquery.hasQueryDataKey(queryData)){
	console.log('해당 queryData는 aquery의 FID를 포함');
} else {
	console.log('FID가 일치하지 않음');
}
```

### parseQuery( strQuery )

쿼리 문자열을 JSON 객체로 변환.

* **strQuery** `<String>` : 파싱할 쿼리 문자열

```js
AQuery.prototype.parseQuery = function(strQuery) {
    try {
        this.query = JSON.parse(strQuery);
        this.loadState = true;
    } catch (e) {
        console.error('쿼리 파싱 오류:', e);
        this.loadState = false;
    }
};
```

### parse_qry( strQuery )

**.qry** 포맷을 JSON으로 파싱.

* **strQuery** `<String>` : .qry 파일 내용

```js
AQuery.prototype.parse_qry = function(strQuery) {
    return this.parseQuery(strQuery);
};
```

### parse_qry_v1( strQuery )

**.qry-v1** 포맷을 파싱하는 함수.

```js
AQuery.prototype.parse_qry_v1 = function(strQuery) {
    return this.parseQuery(strQuery);
};
```

### parse_res( strQuery )

**.res** 포맷을 파싱하는 함수.

```js
AQuery.prototype.parse_res = function(strQuery) {
    return this.parseQuery(strQuery);
};
```

### parse_xml( strQuery )

**.xml** 포맷을 파싱.

```js
AQuery.prototype.parse_xml = function(strQuery) {
    let parser = new DOMParser();
    this.query = parser.parseFromString(strQuery, "text/xml");
    this.loadState = true;
};
```

### setBarPos( pos )

스크롤 위치를 절대값으로 설정.<br/>
**(주의)**: AQuery 자체와 직접적인 연관은 없음.

* **pos** `<Number>` : 스크롤 위치

```js
AQuery.prototype.setBarPos = function(pos) {
    this.element.scrollTop = pos;
};
```

### loadQuery( url, callback )  
  
주어진 **url**에서 쿼리 파일을 AJAX로 코딩하고, 성공 시 **this.query**에 파싱 결과를 포함.
  
* **url** `<String>` 쿼리 파일 경로
* **isAsync** `<Boolean>` 비동기 로드 여부
* **callback** `<Function>` **function(success)** 형태 (success = true or false) 

```js
let myQuery = new AQuery();
myQuery.loadQuery('Source/sample01.qry', true, function(success) {
	if(success) cosnole.log('로딩 성공');
	else console.log('로딩 실패');
});
```
  
### removeQueryComp( containerId, type, acomp )  
  
**addQueryComp()** 로 등록했던 컴포넌트를 해제.
  
* **containerId** `<String>` 컴포넌트가 포함된 화면의 id  
* **type** `<String>` 'input' or 'output'  
* **acomp**  `<AComponent>` 제거할 컴포넌트  
  
```js
aquery.removeQueryComp('screen1', 'input', this.editText);
```