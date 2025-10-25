function premiereMaj(str) {
    if (!str) return ""; //verifie si la chaine est vides
    return str.charAt(0).toUpperCase() + str.slice(1);
// charAt(0) permet de recuperer la 1e lettre en maj
 // toUpperCase() permet de mettre cette lettre en maj
 // slice(1) permet de recuperer le reste de la chaine à partir du ée caractère

}
console.log(premiereMaj("as tu déja jamais avec le diable au clair de lune?"));