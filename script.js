var speed = 200;

var typed = new Typed(".main-title", {
  strings: ["4404 ^5000", "4404 = 2202 x 2^5000", "4404 = 2202 * 2"],
  typeSpeed: speed,
  backSpeed: speed,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});

var typed2 = new Typed(".main-description", {
  strings: ["^1500No projects found (at the moment)"],
  typeSpeed: 75,
});
