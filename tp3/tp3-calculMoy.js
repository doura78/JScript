 let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 
 sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // on ajoute chaque élement à la somme
 }

let moyenne = sum / array.length;

console.log("La moyenne des élements est ", moyenne)