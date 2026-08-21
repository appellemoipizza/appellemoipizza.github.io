// Physical interaction grammar shared by the deeper portfolio.
// The authored visit-card at / remains its own reference implementation.
(function () {
  'use strict';

  var fine = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduced) return;

  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-physical-card]'));

  cards.forEach(function (card) {
    var glare = document.createElement('div');
    glare.className = 'physical-glare';
    card.appendChild(glare);

    var edges = [];
    for (var i = 1; i <= 7; i++) {
      var edge = document.createElement('div');
      edge.className = 'physical-edge';
      edge.style.transform = 'translateZ(' + (-i * 0.85) + 'px)';
      card.insertBefore(edge, card.firstChild);
      edges.push(edge);
    }

    var tx = 0, ty = 0, cx = 0, cy = 0, vx = 0, vy = 0;
    var rot = 0, rotTarget = 0, rv = 0, scale = 1;
    var dragging = false, armed = false, pointerId = null;
    var dragX = 0, rotStart = 0, moved = 0, onBack = false, raf = null;

    function loop() {
      vx = vx * 0.9 + (tx - cx) * 0.009;
      vy = vy * 0.9 + (ty - cy) * 0.009;
      cx += vx;
      cy += vy;
      if (!dragging) {
        rv = rv * 0.9 + (rotTarget - rot) * 0.014;
        rot += rv;
      }

      var n = ((rot % 360) + 360) % 360;
      var back = n > 90 && n < 270;
      if (back !== onBack) {
        onBack = back;
        card.classList.toggle('is-back', back);
        edges.forEach(function (edge, index) {
          edge.style.transform = 'translateZ(' + ((back ? 1 : -1) * (index + 1) * 0.85) + 'px)';
        });
      }

      scale += ((dragging ? 1.012 : 1) - scale) * 0.08;
      card.style.transform =
        'rotateX(' + cy.toFixed(2) + 'deg) rotateY(' + (rot + cx).toFixed(2) + 'deg)' +
        (back ? ' scaleX(-1)' : '') + ' scale(' + scale.toFixed(4) + ')';

      var fx = (cx / 14 + 0.5) * 100;
      var fy = (0.5 - cy / 10) * 100;
      var amt = Math.min(1, Math.abs(cx) / 14 + Math.abs(cy) / 10);
      glare.style.opacity = (amt * 0.72).toFixed(2);
      glare.style.background =
        'radial-gradient(420px circle at ' + fx.toFixed(1) + '% ' + fy.toFixed(1) + '%, ' +
        'rgba(255,255,255,.55) 0%, rgba(233,234,232,.14) 38%, rgba(35,36,35,.08) 100%)';

      if (dragging || Math.abs(cx - tx) > .02 || Math.abs(cy - ty) > .02 ||
          Math.abs(vx) > .02 || Math.abs(vy) > .02 || Math.abs(rot - rotTarget) > .05 ||
          Math.abs(rv) > .05 || Math.abs(scale - (dragging ? 1.012 : 1)) > .001) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }

    function kick() { if (!raf) raf = requestAnimationFrame(loop); }

    card.addEventListener('mousemove', function (event) {
      var r = card.getBoundingClientRect();
      tx = ((event.clientX - r.left) / r.width - .5) * 14;
      ty = -((event.clientY - r.top) / r.height - .5) * 10;
      kick();
    });

    card.addEventListener('mouseleave', function () { tx = 0; ty = 0; kick(); });

    card.addEventListener('pointerdown', function (event) {
      armed = true;
      dragging = false;
      moved = 0;
      dragX = event.clientX;
      rotStart = rot;
      pointerId = event.pointerId;
    });

    card.addEventListener('pointermove', function (event) {
      if (!armed) return;
      var dx = event.clientX - dragX;
      if (Math.abs(dx) > moved) moved = Math.abs(dx);
      if (!dragging && moved > 6) {
        dragging = true;
        card.style.userSelect = 'none';
        try { card.setPointerCapture(pointerId); } catch (error) {}
      }
      if (!dragging) return;
      rot = rotStart + dx * 0.45;
      kick();
    });

    function endDrag() {
      armed = false;
      if (!dragging) return;
      dragging = false;
      card.style.userSelect = '';
      rotTarget = Math.round(rot / 180) * 180;
      rv = 0;
      kick();
    }

    card.addEventListener('pointerup', endDrag);
    card.addEventListener('pointercancel', endDrag);
    card.addEventListener('dragstart', function (event) { event.preventDefault(); });
    card.addEventListener('click', function (event) {
      if (moved > 6) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
  });

  // Same dithered cursor/trail idea as the authored entry card, slightly calmer
  // so long-form reading remains comfortable.
  var canvas = document.createElement('canvas');
  canvas.className = 'portfolio-cursor';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var parts = [];
  var mouse = { x: -100, y: -100 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    parts.push({
      x: event.clientX + (Math.random() * 8 - 4),
      y: event.clientY + (Math.random() * 8 - 4),
      life: 1
    });
    if (parts.length > 170) parts.splice(0, parts.length - 170);
  });

  var arrow = new Path2D('M2 1 C2 .2 2.8 -.2 3.4 .3 L14.5 10.2 C15.2 10.8 14.8 12 13.9 12 L9.6 12.1 L11.9 17.2 C12.2 17.9 11.9 18.7 11.2 19 L9.9 19.5 C9.2 19.8 8.4 19.5 8.1 18.8 L5.9 13.7 L3.1 16.7 C2.5 17.4 1.3 17 1.3 16 Z');

  function cursorLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var grid = 6;
    for (var i = 0; i < parts.length; i++) {
      var pt = parts[i];
      pt.life -= .035;
      if (pt.life <= 0) continue;
      ctx.globalAlpha = Math.max(0, pt.life) * .62;
      ctx.fillStyle = '#3A3B39';
      ctx.fillRect(Math.round(pt.x / grid) * grid, Math.round(pt.y / grid) * grid, grid, grid);
    }
    parts = parts.filter(function (pt) { return pt.life > 0; });

    ctx.globalAlpha = 1;
    ctx.save();
    ctx.translate(mouse.x, mouse.y);
    ctx.scale(1.08, 1.08);
    ctx.fillStyle = '#FBFCFA';
    ctx.fill(arrow);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#232423';
    ctx.lineJoin = 'round';
    ctx.stroke(arrow);
    ctx.restore();

    requestAnimationFrame(cursorLoop);
  }
  requestAnimationFrame(cursorLoop);
})();
