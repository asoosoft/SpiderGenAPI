# LocalizeManager

스파이더젠으로 만든 프로젝트를 여러지역의 언어로 지원하기 위한 라이브러리.<br/> 자세한 사용 방법은 [이곳](https://wikidocs.net/42749)을 참조.

## Static Variables

### LocalizeManager.DATA_ARRAY `<Array>`

현재 번역 데이터가 저장된 배열.  
초기 로드 시 `LANGUAGE`에 따라 다르게 설정.

### LocalizeManager.LANGUAGE `<String>`

현재 언어를 가지고 있는 변수. <br/>브라우저의 언어설정에 의해 자동으로 설정. 브라우저의 설정에 상관없이 바꾸고 싶다면 직접 언어코드를 변수에 삽입.

```js
//국가별 표준 언어 코드값을 넣는다.
LocalizeManager.LANGUAGE = 'ko';
LocalizeManager.LANGUAGE = 'ch';
```

### LocalizeManager.FLAVOR  `<String>`

같은 언어라도 지역(Flavor)에 따라 번역이 다를 수 있음.<br/>
예를 들어, **en-US**(미국 영어)와 **en-GB**(영국 영어)의 표현이 다를 수 있음.<br/>
**LocalizeManager.FLAVOR**값을 변경하면, 해당 지역 버전의 번역을 적용.

<br>

### LocalizeManager.resMap `<Object>`

**JSON 번역 데이터를 저장하는 객체**.<br/>
**LocalizeManager.loadMap()**을 호출하면 로드.<br/>
개발자가 직접 값을 변경 가능.

```js
console.log(LocalizeManager.resMap['ko']) // 한국어 번역 데이터 출력
```

## Static Methods

### LocalizeManager.getLocalizedStr( key )

현재 설정된 언어 맵에서 매개변수 key에 매핑되는 값을 반환하는 함수.

- **key** `<String>` 번역할 키값
- **Returns** `<String>` or `<null>` (번역될 문자열, 없을 경우 **null**)

```js
console.log(LocalizeManager.LANGUAGE);
// -> ko
//현재 설정된 언어값이 한국어(ko) 라고 가정했을 때
LocalizeManager.getLocalizedStr('sun');
//맵에서 키값인 sun에 맵핑된 한국어 값을 가져와서 리턴한다.
```

### LocalizeManager.loadMap()

JSON 파일에서 번역 데이터를 불러옴.<br/>
**PROJECT_OPTION.general.localizing** 값이 **true**일 경우 자동 실행.

* **Returns**  `<void>`

```js
LocalizeManager.loadMap(); // 번역된 데이터 로드
console.log(LocalizeManager.resMap); // 로드된 번역 데이터 확인
```

### LocalizeManager.getLanguage()
**브라우저의 기본 언어를 감지**하여 반환.

* **Returns** `<String>`

```js
console.log(LocalizeManager.getLanguage()); // 예: "en", "ko", "zh"
```

### LocalizeManager.getFlavor()

현재 설정된 **Flavor 값을 반환**.

* **Returns** `<String>`  현재 Flavor 값

```js
let currentFlavor = LocalizeManager.getFlavor();
console.log(currentFlavor); // "us" 또는 "kr"
```

### LocalizeManager.setFlavor(flavor)
**Flavor 값을 변경하고, UI에 적용된 번역을 업데이트**.

* **flavor** `<String>` 변경할 Flavor 값
* **Returns** `<void>`

```js
LocalizeManager.setFlavor('us'); // 미국 영어 적용
LocalizeManager.setFlavor('zh'); // 중국어 적용
```

### LocalizeManager.isExistFile(url, lang)

해당 언어 파일이 존재하는 확인하는 기능.<br/>
**번역 파일 존재 여부를 확인하는 기능**

* **url** `<String>` 확인할 파일 경로
* **lang** `<String>` 언어 코드 (예: `"en"`, `"ko"`)
* **Returns** `<Boolean>` (파일 존재 여부)

```js
if (LocalizeManager.isExistFile('Resource/localization.json','en')) {
	console.log("영어 번역 파일이 존재합니다.");
	}
}
```

### LocalizeManager.conversionText(key, callback)
`getLocalizedStr(key)`를 내부적으로 호출하여 번역을 가져오고, 콜백을 실행.
* **key** `<String>` 번역할 키 값
* **callback** `<Function>` 번역된 텍스트를 처리할 함수
* **Retruns** `<void>`

```js
LocalizeManager.conversionText('hello', function(text){
	console.log(text); // "안녕하세요" (한국어로 설정 시)
})
```

## Instance Methods

### String.prototype.localize()
문자열을 자동으로 번역하는 기능.

* **Returns** `<String>` (번역된 문자열)

```js
console.log("hello".localize()); // "안녕하세요" (한국어로 설정 시)
```

💡 **활용법**

HTML에서 `data-localizing-key` 속성을 사용하여 UI 자동 번역 적용 가능

```html
<p data-localizing-key="welcome_message">Welcome</p>
```

```js
document.querySelector('p').textContent = "welcome_message".localize();
```