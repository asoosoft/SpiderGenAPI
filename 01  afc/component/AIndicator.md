# AIndicator
> **Extends** [AFloat](https://wikidocs.net/275188)

**AIndicator**는 [AFloat](https://wikidocs.net/275188)을 확장한 클래스로, **로딩 인디케이터** 역할을 수행  <br>

OLTP(Online Transaction Processing) 모드에서 동작을 제어하며, 여러 개의 비동기 요청이 있을 경우 **중복 표시 방지** 기능을 제공

## Class Variables

### indicator `<AIndicator>`

전역적으로 사용되는 AIndicator 객체의 인스턴스를 저장하는 변수
```js
AIndicator.indicator = null;
```

---

### prgRefCount `<Number>`

현재 표시된 인디케이터의 개수를 관리하는 참조 카운트
```js
AIndicator.prgRefCount = 0;
```

---

### isOltp `<Boolean>`

OLTP(Online Transaction Processing) 모드 여부를 나타냄
```js
AIndicator.isOltp = false;
```

---

<br>

## Class Methods

### setBackground(background)

인디케이터 배경 색상을 설정

- **background** `<String>` 배경 색상 (RGBA 값 또는 CSS 색상)

	> **기본값** : 'rgba(0,0,0,0)'

```js
AIndicator.setBackground('rgba(0, 0, 0, 0.5)');
```

---

### setClass(cssName)

인디케이터의 CSS 클래스를 변경

- **cssName** `<String>` 적용할 CSS 클래스명

```js
AIndicator.setClass('custom-loader');
```
---

### beginOltp()

OLTP 모드를 시작하고 인디케이터를 표시

```js
AIndicator.beginOltp();
```

---

### endOltp()

OLTP 모드를 종료하고 인디케이터를 숨김

```js
AIndicator.endOltp();
```

---

<br>

## Instance Methods

### init()

인디케이터를 초기화

```js
let indicator = new AIndicator(); 
indicator.init();
```

---

### setClassName(cssName)

인디케이터의 스핀 애니메이션 클래스 이름을 설정

-   **cssName** `<String>` : 적용할 클래스명 (loader_type2 기본값)

```js
indicator.setClassName('new-loader-style');
```

---

### createSpan()


로딩 애니메이션을 포함하는 <div\> 요소를 생성

```js
indicator.createSpan();
```

---

### show()


인디케이터를 화면에 표시  <br>

네이티브 Cordova 환경에서는 AppPlugin을 사용하여 네이티브 프로그레스 바를 표시

```js
indicator.show();
```

---

### hide()

인디케이터를 숨김

네이티브 Cordova 환경에서는 AppPlugin을 사용하여 네이티브 프로그레스 바를 숨김

```js
indicator.hide();
```

---