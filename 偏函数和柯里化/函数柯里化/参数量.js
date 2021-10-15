// 公式类型一: 参数数量满足函数参数要求，触发执行
// fn(a,b,c,d) => fn(a)(b)(c)(d);

const { add } = require('./func.js')

const createCurry = (fn, ...args) => {
    let _args = args || [];
    let length = fn.length; // fn.length代码函数参数数量

    return (...rest) => {
        // 深拷贝闭包共用对象_args，避免后续操作影响（引用类型）
        // let _allArgs = _args.slice(0);
        // _allArgs.push(...rest);
        let _allArgs = [..._args, ...rest];
        if (_allArgs.length < length) {
            // 参数数量不满足原始函数数量，返回curry函数
            return createCurry.call(this, fn, ..._allArgs);
        } else {
            // 参数数量满足原始函数数量，触发执行
            return fn.apply(this, _allArgs);
        }
    }
}

const curryAdd = createCurry(add, 2);
let sum = curryAdd(3)(4)(5); // 14
console.log(sum);

// ES5写法
function createCurry2() {
    var fn = arguments[0];
    var _args = [].slice.call(arguments, 1);
    var length = fn.length;

    return function() {
        var _allArgs = _args.slice(0);
        _allArgs = _allArgs.concat([].slice.call(arguments));
        if (_allArgs.length < length) {
            _allArgs.unshift(fn);
            return createCurry.apply(this, _allArgs);
        } else {
            return fn.apply(this, _allArgs);
        }
    }
}