Function.prototype.uncurring = function() {
    const fn = this; // 当前要执行的函数
    return function(obj, ...rest) {
        return fn.apply(obj, rest);
    }
}

const push = Array.prototype.push.uncurring();
const obj = {};
push(obj, 'first', 'second')
console.log(obj);

const arr = {};
Array.prototype.push.apply(arr, ['1', '2']);
console.log(arr);