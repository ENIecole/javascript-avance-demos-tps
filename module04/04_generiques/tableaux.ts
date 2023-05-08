let tableauType: number[] = [1, 2, 3];
//tableauType.push("valeur incompatible");NE COMPILE PAS
tableauType.push(4);
console.log(tableauType);

//Utilisation d'un tableau générique en TypeScript
let tableauGenerique: Array<number> = [9, 8, 7];
tableauGenerique.push(6);
console.log(tableauGenerique);