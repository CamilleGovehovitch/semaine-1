console.log('hello');
let nbsPictures = document.getElementById('input1');
let result = document.getElementById('result');

function copy(){
    if(parseInt(nbsPictures.value,10) < 11){
        let price = 0.10 * nbsPictures.value;
        result.innerHTML = price + " euros";
    }else if((parseInt(nbsPictures.value,10) > 10) && (parseInt(nbsPictures.value,10))){
        let price = (0.10 * 10) + (0.09 * (parseInt(nbsPictures.value,10) - 10));
        result.innerHTML = price + " euros";
    }else{
        let price = (0.10 * 10) + (0.09 * (parseInt(nbsPictures.value,10) - 10)) + (0.08 * (parseInt(nbsPictures.value,10) - 20));
        result.innerHTML = price + " euros";
    }
}