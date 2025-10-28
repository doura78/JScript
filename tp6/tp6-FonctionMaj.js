function premiereMaj(str) {
    if (!str) return ""; //verifie si la chaine est vide
    return str.charAt(0).toUpperCase() + str.slice(1);
// charAt(0) permet de recuperer la 1e lettre en maj
 // toUpperCase() permet de mettre cette lettre en maj
 // slice(1) permet de recuperer le reste de la chaine à partir du ée caractère

}
console.log(premiereMaj("as tu déja jamais avec le diable au clair de lune?"));


console.log("=== EXERCICE FonctionMoyenne (TP6) ===\n");

function maj(name) {
    if ( typeof name !== 'string ') {
        throw new Error(`Erreur: Le paramètre (${name}) n'est pas une chaîne de caractère`);
    }
}
    try {
        maj(45);
    }catch (erreur){
        console.error(erreur.message)
    }
    