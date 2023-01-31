export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  html() {
    const p = document.createElement('p');
    p.className = 'score';
    p.innerHTML = `
      <span>${this.name}</span>:<span>${this.score}</span>
    `;
    return p;
  }
}
