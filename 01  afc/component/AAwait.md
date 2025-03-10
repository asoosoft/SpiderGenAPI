# AAwait

**AAwait**는 비동기 작업의 진행을 관리하는 유틸리티 클래스
 
Promise 기반의 대기 기능을 제공하며, 여러 개의 비동기 작업이 끝난 후 콜백을 실행할 수 있도록 지원

## Instance Variables

-  **count** `<Number>`

	현재 실행 중인 비동기 작업의 개수를 추적
	
	---
	
- **endCallbacks** `<Array>`

	모든 비동기 작업이 끝났을 때 실행할 콜백 함수 배열
	
	---
	
- **proms** `<Array>`

	추가된 Promise 객체들을 저장하는 배열
	
	---

- **waitMap** `<Object>`

	진행 중인 비동기 작업을 추적하는 객체  <br>
	디버깅을 위해 사용
	
---

<br>

## Instance Methods

### **addProm(prom)**

Promise를 추가하고 관리  <br>
추가된 Promise는 waitAllProm()을 사용해 한꺼번에 실행가능
    
 -   **prom** `<Promise>` 추가할 Promise 객체

 -  **Returns** `<Promise>` 추가된 Promise 객체

```js
let awaiter = new AAwait();
let myPromise = new Promise((resolve) => setTimeout(resolve, 1000));
awaiter.addProm(myPromise);
```
	 
 ---


### **waitAllProm()**

저장된 모든 Promise가 완료될 때까지 대기

- **Returns** `<Promise>` 모든 Promise가 완료될 때까지 대기

```js
awaiter.waitAllProm().then(() => {
    console.log('All promises resolved');
});
```

---


### resetProm()

Promise 리스트를 초기화

```js
awaiter.resetProm();
```

---


### begin(key)

비동기 작업이 시작될 때 호출  <br>
내부적으로 count 값을 증가시키고, waitMap에 추가

- **key** `<String>` 작업을 식별하는 키 (디버깅 용도)

```js
awaiter.begin('task1');
```

---

### end(key, isCache)

비동기 작업이 완료되면 호출  <Br>
내부적으로 count 값을 감소시키고, 모든 작업이 끝났다면 _reportDone()을 실행

- **key** `<String>` 완료된 작업을 식별하는 키
- **isCache** `<Boolean>` true이면 콜백을 실행하지 않고 보류

```js
awaiter.end('task1');
```

---

### waitAll(endCallback)

모든 비동기 작업이 완료되면 endCallback을 실행  <Br>
begin()으로 시작한 모든 작업이 end()를 통해 종료되면 endCallback이 실행

- **endCallback** `<Function>` 모든 작업 완료 후 실행할 콜백 함수

```js
awaiter.waitAll(() => {
    console.log('All tasks completed');
});
```

---