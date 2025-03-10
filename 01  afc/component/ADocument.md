# ADocument

도큐먼트 컴포넌트
> ADocument는 MDI (Multiple Document Interface) 시스템에서 문서를 관리하는 역할을 함

이 클래스는 문서의 내용을 저장하고, 문서의 상태(예: 수정됨 여부, 저장 여부)를 관리하며, 화면과 연결된 **AView**와 데이터를 주고받음.

> ✅일반적으로 ADocument는 **텍스트 편집기, 프로젝트 파일 관리 시스템** 등 문서를 기반으로 한 애플리케이션에서 사용 됨.


## Instance Variables

### contents `<String>`

문서의 내용을 저장하는 문자열


### docName `<String>`

문서의 이름을 저장
> 파일 이름과 유사한 역할을 하며, 문서 식별에 사용 됨.

### docType `<String>`

문서 확장자


### isNewDoc `<Boolean>`

문서가 새로 생성된 것인지 여부를 나타냄
> true이면 새로 생성된 문서.

### modified `<Boolean>`

문서가 수정되었는지 여부를 나타냄

### uri `<String>`

문서의 경로를 저장
> 파일 시스템에서의 위치를 나타냄


### view `<AView>`

문서에 연결된 AView 객체
> 문서의 내용을 화면에 표현하는 역할



## Instance Methods

### closeDocument()

문서 닫기


### getView()
문서에 바인드된 뷰를 반환

* **Returns** `<AView>` 바인드 된 뷰


### isClosed()
문서가 닫혀 있는지 여부를 반환

* **Returns** `<Boolean>`

<br/>

### isModified()

문서가 수정되었는지 여부를 반환

* **Returns** `<Boolean>`

### newDocument( uri, docName )

새로운 문서를 생성<br/>

- **uri** :  문서의 경로 
- **docName** : 문서의 이름

### openDocument( openPath )

지정된 경로의 문서를 열기
> openPath는 문서의 경로이며, 반환값은 문서가 성공적으로 열렸는지 여부를 나타내는 Boolean

```js
document.openDocument('C:\path\filename.prj');
```

<br/>

### reportModify( modified )

문서의 수정 상태를 UI에 반영

* **modified** `<Boolean>` 수정여부

```js
document.reportModify(true); // UI에서 수정됨 표시 
document.reportModify(false); // UI에서 수정 안됨 표시
```


<br/>

### saveDocument( savePath )

경로에 문서를 저장.
savePath 가 없는 경우 this.uri 에 저장

* **savePath** `<String>` 저장 경로
* **Returns** `<Boolean>` 저장여부

```js
document.saveDocument('C:\path\saveFile.prj');
```

<br/>

### setDocumentContent( content ) 

문서의 내용을 변경

- **content** `<String>` 저장할 문서 내용 

```js 
const document = new ADocument(); 
document.setDocumentContent('최성식');
```


### getDocumentContent() 

현재 문서의 내용을 반환

- **Returns** `<String>` 문서 내용 

```js
const document = new ADocument();
document.setDocumentContent('최성식'); 
console.log(document.getDocumentContent()); // '최성식'
```

### setDocumentName( name ) 

문서의 이름을 설정

- **name** `<String>` 문서 이름 

```js 
const document = new ADocument(); 
document.setDocumentName('MyDocument');
```


### getDocumentName() 

현재 문서의 이름을 반환

- **Returns** `<String>` 문서 이름 

```js
const document = new ADocument(); 
document.setDocumentName('MyDocument'); 

console.log(document.getDocumentName()); // 'MyDocument'
```


### setDocumentUri( uri ) 

문서의 경로를 설정

- **uri** `<String>` 문서의 경로 

```js 
const document = new ADocument(); 
document.setDocumentUri('/path/to/document.txt');
```

### getDocumentUri() 

현재 문서의 경로를 반환

- **Returns** `<String>` 문서의 경로 

```js 
const document = new ADocument(); 
document.setDocumentUri('/path/to/document.txt'); 

console.log(document.getDocumentUri()); 
// '/path/to/document.txt'
```


### setModifiedFlag( modified )

문서의 수정여부 값을 설정

* **modified** `<Boolean>` 수정여부

```js
document.setModifiedFlag(true); 
console.log(document.isModified());
--------------------------------------
true
```

<br/>

### setView( view )

문서에 연결할 뷰를 설정

* **view** `<AView>` 문서에 연결될 뷰 객체

```js
const view = new AView();
view.init();
.
.
document.setView(view);
```