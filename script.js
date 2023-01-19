

// Appel par les iD des éléments HTML
let firstHeading = document.getElementById("firstHeading");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");



// Création des canvas
let newCanvas1 = document.createElement("canvas");
newCanvas1.style.height = "50vh";
newCanvas1.style.width = "100%";

let newCanvas2 = document.createElement("canvas");
newCanvas2.style.height = "50vh";
newCanvas2.style.width = "100%";

let newCanvas3 = document.createElement("canvas");
newCanvas3.style.height = "50vh";
newCanvas3.style.width = "100%";

// Insertion des canvas a la bonne place
table1.parentNode.insertBefore(newCanvas2, table1);
table2.parentNode.insertBefore(newCanvas3, table2);


// Fonction pour insérer un élément après un autre
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
// Insertion du canvas 1 après le titre
insertAfter(firstHeading, newCanvas1);



