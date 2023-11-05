import {Quiz} from "./Quiz.js";

const quiz = new Quiz();

// Ajout des questions
quiz.ajouterQuestion('Quelle est la capitale de la France ?', ['Paris', 'Londres', 'Berlin'], 0);
quiz.ajouterQuestion('Quelle est la couleur du ciel ?', ['Vert', 'Bleu', 'Rouge'], 1);

// Affichage de la première question
quiz.afficherQuestion(quiz.questions[0]);

// Gestion de la soumission du formulaire
const boutonSubmit = document.getElementById('submit');
boutonSubmit.addEventListener('click', () => {
    quiz.collecterReponse();
});
