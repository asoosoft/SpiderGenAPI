# SocketIO

**SocketIO** 클래스는 네트워크 통신을 위한 클래스이며, 소켓을 이용한 데이터 송수신을 처리하는 기능을 제공

이 클래스는 Cordova 플러그인을 활용하여 소켓을 열고, 데이터를 전송하며, 연결 상태를 처리

## Class Constructor

### new SocketIO(listener)

SocketIO 클래스의 생성자는 네트워크 통신을 위한 리스너를 인자로 받음

- **listener** `<object>` <br>
네트워크 통신 관련 이벤트를 처리하는 리스너 객체

```js
const socket = new SocketIO(listener);
```

----

<br>

## Instance Variables

###  **workerId** `<Number>`<br>
소켓 통신을 위한 고유 식별자

 `startIO` 메서드가 호출될 때 설정

---

###   **selfClose** `<Boolean>`<br>

소켓 연결이 종료되었을 때, 연결 종료가 내부에서 일어난 것인지 여부를 나타냄

---

###   **address** `<String>`<br>

소켓 연결 시 사용할 서버 주소

---

###   **port** `<Number>`<br>

소켓 연결 시 사용할 서버 포트

---

<br>

## Instance Methods

### isStart()

소켓 연결이 시작되었는지 여부를 확인

- **Returns** `<Boolean>`: 연결이 시작되었으면 true, 아니면 false
​
```js
let isStarted = socket.isStart();
```

---

### startIO(address, port)

소켓 연결을 시작

workerId가 0보다 크지 않으면 연결을 시작

- **address** `<string>`: 연결할 서버의 주소
- **port** `<number>`: 연결할 서버의 포트 번호
​
```js
socket.startIO("localhost", 8080);
```

---
### stopIO(isClosed)

소켓 연결을 종료

- **isClosed** `<Boolean>`: 연결 종료가 내부적으로 일어난 것인지 여부를 설정
​
```js
socket.stopIO(true);
```

---
### sendData(data, callBack)

소켓 연결이 시작되었는지 여부를 확인

- **data** `<string>`: 전송할 데이터
- **callBack** `<function>`: 데이터 전송 후 실행할 콜백 함수
​
```js
socket.sendData("Hello World", function(response) {
  console.log("Data sent successfully:", response);
});
```

---

<br>

## Static Methods

### onConnected(workerId, success)

소켓 연결이 성공적으로 이루어졌을 때 호출

- **workerId** `<number>`: 소켓 연결 식별자
- **success** `<boolean>`: 연결 성공 여부
​
```js
SocketIO.onConnected(workerId, success);
```

---
### onClosed(workerId)

소켓 연결이 종료되었을 때 호출

- **workerId** `<number>`: 소켓 연결 식별자
​
```js
SocketIO.onClosed(workerId);
```

---
### onReceived(workerId, strData)

소켓 연결이 시작되었는지 여부를 확인

- **workerId** `<number>`: 소켓 연결 식별자
- **strData** `<string>`: 수신된 데이터
​
```js
SocketIO.onReceived(workerId, strData);
```

---

<br>

## Example Usage

```js
// 리스너 객체 정의
const listener = {
  onReceived: function(data) {
    console.log("Data received:", data);
  },
  onClosed: function() {
    console.log("Connection closed");
  }
};

// SocketIO 객체 생성
const socket = new SocketIO(listener);

// 소켓 연결 시작
socket.startIO("localhost", 8080);

// 데이터 전송
socket.sendData("Hello Server", function(response) {
  console.log("Data sent successfully:", response);
});

// 소켓 연결 종료
socket.stopIO(true);
```