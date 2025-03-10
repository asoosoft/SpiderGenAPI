# NetworkIO( listener )

> **Extends** Object

* **listener** `<Object>` 데이터 수신시 호출받을 이벤트 리스너

**NetworkIO**  클래스는  **네트워크 송수신을 관리** 하는 역할. <br/>
데이터를 전송하고 수신하는 기능을 제공하며, 네트워크 연결 상태를 감지하여 재접속을 시도 가능. <br/>
이 클래스는 **추상 클래스**이며, 실제 네트워크 통신을 위해 **하위 클래스에서 구현.**


## Static Variables

### NetworkIO.RETRY_CHECK_TIME

네트워크 재접속을 시도하는 주기(밀리초 단위)<br/>
즉, 재접속이 실패할 경우 다음 **재접속까지의 대기 시간**을 설정하는 값

* **Type** `<Number>`
* **Default** 3000 (3초)

### NetworkIO.FULL_RETRY_TIME

네트워크 재접속을 **완전히 포기하는 최대 시간**.<br/>
이 시간이 초과되면 추가적인 재접속 시도를 하지 않음.

* **Type** `<Number>`
* **Default** 15000 (15초)

## Instance Variables

### curCount `<Number>`

현재 네트워크 재접속 시도한 횟수

* **Default** **0**

```js
let netIo = new NetworkIO(null);
console.log(netIo.curCount); // 0
```


### listener `<Object>`

네트워크 관련 이벤트를 처리하는 **리스너 객체**.<br/>
이 리스너는 onConnected(), onClosed(), onReceived() 등의 메서드를 포함.

```js
let listener = {
	onConnected: function(success){
		console.log(success ? "연결 성공" : "연결 실패");
	},
	onClosed: function(){
		console.log("연결 종료됨");
	},
	onReceived: function(data,size) {
		console.log("데이터 수신:", data, "크기:", size);
	}
};
let netIo = new NetworkIO(listener);

```

### retryCount `<Number>`

네트워크 연결이 끊어졌을 때, **재접속을 시도할 최대 횟수**를 지정.

* **Default** 0 (재접속 시도 없음)

```js
netIo.enableRetry(5); // 최대 5번까지 재접속 시도
console.log(netIo.retryCount); // 5
```

### retryTime `<Number>`

네트워크 재접속을 최초로 시도한 시간(밀리초) 를 저장.

* **Default** 0

```js
console.log(netIo.retryTime); // 0 (초기값)
```

### selfClose `<Boolean>`

네트워크 연결이 **사용자가 직접 종료한 것인지**,<br/>
아니면 **시스템 내부에서 자동 종료된 것**인지 여부 표시.

* **Default** false (사용자 종료 아님)

```js
console.log(netIo.selfClose); // false
```

## Instance Methods

### isStart()

현재 네트워크가 활성화(연결됨) 상태인지 확인.

* **Returns** `<Boolean>`

```js
if (netIo.isStart()) {
	console.log("네트워크 연결 중...");
} else {
	console.log("네트워크 연결 없음");
}
```


### onConnected( success )

네트워크 연결이 완료되었을 때 호출.<br/>
등록된 리스너(**listener.onConnected()**)에게 연결 성공 여부를 전달.

* **success** `<Boolean>` **true**면 연결 성공, **false**면 실패

```js
netIo.onConnected(true) // 연결 성공 시
netIo.onConnected(false) // 연결 실패 시
```

### onReceived( data, size )

데이터를 수신하면 호출.<br/>
데이터를 가공(압축 해제, 복호화)한 후 리스너(**listener.onReceived()**)에게 전달.

* **data** `<All>` 수신된 데이터
* **size** `<Number>` 데이터 크기

```js
netIo.onReceived("Hello, World!", 13);
```


### sendData( data, callback )

데이터를 전송.
**추상 함수**이며, **하위 클래스에서 구현.**

* **data** `<All>` 전송할 데이터
* **callback** `<Function>` 전송 실패 시  호출할 콜백 함수

```js
netIo.sendData("Test Message", function(success) {
	if (!success) console.log("데이터 전송 실패");
})
```


### startIO( address, port )

네트워크 연결을 시작.
**추상 함수**이며, **하위 클래스에서 구현.**

* **address** `<String>` 서버 주소
* **port** `<String>` 서버 포트 번호

```js
netIo.startIO('127.0.0.1', 8080);
```

### stopIO( isClosed )

네트워크 연결을 해제.
**추상 함수**이며, **하위 클래스에서 구현.**

* **isClosed** <String> **true**이면 시스템이 자체적으로 연결 해제, **false**이면 사용자가 해제

```js
netIo.stopIO();
```

### setIoListener( listener )

네트워크 이벤트 리스너를 설정.

* **listener** `<Object>` 이벤트 리스너 객체

```js
netIo.setIoListener(myListener);
```

### enableRetry( retryCount )

네트워크 재접속 시도할 최대 횟수를 지정.

* **retryCount** `<Number>` 최대 재접속 횟수

```js
netIo.enableRetry(3);
```

### onClosed()

네트워크 연결이 종료되었을 때 호출.<br/>
등록된 리스너(**listener.onClosed()**)에게 연결 종료 이벤트를 전달.