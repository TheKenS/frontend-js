Function.prototype.myBind = function(obj, ...rest) {
    const self = this;
    
    return function () {
        return self.apply(obj, rest);
    }
}

obj = {
    a: 1
}

function say(a, b, c) {
    console.log(this)
    console.log(a, b, c)
}
say.myBind(obj, 1, 2, 3)()
//{ a: 1 }
//1 2 3