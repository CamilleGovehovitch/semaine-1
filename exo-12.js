let hour = document.getElementById('input1');
let minute = document.getElementById('input2');
let result = document.getElementById('result');
function futur(){
    let minutePlus = parseInt(minute.value, 10) + 1;
    if(minutePlus > 59){
        let hourPlus = parseInt(hour.value,10) + 1;
        minutePlus = 0;
        result.innerHTML = "Dans une minute il sera " + hourPlus + " heures et " + minutePlus + " minutes";
    }else{
        result.innerHTML = "Dans une minute il sera " + hour.value + " heures et " + minutePlus + " minutes";
    }

}