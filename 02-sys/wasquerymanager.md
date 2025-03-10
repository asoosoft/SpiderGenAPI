# WasQueryManager

> **Extends** QueryManager

서버와의 쿼리 요청 및 응답을 처리하는 매니저 클래스. 

HTTP 또는 WebSocket을 통해 데이터를 주고받으며, 헤더 설정 및 에러 핸들링 기능을 포함.

## Instance Methods

### setHeaderInfo( headerInfo )

헤더 정보를 설정.

-   **headerInfo** `<Object>` 헤더 정보 객체

```js
const wasManager = new WasQueryManager('sample');
wasManager.setHeaderInfo({ 
	CHNL_CD: '102', 
	USER_ID: 'admin' 
});
```

### getBrowserInfo()

현재 사용자의 브라우저 및 OS 정보를 반환.

-   **Returns**: `<Array>` [OS, OS Version, Browser, Browser Version]
    
```js
const wasManager = new WasQueryManager('sample');
console.log(wasManager.getBrowserInfo());
```

### onReceived( data, size )

서버에서 데이터를 수신했을 때 실행되는 함수.

-   **data** `<Uint8Array>` 수신된 데이터
-   **size** `<Number>` 데이터 크기

```js
wasManager.onReceived(new Uint8Array([1, 2, 3, 4]), 4);
```

### setErrorData()

서버에서 수신한 데이터를 기반으로 에러 정보를 설정.

```js
wasManager.setErrorData();
```

### getInDataOffset()

수신 데이터의 오프셋을 반환

-   **Returns**: `<Number>` 오프셋 값

```js
const offset = wasManager.getInDataOffset();
```

### getOutDataOffset()

송신 데이터의 오프셋을 반환

-   **Returns**: `<Number>` 오프셋 값
    
```js
const offset = wasManager.getOutDataOffset();
```

### makeQueryData( aquery, isSend )

새로운 **MdQueryData** 객체를 생성하여 반환

-   aquery `<Object>` 쿼리 데이터
-   isSend `<Boolean>` 송신 여부


-   **Returns**: `<MdQueryData>`
    

```js
const queryData = wasManager.makeQueryData(aquery, true);
```

### recv_log_helper( dataSize, dataOffset )

수신된 데이터 로그를 출력

-   **dataSize** `<Number>` 데이터 크기 
-   **dataOffset** `<Number>` 데이터 오프셋

```js
wasManager.recv_log_helper(1024, 20);
```

### send_log_helper( sendLen )

송신된 데이터 로그를 출력

-   **sendLen** `<Number>` 송신 데이터 길이

```js
wasManager.send_log_helper(512);
```

### makePacketId()

새로운 패킷 ID를 생성

-   **Returns**: `<String>` 생성된 패킷 ID
    
```js
const packetId = wasManager.makePacketId();
```

### makeHeader( queryData, abuf, menuNo )

패킷 헤더를 생성

-   **queryData** `<Object>` 쿼리 데이터
-   **abuf** `<Object>` 버퍼 객체
-   **menuNo** `<Number>` 메뉴 번호

```js
wasManager.makeHeader(queryData, abuf, 100);
```