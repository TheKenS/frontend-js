let str = "Banana";
// console.log(str.splice(-1, 0, '--')); // 数组没有splice 方法
console.log(str.slice(0, 2)); // slice 可以用
console.log(str.slice(0, 2) + '-' + str.slice(2));