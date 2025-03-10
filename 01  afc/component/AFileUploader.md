# AFileUploader

> **Extends**: AView

파일업로더 컴포넌트

> 이 컴포넌트는 사용자가 파일을 선택하고, 업로드하며, 파일 정보를 확인할 수 있도록 함


## Instance Methods

 
 
###  createElement( context )

컴포넌트의 HTML 요소를 동적으로 생성

> 이 함수가 실행된 이후에 init 함수가 실행


<!-- 
###  init(context, evtListener)
컴포넌트를 초기화하고 이벤트 리스너를 연결합니다. 
<p class="bbqa"> 'context'는 컴포넌트 생성 정보이며,  'evtListener'는 이벤트 리스너입니다.</p>
-->

###  setReadOnly( isReadOnly )

컴포넌트를 읽기 전용으로 설정

> true로 설정하면 파일 선택 및 드래그 앤 드롭이 비활성화
 
###  setDisabled( isDisabled )
컴포넌트 비활성화
> true이면 컴포넌트가 비활성화되어 사용자가 파일을 선택할 수 없음

###  setAccept( accept )
업로드할 파일의 종류를 설정

> 예를 들어, setAccept('image/*')는 이미지 파일만 선택할 수 있도록 제한

```js 
uploader.setAccept("image/*"); // 모든 이미지 파일 허용 
uploader.setAccept(".pdf,.docx"); // PDF와 Word 파일만 허용
```

###  setMultiple( isMultiple )

다중 파일 선택 가능 여부를 설정

- **isMultiple** `<Boolean>` true 로 설정하면 여러 개의 파일을 선택할 수 있음

```js 
const uploader = new AFileUploader(); 
uploader.setMultiple(true);
```


###  setDragdrop( isDragDrop )

드래그 앤 드롭 기능 활성화
- **isDragDrop** `<Boolean>` true로 설정하면 파일을 드래그 앤 드롭하여 업로드 가능

```js 
const uploader = new AFileUploader()
uploader.setDragdrop(true)
```

###  removeAll()

파일 업로더 컴포넌트를 초기화하여 선택된 모든 파일 제거

###  getFileItem()

선택된 파일의 정보를 포함하는 객체를 반환

- **Returns** `<Object>` 파일 정보 객체

```js 
const uploader = new AFileUploader(); 
const fileInfo = uploader.getFileItem(); 
console.log(fileInfo);
```


###  getValue()
업로드할 파일의 정보를 JSON 객체로 반환

 > 이 객체에는 파일 이름, 크기, 다중 선택 여부, 파일 타입 등이 포함
 
- **Returns** `<Object>`

 
    

###  getFilesInfo()
선택된 모든 파일의 정보를 배열 형태로 반환

- **Returns** `<Array>` 파일 정보 배열 

```js
const uploader = new AFileUploader(); 
const filesInfo = uploader.getFilesInfo(); 
console.log(filesInfo); // [{ fileName: 'test.png', size: 12345, ... }, ...]
```

###  getUrl()

파일 업로더에 설정된 업로드 URL을 반환

- **Returns** `<String>` 업로드 URL 

```js 
const uploader = new AFileUploader(); 
console.log(uploader.getUrl()); //'https://example.com/upload'
```


###  send(data, callback)

선택한 파일을 서버로 전송

- **data** `<Object>` 전송할 추가 데이터 
- **callback** `<Function>` 전송 완료 후 호출될 콜백 함수
> 콜백 함수의 인자로 서버 응답 객체가 전달.

```js 
const uploader = new AFileUploader(); 

uploader.send({ userId: 123 }, function(response) { 		
	console.log('서버 응답:', response); 
});
```