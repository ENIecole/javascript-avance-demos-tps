export class Quiz {
    #questions;
    #score;
    #etape;

    constructor() {
        this.#questions = [];
        this.#score = 0;
        this.#etape = 0;
    }

    get etape() {
        return this.#etape;
    }

    set etape(value) {
        this.#etape = value;
    }

    ajouterQuestion(question) {
        this.#questions.push(question);
    }

    afficherQuestion(question) {
        document.getElementById('quiz').innerText = '';
        question.afficher();
    }

    collecterReponse() {
        const iReponses = document.getElementsByName('reponses');
        let reponseUtilisateur = null;
        for (const reponse of iReponses) {
            if (reponse.checked) {
                reponseUtilisateur = parseInt(reponse.value);
            }
        }
        if (reponseUtilisateur === this.questions[this.etape].reponseCorrecte) {
            this.score++;
        }
        this.etape++;
        this.afficherQuestionSuivante();
    }

    afficherQuestionSuivante() {
        if (this.etape !== this.questions.length) {
            this.afficherQuestion(this.questions[this.etape]);
        }
        else {
            this.afficherResultat();
        }
    }

    afficherResultat() {
        document.getElementById('quiz').innerText = 'Bravo, tu as ' + this.score + ' points.';
    }

    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }
}