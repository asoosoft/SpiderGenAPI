# ADataBinder


**ADataBinder**는 **데이터와 UI 컴포넌트 간의 동기화**를 관리하는 클래스 <br>

이 클래스는 **데이터 변경 이벤트를 리스너에게 전달**하여 UI가 자동으로 갱신되도록함<br>

이를 통해 **데이터 변경을 보다 직관적이고 효율적으로 관리**할 수 있음

<br/>

## Class Variables

###   **ITEM_SELECT** `<Number>` <br>
선택된 항목을 나타내는 상수 값 (1)

---

###   **ITEM_INSERT** `<Number>` <br>

항목 삽입을 나타내는 상수 값 (2)

---

###   **ITEM_DELETE** `<Number>` <br>

항목 삭제를 나타내는 상수 값 (3)

---

###   **ITEM_EDIT** `<Number>` <br>

항목 편집을 나타내는 상수 값 (4)

---

###   **ITEM_REFRESH** `<Number>` <br>

항목 새로 고침을 나타내는 상수 값 (5)

---

###   **CUSTOM_ACTION** `<Number>` <br>

사용자 정의 작업을 나타내는 상수 값 (6)

<br>

이 상수들은 **reportChange()** 메서드에서 사용되어 데이터 변경 이벤트의 유형을 구분하는 데 사용

**reportChange()**를 호출할 때, 이를 통해 **어떤 종류의 데이터 변경**이 발생했는지 명확하게 지정할 수 있음

ex ) ADataBinder.ITEM_EDIT와 같은 상수값을 사용하여 데이터 변경 타입을 명시적으로 지정하고, 리스너에게 변경 알림을 전달할 수 있음

**자동 바인딩은 지원되지 않으며, 수동으로 이벤트를 트리거해야함**

데이터 변경 이벤트를 리스너에게 전달하기 위해 **reportChange()** 메서드를 **수동으로 호출해야함** 


---
<br/>

## Instance Variables

### dataContainer `<Object>`

바인딩할 **데이터 컨테이너**를 저장하는 변수

이 변수는 setDataContainer(dataContainer)를 호출할 때 설정되며,<br>해당 데이터 변경 시 reportChange() 메서드를 수동으로 호출하여 리스너에게 데이터 변경을 알릴 수 있음

---

### **dataListeners** `<Array>` 
데이터 변경 이벤트를 수신하는 리스너 목록 

이 리스트에 추가된 모든 리스너는 데이터 변경 시 자동으로 호출

```js 
binder.dataListeners.push(myListener);
```
---
<br/>


## Instance Methods

### **setDataContainer(dataContainer)**

데이터 컨테이너를 설정하고, 해당 컨테이너에 **데이터 바인더(ADataBinder)** 를 연결 

이후 바인딩된 모든 리스너들에게 변경을 알림

**자동 감지 기능은 없으며**, **reportChange()를 명시적으로 호출하여야** 데이터 변경 이벤트가 발생

- **dataContainer** `<Object>` : 바인딩할 데이터 컨테이너

```js 
let binder = new ADataBinder(); 
binder.setDataContainer(myData);
```

---

### **addDataListener(listener)**

데이터 변경을 감지하는 **리스너**를 추가

이후 바인딩된 모든 리스너들에게 변경을 알림

- **listener** `<Object>` <br>
 onBindData(dataContainer), onDataChanged(dataContainer, param) 메서드를 포함하는 객체

```js 
binder.addDataListener(myComponent);
```

---

### **removeDataListener(listener)**

등록된 **데이터 리스너**를 제거

- **listener** `<Object>` : 제거할 리스너 객체

```js 
binder.removeDataListener(myComponent);
```

---

### **reportChange(type, index, data, update, except)**


**모든 리스너에게 데이터 변경 이벤트를 알림**  

특정 리스너(except)를 제외할 수도 있음

-   **type** `<Number>` : 변경 타입 (ADataBinder.ITEM_*)
-   **index** `<Number>` : 변경된 데이터의 인덱스
-   **data** `<Object>` : 변경된 데이터
-   **update** `<Boolean>` : 업데이트 여부
-   **except** `<Object>` (선택) : 제외할 리스너

⚠️reportChange() 메서드는 **자동으로 호출되지 않으며,** 데이터 변경이 있을 때마다 **수동으로 호출**해야함

```js 
binder.reportChange(ADataBinder.ITEM_EDIT, 2, updatedData, true);
```

---

### **reportChangeTo(type, index, data, update, listeners)**


특정 리스너(listeners)에게만 변경 이벤트를 알림

-   **type** `<Number>` : 변경 타입 (ADataBinder.ITEM_*)
-   **index** `<Number>` : 변경된 데이터의 인덱스
-   **data** `<Object>` : 변경된 데이터
-   **update** `<Boolean>` : 업데이트 여부
-   **listeners** `<Array>` : 변경 알림을 받을 리스너 리스트

```js 
binder.reportChangeTo(ADataBinder.ITEM_DELETE, 1, deletedData, false, [listener1, listener2]);
```

---