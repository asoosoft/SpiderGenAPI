# ACalendarPicker
> **Extends**: AView

날짜를 입력하고 선택할 수 있는 컴포넌트. 두 가지 주요 영역으로 분리.

 1. 사용자가 직접 날짜를 입력할 수 있는 입력 영역
 2. 달력 아이콘을 클릭했을 때 나타나는 팝업 달력 영역

## Instance Variables

### childComp `<ACalendarPickerItem>`

달력 컴포넌트에서 실제로 날짜 및 달력을 관리하는 클래스.

## Instance Methods

### createElement(context)

앨리먼트 객체를 생성. 일반적으로 초기화 시점에 자동으로 호출되므로 직접 호출할 불필요.

### getOption(key)

특정 옵션 값을 가져오는 메서드

* **key** `<String>` 가져올 옵션의 키

```js
let isSelection = calendarPicker.getOption('isSelection');
```

### getDate()

현재 선택된 날짜를 JSON 객체로 반환.
 
### getDateString()

현재 선택된 날짜를 문자열로 반환.
 
### getDiffDate(gap)

현재 날짜에서 지정된 간격만큼 떨어진 날짜를 반환.

### setOption(option, noOverwrite)

특정 옵션을 설정하는 메서드<br/>
기존 옵션을 유지하면서 새로운 옵션을 추가할지 여부도 선택 가능.

* **option** `<Object>` 설정할 옵션 객체
* **noOverwrite** `<Boolean>` 기존 옵션을 유지하면서 새로운 옵션을 추가할지 여부 (기본값: **`false`**)

```js
calendarPickewr.setOption({isFocusSelection: true}, true);
```
 
### setDate(date)

캘린더 피커의 날짜를 설정.

### setCalendarIconLeft()

달력 아이콘을 좌측으로 정렬.
  
### setCalendarIconRight()

달력 아이콘을 우측으로 정렬.

### setCalendarIconImage(img)

달력 아이콘의 이미지를 변경.
 
### setCalendarPickerStyle `<Object>`

캘린더 피커의 스타일을 지정.
 
### setCalendarPickerSelectedStyle `<Object>`

선택된 날짜의 스타일을 지정.
 
### setCalendarIconStyle `<Object>`

캘린더 아이콘의 스타일을 지정.
 
### setCalendarInputStyle `<Object>`

입력 필드의 스타일을 지정. 

### openPopup()

달력을 팝업으로 오픈.

### calendarClose()

캘린더 팝업을 닫음.

```js
calendarPicker.calendarClose();
```

### setDateFormat(format)

날짜 형식을 지정.

* **format** `<String>` 설정할 날짜 형식 (예: `"YYYY/MM/DD"`);

```js
calendarPicker.setDateFormat('YYYY/MM/DD');
```
 
### setTextFieldSTyle(obj)

캘린더 입력 필드의 스타일을 설정한다.

* **obj** `<Object>` 적용할 스타일 객체

```js
calendarPicker.setTextFieldStyle({ color: 'red' });
```

### setPartner(type, cal)

두 개의 컴포넌트를 서로 연결하여 상호작용 가능.<br/> 두 개의 컴포넌트를 연결하여 시작 날짜와 종료 날짜를 선택할 때 유용.
```javascript
 let startDatePicker = this.startComp;
 let endDatePicker = this.endComp;

 startDatePicker.setPartner(endDatePicker);
```
### setReadOnly(isReadOnly)

ACalendarPicker 를 읽기 전용을 설정. 

### setDisabled(isDisabled)

ACalendarPicker의 활성화 여부를 설정.
 
### getPartner()

setPartner 메서드를 통해 설정된 파트너 컴포넌트를 가져오는데 사용.

```javascript
let calendarPicker = this.calendarComp;
let partnerComp = calendarPicker.getPartner();

if(partnerComp) 
{
	console.log('파트너 컴포넌트를 찾았습니다:', partnerComp);
} else 
{
	console.log('파트너 컴포넌트가 설정되어 있지 않습니다.');
}
```

### getMode()

현재 캘린더 모드를 반환. (일별 또는 월별)
 
### setQueryData(dataArr, keyArr, queryData)

ACalendarPicker의 날짜를 외부 데이터에 따라 동적으로 설정할 수 있도록 도움.

* **dataArr** : 데이터 객체의 배열, 이 배열의 첫 번째 객체에서 날짜 값을 가져옴.
* **keyArr** : 데이터 객체에서 사용할 키 배열, 첫 번째 키를 사용하여 날짜 값을 찾음.
* **queryData** : 필요에 따라 참조할 수 있는 추가적인 쿼리 데이터 객체.

### setData(data)

특정 데이터를 설정하고자 할 때 사용.

ex ) 특정 형식의 날짜 데이터를 받아서 ACalendarPicker의 날짜로 설정하는 방식으로 사용.

### getQueryData(dataArr, keyArr, queryData)

컴포넌트가 갖고 있는 날짜 정보를 외부 데이터 구조에 맞게 추출하여 반환하는 기능을 수행.<br/> 주로 쿼리 시스템과 연동하여, 컴포넌트의 현재 상태를 데이터베이스나 다른 데이터 소스에 저장하거나 전송할 때 사용
 
### updatePosition(pWidth, pHeight)

브라우저의 크기가 변경되거나, 부모 컴포넌트의 크기가 변경될 때 자동으로 호출되어, ACalendarPicker와 그 하위 컴포넌트들이 새로운 레이아웃에 맞게 되도록 함.

- **pWidth** `<Number>` : 부모 뷰의 너비
- **pHeight** `<Number>` : 부모 뷰의 높이
- **Returns** `<HTMLObject>`

```javascript
class CustomCalendarPicker extends ACalendarPicker {
	
constructor() {
	super();
}
		
updatePosition(pWidth, pHeight) {
	super.updatePosition(pWidth, pHeight);
		
	console.log("부모 뷰의 너비:", pWidth, "부모 뷰의 높이:", pHeight);
	}
}
```

### getMappingCount()

매핑가능한 개수를 반환.

### getDroppable()

컴포넌트 내부에 드랍 가능여부 반환.

### setCalendarViewStyle `<Object>`

전체 달력 뷰의 스타일을 지정.

### setHeadViewStyle `<Object>`

달력의 상단 영역 스타일을 지정.

### setYearMonthBtnStyle `<Object>`

연도 및 월 버튼의 스타일을 지정.

### setLLeftArrowBtnStyle `<Object>`

왼쪽 이중 화살표 버튼의 스타일을 지정.

### setLeftArrowBtnStyle `<Object>`

왼쪽 화살표 버튼의 스타일을 지정.
 
### setRRightArrowBtnStyle `<Object>`

오른쪽 이중 화살표 버튼의 스타일을 지정.
 
### setRightArrowBtnStyle `<Object>`

오른쪽 화살표 버튼의 스타일을 지정.

### setHeadGridStyle `<Object>`

요일 헤더의 스타일을 지정.

### setListGridStyle `<Object>`
 
날짜 리스트의 스타일을 지정.

### setHeadGridTdStyle `<Object>`

요일의 개별 셀 스타일을 지정.

### setHeadGridTdFirstStyle `<Object>`

첫 번째 요일 셀(일요일)의 스타일을 지정.

### setHeadGridTdLastStyle `<Object>`

마지막 요일 셀 (토요일)의 스타일을 지정.

### setListGridTdStyle `<Object>`

날짜 셀의 스타일을 지정.

### setListGridTdFirstStyle `<Object>`

첫 번째 날짜 셀의 스타일을 지정.

### setListGridTdLastStyle `<Object>`

마지막 날짜 셀의 스타일을 지정.

### setListGridTdSelectedStyle `<Object>`

선택된 날짜 셀의 스타일을 지정.