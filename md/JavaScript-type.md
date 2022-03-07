## JavaScript判断数据类型

### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>typeof</span>

> <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>typeof</span> 基本只能判断出基本数据类型，引用类型除了`` `function` ``外，都是 ```object```

```JavaScript
const typeOf = () => {
    // 进本类型
    console.log(typeof(1)); //number
    console.log(typeof('1')); //string
    console.log(typeof(null)); //object
    console.log(typeof(false)); //boolean
    console.log(typeof(undefined)); //undefined
    console.log(typeof(Symbol())); //symbol
    console.log(typeof(NaN)); //number
    // 引用类型
    console.log(typeof {}); //object
    console.log(typeof []); //object
    console.log(typeof Error('1')); //object
    function A() {}
    console.log(typeof A); //function
}
typeOf()
```

### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>instanceof</span>

> <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>instanceof</span> 返回是```true```或```false```，只能对引用数据类型进行判断

```JavaScript
const instanceOf = () => {
    // 基本类型
    console.log(1 instanceof Number); //false
    console.log("1"
        instanceof String); //false
    console.log(true instanceof Boolean); //false
    console.log(null instanceof Object); //false
    console.log(undefined instanceof Object); //false
    console.log(Symbol() instanceof Symbol); //false
    // 引用类型
    console.log({}
        instanceof Object); //true
    console.log([] instanceof Array); //true
    console.log(Error('1') instanceof Error); //true
    function A() {}
    console.log(A instanceof Function); //true
}
instanceOf()
```

### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>Object.prototype.toString.call()</span>

> <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>Object.prototype.toString.call()</span> 返回是一个```[object xxx]```的字符串，可以通过```slice(8, -1)```的方式来获取完整的数据类型。

``` JavaScript
const stringCall = () => {
    // 基本类型
    console.log(Object.prototype.toString.call(1)); //[object Number]
    console.log(Object.prototype.toString.call(1).slice(8, -1)) //Number
    console.log(Object.prototype.toString.call('1').slice(8, -1)) //String
    console.log(Object.prototype.toString.call(true).slice(8, -1)) //Boolean
    console.log(Object.prototype.toString.call(null).slice(8, -1)) //Null
    console.log(Object.prototype.toString.call(undefined).slice(8, -1)) //Undefined
    console.log(Object.prototype.toString.call(NaN).slice(8, -1)) //Number
    console.log(Object.prototype.toString.call(Symbol()).slice(8, -1)) //Symbol
    // 引用数据类型
    console.log(Object.prototype.toString.call({}).slice(8, -1)) //Object
    console.log(Object.prototype.toString.call([]).slice(8, -1)) //Array
    console.log(Object.prototype.toString.call(Error('1')).slice(8, -1)) //Error
    function A() {}
    console.log(Object.prototype.toString.call(A).slice(8, -1)) //Function
}
stringCall()
```

### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>constructor.name</span>

> 即可以判断基本数据类型，也可以判断引用数据类型，由于```null```和```undefined```没有```constructor```，所以判断不了，同时由于```constructor```可以改变，所以此方法如果改写了```constructor```，就不准确了。

```JavaScript
const constructorName = () => {
    // 基本数据类型
    console.log((1).constructor.name); //Number
    console.log('1'.constructor.name); //String
    // console.log((null).constructor.name); //报错 Cannot read properties of null (reading 'constructor')
    // console.log((undefined).constructor.name); //报错 Cannot read properties of undefined (reading 'constructor')
    console.log((true).constructor.name); //Boolean
    console.log((NaN).constructor.name); //Number
    console.log((Symbol()).constructor.name); //Symbol
    // 引用数据类型
    console.log(({}).constructor.name); //Object
    console.log(([]).constructor.name); //Array
    console.log((Error('1')).constructor.name); //Error
    function A() {}
    console.log((A).constructor.name); //Function
}
constructorName()
```

### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>constructor.toString().indexOf()</span>
> 可以判断基本数据类型，也可以判断引用数据类型，由于```null```和```undefined```没有```constructor```，所以判断不了。因为<span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>constructor.toString().indexOf()</span>也是用到了```constructor```，所以如果该写了```constructor```后，就不准确了。

``` JavaScript
const toStringIndexOf = () => {
    // 基本数据类型
    console.log((1).constructor.toString()); //function Number() { [native code] }
    console.log((1).constructor.toString().indexOf('Number') > -1) //true
    console.log(('1').constructor.toString().indexOf('String') > -1) //true
    // console.log((null).constructor.toString().indexOf('Null') > -1) //报错，Cannot read properties of null (reading 'constructor')
    // console.log((undefined).constructor.toString().indexOf('Undefined') > -1) //报错， Cannot read properties of undefined (reading 'constructor') 
    console.log((Symbol()).constructor.toString().indexOf('Symbol') > -1) //true
    console.log((true).constructor.toString().indexOf('Boolean') > -1) //true
    console.log((NaN).constructor.toString().indexOf('Number') > -1) //true
    // 引用数据类型
    console.log(({}).constructor.toString().indexOf('Object') > -1) //true
    console.log(([]).constructor.toString().indexOf('Array') > -1) //true
    console.log((Error('1')).constructor.toString().indexOf('Error') > -1) //true
    function A() {}
    console.log((A).constructor.toString().indexOf('Function') > -1) //true
}
toStringIndexOf()
```
 
### <span style='color:#4dd0e1; font-weight:700; padding:0px 5px'>改写```constructor```:</span>

``` JavaScript
const num = new Number(1)
console.log((num).constructor.name); //Number
console.log((num).constructor.toString().indexOf('Number') > -1) //true
function A() {}
num.constructor = A
console.log((A).constructor.name); //Function
console.log((A).constructor.toString().indexOf('Function') > -1) //true
```



