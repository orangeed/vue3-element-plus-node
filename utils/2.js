const typeOf = () => {
    // 基本类型
    console.log(typeof (1)); //number
    console.log(typeof ('1')); //string
    console.log(typeof (null)); //object
    console.log(typeof (false)); //boolean
    console.log(typeof (undefined)); //undefined
    console.log(typeof (Symbol())); //symbol
    console.log(typeof (NaN)); //number
    // 引用类型
    console.log(typeof {}); //object
    console.log(typeof []); //object
    console.log(typeof Error('1')); //object
    function A() {}
    console.log(typeof A); //function
}
// typeOf()

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
// instanceOf()
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
// stringCall()

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
// constructorName()

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
    const num = new Number(1)
    console.log((num).constructor.name); //Number
    console.log((num).constructor.toString().indexOf('Number') > -1) //true
    num.constructor = A
    console.log((A).constructor.name); //Function
    console.log((A).constructor.toString().indexOf('Function') > -1) //true
}
toStringIndexOf()