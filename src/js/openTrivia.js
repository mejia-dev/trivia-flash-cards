import { buildCard } from '../index.js';

export function getTriviaQuestions(numberOfQuestions) {
  let xhr = new XMLHttpRequest();
  let url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=boolean`;

  xhr.addEventListener("loadend", function () {
    if (this.status === 200) {
      const result = JSON.parse(this.responseText);
      buildCard(result.results[0].question, result.results[0].correct_answer);
      // console.log(result.results[0].question, result.results[0].correct_answer, result.results[0].incorrect_answers);
    }
  });

  xhr.open("GET", url, true);
  xhr.send();
}