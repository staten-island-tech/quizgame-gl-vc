import { questionData } from "./questions.js";

(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    questionData.forEach((currentQuestionData, questionNumber) => {
      // variable to store the list of possible answers
      const ansChoices = [];

      // and for each available answer...
      for (letter in currentQuestionData.ansChoices) {
        // ...add an HTML radio button
        ansChoices.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestionData.ansChoices[letter]}
              </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
              <div class="question"> ${currentQuestionData.question} </div>
              <div class="answers"> ${ansChoices.join("")} </div>
            </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gathers the answers from the quiz
    const answerContainers = quizContainer.querySelectorAll(".ansChoices");

    // keep track of user's answers
    let score = 0;

    // for each question...
    questionData.forEach((currentQuestionData, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      /// || --> or; if either conditions is true run the respected function
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestionData.correctAnswer) {
        // add to the number of correct answers
        points++;

        // color the answers ____ when correct
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers ___ when incorrect
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    if (numCorrect >= 3) {
      resultsContainer.innerHTML = `${score} out of ${currentQuestionData.length} 
        *The conversation went well. It appears that you've greeted an old friend.... Do you remember who they are?`;
    } else {
      resultsContainer.innerHTML = `${score} out of ${currentQuestionData.length}       
        *You felt a chill down your spine. The tension in the air seems to have risen. It seems a stranger has mistaken you for a friend. You tried to play along.`;
    }
    if (score == 0) {
      resultsContainer.innerHTML = `*The stranger appears confused by your response. Perhaps they've realized that you aren't a familiar friend.`;
    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    //allows the submitBtn to be shown on the last slide and for the NextBtn to be inactivated
    if (currentSlide === slides.length - 1) {
      ///// .style - adds CSS code, varies depending on what the following element is
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

  // Kick things off
  buildQuiz();

  // Pagination
  const prevBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  prevBtn.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
