/* let box = document.querySelector("div");
    input = document.querySelector("input");

input.addEventListner("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value; 
});
 */
/* 
document.getElementById("generatePDF").onclick = function{
    let doc = new jsPDF()

    let users = [
        {
            name:'Ragul',
            age:21,
            country:'India'
        },
        {
            name:'Sachin',
            age:15,
            country:'India'
        }
    ]

    let info = []

    users.forEach((element,index,array) => {
        info.push([element.name,element.age,element.country])
    });

    doc.autoTable({
        head:[['Name','Age','Country']],
        body:info

    })

    doc.save("Profile.pdf")
} */
/* 
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide active';
}

function prevSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide-1+slides.length)%slides.length;
	slides[currentSlide].className = 'slide active';
}
 */

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "Madrid"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "Canada",
      b: "Russia",
      c: "China"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Dollar",
      b: "Yuan",
      c: "Yen"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} : ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  quizContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} questions correct.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
