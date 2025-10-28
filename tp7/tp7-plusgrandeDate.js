function afficherDatePlusRecente(date1, date2) {
  const d1 = new Date(date1); // convertir les chaînes en objets Date
  const d2 = new Date(date2);

  if (isNaN(d1) || isNaN(d2)) { // isNaN verifie que les dates sont valides
    throw new Error("Erreur : une ou les deux dates ne sont pas valides.");
  }

  const plusRecente = d1 > d2 ? d1 : d2; // La comparaison > premet de determiner la date la plus récente
  console.log(`La date la plus récente est : ${plusRecente.toLocaleString()}`); // affiche la date dans un format lisible
}

try {
  afficherDatePlusRecente("2025-10-28", "2023-05-15");
} catch (erreur) {
  console.error(erreur.message);
}