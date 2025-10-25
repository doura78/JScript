// let prenom="Jean";
//  function affichePrenom() {
//  console.log(prenom);
//  }
//  affichePrenom();


// let prenom="Jean";
//  function affichePrenom() {
//     let prenom ="pierre";
//  console.log(prenom);
//  }
//  affichePrenom();
//  console.log(prenom)


// Un objet littéral, comme tout objet, peut contenir des méthodes:  sans le mot clé function

// let objet = { nom: "Mex ",
//  prenom: "Tex",
//  afficher() {
//  return this.nom + this.prenom;
//  }
//  };
//  console.log(objet.afficher());


//Un objet littéral, comme tout objet, peut contenir des méthodes : avec le mot clé function

//  let objet = { 
// nom: "Mex ",
//  prenom: "Tex",
//  afficher: function(){
//  return this.nom + this.prenom;
//  }
//  };
//  console.log(objet.afficher());

//Un variable peut contenir une function

// let carre = function(nb){
//  return nb*nb;
//  }
//  console.log(carre(10));

// function calcul(a, b) {
//  let c = a * b + a + b;
//  return c;
//  }
//  let resultat = calcul(2.5, 8);

//  console.log(resultat)

// function calcul(a, b) {
//  if (typeof a !== 'number' || typeof b !== 'number'){  utilisation du mot clé "Typeof"
//  throw 'Vous devez fournir des nombres en paramètres';  utilisation de l'exception "Throw"
//  }
//  let calcul = a * b + a + b;
//  return calcul;
//  }
//  let resultat = calcul(4, 8);
//  console.log(resultat);