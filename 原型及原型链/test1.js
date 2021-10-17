function T1() {
    this.name = 't1';
    this.age = 19;
}

function T2() {
    this.name = 't2';
    this.age = 19;
    return 19;
}

function T3() {
    this.name = 't3';
    this.age = 19;
    return {
        name: 't',
        age: 20
    };
}

function T4() {
    this.name = 't4';
    this.age = 19;
}

console.log(new T1()); //  {name:'t1',age:19}
console.log(new T2()); //
console.log(new T3()); //  

T4.prototype = new T1();
T4.prototype.type = 'expert';

const t4 = new T4();
console.log(t4); //  
console.log(t4.type); // 'expert'
console.log(t4 instanceof T1); // true
console.log(t4 instanceof T2); // false
console.log(t4 instanceof T4); // true

console.log(new T1().name);