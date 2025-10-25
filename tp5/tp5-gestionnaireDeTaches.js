function creerGestionnaire (){
    return{
        taches: [],
        
        //Ajouter une tâche
        ajouterTache (description) {
            if (typeof description !== "string" || description.trim() === "") {
            console.log("Description invalide");
            return;
        }
            const nouvelleTache = {
                description : description,
                terminee : false,
            };
            this.taches.push(nouvelleTache);
            console.log(`Tâche ajoutée : "${description}"` )
        },

        //terminer la tâche
        terminerTaches (index) {
        if(index >= 0 && index < this.taches.length) {
               this.taches[index].terminee = true;
            console.log(`Tâche terminée : "${this.taches[index].description}"`)
        }else{
            console.log("Index invalide");
        }
        },

        //afficher la tâche
       afficherTaches(){
        console.log("Liste des tâches:");
        if(this.taches.length === 0) {
            console.log("Aucune tâche");
            return;
        }
         this.taches.forEach((tache, i) => {
            const statut = tache.terminee ? "[✔️]" : "[❌]";
            console.log(`${i}. ${statut} ${tache.description}`);
       }
    }, 
  };
};

console.log("Création du gestionnaire de tâches\n");
const gestionnaire = creerGestionnaire();

console.log("=== Ajout de tâches ===\n");
gestionnaire.ajouterTaches("Apprendre JavaScript");
gestionnaire.ajouterTaches("Faire les exercices du TP5");
gestionnaire.ajouterTaches("Créer un projet personnel");
gestionnaire.ajouterTaches("Réviser les concepts de base");

//afficher toutes les tâches

console.log("\n");
gestionnaire.afficherTaches();

// tâches terminées
console.log("=== Marquage de tâches comme terminées ===\n");
gestionnaire.terminerTaches(0); // Apprendre JavaScript
gestionnaire.terminerTaches(2); // Créer un projet personnel

//afficher à nouveau les tâches
console.log("\n");
gestionnaire.afficherTaches();

// test index invalide
console.log("=== Test d'un index invalide ===\n");
gestionnaire.terminerTaches(10); // Index qui n'existe pas

console.log("\n" + "=".repeat(40));