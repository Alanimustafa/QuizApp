const quizArray = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Module", "Data Object Management", "Digital Operations Method"],
    answer: 0
  },
  {
    question: "What is used to declare a constant in JavaScript?",
    options: ["let", "var", "const"],
    answer: 2
  },
  {
    question: "What is used to declare a constant in JavaScript?",
    options: ["let", "var", "const"],
    answer: 2
  },
  {
    question: "What is used to declare a constant in JavaScript?",
    options: ["let", "var", "const"],
    answer: 2
  },
  {
    question: "What is used to declare a constant in JavaScript?",
    options: ["let", "var", "const"],
    answer: 2
  }
];


// ------------------------- Functions

function runQuiz () {
  let totalScore = 0;
  let correctAnswers = 0;
  let incorrectAnswer = 0;
  
  for (let i = 0; i < quizArray.length; i++) {
    let theQuestion = prompt(quizArray[i].question + " " + quizArray[i].options);
    let studentAnswer = theQuestion.toLowerCase();
    let correctAnswerIndex  = quizArray[i].answer;
    let correctAnswer = quizArray[i].options[correctAnswerIndex].toString().toLowerCase();

    console.log(quizArray[i].question);
    console.log(studentAnswer);
    console.log(correctAnswer);


    if (studentAnswer === correctAnswer) {
      console.log('Correct' + " " + correctAnswer);
      correctAnswers ++ ;
      totalScore ++ ;
    } else {
      console.log('Incorrect' + " " + correctAnswer);
      incorrectAnswer ++ ;
      totalScore -- ;
    }

    console.log(`you have ${correctAnswers} correct answer and ${incorrectAnswer} incorrect answers. Your total score is ${totalScore} out of 5`);
  }
    
  
    // if ( studentAnswer.toString() === quizArray[i].options.toLowerCase() && quizArray[i].options === quizArray.answer) {
    //   alert('correct');
    //   correctAnswers ++ ;
    // } else {
    //   alert ('Incorrect' + quizArray[i].answer);
    //   incorrectAnswer --
    // }
    // totalScore = correctAnswers + incorrectAnswer;
  }

runQuiz();