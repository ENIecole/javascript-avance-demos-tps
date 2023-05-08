function Livre(titre, sous_titre, annee, auteur) {
    this.titre = titre;
    this.sous_titre = sous_titre;
    this.annee = annee;
    this.auteur = auteur;
    this.getDescription = function () {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}`;
    }
}

const livre2 = new Livre("L'art du pixel : SNES", "", 2020, "Christine Bauer");
console.table(livre2);
console.log(livre2.getDescription());