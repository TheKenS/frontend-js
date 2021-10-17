Promise.race = function (iterators) {
    return new Promise((resolve, reject) => {
        for (const p of iterators) {
            Promise.resolve(p)
                .then((res) => {
                    resolve(res)
                })
                .catch(e => {
                    reject(e)
                })
        }
    })
}

var promise1 = new Promise(function (resolve, reject) {
    setTimeout((res) => {
        resolve(res);
        console.log('500');
    }, 500, 'one');
});

var promise2 = new Promise(function (resolve, reject) {
    setTimeout((res) => {
        resolve(res);
        console.log('100');
    }, 100, 'two');
});

Promise.race([promise1, promise2]).then(function (value) {
    console.log(value);
    // Both resolve, but promise2 is faster
});