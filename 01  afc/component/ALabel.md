# ALabel

> **Extends** [AComponent](https://wikidocs.net/274979)

ALabel은 AComponent를 확장한 클래스이며, <br>
HTML <label\> 요소를 기반으로 텍스트를 표시하고 조작하는 기능을 제공  <br>

텍스트 정렬, 마스킹 처리, 데이터 바인딩 등 다양한 기능을 지원

<br>

## Instance Methods

### beforeInit()


초기화 전에 실행되는 메서드
data-pre 속성을 확인하여 isPre 값을 설정

```js
let label = new ALabel(); 
label.beforeInit();
```
	 
 ---


### init(context, evtListener)

컴포넌트를 초기화하는 메서드

- **context** `<HTMLElement>` 초기화할 컨텍스트 요소
- **evtListener** `<Function>` 이벤트 리스너

```js
let label = new ALabel();
label.init(document.querySelector('label'), () => console.log('Initialized'));
```

---


### setHtml(html)

현재 라벨 요소의 HTML 내용을 설정  <br>
HTML 태그를 포함한 문자열을 적용 가능

- **html** `<String>` 설정할 HTML 문자열

```js
label.setHtml('<strong>Bold Label</strong>');
```

---


### setText(text)

라벨 요소에 텍스트를 설정 

data-pre 속성이 설정되어 있으면 <pre\> 태그를 사용하여 적용 

AUtil.autoShrink()을 사용하여 자동 글자 크기 조절을 수행 가능

- **text** `<String>` 설정할 텍스트

```js
label.setText('Hello, World!');
```

---

### getText()

현재 라벨 요소의 텍스트를 반환

마스킹이 적용되어 있다면 마스킹을 해제한 값을 반환

- **Returns** `<String>` 현재 설정된 텍스트

```js
let text = label.getText(); 
console.log(text);
```

---

### setTextAlign(align)

텍스트 정렬을 설정

- **align** `<String>` 

	> left, center, right

```js
label.setTextAlign('center');
```

---

## setData(data)

setText()와 동일한 기능을 수행

외부 데이터 바인딩을 위한 메서드

- **data** `<String>` 설정할 데이터

```js
label.setData('Dynamic Data');
```

---

### getData()

getText()와 동일한 기능을 수행

외부 데이터 바인딩을 위한 메서드

- **Returns** `<String>` 현재 설정된 데이터

```js
let data = label.getData(); 
console.log(data);
```

---

### getQueryData(dataArr, keyArr, queryData)

데이터 배열에서 keyArr[0]에 해당하는 키의 값을 가져와 설정 

첫 번째 데이터 항목을 기준으로 값을 가져옴

- **dataArr** `<Array>` 데이터 배열
- **keyArr** `<Array>` 키 배열
- **queryData** `<Object>` 쿼리 데이터 (필요 시 참조)

```js
let dataArr = [{ name: 'Alice' }];
let keyArr = ['name'];
label.getQueryData(dataArr, keyArr);
```

---

### setQueryData(dataArr, keyArr, queryData)

데이터 배열에서 keyArr[0]에 해당하는 키의 값을 가져와 setText()를 통해 설정

- **dataArr** `<Array>` 데이터 배열
- **keyArr** `<Array>` 키 배열
- **queryData** `<Object>` 쿼리 데이터 (필요 시 참조)

```js
let dataArr = [{ name: 'Bob' }];
let keyArr = ['name'];
label.setQueryData(dataArr, keyArr);
```

---

### setMaskValue(text)

setText()와 동일한 기능을 수행

데이터 마스킹을 적용할 때 사용

- **text** `<String>` 설정할 텍스트

```js
label.setMaskValue('Masked Data');
```

---