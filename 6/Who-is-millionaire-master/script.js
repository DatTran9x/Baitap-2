const questions = [
    {
        question: "Điền từ còn thiếu vào câu tục ngữ sau: Gần mực thì đen, gần đèn thì ...",
        answers: [
            "rạng",
            "chói",
            "lóa",
            "mù",
        ],
        correct: 1
    },
    {
        question: "Điền từ còn thiếu vào câu tục ngữ sau: Gần mực thì đen, gần đèn thì ...",
        answers: [
            "rạng",
            "chói",
            "lóa",
            "mù",
        ],
        correct: 1
    },


];


class altp {
    constructor() {
        this.ui = new ui();
        this.ui.showScreen('welcomeScreen');
        this.currentQuestion = 0;
        this.currentAnswer = null
        this.ui.onStartBtnClick(() => {
            this.start();
        });

    }

    start() {
        this.ui.showScreen('questionScreen');
        this.ui.resetAnswerStyle();


        this.ui.showQuestion(questions[this.currentQuestion]);
        this.ui.onClickAnswer((answer) => {
            this.currentAnswer = answer;
            this.ui.selectedAnswer(answer);
        });
    }
 }

checkAnswer()
{
    if (this.currentAnswer == questions[this.currentQuestion].correct) {

        this.currentQuestion++;
        this.start();
    }
else
    {
        this.ui.showResult(this.currentAnswer, questions[this.currentQuestion].correct);
        this.reset();
    }
    ;

}
;

function reset() {
    this.currentQuestion = 0;
    this.ui.showScreen('welcomeScreen');
    this.ui.resetAnswerStyle();
}


let game = new altp();