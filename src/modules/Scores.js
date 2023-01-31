import Score from './Score.js';

export default class Scores {
  constructor(container) {
    this.scores = [];
    this.container = container;
  }

  add(name, score) {
    const scoreObj = new Score(name, score);
    this.scores.push(scoreObj);
    this.container.appendChild(scoreObj.html());
  }
}
