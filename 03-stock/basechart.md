# BaseChart
> **Extends** [AComponent](https://wikidocs.net/274979)

AComponent를 확장하여 차트 컴포넌트를 구현하는데 사용

다양한 인스턴스 변수와 메서드를 통해 차트의 색상, 위치, 데이터 등을 설정하고 업데이트

## Class Variables

### FONT_FAMILY `<String>`
텍스트의 글꼴을 설정하는 데 사용되는 속성

이 속성은 차트에 표시되는 텍스트의 스타일을 지정하는 데 중요한 역할 

기본적으로 웹에서 사용 가능한 글꼴을 지정할 수 있으며, 이를 통해 차트의 가독성을 높이고 디자인을 개선

* **기본값**: 일반적으로 웹에서 사용 가능한 기본 글꼴이 설정

	> 예 )  'Arial', 'Helvetica', sans-serif
	
* **설정 방법**: FONT_FAMILY 속성을 설정하여 차트의 텍스트에 적용할 글꼴을 지정

### ColorObj `<Object>`
차트의 기본 색상 정보를 저장하는 객체

이 객체는 차트의 다양한 요소에 대한 색상 설정을 포함하며, <br>
상속받는 차트에서 필요에 따라 이 객체를 수정하여 사용 가능

> 예 ) 차트의 배경색, 텍스트 색상, 상승 및 하락 색상 등을 정의

* **기본값**: ColorObj는 차트의 기본 색상 설정을 포함

	> 예 )  배경색, 텍스트 색상, 상승 및 하락 색상 등이 포함

* **설정 방법**: 차트 인스턴스에서 ColorObj를 수정하여 원하는 색상으로 설정

### decimalExp `<Number>`
실수 데이터를 표현할 때 소수점 아래 자리 수를 지정하는 변수

이 변수는 차트에서 실수 데이터를 표시할 때, 소수점 이하 몇 자리까지 표현할지를 결정

* **기본값**: 일반적으로 소수점 이하 2자리 또는 3자리로 설정

* **설정 방법**: decimalExp를 설정하여 실수 데이터를 표시할 때 소수점 이하 자리 수를 지정

## Instance Variables
### frwName`<String>`
프레임워크 이름을 저장하는 변수

이 변수는 차트가 어떤 프레임워크를 기반으로 만들어졌는지를 나타내며, 차트의 설정이나 동작에 영향을 주는 역할

### canvas `<HTMLCanvasElement>`

차트를 그리기 위한 캔버스 엘리먼트 객체

이 객체는 차트의 그래픽을 렌더링하는데 사용

```
class BaseChart {
    constructor() {
        // 캔버스 엘리먼트 생성
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
    }
}
// BaseChart 인스턴스 생성
const chart = new BaseChart();
```

### ctx `<CanvasRenderingContext2D>`

버스의 드로잉 컨텍스트로, 차트를 그리기 위한 모든 드로잉 작업을 수행

이 컨텍스트를 통해 도형, 텍스트 등을 생성

### data `<Array>`
차트에 그려질 데이터를 저장하는 배열

이 배열은 차트의 데이터 포인트를 포함하며, 차트의 시각적 표현에 사용

### pos `<Object>`
차트의 드로잉 포지션을 저장하는 객체

차트의 위치를 설정하는 데 사용

### eleW `<Number>`
캔버스를 감싸고 있는 요소의 너비를 저장하는 변수

### eleH `<Number>`
캔버스를 감싸고 있는 요소의 높이를 저장하는 변수

### compLeft `<Number>`
요소의 왼쪽 위치 값을 저장하는 변수

### middleX `<Number>`
요소의 중간 X 위치 값을 저장하는 변수

### colorObj `<Object>`
차트에 필요한 컬러 정보를 저장하는 객체

상속받는 차트가 필요한 컬러 정보를 설정

### decimalExp `<Number>`
실수 데이터를 표현할 때 소수점 아래 자리 수를 지정하는 변수

## Instance Methods
### setColors( colors, isDraw )
차트의 색상을 설정하는 메서드

* **colors** `<Object>` 차트에 적용할 색상 정보 객체
* **isDraw** `<Boolean>` 색상 설정 후 차트를 다시 그릴지 여부를 결정

```
var colors = { background: '#ffffff', line: '#000000' };
  baseChart.setColors(colors, true);
```

### updatePosition(pWidth, pHeight)
캔버스의 위치를 업데이트하는 메서드

* **pWidth** `<Number>` 부모 뷰의 너비
* **pHeight** `<Number>` 부모 뷰의 높이

```
baseChart.updatePosition(800, 600);
```

### updateGraph()
차트의 정보를 갱신하고 업데이트하는 메서드

```
baseChart.updateGraph();
```

### resetDraw()
차트의 드로잉을 리셋하는 메서드

```
baseChart.resetDraw();
```

#### draw()
차트를 그리는 메서드.

```
baseChart.draw();
```

### setDecimal( exp )
실수 데이터를 표현할 때 소수점 아래 자리 수를 지정하는 메서드

* **exp** `<Number>`: 소수점 아래 자리 수

```
baseChart.setDecimal(2);
```

### extractColorObj()
차트에 필요한 색상 정보를 추출하는 메서드

**Returns** `<Object>`: 색상 정보 객체를 반환

```
var colorInfo = baseChart.extractColorObj();
```

### setData(data)
차트에 데이터를 설정하는 메서드

* **data** `<Array>`: 차트에 설정할 데이터 배열

```
var chartData = [10, 20, 30, 40];
baseChart.setData(chartData);
```

### drawDashedLine(t, e, s, i, o)
점선으로 라인을 그리는 메서드.

* **t**: ctx `<CanvasRenderingContext2D>` 캔버스의 드로잉 컨텍스트
	>  점선을 그리는 데 사용
	
* **e**: x1 `<Number>` 시작점의 X 좌표 

	> 점선이 시작되는 위치의 X 좌표를 지정

* **s**: y1 `<Number>` - 시작점의 Y 좌표

	> 점선이 시작되는 위치의 Y 좌표를 지정

* **i**: x2 `<Number>` - 끝점의 X 좌표
	> 점선이 끝나는 위치의 X 좌표를 지정

* **o**: y2 `<Number>` 끝점의 Y 좌표

	> 점선이 끝나는 위치의 Y 좌표를 지정

```
baseChart.drawDashedLine(ctx, 0, 0, 100, 100, [5, 3]);
```