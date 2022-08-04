var questions = [
  {
    question: "Booleans are ? ",
    options: ["True", "False", "Both"],
    correctAnswer: "Both",
  },
  {
    question: "HTML stands for ?",
    options: ["HTML", "HTLL", "Hyper text markup language"],
    correctAnswer: "Hyper text markup language",
  },
  {
    question: "CSS stands for",
    options: ["Cascading Style Sheet", " css", "style.css"],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "JS stand for ?",
    options: ["Javascript", "js", "Sj"],
    correctAnswer: "Javascript",
  },
  {
    question: "HTML is programming language",
    options: ["true", "false"],
    correctAnswer: "true",
  },
];

var question = document.getElementById("question");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;

function startQuiz() {
  question.innerHTML = questions[indexNumber].question;
  answerParent.innerHTML = "";
  for (var i = 0; i < questions[indexNumber].options.length; i++) {
    answerParent.innerHTML += `<div class="col-md-6 py-2">
    <button onClick = "checkQuestion('${questions[indexNumber].options[i]}',
   '${questions[indexNumber].correctAnswer}')" class="btn w-100 btn-info">
    ${questions[indexNumber].options[i]}</button>
    </div>`;
  }
  totalQuestions.innerHTML = questions.length;
  currentQuestion.innerHTML = indexNumber + 1;
}
startQuiz();

function nextQuestion() {
  if (indexNumber == questions.length - 1) {
    alert("quiz complete");
  } else {
    indexNumber = indexNumber + 1;
    startQuiz();
  }
}

function checkQuestion(elem, correctOption) {
  console.log(elem, correctOption, elem == correctOption)

  if (elem == correctOption) {
    score = score + 1;
  }


  console.log(score);

  var allOptionBtns = answerParent.getElementsByTagName("button");
  for (let i = 0; i < allOptionBtns.length; i++) {
    console.log(allOptionBtns[i].innerText == correctOption, `===>Correct`)
    allOptionBtns[i].disabled = true;
    if (allOptionBtns[i].innerText == correctOption) {
      allOptionBtns[i].className += " bg-success";
    } else {
      allOptionBtns[i].className += " bg-danger";
    }
  }
}
