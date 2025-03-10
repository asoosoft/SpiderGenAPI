# ACanvas
> **Extends**: AComponent


캔버스 컴포넌트

> ACanvas는 캔버스를 사용하여 그래픽을 그릴 수 있는 컴포넌트. 
> 이 컴포넌트는 캔버스의 크기 조정, 데이터를 설정/가져오기, 안티앨리어싱을 비활성화하는 기능 등을 제공.


## Properties

###  ctx  `<Object>`

캔버스의 context


## Instance Methods

### getData()

현재 설정된 데이터를 반환

**Returns**  `<String>`

```js 
const canvas = new ACanvas(); 
canvas.setData('sample data'); 

console.log(canvas.getData()); // 'sample data'
```



### resizeCanvas()

캔버스의 크기를 현재 설정된 너비와 높이로 재조정

> context 정보가 초기화되므로, resetContextState()가 자동으로 호출.

```js
const canvas = new ACanvas(); 
canvas.resizeCanvas();
```

### setData( data )

캔버스에 저장된 데이터를 설정

- **data** `<String>` 데이터

```js
const canvas = new ACanvas(); 
canvas.setData('hello world');
```


### updatePosition( pWidth, pHeight )

캔버스의 위치와 크기가 변경될 때 호출

> 이 메서드는 내부적으로 resizeCanvas()를 호출하여 캔버스 크기를 재조정.

- **pWidth** `<Number>` 부모 요소의 너비 
- **pHeight** `<Number>` 부모 요소의 높이

```js 
const canvas = new ACanvas(); 
canvas.updatePosition(300, 300);
```
<br/>


### resetContextState() 

캔버스 크기가 변경될 때 context의 상태를 초기화

> ✅resizeCanvas() 가 호출되면 자동으로 실행.

```js 
canvas.resetContextState();
```

### disableAnti( width, height ) 

캔버스의 블러 및 안티앨리어싱을 비활성화

> ✅모바일 환경에서는 캔버스 크기를 크게 설정하고 스케일을 적용하여 축소해야 선명한 렌더링이 가능. 

- **width** `<Number>` 캔버스의 너비 
- **height** `<Number>` 캔버스의 높이 

```js 
const canvas = new ACanvas(); 
canvas.disableAnti(400, 400);
```