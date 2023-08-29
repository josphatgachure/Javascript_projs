(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num; //Avoidance of bubbling that is , you might not know the event that will be clicked, so you target
            //in the above line, he did event delegation
            screen.value += value;//wherever there is an input there is an expected value
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ' '){
            screen.value = "please enter a value";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = ""
    })

})();