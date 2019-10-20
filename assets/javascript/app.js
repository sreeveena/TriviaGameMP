$(document).ready(function(){
    //varriable decleration with array of objects which are questions, options for answer and the correct answer.
    var myQuestions = [
        {
            question: "In A Bug's Life, the bugs that Flik mistakes for warriors actually worked where?",
            answers: ['The theater', 'The circus', 'The mall', 'The farm'],
            correctAnswer: 'The circus',
            image: "./assets/images/bugsLife.gif",
        },
        {
            question: "In Toy Story 2, what's the name of the 1950s puppet show in which Woody was the star?",
            answers: ['The Woody hour', 'Cowboy hour', 'Woody and the gang', 'Woody roundup'],
            correctAnswer: 'Woody roundup',
            image: "./assets/images/toy.gif",
        },
        {
            question: "When Monsters, Inc. opens up, who's the top scarer at the company?",
            answers: ['Mike', 'Sulley', 'Randall', 'Frank McCay'],
            correctAnswer: 'Sulley',
            image: "./assets/images/monsterInc.gif",
        },
        {
            question: "In The Incredibles, what's Frozone's actual first name?",
            answers: ['Lucas', 'Lewis', 'Lucius', 'Loomis'],
            correctAnswer: 'Lucius',
            image: "./assets/images/incredeables.gif",
        },
        {
            question: "In Cars, the Piston Cup is being held at what venue?",
            answers: ['Los Angeles International Speedway', 'Daytona International Speedway', 'Texas Motor Speedway', 'Talladega Superspeedway'],
            correctAnswer: 'Los Angeles International Speedway',
            image: "./assets/images/Piston_cup.png",
        },
        {
            question: "In WALL-E, what does EVE visit Earth in search of?",
            answers: ['Oil', 'Plant life', 'Friendship', 'Anything of value'],
            correctAnswer: 'Plant life',
            image: "./assets/images/wall-e.gif",
        },
        {
            question: "In Up, where is Paradise Falls located?",
            answers: ['Costa Rica', 'Chile', 'Guatemala', 'Venezuela'],
            correctAnswer: 'Venezuela',
            image: "./assets/images/up.gif",
        },
        {
            question: "Which character doesn't make an appearance in Toy Story 3?",
            answers: ['Slinky', 'Bo Peep', 'Rex', 'Mrs.Potato head'],
            correctAnswer: 'Bo Peep',
            image: "./assets/images/toyStory3.gif",
        },
        {
            question: "In Cars 2, where is the first race of the World Grand Prix held?",
            answers: ['London', 'Hong Kong', 'Tokyo', 'Paris'],
            correctAnswer: 'Tokyo',
            image: "./assets/images/cars2.gif",
        },
        {
            question: "What's the name of Monsters University's rival school in Monsters University?",
            answers: ['Fear University', 'Scare Tech', 'Scare State', 'Fear Tech'],
            correctAnswer: 'Fear Tech',
            image: "./assets/images/monsterUniversity.png",
        },


    ];

    //variable correctAnswers will have number of correct answers a user has got in the trivia
var correctAnswers = 0;
//variable inCorrectAnswers will have number of  in correct answers a user has got in the trivia
var inCorrectAnswers = 0;
//variable unAnswered will have number of un answered questions a user has got in the trivia
var unAnswered = 0;
//variable to set time for the trivia
var timeRemain = 20;
//variable to set the time
var intervalId;
//variable question is to generate the question after start button is clicked
var question;
//variable option is to generate the radio button options for answers after start button is clicked
var option;
//variable Done button to exit the trivia questions before the timer come to zero.
var doneButton;
// variable qi as question index
var qi = 0;
// variable ai as answer index
var ai = 0;
//variable to populate image object
var img;
//variable to populate div for questions
var question1;
//variable to populate div for answer options
var answer;

//function timeRemaining will set the time in html timeRemaining class 
    //reducea the time every one second.
    //clears time if the timer reaches to 0 then removes the question and displays 
    //message and image relevant to the question with the correct answer and increment unAns variable.
    function timeRemaining(){
        $("#timeRemaining").text("Time Remaining :" + timeRemain );
        if(timeRemain == 0){
            clearInterval(intervalId);
         $("#questions").remove();
         intervalId4s = setInterval(nextQuestion, 4000);
         answer = $("<div class='unAns'></div>");
        $(".main").append(answer);
        $(".unAns").append("<h4>Out of Time!</h4>"); 
        $(".unAns").append("<h4>The correct answer was: "+myQuestions[qi].correctAnswer+"</h4>");
        img = $("<img src='"+myQuestions[qi].image+"'>");
        $(".unAns").append(img);
        unAnswered++;
        }
        timeRemain--;
    }
// function startGame will remove start button and create html tags for time remaining, question and answer options and calls results function.
//clear correct answer, incorrect answer and unanswered  div's which result function has generated every time a new question is displayed with its options.
//set time interval for each question as 20 sec.
//iterate through answers object in myQuestion to display all the options to the player.
    function startGame(){
        $(".start").remove();
        $(".unAns").remove();
        $(".correctAns").remove();
        $(".inCorrectAns").remove();
        timeRemain = 20;
        time1 = $("<div id='timeRemaining'></div>");
        $(".main").append(time1);
        $("#timeRemaining").text("Time Remaining :" + timeRemain );
        intervalId = setInterval(timeRemaining, 1000);
        question1 = $("<div id='questions'></div>");
        $(".main").append(question1);
        question = $("<p style='font-size: 1.5em'>" + myQuestions[qi].question + "</p>");
        $("#questions").append(question);
        // $("#questions").append($("<select class='answers'>"));
        for( ai=0; ai< myQuestions[qi].answers.length; ai++){
            option = $("<div class='not-selected' id='answer"+ai+"' value='"+myQuestions[qi].answers[ai]+"'>" + myQuestions[qi].answers[ai] + "</div>");
            $("#questions").append(option);
            $("#answer"+ ai).click(function(){
                    results($(this).attr("value"));

            });
        }
    }
    // function nextQuestion will increment qi which will help startGame function to display next question when called.
    //clear the interval time
    //check if the question is last question
        // then call finalResult function
    //else call the startGame function to display the next question.

    function nextQuestion(){
        qi++;
        clearInterval(intervalId4s);
        if(qi< myQuestions.length){
            startGame();
        }else{
            finalResult();
        }
    }
    //function results will be displayed when an option in the answer is clicked and checks if the option selected is correct or wrong and increment the 
    //correct or incorrect values accordingly and randomly generate html div and img tags to display the meassage and image relavent to the question.
    function results(ans){
        clearInterval(intervalId);

        intervalId4s = setInterval(nextQuestion, 4000);
        if(ans == myQuestions[qi].correctAnswer){
            $("#questions").remove();
            answer = $("<div class='correctAns'></div>");
            $(".main").append(answer);
            $(".correctAns").append("<h4>Correct !</h4>"); 
            img = $("<img src='"+myQuestions[qi].image+"'>");
            $(".correctAns").append(img);
            correctAnswers++;
        } else{
            $("#questions").remove();
            answer = $("<div class='inCorrectAns'></div>");
            $(".main").append(answer);
            $(".inCorrectAns").append("<h4>Nope !</h4>"); 
            $(".inCorrectAns").append("<h4>The correct answer was: "+myQuestions[qi].correctAnswer+"</h4>");
            img = $("<img src='"+myQuestions[qi].image+"'>");
            $(".inCorrectAns").append(img);
            inCorrectAnswers++;
        }
    }
  //
 function finalResult(){
    clearInterval(intervalId);       
    $("#timeRemaining").remove();
    $("#questions").remove();
    $(".inCorrectAns").remove();
    $(".correctAns").remove();
    $(".unAns").remove();
    answer = $("<div class='done'></div>");
    $(".main").append(answer);
    $(".done").append("<h4 style= 'font-size:2em'> All Done!</h4>");

    answer = $("<div class='correctAns'></div>");
    $(".main").append(answer);
    $(".correctAns").append("<h4>Correct Answers :" + correctAnswers + "</h4>");

    answer = $("<div class='inCorrectAns'></div>");
    $(".main").append(answer);
    $(".inCorrectAns").append("<h4> Incorrect Answers :" + inCorrectAnswers + "</h4>");

    answer = $("<div class='unAns'></div>");
    $(".main").append(answer);
    $(".unAns").append("<h4>Unanswered :" + unAnswered + "</h4>"); 

    startOverButton = $("<br><button id= 'done'> Start Over </button>");
   $(".main").append(startOverButton);
   $("#done").on("click",startOver);
 }

 function startOver(){
    $(".timeRemaining").remove();
    $(".correctAns").remove();
    $(".inCorrectAns").remove();
    $(".unAns").remove();
    $("#done").remove();
    $(".done").remove();
    correctAnswers = 0;
    inCorrectAnswers = 0;
    unAnswered = 0;
    qi= 0;
    ai= 0;
    startGame();
 }
 //startGame function is called when start button is clicked.
$(".start").on("click", startGame); 
})