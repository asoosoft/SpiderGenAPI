# AVideo

**Extends**: AComponent

비디오 파일을 로드하고 재생할 수 있는 비디오 컴포넌트.


## Instance Methods

### play() 

비디오를 재생

```js 
const video = new AVideo(); 
video.setSource('https://example.com/video.mp4'); 
video.play();
```

### pause()

비디오를 일시 정지

```js 
const video = new AVideo(); 
video.setSource('https://example.com/video.mp4'); 
video.play(); 

setTimeout(() => { 
	video.pause(); 
}, 5000); // 5초 후 정지
```


### setAutoplay( autoplay )

비디오의 자동 재생 여부를 설정

- **autoplay** `<Boolean>` 자동 재생 여부 (true/false)

```js 
const video = new AVideo(); 
video.setSource('https://example.com/video.mp4'); 
video.setAutoplay(true);
```

### setSource(url)

비디오의 URL을 설정하고 즉시 로드

- **url** `<String>` 비디오 파일의 URL

```js 
const video = new AVideo(); 
video.setSource('https://example.com/video.mp4');
```

<br/>


### getSource()

현재 설정된 비디오 URL 정보를 반환

<br/>



### setData(data)

비디오 컴포넌트에 저장된 데이터 값을 설정

> data 매개변수는 설정할 데이터를 나타내며, 비디오 컴포넌트의 특정 상태나 속성을 저장하는 데 사용

<br/>

### setMetaData(metadata)

비디오에 추가적인 메타데이터를 저장

- **metadata** `<Object>` 저장할 JSON 데이터

```js 
 const video = new AVideo(); 
 video.setMetaData({ title: 'Sample Video', duration: 120 });
```


### getData()

컴포넌트에 세팅된 데이터를 추출하여 반환