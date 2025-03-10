# APanel

> **Extends**: [AContainer](https://wikidocs.net/274983)

APanel은 AContainer를 확장한 클래스로, 주로 레이아웃을 분할하는 데 사용

이 클래스는 팝업 기능을 제공하지 않으며, 네비게이터 내에서 사용 불가능 

대신, container split과 같은 기능을 통해 부모 컨테이너의 특정 영역을 나누고, 그 영역 내에서 다른 컴포넌트들을 배치하는 역할

## Instance Methods  
### init(context) 
APanel의 초기화 메서드로, AContainer의 init 메서드를 호출하여 초기화 과정을 수행.

**context** `<String>`: 컴포넌트 생성 정보 <br>
> 이 정보는 컴포넌트의 초기 설정을 위한 데이터로 사용

```js
var panel = new APanel();
panel.init("example context");  // 컴포넌트를 초기화하고 필요한 컨텍스트 정보를 넘겨줌.
```