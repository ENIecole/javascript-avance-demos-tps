console.group('synchrone');

function synchrone() {
    let i = 0;
    while (i < 1000000000) {
        i++;
    }
}

console.time('ensemble');
console.time('avant');
console.log('avant');
console.timeEnd('avant');
console.time('synchrone');
synchrone();
console.log('synchrone')
console.timeEnd('synchrone');
console.time('apres');
console.log('apres');
console.timeEnd('apres');
console.timeEnd('ensemble');
console.groupEnd();

console.group('promesse');

function promesse() {
    return Promise.resolve()
        .then(
            t => {
                let i = 0;
                while (i < 1000000000) {
                    i++;
                }
                return ('Promesse');
            }
        );

}

console.time('ensemble');
console.time('avant');
console.log('avant');
console.timeEnd('avant');
console.time('promesse');
promesse().then((retour) => console.log(retour));
console.timeEnd('promesse');
console.time('apres');
console.log('apres');
console.timeEnd('apres');
console.timeEnd('ensemble');
console.groupEnd();

const getAnimal = (nom) => {
    const animaux = {
        'singe': '🐵',
        'chien': '🐶',
        'loup': '🐺',
        'renard': '🦊',
        'licorne': '🦄',
        'lapin': '🐰'
    }
    return Promise.resolve(animaux[nom]);
}
getAnimal('licorne').then(console.log);

const zoo1 = async () => {
    const lapin = await getAnimal('lapin');
    const loup = await getAnimal('loup');
    return [lapin, loup]
}
zoo1().then(console.log)

const zoo2 = async () => {
    const lapin = getAnimal('lapin');
    const loup = getAnimal('loup');
    const enclos = await Promise.all([lapin, loup]);
    return enclos;
}
zoo2().then(console.log)