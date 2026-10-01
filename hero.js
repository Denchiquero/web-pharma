export const HERO_HTML = `
<a-entity
  id="hero"

  gltf-model="url(./models/robot.glb)"

  position="0 0 0"
  rotation="0 0 0"
  scale="0.5 0.5 0.5"

  animation__idle="
    property: position;
    from: 0 0 0;
    to: 0 0.08 0;
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