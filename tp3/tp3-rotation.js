let array = [1, 15, -3, 8, 7, 6, 1];

// Rotation à droite : le dernier élément devient le premier
let dernier = array.pop();     // Retire le dernier élément (3)
array.unshift(dernier);        // L’ajoute au début du tableau

console.log(array)
