//Déclarer une classe Générique
class Viande {
    constructor(public type: string) {
    }
}

class Legume {
    constructor(public type: string) {
    }
}

class Poulet extends Viande {
}

class Boeuf extends Viande {
}

class Tomate extends Legume {
}

class Salade extends Legume {
}

class Sandwich<V extends Viande, L extends Legume> {
    constructor(public viande: V, public legume: L) {
    }

    public afficher(): void {
        console.log("Sandwich " + this.viande.type + "/" + this.legume.type);
    }
}

let sandwichPouletTomate: Sandwich<Poulet, Tomate> =
    new Sandwich<Poulet, Tomate>(
        new Poulet("Poulet de Bresse"),
        new Tomate("Tomate noire de Crimée")
    );
sandwichPouletTomate.afficher();