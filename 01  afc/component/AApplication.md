# AApplication

**AApplication** 클래스는 응용 프로그램을 관리하는 핵심 클래스.  

프로그램 실행의 구조와 흐름을 정의하며, 여러 유틸리티 메서드를 제공.  

주요 메서드들은 애플리케이션의 상태를 관리하고 UI를 조작하며, 테마 변경이나 파일 처리 등의 기능을 수행.

## Instance Variables

### **rootContainer**: `<AContainer>`  
  - 응용 프로그램의 최상위 컨테이너.  
  - 화면을 직접 표현하지 않으며, mainContainer의 부모 컨테이너 역할.  

### **mainContainer**: `<AContainer>`  
  - **rootContainer**에 추가되는 유일한 컨테이너.  
  - 화면의 주요 내용을 표시하는 역할.  

### **mdiManager**: `<MDIManager>`  
  - 여러 문서를 동시에 관리할 수 있는 MDI 시스템을 담당하는 객체.  

### **webHistoryMgr**: `<WebHistoryManager>`  
  - 웹 페이지나 다른 화면 전환을 관리하는 객체.  

### **orientation**: `<String>`  
  - 화면의 방향 (portrait 또는 **landscape**)을 저장하는 변수.  

### **curPath**: `<String>`  
  - 응용 프로그램의 현재 실행 경로를 저장하는 변수.  

### **keyDownListeners**: `<Array>`  
  - **keydown** 이벤트 리스너 목록.  

### **keyUpListeners**: `<Array>`  
  - **keyup** 이벤트 리스너 목록.  

### focusedBrowser `<Browser>`  
현재 포커스를 받고 있는 브라우저 객체를 참조하는 클래스 변수. 

여러 브라우저 창 또는 탭 중에서 어떤 브라우저에 포커스가 있는지 추적하는 데 사용.  

```js
// focusedBrowser를 통해 포커스된 브라우저에 접근
console.log(theApp.focusedBrowser);
```

## Instance Methods 
### onReady()
응용 프로그램이 초기화될 때 호출되는 메서드. 

컨테이너 초기화 및 키보드 이벤트 설정을 수행.  

```js
theApp.onReady();
```

### onClose()
응용 프로그램이 종료될 때 호출되는 메서드. 

**false**를 반환하면 종료되지 않음.  

```js
if (theApp.onClose()) {
    console.log("앱 종료");
}
```

### onError(message, url, lineNumber, colNumber, error)
스크립트 오류가 발생하면 호출되는 메서드.  

-   **message** `<String>`: 오류 메시지
-   **url** `<String>`: 오류가 발생한 파일의 URL
-   **lineNumber** `<Number>`: 오류가 발생한 줄 번호
-   **colNumber** `<Number>`: 오류가 발생한 열 번호
-   **error** `<Error>`: 오류 객체

```js
window.onerror = function(msg, url, line, col, err) {
    return theApp.onError(msg, url, line, col, err);
};
```

### unitTest(unitUrl)
 단위 테스트를 실행하는 함수.  

**unitUrl** `<String>`: 테스트할 URL

```js
theApp.unitTest('test.html');
```

### setCurrentPath()
현재 실행 중인 애플리케이션의 경로를 설정하는 메서드.  

```js
theApp.setCurrentPath();
```

### getCurrentPath()
현재 애플리케이션 실행 경로를 반환하는 메서드.  

```js
console.log(theApp.getCurrentPath());
```

### getDataPath()
애플리케이션의 데이터 저장 경로를 반환.  

```js
console.log(theApp.getDataPath());
```

### getProcessPath()
실행 중인 프로세스의 경로를 반환.  

```js
console.log(theApp.getProcessPath());
```

### changeActiveMdiManager(mdiManager)
활성화된 MDI 매니저를 변경하는 함수.  

mdiManager `<MDIManager>`: 활성화할 새로운 MDI 매니저 객체.

```js
theApp.changeActiveMdiManager(newMDIManager);
```

### openDocTmplFile(filePath, noLoad, bSilent)
문서 템플릿 파일을 오픈.  

-   **filePath** `<String>`: 파일 경로
-   **noLoad** `<Boolean>`: 로드 여부
-   **bSilent** `<Boolean>`: 조용히 열지 여부

```js
theApp.openDocTmplFile('path/to/file');
```

### saveActiveDocTmplFile()
현재 활성화된 문서를 저장.  

```js
theApp.saveActiveDocTmplFile();
```

### closeActiveDocTmplFile(callback, isForce, isSave)
현재 활성화 된 문서를 닫음.  

-   **callback** `<Function>`: 문서가 닫힌 후 호출될 콜백 함수
-   **isForce** `<Boolean>`: 강제 종료 여부
-   **isSave** `<Boolean>`: 저장 여부

```js
theApp.closeActiveDocTmplFile(myCallback, true, false);
```


### getOrientation()
화면 방향(**portrait** 또는 **landscape**)을 반환하는 메서드.  

```js
console.log(theApp.getOrientation());
```

### setMainContainer(container)
메인 컨테이너를 설정하는 메서드.  

**container** `<AContainer>`: 설정할 메인 컨테이너 객체

```js
theApp.setMainContainer(new AContainer());
```

### getMainContainer()
현재 메인 컨테이너를 반환하는 메서드.  

```js
console.log(theApp.getMainContainer());
```

### getRootContainer()
루트 컨테이너를 반환하는 메서드.  

```js
console.log(theApp.getRootContainer());
```

### getActiveContainer()
현재 활성화된 컨테이너를 반환하는 메서드.  

```js
console.log(theApp.getActiveContainer());
```

### getActiveView()
현재 활성화된 컨테이너의 뷰를 반환하는 메서드.  

```js
console.log(theApp.getActiveView());
```

### getActiveDocument()
현재 활성화된 컨테이너의 문서 객체를 반환하는 메서드.  

```js
console.log(theApp.getActiveDocument());
```

### initKeyEvent()
키보드 이벤트를 초기화하는 메서드.  

```js
theApp.initKeyEvent();
```

### onBackKeyManage()
안드로이드의 백 버튼을 처리하는 함수.  

```js
if (theApp.onBackKeyManage()) {
    console.log('백키 이벤트 처리됨');
}
```

### addKeyEventListener(type, listener)
키 이벤트 리스너를 추가.  

-   **type** `<String>`: 이벤트 타입 (**keydown**, **keyup** 등)
-   **listener** `<Function>`: 이벤트 리스너 함수

```js
theApp.addKeyEventListener('keydown', myKeyListener);
```

### removeKeyEventListener(type, listener)
키 이벤트 리스너를 제거.  

-   **type** `<String>`: 이벤트 타입 (**keydown**, **keyup** 등)
-   **listener** `<Function>`: 제거할 이벤트 리스너 함수

```js
theApp.removeKeyEventListener('keydown', myKeyListener);
```

### enableHotReload()
개발 환경에서 파일 변경 감지를 활성화하는 함수.  

```js
theApp.enableHotReload();
```

### reportThemeEvent(preTheme, curTheme)
테마 변경 이벤트를 브로드캐스트하는 함수.  

-   **preTheme** `<String>`: 이전 테마 이름
-   **curTheme** `<String>`: 현재 테마 이름

```js
theApp.reportThemeEvent('light', 'dark');
```

### addThemeEventListener(callback)
테마 변경 이벤트 리스너를 추가하는 메서드.  

**callback** `<Function>`: 테마 변경 시 호출될 콜백 함수

```js
theApp.addThemeEventListener(myThemeCallback);
```

### removeThemeEventListener(callback)
등록된 테마 변경 이벤트 리스너를 제거하는 메서드.  

**callback** `<Function>`: 제거할 콜백 함수

```js
theApp.removeThemeEventListener(myThemeCallback);
```

### disableHotReload()
핫 리로드 기능을 비활성화하고, 감시 중이던 모든 파일 감시를 종료하는 역할.

```js
theApp.disableHotReload();
console.log("핫 리로드 비활성화됨");
```

### isHotReload()
핫 리로드 기능이 활성화되어 있는지 여부를 반환.

- **Returns**: `<Boolean>`  
  - **true** : 핫 리로드가 활성화 됨  
  - **false** : 핫 리로드가 비활성화 됨

```js
if (theApp.isHotReload()) {
    console.log("핫 리로드가 활성화되어 있습니다.");
} else {
    console.log("핫 리로드가 비활성화되어 있습니다.");
}
```

### watchReloadFile(aview)
특정 뷰 파일(.lay 또는 연결된 .js 파일)에 대한 변경 감지를 설정하고, 변경 시 자동으로 다시 로드되도록 함.

  - **aview** `<AView>` : 감시할 뷰 객체  

```js
var myView = new AView();
theApp.watchReloadFile(myView);
console.log("뷰 파일 변경 감시 활성화됨");
```

### getTheme()
현재 애플리케이션에 적용된 테마의 이름을 반환. 

테마는 애플리케이션의 전반적인 색상, 스타일 등을 정의하는 요소.

**Returns**: `<String>` 현재 적용된 테마의 이름을 반환.

```js
function MyTestApp*onReady() {
    super.onReady();

    // 현재 적용된 테마 이름을 가져옴.
    var currentTheme = this.getTheme();
    console.log("현재 테마: " + currentTheme);
}
```
### setTheme()
애플리케이션의 테마를 변경하는 기능을 제공. 사용자가 지정한 테마 이름에 따라 애플리케이션의 스타일을 업데이트.

**theme** `<String>`: 변경할 테마의 이름.

```js
function MyTestApp*onReady() {
    super.onReady();

    // 'dark' 테마로 변경.
    this.setTheme('dark');
    console.log("테마가 'dark'로 변경되었습니다.");
}
```
### loadThemeInfo()
애플리케이션에서 사용 가능한 테마 정보를 로드하는 기능을 제공. 

이 메서드는 테마의 세부 정보를 가져와서 애플리케이션에서 사용할 수 있도록 준비.

```js
function MyTestApp*onReady() {
    super.onReady();

    // 테마 정보를 로드.
    this.loadThemeInfo();
    console.log("테마 정보가 로드되었습니다.");
}
```

### onResize
애플리케이션의 창 크기가 변경될 때 호출되는 메서드. 

주로 사용자 인터페이스의 레이아웃을 조정하거나, 크기 변경에 따라 필요한 추가 작업을 수행하는 데 사용.

```js
function MyTestApp*onResize() {
    // 창 크기가 변경될 때 호출.
    console.log("창 크기가 변경되었습니다.");

    // 레이아웃을 조정하거나 추가 작업을 수행.
    this.adjustLayout();
}

function MyTestApp*adjustLayout() {
    // 레이아웃 조정 로직을 여기에 작성.
    console.log("레이아웃이 조정되었습니다.");
}
```
## Events  

### orientationchange  
장치의 화면 방향(**portrait**, **landscape**)이 변경될 때 발생하는 이벤트.  

모바일 및 태블릿 환경에서 화면 회전 감지 시 유용하게 사용.  

```js
window.addEventListener("orientationchange", function() {
    console.log("화면 방향이 변경되었습니다. 현재 방향:", theApp.getOrientation());
});
```

### resize
브라우저 창 크기가 변경될 때 실행. 

창 크기 조정에 따라 UI를 동적으로 조정해야 할 때 활용.  

```js
window.addEventListener("resize", function() {
    console.log("창 크기가 변경되었습니다.");
    theApp.rootContainer.onResize(); // 컨테이너 리사이징 처리
});
```

### themechange 
애플리케이션 테마가 변경될 때 실행되는 이벤트.  

테마 변경 시 CSS 스타일을 동적으로 적용하거나 UI 업데이트 시 유용.  

```js
window.addEventListener("themechange", function(event) {
    console.log("테마가 변경되었습니다:", event.detail.preTheme, "→", event.detail.curTheme);
});
```