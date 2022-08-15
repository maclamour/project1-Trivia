

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


for (let i = 0; i < questionBank.length; i++) {
  questionBank.sort(() => Math.random() - 0.5);
  // works but i find that this will give me the same questions alot of the time
}


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
  
}


start.addEventListener("click", ready);


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

      
    else { 
        correctAnswer.innerText = "WRONG ANSWER 🫠";
        // console.log(`choice: ${choice} - Correct answer: ${questionBank[i].correct}`)
      }
      

    }
    currentQuestion++
    ready()

  });


});


