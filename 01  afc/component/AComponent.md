# AComponent

**AComponent**는 스파이더젠의 모든 UI 컴포넌트의 최상위 추상 클래스임.  

다양한 UI 요소를 생성하고 관리하기 위한 기본 기능과 속성을 제공함.  
AComponent를 확장하여 구체적인 컴포넌트를 구현할 수 있음.


## Properties

### reInitComp `<Boolean>`
기존 메모리 주소와 동일한 context인지 확인하는 변수임.

```js
console.log(component.reInitComp)
```

### posUtil `<Object>`
위치 조정 관련 유틸리티 객체임 (개발 모드에서 사용됨).

```js
console.log(component.posUtil);
```

### updateType `<String>`
업데이트 타입을 지정하는 변수임.
```js
console.log(component.updateType);
```

### className `<String>`
컴포넌트의 클래스 이름임.
```js
console.log(component.className);
```

### keyPropagation `<Boolean>`
키 이벤트 전파 여부를 설정함.
```js
console.log(component.keyPropagation);
```

### applyType `<String>`
쿼리 데이터 적용 방식을 지정함 (default, add, remove, select).
```js
console.log(component.applyType);
```

### ttMsg `<String>`
툴팁 메시지임.
```js
console.log(component.ttMsg);
```

### qryProms `<Promise[]>`
비동기 쿼리 로드 정보를 담은 배열임.
```js
console.log(component.qryProms);
```

### version `<Number>`
컴포넌트의 데이터 버전임.
```js
console.log(component.version);
```

### sgapH `<Number>`
크기 조정 시 높이 여백 비율임.
```js
console.log(component.sgapH);
```

### sgapW `<Number>`
크기 조정 시 넓이 여백 비율임.
```js
console.log(component.sgapW);
```

### element `<HTMLElement>`
컴포넌트가 참조하는 DOM 요소임.
```js
console.log(component.element);
```

### parent `<AComponent>`
부모 컴포넌트를 나타냄.
```js
console.log(component.parent);
```

### compId `<String>`
컴포넌트의 ID임.
```js
console.log(component.compId);
```

### groupName `<String>`
컴포넌트의 그룹 이름임.
```js
console.log(component.groupName);
```

### isEnable `<Boolean>`
컴포넌트의 활성화 여부임.
```js
console.log(component.isEnable);
```

### eventStop `<Boolean>`
클릭 이벤트 전파를 방지하는 설정 값임 (기본 true임).
```js
console.log(component.eventStop);
```

### events `<Object>`
등록된 이벤트 리스너 목록을 담음.
```js
console.log(component.events);
```

### dataKeyMap `<Object>`
쿼리에서 사용하는 데이터 키 매핑 정보임.
```js
console.log(component.dataKeyMap);
```

### mappingType `<Number>`
쿼리 매핑 방식임 (0: 자동, 1: 입력, 2: 출력임).
```js
console.log(component.mappingType);
```

### ddManager `<Object>`
드래그 & 드롭을 관리하는 객체임.
```js
console.log(component.ddManager);
```

### rect `<Object>`
컴포넌트의 크기 및 위치 정보를 담고 있는 객체임.
```js
console.log(component.rect);
```

### tooltip `<ATooltip>`
툴팁 객체임.
```js
console.log(component.tooltip);
```

### baseName `<String>`
컴포넌트의 기본 클래스 이름임.
```js
console.log(component.baseName);
```

### option `<Object>`
컴포넌트의 추가 옵션을 저장하는 객체임.
```js
console.log(component.option);
```


## Instance Methods

### setQueryData(dataArr, keyArr, queryData)
쿼리 데이터를 설정하는 메서드임.

```js
component.setQueryData(dataArr, keyArr, queryData);
```

### getQueryData(dataArr, keyArr, queryData)
쿼리 데이터를 가져오는 메서드임.

```js
let data = component.getQueryData(dataArr, keyArr, queryData);
console.log(data);
```

### actionToFocusComp()
터치 또는 마우스 클릭 시 해당 컴포넌트를 포커스로 설정함.

```js
component.actionToFocusComp();
```

### createElement(context)
컴포넌트의 DOM 요소를 생성함.
```js
component.createElement(context);
```

### getStyle(key)
지정한 CSS 스타일 속성 값을 반환함.
```js
let color = component.getStyle("color");
console.log(color);
```

### setStyle(key, value)
지정한 CSS 스타일 속성 값을 설정함.
```js
component.setStyle("color", "red");
```

### setStyleObj(obj)
객체 형태로 여러 CSS 스타일을 설정함.
```js
component.setStyleObj({ color: "red", fontSize: "16px" });
```

### realizeContext(context, container, rootView, parentView, listener)
주어진 context를 기반으로 컴포넌트를 생성 및 초기화하여 반환함.
```js
let newComp = AComponent.realizeContext(context, container, rootView, parentView, listener);
```

### includeChildView(parentView, groupName)
부모 뷰에서 특정 그룹의 자식 뷰를 포함함.
```js
component.includeChildView(parentView, "group1");
```

### removeFromAQuery()
쿼리에서 해당 컴포넌트를 제거함.
```js
component.removeFromAQuery();
```

### setSgapW(sgapW)
`data-sgap-width` 속성을 설정함.
```js
component.setSgapW(10);
```

### setSgapH(sgapH)
`data-sgap-height` 속성을 설정함.
```js
component.setSgapH(10);
```

### setOption(option, noOverwrite)
컴포넌트의 추가 옵션을 설정함.
```js
component.setOption({ key: "value" }, noOverwrite);
```

### setData(value)
컴포넌트에 데이터를 설정함 (각 컴포넌트별로 재정의 가능함).
```js
component.setData("Hello World");
```

### getData()
현재 컴포넌트의 데이터를 반환함.
```js
let data = component.getData();
console.log(data);
```

### updateChildMappingComp(dataArr, queryData)
자식 컴포넌트의 데이터를 업데이트함.
```js
component.updateChildMappingComp(dataArr, queryData);
```

### setUpdateType(updateType)
컴포넌트의 업데이트 타입을 설정함.
```js
component.setUpdateType("refresh");
```

### escapePreventTouch()
Android 4.3 이하에서 터치 이벤트 방지 기능을 해제함.
```js
component.escapePreventTouch();
```

### setFocus(noActive)
컴포넌트에 포커스를 설정함.
```js
component.setFocus(noActive);
```

### offsetPos(dx, dy)
현재 위치에서 dx, dy만큼 이동함.
```js
component.offsetPos(10, 20);
```

### offsetSize(dw, dh)
현재 크기에서 dw, dh만큼 크기를 조절함.
```js
component.offsetSize(50, 100);
```

### getMultiAttrInfo(dataKey)
특정 data- 속성을 가진 모든 값을 객체로 반환함.
```js
console.log(component.getMultiAttrInfo("data-style-"));
```

### escapePreventDefault()
스크롤 이벤트가 방해받지 않도록 기본 이벤트를 방지함.
```js
component.escapePreventDefault();
```

### setEventSync(dstEventEle)
특정 요소와 이벤트를 동기화함.
```js
component.setEventSync(dstEventEle);
```

### getContainerId()
컨테이너의 ID를 반환함 (없으면 null을 반환함).
```js
console.log(component.getContainerId());
```

### getRootView()
현재 컴포넌트의 최상위 루트 뷰를 반환함.
```js
let rootView = component.getRootView();
console.log(rootView);
```

### getElement()
현재 컴포넌트의 DOM 요소를 반환함.
```js
let element = component.getElement();
console.log(element);
```

### getContainer()
현재 컴포넌트가 속한 컨테이너를 반환함.
```js
let container = component.getContainer();
console.log(container);
```

### getContainerView()
컨테이너의 메인 뷰를 반환함 (없으면 null을 반환함).
```js
console.log(component.getContainerView());
```

### preValMerge(comp, data, keyArr)
데이터의 특정 key 값이 없을 경우 이전 값을 병합하여 설정함.
```js
component.preValMerge(comp, data, keyArr);
```

### actionDelay()
일정 시간 동안 이벤트 처리를 비활성화함.
```js
component.actionDelay();
```

### enableKeyPropagation(enable)
키 이벤트 전파 여부를 설정함.
```js
component.enableKeyPropagation(enable);
```

### getCompStyleObj()
현재 컴포넌트의 스타일을 객체로 반환함.
```js
console.log(component.getCompStyleObj());
```

### setCompStyleObj(obj)
다른 컴포넌트의 스타일 객체로 스타일을 변경함.
```js
component.setCompStyleObj(obj);
```

### setInlineStyle(pos)
컴포넌트를 inline-block 스타일로 설정함.
```js
component.setInlineStyle(pos);
```

### setQueryInfo(qryName, blockName, dataKeyArr, index)
컴포넌트의 쿼리 정보를 설정함.
```js
component.setQueryInfo("query1", "Block1", ["Key1", "Key2"]);
```

### updateQueryData(queryData)
쿼리 데이터를 업데이트하여 컴포넌트에 반영함.
```js
component.updateQueryData(queryData);
```

### loadQueryInfo()
쿼리 정보를 불러옴.
```js
component.loadQueryInfo();
```

### initTooltip()
툴팁을 초기화함.
```js
component.initTooltip();
```

### reloadTooltip()
툴팁을 새로고침함.
```js
component.reloadTooltip();
```

### playAnimate()
data-keyframe 속성을 이용하여 애니메이션을 실행함.
```js
component.playAnimate();
```

### enableDrag(isDraggable, offsetX, offsetY, listener)
드래그를 활성화함.
```js
component.enableDrag(isDraggable, offsetX, offsetY, listener);
```

### enableDrop(isDroppable, listener)
드롭을 활성화함.
```js
component.enableDrop(isDroppable, listener);
```

### cloneComponent()
컴포넌트를 복제하여 새 인스턴스를 생성함.
```js
let newComp = component.cloneComponent();
```

### removeFromView()
컴포넌트를 제거하고 리소스를 정리함.
```js
component.removeFromView();
```

### release()
컴포넌트의 리소스를 정리함.
```js
component.release();
```

### centerX()
컴포넌트를 X축 기준 중앙 정렬함.
```js
component.centerX();
```

### centerY()
컴포넌트를 Y축 기준 중앙 정렬함.
```js
component.centerY();
```

### getBoundRect()
컴포넌트의 현재 크기 및 위치 정보를 반환함.
```js
console.log(component.getBoundRect());
```

### setCompRect(x, y, w, h)
컴포넌트의 크기와 위치를 설정함.
```js
component.setCompRect(x, y, w, h);
```

### unbindEvent(eventName, callback, options)
이벤트 바인딩을 해제함.
```js
component.unbindEvent(eventName, callback, options);
```

### addEventListener(evtName, listener, funcName, isPrepend)
이벤트 리스너를 추가함.
```js
component.addEventListener(evtName, listener, funcName, isPrepend);
```

### removeEventListener(evtName, listener)
이벤트 리스너를 제거함.
```js
component.removeEventListener(evtName, listener);
```

### toString()
컴포넌트의 정보를 문자열로 변환하여 반환함.
```js
console.log(component.toString());
```

### isDev()
개발 모드 여부를 반환함.
```js
console.log(component.isDev());
```

### getGroupName()
컴포넌트의 그룹 이름을 반환함.
```js
console.log(component.getGroupName());
```

### setName(name)
HTML name 속성을 설정함.
```js
component.setName(name);
```

### getName()
HTML name 속성을 반환함.
```js
console.log(component.getName());
```

### setComponentId(compId)
컴포넌트의 ID를 설정함.
```js
component.setComponentId(compId);
```

### getComponentId()
편집기에서 지정한 컴포넌트의 ID를 반환함.
```js
console.log(component.getComponentId());
```

### getPrevComp()
이전 형제 컴포넌트를 반환함.
```js
let prev = component.getPrevComp();
console.log(prev);
```

### getNextComp()
다음 형제 컴포넌트를 반환함.
```js
let next = component.getNextComp();
console.log(next);
```

### addClass(className)
jQuery를 이용하여 CSS 클래스를 추가함.
```js
component.addClass(className);
```

### removeClass(className)
jQuery를 이용하여 CSS 클래스를 제거함.
```js
component.removeClass(className);
```


## Static Variables

### focusComp `<AComponent>`
현재 포커스를 받고 있는 컴포넌트임.
```js
console.log(AComponent.focusComp);
```

### VISIBLE `<Number>`
컴포넌트가 화면에 보이는 상태임 (값: 0).
```js
console.log(AComponent.VISIBLE); // 0
```

### INVISIBLE `<Number>`
컴포넌트가 보이지 않으나 공간은 유지됨 (값: 1).
```js
console.log(AComponent.INVISIBLE); // 1
```

### GONE `<Number>`
컴포넌트가 완전히 사라진 상태임 (공간도 없음, 값: 2).
```js
console.log(AComponent.GONE); // 2
```

### MASK `<Array>`
데이터 변환을 위한 유틸리티 함수 배열임 (예: afc.addComma, afc.formatDate 등).
```js
console.log(AComponent.MASK);
```


## Static Methods

### setFocusComp(newComp, noActive)
현재 포커스 컴포넌트를 newComp로 변경
```js
AComponent.setFocusComp(newComp, noActive);
```

### getFocusComp()
 현재 포커스된 컴포넌트를 반환
```js
console.log(AComponent.getFocusComp());
```

### realizeContext(context, container, rootView, parentView, listener)
주어진 context를 기반으로 컴포넌트를 생성 및 초기화하여 반환
```js
let newComp = AComponent.realizeContext(context, container, rootView, parentView, listener);
```