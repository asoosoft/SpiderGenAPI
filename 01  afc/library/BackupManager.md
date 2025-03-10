# BackupManager

동적으로 로드되는 목록(Item list)의 메모리 사용량을 최적화하면서 스크롤 위치를 유지하고, 필요할 때 백업된 항목을 복원하는 기능을 제공하는 클래스

> 웹 애플리케이션에서 대량의 데이터를 화면에 표시할 경우, 모든 항목을 DOM에 추가하면 성능이 저하될 수 있다. 이를 해결하기 위해 **스크롤을 기준으로 일정 개수의 항목만 유지하면서, 보이지 않는 항목은 백업해두었다가 필요할 때 복원하는 방식**을 사용

<br/>

## Static Variables

### managerStack `<Array>`

모든 BackupManager 인스턴스를 저장하는 배열. 

### clearManagerStack() 

저장된 모든 BackupManager 인스턴스를 제거하고 managerStack을 초기화

* **Returns** `<void>`

## Instance Variables

### $contentEle `<jQuery Object>`

항목이 추가되고 제거되는 jQuery 객체

<br/>

### backupScroll `<Number>`

복원할 스크롤 위치값. 항목들을 복원, 백업할 때 스크롤 위치를 변경하기 위해 사용

<br/>

### delegator `<Object>`

BackupManager를 사용하는 객체를 저장. 

객체에는 반드시 getTopItem, getBottomItem, getTotalCount 메서드가 있어야 함.

<br/>

### headStack `<jQuery Object>`

윗부분의 엘리먼트들을 저장하고 있을 보이지 않는 div jQuery 객체

<br/>

### isMoveReal()


현재 백업된 데이터가 있는 상태에서 이동 중인지 여부를 반환 

* **Returns** `<Boolean>` 실제 이동 여부

<br/>

### itemContentCnt `<Number>`

한번에 추가되는 항목의 로우 개수. 항목이 1개의 로우가 아닌 2개 이상의 로우로 구성될 수 있기 때문에  저장

<br/>

### itemHeight `<Number>`

하나의 항목의 높이를 지정

<br/>

### maxRow `<Number>`

내부 항목들이 화면에 보여질 최대 개수를 지정

* **Default** 50

<br/>

### restoreCount `<Number>`

내부 항목들이 한번에 복원될 개수를 지정

* **Default** 20

<br/>

### scrollEle `<HTMLElement>`

스크롤이 발생하는 엘리먼트. 항목들이 복원 될때 스크롤 위치를 변경해야 할 수도 있기 때문에 저장

<br/>

### tailStack `<jQuery Object>`

아래부분의 엘리먼트들을 저장하고 있을 보이지 않는 div jQuery 객체

<br/>
<br/>

## Instance Methods

### appendItemManage( items, isApplyBackupScroll )

항목을 append 함. 백업을 해야하는 경우와 아닌 경우를 판단하여 처리. 

* **items** `<jQuery Object>` 추가할 항목들
* **isApplyBackupScroll** `<Boolean>` 백업 스크롤 적용 여부
* **Returns** `<Boolean>`

<br/>

### applyBackupScroll()


복원 스크롤 위치값을 실제 스크롤 위치에 반영. 여러 개의 BackupManager가 같은 scrollEle을 바라볼 경우, 중복 적용되지 않도록 주의.

> - backupScroll 값이 0이 아닌 경우, 이를 scrollEle.scrollTop에 더한 뒤 backupScroll을 초기화한다.
> - scrollEle이 null일 경우에는 적용되지 않는다. 

* **Returns** `<Number>` 복원된 스크롤 이동값

<br/>

### backupHead( row )

항목을 headStack 에 append 

* **row** `<jQuery Object>` 추가할 항목

<br/>

### backupHeadPre( row )

항목을 headStack 에 prepend

* **row** `<jQuery Object>` 추가할 항목

<br/>

### backupTail( row )

항목을 tailStack 에 append

* **row** `<jQuery Object>` 추가할 항목

<br/>

### backupTailPre( row )

항목을 tailStack 에 prepend

* **row** `<jQuery Object>` 추가할 항목

<br/>

### checkHeadBackup()

head 쪽에 복원할 항목이 있는 경우 복원. 복원한 양 만큼 tail 쪽에 백업하고 스크롤 위치를 변경.

* **Returns** `<Boolean>`

<br/>

### checkTailBackup()

tail 쪽에 복원할 항목이 있는 경우 복원. 복원한 양 만큼 head 쪽에 백업하고 스크롤 위치를 변경.

* **Returns** `<Boolean>`

<br/>

### clearAll()

headStack과 tailStack에 저장된 백업항목들을 제거.

<br/>

### clearHead()

headStack 에 저장된 항목들을 제거

<br/>

### clearTail()

tailStack 에 저장된 항목들을 제거

<br/>

### create( delegator, maxRow, restoreCount )

복원, 백업을 하기 위한 정보들을 지정. 

> 가장 먼저 호출해야 한다. headStack과 tailStack을 생성하며, 파라미터로 넘어온 정보들을 저장한다.

* **delegator** `<Object>` BackupManager를 사용하는 객체
* **maxRow** `<Number>` 표현될 항목의 최대 개수
* **restoreCount** `<Number>` 복원할 항목의 개수

<br/>

### destroy()

headStack과 tailStack을 제거

<br/>

### getHeadCount()

headStack 안에 있는 항목의 개수를 반환

* **Returns** `<Number>`

<br/>

### getHRestoreCount()

headStack 안에 있는 항목의 개수와 한번에 복원할 개수 중 작은 값을 반환

* **Returns** `<Number>`

<br/>

### getTailCount()

tailStack 안에 있는 항목의 개수를 반환

* **Returns** `<Number>`

<br/>

### getTRestoreCount()

tailStack 안에 있는 항목의 개수와 한번에 복원할 개수 중 작은 값을 반환

* **Returns** `<Number>`

<br/>

### minusBackupScroll( count )

백업된 항목이 제거되었을 때, backupScroll 값을 감소

* **count** `<Number>` 감소시킬 항목의 개수 

* **주의**: `afc.isIos`가 `true`이면서 `afc.andVer > 5.1`일 경우, 백업 스크롤이 변경되지 않음.

<br/>

### plusBackupScroll( scrollVal )

백업된 항목이 추가되었을 때, backupScroll 값을 증가

* **scrollVal** `<Number>` 추가할 스크롤 값

<br/>

### prependItemManage( items )

항목을 prepend 

> 백업을 해야하는 경우와 아닌 경우를 판단하여 처리한다. 백업이 되었으면 true, 안되었으면 false를 반환한다.

* **items** `<jQuery Object>` 추가할 항목들
* **Returns** `<Boolean>`

<br/>

### restoreHead()

headStack 에서 마지막 항목을 뽑아서 반환

* **Returns** `<jQuery Object>`

<br/>

### restoreTail()

**tailStack** 에서 마지막 항목을 뽑아서 반환

* **Returns** `<jQuery Object>`

<br/>

### setBackupInfo( itemHeight, itemContentCnt, scrollEle, $contentEle )


백업에 필요한 정보를 한 번에 설정

* **itemHeight** `<Number>` 한 항목의 높이 
* **itemContentCnt** `<Number>` 한 번에 추가되는 항목의 개수 
* **scrollEle** `<HTMLElement>` 스크롤이 발생하는 엘리먼트. 
 `null`일 경우 스크롤 이동이 적용되지 않음. 
* **$contentEle** `<jQuery Object>` 항목이 추가되고 제거되는 jQuery 객체. `null`일 경우 복원 및 백업이 정상 동작하지 않을 수 있음.

<br/>

### setItemHeight( itemHeight )

항목의 높이를 지정

* **itemHeight** `<Number>` 항목 높이

<br/>

### setMoveReal( enable )

현재 이동 여부를 설정

* **enable** `<Boolean>` 이동 여부를 나타내는 값

<br/>
<br/>