# AUtil

유용한 기능들을 모아둔 유틸리티 클래스

문자열 변환, 숫자 처리, 파일 경로 추출, DOM 탐색 등의 다양한 기능을 제공



## Class Methods

### **OppositeColor(r, g, b)**

RGB 값을 반전하여 반대 색상을 반환
    
 -   **r** `<Number>` : Red (0~255)
 -   **g** `<Number>` : Green (0~255)
 -   **b** `<Number>` : Blue (0~255)

-   **Returns** `<Array>` : [R, G, B] (반대 색상)

```js
AUtil.OppositeColor(255, 0, 0); 
// [0, 255, 255]
```
	 
 ---


### **RgbToHsl(r, g, b)**

RGB 값을 HSL 값으로 변환
	
-   **r** `<Number>` : Red (0~255)
-   **g** `<Number>` : Green (0~255)
-   **b** `<Number>` : Blue (0~255)

- **Returns** `<Array>` : [h, s, l]
	 > Hue, Saturation, Lightness

```js
AUtil.RgbToHsl(255, 0, 0); 
// [0, 1, 0.5]
```

---


### autoShrink(ele, info)

HTML 요소의 글자 수에 맞게 글자 크기를 자동 조정

* **ele** `<HTMLElement>` : 대상 요소

* **info** `<Object>`
	-   maxChar `<Number>` : 최대 글자 수
	-   fontSize `<Number>` : 기본 글자 크기
	-   unit `<String>` : (기본값: px)

```js
let ele = document.getElementById("myLabel"); 
AUtil.autoShrink(ele, { maxChar: 15, fontSize: 24, unit: 'px' });
```

---


### extractExtName(path)

파일 경로에서 확장자를 추출

* **path** `<String>` : 파일 경로

- **Returns** `<String>` : 확장자

```js
AUtil.extractExtName('C:/path1/path2/file.txt'); 
// 'txt'
```

---

### extractFileName(path, split)

파일 경로에서 파일명을 추출

* **path** `<String>` : 파일 경로

* **split** `<String>` : 분리 기호

* **Returns** `<String>` : 파일명

```js
AUtil.extractFileName('C:/path1/path2/file.txt', '/'); 
// 'file.txt'
```

---

### extractFileNameExceptExt(path, split)

파일 경로에서 확장자를 제외한 파일명을 추출

* **path** `<String>` : 파일 경로

* **split** `<String>` : 분리 기호

* **Returns** `<String>` : 확장자 없는 파일명

```js
AUtil.extractFileNameExceptExt('C:/path1/path2/file.txt', '/'); 
// 'file'
```

---

### extractLoc(path, split)

파일 경로에서 파일명을 제외한 디렉토리 경로를 추출

* **path** `<String>` : 파일 경로

* **split** `<String>` : 분리 기호

* **Returns** `<String>` : 경로

```js
AUtil.extractLoc('C:/path1/path2/file.txt', '/'); 
// 'C:/path1/path2/'
```

---

### filePathExceptExt(fileName)

파일 경로에서 확장자를 제외한 전체 경로를 반환

* **fileName** `<String>` : 파일 경로

* **Returns** `<String>` : 확장자 제외 경로

```js
AUtil.filePathExceptExt('C:/path1/path2/file.txt'); 
// 'C:/path1/path2/file'
```

---

### findNextByTagName(curDom, tagName)

현재 DOM 요소 기준으로 특정 태그명을 가진 가장 가까운 **다음** 요소를 찾음

* **curDom** `<HTMLElement>` : 기준 요소
* **tagName** `<String>` : 찾을 태그명

* **Returns** `<HTMLElement>` : 찾은 요소

```js
let curDom = document.getElementById('myElement'); 
AUtil.findNextByTagName(curDom, 'DIV');
```

---

### findPrevByTagName(curDom, tagName)

현재 DOM 요소 기준으로 특정 태그명을 가진 가장 가까운 **이전** 요소를 찾음

* **curDom** `<HTMLElement>` : 기준 요소
* **tagName** `<String>` : 찾을 태그명

* **Returns** `<HTMLElement>` : 찾은 요소

```js
let curDom = document.getElementById('myElement');
AUtil.findPrevByTagName(curDom, 'DIV');
```

---

### formatDate(dateStr)

YYYYMMDD 형식의 문자열을 YY:MM:DD 형식으로 변환

* **dateStr** `<String>` : 날짜 문자열

- **Returns** `<String>` :  변환된 날짜

```js
AUtil.formatDate('200518'); 
// '20:05:18'
```

---

### isExistFile(fileUrl)

파일이 존재하는지 여부를 확인

* **fileUrl** `<String>` : 파일 경로

* **Returns** `<Boolean>` : 파일 존재 여부

---

### makeNumString(size, value)

숫자를 지정한 길이의 문자열로 변환하며, 앞자리를 0으로 채움

* **size** `<Number>` : 출력할 문자열 길이

- **value** `<String>` : 변환할 값

- **Returns** `<String>` : 변환된 숫자 문자열

```js
AUtil.makeNumString(10, '12345'); 
// '0000012345'
```

---

### randInt(min, max)

지정된 범위 내에서 랜덤 정수를 반환

* **min** `<Number>` : 최소값

* **max** `<Number>` : 최대값

* **Returns** `<Number>` : 랜덤 정수

```js
AUtil.randInt(1, 100);
// 예: 42
```

---

### readTextFile(filePathName)

지정된 경로에서 파일의 내용을 가져옴

* **filePathName** `<String>` : 파일 경로

* **Returns** `<String>` : 파일 내용

```js
let fileContent = AUtil.readTextFile('data/sample.txt'); 
console.log(fileContent);
```

---

### shuffle(arr)

배열의 요소를 무작위로 섞음

* **arr** `<Array>` : 배열

```js
let arr = [1, 2, 3, 4, 5]; 
AUtil.shuffle(arr); // 예: [3, 1, 5, 2, 4]
```

---

### optionHelper(obj, option, noOverwrite)

객체의 옵션 정보를 덮어씀  <br>
noOverwrite가 true일 경우, 기존 값이 존재하면 덮어쓰지 않음

* **obj** `<Object>` : 옵션을 설정할 객체

* **option** `<Object>` : 적용할 옵션

* **noOverwrite** `<Boolean>` : 기존 값 덮어쓰기 방지 여부

```js
let obj = { option: { option2: 'noOverwrite' }};
let option = { option1: true, option2: false, option3: 'optiondata' };
AUtil.optionHelper(obj, option, true);
```

---

### safeDelay(chkComp, func, delay)

지정된 컴포넌트(chkComp)가 유효할 경우, 일정 시간(delay) 후 func을 실행

* **chkComp** `<Object>` : 확인할 컴포넌트
* **func** `<Function>` : 실행할 함수
* **delay** `<Number>` : 지연 시간 (밀리초)

- **Returns** `<Number>` : setTimeout ID

```js
AUtil.safeDelay(myComponent, () => console.log('Executed after delay'), 1000);
```

---

### tagEvent(tag, e, eventName)

HTML 요소(tag)에서 발생한 이벤트(e)를 처리하며, 최상위 rootView에서 특정 이벤트 핸들러(eventName)를 실행

* **tag** `<HTMLElement>` : 이벤트가 발생한 HTML 요소

* **e** `<Event>` : 발생한 이벤트 객체

* **eventName** `<String>` : 실행할 이벤트 핸들러 이름

```js
AUtil.tagEvent(someElement, event, 'onCustomEvent');
```

---

### tagCheckedByName(tag, name)

tag 요소가 체크되었을 때, 동일한 name 속성을 가진 다른 요소들의 체크 상태를 동기화

* **tag** `<HTMLElement>` : 체크된 요소
* **name** `<String>` : 동기화할 요소들의 name 속성

```js
AUtil.tagCheckedByName(document.getElementById('checkbox1'), 'group1');
```

---

### makeStack(targetDom)

HTML 요소에 빈 div 태그를 생성하여 추가

이 메서드는 undo, redo 같은 기능에서 엘리먼트를 잠시 옮겨놓을 때 사용

* **targetDom** `<HTMLElement>` : div 태그를 추가할 대상 요소

* **Returns** `<HTMLElement>` : 생성된 div 요소

```js
let undoStack = AUtil.makeStack(document.body);
undoStack.append(document.createElement('div'));
```

---

<br>

## jQuery Utility Function

### $.fn.textfill(maxFontPixels)

요소의 크기에 맞춰 글자 크기를 자동으로 조절하는 기능을 수행 

텍스트가 요소 안에 맞게 조절되도록 **최대 폰트 크기**를 지정할 수 있음

* **maxFontPixels** `<Number>` 최대 폰트 크기 (픽셀 단위)

<br>

##### 동작 방식

-   기본적으로 span 태그 안의 첫 번째 요소만 적용됨
-   부모 요소의 크기에 맞춰 폰트 크기를 줄여 나감
-   폰트 크기가 3px 이하가 되면 멈춤



```js
// $(selector).textfill(maxFontPixels);

$("#text-box").textfill(30);
```

---

### $.fn.autoShrink(info)

텍스트의 길이에 따라 **폰트 크기를 자동으로 조정**하는 기능을 수행<br>
(너비, 높이에 맞게 글자가 자동으로 줄어듦)

* **info**
	* **maxChar** `<Number>` : 최대 허용 글자 수
		> 기본값 : 15
		
	* **fontSize** `<Number>` : 기본 폰트 크기 (픽셀 단위)
		> 기본값 : 24
		
	* **unit** `<String>` : 폰트 크기 단위 (px, em 등)
		> 기본값 : px

<br>

##### 동작 방식

-   요소 내부의 텍스트 길이를 계산함
-   maxChar 값보다 길면 폰트 크기를 줄임
-   maxChar 값보다 짧으면 기본 fontSize 값을 유지



```js
// $(selector).autoShrink(info);

$("#text-box").autoShrink({ maxChar: 20, fontSize: 24, unit: 'px' });
```

---

### $.fn.getDefinedStyle(isComputed)

HTML 요소의 **CSS 스타일 값을 가져오는 함수**

**현재 적용된 스타일**을 가져오며, computed style을 가져올 수도 있음

* **isComputed** `<Boolean>` <br>
true일 경우, window.getComputedStyle()을 사용하여 스타일을 가져옴
	
	> 기본값 : false

<br>

* **Returns** `<Object>` <br>
	
	> 예: { "font-size": "16px", "color": "rgb(0,0,0)" }

<br>



```js
// let styles = $(selector).getDefinedStyle(isComputed);

let styles = $("#text-box").getDefinedStyle(true); 
console.log(styles); 
// { "color": "rgb(255, 0, 0)", "font-size": "20px", ... }
```

---

### $.fn.hasScrollBar()

HTML 요소에 **스크롤바가 존재하는지 확인하는 함수**


* **Returns** `<Boolean>`  <br>
true : 스크롤바 있음, false : 스크롤바 없음

<br>

##### 동작 방식

-   scrollHeight(전체 높이)에서 height()(보이는 높이)를 뺀 값이 <br>
**1px 이상이면 true 반환, 그렇지 않으면 false 반환**


<br>

```js
// let hasScroll = $(selector).hasScrollBar();

if ($("#content").hasScrollBar()) { 
	console.log("스크롤바가 있습니다."); 
} else { 
	console.log("스크롤바가 없습니다."); 
}
```

---