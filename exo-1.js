console.log('hello world');
 function changeVariable(a,b){
     let c;
     c = a;
     a = b;
     b = c;
     return {
         a: a,
         b: b
     }
 }
let a = 1;
let b = 8;
let res = changeVariable(a,b);

document.getElementById('a').innerHTML = 'A = ' + a;
document.getElementById('b').innerHTML = 'B = ' + b;
document.getElementById('aPrime').innerHTML = 'A = ' + res.a;
document.getElementById('bPrime').innerHTML = 'B = ' + res.b;