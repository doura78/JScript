let donneesPays = [];
let triAscendant = null; // null = non trié, true = asc, false = desc

function chargerDonnees() {
  fetch("https://restcountries.com/v2/all?fields=name,capital,population,region")
    .then(response => response.json())
    .then(data => {
      donneesPays = data;
      afficherTableau();
    })
    .catch(error => {
      document.getElementById("resultat").innerHTML = `<p>Erreur : ${error.message}</p>`;
    });
}

function afficherTableau() {
  let html = `
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Capitale</th>
          <th onclick="trierParPopulation()">Population
            <i class="fa-solid ${getIconeTri()}"></i>
          </th>
          <th>Région</th>
        </tr>
      </thead>
      <tbody>
  `;

  donneesPays.forEach(pays => {
    html += `
      <tr>
        <td>${pays.name}</td>
        <td>${pays.capital || "Non renseignée"}</td>
        <td>${pays.population.toLocaleString()}</td>
        <td>${pays.region}</td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  document.getElementById("resultat").innerHTML = html;
}

function trierParPopulation() {
  if (triAscendant === null || triAscendant === false) {
    donneesPays.sort((a, b) => a.population - b.population);
    triAscendant = true;
  } else {
    donneesPays.sort((a, b) => b.population - a.population);
    triAscendant = false;
  }
  afficherTableau();
}

function getIconeTri() {
  if (triAscendant === null) return "fa-sort";
  return triAscendant ? "fa-sort-up" : "fa-sort-down";
}

// Le tableau affiche les pays avec nom, capitale, population, région.

// En cliquant sur l’en-tête Population, tu peux trier les données.

// L’icône change dynamiquement :

// fa-sort = non trié

// fa-sort-up = tri croissant

// fa-sort-down = tri décroissant