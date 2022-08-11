// const timerDisplay =document.querySelector('#timer')
// const startBtn = document.querySelector('button')
// let intervel

// let ticks = 0

// startBtn.addEventListener("click", function(){
//     console.log('testing button')
//     // clearInterval(intervel)
//     let intervel = setInterval(timerFunction, 1000)
//     // console.log(intervel)
// })

// function timerFunction(){
// console.log("sei rocks")
// ticks++
// console.log(ticks)
// }


// document.querySelector("form").reset();

// const resetButton = document.querySelector(".resetbotton")


// need to set event that is able to call on the questions class and show questions that aew in my array
// question.forEach(question=> {
// question.addEventListener('click',)
// });

// let playerOne= "Bob"




const questionList = document.getElementsByClassName('question')
const choiceList = document.querySelectorAll(".button")
const start = document.getElementById('go')
let real 
let choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")
let choice4 = document.getElementById("choice4")
console.log(choice1)
console.log(start)



const questionBank = [
    {
        question: "In what city and state was the game of basketball created?",
        answers: [
            {text: "Homer, Alaska", correct:false},
            {text: "Kingman, Azizona", correct:false},
            {text: "Springfield, Massachusetts", correct:true},
            {text: "Las Vegas, Nevada", correct:false},
        ]
           },
    
    { 
        question: "What is the capital of the USA?",
        answers: [
            {text: "Washigton D.C.", correct: true},
            {text: "Boulder", correct: false},
            {text: "Bogota", correct: false},
            {text: "Nashville", correct: false},
          ]
            
        },

    {
        question: "Whos is Mickey Mouse's wife",
        answers: [
            {text: "Ariel", correct: false},
            {text: "Jamsmine", correct: false},
            {text: "Belle", correct: false},
            {text: "Miney Mouse", correct: true},
            
        ],
        },
    
    {
        question: "In a website browser address bar, what does www stand for?",
        answers: [
            {text: "World Wide Winners", correct: false},
            {text: "World Wide Wages", correct: false},
            {text: "World Wide Web", correct: true},
            {text: "World Wide Weather", correct: false},
           
        ],
        
        },
    {
        question: "What is the indeity of Superman?",
        answers: [
            {text: "Peter Parker", correct: false},
            {text: "Tom Brady", correct: false},
            {text: "Yusuke Urameshi", correct:false},
            {text: "Clark Kent", correct: true},

        ],
       
        },
    {
        question: "In the MCU, who was the first Advenger?",
        answers: [

            {text: "Capital America", correct: true},
            {text: "Bruce Banner", correct: false},
            {text: "Iron Man", correct:false},
            {text: "Thor", correct: false},
        
        ],
    },
];
// gives random numbers- translates to index number and gives back a different question

for(let i=0; i <questionBank.length; i++) {
    questionBank.sort(() => Math.random() - 0.5);
    // works but i find that this will give me the same questions alot of the time
}
// check to see if we are able to breakdown questionBank- answer- true/false

// start button

function ready (){
    testQuestion = questionBank[0]
    question = testQuestion.question
    questionList[0].textContent = question

choice1.innerHTML = testQuestion.answers[0].text
choice2.innerHTML = testQuestion.answers[1].text
choice3.innerHTML = testQuestion.answers[2].text
choice4.innerHTML = testQuestion.answers[3].text
    
// homework for later
// for(let i = 0; i < testQuestion.answers.length; i++){
//         console.log(testQuestion.answers[i])
//     }

}
start.addEventListener("click",ready)

// console.log(questionBank[1].answers)// works
// console.log(questionBank[2].answers)// works
// console.log(questionBank)
// console.log(questionBank[0].answers)


// testQuestion = questionBank[0]
// console.log(testQuestion)

// question = testQuestion.question
// console.log(question)

// questionList[0].textContent = question


// trying to get my buttons to work and have each button show the text of the answers and return if it is 
// it is the correct answer or not based on the questions object
choiceList.forEach(choiceList => {
    choiceList.addEventListener('click',function(e){console.log(e.target)})
    // if(testQuestion.answers.correct[0].innerHTML === "true")
    // console.log(testQuestion.answers.in)
    // {
    //     console.log("correct")
    // }
    // else {
    //     console.log("wrong answer")
    }
);



// might need a for loop to cycle through questions



// console.log(questionBank.question.answers[0])





// function startGame()

// funcation needed to pull questions from the question bank

// function liveQuestions