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

let currentQuestion = 0
const startButton = document.querySelector("#start-btn")
const nextButton = document.querySelector("#next-btn")
const questionContanierElement = document.querySelector("#question-contanier")
const question = document.querySelector("#question")
const answerButtonElement = document.querySelector("#answer-buttons")
// let choice1 = document.getElementById("choice1");
// let choice2 = document.getElementById("choice2");
// let choice3 = document.getElementById("choice3");
// let choice4 = document.getElementById("choice4");
// console.log(choice1);
// console.log(start);
let correctAnswer = document.getElementsByClassName("correctAnswer")
console.log(correctAnswer)
// console.log(choice1);
// console.log(start);

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

console.log(questionBank)
 
// gives random numbers- translates to index number and gives back a different question

// for (let i = 0; i < questionBank.length; i++) {
//   questionBank.sort(() => Math.random() - 0.5);
//   // works but i find that this will give me the same questions alot of the time
// }
// for (let i = 0; i < questionBank.length; i++) {
//   questionBank.sort(() => Math.random() - 0.5);
//   // works but i find that this will give me the same questions alot of the time
// }
// // check to see if we are able to breakdown questionBank- answer- true/false

// // start button
//   choiceList.forEach((choiceList) => {
//     let choice = e.target.innerText;
//     console.log(choice);
//     currentQuestion++
//     winLogic()
//     ready()
//   });

// });

// if(currentQuestion.answers=== "true"){
//     alert ("true")
// } 


// // if(currentQuestion.answers=== "true"){
// //     alert ("true")
// // }

// function winLogic(){
//     console.log(choiceList,"choiceList")
//     if (choiceList.choice === questionBank.correct){
//         correctAnswer.textContent = "correct"
//     }
//     else {
//         correctAnswer.textContent = "Wrong Answer"
//     }
// }
// 4