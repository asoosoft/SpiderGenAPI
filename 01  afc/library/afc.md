# afc

Asoosoft Foundation Class(AFC)는 웹 및 모바일 애플리케이션 개발을 위한 유틸리티 및 컴포넌트를 제공하는 JavaScript 기반 프레임워크

> AFC는 UI 요소의 스타일링, 이벤트 관리, 데이터 처리, 로깅 등의 기능을 제공하며, 웹 및 하이브리드 애플리케이션 개발을 보다 효율적으로 수행할 수 있도록 돕습니다.


### 특징

-   UI 요소 스타일링 및 관리
    
-   이벤트 처리 및 데이터 바인딩
    
-   비동기 로딩 및 캐싱 기능
    
-   브라우저 및 디바이스별 호환성 체크
    
-   로깅 및 디버깅 기능 제공
    
-   키보드 입력 및 터치 이벤트 지원

- 동적 HTML, CSS, JavaScript 로딩 지원


<br/>


## Constants

### 버튼 상태

```js
BTN_STATE: ['normal', 'touch', 'disable']
```

-   `normal` : 기본 상태
    
-   `touch` : 터치된 상태
    
-   `disable` : 비활성 상태
    

### 체크 상태

```js
CHECK_STATE: ['check', 'normal']
```

-   `check` : 체크된 상태
    
-   `normal` : 기본 상태
    

### 속성 상수

```js
ATTR_BASE: 'data-base',
ATTR_CLASS: 'data-class',
ATTR_GROUP: 'data-group',
ATTR_STYLE: 'data-style',
ATTR_STYLE_TAB: 'data-style-tab',
ATTR_DEFAULT: 'data-default',
```

-   `data-base` : 기본 속성
    
-   `data-class` : 클래스 속성
    
-   `data-group` : 그룹 속성
    
-   `data-style` : 스타일 속성
    
-   `data-style-tab` : 탭 스타일 속성
    
-   `data-default` : 초기 선택된 ID



## Static Methods

### afc.abs( val )


숫자의 절대값을 반환

```js
const result = afc.abs(-10);
console.log(result); // 10
```

<br/>

### afc.absComma( val )

절대값으로 변경 후 3자리마다 콤마(,)를 넣어 반환

- **val** `<Number>` 숫자

**Returns:**

-   문자열(String) 형식의 숫자



```js
console.log(afc.absComma(1234567)); // "1,234,567" 
console.log(afc.absComma(-9876543)); // "9,876,543" 
console.log(afc.absComma(0)); // "0" 
console.log(afc.absComma(1234.567)); // "1,234.567" 
console.log(afc.absComma(-56.789)); // "56.789"
```
<br/>

### afc.absCommaIfFixed( val )

소수점이 있는 숫자일 때 절대값의 3자리마다 콤마(,) 및 소수점 이하 2자리까지 반올림하여 반환

- **val** `<Number>` 숫자

**Returns:**

-   문자열(String) 형식의 숫자

```js
console.log(afc.absCommaIfFixed(12345.6789));   // "12,345.68"
console.log(afc.absCommaIfFixed(-98765.4321));  // "98,765.43"
console.log(afc.absCommaIfFixed(1000));         // "1,000"
console.log(afc.absCommaIfFixed(-56.789));      // "56.79"
console.log(afc.absCommaIfFixed(0));            // "0"
```


<br/>

### afc.absCommaPercent( val )

절대값을 3자리마다 콤마(,)로 변환한 후 % 기호를 추가하여 반환

- **val** `<Number>` 숫자
    

**Returns:**

-   문자열(String) 형식의 숫자와 % 기호

```js
console.log(afc.absCommaPercent(12345.678)); 
// "12,345.678%" 
console.log(afc.absCommaPercent(-98765.432)); 
// "98,765.432%" console.log(afc.absCommaPercent(0)); // "0%"
```
<br/>

### afc.absFloor1( value )

절대값 소수점1자리 버림해서 반환

- **value** `<Number>` 숫자

```js
console.log(afc.absFloor1(12.345)); // "12.3" 
console.log(afc.absFloor1(-98.765)); // "98.7" 
console.log(afc.absFloor1(0.999)); // "0.9"
```

<br/>

### afc.absFloor2( value )

소수점2자리 버림해서 반환

- **value** `<Number>` 숫자

```js
console.log(afc.absFloor2(12.3456)); // "12.34" 
console.log(afc.absFloor2(-98.7654)); // "98.76" 
console.log(afc.absFloor2(0.9999)); // "0.99"
```

<br/>

### afc.absFloor2Per( value )


절대값 소수점 2자리 버림해서 % 붙여 반환

```js
const result = afc.absFloor2Per(-12.3456);
console.log(result); // "12.34%"
```
<br/>

### afc.absPercent( val )

숫자에 %를 붙여 반환.  addPercent와 동일.

- **val** `<Number>` 숫자


    

**Returns:**
-   문자열(String) 형식의 숫자와 % 기호

```js
const result = afc.absPercent(50);
console.log(result); // "50%"
```

<br/>

### afc.addComma( val )

천 단위마다 콤마를 추가한 문자열을 반환

```js
const result = afc.addComma(1000000);
console.log(result); // "1,000,000"
```

<br/>

### afc.addCommaIfFixed( value )

소수점이 있는 숫자일 때 3자리마다 콤마(,) 및 소수점 이하 2자리까지 반올림하여 반환. 소수점이 없는 숫자일 때 3자리마다 콤마(,)를 반환

- **value** `<Number>` 숫자

<br/>

### afc.addPercent( val )

숫자에 %를 붙여 반환

- **val** `<Number>` 숫자

```js
const result = afc.addPercent(50);
console.log(result); // "50%"
```


<br/>

### afc.androidVersion()

안드로이드 버전을 반환

#### **returns:**

-   안드로이드 버전 문자열 (예: `"11"`, `"9.0"`, `"4.4"` 등)


```js
console.log(afc.androidVersion());  
// 안드로이드 환경에서는 버전 번호 출력 (예: "12")
// 안드로이드가 아닐 경우 null 반환`
```

<br/>

### afc.beginTimeCheck( msg )

시작시간을 체크하기 위해 세팅

- **msg** `<String>` 출력될 메세지

<br/>

```js
afc.beginTimeCheck("타이머 시작!"); 
// 콘솔 출력: "타이머 시작! -- Start time ==> 1700000000000 ..."
```

### afc.capitalAmount( value )

value/1000000 해서 나온 값을 0보다 적으면 소수점 2자리만큼 반올림해서 반환하고 <br/>아니면 정수형으로 3자리마다 콤마(,)해서 반환

- **value** `<Number>` 숫자

```js
console.log(afc.capitalAmount(500000000)); // "500,000" 
console.log(afc.capitalAmount(123456789)); // "123,457" 
console.log(afc.capitalAmount(-9876543)); // "-9.88" 
console.log(afc.capitalAmount(0)); // "0"
```
<br/>


### afc.commaPercent( value )

숫자를 천 단위마다 콤마(,)로 구분하고 % 기호를 추가하여 반환

```js
const result = afc.commaPercent(1234567.89);
console.log(result); // "1,234,567.89%"
```

-   **value** `<Number>` 숫자 값
        
-   **Returns**: `<String>` 변환된 값 (천 단위 콤마 및 % 기호 포함)


### afc.dateToString( date )

DATE객체를 'yyyyMMdd' 형태로 반환

* **Returns**: `<String>`

- **date**  `<Date>` DATE객체

```js
let today = new Date();
console.log(afc.dateToString(today));  
// 예: "20250210" (현재 날짜에 따라 다름)

let specificDate = new Date(2023, 11, 25); // 2023년 12월 25일
console.log(afc.dateToString(specificDate));  
// "20231225"
```

<br/>


### afc.disableLog()

afc.log와 console.log를 해도 표시되지 않게 비활성화

```js
console.log("이것은 보일 로그입니다."); 

afc.disableLog(); 
console.log("이것은 보이지 않을 로그입니다."); // 출력되지 않음 
afc.log("이것도 출력되지 않습니다.");
```

<br/>


### afc.startTimeCheck( msg )

시간 측정을 시작

```js
afc.startTimeCheck('테스트 시작');
```


### afc.ellapseCheck( msg )

경과 시간을 측정

```js
afc.ellapseCheck('중간 체크');
```

### afc.endTimeCheck( msg )

시간 측정을 종료하고 총 경과 시간을 출력

```js
afc.endTimeCheck('테스트 종료');
```

### afc.floatFix( value, pos )

소수점 자리수만큼 반올림하여 반환. (`pos` 값을 지정하지 않으면 기본값은 2자리)

- **value** `<Float>` 숫자 또는 실수
- **pos** `<Number>` 자리수

```js
console.log(afc.floatFix(12.3456)); // "12.35" (기본값 2자리 반올림) 
console.log(afc.floatFix(98.7654, 3)); // "98.765" (소수점 3자리까지 반올림) 
console.log(afc.floatFix(0.999, 1)); // "1.0" (소수점 1자리 반올림) 
console.log(afc.floatFix(-123.4567, 2)); // "-123.46" (음수도 동일 적용) 
console.log(afc.floatFix(100, 4)); // "100.0000" (소수점 4자리까지 표현)
```

<br/>

### afc.floor( value, pos )

value를 pos자리수 만큼 반올림하여 반환

* **Returns**: Float

 - **value** `<Number>` 금액
 - **pos** `<Number>` 버림할 자리수

```js
const result = afc.floor(12.3456, 2);
console.log(result); // "12.34"
```

<br/>


### afc.floor2( value )

소수점 둘째 자리에서 버림하여 값을 반환

```js
const result = afc.floor2(12.3456);
console.log(result); // "12.34"
```

-   **value** `<Number>` 숫자 값
        

### afc.floor2Per( value )

소수점 둘째 자리에서 절삭한 후 `%` 기호를 추가하여 반환

```js
const result = afc.floor2Per(12.3456);
console.log(result); // "12.34%"
```

-   **value** `<Number>` 숫자 값
        
-   **Returns**: `<String>` 변환된 값 (소수점 두 자리까지 버림 및 % 추가)

<br/>

### afc.floorPer( value, pos )

사용자가 지정한 `pos` 자리수에서 절삭한 후 `%` 기호를 추가하여 반환

- **value** `<Float>` number 객체
- **pos** `<Number>` 자리수

```js
console.log(afc.floorPer(12.3456, 1)); // "12.3%"
```

<br/>


### afc.formatDate( dateNum )

날짜 형식을 `yyyy/MM/dd` 형식으로 변환

```js
const result = afc.formatDate('20250210');
console.log(result); // "2025/02/10"
```

### afc.formatDate2( dateNum )

날짜 형식을  `yy/MM/dd` 형태로 반환

```js
console.log(afc.formatDate2("20250210"));  // "25/02/10"
console.log(afc.formatDate2("19991231"));  // "99/12/31"
console.log(afc.formatDate2("20100101"));  // "10/01/01"
console.log(afc.formatDate2("00000000"));  // "00/00/00" (비정상 값 처리 주의)
console.log(afc.formatDate2(""));          // "" (빈 문자열 처리)
```

<br/>

### afc.formatDateTime( datetimeNum )

월일시분 텍스트를 `MM/dd HH:mm` 형태로 반환.

- **datetimeNum**  `<String>` 월일시분 텍스트

* **Returns**: `<String>`




```js
const result = afc.formatDateTime('02101530');
console.log(result); // "02/10 15:30"
```


<br/>

### afc.formatMonth( monthNum )

년월 텍스트를 `yyyy/MM` 형태로 반환.

- **monthNum** `<String>` 년월 텍스트
* **Returns**: `<String>`


```js
console.log(afc.formatMonth("202502"));  // "2025/02"
console.log(afc.formatMonth("199912"));  // "1999/12"
console.log(afc.formatMonth("201001"));  // "2010/01"
console.log(afc.formatMonth("000000"));  // "0000/00" (비정상 값 처리 주의)
console.log(afc.formatMonth(""));        // "" (빈 문자열 처리)
```

<br/>

### afc.formatSecond( t )

시분초(hhMMdd)의 초의 값으로 반환

- **t**  `<String>` 시분초

```js
console.log(afc.formatSecond("123456")); // 12*3600 + 34*60 + 56 = 45296
console.log(afc.formatSecond("010203")); // 1*3600 + 2*60 + 3 = 3723
console.log(afc.formatSecond("000000")); // 0 (자정)
console.log(afc.formatSecond("235959")); // 23*3600 + 59*60 + 59 = 86399
console.log(afc.formatSecond(""));       // NaN (빈 문자열 처리 주의)
```

<br/>

### afc.formatTic( datetimeNum )

일시분초 텍스트를 `dd HH:mm:ss` 형태로 반환.

- **datetimeNum**  `<String>` 월일시분 텍스트

* **Returns**: `<String>`



```js
console.log(afc.formatTic("02122359")); // "02 12:23:59"
console.log(afc.formatTic("31115900")); // "31 11:59:00"
console.log(afc.formatTic("01000000")); // "01 00:00:00" (자정)
console.log(afc.formatTic("00000000")); // "00 00:00:00" (비정상 값 처리 주의)
console.log(afc.formatTic(""));         // "" (빈 문자열 처리)
```


<br/>

### afc.getClassName( funcObj )

객체의 클래스 이름을 반환

**funcObj**  `<Function>` 함수

```js
const className = afc.getClassName(new Date());
console.log(className); // "Date"
```

<br/>




### afc.getChildEventList( baseName )

컴포넌트 클래스에서 구현 가능한 **자식 이벤트 목록**을 반환

> `AView`에서 `_childSelect == 2`일 때 사용됨.

-   **baseName** `<String>` : 컴포넌트의 기본 클래스명

**Returns** `<Array>` : 자식 이벤트 목록

```js
const childEvents = afc.getChildEventList("AView");
console.log(childEvents);
```

### afc.getEventList( baseName )

컴포넌트 클래스가 구현 가능한 **이벤트 목록**을 반환

>   특정 `baseName`과 `AEvent.defEvents`를 조합하여 리턴한다.

 **baseName** `<String>` : 컴포넌트 기본 클래스명

**Returns**

-   **`<Array>`**: 이벤트 목록

```js
const eventList = afc.getEventList("AButton");
console.log(eventList);
```
<br>

### getRandomColor()

랜덤 색상 값을 생성

-   **#** 포함한 16진수 색상 코드를 반환한다.

**Returns**

-   `<String>` : 랜덤 색상 코드

```js
const randomColor = afc.getRandomColor();
console.log(randomColor); // "#A1B2C3"
``` 

<br>


### afc.getUrlParameter()

현재 URL에서 파라미터를 객체 형태로 추출

```js
const params = afc.getUrlParameter();
console.log(params);
```

<br/>

### afc.intComma( val )

정수형으로 치환 후 3자리마다 콤마(,)를 붙여 반환

-**val** `<Number>` 숫자

<br/>

```js
console.log(afc.intComma(1234567.89));  // "1,234,567" (소수점 제거)
console.log(afc.intComma(-9876543.21)); // "-9,876,543" (음수도 동일 적용)
console.log(afc.intComma(1000));        // "1,000"
console.log(afc.intComma(0));           // "0"
console.log(afc.intComma("54321.99"));  // "54,321" (문자열 숫자도 정수 변환)
console.log(afc.intComma("abc"));       // "NaN" (숫자가 아닌 경우)
```


### afc.import( url )

비동기적으로 JavaScript 파일을 로드하는 함수.

-   내부적으로 `_loadScriptWait()`를 호출.

 **url** `<String>` : 로드할 스크립트 URL

**Returns**  `<Promise>`



```js
afc.import("example.js").then(() => 
	console.log("스크립트 로드 완료")
);
```





### afc.iosVersion()

ISO 버전을 반환

```js
console.log(afc.iosVersion());  
// iOS 환경에서는 버전 번호 출력 (예: "16.5")
// iOS가 아닐 경우 null 반환
```

<br/>

### afc.isDeviceOf( device )

파라미터로 넘어온 device문자열로 디바이스를 구분하여 결과를 반환.

* **Returns**: `<Boolean>`

- **device** `<String>` 디바이스문자열 ex) afc.isDeviceOf('Android')

<br/>


### afc.loadCss( url )

CSS 파일을 동적으로 로드

```js
afc.loadCss('styles.css');
```
<br>

### afc.loadHtml(trgEle, url, callback, searchValue, newValue)

비동기적으로 HTML 파일을 로드하는 함수.

> 특정 요소에 HTML을 로드하여 삽입하거나 콜백 실행.



-   **trgEle** `<HTMLElement>`: 삽입할 대상 요소
-   **url** `<String>`: HTML 파일 경로
-   **callback** `<Function>`: 로드 후 실행할 함수
-   **searchValue** `<String>`: 대체할 텍스트
-   **newValue** `<String>`: 변경할 텍스트


```js
afc.loadHtml(document.getElementById("content"), "example.html", function(txt) {
    console.log("HTML 로드 완료:", txt);
});
```
<br>

### afc.loadScript( url )

비동기적으로 JavaScript 파일을 로드

```js
afc.loadScript('example.js', function() {
    console.log('스크립트 로드 완료');
});
```


### afc.loadWait

비동기 작업 완료를 대기하는 객체

```js
afc.loadWait.begin('myProcess');
setTimeout(() => afc.loadWait.end('myProcess'), 2000);
```


### afc.waitCompletion

비동기 작업 완료 대기 함수

```js
afc.waitCompletion(() => console.log('모든 작업 완료'));
```


### afc.scriptReady( callback )

비동기 스크립트 로드 완료 후 실행할 콜백을 지정

```js
afc.scriptReady(() => {
    console.log('스크립트 로드 완료');
});
```


### afc.logOption( option )

로그의 옵션을 셋팅

> 특정 옵션을 지정하여 로그 출력 시 포함할 내용을 조정할 수 있다.

- **option** `<Object>` 로그옵션 { compElement: false }

**지원하는 옵션** 
|Option|Type|Default|Description|
|-|-|-|-|
|compElement|`<Boolean>`|true|`true`이면 컴포넌트 요소 정보를 로그에 포함|
|stackTrace|`<Boolean>`|false|`true`이면 로그에 스택 트레이스(호출 경로) 포함|

### 기본 로그 설정 (컴포넌트 정보 포함)

```js
afc.logOption({ compElement: true });
afc.log("로그 출력 테스트");
```
 **컴포넌트 요소 정보가 포함된 로그가 출력됨**  
예시 출력:

```js
SpiderGen => <div class="AButton">로그 출력 테스트</div>
```



### 컴포넌트 요소 정보 제외

```js
afc.logOption({ compElement: false });
afc.log("컴포넌트 정보 없이 출력");
```
 **컴포넌트 정보 없이 텍스트만 출력됨**  
예시 출력:

```js
SpiderGen => 컴포넌트 정보 없이 출력
```

###  스택 트레이스 포함

```js
afc.logOption({ stackTrace: true });
afc.log("스택 트레이스 포함된 로그");
```
 **스택 트레이스를 포함한 로그가 출력됨**  
예시 출력:

```js
SpiderGen => 스택 트레이스 포함된 로그
    at functionName (script.js:15:20)
    at anotherFunction (script.js:32:10)
```


###  여러 옵션을 동시에 설정

```js
afc.logOption({ compElement: false, stackTrace: true });
afc.log("여러 옵션 적용된 로그");
```

 **컴포넌트 정보 없이, 스택 트레이스 포함한 로그가 출력됨**


<br/>

### makeAccText( accInfo, isGroup )

계좌 정보를 기반으로 계좌번호를 포맷팅


-   **accInfo** `<Object>` : 계좌 정보 객체
-   **isGroup** `<Boolean>` : 그룹 계좌 여부

**Returns**

-   **`<String>`**: 포맷된 계좌번호

```js
const accInfo = { "D1계좌번호": "123456789012" };
console.log(afc.makeAccText(accInfo)); // "123-45-6789012"
```
<br>

### afc.makeDummyString( length )

데이터의 길이만큼 더미문자(*)를 생성하여 반환.

* **Returns**: `<String>`

- **length**  `<Number>` 데이터의 길이

<br/>

### afc.oneHundredMillionAmount( value )


금액을 억 단위로 변환하여 반환

```js
const result = afc.oneHundredMillionAmount(1000000000);
console.log(result); // "10"
```
<br/>

### afc.returnAsIt( val )

입력값을 그대로 반환하는 단순한 함수.

 - **val** `<Any>` : 반환할 값

**Returns**

-   **`<Any>`**: 입력과 동일한 값

```js
console.log(afc.returnAsIt("Hello")); // "Hello"
```

<br>



### afc.removeComma( val )

콤마가 포함된 문자열에서 콤마를 제거

```js
const result = afc.removeComma("1,000,000");
console.log(result); // "1000000"
```

<br/>


### afc.removeCss( url )

html DOM에서 스타일시트를 제거

* **url** `<String>` 제거할 CSS 파일의 URL

```js
afc.removeCss('styles.css');
```

<br/>

### afc.setLogFilter( filter )

로그를 필터할 문구를 설정

> 이 문구를 기준으로 로그 메시지를 필터링할 수 있습니다.

* **filter** `<String>` 필터할 문구 <br>
	> 이 문구가 로그 메시지에 포함될 경우, 로그가 출력됩니다.

```js
// 로그 필터를 'SpiderGen'으로 설정
afc.setLogFilter('SpiderGen');

// 필터에 해당하는 로그만 출력
afc.log('This is a SpiderGen log message');  // 출력됨
afc.log('This is a different log message');  // 출력되지 않음
```

<br/>

### afc.setLogOption( option )

로그의 옵션을 설정

> ex ) 컴포넌트 정보를 로그에 포함할지 여부를 설정할 수 있음

* **option** `<Object>` 로그옵션 <br>
	> ex ) `{ compElement: false }`는 컴포넌트 요소 정보를 로그에 포함하지 않도록 설정합니다.

```js
// 로그 옵션 설정
afc.setLogOption({ compElement: false });

// 컴포넌트 정보를 포함하지 않은 로그 출력
afc.log('This is a log without component information');
```

<br/>

### afc.toFixed( num, fixed )

주어진 숫자를 소수점 `fixed` 자리 수 이하로 반올림하여 반환하는 함수

* **num** `<Number>` 소수점 자리 수를 조정할 숫자
* **fixed** `<Number>` 반환할 소수점 자리 수

```js
// 숫자를 소수점 2자리까지 반올림
const result = afc.toFixed(12.3456, 2);
console.log(result);  // "12.35"

// 숫자를 소수점 1자리까지 반올림
const result2 = afc.toFixed(12.3456, 1);
console.log(result2);  // "12.3"
```

<br/>

### afc.toFixed2( value )

주어진 숫자를 소수점 2자리까지 반올림하여 반환하는 메소드

> 기본적으로 소수점 2자리로 반올림됩니다.

* **value** `<String>` 소수점 2자리로 반올림할 숫자

```js
// 소수점 2자리로 반올림
const result = afc.toFixed2(12.3456);
console.log(result);  // "12.35"
```

### afc.enableUserSelect( enable, element )

사용자가 텍스트를 선택할 수 있도록 허용 또는 금지

-   **enable** `<Boolean>` `true`일 경우 선택 가능, `false`일 경우 선택 금지
-   **element** `<HTMLElement, optional\>` 적용할 요소, 기본값은 `body`
    
```JS
afc.enableUserSelect(true, 
document.getElementById('myElement'));
```



<br/>


### afc.enableScrollIndicator()

모든 스크롤 가능한 요소에서 스크롤바를 숨기고 인디케이터 스타일을 적용


```js
afc.enableScrollIndicator();
```



<br/>


### afc.log( msg )

로그를 출력

-   **msg** `<String>` 출력할 메시지
    

```js
afc.log('최성식');
```




### afc.log2( msg )

추가적인 로깅을 수행


-   **msg** `<String>` 출력할 메시지
    

```js
afc.log2('This is a log message');
```



<br/>


### afc.stringifyOnce( obj, replacer, indent )

객체를 `JSON 문자열`로 변환하되, 순환 참조를 방지

-   **obj** `<Object>` 변환할 객체
    
-   **replacer** `<Function, optional>` JSON.stringify의 replacer 함수
    
-   **indent** `<Number, optional>` 들여쓰기 수준
    

**Returns:**

-   **변환된 JSON 문자열** `<String>`
    

```js
const obj = { a: 1, b: 2 };
console.log(afc.stringifyOnce(obj, null, 2));
```



<br/>


### afc.makeCompIdPrefix()

고유한 컴포넌트 ID 접두사를 생성

**Returns:**

-   **생성된 문자열** `<String>`


```js
const prefix = afc.makeCompIdPrefix();
console.log(prefix); // 예: '_1234--'
```

----------

### afc.mergeObject( curObj, newObj )

두 개의 객체를 병합

-   **curObj** `<Object>` 기존 객체
-   **newObj** `<Object>` 병합할 객체
    

**Returns:**

-   **병합된 객체** `<Object>`
    


```js
const merged = afc.mergeObject({ a: 1 }, { b: 2 });
console.log(merged); // { a: 1, b: 2 }
```


<br/>


### afc.loadSync( url )

동기 방식으로 JavaScript 파일을 로드

- **url** `<String>` 스크립트 파일 URL
    
```js
afc.loadSync('example.js');
```

<br/>

### afc.getFileSrc( fileName )

지정된 파일 이름에 대한 전체 URL 경로를 반환

- **fileName** `<String>` 가져올 파일의 이름
        
-   **Returns**: `<String>` 파일의 전체 경로 URL
        

    

```js
const filePath = afc.getFileSrc('image.png');
console.log(filePath); // "https://example.com/path/to/image.png"
```



### afc.setVersionMap( obj )

버전 맵을 설정하여 특정 파일의 버전을 관리

-   **obj** `<Object>` 버전 정보 객체
    
```js
afc.setVersionMap({ 'example.js': '1.0.0' });
```

<br/>


### afc.removeScript( url )

동적으로 추가된 JavaScript 파일을 제거

- **url** `<String>` 스크립트 파일 URL
    

```js
afc.removeScript('example.js');
```

<br/>


### afc.extendsClass( child, parent )

JavaScript의 프로토타입 기반 상속을 구현하는 함수

-   **child** `<Function>` 하위 클래스
-   **parent** `<Function>` 상위 클래스
        
```js
function Parent() {
    this.parentProperty = 'parent';
}

function Child() {
    Parent.call(this);
    this.childProperty = 'child';
}

afc.extendsClass(Child, Parent);

const instance = new Child();
console.log(instance.parentProperty); // "parent"
console.log(instance.childProperty); // "child"
```




### afc.existScriptSrc( chkSrc )

스크립트가 로드되어 있는지 확인

- **chkSrc** `<String>` 확인할 스크립트 경로
    

**Returns:**

-   존재 여부 `<Boolean>`
    
```js
const exists = afc.existScriptSrc('example.js');
console.log(exists);
```

<br/>

### afc.setIndexScriptMap()

인덱스 스크립트 맵을 설정하는 역할. 

> 이 함수는 주어진 스크립트 맵을 AFC 내부에서 관리하는 인덱스에 등록합니다.


-   **scriptMap** `<Object>` 인덱스로 등록할 스크립트 객체
        

    

```js
const scriptMap = {
    key1: 'value1',
    key2: 'value2'
};

afc.setIndexScriptMap(scriptMap);
```


<br/>


### afc.refreshApp()

애플리케이션을 강제로 새로고침


```js
afc.refreshApp();
```


<br/>


### afc.makeMeta()

메타 태그를 동적으로 생성하여 뷰포트 설정을 조정

```js
afc.makeMeta();
```
<br/>


### afc.changeScale( value, scale )

숫자를 지정된 배율(scale)로 변환하여 반환

```js
const result = afc.changeScale(150, 0.5);
console.log(result); // 75
```

-   **value** `<Number>` 변환할 숫자 값
-   **scale** `<Number>` 적용할 배율
        
-   **Returns**:
    
    -   `<Number>` 변환된 숫자 값
        

### afc.browserCheck()

현재 브라우저 환경을 감지하여 반환

```js
const browserInfo = afc.browserCheck();
console.log(browserInfo); 
// 예: { name: "Chrome", version: "97.0.4692.99" }
```

-   **Returns**:
    
    -   `<Object>` 브라우저 정보 (이름 및 버전 포함)

<br/>


### afc.deviceCheck()

현재 실행 중인 디바이스 유형을 감지

```js
afc.deviceCheck();
```

<br/>


### afc.addRule( sheet, selector, styles )

CSS 스타일 시트에 새로운 규칙을 추가

```js
const sheet = document.styleSheets[0];
afc.addRule(sheet, '.new-class', 'color: red; font-weight: bold;');
```

-   **sheet** `<CSSStyleSheet>` 스타일 시트 객체
-   **selector** `<String>` CSS 선택자
-   **styles** `<String>` 적용할 스타일 문자열
        


### afc.hogaComma( value )

숫자를 천 단위마다 콤마(,)로 구분하며, 값이 0이면 특수문자 "　"를 반환

```js
const result1 = afc.hogaComma(1234567);
console.log(result1); // "1,234,567"

const result2 = afc.hogaComma(0);
console.log(result2); // "　"
```

- **value** `<Number>` 숫자 값
        
-   **Returns**:
    
    -   **String** 변환된 값 (천 단위 콤마 포함, 값이 0이면 공백 문자 반환)


<br/>


### afc.formatTime( time )

시간을 `HH:mm` 형식으로 변환

```js
const result = afc.formatTime('1530');
console.log(result); // "15:30"
```

<br/>


### afc.formatHMS( seconds )

주어진 초 단위를 `HH:mm:ss` 형식의 문자열로 변환

```js
const result = afc.formatHMS(3661);
console.log(result); // "01:01:01"
```

- **seconds** `<Number>` 변환할 초 단위 값
        
-   **Returns**:
    
    -   `<String>`  `HH:mm:ss` 형식의 문자열



<br/>

### afc.switchButtonColor( comp )

버튼의 색상을 변경

```js
afc.switchButtonColor(document.getElementById('myButton'));
```

<br/>


### afc.plusfloorPercent(val)

숫자를 소수점 2자리까지 반올림한 후 `%` 기호를 추가하여 반환하는 함수

- **val** `<Number>` 변환할 숫자


```js
// 숫자를 소수점 2자리로 반올림 후 % 추가
const result = afc.plusfloorPercent(12.3456);
console.log(result);  // "12.35%"
```

<br/>

### afc.sigaTotalAmount( value )

**금액을 억 단위로 변환**하여 반환

> 변환된 값이 **0보다 적으면 소수점 2자리까지 반올림**하여 반환하고, **그렇지 않으면 3자리마다 콤마**를 추가하여 반환합니다.


- **value** `<Number>` 변환할 금액


```js
// 금액을 억 단위로 변환하여 반환
const result = afc.sigaTotalAmount(1500000000);
console.log(result);  // "15"

// 음수인 경우 소수점 2자리로 반올림
const result2 = afc.sigaTotalAmount(-1234567890);
console.log(result2);  // "-123.46"
```

<br/>

### afc.isResize()

화면 크기 조정 여부를 체크하는 메소드


```js
// 화면 크기 조정 여부 체크
if (afc.isResize) {
    console.log("화면이 리사이즈되었습니다.");
} else {
    console.log("화면이 리사이즈되지 않았습니다.");
}
```

<br/>

### Date.prototype.format( f )

`Date` 객체를 특정 형식으로 포맷**하는 메소드

> 사용자가 원하는 날짜 형식으로 변환할 수 있습니다.

- **f** `<String>` 날짜 형식 <br>
예 ) `'yyyy-MM-dd'`, `'MM/dd/yyyy'` 등

```js
// 현재 날짜를 'yyyy-MM-dd' 형식으로 포맷
const formattedDate = new Date().format('yyyy-MM-dd');
console.log(formattedDate);  // "2025-02-10"

// 현재 날짜를 'MM/dd/yyyy' 형식으로 포맷
const formattedDate2 = new Date().format('MM/dd/yyyy');
console.log(formattedDate2);  // "02/10/2025"
```

<br/>

### String.prototype.str( len )

**문자열을 반복하여 주어진 길이만큼 확장**하는 메소드

- **len** `<Number>` 생성할 문자열의 길이

```js
// 'abc' 문자열을 3번 반복하여 길이 9의 문자열을 생성
const result = 'abc'.str(3);
console.log(result);  // "abcabcabc"
```

<br/>

### String.prototype.zf( len )

**문자열 앞에 0을 추가하여 지정된 길이의 문자열을 생성**하는 메소드

> 문자열을 지정된 길이로 만들어주며, 부족한 자릿수는 0으로 채웁니다.

- **len** `<Number>` 문자열의 최종 길이


```js
// 숫자 5를 길이 4의 문자열로 변환하고 앞에 0을 추가
const result = '5'.zf(4);
console.log(result);  // "0005"

// 숫자 12를 길이 6의 문자열로 변환하고 앞에 0을 추가
const result2 = '12'.zf(6);
console.log(result2);  // "000012"
```

<br/>

### Number.prototype.zf( len )

**숫자를 문자열로 변환**한 후, **앞에 0을 추가하여 지정된 길이의 문자열을 생성**하는 메소드

- **len** `<Number>` 문자열의 최종 길이


```js
// 숫자 5를 길이 4의 문자열로 변환하고 앞에 0을 추가
const result = (5).zf(4);
console.log(result);  // "0005"

// 숫자 12를 길이 6의 문자열로 변환하고 앞에 0을 추가
const result2 = (12).zf(6);
console.log(result2);  // "000012"
```

<br/>

### String.prototype.replaceAt(inx, searchVal, newVal)

문자열에서 **특정 위치에 있는 부분을 다른 값으로 교체**하는 메소드

- **inx** `<Number>` 교체를 시작할 위치
- **searchVal** `<String>` 교체할 값
- **newVal** `<String>` 새로 교체할 값


```js
// 문자열에서 2번째 위치부터 "XX"로 교체
const result = 'Hello World'.replaceAt(6, 'World', 'XX');
console.log(result);  // "Hello XX"
```

<br/>

###  window.onunhandledrejection

비동기 코드에서 발생한 처리되지 않은 Promise 거부(rejection)를 감지하고, 오류를 로깅하거나 적절한 예외 처리를 수행


```js
window.onunhandledrejection = function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
};

// 예제: Promise 거부 발생
new Promise((resolve, reject) => {
    reject(new Error('Promise Failed'));
});
```

> 이제 브라우저 콘솔에서 `Unhandled Promise Rejection: Error: Promise Failed` 메시지가 출력됩니다.





### window.onerror( message, url, lineNumber, colNumber, error )

전역 오류 핸들러로, 스크립트 실행 중 오류가 발생하면 해당 정보를 로그로 기록

```js
window.onerror = function(message, url, lineNumber, colNumber, error) {
    console.error(`오류 발생: ${message} at ${url}:${lineNumber}:${colNumber}`);
};        
```

<br/>


### afc.loadCSSIfNotLoaded()

스타일시트가 로드되지 않았을 경우 이를 감지하고 다시 로드

```js
afc.loadCSSIfNotLoaded();
```

<br/>

### afc.scriptWait

여러 개의 비동기 스크립트 로드를 기다리는 객체로, <br>
모든 스크립트가 로드된 후에 실행할 콜백을 지정 가능.

    
```js
afc.scriptWait.waitAllProm().then(function(values) {
    console.log('모든 스크립트가 로드 완료되었습니다');
});
```

<br/>


### afc.queryReady( acomp, callback )

비동기적으로 **쿼리 로드 완료를 대기**하는 함수.

>   내부적으로 `afc.qryWait.waitAllProm()`을 사용

-   acomp `<AComponent>` : 쿼리 적용 대상
-   callback `<Function>` : 완료 후 실행할 함수

```js
afc.queryReady(myComponent, function() {
    console.log("쿼리 로드 완료!");
});
```
<br>

### afc.qryWait

비동기적으로 로드되는 쿼리 작업이 완료될 때까지 대기하는 객체

모든 쿼리가 완료되면 지정한 콜백을 실행.

    
```js
afc.qryWait.waitAllProm().then(function(values) {
    console.log('모든 쿼리가 로드 완료되었습니다');
});
```

<br/>

### afc.isLoadCache()

현재 캐시 로딩이 활성화되어 있는지 확인

```js
const isCached = afc.isLoadCache();
console.log(isCached); // true 또는 false
```

### afc.enableLoadCache( enable )

캐시 로딩 기능을 활성화 또는 비활성화

-   **enable** `<Boolean>` 캐시 로딩 활성화 여부 (true: 활성화, false: 비활성화)
        

```js
afc.enableLoadCache(true); // 캐시 로딩 활성화
```


### afc.loadHtmlSync(trgEle, url, callback, searchValue, newValue)

버전 맵을 설정하여 특정 파일의 버전을 관리

- **trgEle** `<HTMLElement>` HTML을 로드하여 삽입할 대상 DOM 요소
- **url** `<String>` 로드할 HTML 파일의 URL
- **callback** `<Function>` HTML 파일을 로드한 후 실행할 콜백 함수

	> 이 함수는 로드된 HTML 문자열을 인수로 받습니다.

-  **searchValue** `<String>` HTML 파일에서 치환할 텍스트를 찾을 값
-  **newValue** `<String>` 치환할 새로운 텍스트
    
```js
afc.loadHtmlSync(
	document.getElementById('content'), 
		'example.html', 
		function(txt) {
		    console.log('HTML 로드 완료:', txt);
	}
);
```

<br/>

### afc.makeCompIdPrefix()

고유한 컴포넌트 ID 접두사를 생성하는 메소드

> 이 메소드는 매번 호출될 때마다 증가하는 숫자를 기반으로 고유한 ID 접두사를 반환

> 이 메소드는 컴포넌트 ID를 동적으로 생성할 때 유용하며, <br>
> 예를 들어 여러 컴포넌트를 고유하게 구분할 수 있는 ID 접두사를 제공
    
```js
const prefix = afc.makeCompIdPrefix();
console.log(prefix); // 예: '_1--'
```

<br/>