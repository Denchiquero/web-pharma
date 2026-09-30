import { createGame } from './game.js';
import { HERO_HTML } from './hero.js';

const $ = (id) => document.getElementById(id);
const target = $('target');
target.insertAdjacentHTML('beforeend', HERO_HTML);

const game = createGame(3);

target.addEventListener('targetFound', () => {
  $('hint').hidden = true;
  if (game.stars < 3) $('give').hidden = false;
});
target.addEventListener('targetLost', () => {
  $('give').hidden = true;
  $('hint').hidden = false;
});

$('give').addEventListener('click', () => {
  const r = game.press();
  if (r.reacted) $('hero').emit('happy');
  $('stars').textContent = '⭐'.repeat(r.stars);
  if (r.done) {
    $('give').hidden = true;
    $('done').hidden = false;
  }
});
