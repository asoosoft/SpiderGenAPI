# AProgress

> **Extends**: AComponent

프로그레스 바 컴포넌트.

> 진행 상태를 시각적으로 표시. 프로그레스 값(0~100)을 설정하고 반환할 수 있는 기능을 제공

## Instance Variables

### bar `<jQuery Object>`

프로그레스 바의 jQuery 객체.

### value `<Number>`

현재 프로그레스의 값 (0~100 사이의 백분율 값).

## Instance Methods

### getValue()

프로그레스의 현재 값을 반환

-   **Returns**  `<Number>` 현재 값 (백분율).
    

### setValue( value )

프로그레스의 백분율 값을 설정

-   **value**  `<Number>` 설정할 값 (0~100 사이).
    

### getData()

**getValue()** 와 동일

-   **Returns**  `<Number>` 현재 값.
    

### setData( data )

**setValue( data )** 와 동일

-   **data**  `<Number>` 설정할 값.
    

### getQueryData( dataArr, keyArr, queryData )

컴포넌트의 값을 **dataArr**에 저장

-   **dataArr**  `<Array>` 데이터 저장 배열.
-   **keyArr**  `<Array>` 데이터 키 배열.
-   **queryData**  `<AQueryData>` AQueryData 객체.
    

### setQueryData( dataArr, keyArr, queryData )

**dataArr** 값을 참조하여 프로그레스 값을 설정

-   **dataArr**  `<Array>` 데이터 배열.
-   **keyArr**  `<Array>` 데이터 키 배열.
-   **queryData**  `<AQueryData>` AQueryData 객체.
    