// 类型检测函数，接收两个参数，第 1 个表示类型字符串，第 2 个表示检测的数据。
var isType = function(type, obj) { //偏函数
        return Object.prototype.toString.call(obj) == '[object ' + type + ']';
    }
    // 函数包含两个设置参数，使用时比较繁琐。一般常按以下方式进行设计。
    // var isString = function (obj) {
    //     return Object.prototype.toString.call(obj) == '[object  String]';
    // };
    // var isFunction = function (obj) {
    //     return Object.prototype.toString.call(obj) == '[object  Function]';
    // };

// 函数接收的参数单一，检测的功能也单一和明确，这样更便于在表达式运算中有针对性的调用。下面对 isType() 函数进行扁平化设计，代码如下：
var isType = function(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) == '[object ' + type + ']';
    }
}

// 然后根据 JS 偏函数获取不同类型检测函数。
var isString = isType("String"); //专一功能检测函数，检测字符串
var isFunction = isType("Function"); //专一功能检测函数，检测字符串

console.log(isString("12")); //true
console.log(isFunction(function() {})); //true
console.log(isFunction({})); //false