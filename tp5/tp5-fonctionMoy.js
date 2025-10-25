 let array1 = [1, 15, -3, 0, 8, 7, 4]; 
 let array2 = [];
 let array3 = ["Bonjour", "Salut", "Toujours"];

 function moyenne(tableau) {
 
       if (tableau.length == 0) { // test du tableau vide effectué avant d'itérer sinon ca rentre dasn la boucle et ca donne la valeur d' Array1
        return 0;
}   
    for (let i = 0; i< tableau.length; i++){ 
        if(typeof tableau[i] !== 'number'){
            return `Erreur : le tableau doit contenir uniquement des nombres.`;
        }

    }
    let somme = 0;
        for (let i=0; i < array1.length; i++){
        somme += array1[i];
        }
return somme/array1.length; 
}

 
console.log(moyenne(array1));
console.log(moyenne(array2));
console.log(moyenne(array3));


