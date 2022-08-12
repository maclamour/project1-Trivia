// list of questions that will be used for the game
const questionBank = [
  {
    question: "In what city and state was the game of basketball created?",
    answers:
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
// gives random numbers- translates to index number and gives back a different question

for (let i = 0; i < questionBank.length; i++) {
  questionBank.sort(() => Math.random() - 0.5);
  // works but i find that this will give me the same questions alot of the time
}
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
    alert("game over!!!!!")
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
    console.log(testQuestion);
    let choice = e.target.innerText;
    console.log(choice);
    currentQuestion++
    ready()
  });

});



