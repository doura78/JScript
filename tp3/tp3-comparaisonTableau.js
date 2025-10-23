let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;  
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;

// On utilise Set pour eviter les doublons dans le comptage
let set1 = new Set(array1);
let set2 = new Set(array2);

let count = 0;

set1.forEach((value) => { // Parcourir les éléments uniques du premier tableau
    if (set2.has(value)) { // Vérifier si la valeur existe aussi dans le second tableau
        count++ // Incrémente le compteur pour chaque correspondance 
    }
});

console.log("Le nombre d'element en commun est :", count)