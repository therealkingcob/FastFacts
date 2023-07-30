//function to get the answers from the json file
async function getJSON() {
  return fetch('answers.json')
    .then((response) => response.json())
    .then((responseJson) => { return responseJson });
}
window.finished = 0;
(async () => { window.answers = await getJSON(); window.finished = 1; })();

document.getElementById("status").innerHTML = "Fetching Valid Answers..."
document.getElementById("status").innerHTML = ""
//function to lower case a string


function lowerCase(str) {
  return str.toLowerCase()
}

//list of letters
const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
//the categories
const categories = ["elements", "human organs", "units", "measurement equipment", "scientific laws", "diseases", "dinosaurs", "bones", "weather phenomenon", "plants", "nobel prize winners", "astronomy terms", "bacteria types", "fossils", "insects", "mammals", "landforms", "programming languages", "minerals", "trees", "muscles", "meteorology", "vegetables", "compounds", "birds", "brain parts", "countries", "moons"];

var answers = {};
var chosencategory = ""


//function to choose a random element from an array
const chooseRandom = (arr, num) => {
  const res = [];
  while (res.length < num) {
    var r = Math.floor(Math.random() * arr.length - 1) + 1;
    if (res.indexOf(arr[r]) === -1) { res.push(arr[r]) };
  }
  return res;
};



function FastFacts() {
  //making a list of all the input boxes
  var inputs = document.querySelectorAll('input[type="text"]');


  //changing all of the input boxes to be empty and black

  inputs.forEach(function(input) {
    input.value = '';
    input.style.color = "black";
  });

  var categoryletters = document.getElementsByClassName("letter");
  chosenletters = chooseRandom(letters, 5);
  //choose the letters 
  for (i = 0; i < 5; i++) {
    categoryletters[i].innerHTML = chosenletters[i];
  }
  for (i = 0; i < 5; i++) {
    chosencategory = chooseRandom(categories, 1)[0];
    document.getElementById("category" + i).innerText = chosencategory;
  }
  starttime = Date.now();


}

function Check() {
  // Get the input elements
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      inputs = document.querySelectorAll('input[type="text"]');
      categorio = document.getElementById('category' + j.toString()).innerHTML;
      num = 5 * i + j;
      inputs[num].style.color = answers[categorio].includes(lowerCase(inputs[num].value.trim())) ? "green" : "red";
    }
  }


}