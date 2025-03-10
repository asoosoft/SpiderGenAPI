# **APage**
> **Extends**: [AContainer](https://wikidocs.net/274983)  

AContainer를 확장한 컴포넌트

페이지 컨테이너 하나의 전체 화면을 구성

단일 페이지 모드에서는 open() 메서드를 호출하여 사용할 수 있으며, <br>
네비게이션 기능을 사용할 경우 ANavigator 객체와 함께 사용


## Instance Variables
### navigator `<ANavigator>`  
navigator는 페이지 이동을 관리하는 ANavigator 객체

APage는 ANavigator와 함께 사용되어 페이지 간의 이동을 쉽게 관리

ANavigator는 여러 페이지를 등록하고, 페이지 간의 이동을 처리하는 기능을 제공

### oneShot `<Boolean>`
oneshot은 페이지가 비활성화 될 때 자동으로 삭제될지 여부를 결정하는 플래그

true로 설정하면 페이지가 비활성화될 때마다 삭제되고, false로 설정하면 페이지가 유지

이 옵션은 페이지의 라이프사이클을 관리하는 데 유용

## Instance Methods

### constructor(containerId)
APage의 생성자 메서드는 AContainer의 생성자를 호출하여 컨테이너 ID를 설정

이 ID는 APage가 적용될 컨테이너를 식별하는 데 사용

**containerId** `<String>`: APage가 적용될 컨테이너의 ID  

```js
var page = new APage("myPageContainer");
```

### init(context)
init 메서드는 APage를 초기화하는 데 사용

이 메서드는 부모 AContainer의 init()을 호출하며, isOneshot 옵션을 설정

isOneshot이 true이면 페이지가 비활성화될 때 자동으로 삭제되며, <br> 
false이면 페이지가 유지

이 옵션은 페이지의 라이프사이클을 관리하는 데 유용

**context** `<Object>`: 실행 컨텍스트  

```js
var page = new APage("pageContainer");
page.init({ theme: "dark" });
```

### open(viewUrl, parent)

open 메서드는 페이지 컨테이너를 부모 컨테이너에 가득 차도록 오픈하고, 지정된 viewUrl의 뷰를 로드

이 메서드는 페이지를 초기화하고, 지정된 뷰를 로드하여 화면에 표시 

parent 파라미터는 페이지가 열릴 부모 컨테이너를 지정하며, null일 경우 기본 컨테이너에 오픈

**viewUrl** `<String>`: 로드할 뷰의 URL  
**parent** `<AContainer | null>`: 부모 컨테이너  

```js
var page = new APage();
page.open("view/main.lay", null);
```

### getNavigator()

getNavigator 메서드는 현재 설정된 ANavigator 객체를 반환 

이 객체는 페이지 간의 이동을 관리하며, APage와 연결된 네비게이터를 통해 페이지 전환을 제어

**ANavigator**: 현재 APage와 연결된 네비게이터  

```js
var page = new APage();
var navigator = page.getNavigator();
```

### onBackKey()

모바일 환경에서 사용자가 백 버튼을 클릭했을 때 호출되는 메서드

이 메서드는 현재 페이지에서 이전 페이지로 이동할 수 있는지를 확인하는 역할

이 메서드의 반환값은 Boolean 타입으로, 두 가지 경우를 나타냄

**Returns** `<Boolean\>`

* **true**: 이전 페이지로 성공적으로 이동한 경우 <br>
	 
	 >히스토리에 이전 페이지가 존재하여 이동이 가능할 때 반환

* **false**: 이전 페이지로 이동할 수 없는 경우

	> 히스토리에 더 이상 이전 페이지가 없거나, 이동이 불가능한 상황일 때 반환

```js
var page = new APage();
if (page.onBackKey()) {
    console.log("이전 페이지로 이동했습니다.");
} else {
    console.log("이전 페이지가 없습니다.");
}
```