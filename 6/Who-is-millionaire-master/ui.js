class ui {
    constructor() {

    }

    showScreen(screenName) {
        let screens = document.querySelectorAll("#wrapper > div");
        screens.forEach((screen) => {
            screen.style.display = "none";
        });
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = "block";
    }

    onStartBtnOnClick(callback) {
        let startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click', callback);
    }

    showQuestion(question) {
        document.getElementById('question').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answers[0]
        document.getElementById('answer_2').innerHTML = question.answers[1]
        document.getElementById('answer_3').innerHTML = question.answers[2]
        document.getElementById('answer_4').innerHTML = question.answers[3]
    }

    onClickAnswer(callBack) {
        document.getElementById('answer_1').addEventListener('click', callBack(0));
        document.getElementById('answer_2').addEventListener('click', callBack(1));
        document.getElementById('answer_3').addEventListener('click', callBack(2));
        document.getElementById('answer_4').addEventListener('click', callBack(3));
    }

    selectedAnswer(answer) {
        let answerIndex = answer + 1;
        let answerDiv = document.getElementById('answer_' + answerIndex);

        answerDiv.style.backgroundColor = 'green';
    }

    resetAnswerStyle() {
        for (let i = 0; i <= 4; i++) {
            document.getElementById('answer_' + currentAnswerIndex).style.backgroundColor = '#040404';

        }
    }

    showResult(currentAnswer, correctAnswer) {
        let currentAnswerIndex = currentAnswer + 1;
        let correctAnswerIndex = correctAnswer + 1;
        document.getElementById('answer_' + currentAnswerIndex).style.backgroundColor = 'yellow';
        document.getElementById('answer_' + currentAnswerIndex).style.backgroundColor = 'red';


    }
}
