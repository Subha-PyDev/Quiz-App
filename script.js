const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which language runs in a web browser?",
        answers: ["Java", "Python", "C++", "JavaScript"],
        correct: 3
    },
    {
        question: "Who is the creator of Microsoft?",
        answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "None of the above"],
        correct: 0
    },
    {
        question: "Which year was JavaScript created?",
        answers: ["1995", "2005", "2010", "2020"],
        correct: 0
    }
];

var currentQuestionIndex = 0;
var score = 0;

var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("answers");
var nextButton = document.getElementById("next-btn");
var resultContainer = document.getElementById("result");
var scoreElement = document.getElementById("score");
var restartButton = document.getElementById("restart-btn");

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        var button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer");
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    var correctAnswer = questions[currentQuestionIndex].correct;
    if (index === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
});

showQuestion();
