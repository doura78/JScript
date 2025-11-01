
function validerFormulaire(){
    
const nom = document.getElementById("nom").value.trim();
const prenom = document.getElementById("prenom").value.trim();
const dateDeNaissance = document.getElementById("dateNaissance").value.trim();

let Errors = [];

if (nom === ""){
    Errors.push("Le nom est requis");
} 
if (prenom === ""){
    Errors.push("Le prénom est requis");
}
if (dateDeNaissance === ""){
    Errors.push("La date de naissance est requise")
}
if (Errors.length > 0){
    messageErrorElement.innerHTML = ""("<br>");
    return false;
}else{alert = "Le formulaire est soumis avec succès"
    return true;
}
}

