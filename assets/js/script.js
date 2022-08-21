var btnStart = document.getElementById('myBtn');
var startPage = document.getElementById('startUp');
var pageOne = document.querySelector('.firstQuestion')
var pageTwo = document.querySelector('.secondQuestion')
var pageThree = document.querySelector('.thirdQuestion')
var pageFour = document.querySelector('.fourthQuestion')
var pageFive = document.querySelector('.fifthQuestion')
var pageSix = document.querySelector('.sixthQuestion')
var pageSeven = document.querySelector('.seventhQuestion')
var pageEight = document.querySelector('.eighthQuestion')
var pageNine = document.querySelector('.ninthQuestion')
var pageTen = document.querySelector('.tenthQuestion')


var displayPageOne = function(){
    pageOne.style.display ="";
    var correctAnswer = document.querySelector('.correct')
    correctAnswer.addEventListener('click', function(){
        pageOne.style.display ="none";
        displayPageTwo();
    })
    //not working correctly for some reason
    var incorrectAnswer = document.querySelector('.wrong')
    incorrectAnswer.addEventListener('click', function(){
        window.alert('You answered incorrectly. Try again.')
        displayPageOne();
    })
}

var displayPageTwo = function(){
    pageTwo.style.display ="";
    var twoCorrectAnswer = document.querySelector('.twocorrect')
    twoCorrectAnswer.addEventListener('click', function(){
        pageTwo.style.display ="none";
        displayPageThree();
    })
}

var displayPageThree = function(){
    pageThree.style.display ="";
    var threeCorrectAnswer = document.querySelector('.threecorrect')
    threeCorrectAnswer.addEventListener('click', function(){
        pageThree.style.display ="none";
        displayPageFour();
    })
}

var displayPageFour = function(){
    pageFour.style.display ="";
    var fourCorrectAnswer = document.querySelector('.fourcorrect')
    fourCorrectAnswer.addEventListener('click', function(){
        pageFour.style.display ="none";
        displayPageFive();
    })
}

var displayPageFive = function(){
    pageFive.style.display ="";
    var fiveCorrectAnswer = document.querySelector('.fivecorrect')
    fiveCorrectAnswer.addEventListener('click', function(){
        pageFive.style.display ="none";
        displayPageSix();
    })
}

var displayPageSix = function(){
    pageSix.style.display ="";
    var sixCorrectAnswer = document.querySelector('.sixcorrect')
    sixCorrectAnswer.addEventListener('click', function(){
        pageSix.style.display ="none";
        displayPageSeven();
    })
}

var displayPageSeven = function(){
    pageSeven.style.display ="";
    var sevenCorrectAnswer = document.querySelector('.sevencorrect')
    sevenCorrectAnswer.addEventListener('click', function(){
        pageSeven.style.display ="none";
        displayPageEight();
    })
}

var displayPageEight = function(){
    pageEight.style.display ="";
    var eightCorrectAnswer = document.querySelector('.eightcorrect')
    eightCorrectAnswer.addEventListener('click', function(){
        pageEight.style.display ="none";
        displayPageNine();
    })
}

var displayPageNine = function(){
    pageNine.style.display ="";
    var nineCorrectAnswer = document.querySelector('.ninecorrect')
    nineCorrectAnswer.addEventListener('click', function(){
        pageNine.style.display ="none";
        displayPageTen();
    })
}

var displayPageTen = function(){
    pageTen.style.display ="";
    var tenCorrectAnswer = document.querySelector('.tencorrect')
    tenCorrectAnswer.addEventListener('click', function(){
        pageTen.style.display ="none";
        console.log("This means the quiz has finished.");
    })
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