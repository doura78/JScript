function calcul (n) {
    return function (nb) {
        return nb*n;
    };
}

const multiplierPar2 = calcul(2);
const multiplierPar5 = calcul(5);

console.log(multiplierPar2(20));
console.log(multiplierPar5(30));