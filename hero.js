export const HERO_HTML = `
<a-entity
  id="hero"
  gltf-model="#hero-model"
  position="0 0.6 0.3"
  scale="0.5 0.5 0.5"

  animation__idle="
    property: position;
    from: 0 0.6 0.3;
    to: 0 0.68 0.3;
    dir: alternate;
    dur: 1200;
    loop: true;
    easing: easeInOutSine
  "

  animation__happy="
    property: rotation;
    from: 0 -8 0;
    to: 0 8 0;
    dir: alternate;
    dur: 150;
    loop: 3;
    startEvents: happy
  ">
</a-entity>
`;