let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');
let nbsOne = inputOne;
let nbsTwo = inputTwo;


function prod(){
    if(parseInt(nbsOne.value) < 0 && parseInt(nbsTwo.value) > 0){
        document.getElementById('result').innerHTML = 'Le produit est négatif';
    }else if(parseInt(nbsOne.value) > 0 && parseInt(nbsTwo.value) < 0){
        document.getElementById('result').innerHTML = 'Le produit est négatif';
    }else{
        document.getElementById('result').innerHTML = 'Le produit est positif';

    }
    return;
}
