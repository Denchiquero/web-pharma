import { createGame } from './game.js';
import { HERO_HTML } from './hero.js';
import { createBearVoice } from './bear-speech.js';

const $ = (id) => document.getElementById(id);
const target = $('target');
target.insertAdjacentHTML('beforeend', HERO_HTML);

const game = createGame(3);
const hero = $('hero');
const voice = createBearVoice($('heroTalk'));
let greeted = false;

target.addEventListener('targetFound', () => {
  $('hint').hidden = true;
  if (game.stars < 3) $('give').hidden = false;

  if (!greeted) {
    greeted = true;
    voice.speak('Привет! Я мишка. Поможешь мне собрать три звёздочки?');
  }
});
target.addEventListener('targetLost', () => {
  $('give').hidden = true;
  $('hint').hidden = false;
  voice.stop();
});

$('give').addEventListener('click', () => {
  const r = game.press();
  if (r.reacted) hero.emit('happy');
  $('stars').textContent = '⭐'.repeat(r.stars);

  const phrases = [
    '',
    'Спасибо! Мне уже лучше!',
    'Ура! Осталась ещё одна звёздочка!',
    'Спасибо! Ты отлично справился! До встречи завтра!'
  ];
  voice.speak(phrases[r.stars]);

  if (r.done) {
    $('give').hidden = true;
    $('done').hidden = false;
  }
});
