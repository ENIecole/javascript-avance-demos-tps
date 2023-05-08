import {Question} from "./Question.js";

export class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
    }

    ajouterQuestion(enonce, reponses, reponseCorrecte) {
        const question = new Question(enonce, reponses, reponseCorrecte);
        this.questions.push(question);
    }

    afficherQuestion(question) {
        const elementQuiz = document.getElementById('quiz');
        const elementQuestion = question.afficher();
        elementQuiz.appendChild(elementQuestion);
    }

    collecterReponse() {
        const reponses = document.getElementsByName('reponse');
        let reponseUtilisateur = null;

        reponses.forEach(reponse => {
            if (reponse.checked) {
                reponseUtilisateur = parseInt(reponse.value);
            }
        });

        if (reponseUtilisateur !== null) {
            if (reponseUtilisateur === this.questions[this.score].reponseCorrecte) {
                this.score++;
            } else {
                console.error("Erreur");
            }
            this.afficherQuestionSuivante();
        }
    }

    afficherQuestionSuivante() {
        const elementQuiz = document.getElementById('quiz');
        elementQuiz.innerHTML = '';

        if (this.score < this.questions.length) {
            this.afficherQuestion(this.questions[this.score]);
        } else {
            this.afficherResultat();
        }
    }

    afficherResultat() {
        const elementQuiz = document.getElementById('quiz');
        const elementResultat = document.createElement('p');
        elementResultat.textContent = `Votre score est de ${this.score} sur ${this.questions.length}.`;
        elementQuiz.appendChild(elementResultat);
    }
}