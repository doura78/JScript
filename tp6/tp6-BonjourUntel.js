let prenom = "Abdouramane";
function affichePrenom() {
    let salutation = "Bonjour"; // 1e execution
    console.log(salutation);
}
affichePrenom();
console.log(prenom);

console.log("\n" + "=".repeat(50));

console.log("=== EXERCICE BonjourUntel (TP6) ===\n");



function afficheSurnom(surname) {
    if (typeof surname !== 'string') { 
        throw new Error (`Erreur: le paramètre (${surname}) n'est pas une chaîne de caractères`)
}
        console.log("Le paramètre est une chaine de caractère");
}
    try {
        afficheSurnom("Salut")
        afficheSurnom(24);
    }catch (erreur){
        console.error(erreur.message)
    }

