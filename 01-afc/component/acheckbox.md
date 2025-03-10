# ACheckBox
> **Extends**: [AComponent](https://wikidocs.net/274979)

체크박스와 문자열을 두어 체크하거나 언체크 할 수 있는 컴포넌트. 

사용자가 선택할 수 있는 옵션을 제공하며, 선택된 상태를 시각적으로 표시.

## Properties

### checkClass `<String>`
체크 시의 스타일 클래스 명. 

체크박스가 선택되었을 때 적용할 CSS 클래스 이름을 지정.

### isChecked `<Boolean>`
현재 체크가 되어있는지 여부를 표시. 

true이면 체크된 상태, false이면 체크되지 않은 상태.

### isSafeClick `<Boolean>`
연속클릭 불가능 여부를 설정. 

true로 설정하면 사용자가 체크박스를 연속으로 빠르게 클릭하는 것을 방지.

### isTabable `<Boolean>`
탭키 이동이 가능한 컴포넌트 여부를 표시. 

true로 설정하면 사용자가 탭키를 사용하여 체크박스로 이동.

## Instance Methods

### getCheck()

체크여부를 리턴.

- **Returns** `<Boolean>`: 체크된 상태인지 여부를 반환. 
- **true**이면 체크된 상태, **false**이면 체크되지 않은 상태.

### getCheckAlign()
CheckBox 컴포넌트에서 체크영역 정렬속성을 리턴.

- **Returns** `<String>`: 체크박스의 정렬 상태를 반환. ('left' 또는 'right')

### getQueryData( dataArr, keyArr, queryData )
컴포넌트가 갖고 있는 정보를 keyArr의 정보에 따라 dataArr에 채우는 역할. 

dataArr은 AQueryData 특정 부분의 참조자 역할.

- **dataArr** `<Array>`: [ {key1:value, key2:value ...}, {}, ... ]
- **keyArr** `<Array>`: [ key1, key3, key10 ]
- **queryData** `<AQueryData>`: AQueryData의 전체 값, 필요시 참조

### getText()
CheckBox의 텍스트를 리턴.

- **Returns** `<String>`: 체크박스에 표시된 텍스트를 반환.

### getValue()
CheckBox에 저장된 데이터값을 리턴.

- **Returns** `<String>`: 체크박스에 저장된 값을 반환.

### init( context, evtListener )
체크박스 컴포넌트를 생성하고 초기화 할 때 호출. 

동적으로 객체를 생성할 경우 파라미터를 생략하고 호출.

- **context** `<String>`: 컴포넌트 생성 및 초기화 정보
- **evtListener** `<String>`: **context**에 매핑된 이벤트 수신자

```js
var chk = new ACheckBox();
chk.init();
```

### setCheck( check )
CheckBox의 체크 여부를 지정.

- **check** `<Boolean>`: 체크여부 (true이면 체크, false이면 체크 해제)

### setCheckAlign( align )

CheckBox 컴포넌트에서 체크영역의 정렬을 설정.

- **align** `<String>`: 'left'(왼쪽 정렬) 또는 'right'(오른쪽 정렬)

### setCheckStyle( cBg, ncBg )
CheckBox 스타일에 사용될 클래스명을 지정.

- **cBg** `<String>`: 체크 클래스 명
- **ncBg** `<String>`: 미체크 클래스 명

```js
chk.setCheckStyle('check','non-check');
```

### setData( data )
CheckBox에 저장된 value값과 같은 경우 체크.

- **data** `<Any>`: 세팅할 데이터

### setQueryData( dataArr, keyArr, queryData )

파라미터로 넘어온 dataArr 값을 keyArr의 정보를 참조하여 컴포넌트에 세팅. 

dataArr은 AQueryData 특정부분의 참조자.

- **dataArr** `<Array>`: [ {key1:value, key2:value ...}, {}, ... ]
- **keyArr** `<Array>`: [ key1, key3, key10 ]
- **queryData** `<AQueryData>`: AQueryData의 전체 값, 필요 시 참조

### setText( text )
CheckBox의 텍스트를 지정.

- **text** `<String>`: 텍스트

### setValue( value )
CheckBox에 저장할 데이터 값을 세팅. 

해당 값은 data-check-value 속성에 저장.

- **value** `<String>` : 값

## Events
### click( comp, info, e )
체크박스가 클릭될 때 호출.

comp `<AComponent>`: 클릭된 컴포넌트
- **info** `<null>`: 추가적인 이벤트 정보 없음.
- **e** `<Object>`: 이벤트 객체


## Example Usage

```
// 체크박스 생성 및 초기화
var chk = new ACheckBox();
chk.init();

// 체크박스 스타일 설정
chk.setCheckStyle('checkedStyle', 'uncheckedStyle');

// 체크박스 텍스트 설정
chk.setText('동의합니다');

// 체크박스 클릭 이벤트 설정
chk.on('click', function(comp, info, e) {
    console.log('CheckBox clicked:', comp.getCheck());
});

// 체크박스의 체크 상태 설정
chk.setCheck(true);
```