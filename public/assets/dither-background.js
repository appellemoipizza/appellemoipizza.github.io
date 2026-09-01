/* Site-wide identity layer: the approved organic dither wallpaper behind the page. */
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
  var dpr = 1;
  var wallpaper = new Image();
  wallpaper.decoding = 'async';
  wallpaper.src = '/assets/dither-wallpaper.png';

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(window.innerWidth * dpr));
    height = Math.max(1, Math.floor(window.innerHeight * dpr));
    canvas.width = width;
    canvas.height = height;
    paint();
  }

  function paint() {
    context.fillStyle = '#121212';
    context.fillRect(0, 0, width, height);
    if (!wallpaper.naturalWidth) {
      return;
    }

    var scale = Math.max(width / wallpaper.naturalWidth, height / wallpaper.naturalHeight);
    var drawWidth = wallpaper.naturalWidth * scale;
    var drawHeight = wallpaper.naturalHeight * scale;
    context.drawImage(wallpaper, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  wallpaper.addEventListener('load', paint, { once: true });
}());
