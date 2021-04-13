console.log("connected");

import { questionData } from "./questions";

//quiz question array

//question object

const quiz = document.getElementById("quiz");
/*const submitButton = document.getElementById("results");
const score = document.getElementById("score"); */
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

const output = [];

questionData.forEach((currentQuestionData, questionNumber) => {
  const ansChoices = [];

  for (letter in currentQuestionData.ansChoices) {
    ansChoices.push(
      `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestionData.ansChoices[letter]}
      </label>`
    );
  }
});

//var currentQuiz = 0;
let currentQuiz = 0;
//var points = 0;
//let points = 0;

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

/*function scoreboard() {}
questionData.forEach(() => {
  selectedAnswer = ansChoices.addEventListener("click", () => {
    points++;
    answerContainers[questionNumber].style.color = "lightgreen";
  });
}); */

const quizContainer = document.getElementById("quiz");

quizContainer.innerHTML = output.join("");

function showResults() {
  const answerContainers = quizContainer.querySelectorAll("#ansChoices");

  let points = 0;

  questionData.forEach((currentQuestionData, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestionData.correctChoice) {
      points++;
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });

  /*if (userAnswer === currentQuestionData.correctChoice) {
  points++;
  answerContainers[questionNumber].style.color = "lightgreen";
} else {
  answerContainers[questionNumber].style.color = "red";
} */

  results.innerHTML = `${points} out of ${currentQuestionData.length}`;

  const submitButton = document.getElementById("results");
  const score = document.getElementById("score");
  const quizContainer = document.getElementById("quiz");

  /*function retrieve() {
  retrieveChoice = document.getElementsByClassName("");
  console.log("hi");
} 

// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;
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

  submitButton.addEventListener("click", showResults);
}
