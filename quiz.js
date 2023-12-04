//References
let timeLeft = document.querySelector('.time-left');
let quizContainer = document.getElementById('container');
let nextBtn = document.getElementById('next-button');
let countOfQuestion = document.querySelector('.number-of-question');
let displayContainer = document.getElementById('display-container');
let scoreContainer = document.querySelector('.score-container');
let restart = document.getElementById('restart');
let userScore = document.getElementById('user-score');
let startScreen = document.querySelector('.start-screen');
let startButton = document.getElementById('start-button');
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: '0',
    question: 'Which is the sign language equivalent of D?'
    options: ['./images/Mm.jpg', './images/Dd.jpg', './images/K.jpg', './images/C.jpg'],
    correct: './images/Dd.jpg', // Add the path to your image
  },
  {
    id: '1',
    question: 'Which is the sign language equivalent of T?',
    options: ['./images/Uu.jpg', './images/Tt.jpeg', './images/F.jpg' ,'./images/K.jpg'],
    correct: './images/Tt.jpg',
  },
  {
    id: '2',
    question: 'Which is the sign language equivalent of M?'
    options: ['./images/XX.jpg', './images/Ss.jpg', './images/A.jpg' ,'./images/Mm.jpg'],
    correct: './images/Mm.jpg',
  },
  {
    id: '3',
    question: 'Which is the sign language equivalent of W?',
    options: ['./images/C.jpg', './images/Gg.jpg', './images/w.jpg' ,'./images/Pp.jpg'],
    correct: './images/w.jpg',
  },
  {
    id: '4',
    question: 'Which is the sign language equivalent of J?',
    options: ['./images/Jj.jpg', './images/w.jpg', './images/D.jpg' ,'./images/Qq..jpg'],
    correct: './images/Jj.jpg',
  },
  {
    id: '5',
    question: 'Which is the sign language equivalent of X?',
    options: ['./images/F.jpg', './images/XX.jpg', './images/K.jpg' ,'./images/Jj.jpg'],
    correct: './images/XX.jpg ',
  },
  {
    id: '6',
    question: 'Which is the sign language equivalent of Z?',
    options: ['./images/Ll.jpeg', './images/Jj.jpg', './images/Zz.jpg', './images/D.jpg'],
    correct: './images/Zz.jpeg',
  },
  {
    id: '7',
    question: 'Which is the sign language equivalent of I?',
    options: ['./images/Ss.jpg', './images/A.jpg', './images/Ii.jpg', './images/Gg.jpg'],
    correct: './images/Ii.jpg',
    
  },
  {
    id: '8',
    question: 'Which is the sign language equivalent of C?',
    options: ['./images/D.jpg.jpg', './images/Xx.jpg', './images/C.jpg', './images/Pp.jpg'],
    correct: './images/C.jpgj',
  },
  {
    id: '9',
    question: 'Which is the sign language equivalent of G?',
    options: ['./images/Mm.jpg', './images/F.jpg', './images/o.jpeg', './images/Gg.jpg'],
    correct: './images/Gg.jpg'
  },
];

//Restart Quiz
restart.addEventListener('click', () => {
  initial();
  displayContainer.classList.remove('hide');
  scoreContainer.classList.add('hide');
});
debugger;


//Next Button
nextBtn.addEventListener(
  'click',
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add('hide');
      scoreContainer.classList.remove('hide');
      //user score
      userScore.innerHTML =
        'Your score is ' + scoreCount + ' out of ' + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + ' of ' + quizArray.length + ' Question';
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);
debugger;


//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};debugger;


//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll('.container-mid');
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add('hide');
  });
  //display current question card
  quizCards[questionCount].classList.remove('hide');
};
debugger;


//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement('div');
    div.classList.add('container-mid', 'hide');
    // Add image to the card
    let image = document.createElement('img');
    image.src = i.image;
    image.classList.add('question-image');
    div.appendChild(image); //question number
    countOfQuestion.innerHTML = 1 + ' of ' + quizArray.length + ' Question';
    //question
    let question_DIV = document.createElement('p');
    question_DIV.classList.add('question');
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">
    <img src="${i.options[0]}" alt="Option 1">
    </button>
    <button class="option-div" onclick="checker(this)">
    <img src="${i.options[1]}" alt="Option 2">
    </button>
    <button class="option-div" onclick="checker(this)">
    <img src="${i.options[2]}" alt="Option 3">
    </button>
    <button class="option-div" onclick="checker(this)">
    <img src="${i.options[3]}" alt="Option 4">
    </button>
    `;

    quizContainer.appendChild(div);
  }
}
debugger;


//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.firstChild.src;
    let question =
     document.getElementsByClassName('container-mid')[questionCount];
    let options = question.querySelectorAll('.option-div');
  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add('correct');
    scoreCount++;
   } else {
    userOption.classList.add('incorrect');
    //For marking the correct option
    options.forEach((element) => {
        if (element.firstChild.src == quizArray[questionCount].correct) {
          element.classList.add('correct');
        }
      });
     }
     debugger;

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = '';
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener('click', () => {
  startScreen.classList.add('hide');
  displayContainer.classList.remove('hide');
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove('hide');
  displayContainer.classList.add('hide');
};
