// ピザって呼んで — card tilt, grab-to-flip, cursor trail

(function () {
  'use strict';

  var fine = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  var card = document.getElementById('card');
  var desk = document.getElementById('desk');

  /* ---------- 3D tilt + grab-to-flip ---------- */

  if (fine && card) {
    var glare = document.createElement('div');
    glare.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:50;opacity:0';
    card.appendChild(glare);

    // bank-card thickness: thin slabs stacked behind the face
    var edges = [];
    for (var i = 1; i <= 9; i++) {
      var s = document.createElement('div');
      s.style.cssText = 'position:absolute;inset:-1px;pointer-events:none;background:#DFE0DD;border:1px solid #232423;transform:translateZ(' + (-i * 1.2) + 'px)';
      card.insertBefore(s, card.firstChild);
      edges.push(s);
    }

    var tx = 0, ty = 0, cx = 0, cy = 0, vx = 0, vy = 0, raf = null;
    var rot = 0, rotTarget = 0, rv = 0, cs = 1;
    var dragging = false, armed = false, pid = null, dragX = 0, rotStart = 0, moved = 0, onBack = false;

    function loop() {
      // slow damped spring — gentle approach, no snap
      vx = vx * 0.9 + (tx - cx) * 0.008;
      vy = vy * 0.9 + (ty - cy) * 0.008;
      cx += vx;
      cy += vy;
      if (!dragging) { rv = rv * 0.9 + (rotTarget - rot) * 0.014; rot += rv; }

      var n = ((rot % 360) + 360) % 360;
      var back = n > 90 && n < 270;
      if (back !== onBack) {
        onBack = back;
        document.body.classList.toggle('flipped', back);
        desk.classList.toggle('flipped', back);
        edges.forEach(function (s, i) {
          s.style.transform = 'translateZ(' + ((back ? 1 : -1) * (i + 1) * 1.2) + 'px)';
        });
      }

      cs += ((dragging ? 1.02 : 1) - cs) * 0.08;
      card.style.transform =
        'rotateX(' + cy.toFixed(2) + 'deg) rotateY(' + (rot + cx).toFixed(2) + 'deg)' +
        (back ? ' scaleX(-1)' : '') + ' scale(' + cs.toFixed(4) + ')';

      var fx = (cx / 18 + 0.5) * 100;
      var fy = (0.5 - cy / 14) * 100;
      var amt = Math.min(1, Math.abs(cx) / 18 + Math.abs(cy) / 14);
      glare.style.opacity = (amt * 0.85).toFixed(2);
      glare.style.background =
        'radial-gradient(560px circle at ' + fx.toFixed(1) + '% ' + fy.toFixed(1) + '%, ' +
        'rgba(255,255,255,0.55) 0%, rgba(233,234,232,0.18) 34%, rgba(35,36,35,0.10) 100%)';

      if (dragging ||
          Math.abs(cx - tx) > 0.02 || Math.abs(cy - ty) > 0.02 ||
          Math.abs(vx) > 0.02 || Math.abs(vy) > 0.02 ||
          Math.abs(rot - rotTarget) > 0.05 || Math.abs(rv) > 0.05 ||
          Math.abs(cs - (dragging ? 1.02 : 1)) > 0.001) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }

    function kick() { if (!raf) raf = requestAnimationFrame(loop); }

    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 18;
      ty = -((e.clientY - r.top) / r.height - 0.5) * 14;
      kick();
    });
    card.addEventListener('mouseleave', function () { tx = 0; ty = 0; kick(); });

    card.addEventListener('pointerdown', function (e) {
      armed = true; dragging = false; moved = 0; dragX = e.clientX; rotStart = rot; pid = e.pointerId;
    });
    card.addEventListener('pointermove', function (e) {
      if (!armed) return;
      var dx = e.clientX - dragX;
      if (Math.abs(dx) > moved) moved = Math.abs(dx);
      if (!dragging && moved > 6) {
        // only start grabbing (and capturing) once it's clearly a drag, so plain clicks stay clicks
        dragging = true;
        card.style.userSelect = 'none';
        try { card.setPointerCapture(pid); } catch (err) {}
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
    card.addEventListener('click', function (e) {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
    }, true);
    card.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  /* ---------- cursor + dithered pixel trail ---------- */

  if (fine) {
    var cv = document.createElement('canvas');
    cv.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999';
    document.body.appendChild(cv);
    var ctx = cv.getContext('2d');

    function resize() { cv.width = window.innerWidth; cv.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    var TRAIL_COLOR = '#3A3B39';
    var parts = [];
    var mouse = { x: -100, y: -100 };

    window.addEventListener('mousemove', function (e) {
      mouse = { x: e.clientX, y: e.clientY };
      parts.push({
        x: e.clientX + (Math.random() * 10 - 5),
        y: e.clientY + (Math.random() * 10 - 5),
        life: 1
      });
      if (parts.length > 260) parts.splice(0, parts.length - 260);
    });

    var arrow = new Path2D('M2 1 C2 0.2 2.8 -0.2 3.4 0.3 L14.5 10.2 C15.2 10.8 14.8 12 13.9 12 L9.6 12.1 L11.9 17.2 C12.2 17.9 11.9 18.7 11.2 19 L9.9 19.5 C9.2 19.8 8.4 19.5 8.1 18.8 L5.9 13.7 L3.1 16.7 C2.5 17.4 1.3 17 1.3 16 Z');

    function trailLoop() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      var g = 6;
      for (var i = 0; i < parts.length; i++) {
        var pt = parts[i];
        pt.life -= 0.028;
        if (pt.life <= 0) continue;
        ctx.globalAlpha = Math.max(0, pt.life) * 0.8;
        ctx.fillStyle = TRAIL_COLOR;
        ctx.fillRect(Math.round(pt.x / g) * g, Math.round(pt.y / g) * g, g, g);
      }
      parts = parts.filter(function (pt) { return pt.life > 0; });

      ctx.globalAlpha = 1;
      ctx.save();
      ctx.translate(mouse.x, mouse.y);
      ctx.scale(1.15, 1.15);
      ctx.fillStyle = '#FBFCFA';
      ctx.fill(arrow);
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = '#232423';
      ctx.lineJoin = 'round';
      ctx.stroke(arrow);
      ctx.restore();

      requestAnimationFrame(trailLoop);
    }
    requestAnimationFrame(trailLoop);
  }
})();
