function chargerDonnes() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v2/all?fields=name,languages,region,flag,population,currencies');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            let data = req.responseText;

            console.log(req.responseText);

            let zoneAffichage = document.querySelector("#resultat");
            zoneAffichage.innerHTML = data;
        }
    }
    req.send();
}
