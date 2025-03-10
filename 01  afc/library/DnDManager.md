# DnDManager

**DnDManager**는 드래그 앤 드롭(DnD) 기능을 관리하는 클래스

이 클래스는 요소의 드래그 및 드롭을 설정하고, 이를 처리하는 이벤트를 관리

**DnDManager**를 사용하여 HTML 요소 간에 데이터를 끌어서 놓을 수 있음

### DnDManager(dndId)

DnDManager 객체를 생성

- **dndId** `<String>`: 드래그 앤 드롭을 관리하는 고유 식별자

```js
new DnDManager(dndId)
```

---
<br>

## Instance Variables


###   dndId `<String>`  
  드래그 앤 드롭의 고유 식별자

---
   
###   dragOption `<Object>`  
   드래그 옵션을 설정하는 객체
		
##### 속성
- **dragImage**: 드래그 이미지 객체
	> null 또는 이미지 객체

- **imageOffset**: 드래그 이미지의 위치 오프셋
	> x, y로 설정된 객체

```js
dragOption = {
 dragImage: "path/to/image.png", // 이미지 경로
 imageOffset: { x: 10, y: 10 }   // 이미지 오프셋
}
```


---
   
###  dropOption `<Object>`  
   드롭 옵션을 설정하는 객체
   
##### 속성
- **applyChild**: 자식 요소까지 드롭 이벤트를 적용할지 여부
	> true / false

- **hoverClass**: 드래그가 요소 위에 올려졌을 때 적용할 CSS 클래스

```js
dropOption = {
 applyChild: true,   // 자식 요소에도 드롭 이벤트 적용
 hoverClass: "hover-effect" // 드래그가 올라왔을 때 활성화될 클래스
}
```

---
   
###   dragEles `<Array>`  
   현재 드래그 중인 요소들을 관리하는 배열

---

<br>


## Instance Methods

### setDragOption(option)

드래그 옵션을 설정
    
 -   **option** `<Object>` : 설정할 드래그 옵션 객체


```js
dndManager.setDragOption({ 
	dragImage: "path/to/image.png", 
	imageOffset: { x: 10, y: 10 } 
});
```
	 
 ---


### setDropOption(option)

드롭 옵션을 설정
	
-   **option** `<Object>` : 설정할 드롭 옵션 객체

```js
dndManager.setDropOption({
  applyChild: true,
  hoverClass: "hover-effect"
});
```

---


### getApplyDragOption(option, key)

드래그 옵션에서 특정 키에 대한 값을 가져옴

만약 파라미터로 받은 옵션에 값이 있으면 그 값을 반환하고, 없으면 기본값을 반환

* **option** `<object>` : 사용자 지정 드래그 옵션

* **key** `<string>` : 가져올 옵션의 키

```js
let dragImage = dndManager.getApplyDragOption(customOptions, 'dragImage');
```

---


### getApplyDropOption(option, key)

드롭 옵션에서 특정 키에 대한 값을 가져옴

만약 파라미터로 받은 옵션에 값이 있으면 그 값을 반환하고, 없으면 기본값을 반환

* **option** `<object>`: 사용자 지정 드롭 옵션


-	**key** `<string>`: 가져올 옵션의 키

```js
let hoverClass = dndManager.getApplyDropOption(customOptions, 'hoverClass');
```

---

### unregDrag(element)

지정된 요소에서 드래그 이벤트를 해제

* **element** `<HTMLElement | Array<HTMLElement>` : 드래그 이벤트를 해제할 요소

```js
dndManager.unregDrag(document.getElementById("dragElement"));
```

---

### unregDrop(element)

지정된 요소에서 드롭 이벤트를 해제

* **element** `<HTMLElement | Array<HTMLElement>` : 드롭 이벤트를 해제할 요소

```js
dndManager.unregDrop(document.getElementById("dropElement"));
```

---

### regDrag(element, listener, option)

지정된 요소에 드래그 이벤트를 등록

* **element** `<HTMLElement | Array<HTMLElement>` : 드래그 이벤트를 등록할 요소

* **listener** `<Object>` : 드래그 이벤트 리스너 객체
	> onDragStart, onDragEnd 메서드를 포함해야함

* **option** `<Object>` : 드래그 옵션 객체
	> dragImage, imageOffset 등

```js
dndManager.regDrag(element, {
  onDragStart: function(dndManager, event) { console.log("Drag started"); },
  onDragEnd: function(dndManager, event) { console.log("Drag ended"); }
}, {
  dragImage: "path/to/image.png",
  imageOffset: { x: 10, y: 10 }
});
```

---

### regDrop(element, listener, option)

지정된 요소에서 드롭 이벤트를 해제

* **element** `<HTMLElement | Array<HTMLElement>` : 드롭 이벤트를 등록할 요소

* **listener** `<Object>` : 드롭 이벤트 리스너 객체
	> onDragEnter, onDragLeave, onElementDrop 메서드를 포함해야함

* **option** `<Object>` : 드롭 옵션 객체
	> hoverClass, applyChild 등

```js
dndManager.regDrop(element, {
  onDragEnter: function(dndManager, event) { console.log("Drag entered"); },
  onDragLeave: function(dndManager, event) { console.log("Drag left"); },
  onElementDrop: function(dndManager, event, dragElement) { console.log("Element dropped", dragElement); }
}, {
  hoverClass: "hover-effect",
  applyChild: true
});
```

---

<br>

## Example Usage

### 드래그 이벤트 등록
```js
// 드래그할 요소와 리스너 정의
let element = document.getElementById("dragElement");
let listener = {
  onDragStart: function(dndManager, event) {
    console.log("Drag started");
  },
  onDragEnd: function(dndManager, event) {
    console.log("Drag ended");
  }
};

// 드래그 옵션 설정
let dragOption = {
  dragImage: "path/to/image.png",   // 드래그 이미지
  imageOffset: { x: 10, y: 10 }     // 이미지 오프셋
};

// DnDManager 생성 및 드래그 등록
let dndManager = new DnDManager("drag1");
dndManager.regDrag(element, listener, dragOption);
```

### 드롭 이벤트 등록

```js
// 드롭할 요소와 리스너 정의
let dropElement = document.getElementById("dropElement");
let dropListener = {
  onDragEnter: function(dndManager, event) {
    console.log("Drag entered drop area");
  },
  onDragLeave: function(dndManager, event) {
    console.log("Drag left drop area");
  },
  onElementDrop: function(dndManager, event, dragElement) {
    console.log("Element dropped", dragElement);
  }
};

// 드롭 옵션 설정
let dropOption = {
  hoverClass: "hovering",    // 드래그가 요소 위에 있을 때 활성화될 클래스
  applyChild: true           // 자식 요소까지 드롭 이벤트가 적용되도록
};

// DnDManager 생성 및 드롭 등록
dndManager.regDrop(dropElement, dropListener, dropOption);
```

### 드래그/드롭 해제

```js
// 드래그와 드롭 이벤트를 해제하려는 요소
let elementToUnreg = document.getElementById("dragElement");
let dropElementToUnreg = document.getElementById("dropElement");

// 이벤트 해제
dndManager.unregDrag(elementToUnreg);
dndManager.unregDrop(dropElementToUnreg);
```