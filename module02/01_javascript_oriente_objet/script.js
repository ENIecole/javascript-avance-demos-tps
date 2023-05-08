const livre1 = {
    titre: 'Fullmetal alchemist',
    sous_titre: 'Derrière la porte de la vérité',
    annee: 2020,
    auteur: 'Mariela Gonzales',
    getDescription: function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

console.table(livre1);
console.log(livre1.titre);
console.log(livre1.getDescription());