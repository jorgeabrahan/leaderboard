export default class Score {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  html() {
    const p = document.createElement('p');
    p.id = this.id;
    p.className = 'score';
    p.innerHTML = `
      <span>${this.name}</span>:<span>${this.score}</span>
    `;
    return p;
  }
}
