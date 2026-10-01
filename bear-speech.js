const AUDIO_BY_TEXT = new Map([
  ['Привет! Я мишка. Поможешь мне собрать три звёздочки?', './audio/greeting.wav'],
  ['Спасибо! Мне уже лучше!', './audio/star-1.wav'],
  ['Ура! Осталась ещё одна звёздочка!', './audio/star-2.wav'],
  ['Спасибо! Ты отлично справился! До встречи завтра!', './audio/done.wav']
]);

export function createBearVoice(heroTalk) {
  let speechId = 0;
  let activeAudio = null;

  const setTalking = (isTalking) => {
    heroTalk.emit(isTalking ? 'talk' : 'quiet');

    if (!isTalking) {
      requestAnimationFrame(() => heroTalk.object3D.scale.set(1, 1, 1));
    }
  };

  const stop = () => {
    speechId += 1;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      activeAudio = null;
    }

    setTalking(false);
  };

  const speak = (text) => {
    if (!text) return;

    stop();

    if (!('speechSynthesis' in window)) {
      const audioSrc = AUDIO_BY_TEXT.get(text);
      if (!audioSrc) return;

      const currentSpeechId = speechId;
      const audio = new Audio(audioSrc);
      activeAudio = audio;

      const finishTalking = () => {
        if (currentSpeechId === speechId) {
          activeAudio = null;
          setTalking(false);
        }
      };

      audio.onplay = () => {
        if (currentSpeechId === speechId) setTalking(true);
      };
      audio.onended = finishTalking;
      audio.onerror = finishTalking;
      audio.play().catch(finishTalking);
      return;
    }

    const currentSpeechId = ++speechId;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.92;
    utterance.pitch = 1.12;

    utterance.onstart = () => {
      if (currentSpeechId === speechId) setTalking(true);
    };

    const finishTalking = () => {
      if (currentSpeechId === speechId) setTalking(false);
    };

    utterance.onend = finishTalking;
    utterance.onerror = finishTalking;
    window.speechSynthesis.speak(utterance);
  };

  return { speak, stop };
}
