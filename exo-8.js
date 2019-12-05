let input1 = document.getElementById('inputOne');
let input2 = document.getElementById('inputTwo');
let input3 = document.getElementById('inputThree');
let name1 = input1;
let name2 = input2;
let name3 = input3;
let array = [];
let arrayBis = array;

function pushArray(){
    arrayBis.push(name1.value, name2.value,name3.value);
    name1.value = "";
    name2.value = "";
    name3.value = "";
    return document.getElementById('result').innerHTML = arrayBis;

}

function isSorted(){
    let arrayPrime = array.map(x=> x);
    arrayPrime.sort();
    console.log(arrayPrime);
    console.log(array);
    if(arrayBis === arrayPrime){
        document.getElementById('resultSort').innerHTML = 'alpha';
    }else{
        document.getElementById('resultSort').innerHTML = 'not';
    }
    return ;
}

