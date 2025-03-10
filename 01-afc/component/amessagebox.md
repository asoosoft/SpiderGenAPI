# AMessageBox
> **Extends**: [ADialog](https://wikidocs.net/274987)

ADialog를 확장한 컴포넌트로, 사용자에게 다양한 유형의 메시지를 표시하고 버튼 클릭에 대한 반응을 처리. 

이 컴포넌트를 사용하면 메시지 박스를 생성하고 관리.

## Properties
### message `<String>`
메시지박스에 표시할 메시지를 설정. 

초기 메시지를 설정할 수 있으며, setMessage 메서드를 통해 동적으로 변경.

### type `<Number>`
메시지박스의 버튼 구성 타입을 설정. 

메시지박스에 표시될 버튼의 구성을 결정.

- AMessageBox.EMPTY : 버튼 없음
- AMessageBox.OK : OK 버튼
- AMessageBox.OK_CANCEL : OK, CANCEL 버튼
- AMessageBox.YES_NO : YES, NO 버튼
- AMessageBox.YES_NO_CANCEL : YES, NO, CANCEL 버튼

```js
messageBox.type = AMessageBox.OK_CANCEL;
```

## Instance Methods

### addCustomButton( text, value )

커스텀 버튼을 추가

메시지박스에 기본 버튼 외에 추가적인 버튼을 삽입.

* **text** `<String>` 버튼에 표시될 텍스트. 사용자가 버튼을 클릭할 때 이 텍스트가 버튼에 표시.

* **value** `<String>` 버튼 클릭 시 반환될 데이터. <br>
이 값은 버튼 클릭 이벤트에서 결과로 반환되어, 클릭된 버튼을 식별하는 데 사용.

```js
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '커스텀버튼 메시지입니다',  AMessageBox.EMPTY, function(result)
{
　if(result == 999) console.log('확인'); // 확인시 처리
});
msgBox.addCustomButton('확인', '999');
```
### onBtnClick( comp, info )
makeButton으로 만든 버튼을 클릭했을 때 호출되는 함수로, 객체에 저장해둔 value 값을 리턴.

* **comp** `<AButton>` 버튼 객체 <br>
클릭된 버튼의 정보를 제공

* **info** `<Object>` 이벤트 함수에 두 번째 파라미터로 전달되는 값<br>
추가적인 이벤트 정보를 포함

```
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '버튼 클릭 예제입니다', AMessageBox.OK_CANCEL, function(result) {
    if(result === 0) {
        console.log('OK 버튼이 클릭되었습니다.');
    } else if(result === 1) {
        console.log('CANCEL 버튼이 클릭되었습니다.');
    }
});

// 버튼 클릭 이벤트 핸들러
msgBox.onBtnClick = function(comp, info) {
    console.log('버튼이 클릭되었습니다:', comp.getText());
    return comp.getValue(); // 버튼에 저장된 value 값을 반환
};
```

### onCancel()
취소 버튼을 눌렀을 때 메시지 박스를 닫으면서 호출되는 함수 

콜백 함수에 타입에 따라서 result 값이 전달

- AMessageBox.OK : 0
- AMessageBox.OK_CANCEL : 1
- AMessageBox.YES_NO : 1
- AMessageBox.YES_NO_CANCEL : 2
- default : 1

```
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '취소 버튼 예제입니다', AMessageBox.YES_NO_CANCEL, function(result) {
    if(result === 0) {
        console.log('YES 버튼이 클릭되었습니다.');
    } else if(result === 1) {
        console.log('NO 버튼이 클릭되었습니다.');
    } else if(result === 2) {
        console.log('CANCEL 버튼이 클릭되었습니다.');
    }
});

// 취소 버튼 클릭 이벤트 핸들러
msgBox.onCancel = function() {
    console.log('취소 버튼이 클릭되어 메시지박스가 닫힙니다.');
    return 2; // AMessageBox.YES_NO_CANCEL 타입에서 CANCEL 버튼의 result 값
};
```
### openBox( parent, message, type, callback )
메시지 박스를 오픈

메시지, 타입, 콜백 함수를 설정하여 메시지 박스를 띄우는 역할

- **parent** `<AContainer>` 부모 컨테이너. 메시지 박스가 속할 컨테이너를 지정.

- **message** `<String>` 메시지 박스에 보여줄 메시지.

- **type** `<Number>` 메세지 박스의 종류. (AMessageBox.EMPTY, AMessageBox.OK, AMessageBox.OK_CANCEL, AMessageBox.YES_NO, AMessageBox.YES_NO_CANCEL)

- **callback** `<Function>` 메시지 박스가 종료될 때 실행되는 콜백 함수 <br>
사용자가 버튼을 클릭했을 때 호출되며, 클릭된 버튼에 따라 result 값을 반환.

```js
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '메시지박스 오픈 예제입니다', AMessageBox.OK, function(result)
{
　console.log('확인');
});
```

### setMessage( msg )
메시지박스에 표시할 메시지를 설정

초기 메시지 외에 동적으로 메시지를 변경

메시지 박스를 처음 생성할 때는 openBox() 메서드를 사용하여 초기 메시지를 설정

> ⚠️ 메시지 박스가 이미 열려 있는 상태에서 메시지를 변경하고 싶을 때는 setMessage() 메서드를 사용하여 동적으로 메시지를 업데이트.

**msg** `<String>`: 메시지박스에 표시할 새로운 메시지를 설정.

```
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '초기 메시지입니다', AMessageBox.OK, function(result) {
    console.log('확인');
});

// 메시지 박스가 열려 있는 동안 메시지를 변경하고 싶을 때
msgBox.setMessage('새로운 메시지로 업데이트되었습니다.');
```

* **초기 메시지 설정**: openBox() 메서드를 사용하여 메시지 박스를 처음 열 때 초기 메시지를 설정. <br>
이 메시지는 메시지 박스가 처음 표시될 때 사용자에게 보여지는 역할.

* **동적 메시지 변경**: setMessage(msg) 메서드를 사용하여 메시지 박스가 이미 열려 있는 상태에서 메시지를 변경. <br>
이 메서드는 메시지 박스의 내용을 실시간으로 업데이트하여 사용자에게 새로운 정보를 제공할 수 있도록 하는 역할.

### setWidth( w )
메시지박스의 너비를 지정. 메시지박스 내부의 뷰 너비는 지정한 값에서 20을 뺀 값으로 설정.

**w** `<Number>` 메시지박스의 너비를 설정.

```js
var msgBox = new AMessageBox('sample');
msgBox.openBox(null, '샘플', AMessageBox.OK_CANCEL, function(result)
{
　if(result==0) console.log('확인'); // 확인시 처리
});
msgBox.setWidth(300);
```