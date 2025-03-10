# ATextBox
> **Extends** [AComponent](https://wikidocs.net/274979)

**ATextBox**는 **텍스트 입력 및 표시를 위한 컴포넌트**

HTML 형식 또는 일반 텍스트를 입력할 수 있으며,  <br>
**텍스트 정렬 및 마스킹 기능을 지원**




## Instance Methods

### getHtml()

텍스트 박스 안의 내용을 HTML 태그를 포함하여 반환

* **Returns** `<String>` : HTML 형식의 텍스트

```js
let content = this.textbox.getHtml();
console.log(content); // <h3>SpiderZen</h3>
```

---

### getText()

텍스트 박스 안의 내용을 텍스트 형식으로 반환  <br>
>HTML 태그 없이 순수한 텍스트만 가져옴

* **Returns** `<String>` : 일반 텍스트

```js
let text = this.textbox.getText();
console.log(text); // "SpiderZen"
```

---

### setHtml(strHtml)

HTML 형식의 strHtml 값을 텍스트 박스 안의 요소로 지정

* **strHtml** `<String>` : HTML 형식의 텍스트

```js
this.textbox.setHtml('<h3>SpiderZen</h3>');
```

---

### setText(text)

매개변수 text 값을 텍스트 박스 안의 요소로 지정

마스킹 기능이 활성화된 경우 **마스킹 처리 후 출력**

* **text** `<String>` : 설정할 텍스트

```js
this.textbox.setText("Hello SpiderZen");
```

---

### setTextAlign(align)

텍스트 정렬방식을 설정

- **align** `<String>` : 정렬 방향

	-   flex-start : 왼쪽 정렬
	-   center : 가운데 정렬
	-   flex-end : 오른쪽 정렬

```js
this.textbox.setTextAlign('center'); // 가운데 정렬
```

---

### setData(data)

텍스트 박스의 내용을 **데이터 객체(data 값)** 로 설정

내부적으로 setText(data)를 호출

* **data** `<String>` : 표시할 데이터 값

```js
this.textbox.setData("Sample Data");
```

---

### getData()

현재 텍스트 박스의 데이터를 반환

내부적으로 getText()를 호출

-   **Returns** `<String>` : 현재 텍스트 박스에 입력된 데이터

```js
let data = this.textbox.getData();
console.log(data);
```

---

### setMaskValue(text)

setText(text)와 동일한 역할을 수행
 
데이터를 설정할 때 **마스킹 처리가 적용**

-   **text** `<String>` : 마스킹 할 텍스트

```js
this.textbox.setMaskValue("SpiderZen Info");
```

---

### getQueryData(dataArr, keyArr, queryData)


쿼리 데이터 배열(dataArr)에서 keyArr[0] 키를 가져와  
현재 텍스트 박스의 값(getText())을 저장

-   **dataArr** `<Array>` : 데이터 배열
-   **keyArr** `<Array>` : 데이터 키 배열
-   **queryData** `<Object>` : 쿼리 데이터 (선택적)

```js
let dataArr = [{}];
this.textbox.getQueryData(dataArr, ["username"], null);
console.log(dataArr); // [{ username: "현재 텍스트 값" }]
```

---

### setQueryData(dataArr, keyArr, queryData)


쿼리 데이터 배열(dataArr)에서 keyArr[0] 키에 해당하는 값을 가져와  
텍스트 박스에 설정

-   **dataArr** `<Array>` : 데이터 배열
-   **keyArr** `<Array>` : 데이터 키 배열
	>해당 키의 값이 undefined인 경우 설정되지 않음
	
-   **queryData** `<Object>` : 쿼리 데이터 (선택적)

```js
let dataArr = [{ username: "AsooSoft" }];
this.textbox.setQueryData(dataArr, ["username"], null);
console.log(this.textbox.getText()); // "AsooSoft"
```

---