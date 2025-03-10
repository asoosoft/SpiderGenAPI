# ASwitchButton

> **Extends** : AComponent

on/off 상태를 설정하고, 스타일을 지정할 수 있는 스위치 컴포넌트.


## Instance Variables

### backOffStyle `<String>`

스위치가 꺼진 상태의 스타일 클래스명.

### backOnStyle `<String>`

스위치가 켜진 상태의 스타일 클래스명.

### barEl

스위치 버튼의 바(Bar) 요소 DOM 객체.

### isOn `<Boolean>`

버튼의 현재 on/off 상태.

### isTabable `<Boolean>`

탭 키 이동이 가능한 컴포넌트 여부.

### textArr `<Array>`

스위치 버튼의 텍스트 배열.

## Instance Methods

### getValue()

컴포넌트의 on/off 상태 값을 반환

-   **Returns**  `<Boolean>` 현재 상태
    

### setSwitchOffStyle( backOffStyle )

스위치 버튼의 off 상태 스타일을 설정

-   **backOffStyle**  `<String>` 스타일명
    

### setSwitchOnStyle( backOnStyle )

스위치 버튼의 on 상태 스타일을 설정

-   **backOnStyle**  `<String>` 스타일명
    

### setSwitchStyle( backOnStyle, backOffStyle )

스위치 버튼의 on/off 스타일을 설정

-   **backOnStyle**  `<String>` 스위치가 켜진 상태의 스타일
-   **backOffStyle**  `<String>` 스위치가 꺼진 상태의 스타일
    

```js
this.switch.setSwitchStyle('onClass', 'offClass');
```

```css
.switch-on.onClass span { 
	스타일 정의 
}
```

### setValue( isOn )

컴포넌트의 on/off 상태를 설정

-   **isOn**  `<Boolean>` 설정할 상태 (true: On, false: Off)
    

### setData( data )

스위치 버튼의 상태를 설정

-   **data**  `<Boolean>` 설정할 상태
    

### getData()
스위치 버튼의 현재 상태를 반환

-   **Returns**  `<Boolean>` 현재 상태
    

### getQueryData( dataArr, keyArr, queryData )

데이터 배열에서 스위치 버튼 값을 설정할 key를 찾아 값을 저장

-   **dataArr**  `<Array>` 데이터 배열
-   **keyArr**  `<Array>` 키 배열
-   **queryData**  `<Object>` 추가적인 쿼리 데이터
    

### setQueryData( dataArr, keyArr, queryData )

데이터 배열에서 key를 찾아 스위치 버튼 값을 설정

-   **dataArr**  `<Array>` 데이터 배열
-   **keyArr**  `<Array>` 키 배열
-   **queryData**  `<Object>` 추가적인 쿼리 데이터
   