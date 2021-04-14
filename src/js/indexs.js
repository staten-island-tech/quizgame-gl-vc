console.log("connected");

import { questionData } from "./questions";

//immediately invoked function
(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output, including questions and answer choices
    const output = [];

    questionData.forEach((currentQuestion, questionNumber) => {
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
    let points = 0;

    // for each question...
    questionData.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      //  || {} means if is or empty object... (value will be undefined)
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        points++;

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
    //resultsContainer.innerHTML = `${points} out of ${myQuestions.length} correct!`;
    if (points >= 4) {
      resultsContainer.innerHTML = `${points} out of ${myQuestions.length} 
        Congrats! You are a GENIUS!`;
    } else {
      resultsContainer.innerHTML = `${points} out of ${myQuestions.length}       
       Was that really your best??`;
    }
    if (points == 0) {
      resultsContainer.innerHTML = `oof, at least you learned some new things ~ the more you know...`;
    }
  }

  function showSlide(n) {
    //remove/hide current slide
    slides[currentSlide].classList.remove("active-slide");
    //show new slide
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "inline-block";
    }
    //on last slide
    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    } else {
      nextBtn.style.display = "inline-block";
      submitBtn.style.display = "none";
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
  const submitBtn = document.getElementById("submit");

  //runs the quiz
  buildQuiz();

  // Pagination
  const prevBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;
  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitBtn.addEventListener("click", showResults);
  prevBtn.addEventListener("click", showPreviousSlide);
  nextBtn.addEventListener("click", showNextSlide);
})();
