# ATooltip
> **Extends** [AFloat](https://wikidocs.net/275188)

**ATooltip**은 특정 UI 요소 위에 **툴팁(Tooltip)을 표시**하는 컴포넌트

텍스트 또는 이미지를 표시할 수 있으며, **자동 위치 조정 기능**을 지원


## Instance Methods

### init()

툴팁 초기화

AFloat 클래스를 상속받아 **팝업 창 형태로 동작**

```js
this.tooltip = new ATooltip();
this.tooltip.init();
```

---

### show(tooltipMsg, targetRect, isImage)

툴팁 표시

-   **tooltipMsg** `<String>` : 툴팁에 표시할 텍스트 또는 이미지 URL
-   **targetRect** `<Object>` : 툴팁의 위치 정보 
	
	> (보통 getBoundRect()로 설정)
	
-   **isImage** `<Boolean>` : true이면 이미지, false이면 텍스트 표시

```js
// 텍스트 툴팁
this.tooltip.show('툴팁 메시지', comp.getBoundRect());

// 이미지 툴팁
this.tooltip.show('Asset/img/icon.png', comp.getBoundRect(), true);
```

---

### hide()


툴팁 닫음

```js
this.tooltip.hide();
```

---