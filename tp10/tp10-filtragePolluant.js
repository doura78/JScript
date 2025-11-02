function recupeDonnes(){
 fetch('https://digicode.cleverapps.io/json/pays/pollution')
 .then(res => res.text())
 .then(text => console.log(text));
}



function initialiserDonnees(data) {

    let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;

  // Valeurs par défaut
  min = min === "" ? 0 : Number(min);
  max = max === "" ? Number.MAX_VALUE : Number(max);

  // Vérifications
 for (let i = 0; i < pays.length; i++) {
    console.log(pays[i]);
  }

  if (min < 0 || max < 0) {
    alert("Veuillez saisir des valeurs positives");
    return;
  }
  if (min > max) {
    alert("Veuillez saisir des bornes cohérentes (MIN ≤ MAX)");
    return;
  }

  // Filtrage
  const filtres = pays.filter(p => p.valeur >= min && p.valeur <= max);

  // Affichage
  document.getElementById("resultats").innerHTML =
    filtres.map(p => `<p>${p.nom} : ${p.valeur} ${data.unite}</p>`).join("");
};