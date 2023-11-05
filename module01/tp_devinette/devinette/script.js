const motAtrouver = "DWWM";
init();

function init() {
    for (let i = 65; i <= 90; i++) {
        const lettre = String.fromCharCode(i);
        const bouton = document.createElement('button');
        bouton.textContent = lettre;
        bouton.addEventListener(
            'click',
            () => clicSurLaLettre(lettre)
        );
        document.getElementById('alphabet').appendChild(bouton);
    }
    document.getElementById('motAtrouver').textContent = motAtrouver.replace(/\S/g, '_');
}

function afficherLettre(lettre) {
    // Je prend le mot dans le HTML
    let motDom = document.getElementById('motAtrouver').textContent.split('');
    // Je boucle sur chaque lettre du mot
    for (let i = 0; i < motAtrouver.length; i++) {
        // Si c'est la bonne lettre je remplace le '_' par la lettre
        if (motAtrouver[i] === lettre) {
            motDom[i] = lettre;
        }
    }
    // Et je mets a jour le DOM
    document.getElementById('motAtrouver').textContent = motDom.join('');
}

function clicSurLaLettre(lettre) {
    console.log("J'ai cliqué sur la lettre " + lettre);
    if (motAtrouver.includes(lettre)) {
        afficherLettre(lettre);
    } else {
        let nbEssai = document.getElementById('essaisRestant').innerText;
        nbEssai--;
        document.getElementById('essaisRestant').innerText = nbEssai;
    }
}
