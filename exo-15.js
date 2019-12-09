console.log('hello');
let age = document.getElementById('age');
let sexe = document.getElementById('sexe');
let male = "m";
let female = "f";
let result = document.getElementById('result');
function check(){
    if((sexe.value === male)&&(parseInt(age.value,10) > 20)){
        console.log(sexe.value, age.value);
        result.innerHTML = "Vous êtes imposable jeune homme";
    }else if((sexe.value === female)&&(parseInt(age.value,10) >= 18 && parseInt(age.value,10) <= 35)){

        console.log(sexe.value, age.value);

        result.innerHTML = "Vous êtes imposable Mlle";
    }else{
        result.innerHTML = "Vous n'êtes pas imposable";
        console.log(sexe.value, age.value);

    }


}