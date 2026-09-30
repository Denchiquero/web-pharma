export function createGame(maxStars = 3) {
  let stars = 0;
  return {
    press() {
      if (stars >= maxStars) return { stars, done: true, reacted: false };
      stars += 1;
      return { stars, done: stars >= maxStars, reacted: true };
    },
    reset() { stars = 0; },
    get stars() { return stars; },
  };
}
