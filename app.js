

let currentQuestion = 0

const questionList = document.getElementsByClassName("question");
const choiceList = document.querySelectorAll(".btn");
const start = document.getElementById("go");
// let real
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let correctAnswer = document.getElementById("correctAnswer")
console.log(correctAnswer)
// console.log(choice1);
// console.log(start);

const questionBank = [
  {
    question: "In what city and state was the game of basketball created?",
    answers: [
      { text: "Homer, Alaska"},
      { text: "Kingman, Azizona"},
      { text: "Springfield, Massachusetts"},
      { text: "Las Vegas, Nevada"},
    ],
    correct: "Springfield, Massachusetts"

  },

  {
    question: "What is the capital of the USA?",
    answers: [
      { text: "Washigton D.C."},
      { text: "Boulder"},
      { text: "Bogota"},
      { text: "Nashville"},
    ],
    correct: "Washigton D.C."
  },

  {
    question: "Whos is Mickey Mouse's wife",
    answers: [
      { text: "Ariel"},
      { text: "Jamsmine"},
      { text: "Belle"},
      { text: "Miney Mouse"},
    ],
    correct: "Miney Mouse"
  },

  {
    question: "In a website browser address bar, what does www stand for?",
    answers: [
      { text: "World Wide Winners"},
      { text: "World Wide Wages"},
      { text: "World Wide Web"},
      { text: "World Wide Weather"},
    ],
    correct: "World Wide Web"
  },
  {
    question: "What is the indeity of Superman?",
    answers: [
      { text: "Peter Parker"},
      { text: "Tom Brady"},
      { text: "Yusuke Urameshi"},
      { text: "Clark Kent"},
    ],
    correct: "Clark Kent"
  },
  {
    question: "In the MCU, who was the first Advenger?",
    answers: [
      { text: "Captain America"},
      { text: "Bruce Banner"},
      { text: "Iron Man"},
      { text: "Thor"},
    ],
    correct: "Captain America"
  },
];


// gives random numbers- translates to index number and gives back a different question

for (let i = 0; i < questionBank.length; i++) {
  questionBank.sort(() => Math.random() - 0.5);
  // works but i find that this will give me the same questions alot of the time
}


// console.log(questionBank[0].correct) // isolates the correct answer field 
// console.log(choice1.innerHTML)
// console.log(choiceList)

// Console.log()

// check to see if we are able to breakdown questionBank- answer- true/false

// start button

function ready() {
  testQuestion = questionBank[currentQuestion];
  if (testQuestion){
    question = testQuestion.question;
    questionList[0].textContent = question;
  
    choice1.innerHTML = testQuestion.answers[0].text;
    choice2.innerHTML = testQuestion.answers[1].text;
    choice3.innerHTML = testQuestion.answers[2].text;
    choice4.innerHTML = testQuestion.answers[3].text;
  }

  else {
  prompt("game over!!!!!")
  }
  

  // homework for later
  // for(let i = 0; i < testQuestion.answers.length; i++){
  //         console.log(testQuestion.answers[i])
  //     }
}
start.addEventListener("click", ready);

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
choiceList.forEach((choiceList) => {
  choiceList.addEventListener("click", function (e) {
    // console.log(testQuestion);
    for (i = 0; i < questionBank.length; i++ ){
      let choice = e.target.innerText;
      // console.log(e.target.innerText)
      if (choice === questionBank[i].correct ){
        correctAnswer.innerText = "CORRECT 💯"; 
        i = questionBank.length
      
      }
  //  console.log(questionBank.correct)
      
    else { 
        correctAnswer.innerText = "WRONG ANSWER 🫠";
        // console.log(`choice: ${choice} - Correct answer: ${questionBank[i].correct}`)
      }
      

    }
    currentQuestion++
    ready()

  });


});


