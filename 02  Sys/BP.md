# **BP**

데이터 패킷의 헤더와 메시지를 정의하고 처리하는 라이브러리

> G/W 및 AXIS 프로토콜을 기반으로 **트랜잭션 데이터**를 송수신하는 데 사용됨. 
>
>이 라이브러리는 **메시지 길이, 오프셋, 플래그 처리** 등의 기능을 제공하며, 실시간 데이터 및 보안 트랜잭션을 포함한 다양한 메시지를 처리하는 데 최적화.




##  **1. DEFINE VALUE**


###  GW_DEF (G/W Header Definitions)

G/W (Gateway) 헤더에 사용되는 정의값들

|Key|Value|설명|
|-|-|-|
|`FITCH`|`0xFE`|G/W 헤더 시작 표시|
|`CTL_NORMAL`|`0x01`|정상 상태|
|`CTL_ACK`|`0x02`|서버로 다시 전송해야 함 (POLL과 유사)|
|`CTL_NAK`|`0x03`|NAK (Negative Acknowledgment)|
|`CTL_POLL`|`0x04`|POLL 프레임 (300초 타임아웃)|
|`CTL_SESS`|`0x05`|세션 체크|
|`CTL_ERR_MSG1`|`0x90`|에러 메시지 표시|
|`CTL_ERR_MSG2`|`0x99`|에러 메시지 표시 & 중단|

###  AXIS_DEF (AXIS Header Definitions)

AXIS 헤더에서 사용되는 정의값들

|Key|Value|설명|
|-|-|-|
|`MSG_NORMAL`|`0x20`|일반 메시지|
|`MSG_TAB_SEP`|`0x22`|TAB 구분자 포함 메시지|
|`MSG_REAL`|`0x50`|실시간 데이터 메시지|
|`MSG_ENCRYPT`|`0x80`|암호화된 트랜잭션 메시지|
|`MSG_PUBLIC_KEY`|`0x81`|공인인증 키 트랜잭션|
|`MSG_SIGN_ON_TRAN`|`0x82`|로그인 트랜잭션|
|`MSG_TICK`|`0x90`|틱 메시지 (실시간 주문체결 등)|
|`MSG_ERROR`|`0x99`|에러 메시지|

## 2. HEADER SIZES

### G/W Header 영역

|Header|Size (Bytes)|설명|
|-|-|-|
|`SZ_GW_HEADER`|`12`|G/W 헤더 전체 크기|
|`SZ_GW_FILLER1`|`1`|G/W 헤더 시작 표시|
|`SZ_GW_FILLER2`|`1`|G/W 헤더 시작 표시|
|`SZ_GW_CTRL`|`1`|컨트롤 값 (정상/NAK/POLL 등)|
|`SZ_GW_SESS`|`1`|세션 정보|
|`SZ_GW_CHCK`|`1`|추가 체크 옵션 (압축, 연속 메시지, 에러 등)|
|`SZ_GW_RSVD`|`2`|예약된 값 (사용하지 않음)|
|`SZ_GW_DLEN`|`5`|데이터 길이 (ASCII)|

###  AXIS Header 영역


|Header|Size (Bytes)|설명|
|-|-|-|
|`SZ_AXIS_HEADER`|`24`|AXIS 헤더 전체 크기|
|`SZ_AXIS_MSGK`|`1`|메시지 ID (일반/실시간 등)|
|`SZ_AXIS_ACTF`|`1`|액션 플래그 (암호화, 연속 메시지 등)|
|`SZ_AXIS_TRXC`|`8`|트랜잭션 코드|
|`SZ_AXIS_MLEN`|`5`|메시지 길이 (ASCII)|

###  Realtime Header & Data


|Header|Size (Bytes)|설명|
|-|-|-|
|`SZ_REAL_HEADER`|`7`|실시간 데이터 헤더|
|`SZ_REAL_DATA`|`7`|실시간 데이터|

## 3. OFFSET DEFINITIONS

각 필드의 시작 오프셋을 정의.

###  G/W Header Offset

|Offset|Formula|
|-|-
|`OS_GW_FILLER1`|`0`
|`OS_GW_FILLER2`|`OS_GW_FILLER1 + SZ_GW_FILLER1`
|`OS_GW_CTRL`|`OS_GW_FILLER2 + SZ_GW_FILLER2`
|`OS_GW_SESS`|`OS_GW_CTRL + SZ_GW_CTRL`
|`OS_GW_CHCK`|`OS_GW_SESS + SZ_GW_SESS`
|`OS_GW_RSVD`|`OS_GW_CHCK + SZ_GW_CHCK`
|`OS_GW_DLEN`|`OS_GW_RSVD + SZ_GW_RSVD`