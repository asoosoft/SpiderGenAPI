# ATextArea
> **Extends** [AComponent](https://wikidocs.net/274979)

**ATextArea**는 **멀티라인 텍스트 입력을 위한 컴포넌트**

사용자는 긴 텍스트를 입력할 수 있으며, **스크롤, 플레이스홀더, 읽기 전용 모드** 등의 기능을 제공



## Instance Variables

### isTabable `<Boolean>`

탭(Tab) 키를 사용하여 이동 가능한지 여부를 설정<br>
> 기본값:  true

---

### isTimerChange `<Boolean>`

**텍스트 변경을 감지하는 타이머 실행 여부**를 결정<br>

> 기본값:  false

---

<br>

## Instance Methods

### appendText(text)

현재 입력된 텍스트의 **끝에 새로운 텍스트를 추가**

* **text**  `<String>` : 추가할 텍스트

```js
this.textarea.appendText('추가할 텍스트');
```

---

### enable(isEnable)

텍스트 영역을 활성화 또는 비활성화

* **isEnable** `<Boolean>` : true이면 활성화, false이면 비활성화

```js
this.textarea.enable(false); // 비활성화
this.textarea.enable(true);  // 활성화
```

---

### enableTimerChange(enable)

텍스트 변경 감지 타이머의 활성 여부를 설정

* **enable** `<Boolean>` : true이면 활성화, false이면 비활성화

```js
this.textarea.enableTimerChange(false);
```

---

### getInnerText()

텍스트 영역 내부의 Text 속성 값을 반환

* **Returns** `<String>` : 내부 텍스트 값

```js
let text = this.textarea.getInnerText();
console.log(text);
```

---

### getPadding()

텍스트 영역에 설정된 패딩 값을 반환

- **Returns** `<Number>` : 패딩 값(px 단위)

```js
let padding = this.textarea.getPadding();
console.log(padding);
```

---

### getPlaceholder()


플레이스홀더(Placeholder) 값을 반환 <br>

> 입력된 값이 없을 때 표시되는 텍스트

-   **Returns** `<String>` : 플레이스홀더 텍스트

```js
let placeholder = this.textarea.getPlaceholder();
console.log(placeholder);
```

---

### getText()


현재 입력된 **텍스트 값을 반환**

-   **Returns** `<String>` : 입력된 텍스트 값

```js
let text = this.textarea.getText();
console.log(text);
```

---

### getTextAlign()

현재 텍스트 정렬 방식(left, center, right)을 반환

-   **Returns** `<String>` : 텍스트 정렬 값

```js
let align = this.textarea.getTextAlign();
console.log(align); // "left" 또는 "center" 또는 "right"
```

---

### isScroll()

텍스트 영역에 스크롤이 있는지 여부를 확인

-   **Returns** `<Boolean>` : 스크롤 여부

```js
if (this.textarea.isScroll()) {
    console.log("스크롤 있음");
} else {
    console.log("스크롤 없음");
}
```
---

### reset()

입력된 텍스트를 모두 **삭제**

```js
this.textarea.reset();
```

---

### scrollToBottom()

텍스트 영역의 **최하단으로 스크롤 이동**

```js
this.textarea.scrollToBottom();
```

---

### scrollToTop()

텍스트 영역의 **최상단으로 스크롤 이동**

```js
this.textarea.scrollToTop();
```

---

### selectableReadOnly(isReadOnly)

텍스트 입력을 막지만 선택은 가능하도록 설정

-   **isReadOnly** `<Boolean>` : <br>
true이면 읽기 전용 설정, false이면 편집 가능

```js
this.textarea.selectableReadOnly(true);
```

---

### setIme()

IME(Input Method Editor)를 적절한 CSS 형태로 설정 <br> 
(IE를 제외한 브라우저에서 동작)

```js
this.textarea.setIme();
```

---

### setImeOnIE()

IE(Internet Explorer)에서 IME(Input Method Editor)를 적절한 CSS 형태로 변경

```js
this.textarea.setImeOnIE();
```

---

### setInnerText(text)

내부 텍스트(Text 속성)를 변경

- **text** `<String>` : 변경할 텍스트 값

```js
this.textarea.setInnerText('변경된 텍스트');
```

---

### setPadding(padding)

텍스트 영역의 패딩 값을 설정

-   **padding** `<Number>` : 패딩 값(px 단위)

```js
this.textarea.setPadding(10);
```

---

### setPlaceholder(placeholder)

플레이스홀더(Placeholder)를 설정

-   **placeholder** `<String>` : 설정할 플레이스홀더 텍스트

```js
this.textarea.setPlaceholder("텍스트를 입력하세요...");
```

---

### setReadOnly(isReadOnly)

컴포넌트를 **읽기 전용 상태**로 설정

-   **isReadOnly** `<Boolean>` : <br>
true이면 읽기 전용, false이면 편집 가능

```js
this.textarea.setReadOnly(true);
```

---

### setText(text)

텍스트 영역의 값을 설정

-   **text** `<String>` : 설정할 텍스트 값

```js
this.textarea.setText("새로운 텍스트");
```

---

### setTextAlign(align)

텍스트 정렬방식을 설정

-   **align** `<String>` : 정렬 방향 (left, center, right)

```js
this.textarea.setTextAlign('center');
```

---

### setData(data)

텍스트 영역에 데이터를 설정  <br>
(내부적으로 setText()를 호출)

-   **data** `<String>` : 설정할 데이터


```js
this.textarea.setData("샘플 데이터");
```

---

### getData()

현재 입력된 데이터를 반환
(내부적으로 getText()를 호출)

-   **Returns** `<String>` : 현재 입력된 데이터 값


```js
let data = this.textarea.getData();
console.log(data);
```

---