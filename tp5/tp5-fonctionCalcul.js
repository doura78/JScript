function calcul(a,b){
    let c= a * b + a + b
     return c
}
let resultat = calcul(4, 5);
console.log(resultat);

function ConcatString(a, b){
    return a+b;
}
console.log(ConcatString("Hello," ,"Good morning"));

// si ajout nvlle function ConcatString les mots seront affiché dans la console.
// si pas d'ajout nvlle fct° et string a la place des nombres, alors console affiche : NAN et le rslt du calcul