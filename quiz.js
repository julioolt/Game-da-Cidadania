const questions = [
    { img: "imgs/img-pgqz.png", answer: true },
    { img: "imgs/img-pgqz1.png", answer: true },
    { img: "imgs/img-pgqz2.png", answer: false },
    { img: "imgs/img-pgqz3.png", answer: true },
    { img: "imgs/img-pgqz4.png", answer: false },
    { img: "imgs/img-pgqz5.png", answer: true },
    { img: "imgs/img-pgqz6.png", answer: false },
    { img: "imgs/img-pgqz7.png", answer: false },
    { img: "imgs/img-pgqz8.png", answer: false },
    { img: "imgs/img-pgqz9.png", answer: false },
];

let score = 0; 
let questionIndex = 0; 


function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}


function displayQuestion() {
    const quizImage = document.getElementById('image');
    quizImage.src = questions[questionIndex].img;
}


function startQuiz() {
    shuffleQuestions();
    displayQuestion();
}


function checkAnswer(isTrue) {
    if (isTrue === questions[questionIndex].answer) {
        score++;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        displayQuestion();
    } else {
        localStorage.setItem('quizScore', score); 
        window.location.href = 'score.html';
    }
}


document.getElementById('true-btn').addEventListener('click', () => checkAnswer(true));
document.getElementById('false-btn').addEventListener('click', () => checkAnswer(false));

window.onload = startQuiz;
