# EXSearchView

> **Extends**: AView

지정된 키값들에 따라 입력된 검색어로 객체나 배열을 필터링하여 결과를 손쉽게 조회할 수 있게 해 주는 검색 전용 뷰 컴포넌트

## Instance Variables

### frwName

검색 뷰가 속한 프레임워크 이름을 지정하는 문자열.

* **Default** "stock"

### searchKeyArr `<Array>`

검색키 목록 저장 배열

* **Default** "name"

```js
this.searchView.setSearchKeyArr(['code', 'name']);
```

### depth `<Number>`

현재 저장된 데이터의 최대 깊이를 저장하는 변수

```js
let data = { "001": { "005930": { code: '005930', name: '삼성전자' } } };
this.searchView.setData(data);
console.log(this.searchView.depth); // 결과: 2
```

### data

검색 대상이 되는 객체 또는 배열.

```js
this.searchView.setData({
    "001": {
        "005930": { code: '005930', name: '삼성전자' }
    }
});
console.log(this.searchView.getData()); 
// 결과: { "001": { "005930": { code: '005930', name: '삼성전자' } } }
```



## Instance Methods


### getData()

현재 설정된 검색 대상 데이터를 반환.

* **Returns** `<Object>`

```js
let data = { "001": { "005930": { code: '005930', name: '삼성전자' } } };
this.searchView.setData(data);
console.log(this.searchView.getData()); 
// 결과: { "001": { "005930": { code: '005930', name: '삼성전자' } } }
```


### getSearchKeyArr()

현재 검색 키 목록을 반환.

* **Returns** `<Array>`

```js
this.searchView.setSearchKeyArr(['code', 'name']);
console.log(this.searchView.getSearchKeyArr()); 
// 결과: ['code', 'name']
```


### searchData( srchTxt, typeArr, exceptArr )

세팅한 데이터에서 검색키에 해당하는 값들과 검색어를 비교하여 해당하는 결과값을 반환.<br/><br/>
**typeArr** : 데이터구조가 배열인 경우 배열위치값, 객체인경우 키값을 지정하여 특정 분류에 해당하는 정보를 얻음.<br/>
**exceptArr** : 최종 정보 배열(또는 객체)를 감싸고 있는 것이 객체인 경우 제외할 키값을, 배열인 경우 제외할 위치값을 추가.

* **Returns** `<Array>`

* **srchTxt** `<String>` 검색어
* **typeArr** `<Array>` 분류값(또는 배열)
* **exceptArr** `<Array>` 제외할 객체의 키값 또는 위치값(또는 배열)

```js
this.searchView.searchData('삼성', ['001'], ['005930']);
// 1) depth=2인 데이터 { "001": { "005930": { code:'005930', name:'삼성전자' }, "005380": { code:'005380', name:'현대차'} }, "002": {...} }  
// 2) 최종 단계의 key 중 "001"에만 집중(typeArr=['001'])  
// 3) exceptArr=['005930'] -> 최종 단계에서 key가 "005930"인 것은 제외  
// 4) "name"이나 "code"에 "삼성"이 포함되어 있으면 결과에 추가  
// => 결국 "005930" key는 제외되므로, name:'삼성전자' 데이터도 제외됨  
// => 최종적으로 "현대차"만 검색에 남음. (삼성 쿼리에 매칭 안 되므로 검색어 관점에선 제외. 즉 결과=[])
```

* 검색어가 없으면 전체 데이터를 반환 로직
	* `_searchData()`내에
```js
if(r)
{
	// 검색어가 있을 때 -> 비교 후 일치하면 push
}
else
{
	// 검색어가 없을 경우, 조건만 맞으면 그냥 push(s)
	t.push(s);
}
```
-> `srchTxt`가 없으면(또는 falsy) 곧바로 대상 데이터를 결과 배열에 추가.


### setData( data )

검색 대상 데이터를 설정하고, depth를 자동 계산하여 저장.

* **data** `<Object>` 검색할 객체 또는 배열

```js
let newData = { "002": { "005387": { code: '005387', name: 'LG전자' } } };
this.searchView.setData(newData);
console.log(this.searchView.getData());
// 결과: { "002": { "005387": { code: '005387', name: 'LG전자' } } }
```

### setSearchKeyArr( keyArr )

검색할 키 값을 설정. code, name, ... 또는 0, 1, ...

* **keyArr** `<Array>` 검색할 키 값 배열

```js
this.searchView.setSearchKeyArr(['type', 'name']);
console.log(this.searchView.getSearchKeyArr()); 
// 결과: ['type', 'name']
```