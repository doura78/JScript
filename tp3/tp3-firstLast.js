let array = [1, 15, -3, 8, 7, 6, 1];

function verifierTableau(array) {
  return array.length >= 1 && array[0] === array[array.length - 1];
}

// return = Si les deux conditions sont vraies, la fonction retourne true, sinon false.
//array.length >= 1 : vérifie que le tableau contient au moins un élément.
//tab[0] === tab[tab.length - 1] : compare le premier et le dernier élément.


console.log(verifierTableau([1])); // un seul élément
console.log(verifierTableau([1, 15, 1]));
console.log(verifierTableau([6, 1, 7]));
console.log(verifierTableau([]));
