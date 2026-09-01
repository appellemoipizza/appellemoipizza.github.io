/* Site-wide identity layer: a quiet, inverted dither field behind the page. */
(function () {
  'use strict';

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d', { alpha: false });
  canvas.id = 'dither-background';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;display:block;z-index:0;pointer-events:none;image-rendering:pixelated';
  document.body.insertBefore(canvas, document.body.firstChild);

  var width = 0;
  var height = 0;
  var cell = 7;
  var columns = 0;
  var rows = 0;
  var dpr = 1;
  var start = performance.now();

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function hash(x, y) {
    var value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return value - Math.floor(value);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(window.innerWidth * dpr));
    height = Math.max(1, Math.floor(window.innerHeight * dpr));
    cell = Math.max(4, Math.round(7 * dpr));
    columns = Math.ceil(width / cell);
    rows = Math.ceil(height / cell);
    canvas.width = width;
    canvas.height = height;
  }

  function draw(now) {
    var time = (now - start) / 1000;
    var dark = isDark();
    var base = dark ? '#121212' : '#e7e9ee';
    var mid = dark ? '#25272b' : '#c4c7cc';
    var ink = dark ? '#e7e9ee' : '#121212';

    context.fillStyle = base;
    context.fillRect(0, 0, width, height);
    for (var y = 0; y < rows; y += 1) {
      for (var x = 0; x < columns; x += 1) {
        var waveA = Math.sin((x * .22) + time * .65 + Math.sin(y * .08) * .8);
        var waveB = Math.cos((y * .17) - time * .37 + Math.cos(x * .05) * .7);
        var shimmer = Math.sin(time * 1.7 + x * .47 + y * .31) * .12;
        var value = (waveA + waveB) * .24 + hash(x, y) * .58 + shimmer;
        if (value > .64) {
          context.fillStyle = ink;
          context.globalAlpha = .12 + Math.min(.25, (value - .64) * .55);
          context.fillRect(x * cell, y * cell, Math.max(1, cell - 1), Math.max(1, cell - 1));
        } else if (value > .43) {
          context.fillStyle = mid;
          context.globalAlpha = .54;
          context.fillRect(x * cell, y * cell, Math.max(1, cell - 1), Math.max(1, cell - 1));
        }
      }
    }
    context.globalAlpha = 1;
    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.requestAnimationFrame(draw);
}());
