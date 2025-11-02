fetch(
  "https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies,capital"
)
  .then(function (res) {
    // on peut vérifier le statut de la réponse ici.
    return res.json(); // Génère une nouvelle promesse.
  })
  .then(function (text) {
    console.log(text);
  });
  
function initialiserDonnees(data) {
let corpsTableau = document.querySelector("tbody");
    corpsTableau.innerHTML = "";

    for (i=0; i < data.length; i++) {
        let nomPays = data[i].name;
        let populationPays = data[i].population;
        let regionPays = data[i].region;

        let ligne = document.createElement ("tr");
        let caseNom = document.createElement ("td");
        let casePopulation = document.createElement ("td");
        let caseRegion = document.createElement ("td");

        caseNom.textContent = nomPays;
        casePopulation.textContent = populationPays;
        caseRegion.textContent = regionPays;

        ligne.appendChild (caseNom); //appenChild ajoute un noeud à la fin de la liste des enfants par rapport au noeud parents specifié
        ligne.appendChild (casePopulation);
        ligne.appendChild (caseRegion);

        corpsTableau.appendChild (ligne);     
    }
}