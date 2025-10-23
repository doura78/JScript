// let chaines = ['mot', 'coucou', 'ananas', 'mer'];
//  console.log(chaines[0]);
//  // Affiche mot
//  console.log(chaines[chaines.length-2]);
//  // Affiche mer

//   let chaines = ['mot', 'coucou', 'ananas', 'mer'];
//  chaines.push('hello');
//  console.log(chaines);

//  let chaines = ['mot', 'coucou', 'ananas', 'mer'];
//  chaines.splice(1, 1);
//  // Permet de supprimer coucou
//  console.log(chaines);

// let chaines = ['mot', 'coucou', 'ananas', 'mer'];
//  let chaines2 = chaines.slice();
//  console.log(chaines2);

// let chaines = ['mot', 'coucou', 'ananas', 'mer'];
//  let chaines2 = chaines;
//  chaines[0]='hello'; // modifie chaines et chaines2
//  console.log(chaines);
//  console.log(chaines2);

//  let valeurs = new Array(100);
//  valeurs.fill(0);
//  console.log(valeurs);

// let i =-0.25;
//  if (i == 0) {
//  console.log("i est nul");
//  } else if (i > 0) {
//  console.log("i est positif");
//  } else {
//  console.log("i est négatif");
//  }

// const expr = 'Papayes';

//  switch (expr) {
//  case 'Oranges':
//  console.log('Les oranges coûtent 3.8€lekilo.');
//  break;
//  case 'Papayes':
//  console.log('Les papayes coûtent 1,25€ pièce.');
//  break;
//  default:
//  console.log(`Nous sommes désolés, nous n'avons plus de ${expr}.`);
//  break;
//  } (switch ccase)

// let x=2;

//  switch(x){
//  case(0):
//  case(1):
//  console.log("x vaut soit 0, soit 1");
//  break;
//  case(3):
//  case(4):
//  console.log("x vaut soit 3,soit 4");
//  break;
//  default:
//  console.log("x vaut autre chose…");
//  break;
//  }

//  const expr = 'Oranges';
//  switch (expr) {
//  case 'Oranges':
//  console.log('Les oranges coûtent 3.8€lekilo.');
//  case 'Papayes':
//  console.log('Les papayes coûtent 1,25€ pièce.');
//  break;
//  default:
//  console.log(`Nous sommes désolés, nous n'avons plus de${expr}.`);
//  break;
//  }

//  for (let i = 0; i < 10; i++) {
//  let carre = i * i;
//  let chaine = "le carré de " + i + " est " + carre;
//  console.log(chaine);
//  }

// let i=0;
//  for (i = 0; i < 10; i++){
//  let carre=i*i;
//  let chaine="le carré de " + i + " est " + carre;
//  console.log(chaine);
//  }

//  let tableau = [12,-15, 8.9,-3, 0, 4.7];
//  for (let i = 0; i < tableau.length; i++) {
//  console.log(tableau[i]);
//  }

// let i = 10;
//  while (i > 0) {
//  let carre = i * i;
//  let chaine = " le carré de " + i + " est " + carre;
//  console.log(chaine);
//  i--;
//  }

// let i = 10;
//  do {
//  let carre = i* i;
//  let chaine = "le carré de " + i+ " est " + carre;
//  console.log(chaine);
//  i--;
//  }while (i > 0);

 for (let i =-5; i < 5; i++) {
 if (i == 0) {
 break;
 }
 let div = 10 / i;
 console.log(div);
 }

