# AFrameWnd(containerId)

>**Extends** [AWindow](https://wikidocs.net/275126)

- **containerId** <String\> 컨테이너 아이디

프레임을 추가한 기본 윈도우 컨테이너 <br>

상단에 타이틀바, 최대화/최소화/닫기 버튼이 있으며, 하단에 상태바가 포함 가능

> 기본적인 사용법은 [AWindow](https://wikidocs.net/275126)와 동일

```js
let frm = new AFrameWnd('myFrame');

// 넓이와 높이를 생략하면 lay 파일의 넓이와 높이로 오픈됩니다.
frm.open('Source/TestView.lay', null, '타이틀', 100, 100, 400, 300);
```


## Instance Variables

### **title** `<HTMLElement>`

상단 타이틀 엘리먼트 객체

---
	
### **titleLbl** `<ALabel>`

상단 타이틀 문자열을 표시하는 라벨 컴포넌트

---
	
### **titleHeight** `<Number>`

타이틀 바의 높이 (기본값: 24)

---
	
### **statusHeight** `<Number>`

상태 표시 바의 높이 (기본값: 20)

---
	
### **statusBar** `<HTMLElement>`

상태 표시 바 엘리먼트 객체

---
	
### **calcHeight** `<Number>`

상단 타이틀 엘리먼트 객체

---
	
### **icon** `<Number>`

타이틀 바 아이콘 위치값 (단위: 16px)

---
<br>

## Instance Methods

### getTitleText()

프레임 윈도우의 상단 타이틀 문자열을 가져옴

* **Returns** : `<String>` 타이틀 문자열

```js
let title = frameWnd.getTitleText();
```

---

### setTitleText(str)


타이틀 라벨에 문자열을 설정

* **str** : `<String>` 설정할 타이틀 문자열

```js
frameWnd.setTitleText('새로운 타이틀');
```

---

### setTitleHtml(str)

타이틀 라벨에 HTML을 설정

* **str** `<String>` : HTML 태그 문자열

```js
let tag = '<font style="color: red;">중요한</font> 내용'; 
frameWnd.setTitleHtml(tag);
```

---

### showTitle()


타이틀 바와 상태 바를 표시

```js
frameWnd.showTitle();
```

---

### hideTitle()

타이틀 바와 상태 바를 숨김

```js
frameWnd.hideTitle();
```

---

### makeTitle()


타이틀 바 영역을 생성

```js
frameWnd.makeTitle();
```

---

### makeStatusBar()

하단 상태 바 영역을 생성

```js
frameWnd.makeStatusBar();
```

---

### setStatusInfo(html)


하단 상태 바에 HTML 내용을 설정

-   **html** `<String>` HTML 태그 문자열

```js
frameWnd.setStatusInfo('<span>로딩 중...</span>');
```

---

### restore()

최소화 또는 최대화된 윈도우를 원래 크기로 복원

```js
frameWnd.restore();
```

---

### minimize()

윈도우를 최소화

```js
frameWnd.minimize();
```

---

### maximize()

윈도우를 최대화

```js
frameWnd.maximize();
```

---

### setIconMap(iconMap)

타이틀 바 아이콘 이미지를 설정

-   **iconMap** `<String>` 이미지 경로 또는 CSS 클래스명윈도우를 최소화

```js
// 이미지 경로 지정
frameWnd.setIconMap('Assets/img/frmIcon.png');

// CSS 클래스명 지정
frameWnd.setIconMap('frmwnd_icon1');
```

---

### setIcon(icon)

타이틀 바 아이콘 위치값을 설정 (아이콘 크기는 `16px` 단위)

-   **icon** `<Number>` 아이콘 위치값 [ 0 | 1 | ... ]

```js
frameWnd.setIconMap('Assets/img/frmIcon.png');
frameWnd.setIcon(5); // 좌측에서 5번째 (80px) 위치한 이미지 적용
```

---

### open(viewUrl, parent, title, left, top, width, height)

윈도우를 열고 타이틀을 설정

-   **viewUrl** `<String>` 로드할 뷰 URL
-   **parent** `<Object | null>` 부모 컨테이너
-   **title** `<String>` 타이틀 문자열
-   **left** `<Number>` 좌측 위치
-   **top** `<Number>` 상단 위치
-   **width** `<Number>` 너비
-   **height** `<Number>` 높이

```js
frameWnd.open('Source/TestView.lay', null, '테스트 창', 100, 100, 400, 300);
```

---