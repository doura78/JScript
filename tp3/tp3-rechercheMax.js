 let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4]; 
let max = array[0]; // On suppose que le 1e élément est le plus grand

for (let i = 1; i < array.length; i++){
    if (array[i] > max){
        max = array[i]; // on met à jour si on trouve plus grand
    } 
}
console.log("Le plus grand element du tableau est: ", max);;
 