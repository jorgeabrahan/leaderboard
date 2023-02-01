import Score from './Score.js';

export default class Scores {
  constructor(container) {
    this.scores = [];
    this.container = container;
    this.toggleBorder();
  }

  instanceScores() {
    const instances = [];
    this.scores.forEach(({ user, score }) => {
      instances.push(new Score(user, score));
    });
    this.scores = instances;
  }

  add(name, score) {
    const scoreObj = new Score(name, score);
    this.scores.push(scoreObj);
    this.container.appendChild(scoreObj.html());
    this.toggleBorder();
  }

  refresh(scores) {
    this.scores = scores;
    this.instanceScores();
  }

  render() {
    this.container.replaceChildren();
    const fragment = document.createDocumentFragment();
    this.scores.forEach((score) => {
      fragment.appendChild(score.html());
    });
    this.container.appendChild(fragment);
    this.toggleBorder();
  }

  toggleBorder() {
    if (this.scores.length > 0) this.container.classList.add('has-content');
    else this.container.classList.remove('has-content');
  }
}
