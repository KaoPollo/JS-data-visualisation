


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
newCanvas2.setAttribute("height", "300");

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
//--------------------------------------------------------------





//----------------------- Graphique dynamique -----------------------

// Création des variables
var contenu_chart1 = [];
var contenu_data = [];
var contenu_labels = [];



//--------------------------------------------------------------








/*----------------------- Graphique 1 -----------------------*/

// Création des variables

let table1_tbody = table1.querySelector("tbody");
let table1_tr = table1_tbody.querySelectorAll("tr");
let table1_th = table1_tr[0].querySelectorAll("th");

// Création des tableaux
let dataAll = [];
let years = [];

// recuperation des années
for (var i = 2; i < table1_th.length; i++) {
  years[i-2] = table1_th[i].innerHTML;
}
console.log(years);


// remplissage des données pays
for (var i = 0; i < table1_tr.length; i++) {
  let dataset_object = {
    label: table1_tbody.rows[i].cells[1].innerHTML,
    data: [],
    borderColor: getRandomColor(),
    borderWidth: 3
  };


  // remplissage des données chiffres
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


// création graphique homicides
const myChart2 = new Chart(newCanvas2, {
  type: 'line',
  data: {
    labels: years, 
    datasets: dataAll
  },
  options: {
    scales: {
      y: {
          beginAtZero: false,
          type: 'logarithmic'
      }
  }
  }
});


//--------------------------------------------------------------



//------------------------------Graphique 2--------------------------------

var table2_tbody = table2.querySelector("tbody");

// récupération des pays
var countries_list = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    countries_list[i] = table2_tbody.rows[i].cells[1].innerHTML.replace(/( +)/gm," ").replace(/(\r\n|\n|\r|<br>)/gm,"");
}

// récupération données 2007-09:
var data_1 = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    data_1[i] = table2_tbody.rows[i].cells[2].innerHTML;
  }

// récupération données 2010-12:
var data_2 = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    data_2[i] = table2_tbody.rows[i].cells[3].innerHTML;
  }

  var data = [];
for (var i = 0; i < table2_tbody.rows.length; i++) {
    data.push({
        country: table2_tbody.rows[i].cells[1].innerHTML.replace(/( +)/gm," ").replace(/(\r\n|\n|\r|<br>)/gm,""),
        data_1: table2_tbody.rows[i].cells[2].innerHTML,
        data_2: table2_tbody.rows[i].cells[3].innerHTML
    });
}


// création graphique homicides
const myChart3 = new Chart(newCanvas3, {
  type: 'bar',
  data: {
      labels: data.map(function(d) { return d.country; }),
      datasets: [{
          label: '2007-2009',
          data: data.map(function(d) { return d.data_1; }),
          backgroundColor: getRandomColor(),
      },
      {
          label: '2010-2012',
          data: data.map(function(d) { return d.data_2; }),
          backgroundColor: getRandomColor(),
      }
  ]
  },
  options: {
      responsive: true,
      scales: {
          yS: {
              beginAtZero: true
          },
      }
  }
});
//--------------------------------------------------------------

