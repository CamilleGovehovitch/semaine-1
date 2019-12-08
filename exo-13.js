let hour = document.getElementById('input1');
let minute = document.getElementById('input2');
let second = document.getElementById('input3');
let result = document.getElementById('result');



function futur() {

    let date = new Date();
    date.setHours(parseInt(hour.value, 10));
    date.setMinutes(parseInt(minute.value, 10));
    date.setSeconds(parseInt(second.value, 10) + 1);
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    result.innerHTML = 'Dans Une seconde il sera ' + date.getHours() + " heures " + date.getMinutes() + " minutes " + date.getSeconds() + " secondes ";
}