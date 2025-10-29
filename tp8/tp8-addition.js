
const n1 = document.querySelector("#number1");
const n2 = document.querySelector("#number2");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector("#error")

function additionner(){

    const number1 = Number(n1.value);
    const number2 = Number(n2.value);

   console.log(number2)
    if (!isNaN(number1) && !isNaN(number2)) {
        const resultat = number1 + number2;
        resultatElement.innerHTML = `Le resultat de l'addition est: ${resultat}`;
    }else{
        errorElement.innerHTML = `Vous devez saisir un nombre`;
    }
}
