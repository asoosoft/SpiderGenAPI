# AFlowThreeLine
> **Extends** [AComponent](https://wikidocs.net/274979)

**AFlowThreeLine**은 **세 개의 꺾인 선을 그리는 SVG 기반의 라인 컴포넌트**  <br>
data-direct 속성을 이용하여 **선의 방향**을 조정할 수 있으며,  <br>
data-leaning-value와 data-leaning-position을 활용하여 **선의 기울기를 조정**할 수 있음


## Class Variables

>이 컴포넌트는 특정한 클래스 변수(constants)를 정의하지 않음 
>
> 데이터 속성(data-attribute)을 기반으로 동작
<br>



## Instance Variables

### **pathEle** `<SVGPathElement>`

AFlowThreeLine의 <path\> 요소를 저장하는 변수<br>
	
resizePath() 등을 호출하여 **동적으로 선의 위치 및 크기를 변경**할 때 사용

---

### **timeCode** `<Number>`

각 인스턴스의 **고유한 식별 ID**로 활용되는 값  <br>

이를 통해 **화살표 마커의 ID 충돌 방지** 역할

---


<br/>



## Instance Methods

### init(context, evtListener)

AFlowThreeLine 컴포넌트를 **초기화**  <br>
초기화 과정에서 **SVG Path 요소를 가져오고, 기본 속성을 설정**

* **context** : `<Object>` 컴포넌트 컨텍스트
* **evtListener** : `<Function>` 이벤트 리스너

```js
let flowLine = new AFlowThreeLine(); // AFlowThreeLine 인스턴스 생성
 
flowLine.init(context, evtListener); // 초기화
```

---

### resizePath()

drawPath()를 호출하여 **선의 크기 및 위치를 다시 조정**

```js
flowLine.resizePath();
```

---

### drawPath()

현재 설정된 속성(data-direct, data-leaning-value, data-leaning-position)을 바탕으로  **선의 경로(d 속성)를 업데이트**하는 역할

```js
flowLine.drawPath();
```

---

### setArrow(info)

화살표를 활성화 또는 비활성화

* **info**: `<Boolean>`

	* **true** : 화살표 표시
	* **false** : 화살표 제거

```js
// 화살표 설정

flowLine.setArrow(true);  // 화살표 표시
flowLine.setArrow(false); // 화살표 제거
```

---

### setArrowPosition(info)

화살표의 위치를 설정

| 옵션 값 | 설명 |
|--|--|
| start | 선의 **시작점**에 화살표 추가 |
| end | 선의 **끝점**에 화살표 추가 |
| both | **양쪽**에 화살표 추가 |

```js
flowLine.setArrowPosition("start");
flowLine.setArrowPosition("end");
flowLine.setArrowPosition("both");
```

---

### setLineColor(color)

선의 색상을 변경

* **color** : `<String>` CSS 색상 값 <br>
	> "red", "#ff0000", "rgb(255,0,0)"

```js
flowLine.setLineColor("blue");
flowLine.setLineColor("#00ff00");
```

---

### setStrokeWidth(value)

선의 두께를 변경

* **value** : `<Number>` 선의 두께(px)

```js
flowLine.setStrokeWidth(3); // 선 두께 3px
```

---

### updatePosition(pWidth, pHeight)

컴포넌트의 크기 및 위치가 변경될 때 **선의 크기를 자동 조정**

-   **pWidth** : `<Number>` 부모(parent) 컴포넌트의 너비(px)
-   **pHeight** : `<Number>` 부모(parent) 컴포넌트의 높이(px)

```js
flowLine.updatePosition(500, 300);
// 부모 너비 500px, 높이 300px 기준으로 선 크기 조정
```

---


<br/>