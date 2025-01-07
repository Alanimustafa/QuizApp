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
    question: "How do you access an element on a webpage in JavaScript using id?",
    options: ["getElementById", "getElementByClassName", "getElementID"],
    answer: 0
  },
  {
    question: "Which one is a basic JavaScript data type?",
    options: ["string", "variable", "procedure"],
    answer: 0
  },
  {
    question: "Which one of the following is an HTML Element",
    options: ["css", "function", "button"],
    answer: 2
  }
];


// ------------------------- Functions

function runQuiz () {
  let totalScore = 0;     // To calculate the total score by the end of the quiz.
  let correctAnswersCounter = 0;  // To calculate the total of the correct answers.
  let incorrectAnswer = 0;  // To calculate the total of the incorrect answers.
  
  // DOM has been used to create the HTML elements
  // the main container 
  let quizzApp = document.querySelector('.quizApp');
  quizzApp.style.backgroundColor = "rgb(255, 251, 220)";
  quizzApp.style.display = "block";
  quizzApp.style.flexWrap = 'wrap';
  quizzApp.style.padding = '100px'
  quizzApp.style.margin = '100px'
  quizzApp.style.width = "60%";
  quizzApp.style.border = "double orange 8px"
  quizzApp.style.justfySelf = 'center';
  quizzApp.style.boxShadow = "black 10px 10px 10px";

  
  // iterate throught the array of the questions.
   for (let i = 0; i < quizArray.length; i++) {
    
    let theQuestion = document.createElement('h3');
    theQuestion.textContent = quizArray[i].question;
    quizzApp.appendChild(theQuestion);


        let option1 = document.createElement('h4');
        option1.textContent = quizArray[i].options[0];
        option1.style.color = "purple";
        quizzApp.appendChild(option1);
        

        let option2 = document.createElement('h4');
        option2.textContent = quizArray[i].options[1];
        option2.style.color = "purple";
        quizzApp.appendChild(option2);

        let option3 = document.createElement('h4');
        option3.textContent = quizArray[i].options[2];
        option3.style.color = "purple";
        quizzApp.appendChild(option3);

    
    let studentAnswerInput = document.createElement('input');
    studentAnswerInput.type = "text";
    quizzApp.appendChild(studentAnswerInput);
    
    let studentAnswersubmitBtn = document.createElement('button');
    studentAnswersubmitBtn.textContent = "submit";
    studentAnswersubmitBtn.style.marginBottom = '40px';

    quizzApp.appendChild(studentAnswersubmitBtn);
    studentAnswersubmitBtn.addEventListener('click', () => {

      let studentAnswer = studentAnswerInput.value.toLocaleLowerCase();
      
      console.log(studentAnswer);

       let correctAnswerIndex  = quizArray[i].answer;
       let correctAnswer = quizArray[i].options[correctAnswerIndex].toString().toLowerCase();
  
  
  
      if (studentAnswer === correctAnswer) {
        console.log('Correct' + " " + correctAnswer);
        studentAnswersubmitBtn.textContent = 'Correct';
        studentAnswersubmitBtn.style.color = 'white';
        studentAnswersubmitBtn.style.backgroundColor = 'green';

        let questionNotes = document.createElement('h5');
        quizzApp.appendChild(questionNotes);
        questionNotes.textContent = "Correct! " + correctAnswer + "is the right answer";
        questionNotes.style.color = 'green';
        
        correctAnswersCounter ++ ;
        totalScore ++ ;
      } else {
        console.log('Incorrect' + " " + correctAnswer);
        studentAnswersubmitBtn.textContent = 'Incorrect';
        studentAnswersubmitBtn.style.color = 'white';
        studentAnswersubmitBtn.style.backgroundColor = 'red';

        let questionNotes = document.createElement('h5');
        quizzApp.appendChild(questionNotes);
        questionNotes.textContent = "The Correct Answer is : " + correctAnswer;

        incorrectAnswer ++ ;
      }

      console.log(`you have ${correctAnswersCounter} correct answer and ${incorrectAnswer} incorrect answers. Your total score is ${totalScore} out of 5`);  

    })
   }
  }

runQuiz();