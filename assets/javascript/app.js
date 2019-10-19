$(document).ready(function(){
    //varriable decleration with array of objects which are questions, options for answer and the correct answer.
    var myQuestions = [
        {
            question: "In A Bug's Life, the bugs that Flik mistakes for warriors actually worked where?",
            answers: ['The theater', 'The circus', 'The mall', 'The farm'],
            correctAnswer: 'The circus',
        },
        {
            question: "In Toy Story 2, what's the name of the 1950s puppet show in which Woody was the star?",
            answers: ['The Woody hour', 'Cowboy hour', 'Woody and the gang', 'Woody roundup'],
            correctAnswer: 'Woody roundup',
        },
        {
            question: "When Monsters, Inc. opens up, who's the top scarer at the company?",
            answers: ['Mike', 'Sulley', 'Randall', 'Frank McCay'],
            correctAnswer: 'Sulley',
        },
        {
            question: "In The Incredibles, what's Frozone's actual first name?",
            answers: ['Lucas', 'Lewis', 'Lucius', 'Loomis'],
            correctAnswer: 'Lucius',
        },
        {
            question: "In Cars, the Piston Cup is being held at what venue?",
            answers: ['Los Angeles International Speedway', 'Daytona International Speedway', 'Texas Motor Speedway', 'Talladega Superspeedway'],
            correctAnswer: 'Los Angeles International Speedway',
        },
        {
            question: "In WALL-E, what does EVE visit Earth in search of?",
            answers: ['Oil', 'Plant life', 'Friendship', 'Anything of value'],
            correctAnswer: 'Plant life',
        },
        {
            question: "In Up, where is Paradise Falls located?",
            answers: ['Costa Rica', 'Chile', 'Guatemala', 'Venezuela'],
            correctAnswer: 'Venezuela',
        },
        {
            question: "Which character doesn't make an appearance in Toy Story 3?",
            answers: ['Slinky', 'Bo Peep', 'Rex', 'Mrs.Potato head'],
            correctAnswer: 'Bo Peep',
        },
        {
            question: "In Cars 2, where is the first race of the World Grand Prix held?",
            answers: ['London', 'Hong Kong', 'Tokyo', 'Paris'],
            correctAnswer: 'Tokyo',
        },
        {
            question: "What's the name of Monsters University's rival school in Monsters University?",
            answers: ['Fear University', 'Scare Tech', 'Scare State', 'Fear Tech'],
            correctAnswer: 'Fear Tech',
        },


    ];

    //variable correctAnswers will have number of correct answers a user has got in the trivia
var correctAnswers = 0;
//variable inCorrectAnswers will have number of  in correct answers a user has got in the trivia
var inCorrectAnswers = 0;
//variable unAnswered will have number of un answered questions a user has got in the trivia
var unAnswered = 0;
//variable to set time for the trivia
var timeRemain = 120;
//variable to set the time
var intervalId;
//variable question is to generate the question after start button is clicked
var question;
//variable option is to generate the radio button options for answers after start button is clicked
var option;
//variable Done button to exit the trivia questions before the timer come to zero.
var doneButton;

//function timeRemaining will set the time in html timeRemaining class 
    //reducea the time every one second.
    //clears time if the timer reaches to 0 and calls the function timer.
    // function timeRemaining(){
    //     $(".timeRemaining").text("Time Remaining :" + timeRemain );
    //     timeRemain--;
    //     if(timeRemain == 0){
    //         clearInterval(intervalId);
    //         timer();
    //     }
    // }


    function startGame(){
        $(".start").remove();
        correctAnswers = 0;
        inCorrectAnswers = 0;
        unAnswered = 0;
        timeRemain = 60;
        $(".timeRemaining").text("Time Remaining :" + timeRemain );
        // intervalId = setInterval(timeRemaining, 1000);
        for(var i=0; i<myQuestions.length; i++){
            question = $("<p style='font-size: 1.5em'>" + myQuestions[i].question + "</p>");
            $("#questions").append(question);
            // $("#questions").append($("<select class='answers'>"));
            for( var j=0; j< myQuestions[i].answers.length; j++){
                option = $("<div class='not-selected' value='"+myQuestions[i].answers[j]+"'>" + myQuestions[i].answers[j] + "</div>");
                $("#questions").append(option);
            }
            
        }
    }
   
// function timer(){
//     clearInterval(intervalId);
//     results();
//     $(".timeRemaining").remove();
//     $("#questions").remove();
//     $(".done").append("<h4 style= 'font-size:2em'> All Done!</h4>");
//     $(".correctAns").append("<h4>Correct Answers :" + correctAnswers + "</h4>");
//     $(".inCorrectAns").append("<h4> Incorrect Answers :" + inCorrectAnswers + "</h4>");
//     $(".unAns").append("<h4>Unanswered :" + unAnswered + "</h4>"); 

// }
 //startGame function is called when start button is clicked.
$(".start").on("click", startGame); 
})