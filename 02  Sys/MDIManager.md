# MDIManager

다중 문서 인터페이스 관리 클래스

## Instance Variables

### cntrClass `<String>`

파일 오픈 시 띄울 컨테이너 클래스명

### copyTabHistory `<Array>`

저장된 탭의 히스토리를 복사한 배열. 히스토리 처리를 할 때 사용.


### docPanel `<AContainer>`

문서패널 저장 변수. 컨테이너를 분할하여 만든 패널

### docTmplMap `<Object>`

문서 확장자별 템플릿 저장 객체


### matchingMap `<Object>`

문서 타입별로 연관되는 확장자를 저장하는 객체. 예) cls-lay


### tabHistory `<Array>`

탭의 히스토리를 저장하는 배열


### tabOffset `<Number>`

현재 히스토리 위치를 저장한다.

### tabPanel `<AContainer>`

탭패널 저장 변수. 컨테이너를 분할하여 만든 패널

### trgContainer `<AContainer>`

문서를 관리할 컨테이너

### tabBar `<ATabBar>`

문서를 관리하는 탭바

### defaultIcon `<String>`

확장자에 대한 정해진 아이콘이 없는경우 기본적으로 보여질 아이콘맵의 위치

### iconByExtObj `<Object>`

각 확장자명에 대한 정해진 아이콘맵의 오브젝트

## Static Methods

### getCurrentDocument()

현재 활성화된 문서 객체(AView)를 반환. <br/>
활성화된 문서가 없는 경우 **undefined** 반환. 

- **Returns** `<AView>` or `<undefined>`

```js
let activeDoc = MDIManager.getCurrentDocument();
console.log(activeDoc ? activeDoc.docName : "활성화된 문서 없음");
```

### saveCurrentDocTmplFile()

현재 활성화된 문서 템플릿 파일을 저장.  
MDIManager가 관리하는 현재 문서를 찾아서 저장하는 기능.

```js
MDIManager.saveCurrentDocTmplFile(); // 현재 활성화된 문서 저장
```


## Static Variables

### MODIFIED_MARK `<String>`

문서가 수정된 경우, 탭 제목 앞에 붙는 마크. 기본값은 **"*"**.

```js
console.log(MDIManager.MODIFIED_MARK); // "*"
```

## mdiManagers `<Array>`

현재 존재하는 모든 MDIManager 인스턴스를 저장하는 배열.

```js
console.log(MDIManager.mdiManagers.length); // 생성된 MDIManager 개수
```

### curMdiManager `<MDIManager>` or `<null>`

현재 활성화된 MDIManager 인스턴스.

```js
let activeManager = MDIManager.curMdiManager;
console.log(activeManager ? activeManager.managerName : "No Active MDIManager");
```

## Instance Variables

### watchMsgs `<Object>`

문서 변경 감지 시, 중복 메시지 박스를 방지하기 위한 객체.<br/>
파일이 수정될 때, 같은 파일에 대해 여러 번 메시지 박스가 뜨는 것을 방지.

```js
console.log(mdiMgr.watchMsgs); // { "file1.cls": AMessageBox, "file2.js": null }
```

### fileMap `<Object>`

파일 경로를 키값으로 하고, File 또는 Blob 객체를 저장하는 맵. <br/>  
FileReader를 사용할 경우 파일 데이터를 저장하는 용도로 사용.

```js
console.log(mdiMgr.fileMap["C:/sample.txt"]); // File 객체 또는 Blob 객체
```

### managerName `<String>`

MDIManager의 이름을 저장하는 변수.  
기본값은 `"_"`, MDIManager를 구분하는 역할.

```js
console.log(mdiMgr.managerName); // 기본값 "_" 또는 설정한 이름
```

## Instance Methods

### activeDocContainer( filePath )

문서를 연다. 파일 경로나 선택할 탭이 없으면 null을 반환.<br/>
탭을 선택하여 활성화하고 숨겨져있는 탭이면 제일 왼쪽으로 탭의 위치를 변경<br/>. 
탭 히스토리에 저장하고, 문서가 활성화 되어있지 않은 경우 활성화.

- **filePath** `<String>` 파일 경로
- **Returns** `<AView>`

```js
//mdiMgr는 MDIManager 객체
let filePath = "C:\SampleProject\SampleProjectApp.cls";
mdiMgr.activeDocContainer(filePath);
```

### addMatchingExt( ext1, ext2 )

문서 타입별로 연관되는 확장자를 저장. 예) cls-lay

- **ext1** `<String>` 확장자1
- **ext2** `<String>` 확장자2

```js
//mdiMgr는 MDIManager 객체
mdiMgr.addMatchingExt('cls', 'lay');
```

### applyModifiedMark( doc )

수정여부를 알 수 있게 탭의 이름을 변경하여 적용.

- **doc** `<Object>` ADocument 인스턴스 또는 상속 클래스의 인스턴스

### backDocContainer()

이전 히스토리 탭을 활성화.

### closeAllActiveTabs( callback, exTab )

특정 탭을 제외하고 탭들을 모두 닫는 재귀함수. 문서가 수정된 상태이면 저장, 취소여부를 묻고 재귀처리.

- **callback** `<Function>` 콜백 함수
- **exTab** `<AView>` 닫지않을 탭 객체

```js
//mdiMgr는 MDIManager 객체
let exTab = mdiMgr.getLastTab();
mdiMgr.closeAllActiveTabs(function(result) {
　// result(true/false) 값에 따라 처리
}, exTab);
```

### closeAllTabs( callback )

모든 탭을 닫음.<br/> 
현재 활성화된 탭을 제외한 다른 탭부터 모두 닫은 후, 마지막으로 활성화된 탭을 닫음.<br/>
 모든 탭이 닫히면 콜백 함수를 호출.

- **callback** `<Function>` 콜백 함수

```js
//mdiMgr는 MDIManager 객체
mdiMgr.closeAllTabs(function() {
　// 탭을 모두 닫은 후의 처리
});
```

### closeDocContainer( filePath, callback, isForce, isSave )

문서를 닫음. 
<br/>문서가 수정된 경우 강제 처리 및 저장이면 문서를 강제로 저장하고, 강제 처리가 아니면 [저장, 저장안함, 취소] 할 지 여부 확인.<br/> 완료된 후 콜백 함수를 호출.

#### 콜백함수에 넘겨주는 파라미터 값
- 강제 처리 아닌 경우 **-1**:탭없음 **0**:저장 **1**:아무일없음 **2**:취소
- 강제 처리 맞는 경우 **-1**:탭없음 **1**: 그외 모든 상황

- **filePath** `<String>` 파일 경로
- **callback** `<Function>` 콜백 함수
- **isForce** `<Boolean>` 강제 처리 여부
- **isSave** `<Boolean>` 강제 저장 여부

```js
//mdiMgr는 MDIManager 객체
let filePath = "C:\SampleProject\SampleProjectApp.cls";
mdiMgr.closeDocContainer(filePath, function(result) {
　// result 값에 따라 처리
}, true, false); // 수정된 상태여도 강제로 저장하지 않고 닫는다.
```

### closeOtherTabs( tabId, callback )

특정 탭을 제외한 모든 탭을 닫음. <br/>
수정이 안되었거나 열리지 않은 탭을 먼저 닫고, 활성화된 탭은 순차적으로 닫음.

- **tabId** `<String>` 닫지 않을 탭 아이디
- **callback** `<Function>` 콜백 함수

```js
//mdiMgr는 MDIManager 객체
let tabId = mdiMgr.getTabBar().getLastTab().tabId;
mdiMgr.closeOtherTabs('tab01', function(result) {
　// result(true/false) 값에 따라 처리
});
```

### contextMenuEvent( acomp, info )

메뉴를 선택하면 발생되는 이벤트 함수. 선택한 메뉴정보에 맞게 처리.

- **acomp** `<All>` AMenu 컴포넌트
- **info** `<Object>` 선택한 메뉴 정보

### findDocTemplate( filePath, index )

파일 경로의 확장자에 해당하는 문서 템플릿 정보를 찾음. 문서 템플릿 정보가 여러개인 경우 index로 선택 가능.

- **filePath** `<String>` 파일 경로
- **index** `<Number>` 템플릿 배열 위치값. Default: 0
- **Returns** `<Object>`

```js
//mdiMgr는 MDIManager 객체
let filePath = 'C:\SampleProject\sample.cls';
let docTmpl = mdiMgr.findDocTemplate(filePath, 0);
```

### getActiveCntrIdx()

현재 활성화된 문서 컨테이너의 탭 순서를 반환.

- **Returns** `<Number>`

### getActiveContainer()

문서 컨테이너 중 현재 활성화된 컨테이너를 반환.

- **Returns** `<AContainer>`


### getAllTabs()

지금까지 열린 문서의 모든 탭을 반환.

- **Returns** `<Array>`

### getDocPanel()

컨테이너 안의 docPanel 객체를 반환.

- **Returns** `<APanel>`

### getTabBar()

컨테이너 안의 tabPanel 안의 ATabBar 객체를 반환.

- **Returns** `<ATabBar>`

### getTabPanel()

컨테이너 안의 tabPanel 객체를 반환.

- **Returns** `<APanel>`

### getTargetContainer()

지정된 컨테이너를 반환.

- **Returns** `<AContainer>`

### onCloseContainer( tabBtnView )

ATabBar delegate function. 탭을 닫을 때 발생. 컨테이너가 닫히지 않게 true 값을 반환하고 자체적인 로직을 통해 닫음.

- **tabBtnView** `<AView>` 탭 객체

### onTabBarSelect( comp, info, e )

탭이 선택되었을 때 발생하는 이벤트 함수.<br/> 
탭 히스토리를 저장하고 문서를 활성화. 마우스 오른쪽 클릭인 경우에는 메뉴팝업을 띄움.

- **comp** `<ATabBar>` ATabBar 컴포넌트
- **info** `<AView>` 탭
- **e** `<Object>` event 객체

### openDocContainer( filePath, docTmpl, noLoad, bSilent )

문서를 오픈. <br/>
최초로 여는 경우에는 탭바에 문서정보를 가진 탭을 추가하며 noLoad 값이 true인 경우 문서를 비활성화. 파일 경로에 해당하는 파일이 없는 경우에 bSilent 값에 따라 알림 처리.


- **filePath** `<String>` 파일 경로
- **docTmpl** `<Object>` 문서 템플릿
- **noLoad** `<Boolean>` 문서의 활성화 여부
- **bSilent** `<Boolean>` 경로에 파일이 없는 경우 알림 여부
- **Returns** `<AView>`

```js
//mdiMgr는 MDIManager 객체
let filePath = 'C:\SampleProject\sample.cls';
mdiMgr.openDocContainer(filePath, null, false, true); // 문서 활성화, 파일없어도 알림메시지 안띄움
```

### openMatchingDoc( filePath )

파일 경로와 연관되는 문서를 오픈. 연관되는 문서는 연관 화장자를 등록한 경우에만 가능.(addMatchingExt)

- **filePath** `<String>` 파일 경로

```js
//mdiMgr는 MDIManager 객체
let filePath = "C:\SampleProject\sample.cls";
mdiMgr.addMatchingExt('cls', 'lay');
mdiMgr.openMatchingDoc(filePath); // sample.lay
```

### regDocTemplate( docTemplate )

문서 템플릿을 등록. 템플릿 구조는 아래와 같음.<br/>{ containerClass: '', documentClass: '', viewUrl: '', extNames: ['','',''] }<br/>**containerClass**: 문서를 담을 컨테이너 클래스명<br/>**documentClass**: ADocument 클래스 또는 상속받은 클래스명<br/>**viewUrl**: 문서를 보여줄 화면 url('Source/docView.lay')<br/>**extNames**: 문서 확장자 배열

- **docTemplate** `<Object>` 템플릿

```js
//mdiMgr는 MDIManager 객체
mdiMgr.regDocTemplate({
　cntrClass: 'AWindow',
　documentClass: 'SampleDoc',
　viewUrl: 'Source/SampleView.lay',
　extNames: ['txt', 'css']
});
```

### removeHistory( tabId )

특정 탭을 히스토리에서 제거.

- **tabId** `<String>` 탭 아이디

```js
//mdiMgr는 MDIManager 객체
mdiMgr.removeHistory('tab01');
```

### reportModify( doc, modified )

문서의 수정여부를 세팅하고, 수정여부에 따라 수정마크를 표현.

- **doc** `<Object>` ADocument 인스턴스 또는 상속 클래스의 인스턴스. Default: 현재 활성화된 인스턴스
- **modified** `<Boolean>` 수정여부

```js
//mdiMgr는 MDIManager 객체
let doc = mdiMgr.getActiveContainer().getView().getDoc();
mdiMgr.reportModify(doc, true);
mdiMgr.reportModify(null, false);
```

### saveDocContainer( filePath )

문서를 저장. 문서 템플릿이 없거나 수정사항이 없으면 저장하지 않음.

- **filePath** `<String>` 파일 경로

```js
//mdiMgr는 생성한 객체
let filePaht = "C:\SampleProject\SampleProjectApp.cls";
mdiMgr.saveDocContainer(filePath);
```

### saveTabHistory( tabId )

아이디에 해당하는 탭을 히스토리에 저장.

- **tabId** `<String>` 탭 아이디

```js
//mdiMgr는 생성한 객체
mdiMgr.saveTabHistory('tab01');
```

### setTargetContainer( trgContainer )

컨테이너를 지정. 컨테이너를 분리하여 각각 tabPanel, docPanel 에 저장. tabPanel 에는 ATabBar 인스턴스를 생성하여 삽입.

- **trgContainer** `<AContainer>` 컨테이너 객체

```js
//mdiMgr은 생성한 객체
mdiMgr.setTargetContainer(this.getContainer());
```

### setOpenCntrClass( cntrClass )

파일 오픈 시 띄울 컨테이너 클래스명을 세팅.

- **cntrClass** `<String>` 클래스 명

### setDefaultIcon( icon )

확장자에 대한 정해진 아이콘이 없는경우 기본적으로 보여질 아이콘맵의 위치를 세팅.

- **icon** `<String>` 아이콘맵 위치

```js
let tabBar = mdiMgr.getTabBar();
//탭바에 아이콘을 세팅한다.
tabBar.setIconMap('tree_icon_map');
//탭바에 세팅하는 아이콘맵은 stl에 백그라운드 이미지를 입혀놓은 클래스명이거나 이미지의 주소이다.
//이미지는 각 16*16인 아이콘이 나열된 이미지이다.

//아미지 내에서 기본 아이콘의 위치를 세팅한다.
mdiMgr.setDefaultIcon(0);
```

### setIconByExt( ext, icon )

각 확장자명에 대한 정해진 아이콘맵의 위치를 세팅.

- **ext** `<String>` or `<Object>` 확장자명
- **icon** `<Number>` 아이콘맵 위치

```js
let tabBar = mdiMgr.getTabBar();
//탭바에 아이콘을 세팅한다.
tabBar.setIconMap('tree_icon_map');
//탭바에 세팅하는 아이콘맵은 stl에 백그라운드 이미지를 입혀놓은 클래스명이거나 이미지의 주소이다.
//이미지는 각 16*16인 아이콘이 나열된 이미지이다.

//아미지 내에서 확장자명에 대한 아이콘의 위치를 세팅한다.
mdiMgr.setIconByExt('cls', 1);
//ext가 Object인 경우
mdiMgr.setIconByExt({
    cls : 1,
    lay : 2,
    stl : 3,
    js : 4,
    css : 5
});
```

### getIconByExt( ext )

각 확장자명에 대한 정해진 아이콘맵의 위치를 반환.

- **ext** `<String>` 확장자명
- **Returns** `<Number>` 아이콘맵의 위치


### getDocTemplate( ext, index )

docTmplMap에 등록되어있는 확장자명의 인덱스에 위치한 문서 탬플릿을 반환.

- **ext** `<String>` 확장자명
- **index** `<Number>` 탬플릿의 위치
- **Returns** `<Object>` 탬플릿

```js
mdiMgr.getDocTemplate('cls', 0);
```


### findDocContainer( filePath )

파일 경로에 해당하는 문서의 탭을 찾음. 열려져있지 않은경우 null을 반환.

- **filePath** `<String>` 파일 경로 (고유 id )
- **Returns** `<AContainer>` 해당 탭의 컨테이너

### landTabContainer( cntr )

탭 컨테이너를 MDIManager의 문서패널에 최대화하여 붙임.

- **cntr** `<AContainer>` 최대화 시킬 컨테이너

```js
let cntr = mdiMgr.getActiveContainer();
mdiMgr.landTabContainer(cntr);
```

### floatTabContainer( tab, offX, offY )

탭 컨테이너를 MDIManager의 문서패널에서 떼어내어 따로 띄움.

- **tab** `<AView>` 탭
- **offX** `<Number>` 가로위치
- **offY** `<Number>` 세로위치

```js
let tab = mdiMgr.getActiveContainer().tab;
mdiMgr.floatTabContainer(tab, 10, 10);
```

### regMdiManager()
MDIManager 목록에 현재 MDIManager 추가

```js
MDIManager.prototype.regMdiManager = function(){
	MDIManager.mdiManagers.push(this);
}
```

### unregMdiManager()
MDIManager 목록에 현재 MDIManager 제거

```js
MDIManager.prototype.unregMdiManager = function() {
	let arr = MDIManager.mdiManagers;
	for(let i=0; i<arr.length; i++){
		if(arr[i]===this){
			arr.splice(i,1);
			break;
		}
	}
}
```

### reloadMdiDocs()
다른 MDIManager에서 문서를 다시 불러오는 기능

```js
MDIManager.reloadMdiDocs = function(filePath, exMdiManager){
	let arr = MDIManager.mdiManagers, mgr;
	for(let i=0; i<arr.length; i++){
		mgr = arr[i];
		if(mgr !== exMdiManager){
			mgr.reloadDocument(filePath);
		}
	}
}
```