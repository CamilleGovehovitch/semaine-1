let num1 = document.getElementById('input1');
let num2 = document.getElementById('input2');
let result = document.getElementById('result');
function test(){
    if((num1.value < 0 && num2.value > 0)||(num1.value > 0 && num2.value < 0)){
        result.innerHTML = "-";
    }else if((num1.value > 0 && num2.value > 0)||(num1.value < 0 && num2.value < 0)){
        result.innerHTML = '+';
    }else{
        result.innerHTML = 'NULL';
    }
    return
}