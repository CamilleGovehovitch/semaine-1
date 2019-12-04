console.log('hello world');
function changeVariable(a,b,c){
    let d;
    d = c;
    c = b;
    b = a;
    a = d;
    return {
        a: a,
        b: b,
        c: c,

    }


}
let a = 1, b = 2, c = 3;
let res = changeVariable(a,b,c);
document.getElementById('a').innerHTML = 'A = ' + a;
document.getElementById('b').innerHTML = 'B = ' + b;
document.getElementById('c').innerHTML = 'C = ' + c;

document.getElementById('aPrime').innerHTML = 'A = ' + res.a;
document.getElementById('bPrime').innerHTML = 'B = ' + res.b;
document.getElementById('cPrime').innerHTML = 'C = ' + res.c;