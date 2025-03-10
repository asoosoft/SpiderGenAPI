# MdQueryManager

MdQueryManager 클래스는 [QueryManager](https://wikidocs.net/275527) 클래스를 확장하여, 쿼리 처리 및 데이터 송수신에 관련된 기능을 제공

이 클래스는 주로 데이터 헤더 처리, 쿼리 연결 및 수신 데이터를 처리하는 데 사용

## Properties

### **headerInfo** `<Object>`

쿼리 헤더 정보를 저장하는 객체

`setHeaderInfo` 메서드를 통해 초기화할 수 있으며, 시스템 환경 정보를 포함한 다양한 데이터 필드를 저장

```js
this.headerInfo = {
    EYE_CATCH: 'D',  // 시스템 환경 정보 구분 -> 개발: "D", 검증: "T", 운영: "R"
    biz_sys_tcd: '1',  // 업무 시스템 구분 코드 -> 업무계: "1", 정보계: "2", 퇴직: "3"
    USER_TCD: '0',  // 사용자 구분 코드 -> 해당없음(로그인TR): "0", 고객: "1", 직원: "2"
    USER_ID: '',
    DEPT_ID: '',
    PBLC_IP_ADDR: '',
    PRVT_IP_ADDR: '',
    MAC_ADR: '',
    TMNL_OS_TCD: 'PC',  // 단말 OS 구분 코드
    TMNL_OS_VER: '10',  // 단말 OS 버전
    TMNL_BROW_TCD: 'CR',  // 단말 브라우저 구분 코드
    TMNL_BROW_VER: '90'  // 단말 브라우저 버전
};
```
   
----------

<br>


## Instance Methods

### constructor(name)

MdQueryManager 클래스의 생성자

QueryManager 클래스를 상속받고, 쿼리 이름을 설정

   -   **name** `<String>`: 쿼리 이름

```js
let mdQueryManager = new MdQueryManager('myQuery');
```

----------

### setHeaderInfo(headerInfo)

헤더 정보를 설정하는 메서드

headerInfo 객체를 전달하여, 쿼리의 헤더 정보를 초기화하거나 업데이트할 수 있음

-  **headerInfo** `<Object>`<br>

	쿼리의 헤더 정보를 담고 있는 객체 <br>

	전달된 headerInfo에 의해 클래스의 headerInfo 속성이 업데이트<br>

	만약 null이 전달되면 기본값으로 초기화

```js    
mdQueryManager.setHeaderInfo({
    USER_ID: 'user123',
    DEPT_ID: 'IT'
});
```

----------

### **getBrowserInfo()**

사용자의 브라우저 및 운영체제 정보를 추출하여 반환하는 메서드

이를 통해, 브라우저 및 운영체제의 종류와 버전 정보를 수집

- **Returns** `<Array>`: [os, osVer, browser, browserVer] 형식의 배열로 브라우저와 OS 정보를 반환 <br>

	>배열의 순서는 [OS, OS 버전, 브라우저, 브라우저 버전]
 
```js   
let browserInfo = mdQueryManager.getBrowserInfo();

console.log(browserInfo); 
// 출력 예시: ['PC', '10', 'CR', '90']
```

----------

### **onConnected(success)**

쿼리가 연결된 후 호출되는 메서드

연결 성공 여부에 따라 상태를 업데이트

-  **success** `<Boolean>`: 연결 성공 여부

```js
mdQueryManager.onConnected(true); // 연결 성공 시 호출
```

----------

### **onClosed()**

쿼리 연결이 종료되었을 때 호출되는 메서드

연결이 끊어지면 상태를 업데이트

```js
mdQueryManager.onClosed(); // 연결 종료 시 호출
```

----------

### **onReceived(data, size)**

수신된 데이터를 처리하는 메서드

수신된 데이터를 버퍼에 저장하고, 필요한 처리를 수행

 -   **data** `<Buffer>`: 수신된 데이터
 -   **size** `<Number>`: 수신된 데이터의 크기

```js
mdQueryManager.onReceived(receivedData, dataSize);
```

----------

### **ackProcess()**

ACK 패킷을 처리하는 메서드

ACK 패킷을 송신 버퍼에 설정하여 송신

```js 
mdQueryManager.ackProcess(); // ACK 처리
```

----------

### **pollingProcess()**

Polling 패킷을 처리하는 메서드

수신 대기 상태에서 주기적으로 호출되어, 데이터가 수신되면 이를 처리

```js
mdQueryManager.pollingProcess(); // Polling 패킷 처리
``` 

----------

### **beforeQueryProcess()**

쿼리 전처리 작업을 수행하는 메서드

데이터를 받아 처리하기 전에 필요한 설정 및 초기화 작업을 수행

```js
mdQueryManager.beforeQueryProcess(); // 쿼리 전처리
```

---

### **getInDataOffset()**

입력 데이터 오프셋을 반환하는 메서드

헤더 이후의 데이터 시작 위치를 반환

- **Returns**  `<Number>`: 데이터 오프셋

```js
let inDataOffset = mdQueryManager.getInDataOffset();

console.log(inDataOffset); // 출력 예시: 128
```

---

### **getOutDataOffset()**

출력 데이터 오프셋을 반환하는 메서드

출력 데이터의 시작 위치를 반환

- **Returns**  `<Number>`: 데이터 오프셋

```js
let outDataOffset = mdQueryManager.getOutDataOffset();

console.log(outDataOffset); // 출력 예시: 256
```

---

### **setErrorData()**

수신된 데이터에서 에러 메시지를 처리하고 설정하는 메서드

오류 메시지를 파싱하고, 이를 errorData 객체에 저장

```js
mdQueryManager.setErrorData(); // 에러 데이터 설정
```

---

### **makePacketId()**

새로운 패킷 ID를 생성하는 메서드

패킷 ID는 0에서 999 사이로 순차적으로 생성

- **Returns** `<Number>`: 생성된 패킷 ID

```js
let packetId = mdQueryManager.makePacketId();

console.log(packetId); // 출력 예시: 1
```

---

### **send_log_helper(sendLen)**

송신 데이터를 로그에 출력하는 디버깅 도구

sendLen 길이만큼 송신 버퍼의 내용을 출력

- **sendLen** `<Number>`: 송신 데이터의 길이

```js
mdQueryManager.send_log_helper(256); // 송신 데이터 로그 출력
```

---

### **realProcess()**

실시간 데이터를 처리하는 메서드

수신된 실시간 데이터를 쿼리 데이터로 변환하고, 컴포넌트를 업데이트

```js
mdQueryManager.realProcess(); // 실시간 데이터 처리
```

---

### **makeHeader(queryData, abuf, menuNo)**

쿼리 데이터와 버퍼를 사용하여 헤더를 생성하는 메서드

G/W, AXIS 헤더 및 기타 필수 데이터를 설정

-   **queryData** `<Object>`: 쿼리 데이터를 담고 있는 객체
-   **abuf** `<Buffer>`: 데이터 버퍼
-   **menuNo** `<String>`: 메뉴 번호

```js
mdQueryManager.makeHeader(queryData, abuf, '1234'); 
// 헤더 생성
```

---

### **makeAxisHeader(queryData, abuf, menuNo, packetId)**


AXIS 헤더를 생성하는 메서드

패킷 ID, 메시지 종류, 액션 플래그 등의 정보를 설정

-   **queryData** `<Object>`: 쿼리 데이터를 담고 있는 객체
-   **abuf** `<Buffer>`: 데이터 버퍼
-   **menuNo** `<String>`: 메뉴 번호
- **packetId** `<Number>`: 생성된 패킷 ID

```js
mdQueryManager.makeAxisHeader(queryData, abuf, '1234', packetId); 
// AXIS 헤더 생성
```

---

### **makeGwHeader(queryData, abuf, menuNo)**


G/W 헤더를 생성하는 메서드

송수신에 필요한 필드들을 설정

-   **queryData** `<Object>`: 쿼리 데이터를 담고 있는 객체
-   **abuf** `<Buffer>`: 데이터 버퍼
-   **menuNo** `<String>`: 메뉴 번호

```js
mdQueryManager.makeGwHeader(queryData, abuf, '1234'); 
// G/W 헤더 생성
```

---