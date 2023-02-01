import './css/index.css';
import Game from './modules/Game.js';
import Scores from './modules/Scores.js';

const frmAddScore = document.getElementById('frmAddScore');
const cntScores = document.getElementById('cntScores');
const scores = new Scores(cntScores);

const game = new Game("jorge's game");
game.create();

frmAddScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = frmAddScore.name.value.trim();
  const score = frmAddScore.score.value.trim();
  game.addScore(name, Number(score)).then(() => {
    scores.add(name, score);
    frmAddScore.reset();
    frmAddScore.name.focus();
  });
});
