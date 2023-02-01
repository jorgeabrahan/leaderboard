export default class Game {
  constructor(name, cntError) {
    this.cntError = cntError;
    this.name = name;
    this.id = localStorage.getItem('game_id') || '';
    this.apiUri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  async create() {
    if (this.id.length > 0) {
      return this.id;
    }
    try {
      const response = await fetch(`${this.apiUri}games/`, {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const { result } = await response.json();
      // result = Game with ID: {id} added.
      [, , , this.id] = result.split(' ');
      localStorage.setItem('game_id', this.id);
      return this.id;
    } catch (err) {
      this.cntError.classList.remove('hide');
      throw new Error(err);
    }
  }

  async addScore(user, score) {
    try {
      const response = await fetch(`${this.apiUri}games/${this.id}/scores`, {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const { result } = await response.json();
      return result;
    } catch (err) {
      this.cntError.classList.remove('hide');
      throw new Error(err);
    }
  }

  async getScores() {
    try {
      const response = await fetch(`${this.apiUri}games/${this.id}/scores`);
      const { result } = await response.json();
      return result;
    } catch (err) {
      this.cntError.classList.remove('hide');
      throw new Error(err);
    }
  }
}
