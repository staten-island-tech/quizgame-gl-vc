console.log("connected");

//quiz question array

//question object

const questions = [
  {
    question: "What is a tomato?",
    choices: {
      a: "A vegetable",
      b: "A fruit",
      c: "Both A and B",
      d: "None of the above",
    },
    correctAnswer: "a",
  },
  {
    question: "What is a mule the offspring of?",
    choices: {
      a: "A male horse & a female donkey",
      b: "A female horse & a male donkey",
      c: "2 mules",
      d: "Magic",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 9 + 10?",
    choices: {
      a: "19",
      b: "21",
      c: "Both 19 & 21",
      d: "Only a genius can solve this",
    },
    correctAnswer: "b",
  },
];

//listen for start event, click, page load

//display question or questions

//listen for user answer click

//check if choice is correct
//if answer is true then update score show correct modal/green check
//else update score show false modal/red x

//if question number is less than questions.Length show next question
//else display results

var score = 0;
