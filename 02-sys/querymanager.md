# QueryManager

> **Extends**: Object

QueryManager는 네트워크 통신과 쿼리 처리를 위한 핵심 관리 클래스로, 전송/수신 버퍼 관리, 콜백 및 리얼(실시간) 데이터 컴포넌트의 등록/해제, 타임아웃 및 에러 처리를 수행.


## Properties

### netIo `<Object>`
데이터 송수신에 사용되는 네트워크 I/O 객체.

### sndBuf `<ABuffer>`
전송용 버퍼 객체.

### rcvBuf `<ABuffer>`
수신용 버퍼 객체.

### queryListeners `<Array>`
쿼리 관련 이벤트(수신, 전송 전후 등)를 처리할 리스너 객체들을 담은 배열.

### realComps `<Object>`
리얼(실시간) 데이터 수신을 위한 컴포넌트들을 키별로 저장한 객체.

### headerInfo `<Object>`
통신 헤더 정보를 저장하며, 기본값은 아래와 같음:
```js
{
    PBLC_IP_ADDR  : '',  // 공인 IP 주소
    PRVT_IP_ADDR  : '',  // 사설 IP 주소
    MAC_ADR       : '',  // MAC 주소
    TMNL_OS_TCD   : 'PC', // 단말 OS 구분 코드 (예: "PC")
    TMNL_OS_VER   : '',  // 단말 OS 버전
    TMNL_BROW_TCD : '',  // 단말 브라우저 구분 코드 (예: "IE", "CR" 등)
    TMNL_BROW_VER : ''   // 단말 브라우저 버전
}
```

### errorData `<Object>`
마지막 에러 정보를 담고 있으며, 주요 필드는:
- `trName`: 쿼리 이름
- `errCode`: 에러/메시지 코드
- `errMsg`: 에러 메시지

### packetInfo `<Object>`
수신된 패킷의 정보를 저장하는 객체로, 주요 필드는:
- `packetType`
- `packetId`
- `menuNo`
- `groupName`
- `trName`

### sendInfo `<Object>`
전송한 패킷의 정보를 저장하는 객체로, 주요 필드는:
- `packetType`
- `packetId`
- `menuNo`
- `groupName`
- `trName`

### publicKey `<Any>`
(필요 시) 전송에 사용되는 공개키.

### sessionKey `<Any>`
(필요 시) 전송에 사용되는 세션키.

### packetId `<Number>`
전송되는 패킷에 부여되는 자동 증가 식별자.

### isShowProgress `<Boolean>`
통신 진행 시 진행 표시(인디케이터)를 보일지 여부.

### isVisibleUpdate `<Boolean>`
화면에 표시되는 컴포넌트에 대해서만 데이터 업데이트를 수행할지 여부.

### timeoutSec `<Number>`
쿼리 응답 타임아웃 시간(초). `0`일 경우 제한 없음.

### errCodeMap `<Object>`
특정 쿼리에 대해 스킵할 에러 코드를 저장하는 맵.

### queryCallbacks `<Object>`
패킷 ID를 키로 하여 등록된 콜백 객체들을 저장하는 컬렉션.

### realProcMap `<Object>`
리얼(실시간) 처리와 관련된 정보를 저장하는 맵.



#### (옵션) Lazy Update 관련 프로퍼티

메서드 `enableLazyUpdate` 호출 시 내부적으로 설정되는 값.

- **lazyQueryData** `<Object>`  
  리얼 데이터의 지연 업데이트를 위해 백업된 쿼리 데이터를 저장.
  
- **lazyQueryMap** `<Object>`  
  지연 업데이트를 적용할 쿼리 이름의 맵.
  
- **lazyComponents** `<Array>`  
  지연 업데이트 대상 컴포넌트들의 배열.



## Instance Methods

### new QueryManager( name )
QueryManager 인스턴스를 생성.

```js
const qm = new QueryManager('MyQueryManager');
```



### startManager( address, port )

네트워크 I/O 객체가 설정되어 있다면, 해당 주소와 포트로 I/O를 시작.

```js
qm.startManager('127.0.0.1', 8080);
```



### stopManager()

네트워크 I/O 객체가 설정되어 있다면, I/O를 중지.

```js
qm.stopManager();
```



### setNetworkIo( netIo )

네트워크 I/O 객체를 설정.

```js
qm.setNetworkIo(myNetIo);
```



### setQueryCallback( key, callback )

지정한 키(일반적으로 패킷 ID)에 대해 쿼리 콜백을 등록.

```js
qm.setQueryCallback(1, function(queryData) {
    // 쿼리 응답 처리 로직
});
```



### getQueryCallback( key )

등록된 쿼리 콜백을 반환. 반환 후 타임아웃이 설정되어 있으면 이를 해제하고, `noDelete` 옵션이 없으면 콜백을 삭제.

```js
const cb = qm.getQueryCallback(1);
```



### clearAllQueryCallback()

모든 등록된 쿼리 콜백을 해제.

```js
qm.clearAllQueryCallback();
```



### clearAllRealComps()

등록된 모든 리얼(실시간) 컴포넌트를 초기화.

```js
qm.clearAllRealComps();
```



### setQueryBuffer( sendSize, recvSize, charSet, emptyChar, emptyNumChar )

전송용 및 수신용 버퍼를 생성하고, 문자셋 및 빈 문자 관련 설정을 적용.

```js
qm.setQueryBuffer(1024, 2048, 'UTF-8', ' ', '0');
```



### showProgress( isShow )

진행 표시 여부를 설정.

```js
qm.showProgress(true);
```



### setTimeout( timeoutSec )

쿼리 응답 타임아웃 시간을 초 단위로 설정.

```js
qm.setTimeout(15);
```



### getLastError( key )

마지막 에러 정보를 반환. `key`가 제공되면 해당 필드의 값만 반환.

```js
const errMsg = qm.getLastError('errMsg');
```



### getLastPacketInfo( key )

마지막 패킷 정보를 반환. `key`가 제공되면 해당 필드의 값만 반환.

```js
const packetType = qm.getLastPacketInfo('packetType');
```



### printLastError( key )

마지막 에러 정보를 로그로 출력. `key`가 제공되면 해당 필드만, 그렇지 않으면 전체 정보를 출력.

```js
qm.printLastError();
```



### addQueryListener( listener )

쿼리 이벤트 리스너를 추가. (중복 등록은 무시.)

```js
qm.addQueryListener(myListener);
```



### removeQueryListener( listener )

추가된 쿼리 이벤트 리스너를 제거.

```js
qm.removeQueryListener(myListener);
```



### addRealComp( dataKey, comp )

리얼(실시간) 데이터 수신을 위한 컴포넌트를 등록.  
등록 시, 동일 키에 대해 처음 등록되는 경우 반환 값으로 등록된 컴포넌트 수(1)를 반환.

```js
qm.addRealComp('Query1_key', myComponent);
```



### removeRealComp( dataKey, comp )

리얼 컴포넌트 등록을 해제. 모든 컴포넌트가 해제되면 해당 키가 삭제.

```js
qm.removeRealComp('Query1_key', myComponent);
```



### getRealComps( dataKey )

지정된 데이터 키에 등록된 리얼 컴포넌트 배열을 반환.

```js
const comps = qm.getRealComps('Query1_key');
```



### registerReal( aquery, realField, keyArr, compArr, updateTypes, callback, afterUpdate )

리얼(실시간) 데이터를 수신할 컴포넌트를 등록.

- **aquery**: 쿼리 객체 또는 쿼리 이름 (문자열일 경우 내부에서 AQuery.getSafeQuery 호출)  
- **realField**: 리얼 데이터와 관련된 필드 이름  
- **keyArr**: 서버에 전달할 키 배열 (실시간 데이터 요청을 위한 값)  
- **compArr**: 리얼 데이터를 업데이트할 컴포넌트 배열 또는 컨테이너 아이디(문자열일 경우 컴포넌트를 조회)  
- **updateTypes**: 업데이트 방식 (`0` = update, `-1` = prepend, `1` = append 등)  
- **callback**: 리얼 데이터 수신 시 호출할 콜백 함수  
- **afterUpdate**: 컴포넌트 업데이트 후 호출할 함수

```js
qm.registerReal('Query1', 'fieldName', ['key1', 'key2'], [comp1, comp2], 0,
    function(realData) {
        // 리얼 데이터 처리 콜백
    },
    function(realData) {
        // 업데이트 후 처리
    }
);
```



### unregisterReal( aquery, keyArr, compArr )

등록된 리얼 데이터를 해제.

- **aquery**: 쿼리 객체 또는 쿼리 이름  
- **keyArr**: 해제할 키 배열  
- **compArr**: 컴포넌트 배열 또는 컨테이너 아이디

```js
qm.unregisterReal('Query1', ['key1', 'key2'], [comp1, comp2]);
```



### getHeaderInfo( headerKey )

헤더 정보를 반환. `headerKey`가 지정되면 해당 값만 반환.

```js
const ipAddr = qm.getHeaderInfo('PBLC_IP_ADDR');
```



### setHeaderInfo( headerInfo )

헤더 정보를 설정. 인자가 제공되지 않으면 기본값으로 초기화.

```js
qm.setHeaderInfo({
    PBLC_IP_ADDR: '192.168.1.1',
    PRVT_IP_ADDR: '192.168.1.100',
    MAC_ADR: 'ABCDEF123456',
    TMNL_OS_TCD: 'PC',
    TMNL_OS_VER: '10',
    TMNL_BROW_TCD: 'CR',
    TMNL_BROW_VER: '90'
});
```



### onConnected( success )

네트워크 연결이 성공하거나 실패했을 때 호출되는 콜백.

```js
qm.onConnected(true);
```



### onClosed()

네트워크 연결이 종료되었을 때 호출. 내부적으로 콜백과 리얼 컴포넌트를 모두 초기화.

```js
qm.onClosed();
```



### onReceived( data, size )

수신된 데이터를 처리하기 위한 기본 메서드.  
(상속받아 구체적인 데이터 파싱 로직을 구현해야 함)

```js
qm.onReceived(bufferData, size);
```



### getInDataOffset( aquery, queryData )

전송 버퍼에서 헤더 이후 데이터 시작 오프셋을 반환.  
(기본값은 `0`이며, 필요 시 재정의)

```js
const offset = qm.getInDataOffset(aQuery, queryData);
```



### getOutDataOffset( aquery )

수신 버퍼에서 헤더 이후 데이터 시작 오프셋을 반환.

```js
const offset = qm.getOutDataOffset(aQuery);
```



### getRealDataOffset( aquery )

리얼 데이터 버퍼에서 헤더 이후 데이터 시작 오프셋을 반환.

```js
const offset = qm.getRealDataOffset(aQuery);
```



### getRealQueryName()

리얼 데이터 전문에서 쿼리 이름을 추출하여 반환.  
(기본 구현은 빈 문자열을 반환하며, 필요 시 재정의)

```js
const realQueryName = qm.getRealQueryName();
```



### getRealKey( queryData )

리얼 데이터를 처리할 때 사용할 키를 추출하여 반환.  
(기본 구현은 빈 문자열을 반환하며, 필요 시 재정의)

```js
const realKey = qm.getRealKey(queryData);
```



### makeQueryData( aquery, isSend )

주어진 쿼리에 대해 사용할 AQueryData(또는 상속받은 클래스) 객체를 생성하여 반환.

```js
const qData = qm.makeQueryData(aQuery, true);
```



### sendRealSet( aquery, isSet, regArr )

리얼 등록/해제 패킷을 전송하는 함수.  
(구현은 하위 클래스에서 재정의 필요)

```js
qm.sendRealSet(aQuery, true, regArr);
```



### makeHeader( queryData, abuf, menuNo )

전송 전에 서버로 보낼 패킷 헤더 정보를 설정하고, 패킷 ID를 반환.

```js
const packetId = qm.makeHeader(queryData, buffer, 'Menu1');
```



### setErrorData()

수신된 데이터로부터 에러 정보를 추출하여 `errorData`를 설정.  
(구현은 필요에 따라 재정의)

```js
qm.setErrorData();
```



### setTimeoutErrorData( trName, menuNo, groupName )

타임아웃 발생 시 에러 정보를 설정.

```js
qm.setTimeoutErrorData('TR001', 'Menu1', 'Group1');
```



### sendByType( obj )

네트워크 전송 방식을 타입에 따라 다르게 처리.  
전송할 데이터는 `sndBuf` 또는 `sendObj`에 따라 전송.

```js
qm.sendByType({
    packetId: 1,
    menuNo: 'Menu1',
    trName: 'TR001',
    groupName: 'Group1',
    queryData: qData,
    sndBuf: buffer,
    sendObj: jsonObject
});
```



### enableDTS()

수신 시, 숫자형 데이터를 문자열로 변환할지 여부를 활성화.

```js
qm.enableDTS();
```



### realProcess( recvObj )

리얼(실시간) 데이터 수신 시 호출되어, 쿼리 데이터를 생성한 후 등록된 컴포넌트에 데이터를 전달.

```js
qm.realProcess(receivedObject);
```



### queryProcess( recvObj )

전문 수신 후 쿼리 데이터를 파싱하고, 콜백 및 리스너를 호출하여 컴포넌트 업데이트를 진행.

```js
await qm.queryProcess(receivedObject);
```



### enableLazyUpdate( enable, option )

리얼 데이터 업데이트 시 지연 업데이트 기능을 활성화하거나 비활성화.

- **option.lazyQuerys**: 지연 업데이트 적용 쿼리 배열 (지정하지 않으면 전체)
- **option.lazyComponents**: 지연 업데이트 대상 컴포넌트 배열

```js
qm.enableLazyUpdate(true, {
    lazyQuerys: ['TR001', 'TR002'],
    lazyComponents: [comp1, comp2]
});
```



### updateLazyData( disableAfterUpdate )

지연 업데이트된 데이터를 일괄 적용한 후, 옵션에 따라 지연 업데이트 기능을 비활성화.

```js
qm.updateLazyData(true);
```



### realDataToComp( key, queryData )

리얼 데이터 수신 시, 해당 데이터 키에 등록된 컴포넌트에 데이터를 전달.

```js
qm.realDataToComp('SomeKey', queryData);
```





### sendProcessByComp( acom, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent )

특정 컴포넌트의 입력 데이터를 기반으로 쿼리 전송 과정을 처리.

```js
qm.sendProcessByComp(myComponent, 'Group1', preBufferFn, postResponseFn, afterUpdateFn);
```



### sendProcessByComps( acomps, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent )

여러 컴포넌트의 데이터를 기반으로 쿼리 전송 과정을 처리.

```js
qm.sendProcessByComps([comp1, comp2], 'Group1', preBufferFn, postResponseFn, afterUpdateFn);
```



### sendProcessByName( queryName, menuNo, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent )

쿼리 이름을 기반으로 쿼리 전송 과정을 처리.

```js
await qm.sendProcessByName('Query1', 'Menu1', 'Group1', preBufferFn, postResponseFn, afterUpdateFn);
```



### sendProcessByNames( queryNames, menuNo, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent )

여러 쿼리 이름에 대해 쿼리 전송 과정을 처리.

```js
await qm.sendProcessByNames(['Query1', 'Query2'], 'Menu1', 'Group1', preBufferFn, postResponseFn, afterUpdateFn);
```



### sendProcess( aquery, menuNo, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent )

주어진 쿼리에 대해 전송 데이터를 준비하고, 컴포넌트 업데이트 및 콜백 처리를 수행하며 전송을 실행.
- 전송 전, `beforeInBlockBuffer` 및 리스너의 `beforeInBlockBuffer`를 호출.
- 전송 후, 네트워크 타임아웃 설정과 함께 콜백을 등록.

```js
const packetId = qm.sendProcess(aQuery, 'Menu1', 'Group1', preBufferFn, postResponseFn, afterUpdateFn);
```



### sendBufferData( buf )

전달받은 버퍼(또는 JSON 문자열)를 네트워크 I/O 객체를 통해 전송.
네트워크가 시작되어 있지 않으면 진행 표시를 중지.

```js
qm.sendBufferData(bufferData);
```



### onSendFail()

전송 실패 시 호출되어 진행 표시 종료 및 에러 메시지(예: 토스트)를 출력.

```js
qm.onSendFail();
```



### makePacketId()

새로운 패킷 ID를 생성하여 반환.

```js
const newPacketId = qm.makePacketId();
```



### addSkipErrorCode( qryName, errorCode )

특정 쿼리에 대해 무시할 에러 코드를 추가.

```js
qm.addSkipErrorCode('Query1', 'E001');
```



### removeSkipErrorCode( qryName, errorCode )

등록된 무시 에러 코드 중 해당 코드를 제거.

```js
qm.removeSkipErrorCode('Query1', 'E001');
```



### isSkipErrorCode( qryName, errorCode )

특정 쿼리에 대해 해당 에러 코드가 무시 대상인지 확인.

```js
const shouldSkip = qm.isSkipErrorCode('Query1', 'E001');
```



### send_log_helper()

전송 전문에 대한 로그를 남기는 헬퍼 함수. (개발 및 디버깅 용도)

```js
qm.send_log_helper();
```



### recv_log_helper()

수신 전문에 대한 로그를 남기는 헬퍼 함수. (개발 및 디버깅 용도)

```js
qm.recv_log_helper();
```



### sendProcessWithReal( queryName, menuNo, groupName, beforeInBlockBuffer, afterOutBlockData, afterUpdateComponent, option, realCallback, realAfterUpdate )

리얼 데이터 처리를 포함하는 쿼리 전송 과정을 처리.  
- **option** 객체는 다음 속성을 포함할 수 있습니다:  
  - **realQuery**: 리얼 쿼리 이름 (문자열 또는 배열)  
  - **keyBlock**: 기본값은 `'InBlock1'`  
  - **realField**: 리얼 데이터 관련 필드명  
  - **updateType**: 업데이트 방식  
- 전송 후, 해당 키로 리얼 데이터를 등록.

```js
qm.sendProcessWithReal('Query1', 'Menu1', 'Group1',
    preBufferFn,
    postResponseFn,
    afterUpdateFn,
    { keyBlock: 'InBlock1', realField: 'fieldName', updateType: 0, realQuery: 'RealQuery1' },
    function(realData) {
        // 리얼 데이터 콜백
    },
    function(realData) {
        // 리얼 업데이트 후 콜백
    }
);
```



### clearRealProcess( queryName, menuNo, realQuery )

리얼 전송 과정 등록 정보를 해제.

```js
qm.clearRealProcess('Query1', 'Menu1', 'RealQuery1');
```