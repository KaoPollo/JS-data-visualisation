


// Création fonction pour randomiser les couleurs
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 

// Appel par les iD des éléments HTML
let firstHeading = document.getElementById("firstHeading");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");



// Création des canvas
let newCanvas1 = document.createElement("canvas");

let newCanvas2 = document.createElement("canvas");

let newCanvas3 = document.createElement("canvas");


// Insertion des canvas a la bonne place
table1.parentNode.insertBefore(newCanvas2, table1);
table2.parentNode.insertBefore(newCanvas3, table2);


// Fonction pour insérer un élément après un autre
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
// Insertion du canvas 1 après le titre
insertAfter(firstHeading, newCanvas1);




/*----------------------- Graphique 1 -----------------------*/
/*
// Premier graphique
let table1_tbody = table1.querySelector("tbody");
let table1_tr = table1_tbody.querySelectorAll("tr");
let table1_th = table1_tr[0].querySelectorAll("th");

let dataAll = [];

    // Récupération des années dans un tableau,  
let years = [];
for (var i = 2; i < table1_th.length; i++) {
    years[i-2] = table1_th[i].innerHTML;
}
console.log(years);


    //Création d'un objet pour le graphique
    let dataset_object = {
      label: "",    // pays 
      data: [], // infos du pays
      borderColor: 
      getRandomColor(),
      borderWidth: 3
  };

    // Récupération des pays dans un tableau
  dataset_object.label = table1_tbody.rows[i].cells[1].innerHTML;

    // Récupération des données
    for (var j=2; j < table1_th.length; j++) {
      var x = parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",",".")); // on remplace la virgule par un point
      if (isNaN(x)) {
          dataset_object.data.push(); // si la donnée est vide, on ajoute rien
      } else { dataset_object.data.push(parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",","."))) } } // sinon on ajoute la donnée

  dataAll.push(dataset_object);



  // Création du graphique 2
  const myChart2 = new Chart(newCanvas2, {
    type: 'line',
    data: {
        labels: years, 
        datasets: dataAll
    },
    options: {
        pointRadius: 2,
        responsive: true,
        indexAxis: 'x',
        scales: {
            yS: {
                beginAtZero: true
            },
        }
    }
}); */

let table1_tbody = table1.querySelector("tbody");
let table1_tr = table1_tbody.querySelectorAll("tr");
let table1_th = table1_tr[0].querySelectorAll("th");

let dataAll = [];
let years = [];

for (var i = 2; i < table1_th.length; i++) {
  years[i-2] = table1_th[i].innerHTML;
}
console.log(years);

for (var i = 0; i < table1_tr.length; i++) {
  let dataset_object = {
    label: table1_tbody.rows[i].cells[1].innerHTML,
    data: [],
    borderColor: getRandomColor(),
    borderWidth: 3
  };

  for (var j = 2; j < table1_th.length; j++) {
    var x = parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",","."));
    if (isNaN(x)) {
      dataset_object.data.push();
    } else {
      dataset_object.data.push(parseFloat(table1_tbody.rows[i].cells[j].innerHTML.replace(",",".")));
    }
  }
  dataAll.push(dataset_object);
}

const myChart2 = new Chart(newCanvas2, {
  type: 'line',
  data: {
    labels: years, 
    datasets: dataAll
  },
  options: {
    scales: {
      y: {
          beginAtZero: true,
          type: 'logarithmic'
      }
  }
  }
});

chart.update();

//--------------------------------------------------------------



//------------------------------Graphique 2--------------------------------

let table2_tbody = table2.querySelector("tbody");




