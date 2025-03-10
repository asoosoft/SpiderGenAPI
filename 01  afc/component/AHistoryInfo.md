# AHistoryInfo

**AHistoryInfo**는 데이터 이동을 위한 간단한 히스토리 관리 클래스

데이터를 저장하고 이전/다음 데이터로 이동하는 기능을 제공

## Instance Variables

###  **infoHistory** `<Array>`

히스토리 정보를 저장하는 배열
	
---
	
### **curHisIndex** `<Number>`

현재 히스토리의 위치를 가리키는 인덱스
	
---

<br>

## Instance Methods

### **pushInfo(info)**

새로운 정보를 히스토리에 추가  <br>

이전 히스토리를 덮어쓰지 않고, 새로운 항목을 추가
    
 -   **info** `<Any>` 추가할 데이터

```js
let history = new AHistoryInfo();
history.pushInfo('Page1');
history.pushInfo('Page2');
```
	 
 ---


### **prevInfo()**

이전 히스토리 정보를 반환

- **Returns** `<Any | null>` <br>
이전 히스토리 데이터 <br>
존재하지 않으면 null 반환

```js
let prev = history.prevInfo();
console.log(prev);
```

---


### nextInfo()

다음 히스토리 정보를 반환

- **Returns** `<Any | null>` <br>
다음 히스토리 데이터 <br>
존재하지 않으면 null 반환

```js
let next = history.nextInfo();
console.log(next);
```

---


### canGoPrev()

이전 히스토리가 존재하는지 확인

- **Returns** `<Boolean>` true면 이전 히스토리가 존재함, false면 없음

```js
if (history.canGoPrev()) console.log('으로 갈 수 있어요!');
```

---

### canGoNext()

다음 히스토리가 존재하는지 확인

- **Returns** `<Boolean>` true면 다음 히스토리가 존재함, false면 없음

```js
if (history.canGoNext()) console.log('다음으로 갈 수 있어요!');
```

---

### clearHistory()

모든 히스토리를 초기화

```js
history.clearHistory();
```

---