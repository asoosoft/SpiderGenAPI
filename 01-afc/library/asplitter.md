# ASplitter( listener, barSize )  
  
* **listener** 분할 이벤트 받을 리스너 객체  
* **barSize** `<Number>` 바사이즈   

엘리먼트의 영역을 분할하는 클래스  
  
  
## Static Variables  
  
### ASplitter.BAR_COLOR  `<String>`  
  
분할 프레임 사이의 스플릿바 색상  
  
* **Default** #bbb  
  
### ASplitter.BAR_SIZE `<Number>`  
  
분할 프레임 사이의 스플릿바 크기  
  
* **Default** 5  
 
  
## Instance Variables  
  
### splitDir `<String>`  
  
분할 방향 ["column" 상하 | "row" 좌우]  
 
  
### targetEle `<HTMLElement>`  
  
분할되는 엘리먼트  
  
  
### $target `<jQuery Object>`  
  
분할되는 jQuery 객체  
 
  
### listener `<Object>`  
  
분할 이벤트 받을 객체  
<br/>분할 변경되었을 때 호출되는 이벤트 **listener.onSplitChanged(frameElement)**  
  
### barSize `<Number>`  
  
스플릿바의 크기  
  
* **Default** ASplitter.BAR_SIZE  
  
  
### isStatic `<Boolean>`  
  
스플릿 컨테이너의 position 을 static 으로 세팅할 지 createSplit 호출 시 sizeArr 사이즈 정보 배열을 넘기면 absolute 로 설정되고 -1 을 넘기면 static 으로 설정.  
  
  
### isSizeToRatio `<Boolean>`  
  
분할 프레임의 크기를 비율로 변경할지 여부  
  
  
## Instance Methods  
  
### setOption( option, noOverwrite )  
  
option 객체의 정보를 저장.  
<br/>noOverwrite 가 true 이면, 기존의 값이 존재할 경우 덮어쓰지 않음.  
  
* **option** `<Object>` 옵션 객체  
* **noOverwrite** `<Boolean>` 덮어쓰기 유무  

```js
let splitter = new ASplitter(listener, 5);
splitter.setOption({ barSize: 8, isStatic: false });
```
  
### enableSizeToRatio( enable )  
  
분할된 영역의 사이즈를 비율로 변경할지 여부를 지정.  
  
* **enable** `<Boolean>` 비율 여부  

```js
splitter.enableSizeToRatio(true);
```
  
### createSplit( targetEle, count, sizeArr, splitDir )  
  
타겟 엘리먼트 영역 내부를 분할.

* **targetEle** `<HTMLElement>` 분할될 엘리먼트  
* **count** `<Number>` 분할 개수  
* **sizeArr** `<Array>` 영역별 분할 크기 배열  
* **splitDir** `<String>` 분할 방향 column 상하 / row 좌우  
  
```js  
let splitter = new ASplitter(this, 10);  
splitter.createSplit(view.element, 3, -1, 'column');  
```  
 
  
### insertSplit( inx, splitSize, isAfter )  
  
타겟 엘리먼트를 추가로 분할.  
  
* **inx** `<Number>` 분할 위치. -1 인 경우는 마지막 인덱스를 의미  
* **splitSize** `<Array>` 분할 크기. 음수면 자동 계산됨  
* **isAfter** `<Boolean>` 앞 또는 뒤에 삽입여부  
* **Returns** `<HTMLElement>` 마지막 추가된 실제 프레임 엘리먼트 리턴

```js
splitter.insertSplit(1, 150, true); // 두 번째 위치에 150px 크기의 영역 삽입
```  
  
### prependSplit( splitSize )  
  
가장 앞부분에 분할영역을 추가.  
  
* **splitSize** `<Array>` 분할 크기. 음수면 자동 계산됨  
* **Returns** `<HTMLElement>` 추가된 실제 프레임 엘리먼트 리턴  

```js
splitter.prependSplit(200);
```
  
### appendSplit( splitSize )  
  
가장 뒷부분에 분할영역을 추가.  
  
* **splitSize** `<Array>` 분할 크기. 음수면 자동 계산됨  
* **Returns** `<HTMLElement>` 추가된 실제 프레임 엘리먼트 리턴  

```js
splitter.appendSplit(250);
```
  
### removeSplit( inx, beforeRemove )  
  
분할영역을 제거.  
  
* **inx** `<Number>` 제거할 분할영역 위치  
* **beforeRemove** `<Function>` 제거하기전에 호출될 함수  
  
```js  
splitter.removeSplit(0, function(frameElement) {
    console.log("Removing frame:", frameElement);
});
```  
  
### enableSplitBar( inx, enable )  
  
스플릿바의 사용가능 여부 지정  
  
* **inx** `<Number>` 스플릿바 위치  
* **enable** `<Boolean>` 사용가능 여부  

```js
splitter.enableSplitBar(1, false); // 두 번째 스플릿바 비활성화
```
  
### setSplitSize( inx, splitSize )  
  
특정 위치의 분할영역의 크기를 변경.  
  
* **inx** `<Number>` 스플릿바 위치  
* **splitSize** `<Number>` 분할 크기  

```js
splitter.setSplitSize(2, 300); // 세 번째 분할영역을 300px로 변경
```
  
### getSplitSize( inx )  
  
특정 위치의 분할 프레임의 크기를 가져옴.  
  
* **inx** `<Number>` 스플릿바 위치  
* **Returns** `<Number>` 분할 크기  

```js
let size = splitter.getSplitSize(1);
console.log(size); // 예: 200
```
  
### getSplit( inx )  
  
특정 위치의 분할 프레임을 가져옴.  
  
* **inx** `<Number>` 스플릿 위치  
* **Returns** `<HTMLElement>` 프레임 엘리먼트  

```js
let frame = splitter.getSplit(0);
console.log(frame); // 분할된 첫 번째 프레임 엘리먼트
```
  
### getSplitBar( inx )  
  
특정 위치의 스플릿바를 가져옴.  
  
* **inx** `<Number>` 위치  
* **Returns** `<HTMLElement>` 스플릿바 엘리먼트  

```js
let splitBar = splitter.getSplitBar(1);
console.log(splitBar); // 두 번째 스플릿 바
```
  
### getSplitCount()  
  
분할 된 개수를 가져옴.  
  
* **Returns** `<Number>` 분할된 개수  

```js
let count = splitter.getSplitCount();
console.log(count); // 예: 3
```
  
### getBarCount()  
  
스플릿바의 개수를 가져옴. (분할영역 개수 - 1)  
  
* **Returns** `<Number>` 스플릿바 개수  

```js
let barCount = splitter.getBarCount();
console.log(barCount); // 예: 2 (분할 개수 - 1)
```
  
### removeAllSplit()  
  
분할을 위해 추가된 모든 엘리먼트를 제거함.  
  
### sizeToRatio()  
  
분할된 모든 프레임의 크기를 비율로 변경함.  
    
### updateSize( isRemove )  
  
현재 세팅되어져 있는 사이즈 정보를 분할된 모든 프레임에 다시 적용함.  
  
* **isRemove** `<Boolean>` 분할영역 제거 여부  