let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 
let min = array[0]; // On suppose que le 1e élément est le plus petit

for (let i = 0; i < array.length; i++){
    if (array[i] < min){
        min = array[i]; // on met à jour si on trouve plus petit
    } 
}
console.log("Le plus petit element du tableau est: ", min);
 