import './css/index.css';
import Game from './modules/Game.js';
import Scores from './modules/Scores.js';

const frmAddScore = document.getElementById('frmAddScore');
const cntScores = document.getElementById('cntScores');
const btnRefresh = document.getElementById('btnRefresh');
const scores = new Scores(cntScores);

const game = new Game("jorge's game");
game.create();

const btnSubmit = frmAddScore.querySelector('[type="submit"]');
frmAddScore.addEventListener('submit', (e) => {
  e.preventDefault();
  btnSubmit.disabled = true;
  const name = frmAddScore.name.value.trim();
  const score = frmAddScore.score.value.trim();
  game
    .addScore(name, Number(score))
    .then(() => {
      scores.add(name, score);
      frmAddScore.reset();
      frmAddScore.name.focus();
    })
    .finally(() => {
      btnSubmit.disabled = false;
    });
});

btnRefresh.addEventListener('click', () => {
  btnRefresh.disabled = true;
  game
    .getScores()
    .then((result) => {
      scores.refresh(result);
      scores.render();
    })
    .finally(() => {
      btnRefresh.disabled = false;
    });
});
