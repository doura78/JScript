let array1 = [1, 15, -3, 0]; 
let array2 =  [-1, 12, 17, "Salut", "Encore", "Pourquoi"] ;
let array3 = [];

function array(test) {
        return test.every((element) => typeof element === 'number'); //test.every(...) : vérifie que chaque élément du tableau satisfait la condition.
            };                                                      // typeof element === 'number' : teste si l’élément est bien un nombre.
                                                                    // "=>" indique que l'on definit une fonction 

console.log(array(array1));
console.log(array(array2));
console.log(array(array3));

console.log("=== EXERCICE FonctionControleTableau (TP6) ===\n");


function verifierTableau(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    const element = tableau[i];
    if (typeof element !== 'number' || isNaN(element)) {
      throw new Error(`Erreur : l'élément à l'indice ${i} (${element}) n'est pas un nombre valide.`);
    }
  }
  return "Tous les éléments sont des nombres valides.";
}

// Exemple d'utilisation
try {
  const monTableau = [10, 20, "trente", 40];
  const resultat = verifierTableau(monTableau);
  console.log(resultat);
} catch (erreur) {
  console.error(erreur.message);
}


