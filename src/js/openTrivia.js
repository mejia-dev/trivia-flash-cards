import { buildCard } from '../index.js';

export function getTriviaQuestions(numberOfQuestions) {
  let xhr = new XMLHttpRequest();
  let url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=boolean`;

  xhr.addEventListener("loadend", function () {
    if (this.status === 200) {
      const result = JSON.parse(this.responseText);
      let txt = document.createElement("textarea");
      txt.innerHTML = result.results[0].question;
      const questionText = txt.value;
      buildCard(questionText, result.results[0].correct_answer);
    }
  });

  xhr.open("GET", url, true);
  xhr.send();
}