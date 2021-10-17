console.log('a');

setTimeout(() => {

   console.log('b');

}, 0);

console.log('c');

new Promise((resolve) => {

   console.log('d');

   resolve(2);

}).then(() => {

   console.log('e');

   setTimeout(() => {

     console.log('f')

   }, 100)

});

console.log('g');

//  a c d g e b f