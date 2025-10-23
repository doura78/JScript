let array = [1, 15, -3, 8, 7, 6,] ;  

function verifierTableau(array) {
  return array.length > 0 && (array[0] === 6 || array[array.length - 1] === 6);
}

//array.length > 0 : vérifie que le tableau contient au moins un élément.
//array[0] === 6 : teste si le premier élément vaut 6
//array[array.length - 1] === 6 : teste si le dernier élément vaut 6.
//L’opérateur logique && combine les deux conditions.

console.log(verifierTableau([15,6]));
console.log(verifierTableau([-3,1,7]));
console.log(verifierTableau([6,1,7]));
console.log(verifierTableau([]));