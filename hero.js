export const HERO_HTML = `
<a-entity id="hero" position="0 0.6 0.3" scale="0.6 0.6 0.6"
  animation__idle="property: position; to: 0 0.7 0.3; dir: alternate; dur: 900; loop: true; easing: easeInOutSine"
  animation__happy="property: rotation; from: 0 0 0; to: 0 360 0; dur: 800; startEvents: happy; easing: easeInOutQuad">
  <a-sphere radius="0.5" color="#ff9f43" position="0 0 0"></a-sphere>
  <a-sphere radius="0.4" color="#ffbe76" position="0 0.75 0"></a-sphere>
  <a-sphere radius="0.15" color="#ff9f43" position="-0.3 1.05 0"></a-sphere>
  <a-sphere radius="0.15" color="#ff9f43" position="0.3 1.05 0"></a-sphere>
  <a-sphere radius="0.06" color="#2d3436" position="-0.15 0.82 0.36"></a-sphere>
  <a-sphere radius="0.06" color="#2d3436" position="0.15 0.82 0.36"></a-sphere>
  <a-torus radius="0.15" radius-tubular="0.02" arc="180" color="#2d3436" rotation="0 0 180" position="0 0.72 0.37"></a-torus>
  <a-entity position="0.5 0.15 0" rotation="0 0 -30"
    animation="property: rotation; from: 0 0 -30; to: 0 0 -70; dir: alternate; dur: 500; loop: true; easing: easeInOutSine">
    <a-cylinder radius="0.07" height="0.4" color="#ff9f43" position="0.15 0 0" rotation="0 0 90"></a-cylinder>
  </a-entity>
  <a-cylinder radius="0.07" height="0.4" color="#ff9f43" position="-0.55 0.1 0" rotation="0 0 60"></a-cylinder>
</a-entity>`;
