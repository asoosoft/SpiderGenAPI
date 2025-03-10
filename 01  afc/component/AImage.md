# AImage
> **Extends**: AComponent

이미지 데이터를 표시하기 위한 컴포넌트. 이미지를 특정 위치에 로드하고 표시하는 기능

## Instance Methods

### getImage()

현재 설정된 이미지의 주소 반환
> 이미지의 경로를 문자열 형태로 반환

- **Returns** `<String>`


### setImage( url )

이미지의 주소를 설정
> url 매개변수로 이미지의 경로를 전달하여 컴포넌트에 이미지를 로드


- **url** `<String>` 이미지주소 (src)

```js
image.setImage('../path/temp.png');
```


### setQueryData( dataArr, keyArr, queryData ) 

이미지 데이터를 주어진 데이터 배열에서 가져와 설정

- **dataArr** `<Array>` 데이터 배열 
- **keyArr** `<Array>` 키 배열 
- **queryData** `<Object>` 추가적인 쿼리 데이터 (선택 사항) 

```js 
const image = new AImage(); 
const data = [{ imgUrl: '../path/sample.png' }]; 

image.setQueryData(data, ['imgUrl']);
```

### getQueryData( dataArr, keyArr, queryData ) 

현재 설정된 이미지 URL을 주어진 데이터 배열에 저장

- **dataArr** `<Array>` 데이터 배열 
- **keyArr** `<Array>` 키 배열 
- **queryData** `<Object>` 추가적인 쿼리 데이터 (선택 사항) 

```js 
const image = new AImage(); 
image.setImage('../path/sample.png'); 

const data = [{}]; 
image.getQueryData(data, ['imgUrl']); 

console.log(data[0].imgUrl); // '../path/sample.png'
```

### setMaskValue( value ) 

이미지의 URL을 설정 

**setImage(value)** 와 동일한 기능을 수행. 

```js
const image = new AImage();
image.setMaskValue('../path/sample.png');
```


### setData( data )

이미지의 데이터를 설정

**setImage(data)** 와 동일한 기능을 수행.

- **data** `<String>` 이미지 URL

```js
const image = new AImage();
image.setData('../path/image.png');
```

### getData() 

현재 설정된 이미지 URL을 반환

```js
const image = new AImage(); 
image.setData('../path/image.png'); 

console.log(image.getData()); // '../path/image.png'
```