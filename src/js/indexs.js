console.log("connected");

import { myQuestions } from "./questions";

//immediately invoked function
(function () {
  const myQuestions = [
    {
      question: "What is a tomato?",
      answers: {
        a: "vegetable",
        b: "fruit",
        c: "Both A and B",
        d: "None of the above",
      },
      correctAnswer: "b",
    },
    {
      question: "What is a mule the offspring of?",
      answers: {
        a: "male horse & female donkey",
        b: "female horse & male donkey",
        c: "2 mules",
        d: "magic",
      },
      correctAnswer: "b",
    },
    {
      question: "What is 9 + 10?",
      answers: {
        a: "19",
        b: "21",
        c: "19 & 21",
        d: "Only a genius can solve this",
      },
      correctAnswer: "b",
    },
    {
      question: "Where is SITHS located?",
      answers: {
        a: "458 Clawson Ave",
        b: "458 Clawsson St",
        c: "485 Clawson St",
        d: "485 Clawson Rd",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the powerhouse of a cell?",
      answers: {
        a: "vacuole",
        b: "lysosome",
        c: "ribosomes",
        d: "mitochondria",
      },
      correctAnswer: "d",
    },
  ];

  // Functions
  function buildQuiz() {
    // variable to store the HTML output, including questions and answer choices
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // stores the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          //<label> so that user can click on whole answer text instead of just radio button
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    //combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz HTML
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      //  || {} means if is or empty object... (value will be undefined)
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct!`;
  }

  function showSlide(n) {
    //remove/hide current slide
    slides[currentSlide].classList.remove("active-slide");
    //show new slide
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    //on last slide
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  //runs the quiz
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;
  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
