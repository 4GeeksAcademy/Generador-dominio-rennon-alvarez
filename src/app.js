import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//crear listas con conts

const pronouns = ['she', 'he', 'it', 'our']
const adjs = ['amazing', 'awesome','big', 'strong']
const nouns = ['teacher', 'student', 'gamer', 'pilot']
const extens = ['.com', '.net', '.es', '.ve']

//creo un conts para buscar el elemento dentro del HTML
const domainListElement = document.getElementById ("domainList");
domainListElement.innerhtml = "" 

//creo un for of, creo un elemento lista 
for (const pronoun of pronouns) {
  for (const adj of adjs) {
    for (const noun of nouns) {
      for (const ext of extens) {
        const li = document.createElement ('li');
        li.textContent = `${pronoun}${adj}${noun}${ext}`;
        domainListElement.appendChild(li);
      }
    }
  }
};
