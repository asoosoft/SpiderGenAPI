# EXSecureTextField  
> **Extends**: ATextField  
  
보안키패드를 띄워주는 텍스트필드 상속 컴포넌트  
  
SecurePadManager또는 SecureWebPadManager 의 함수를 이용하여 호출.  
  
  
## Instance Variables
  
### cipherData `<String>`  
  
키패드에서 전달된 암호화 데이터

```js
let textField = new EXSecureTextField();
console.log(textField.cipherData); // null
```  
  
  
### pwLength `<Number>`  
  
키패드에서 전달된 암호화 데이터 길이  

* **Default** 0

```js
let textField = new EXSecureTextField();
console.log(textField.pwLength); // 0
```
  
### padOption `<Object>`  
  
암호화 키패드에 적용될 옵션  
  
```js  
this.padOption = {
    title: '비밀번호 입력',
    padType: 'char', 
    returnType: "1",
    maxLength: 20,
    minLength: 4
};
```

```js
let textField = new EXSecureTextField();
console.log(textField.padOption.title); // "비밀번호 입력"
```

## Instance Methods
  

### setCipherData( cipherData )   
  
암호화 데이터를 저장.  
  
- **cipherData** `<String>` or `<Object>`   
  
```js  
this.sxf.setCipherData(cipherData);  
```  
  
### getCipherData()  
  
암호화 데이터를 반환.  
  
* **Returns** `<String>` or `<Object>`  
  
```js  
this.sxf.getCipherData();  
```  
  
  
### setPwLength(len)  
  
암호화 데이터 길이를 세팅.  
  
- **len** `<Number>`   
  
```js  
this.sxf.setPwLength(len);  
```  
  
  
### getPwLength()  
  
암호화 데이터 길이를 반환.  
  
* **Returns**: `<Number>`  
  
```js  
this.sxf.getPwLength();  
```  
  
  
### reset()  
  
데이터를 초기화.  
  
```js  
this.sxf.clear();  
```  
  
  
### openPad()  
  
키패드 옵션에 맞는 네이티브 키패드를 오픈.  
  
```js  
this.sxf.openPad();  
```  
  
  
### openWebPad()  
  
키패드 옵션에 맞는 웹 키패드를 오픈.  
  
```js  
this.sxf.openWebPad();  
```  
  
  
## 추가 정보  
  
### SecurePadManager 작성 요령  
```js  
let SecurePadManager = {  
 isEnable: true, //사용여부  
 callback: null, //콜백저장  
 sxf: null,      //SecureTexField 객체 저장  
 openPad: function(padOption, callback, sxf) {  
 //콜백, sxf 저장  
 SecurePadManager.callback = callback; SecurePadManager.sxf = sxf;  
 //padOption 에 맞게 보안키패드 오픈  
  
 //키패드 입력 완료시 호출  
 callback(true, cipherData, len);         //키패드 입력 취소  
 callback(true, null, 0); //콜백, sxf 제거  
 //SecurePadManager.callback = null; //SecurePadManager.sxf = null; },  
 //키패드 입력시에 화면에 표시하고 싶은 경우 호출  
 onKeyPadClick: function(obj) { if(SecurePadManager.callback) { SecurePadManager.callback(false, null, obj.len); } }};  
```