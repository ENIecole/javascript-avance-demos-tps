export class Question {
    #enonce;
    #reponses;
    #reponseCorrecte;

    constructor(enonce, reponses, reponseCorrecte) {
        this.#enonce = enonce;
        this.#reponses = reponses;
        this.#reponseCorrecte = reponseCorrecte;
    }

    afficher() {
        let divQuizz = document.getElementById('quiz');
        let divEnonce = document.createElement('div');
        divEnonce.innerText = this.#enonce;
        divQuizz.appendChild(divEnonce);
        let index = 0;
        for (const reponse of this.#reponses) {
            // INPUT
            const iReponse = document.createElement('input');
            iReponse.type = 'radio';
            iReponse.name = 'reponses';
            iReponse.value = index;
            divQuizz.appendChild(iReponse);
            // LABEL
            const lReponse = document.createElement('label');
            lReponse.textContent = reponse;
            divQuizz.appendChild(lReponse);
            index++;
        }
    }

    get enonce() {
        return this.#enonce;
    }

    set enonce(value) {
        this.#enonce = value;
    }

    get reponses() {
        return this.#reponses;
    }

    set reponses(value) {
        this.#reponses = value;
    }

    get reponseCorrecte() {
        return this.#reponseCorrecte;
    }

    set reponseCorrecte(value) {
        this.#reponseCorrecte = value;
    }
}