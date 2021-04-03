console.log("connected");

//quiz question array

//question object

const questionData = [
  {
    question: "What is a tomatos?",
    a: "A vegetable",
    b: "A fruit",
    c: "Both A and B",
    d: "None of the above",

    correctChoice: "a",
  },
  {
    question: "What is a mule the offspring of?",
    choices: {
      a: "A male horse & a female donkey",
      b: "A female horse & a male donkey",
      c: "2 mules",
      d: "Magic",
    },
    correctChoice: "b",
  },
  {
    question: "What is 9 + 10?",
    choices: {
      a: "19",
      b: "21",
      c: "Both 19 & 21",
      d: "Only a genius can solve this",
    },
    correctChoice: "b",
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
//listen for start event, click, page load

//display question or questions
/*
function buildQuiz() {
  //stores HTML output
  const output = [];
  console.log(questions);
}
*/

var currentQuiz = 0;
var points = 0;

//display first question in array above
function showQuestions() {
  deselectAnswers();
  const currentQuestionData = questionData[currentQuiz];
  question.innerText = "hi";
  choiceA.innerText = "hi";
  choiceB.innerText = currentQuestionData.choices[b];
  choiceC.innerText = currentQuestionData.choices[c];
  choiceD.innerText = currentQuestionData.choices[d];
}

function deselectAnswers() {
  choices.forEach((choice) => (choice.checked = false));
}

showQuestions();

//listen for user answer click
nextBtn.addEventListener("click", () => {
  // currentQuiz++;
  showQuestions();
});

///prevBtn.addEventListener("click", () => {
//currentQuiz--;
// showQuestions();
//});

//check if choice is correct
//if answer is true then update score show correct modal/green check
//else update score show false modal/red x

//if question number is less than questions.Length show next question
//else display results
