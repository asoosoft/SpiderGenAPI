# ABuffer( size )

네트워크 통신이나 데이터 처리에서 사용되는 버퍼를 관리하는 역할

**ABuffer**는 **Uint8Array**를 기반으로 하여 바이너리 데이터를 효율적으로 처리할 수 있도록 다양한 메서드를 제공

* **size** : 버퍼의 크기 `<Number>`



## Class Variables

### ABuffer.MAX_INT `<Number>`

MAX_INT 값 상수로 지정 

> 기본값  **Math.pow(2, 53)**
 
 ---


### ABuffer.MASK31 `<Number>`

MASK31 값 상수로 지정 
	
> 기본값 **0x7fffffff**

---


### ABuffer.MASK32 `<Number>`

MASK32 값  상수로 지정 

> 기본값  **0xffffffff**

---


### ABuffer.VAL31 `<Number>`

VAL31 값  상수로 지정 

> 기본값 **0x80000000**

---


### ABuffer.VAL32  `<Number>`
 
VAL32 값  상수로 지정 

> 기본값 **0x100000000**

---

<br>



## Instance Variables

### buf `<UInt8Array>`

Uint8Array 버퍼(byte buffer)

---

### charset `<String>`

String 변환시 적용할 인코딩 값

> 예 ) 'utf-8', 'euc-kr' ...

---

### dataSize `<Number>`

버퍼 사이즈가 아닌 데이터 사이즈를 나타내는 정수

---

### decoder `<Object>`

setCharset 함수에서 생성된 디코딩 객체

---

### emptyChar `<String>`

setString 또는 setOriString 같은 문자열 세팅 함수에서 문자열을 세팅하고 남은 빈자리를 채우는 문자

 > 기본값 **0x20**

---

### emptyNumChar `<String>`

setNumString 또는 setSNumString 같은 숫자 세팅 함수에서 숫자를 세팅하고 남은 빈자리를 채우는 문자

 > 기본값 **0x30**

---

### encoder `<Object>`

setCharset 함수에서 생성된 인코딩 객체

---

### offset `<Number>`

버퍼의 특정 위치를 가리키고 있는 값 add~ 계열 함수에서 참조하여 현재 offset에 값을 세팅

set~ 계열 함수가 호출되면 세팅 된 데이터의 마지막 위치의 다음을 가리킴

---
<br/>



## Instance Methods

### addBinary( size, value )

현재의 offset 부터 size 만큼 문자열 또는 배열의 binary값을 세팅

* **size** `<String>`: 길이
* **value** `<String | Array>`

```js
let buf = new ABuffer(10);
buf.addBinary(3, '123');
buf.addBinary(3, [10, 11, 12]); 
buf.addBinary(3, [0x10, 0x11, 0x12]);
```

---


### addByte( value )

현재의 offset 에 byte value 를 세팅

* **value** `<String>`: 추가할 문자

```js
let buf = new ABuffer(10);
buf.addByte(255);
buf.addByte(0xff);
buf.getByte(0); // 255
```

---

### addChar( value )

현재의 offset 에 char value 를 세팅

하나의 문자열을 넘기면 char code 로 변환하여 세팅

* **value** `<String>`: 문자열

```js
let buf = new ABuffer(10);
buf.addChar('Z');
```

---

### addDWord( value )

현재 offset부터 4 byte 공간에 우측정렬하여 이진수를 세팅

부호가 음수인 경우 2의 보수법으로 처리

* **value** `<String>`: 값

```js
let buf = new ABuffer(10);
buf.addDWord(0xffffffff);
buf.addDWord(-256);
buf.getDWord(0); //4294967295
buf.getInt(4); //-256
```

---

### addNumString( size, value )

현재의 offset 에 숫자를 문자열로 변환하여 세팅

size 를 기준으로 우측정렬하여 문자열을 세팅하고 남은 빈자리는 앞에서부터 0 으로 채움

* **size** `<String>`: 문자열 길이
* **value** `<String>`: 변환할 값

```js
let buf = new ABuffer(10);
buf.addNumString(4, 1234);
buf.addNumString(6, '987654');
```

---

### addOffset( add )

현재의 버퍼 offset 값을 add 만큼 이동

* **add** `<String>`: offset 이동할 값

```js
let buf = new ABuffer(10);
buf.addOffset(3);
buf.addChar('A');  // [0, 0, 0, 65, 0, ... 0]
```

---

### addOriString( size, value )

현재의 offset 에 문자열을 세팅

size 를 기준으로 문자열을 세팅하고 남은 빈자리는 this.emptyChar로 채움

> this.charset 을 세팅했지만 인코딩이 되지 말아야 할 경우 사용

* **size** `<Number>`: 길이
* **value** `<String>`: 값

```js
let buf = new ABuffer(11);
buf.setOriString(0, 1, 'Z');
buf.addOriString(10, 'abcdefghij');
buf.getOriString(0, 1); // 'Z'
buf.nextOriString(10); // 'abcdefghij'
```

---

### addSNumString( size, value )

현재의 offset 에 숫자를 문자열로 변환하여 세팅

부호를 offset 위치에 표현하고 size 를 기준으로 우측정렬하여 문자열을 세팅하고 남은 빈자리는 앞에서부터 this.emptyNumChar 로 채움

* **size** `<Number>`: 길이
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setSNumString(0, 4, -123);
buf.getString(0, 4);
```

---

### addString( size, value )

현재의 offset 에 문자열을 세팅

size 를 기준으로 문자열을 세팅하고 남은 빈자리는 공백으로 채움

>  this.charset 이 세팅되어져 있으면 인코딩 과정을 거친후 세팅

* **size** `<Number>`: size 가 1보다 작으면 value 의 길이만큼 세팅
* **value** `<String>`: 값

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
buf.setOffset(3);
buf.addString(5, '샘플 ');
buf.getString(3, 5, true);
```

---

### addType( size, value )

현재 offset부터 size 만큼 value의 메모리 값을 세팅

부호가 음수인 경우 2의 보수법으로 처리

* **size** `<Number>`: 길이
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.addType(0, 2, 10);
buf.setOffset(0);
buf.nextType(2, true);
```

---

### addWord( value )

현재 offset부터 2 byte 공간에 우측정렬하여 이진수를 세팅

부호가 음수인 경우 2의 보수법으로 처리

* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.addWord(0xffff);
buf.addWord(-0xfff);
buf.getWord(0); //65535
buf.getShort(2); //-4095
```

---

### copyBuffer( fromBuf, offset )

지정한 fromBuf의 데이터를 현재 버퍼(this.buf)의 offset 위치부터 복사 <br>
>이 메서드를 사용하면 기존 데이터를 유지하면서 특정 위치에 새로운 데이터를 덮어쓸 수 있음

* **fromBuf** `<Uint8Array>`: 복사할 데이터가 담긴 Uint8Array 버퍼
* **offset** `<Number>`: 현재 버퍼에서 데이터를 복사할 시작 위치

```js
let buf = new ABuffer(10); 
let copiedBuf = new Uint8Array([1, 2, 3, 4, 5]);
buf.copyBuffer(copiedBuf, 3); // 3번 위치부터 데이터 복사
console.log(buf.getBinary(0, 10)); // [0,0,0,1,2,3,4,5,0,0]
```

---

### EOF()

현재의 offset이 dataSize를 초과했는지 확인하여, <br>
데이터의 끝(End Of File, EOF)에 도달했는지를 반환

* **Returns** `<Boolean>`: true면 더 이상 읽을 데이터가 없음

```js
let buf = new ABuffer(10); 
buf.setDataSize(5); // 5바이트만큼 데이터 있음 
buf.setOffset(4); 
console.log(buf.EOF()); // false (아직 데이터 있음) 
buf.setOffset(5); 
console.log(buf.EOF()); // true (데이터 끝 도달)
```

---

### fillBuffer( value, size )

value의 값을 처음부터 size 만큼 버퍼에 채움 

size 값이 생략되면 마지막까지 채움

* **value** `<String>`: 값
* **size** `<String>`: 길이

```js
let buf = new ABuffer(10);
buf.fillBuffer(0x20);
buf.fillBuffer(0x30, 5);
```

---

### getBinary( offset, size )

버퍼의 특정 offset 부터 size 만큼의 binary값을 배열로 반환

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이


* **Returns** `<Array>`

```js
let buf = new ABuffer(10);
buf.addBinary(10, '0123456789');
buf.getBinary(3, 5); // [3,4,5,6,7]
```

---

### getBuffer()

생성된 버퍼의 객체를 넘겨줌

* **Returns** `<Uint8Array>`

```js
let buf = new ABuffer(10);
buf.getBuffer();
```

---

### getBufSize()

생성된 버퍼의 사이즈를 리턴

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
let bufSize = buf.getBufSize(); //10
```

---

### getByte( offset )

버퍼의 특정 offset 으로부터 byte value 를 얻어옴

* **offset** `<Number>`: 위치

* **Returns** `<Byte>`

```js
let buf = new ABuffer(10);
buf.setByte(0, 255);
buf.getByte(0); // 255
```

---

### getCharset()

String 변환시 적용할 인코딩 값을 얻음
> 예 ) 'utf-8', 'euc-kr' ...

* **Returns** `<String>`

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
let charset = buf.getCharset();
```

---

### getDataSize()

버퍼 사이즈가 아닌 데이터 사이즈를 반환

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.setDataSize(8);
let dataSize = buf.getDataSize(); //8
```

---

### getDWord( offset )

버퍼의 특정 offset 부터 4 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴 

> 부호는 없다고 판단

* **offset** `<Number>`: 위치

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addDWord(0xffffffff);
buf.getDWord(0); //4294967295
```

---

### getInt( offset )

버퍼의 특정 offset 부터 4 byte 만큼을 정수로 변환하여 리턴

* **offset** `<Number>`: 위치

* **Returns** `<Integer>`

```js
let buf = new ABuffer(10);
buf.addDWord(0xffffffff);
buf.addDWord(-256);
buf.getDWord(0);
buf.getInt(4);
```

---

### getIpString( offset )

버퍼의 offset 위치에서 12바이트를 읽어 IPv4 주소 형식(xxx.xxx.xxx.xxx)의 문자열로 변환

* **offset** `<Number>`: 데이터가 위치한 시작 오프셋

* **Returns** `<String>`: 변환된 IPv4 주소 문자열

```js
let buf = new ABuffer(12); 
buf.addOriString(12, '192168001001'); // "192.168.001.001" 형태로 저장 
console.log(buf.getIpString(0)); // "192.168.1.1"
```

---

### getOffset()

현재의 버퍼 offset 값을 리턴

> this.offset 참조

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.setOffset(4);
let ofs= buf.getOffset(); //4
```

---

### getOriString( offset, size, noTrim )

버퍼의 특정 offset 부터 size 만큼의 문자열을 얻어옴 

noTrim 값에 따라 앞뒤 공백이 trim 처리되거나 처리되지 않고 리턴

> this.charset 을 셋팅했지만 디코딩이 되지 말아야 할 경우 사용 

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **noTrim** `<Boolean>`: trim 여부

* **Returns** `<String>`

```js
let buf = new ABuffer(11);
buf.setOriString(0, 1, 'Z');
buf.addOriString(10, 'abcdefghij');
buf.getOriString(0, 1); // 'Z'
buf.nextOriString(10); // 'abcdefghij'
```

---

### getParseFloat( offset, size )

버퍼의 특정 offset 부터 size 만큼의 문자열을 읽어 부동소수점 숫자로 변환하여 리턴

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이

* **Returns** `<Float>`

```js
let buf = new ABuffer(10);
buf.setSNumString(0, 10, -123.1);
buf.getParseFloat(0, 10); // -123.1
buf.getString(0, 10); // -0000123.1
```

---

### getParseInt( offset, size )

버퍼의 특정 offset부터 size 만큼의 문자열을 읽어 정수로 변환하여 리턴

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이

* **Returns** `<Int>`

```js
let buf = new ABuffer(10);
buf.setSNumString(0, 10, -123.1);
buf.getParseInt(0, 10); // -123
buf.getString(0, 10); // -0000123.1
```

---

### getShort( offset )

버퍼의 특정 offset 부터 2 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴 

최상위 비트를 부호 비트라고 판단

* **offset** `<Number>`: 위치

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addWord(-0xfff);
buf.getShort(0); //-4095
```

---

### getString( offset, size, noTrim )

버퍼의 특정 offset 부터 size 만큼의 문자열을 얻어옴 

noTrim 값에 따라 앞뒤 공백이 trim 처리되거나 처리되지 않고 리턴

> this.charset 이 셋팅되어져 있으면 디코딩 과정을 거친후 리턴

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **noTrim** `<Boolean>`: trim  여부

* **Returns** `<String>`

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
buf.setString(0, 5, '샘플 ');
buf.getString(0, 5, true);
```

---

### getStringTo( offset, endValue )

버퍼의 특정 offset 부터 endValue 가 있는 곳까지의 문자열을 얻어옴

> this.charset 이 셋팅되어져 있으면 디코딩 과정을 거친후 리턴

* **offset** `<Number>`: 위치
* **endValue** `<Number>`: Byte

```js
let buf = new ABuffer(10);
buf.setString(0, 5, 'abcd$efgh$');
buf.getStringTo(0, '$'.charCodeAt(0)); // abcd
```

---

### getType( offset, size, unsigned )

버퍼의 특정 offset 부터 size 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴

signed 인 경우 2의보수 처리

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **unsigned** `<Boolean>`: 부호여부

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.setType(0, 2, 10);
buf.getType(0, 2);
```

---

### getWord( offset )

버퍼의 특정 offset부터 2 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴 

> 부호는 없다고 판단

* **offset** `<Number>`: 위치

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addWord(0xffff);
buf.addWord(-0xfff);
buf.getWord(0); //4294967295
buf.getShort(2); //-4095
```

---

### nextBinary( size )

현재의 offset부터 size 만큼의 binary값을 배열로 반환

* **size** `<Number>`: 길이

* **Returns** `<Array>`

```js
let buf = new ABuffer(10);
buf.addBinary(10, '0123456789');
buf.setOffset(0);
buf.nextBinary(5); // [3,4,5,6,7]
```

---

### nextByte()

현재의 offset으로부터 byte value 를 얻어옴

* **Returns** `<Byte>`

```js
let buf = new ABuffer(10);
buf.setByte(1, 255);
buf.setOffset(1);
buf.nextByte(); // 255
```

---

### nextDWord()

현재의 offset부터 2 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴

> 부호는 없다고 판단

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addDWord(0xffffffff);
buf.setOffset(0);
buf.nextDWord(); //4294967295
```

---

### nextInt( size )

현재의 offset부터 4 byte 만큼을 정수로 변환하여 리턴

* **size** `<Number>`: 길이

* **Returns** `<Integer>`

```js
let buf = new ABuffer(10);
buf.addDWord(-256);
buf.setOffset(0);
buf.nextInt();
```

---

### nextIpString()

현재의 offset부터 12자리만큼을 IPv4 주소형태의 문자열로 변환하여 반환

> 예 ) "127.0.0.1"

* **Returns** `<String>`

```js
let buf = new ABuffer(12);
buf.addOriString(12, '127001010100');
buf.setOffset(0);
buf.nextIpString();
```

---

### nextOriString( size, noTrim )

현재의 offset부터 size 만큼의 문자열을 얻어옴  

noTrim값에 따라 앞뒤 공백이 trim 처리되거나 처리되지 않고 리턴

> this.charset 을 세팅했지만 디코딩이 되지 말아야 할 경우 사용

* **size** `<Number>`: 길이
* **noTrim** `<Boolean>`: trim 여부

* **Returns** `<String>`

```js
let buf = new ABuffer(11);
buf.setOriString(0, 1, 'Z');
buf.addOriString(10, 'abcdefghij');
buf.getOriString(0, 1); // 'Z'
buf.nextOriString(10); // 'abcdefghij'
```

---

### nextParseFloat( size )

현재의 offset부터 size 만큼의 문자열을 읽어 부동소수점 숫자로 변환하여 리턴

* **size** `<Number>`: 길이

* **Returns** `<Float>`

```js
let buf = new ABuffer(10);
buf.setSNumString(0, 10, -123.1);
buf.setOffset(0);
buf.nextParseFloat(10); // -123.1
buf.getString(0, 10); // -0000123.1
```

---

### nextParseInt( size )

현재의 offset부터 size 만큼의 문자열을 읽어 정수로 변환하여 리턴

* **size** `<Number>`: 길이

* **Returns** `<Int>`

```js
let buf = new ABuffer(10);
buf.setSNumString(0, 10, -123.1);
buf.setOffset(0);
buf.nextParseInt(10); // -123
buf.getString(0, 10); // -0000123.1
```

---

### nextShort()

현재 offset부터 2 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴

> 최상위 비트를 부호 비트라고 판단

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addWord(-0xfff);
buf.setOffset(0);
buf.nextShort(); //-4095
```

---

### nextString( size, noTrim )

현재의 offset부터 size 만큼의 문자열을 얻어옴  

noTrim값에 따라 앞뒤 공백이 trim 처리되거나 처리되지 않고 리턴

> this.charset 이 세팅되어져 있으면 디코딩 과정을 거친후 리턴

* **size** `<Number>`: 길이
* **noTrim** `<Boolean>`: trim 여부

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
buf.setString(0, 5, '샘플 ');
buf.setOffset(0);
buf.nextString(5, true);
```

---

### nextStringTo( endValue )

현재의 offset부터 endValue가 있는 곳까지의 문자열을 얻어옴

> this.charset 이 세팅되어져 있으면 디코딩 과정을 거친후 리턴

* **endValue** `<Number>`: Byte

```js
let buf = new ABuffer(10);
buf.setString(0, 5, 'abcd$efgh$');
buf.getStringTo(0, '$'.charCodeAt(0)); // abcd
buf.nextStringTo('$'.charCodeAt(0)); // efgh
```

---

### nextType( size, unsigned )

현재 offset부터 size 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴

> signed 인 경우 2의보수 처리

* **size** `<Number>`: 길이
* **unsigned** `<Boolean>`: 부호여부

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addType(0, 2, 10);
buf.setOffset(0);
buf.nextType(2, true);
```

---

### nextWord()

현재 offset부터 2 byte 만큼의 바이너리 이진수를 Number타입 숫자로 변환하여 리턴

> 부호는 없다고 판단

* **Returns** `<Number>`

```js
let buf = new ABuffer(10);
buf.addWord(0xffff);
buf.setOffset(0);
buf.nextWord(0); //65535
```
---

### printBuffer( inx, size, radix )

버퍼의 특정 위치부터 size만큼 문자열로 만들어 브라우저의 디버깅 콘솔에 표현하고, 문자열을 반환

radix가 있는 경우 값을 진수 값으로 표현

> 예 ) 15인 경우 2인 경우 1111, 8인 경우 17, 16인 경우 f로 표현

* **inx** `<String>`: 시작 위치
* **size** `<Number>`: 길이
* **radix** `<String>`: 옵션. 숫자를 나타내는데 사용할 진수. 2와 36사이의 정수여야함

* **Returns** `<String>`

```js
let buf = new ABuffer(10);
buf.printBuffer(0, buf.getBufSize(), 10);
buf.printBuffer(5, 10, 16);
```

---

### printBySize( sizeInfo, offset, radix )

offset 위치에서부터 사이즈 정보 배열(예. [ 5, 10, 2, 3, 10 ... ] ) 에 들어있는 항목의 크기만큼씩 문자열로 만들어 브라우저의 디버깅 콘솔에 표현하고, 문자열을 반환

radix가 있는 경우 값을 진수값으로 표현

> 예 ) 15인 경우 2인 경우 1111, 8인 경우 17, 16인 경우 f로 표현

* **sizeInfo** `<Array>`: 사이즈 정보 배열
* **offset** `<Number>`: 시작 위치
* **radix** `<Number>`: 옵션. 숫자를 나타내는데 사용할 진수

	> 2와 36사이의 정수여야함

* **Returns** `<String>`

```js
let buf =  new ABuffer(10);
buf.setBinary(0, 10, '0123456789');
buf.printBySize([1,2,3], 4, 16);
```

---

### setBinary( offset, size, value )

버퍼의 특정 offset부터 size 만큼 문자열 또는 배열의 binary값을 세팅

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **value** `<String | Array>`

```js
let buf =  new ABuffer(10);
buf.setBinary(3, 3, [1,2,3]); // buf.setBinary(3, 3, '123');
buf.getBinary(3, 3);
```

---

### setBuffer( buf )

직접 생성한 Uint8Array 버퍼 객체를 세팅

* **buf** `<Array>`: Uint8Array

```js
let buf =  new ABuffer(10);
let uarr = new Uint8Array([48, 96, 144, 192, 240]);
buf.setBuffer(uarr);
buf.printBuffer(0, null, 16); //"30 60 90 c0 f0 "
```

---

### setBufferByString( str )

문자열을 현재 버퍼(this.buf)에 인코딩하여 저장 <br>
>이 함수는 setCharset()이 설정되어 있어야 정상적으로 동작<br>
> ⚠️ setCharset()이 호출되지 않으면 인코딩 오류가 발생할 수 있음


* **str** `<String>`: 버퍼에 저장할 문자열

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
let str = '0123456789가나다라마바사';
buf.setBufferByString(str);
buf.getString(0, 24); // 10+(7*2) 숫자:1byte, 한글:2byte
```

---

### setByte( offset, value )

버퍼의 특정 offset 에 byte value 를 세팅

* **offset** `<Number>`: 위치
* **value** `<All>`: Byte

```js
let buf = new ABuffer(10);
buf.setByte(8, 0xff);
buf.getByte(8);
```

---

### setChar( offset, value )

버퍼의 특정 offset 에 char value 를 세팅

하나의 문자열을 넘기면 char code 로 변환하여 세팅

* **offset** `<Number>`: 위치
* **value** `<String>`: 값

```js
let buf = new ABuffer(10);
buf.setChar(9, 'Z');
buf.getString(9, 1);
```

---

### setCharset( charset )

String 변환시 적용할 인코딩 값을 세팅

> 'utf-8', 'euc-kr' ...

* **charset** `<String>`: 'utf-8', 'euc-kr' ...

```js
let  buf = new ABuffer(10);
buf.setCharset('euc-kr');
```

---

### setDataSize( size )

버퍼 사이즈가 아닌 데이터 사이즈를 세팅

* **size** `<Number>`: 데이터 사이즈

```js
let buf = new ABuffer(10);
buf.setDataSize(8);
```

---

### setDWord( offset, value )

버퍼의 특정 offset부터 4 byte 공간에 value의 메모리값을 세팅

> 부호가 음수인 경우 2의 보수법으로 처리

* **offset** `<Number>`: 위치
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setDWord(1, 0xffffffff);
buf.getDWord(1); //4294967295
```

---

### setEmptyChar( emptyChar )

문자열 세팅 함수에서 빈자리를 채우는 문자를 지정

* **emptyChar** `<String>`: 1 byte 문자

```js
let buf = new ABuffer(10);
buf.setEmptyChar(0x20);
```

---

### setEmptyNumChar( emptyNumChar )

숫자 세팅 함수에서 빈자리를 채우는 문자를 지정

* **emptyNumChar** `<String>`: 1 byte 문자

```js
let buf = new ABuffer(10);
buf.setEmptyNumChar(0x30);
```

---

### setNumString( offset, size, value )

버퍼의 특정 offset 에 숫자를 문자열로 변환하여 세팅

size 를 기준으로 우측정렬하여 문자열을 세팅하고 남은 빈자리는 앞에서부터 this.emptyNumChar 로 채움

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setNumString(2,5, 123);
buf.getString(2, 5); // '00123'
```

---

### setOffset( offset )

현재 ABuffer 내부의 데이터 읽기/쓰기 위치(offset)를 설정<br> 
이 값은 addByte(), getByte() 같은 메서드에서 참조

* **offset** `<Number>`: 설정할 위치 (0부터 시작)

```js
let buf = new ABuffer(10); 
buf.setOffset(2); 
buf.addByte(65); // ASCII 'A' (0x41) 저장 
buf.setOffset(2); 
console.log(buf.getByte(2)); // 65 (A)
```

---

### setOriString( offset, size, value )

버퍼의 특정 offset 에 문자열을 세팅

size 를 기준으로 문자열을 세팅하고 남은 빈자리는 this.emptyChar로 채움 

> this.charset 을 세팅했지만 인코딩이 되지 말아야 할 경우 사용

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **value** `<String>`: 값

```js
let buf = new ABuffer(11);
buf.setOriString(0, 1, 'Z');
buf.addOriString(10, 'abcdefghij');
buf.getOriString(0, 1); // 'Z'
buf.nextOriString(10); // 'abcdefghij'
```

---

### setSNumString( offset, size, value )

버퍼의 특정 offset 에 숫자를 문자열로 변환하여 세팅

부호를 offset 위치에  표현하고 size 를 기준으로 우측정렬하여 문자열을 세팅하고 남은 빈자리는 앞에서부터 this.emptyNumChar 로 채움

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setSNumString(2, 4, -123);
buf.getString(2, 4); // '-123'
```

---

### setString( offset, size, value )

버퍼의 특정 offset 에 문자열을 세팅

size 를 기준으로 문자열을 세팅하고 남은 빈자리는 this.emptyChar로 채움 

> this.charset 이 세팅되어져 있으면 인코딩 과정을 거친후 세팅

* **offset** `<Number>`: 위치
* **size** `<Number>`: size 가 1보다 작으면 value 의 길이만큼 세팅
* **value** `<String>`: 값

```js
let buf = new ABuffer(10);
buf.setCharset('euc-kr');
buf.setString(0, 4, '샘플');
buf.getString(0, 4);
```

---

### setType( offset, size, value )

버퍼의 특정 offset부터 size 만큼 value의 메모리 값을 세팅

> 부호가 음수인 경우 2의 보수법으로 처리

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setType(0, 2, 10);
buf.getType(0, 2);
```

---

### setWord( offset, value )

버퍼의 특정 offset부터 2 byte 공간에 value의 메모리 값을 세팅

> 부호가 음수인 경우 2의 보수법으로 처리

* **offset** `<Number>`: 위치
* **value** `<String | Number>`: 값

```js
let buf = new ABuffer(10);
buf.setWord(2, 0xffff);
buf.getWord(2); // 65535
```

---

### subArray( start, end )

this.buf[start] ~ this.buf[end-1] 까지를 포함한 버퍼 참조자를 리턴

리턴된 버퍼객체는 인덱스를 0부터 접근하지만 참조자가 리턴되므로 버퍼 원본을 바라보고 있음

* **start** `<String>`: 시작위치
* **end** `<String>`: 종료위치

* **Returns** `<Uint8Array>`


```js
let buf = new ABuffer(10);
buf.addBinary(10, [0,1,2,3,4,5,6,7,8,9]);
buf.subArray(3, 6); // [3, 4, 5]
```

---

### subDataArray()

this.buf[0] ~ this.buf[this.dataSize] 까지를 포함한 버퍼 참조자를 리턴 

리턴된 버퍼객체는 인덱스를 0부터 접근하지만 참조자가 리턴되므로 버퍼 원본을 바라보고 있음

* **Returns** `<Uint8Array>`: this.buf 참조배열

---

### getBase64String( offset, size )

offset부터 size 만큼의 Uint8Array 를 base64 encoding 한 값을 얻음.

* **offset** `<Number>`: 위치
* **size** `<Number>`: 길이

---
<br/>