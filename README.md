# TriviaGameMP

Technologies used:
HTML
CSS
JAVASCRIPT
Jquery

This assignment has one HTML page, one javascript file and one CSS file:
1. index.html
2. app.js
3. style.css

 The following directories and files are in this project.
 '''
├── README.md
├── assets
│   ├── css
│   │   └── style.css
│   ├── images
│   │   ├── Piston_cup.png
│   │   ├── Pixarlogo.jpg
│   │   ├── bugsLife.gif
│   │   ├── cars2.gif
│   │   ├── incredeables.gif
│   │   ├── monsterInc.gif
│   │   ├── monsterUniversity.png
│   │   ├── pixarlogo1.jpg
│   │   ├── toy.gif
│   │   ├── toyStory3.gif
│   │   ├── up.gif
│   │   └── wall-e.gif
│   └── javascript
│       └── app.js
└── index.html


 '''

In this Trivia game the player has to click on start button and have to answer the one trivia questions with multiple options for answers
with limited amount of time to select the answer. The game ends when the last question appears with its timer. The page will reveal the number of questions that players answer correctly, incorrectly and unanswered and have an option to startover the game.


In index page the following is the body block 
'''
<body>
    <div class="main">
        <h1>Pixar Movie Trivia!</h1>
        <button class="start">Start</button>
        <div class="timeRemaining"></div>
        <!-- jQuery -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <!-- Script -->
        <script type="text/javascript" src="./assets/javascript/app.js"></script>
    </div>
</body>
'''
 javascript file  has multiple functions.

function timeRemaining will set the time in html timeRemaining class 
and reduces the time every one second. It clears time if the timer reaches to 0 then removes the question and displays 
message and image relevant to the question with the correct answer and increment unAns variable.
'''
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
'''
function startGame will remove start button and create html tags for time remaining, question and answer options and calls results function.
clear correct answer, incorrect answer and unanswered  div's which result function has generated every time a new question is displayed with its options. set time interval for each question as 20 sec and also iterate through answers object in myQuestion to display all the options to the player.
'''
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
        for( ai=0; ai< myQuestions[qi].answers.length; ai++){
            option = $("<div class='not-selected' id='answer"+ai+"' value='"+myQuestions[qi].answers[ai]+"'>" + myQuestions[qi].answers[ai] + "</div>");
            $("#questions").append(option);
            $("#answer"+ ai).click(function(){
                    results($(this).attr("value"));

            });
        }
    }
'''
function FinalResult will remove timeRemaining, question, correct, incorrect and unanswered questions
and display number of correct answers, incorrect answers and unanswered questions
and generate start over button which when clicked will call startOver function.
'''
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
'''

![image](https://user-images.githubusercontent.com/7834767/67167162-5b37ef80-f34b-11e9-9fc3-3dd28bf92865.png)

![image](https://user-images.githubusercontent.com/7834767/67167163-5b37ef80-f34b-11e9-818f-d9918e124904.png)

![image](https://user-images.githubusercontent.com/7834767/67167165-5b37ef80-f34b-11e9-8697-a1055469fa1b.png)

![image](https://user-images.githubusercontent.com/7834767/67167167-5bd08600-f34b-11e9-82aa-92e252c0dd4f.png)

![image](https://user-images.githubusercontent.com/7834767/67167168-5bd08600-f34b-11e9-8d53-2e2dba689262.png)

![image](https://user-images.githubusercontent.com/7834767/67167169-5bd08600-f34b-11e9-8e59-08c0867f9977.png)

![image](https://user-images.githubusercontent.com/7834767/67167170-5bd08600-f34b-11e9-830d-647c6c2539a3.png)

