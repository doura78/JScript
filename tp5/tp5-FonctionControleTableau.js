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