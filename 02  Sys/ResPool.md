# **ResPool**
> **Extends** Object

**ResPool** 클래스는 AView 객체를 캐시하여 재사용하는 기능을 제공하는 클래스.  

리소스를 효율적으로 관리하고, 여러 곳에서 동일한 뷰를 다시 사용할 수 있도록 함.


## Instance Variables

### viewPool ` <Object>`

각 AView 객체를 URL 기준으로 저장하는 **캐시 배열**  
- **Key**: `url` (AView의 리소스 URL)
- **Value**: AView 객체 리스트 (`Array<AView>`)

```js
console.log(resPool.viewPool);
```



### areaPool  `<Object>`
AView 객체를 숨겨서 보관하는 **비가시적 컨테이너**  
- **Key**: `url`
- **Value**: 해당 AView 객체의 `element`를 담는 `div` 요소

```js
console.log(resPool.areaPool);
```



## Instance Methods

### pushView( aview )
AView 객체를 **캐시에 저장**하는 메서드

- **aview** `<AView>` 저장할 AView 객체

```js
let myView = { url: 'sampleView.lay', element: $('<div></div>') };
resPool.pushView(myView);
```



### popView( url )
AView 객체를 **캐시에서 꺼내어 반환**하는 메서드

- **url** `<String>` 가져올 AView의 리소스 URL
- **Returns** `<AView or null>`

```js
let view = resPool.popView('sampleView.lay');
if (view) {
	console.log("재사용 가능한 뷰 있음");
} else {
	console.log("새로운 뷰를 생성해야 함");
}
```



