export const HERO_HTML = `
<a-entity
  id="hero"
  position="0 -0.42 0.10"
  rotation="0 0 0"

  animation__idle="
    property: position;
    from: 0 -0.42 0.10;
    to: 0 -0.37 0.10;
    dir: alternate;
    dur: 1200;
    loop: true;
    easing: easeInOutSine
  "

  animation__happy="
    property: rotation;
    from: 0 -10 0;
    to: 0 10 0;
    dir: alternate;
    dur: 140;
    loop: 4;
    startEvents: happy;
    easing: easeInOutSine
  "

  animation__happyScale="
    property: scale;
    from: 1 1 1;
    to: 1.10 1.10 1.10;
    dir: alternate;
    dur: 140;
    loop: 4;
    startEvents: happy
  "
>

  <a-entity
    id="heroModel"
    gltf-model="url(./bear.glb)"
    scale="0.82 0.82 0.82">
  </a-entity>

</a-entity>
`;