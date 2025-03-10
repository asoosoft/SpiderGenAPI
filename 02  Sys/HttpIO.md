# HttpIO

> **Extends**: NetworkIO

**HttpIO** 클래스는 **NetworkIO**를 확장하여 HTTP 프로토콜을 이용한 데이터 송수신 기능을 제공.

> `XMLHttpRequest(XHR)` 및 `jQuery.ajax`를 사용하여 문자열 및 바이너리 데이터를 전송할 수 있으며, 비동기 요청을 통해 효율적인 데이터 전송을 지원. 
> 
> 또한, 전송 실패 시 콜백 함수를 제공하여 오류 처리 가능.


<br/>

## Properties

### url `<String>`

전송을 요청할 *URL*

    
-   **Default**: null


## Instance Methods

### isStart()

네트워크 접속 여부를 확인. 

전송할 URL이 설정된 경우 true를 반환.

**Returns**: `<Boolean>`

```js
const qm = new QueryManager();
const netIo = new HttpIO(qm);

if(netIo.isStart()) {
	console.log('네트워크 연결됨!!')
}
```

<br/>

### sendData( data, callback )

문자열 또는 바이너리 데이터를 전송. 

> 전송 실패 시 `callback(false)`를 호출.

-   **data** `<String>`  `<Uint8Array>` 전송할 데이터
    
-   **callback** `<Function>` 전송 실패 시 호출되는 콜백 함수

```js
let qm = new QueryManager('sample');
let netIo = new HttpIO(qm);

//const data = "{"input1":"test","input2":"send"}";
const data = new Uint8Array([116, 101, 115, 116]);

const callback = function(result){ 
	if(!result) alert('test 송신실패') 
};

netIo.sendData(data, callback);
```

### sendBinary( data, callback )

바이너리 데이터를 서버로 전송.

-   **data** `<Uint8Array>` 전송할 바이너리 데이터
-   **callback** `<Function>` 전송 실패 시 호출되는 콜백 함수
        

```js
const binaryData = new Uint8Array([72, 101, 108, 108, 111]);
netIo.sendBinary(binaryData, function(result) {
    if (!result) console.log('바이너리 전송 실패');
});
```

### sendString( data, callback )

문자열 데이터를 서버로 전송.

-   **data** `<String>` 전송할 문자열 데이터
-   **callback** `<Function>` 전송 실패 시 호출되는 콜백 함수
        

```js
let netIo = new HttpIO();
netIo.startIO('http://127.0.0.1/sample.jsp');
netIo.sendString('{"message": "Hello"}', function(result) {
    if (!result) console.log('문자열 전송 실패');
});
```


<br/>

### startIO( url )

네트워크 전송을 위한 URL을 설정하고, 네트워크 연결을 시작.

- **url** `<String>` 전송할 URL

```js
let qm = new QueryManager('sample');
let netIo = new HttpIO(qm);

netIo.startIO('http://127.0.0.1/sample.jsp');
```

<br/>

### stopIO()

네트워크 연결을 해제하고, URL을 초기화.

```js
let qm = new QueryManager('sample');
let netIo = new HttpIO(qm);
netIo.stopIO();
```
