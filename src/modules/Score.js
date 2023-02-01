export default class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  html() {
    const p = document.createElement('p');
    p.className = 'score';
    p.innerHTML = `
      <span>${this.user}</span>:<span>${this.score}</span>
    `;
    return p;
  }
}
