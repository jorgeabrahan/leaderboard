export default class Game {
  constructor(name) {
    this.name = name;
    this.id = localStorage.getItem('game_id') || '';
    this.apiUri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  create() {
    return new Promise((resolve, reject) => {
      if (this.id.length > 0) {
        resolve(this.id);
      }

      fetch(`${this.apiUri}games/`, {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(({ result }) => {
          // result = Game with ID: {id} added.
          [, , , this.id] = result.split(' ');
          localStorage.setItem('game_id', this.id);
          resolve(this.id);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
