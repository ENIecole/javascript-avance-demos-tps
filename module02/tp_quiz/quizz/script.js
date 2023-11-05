import {Quiz} from "./Quiz.js";
import {Question} from "./Question.js";

init();

function init() {
    let quiz = new Quiz();
    let q1 = new Question("Ca va ?", ["oui", "non"], 0);
    let q2 = new Question("asv", ["18f44", "55h29"], 0);
    quiz.ajouterQuestion(q1);
    quiz.ajouterQuestion(q2);
    quiz.afficherQuestion(q1);
    document.getElementById('submit').addEventListener(
        'click',
        (evt) => quiz.collecterReponse()
    );
}