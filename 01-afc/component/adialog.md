# ADialog

> **Extends**: [AFrameWnd](https://wikidocs.net/275179)

다이얼로그 레이아웃을 화면에 띄우고, 확인 및 취소 버튼의 동작을 처리하는 기능을 제공.  

## Instance Methods

### init(context)  
다이얼로그의 기본 옵션을 설정하는 초기화 메서드. 

다이얼로그가 생성될 때 실행되며, 다이얼로그의 기본 속성을 적용한 후 부모 클래스의 **init()** 메서드를 호출.  

```js
dialog.init();
```

### openDialog(viewUrl, parent, title, width, height)  
다이얼로그를 화면에 띄우는 메서드.  

지정된 레이아웃을 로드하고, 부모 컨테이너 및 크기를 설정.  

- **viewUrl** `<String>`: 로드할 레이아웃 파일(.lay)의 경로  
- **parent** `<AContainer>`: 다이얼로그의 부모 컨테이너 (기본값: rootContainer)  
- **title** `<String>`: 다이얼로그의 제목  
- **width** `<Number>`: 다이얼로그의 너비  
- **height** `<Number>`: 다이얼로그의 높이  

```js
var dialog = new ADialog();
dialog.openDialog('view/dialog.lay', null, '제목', 200, 300);
```

### onCreateDone() 
다이얼로그 생성이 완료된 후 실행되는 메서드. 

이벤트 리스너를 추가하고, 입력 필드의 키 입력을 활성화하는 등의 후처리를 수행.  

```js
dialog.onCreateDone();
```

### close(result, data)
다이얼로그를 닫는 메서드. 

다이얼로그가 닫힐 때, **keydown** 이벤트 리스너를 제거하고 부모 클래스의 close()를 호출.  

- **result** `<Number>`: 다이얼로그의 종료 상태 (예: 0 = OK, 1 = Cancel)  
- **data** `<Object>`: 추가 데이터 전달 가능  

```js
dialog.close(0);
```

### onOK()  
확인 버튼을 클릭했을 때 호출되는 메서드. 

다이얼로그가 닫히기 전에 onDialogOk() 또는 onCloseFrame()을 실행하여, 취소되지 않은 경우 다이얼로그를 종료.  

```js
dialog.onOK();
```

### onCancel()
취소 버튼을 클릭했을 때 호출되는 메서드. 

onDialogCancel() 또는 onCloseFrame()을 실행하여, 취소되지 않은 경우 다이얼로그를 종료.  

```js
dialog.onCancel();
```

### onKeyDown(e) 
키 입력 이벤트를 처리하는 메서드.  
- **Enter(↵)** 키를 누르면 **onOK()** 실행  
- **ESC(⎋)** 키를 누르면 **onCancel()** 실행  

- **e** `<Event>`: 키 입력 이벤트  

```js
document.addEventListener('keydown', (e) => dialog.onKeyDown(e));
```

## Events
### onCreateDone()
- 다이얼로그가 생성된 후 실행  
- 입력 필드의 키 입력을 활성화  

### onOK()  
- 확인 버튼 클릭 시 실행  
- **Enter** 키를 눌렀을 때도 실행 

### onCancel() 
- 취소 버튼 클릭 시 실행  
- **ESC** 키를 눌렀을 때도 실행  

### onKeyDown(e)  
- **Enter** 또는 **ESC** 키 입력 시 다이얼로그 동작 처리  