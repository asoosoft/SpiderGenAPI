# AppManager


**AppManager**는 애플리케이션의 전반적인 **관리 기능**을 제공하는 클래스

-   **화면 방향 제어** (가로/세로 모드 설정)
-   **웹뷰(WebView) 관리**
-   **네트워크 및 시스템 정보 조회**
-   **파일 및 데이터 관리**
-   **앱 환경 설정 (진동, 사운드, 로그 등)**
-   **앱 종료 및 시스템 제어**


## Class Variables

### 화면 방향 설정

|상수명|값  |설명|
|--|--|--|
| SCREEN_ORIENTATION_LANDSCAPE | 0 | 가로 모드|
| SCREEN_ORIENTATION_PORTRAIT | 1 | 세로 모드|
| SCREEN_ORIENTATION_SENSOR | 4 |센서 기반 자동 방향 전환 |
| SCREEN_ORIENTATION_SENSOR_LANDSCAPE | 6 | 센서를 활용한 가로 모드|
| SCREEN_ORIENTATION_REVERSE_LANDSCAPE | 8 | 반전된 가로 모드|
| SCREEN_ORIENTATION_REVERSE_PORTRAIT | 9 | 반전된 세로 모드|

___

### 프로세스 관련 설정

|변수명|기본값  |설명|
|--|--|--|
| PROGRESS_SHOW | 1 | 프로그레스 시작 상태|
| PROGRESS_HIDE | 0 | 프로그레스 숨김 상태|
| IS_PROGRESS_SHOW | false |프로그레스 표시 여부 |
| isHidePatchView | false | 패치뷰 숨김 여부|
| isShowProgress | false | 프로그레스 상태 여부|
| TOUCH_DELAY_TIME | 300 | 터치 딜레이 시간(ms)|

___

<br>


## Instance Methods

### 웹뷰 ( WebView ) 관리


### loadWebView(ele, url)

지정된 ele(HTML 요소) 위치에 웹뷰(WebView)를 로드

 -   **ele** `<HTMLElement>` : 웹뷰를 표시할 요소
 -   **url** `<String>` : 로드할 웹페이지 URL

```js
AppManager.loadWebView($('#webContainer'), 'https://example.com');
```

<br>

### destroyWebView(ele)

웹뷰(WebView)를 제거

-   **ele** `<HTMLElement>` : 제거할 웹뷰 요소

```js
AppManager.destroyWebView($('#webContainer'));
```

<br>

### bringToFront(isFront)

앱을 화면 앞으로 가져옴

-   **isFront** `<Boolean>` <br>
true: 앞으로 가져오기, false: 뒤로 보내기

```js
AppManager.bringToFront(true);
```

<br>

### goUrl(url, isClose)

주어진 URL을 열고, 선택적으로 화면을 닫음

-   **url** `<String>` : 이동할 URL
- **isClose** `<Boolean>` <br>
true이면 URL을 열고 창을 닫음, false는 창을 닫지 않음

```js
AppManager.goUrl("https://example.com", true);
```

<br>

### goUrlWebView(url)

웹뷰에서 URL을 엶

-   **url** `<String>` : 웹뷰에서 열 URL

```js
AppManager.goUrlWebView("https://example.com");
```

<br>

### openPdf(url)

PDF 파일을 엶

-   **url** `<String>` : PDF 파일 URL

```js
AppManager.openPdf("https://example.com/sample.pdf");
```

<br>

### openChrome(url)

Chrome 브라우저에서 URL을 엶

-   **url** `<String>` : 열 URL

```js
AppManager.openChrome("https://example.com");
```

<br>

### openChromeCustom(url)

커스텀 Chrome 브라우저에서 URL을 엶

-   **url** `<String>` : 열 URL

```js
AppManager.openChromeCustom("https://example.com");
```

---

### 앱 설정 및 정보

### setOrientation(orientation)

화면 방향을 설정

-   **orientation** `<Number>` <br>
AppManager.SCREEN_ORIENTATION_* 상수 사용

```js
AppManager.setOrientation(AppManager.SCREEN_ORIENTATION_PORTRAIT);
```

<br>

### setPortrait(isPortrait)

세로 또는 가로 모드를 설정

- **isPortrait** `<Boolean>` <br>
 true: 세로 모드, false: 가로 모드

```js
AppManager.setPortrait(true);
```

<br>

### getSystemInfo(callback)

시스템 정보를 가져옴

- **callback** `<Function>` 시스템 정보 결과를 받는 콜백 함수

```js
AppManager.getSystemInfo(function(info) {
    console.log("System Info:", info);
});
```

<br>

### getModelName(callback)

기기 모델명을 가져옴

- **callback** `<Function>` 모델명을 받는 콜백 함수

```js
AppManager.getModelName(function(model) {
    console.log("Device Model:", model);
});
```

<br>

### getAppName(callback)

앱 이름을 가져옴

-   **callback** `<Function>` : 앱 이름 결과를 받는 콜백 함수

```js
AppManager.getAppName(function(name) {
    console.log("App Name:", name);
});
```

<br>

### getVersion(callback)

앱 버전을 가져옴

-   **callback** `<Function>` : 버전 정보를 받는 콜백 함수

```js
AppManager.getVersion(function(version) {
    console.log("App Version:", version);
});
```

<br>

### getAppId(callback)

앱의 고유 ID를 가져옴

-   **callback** `<Function>` : 앱 ID를 받는 콜백 함수

```js
AppManager.getAppId(function(appId) {
    console.log("App ID:", appId);
});
```

<br>

### getUuid(callback)

기기의 고유 UUID를 가져옴

이 값은 일반적으로 장치나 사용자를 구별하는 데 사용

-   **callback** `<Function>` : UUID를 받은 후 처리할 콜백 함수

```js
AppManager.getUuid(function(uuid) {
    console.log("Device UUID:", uuid);
});
```

<br>

### enableApp(isEnable)

앱을 활성화하거나 비활성화

-   **isEnable** `<Boolean>` <br> 
true: 앱 활성화, false: 앱 비활성화

```js
AppManager.enableApp(false); // 비활성화 
AppManager.enableApp(true); // 활성화
```

<br>

### exitApp()

앱을 종료

```js
AppManager.exitApp();
```

<br>

### touchDelay()

터치 딜레이를 적용하여 사용자가 너무 빠르게 앱을 조작하는 것을 방지

```js
AppManager.touchDelay();
```

<br>

### applyPref()

앱의 환경 설정을 적용

```js
AppManager.applyPref();
```


<br>

### hidePatchView()

패치뷰를 숨김

```js
AppManager.hidePatchView();
```


---

### 파일 및 데이터 관리

### deleteFile(path)

파일을 삭제

-   **path** `<String>` : 삭제할 파일 경로

```js
AppManager.deleteFile('/storage/emulated/0/Download/sample.txt');
```
<br>

### downloadFile(url)

파일을 다운로드

-   **url** `<String>` : 다운로드할 파일 URL

```js
AppManager.downloadFile('https://example.com/sample.pdf');
```

<br>

### getImageBase64(url, callback)

이미지를 Base64 형식으로 변환

-   **url** `<String>` : 변환할 이미지 URL
-   **callback** `<Function>` : 변환된 Base64 데이터를 받을 콜백 함수

```js
AppManager.getImageBase64('https://example.com/image.jpg', function(data) {
    console.log("Base64 Image:", data);
});
```

<br>

### setPref(key, val)

환경 설정에 값을 저장

-   **key** `<String>` : 설정 키
-   **val** `<String>` : 설정 값

```js
AppManager.setPref("userName", "홍길동");
```

<br>

### getPref(key, callback)

저장된 환경 설정 값을 가져옴

-   **key** `<String>` : 설정 키
-   **callback** `<Function>` : 값을 받은 후 처리할 콜백 함수

```js
AppManager.getPref("userName", function(value) { 
	console.log("저장된 사용자 이름:", value); 
});
```

<br>

### clearPref(key)

특정 설정 값을 삭제

-   **key** `<String>` : 삭제할 설정 키

```js
AppManager.clearPref("userName");
```

---

### 사용자 인터페이스 및 알림

### showNotification(message)

알림을 표시

-   **message** `<String>` : 표시할 메시지

```js
AppManager.showNotification("업데이트가 완료되었습니다.");
```

<br>

### appAlert(alertInfo, callback)

앱 내 알림창을 표시

-   **alertInfo** `<Array>` : 알림창에 전달할 정보
-   **callback** `<Function>` : 사용자 응답을 처리할 콜백 함수

```js
AppManager.appAlert(["알림", "업데이트가 필요합니다.", "확인"], function(response) {
    console.log("User Response:", response);
});
```

<br>

### closeAppAlert(msg)

앱 내 알림창을 닫음

-   **msg** `<String>` :  닫을 때 사용할 메시지

```js
AppManager.closeAppAlert("앱 닫겠습니다.");
```


<br>

### vibrator()

기기에서 진동을 발생

```js
AppManager.vibrator();
```

<br>

### beep(volumn)

지정된 볼륨으로 비프음을 발생

-   **volumn** `<Number>` :  볼륨 크기

```js
AppManager.beep(1); // 최대 볼륨
```

---

### 네트워크 및 시스템 정보

### getIpAddress(callback)

기기의 공인 IP 및 사설 IP를 가져옴

-   **callback** `<Function>` : public IP, private IP 를 받는 콜백 함수

```js
AppManager.getIpAddress(function(publicIp, privateIp) {
    console.log("Public IP:", publicIp, "Private IP:", privateIp);
});
```

<br>

### getPhoneInfo(callback)

휴대전화 정보를 가져옴

-   **callback** `<Function>` : 전화번호 정보 객체를 받는 콜백 함수

```js
AppManager.getPhoneInfo(function(info) {
    console.log("Phone Info:", info);
});
```


<br>

### getResponseText(url, callback)

지정된 URL에서 응답 텍스트를 가져옴 

주로 서버와 통신할 때 사용

-   **url** `<String>` : 응답을 가져올 URL
-   **callback** `<Function>` : 전화번호 정보 객체를 받는 콜백 함수

```js
AppManager.getResponseText("https://example.com/api/data", function(responseText) {
    console.log("Response Text:", responseText);
});
```

---

### 프로그레스 ( Progress ) 관리

### showProgress(sec)

프로그레스를 표시

-   **sec** `<Number>` : 제한 시간(초)

```js
AppManager.showProgress(30);
```

<br>

### hideProgress()

프로그레스를 숨김

```js
AppManager.hideProgress();
```

<br>

### beginOltp(sec)

OLTP(Online Transaction Processing) 프로세스를 시작

- **sec** `<Number>`: 제한 시간(초)

```js
AppManager.beginOltp(60);
```

<br>

### endOltp()

OLTP 프로세스를 종료

```js
AppManager.endOltp();
```

___

### 앱 호출 및 링크 처리

### callApp(schemaUrl, marketUrl)

앱을 호출하거나, 앱이 설치되지 않은 경우 마켓 링크로 이동

-   **schemaUrl** `<String>` : 앱을 호출할 URL 스키마
- **marketUrl** `<String>` : 마켓 링크 (앱이 설치되지 않았을 경우)

```js
AppManager.callApp("myapp://", "https://play.google.com/store/apps/details?id=com.example");
```

<br>

### goDeepLink(schemaUrl, marketUrl)

딥 링크를 사용해 앱을 호출하거나, 앱이 없으면 마켓 링크로 이동

-   **schemaUrl** `<String>` : 딥 링크 URL
- **marketUrl** `<String>` : 마켓 링크 (앱이 설치되지 않았을 경우)

```js
AppManager.goDeepLink("myapp://home", "https://play.google.com/store/apps/details?id=com.example");
```


<br>

### callApplication()

다른 앱을 호출

```js
AppManager.callApplication();
```
___

### 시스템 로그

### addLog(txt)

시스템 로그에 메시지를 추가

-   **txt** `<String>` :  로그에 기록할 메시지

```js
AppManager.addLog("앱 시작됨");
```


<br>

### consoleLog(msg)

콘솔에 로그 메시지를 출력

주로 iOS에서 사용

-   **msg** `<String>` :  출력할 로그 메시지

```js
AppManager.consoleLog('이것은 로그 메시지입니다.');
```
___


### 통화, 메시지, 이메일 전송

### sendSMS(phone, msg)

지정된 전화번호로 SMS를 보냄

-   **phone** `<String>` :  전화번호
- **msg** `<String>` :  메시지

```js
AppManager.sendSMS("010-1234-5678", "안녕하세요!");
```

<br>

### phoneCall(phoneNumber, doCall)

전화 걸기 기능

-   **phoneNumber** `<String>` :  전화번호
- **doCall** `<Boolean>` <Br>
true이면 전화 걸기, false이면 링크로 이동

```js
AppManager.phoneCall("010-1234-5678", true);
```

<br>

### sendEmail(mailAddr, mailTitle, mailContent)

주어진 이메일 주소로 이메일을 보냄

-   **mailAddr** `<String>` : 받는 사람 이메일 주소
- **mailTitle** `<String>` : 이메일 제목
- **mailContent** `<String>` : 이메일 본문 내용

```js
AppManager.sendEmail("example@example.com", "제목", "내용");
```

---


### 인코딩 및 디코딩

### wowEncode(str, callback)

문자열을 인코딩

-   **str** `<String>` :  인코딩할 문자열
- **callback** `<Function>` :  인코딩된 결과를 받을 콜백 함수

```js
AppManager.wowEncode("sample text", function(encoded) {
    console.log("Encoded Text:", encoded);
});
```

<br>

### wowExEncode(str, callback)

확장 인코딩을 수행

-   **str** `<String>` :  인코딩할 문자열
- **callback** `<Function>` : 인코딩된 결과를 받을 콜백 함수

```js
AppManager.wowExEncode("sample text", function(encoded) {
    console.log("Extended Encoded Text:", encoded);
});
```

<br>

### wowDecode(str, callback)

문자열을 디코딩

-   **str** `<String>` :  디코딩할 문자열
- **callback** `<Function>` : 디코딩된 결과를 받을 콜백 함수

```js
AppManager.wowDecode("encoded text", function(decoded) {
    console.log("Decoded Text:", decoded);
});
```

<br>

### wowExDecode(str, callback)

확장 디코딩을 수행

-   **str** `<String>`:  디코딩할 문자열
- **callback** `<Function>` : 디코딩된 결과를 받을 콜백 함수

```js
AppManager.wowExDecode("encoded text", function(decoded) {
    console.log("Extended Decoded Text:", decoded);
});
```

---


### 스크린 샷 및 오디오

### screenShoot(callback, filename)

스크린샷을 캡처하고 지정된 파일 이름으로 저장

-   **callback** `<Function>` :  캡처된 결과를 받을 콜백 함수
- **filename** `<String>` : 저장할 파일 이름

```js
AppManager.screenShoot(function(result) {
    console.log("스크린 샷 캡처:", result);
}, 'screenshot.png');
```

<br>

### screenshoot(callback)

스크린샷을 캡처하고 결과를 콜백 함수로 전달

파일 이름을 지정하지 않으면 기본 이름으로 저장

-   **callback** `<Function>` :  캡처된 결과를 받을 콜백 함수

```js
AppManager.screenshoot(function(result) {
	 console.log("스크린 샷 캡처:", result); 
});
```

<br>

### playAudio(url)

지정된 URL에서 오디오 파일을 재생

-   **url** `<String>` :  재생할 오디오 파일의 URL

```js
AppManager.playAudio('https://example.com/audio.mp3');
```


<br>


## Example Usage

```js
// 앱 버전 가져오기
AppManager.getVersion(function(version) {
    console.log("App Version:", version);
});

// 프로그레스 표시
AppManager.showProgress(10);

// 네트워크 정보 가져오기
AppManager.getIpAddress(function(publicIp, privateIp) {
    console.log("Public IP:", publicIp, "Private IP:", privateIp);
});

// 웹뷰 로드
AppManager.loadWebView($('#webView'), 'https://example.com');

// 파일 삭제
AppManager.deleteFile('/storage/emulated/0/sample.txt');
```