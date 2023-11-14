import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getTriviaQuestions } from './js/openTrivia.js';

function handleSampleForm() {
  event.preventDefault();
  getTriviaQuestions(1);
}

export function buildCard(question,answer) {
  document.getElementById("questionText").innerText = question;
  document.getElementById("questionAnswer").innerText = answer;
  document.getElementById("questionAnswer").setAttribute("class","hidden");
}

function toggleAnswerVisibility() {
  document.getElementById("questionAnswer").classList.toggle("hidden");
}

window.addEventListener("load", function() {
  document.getElementById("newQuestion").addEventListener("click", handleSampleForm);
  document.getElementById("showAnswer").addEventListener("click", toggleAnswerVisibility);
});