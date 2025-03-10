# WebsocketIO( listener, isSSL )

> **Extends** NetworkIO


**웹소켓**을 이용하여 서버와 클라이언트 간의 양방향 통신을 지원하는 클래스. 

***데이터 송수신*** 을 관리하며, 연결 상태를 유지하기 위한 ***핑 메시지 전송*** 기능을 포함.


* **listener**`<Object>` 데이터 수신시 호출받을 이벤트 리스너
* **isSSL** `<Boolean>` 전송 계층 보안 여부

<br/>

## Instance Methods

### isStart()


네트워크 접속 여부. WebSocket 인스턴스가 존재하는지 확인하여 판단.

-   **Returns** `<Boolean>` 네트워크 접속 여부

```js
const qm = new QueryManager('sample');
const netIo = new WebsocketIO(qm, false);
if(netIo.isStart()) return;
```

<br/>

### sendData( data, callback )

웹소켓을 통해 데이터를 전송.

-   **data** `<String | Blob | ArrayBuffer(Uint8Array)>` 전송할 데이터
    
-   **callback** `<Function>` 콜백 함수 (선택 사항)

```js
const qm = new QueryManager('sample');
const netIo = new WebsocketIO(qm, false);
const data = new Uint8Array([116, 101, 115, 116]);
const callback = function(result){ 
	if(!result) alert('test 송신실패')
};

netIo.sendData(data, callback);
```

<br/>

### setProtocols( protocols )

서브 프로토콜을 지정.

* **protocols** `<String or Array>` 서브 프로토콜. `<String>` 또는 `<String[]>`


```js
const netIo = new WebsocketIO(null, false);
netIo.setProtocols(['protocol1', 'protocol2']);
```

<br/>


### setHeartbeat( delay )

연결 유지를 위해 일정 시간마다 `ping` 메시지를 전송

-   **delay** `<Number | null>` 핑 메시지 전송 간격 (단위: `ms`). 
>`null`이면 핑 메시지 전송을 중지한다.
    

```js
const netIo = new WebsocketIO(null, false);
netIo.setHeartbeat(5000); // 5초마다 핑 메시지 전송
```

### startIO( address, port )

웹소켓 네트워크 접속을 시작

-   **address** `<String>` 주소
    
-   **port** `<Number>` 포트번호 (선택 사항)

```js
const qm = new QueryManager('sample');
const netIo = new WebsocketIO(qm, false);
netIo.startIO('127.0.0.1', 80);
```

<br/>

### stopIO( isClosed )

웹소켓 네트워크 연결을 해제

-   **isClosed** `<Boolean>` 종료 유형
    -   **true**: 사용자가 수동으로 종료한 경우
    -   **false**: 내부 로직에 의해 자동 종료된 경우

```js
const qm = new QueryManager('sample');
const netIo = new WebsocketIO(qm, false);
netIo.stopIO();
```

<br/>
