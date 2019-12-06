let hour = document.getElementById('input1');
let minute = document.getElementById('input2');
let result = document.getElementById('result');
function futur(){
    let minutePlus = parseInt(minute.value, 10) + 1;
    result.innerHTML = "Dans une minute il sera " + hour.value + " heures et " + minutePlus + " minutes";
    return 'hello';
}