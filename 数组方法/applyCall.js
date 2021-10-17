Function.prototype.call2 = function (obj) {
    var obj = obj || window;
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    obj.fn = this;
    var result = eval('obj.fn('+args+')');
    delete obj.fn;
    return result;
};

Function.prototype.call2 = function (obj, ...rest) {
    var obj = obj || window;
    let args = rest;
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    obj.fn = this;
    var result = eval('obj.fn('+args+')');
    delete obj.fn;
    return result;
};
