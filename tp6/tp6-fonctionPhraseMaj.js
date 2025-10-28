function premiereLettreDeMot(str) {
    if (!str) return  ""; //verifie si la chaine est vides

    return str
    .split(' ') // divise la chaine en mot
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Met en majuscule la 1ère lettre de chaque mot
    .join(' '); // Recombine les mots en une seule chaîne
}

console.log(premiereLettreDeMot("bonne nuit les petits"));

console.log("=== EXERCICE fonctionPhraseMaj (TP6) ===\n");


function phrase(maj) {
    if ( typeof maj !== 'string ') {
        throw new Error(`Erreur: Le paramètre (${maj}) n'est pas une chaîne de caractère`);
    }
}
    try {
        phrase();
    }catch (erreur){
        console.error(erreur.message)
    }