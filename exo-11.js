let name = document.getElementById('input1');
let age = document.getElementById('input2');
let result = document.getElementById('result');
function category(){
    if(age.value < 6){
        alert( name.value + ' tu as moins de 6 ans');
    }else{
        if(parseInt(age.value,10) >= 6 && parseInt(age.value,10) < 8 ){
            result.innerHTML = name.value + ' tu fais partie des Poussins';
        }else if(parseInt(age.value,10) >= 8 && parseInt(age.value,10) < 10 ){
            result.innerHTML = name.value + ' tu fais partie des Pupilles';
        }else if(parseInt(age.value,10) >= 10 && parseInt(age.value,10) < 12 ){
            result.innerHTML = name.value + ' tu fais partie des Minimes';
        }else{
            result.innerHTML =name.value + ' tu fais partie des Cadets';
        }
    }

}