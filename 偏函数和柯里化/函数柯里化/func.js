// 等待我们柯里化实现的方法add
function add(a, b, c, d) {
    return a + b + c + d;
};

function add2(...args) {
    return args.reduce((total, num) => {
        return total + num;
    })
};

module.exports = {
    add,
    add2
}