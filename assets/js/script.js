var btnStart = document.getElementById('myBtn');
var startPage = document.getElementById('startUp');
var pageOne = document.querySelector('.firstPage')

var displayPageOne = function(){
    pageOne.style.display ="";
}

var startQuiz = function() {
    btnStart.addEventListener('click', function(){
        //when button is clicked I want to start a timer using window.setTimeout(function,time)
        console.log('this button is working');
        startPage.remove();
        displayPageOne();
    })
}

startQuiz();