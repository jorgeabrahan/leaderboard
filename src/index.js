import './css/index.css';
import Scores from './modules/Scores.js';

const frmAddScore = document.getElementById('frmAddScore');
const cntScores = document.getElementById('cntScores');
const scores = new Scores(cntScores);

frmAddScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = frmAddScore.name.value.trim();
  const score = frmAddScore.score.value.trim();
  scores.add(name, score);
  frmAddScore.reset();
  frmAddScore.name.focus();
});
