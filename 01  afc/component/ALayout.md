# ALayout  
> **Extends**: [AComponent](https://wikidocs.net/274979)  

ALayout은 레이아웃 컴포넌트로, 직접 사용되지 않고 [GridLayout](https://wikidocs.net/275177), [FlexLayout](https://wikidocs.net/274993) 등의 하위 클래스에서 상속받아 활용.
  
레이아웃 내의 하위 컴포넌트를 관리하는 역할을 하며, 각종 데이터 바인딩 및 UI 갱신 기능을 제공.  

## Instance Methods  

### init(context, evtListener)
레이아웃을 초기화. 

AComponent의 init을 호출하여 기본 설정을 수행하며, 추가적인 이벤트 리스너 등을 설정.  

- **context** `<HTMLElement>` : 컴포넌트가 적용될 HTML 요소  
- **evtListener** `<Function>` : 이벤트 리스너 (선택 사항)  

### setParent(parent)
현재 레이아웃의 부모 컴포넌트를 설정하고, 하위 컴포넌트에도 동일한 부모를 적용.  

- **parent** `<AComponent>` : 부모 컴포넌트  

하위 컴포넌트 목록을 가져와 각 컴포넌트의 부모를 변경하여 계층 구조를 유지.  

### getAllLayoutComps() 
레이아웃 내부에 포함된 모든 컴포넌트를 배열로 반환하는 기능을 제공. 

이 메서드는 레이아웃에 배치된 모든 컴포넌트를 쉽게 접근할 수 있도록 돕는 역할.

- **Returns** `<Array[AComponent]>` : 레이아웃 내부의 모든 컴포넌트가 포함된 배열을 반환.

기본적으로 빈 배열을 반환하며, 하위 클래스에서 오버라이딩하여 사용.  

```
// ALayout 인스턴스에서 모든 컴포넌트를 가져와서 각 컴포넌트의 ID를 출력하는 예제
var comps = this.layout.getAllLayoutComps();
comps.forEach(function(comp) {
    console.log('Component ID:', comp.getComponentId());
});
```

### eachChild(callback, isReverse)  
AView 클래스의 인스턴스 메서드로, 뷰 내부의 모든 자식 컴포넌트에 대해 특정 작업을 수행할 수 있도록 콜백 함수를 호출하는 기능을 제공. 

이 메서드는 각 자식 컴포넌트에 대해 반복적으로 콜백 함수를 실행하며, 필요한 경우 역순으로도 실행.

- **callback** `<Function>` : 각 하위 컴포넌트에 대해 실행할 함수  
- **isReverse** `<Boolean>` : 역순으로 실행할지 여부 (기본값 false)  

이 메서드는 callback(acomp, index) 형태로 각 컴포넌트를 순회하며 실행.  

```
// AView 인스턴스에서 각 자식 컴포넌트의 ID를 콘솔에 출력하는 예제
this.view.eachChild(function(comp, index) {
    console.log('Component ID:', comp.getId(), 'Index:', index);
});

// 자식 컴포넌트를 역순으로 순회하며 작업을 수행하는 예제
this.view.eachChild(function(comp, index) {
    console.log('Reverse Component ID:', comp.getId(), 'Index:', index);
}, true);
```

### updatePosition(pWidth, pHeight)  
부모 요소의 크기가 변경되었을 때, 현재 레이아웃과 하위 컴포넌트들의 위치와 크기를 업데이트.  

- **pWidth** `<Number>` : 부모 컴포넌트의 너비  
- **pHeight** `<Number>` : 부모 컴포넌트의 높이  

이 메서드는 eachChild를 사용하여 모든 하위 컴포넌트의 updatePosition()을 호출.  

### onContextAvailable() 
컨텍스트가 활성화될 때 실행되며, 하위 컴포넌트들에게도 동일한 처리를 수행.  

이 메서드는 eachChild를 사용하여 각 하위 컴포넌트의 onContextAvailable()을 호출.  

### removeFromView(onlyRelease)  
현재 레이아웃을 부모 뷰에서 제거하고, 하위 컴포넌트들도 함께 제거.  

- **onlyRelease** `<Boolean>` : 메모리에서 완전히 해제할지 여부  

이 메서드는 eachChild를 사용하여 하위 컴포넌트의 removeFromView()를 실행한 후, AComponent.prototype.removeFromView()를 호출하여 레이아웃을 제거.  

### getMappingCount()  
현재 레이아웃과 하위 컴포넌트에서 매핑할 수 있는 요소들의 총 개수를 반환.  

- **Returns** `<Number>` : 매핑 가능한 요소 개수  

getAllLayoutComps()를 호출하여 하위 컴포넌트들의 getMappingCount() 값을 합산하여 반환.  

### getQueryData(dataArr, keyArr, queryData)  
현재 레이아웃이 가진 데이터를 keyArr의 정보를 기반으로 dataArr에 채움.  

- **dataArr** `<Array>` : 데이터를 저장할 배열  
- **keyArr** `<Array>` : 조회할 키 값 목록  
- **queryData** `<AQueryData>` : 전체 쿼리 데이터 객체  

각 하위 컴포넌트의 getQueryData()를 호출하여 데이터를 재귀적으로 구성.  

### setQueryData(dataArr, keyArr, queryData) 
입력된 데이터 배열(dataArr)을 keyArr을 참고하여 현재 레이아웃과 하위 컴포넌트에 설정.  

- **dataArr** `<Array>` : 데이터 배열  
- **keyArr** `<Array>` : 키 값 목록  
- **queryData** `<AQueryData>` : 전체 쿼리 데이터 객체  

하위 컴포넌트가 mappingType == 3이면 updateChildMappingComp()를 실행.

그렇지 않으면 getMappingCount()를 이용해 적절한 키 범위를 계산하여 setQueryData()를 재귀적으로 호출.  

### getDroppable()  
현재 레이아웃이 드래그 앤 드롭을 통해 컴포넌트를 수락할 수 있는지 여부를 반환.  

- **Returns** `<Boolean>` : drop 가능 여부 (true 또는 false)  

레이아웃이 childSelect 변수를 갖고 있지 않거나 값이 0이면 drop 가능.  

### reset() 
레이아웃과 하위 컴포넌트의 상태를 초기화.  

이 메서드는 eachChild을 이용하여 각 하위 컴포넌트의 reset()을 호출.  

### setData(data)  
레이아웃 내의 하위 컴포넌트들에 데이터를 설정.  

- **data** `<Array|Object>` : 설정할 데이터  

입력 데이터가 배열일 경우, 각 하위 컴포넌트에 데이터를 순차적으로 할당.

객체일 경우, Object.keys(data)를 이용해 키 값 기반으로 데이터를 매핑.  

```js
layout.setData(['value1', 'value2', 'value3']);
layout.setData({ key1: 'value1', key2: 'value2' });
```

### getData()  
현재 레이아웃과 하위 컴포넌트의 데이터를 배열 형태로 반환.  

- **Returns** `<Array>` : 하위 컴포넌트들의 데이터 배열  

getAllLayoutComps()를 통해 하위 컴포넌트 목록을 가져와 getData()를 실행한 후, 결과를 배열로 반환.  