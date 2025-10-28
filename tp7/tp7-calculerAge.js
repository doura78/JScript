function afficherAge(dateNaissance) { // Conversion de la date de naissance en objet Date.
  const naissance = new Date(dateNaissance);
  const aujourdHui = new Date(); // On compare avec la date actuelle (new Date()).

  if (isNaN(naissance)) {
    throw new Error("Erreur : la date de naissance fournie n'est pas valide.");  // On utilise throw pour signaler une date invalide.
  }

  let annees = aujourdHui.getFullYear() - naissance.getFullYear();  // Calcule de la différence en années et ajuste les mois si nécessaire.

  let mois = aujourdHui.getMonth() - naissance.getMonth();

  // Ajustement si le mois actuel est avant le mois de naissance
  if (mois < 0) {
    annees--;
    mois += 12;
  }

  console.log(`Âge : ${annees} ans et ${mois} mois.`);
}

// Exemple d'utilisation
try {
  afficherAge("1990-06-15"); // Affiche l'âge en années et mois
} catch (erreur) {
  console.error(erreur.message);
}






