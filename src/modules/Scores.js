import Score from './Score.js';

export default class Scores {
  constructor(container) {
    this.scores = [];
    this.container = container;
  }

  add(name, score, id = Scores.generateId()) {
    const scoreObj = new Score(id, name, score);
    this.scores.push(scoreObj);
    this.container.appendChild(scoreObj.html());
  }

  static generateId(tokenLen = 16) {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tokenLen; i += 1) {
      let range = chars.length;
      // First char will always be a letter
      if (i === 0) range = chars.length - 10;
      id += chars.charAt(Math.floor(Math.random() * range));
    }
    return id;
  }
}
