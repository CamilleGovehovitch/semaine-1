console.log('hello world');


function numQuestion(){
    let question = window.prompt('Give a num dude, exept 0 tchiiiiip');
    let answer = parseInt(question, 10);
    if(isNaN(answer)){
        numQuestion()

    }else{
        if(question < 0){
            document.getElementById('a').innerHTML = 'Your number ' + question + " is negative";
        }else{
            document.getElementById('a').innerHTML = 'Your number ' + question + " is positive";
        }    }

}
numQuestion();