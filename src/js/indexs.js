console.log("connected");

//quiz question array

//question object

const questionData = [
  {
    question: "What is a tomato?",
    a: "vegetable",
    b: "fruit",
    c: "Both A and B",
    d: "None of the above",
    correctChoice: "b",
  },
  {
    question: "What is a mule the offspring of?",
    a: "male horse & female donkey",
    b: "female horse & male donkey",
    c: "2 mules",
    d: "Magic",
    correctChoice: "b",
  },
  {
    question: "What is 9 + 10?",
    a: "19",
    b: "21",
    c: "19 & 21",
    d: "Only a genius can solve this",
    correctChoice: "b",
  },
  {
    question: "Where is SITHS located?",
    a: "458 Clawson Ave",
    b: "458 Clawsson St",
    c: "485 Clawson St",
    d: "485 Clawson Rd",
    correctChoice: "c",
  },
  {
    question: "What is the powerhouse of a cell?",
    a: "vacuole",
    b: "lysosome",
    c: "ribosomes",
    d: "mitochondria",
    correctChoice: "d",
  },
];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("results");
const score = document.getElementById("score");
const question = document.getElementById("question");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const results = document.getElementById("results");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const ansChoices = document.getElementById("ansChoices");
//listen for start event, click, page load

//display question or questions

var currentQuiz = 0;
var points = 0;

//display first question in array above
function showQuestions() {
  // deselectAnswers();
  const currentQuestionData = questionData[currentQuiz];
  question.innerText = currentQuestionData.question;
  choiceA.innerText = currentQuestionData.a;
  choiceB.innerText = currentQuestionData.b;
  choiceC.innerText = currentQuestionData.c;
  choiceD.innerText = currentQuestionData.d;
}
/*
function deselectAnswers() {
  choices.forEach((choice) => (choice.checked = false));
}
*/
showQuestions();

//listen for user answer click
nextBtn.addEventListener("click", () => {
  currentQuiz++;
  showQuestions();
});

prevBtn.addEventListener("click", () => {
  currentQuiz--;
  showQuestions();
});

//check if choice is correct
/*
function scoreboard() {}
questionData.forEach(() => {
  selectedAnswer = ansChoices.addEventListener("click", () => {
    console.log();
  });
});

function retrieve() {
  // retrieveChoice = document.getElementsByClassName("");
  console.log("hi");
}
*/
// find selected answer
// const answerContainer = answerContainers[questionNumber];
//const selector = `input[name=question${questionNumber}]:checked`;
// const userAnswer = (answerContainer.querySelector(selector) || {}).value;
//if answer is true then update score show correct modal/green check
//else update score show false modal/red x

//if question number is less than questions.Length show next question
//else display results

//disable buttons
/* function disableQuestion1() {
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
}

choiceA.addEventListener("click", disableQuestion1);
choiceB.addEventListener("click", disableQuestion1);
choiceC.addEventListener("click", disableQuestion1);
choiceD.addEventListener("click", disableQuestion1); */
