export class Question {
    constructor(enonce, reponses, reponseCorrecte) {
        this.enonce = enonce;
        this.reponses = reponses;
        this.reponseCorrecte = reponseCorrecte;
    }

    afficher() {
        const elementDiv = document.createElement('div');
        const elementEnonce = document.createElement('p');
        elementEnonce.textContent = this.enonce;
        elementDiv.appendChild(elementEnonce);

        this.reponses.forEach((reponse, index) => {
            const elementReponse = document.createElement('input');
            elementReponse.type = 'radio';
            elementReponse.name = 'reponse';
            elementReponse.value = index;
            elementDiv.appendChild(elementReponse);

            const elementLabel = document.createElement('label');
            elementLabel.textContent = reponse;
            elementDiv.appendChild(elementLabel);
            elementDiv.appendChild(document.createElement('br'));
        });

        return elementDiv;
    }
}