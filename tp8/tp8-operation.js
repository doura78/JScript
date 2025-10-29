const n1 = document.querySelector("#number1");
const n2 = document.querySelector("#number2");
const selecteurElement= document.querySelector("#operation");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector("#error");

function calculer() {
    // Réinitialiser les messages d'erreur
    errorElement.innerHTML = "";
    resultatElement.innerHTML = "";

    // Convertir les entrées en nombres
    const number1 = Number(n1.value);
    const number2 = Number(n2.value);

    // Vérifier si les entrées sont des nombres valides
    if (isNaN(number1) || isNaN(number2)) {
        errorElement.innerHTML = "Vous devez saisir des nombres valides";
        return;
    }

    // Récupérer l'opération sélectionnée
    const operation = selecteurElement.value;
    let resultat;

    // Vérifier la division par zéro
    if (operation === "/" && number2 === 0) {
        errorElement.innerHTML = "Impossible de diviser par zéro !";
        return;
    }

    // Effectuer l'opération
    switch (operation) {
        case "+":
            resultat = number1 + number2;
            break;
        case "-":
            resultat = number1 - number2;
            break;
        case "*":
            resultat = number1 * number2;
            break;
        case "/":
            resultat = number1 / number2;
            break;
        default:
            errorElement.innerHTML = "Opération non valide";
            return;
    }

    // Afficher le résultat
    resultatElement.innerHTML = `Le résultat de l'opération est : ${resultat}`;
}