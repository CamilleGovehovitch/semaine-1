let question;
promptAndSaveResponse();



function promptAndSaveResponse(){
    question = window.prompt('Give me un num dude');
    let test = parseInt(question, 10);
    if(isNaN(test)){

        promptAndSaveResponse();
    }else{
        let resultat = square(test);
        document.getElementById('a').innerHTML = question + ' X ' + question + ' = ' + resultat;

    }

}

function square(question){
    return question * question;

}