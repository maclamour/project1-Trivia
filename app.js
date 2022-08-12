
let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0



// list of questions that will be used for the game
const questionBank = [
  {
    question: "In what city and state was the game of basketball created?",
      choice1: "Homer, Alaska",
      choice2: "Kingman, Azizona",
      choice3: "Springfield, Massachusetts",
      choice4: "Las Vegas, Nevada",
    
    correctChoice: "Choice3"

  },

  {

    question: "What is the capital of the USA?",
      choice1: "Washigton D.C.",
      choice2: "Boulder",
      choice3: "Bogota",
      choice4: "Nashville",
    
    correctChoice: "Choice3"
 
  },

  {

    question: "Whos is Mickey Mouse's wife",
      choice1: "Ariel",
      choice2: "Jamsmine",
      choice3: "Belle",
      choice4: "Miney Mouse",
    
    correctChoice: "Choice4"
    
  },

  {

    question: "In a website browser address bar, what does www stand for?",
      choice1: "World Wide Winners",
      choice2: "World Wide Wages",
      choice3: "World Wide Web",
      choice4: "World Wide Weather",
    
    correctChoice: "Choice3"
    
  },
  
  {

    question: "What is the indeity of Superman?",
     choice1: "Peter Parker",
     choice2: "Tom Brady",
     choice3: "Yusuke Urameshi",
     choice4: "Clark Kent",
     correctChoice: "Choice4"
  },
  
  {

    question: "In the MCU, who was the first Advenger?",
    choice1: "Capital America",
    choice2: "Bruce Banner",
    choice3: "Iron Man",
    choice4: "Thor",
    correctChoice: "Choice1"
  },
   

];

// fuction used to shuffle the questions and make sure that it pushes new questions 

let shuffleQuestions =[] 
function handleQuestions() {
    while (shuffleQuestions.length <= 5) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffleQuestions.inculudes(random)) {
            shuffleQuestions.push(random)
            console.log(shuffleQuestions)
        }
    }
}
//function that showed the next question in the []
function nextQuestion(index){
  handleQuestions()
  const currentQuestion = shuffleQuestions[index] // current question
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("choice-1-label").innerHTML = currentQuestion.choice1;
  document.getElementById("choice-2-label").innerHTML = currentQuestion.choice2;
  document.getElementById("choice-3-label").innerHTML = currentQuestion.choice3;
  document.getElementById("choice-4-label").innerHTML = currentQuestion.choice4;
}

function checkForAnswer () {
  const currentQuestion = shuffleQuestions[indexNumber] // shows current question
  const currentQuestionAnswer = currentQuestion.correctChoice // shows answer to current question 
  const choice = document.getElementsByName("choice");
  let correctChoice = null

  // check button out to match answer selected 
  choice.forEach((choice) => {
    if (choice.vaule === currentQuestionAnswer) {
    correctChoice = choice,labels[0].id
  }
  if (choice[0].checked === false && choice[1].checked === false & choice[2].checked === false && choice[3] === false){
    document.getElementById('choice-modal').style.display = 'flex'
  }
})

}