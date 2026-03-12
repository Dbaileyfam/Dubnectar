(function () {
  'use strict';

  var layer = document.getElementById('smoke-layer');
  if (!layer) return;

  var blobs = layer.querySelectorAll('.smoke-blob');
  if (!blobs.length) return;

  var mouse = { x: 0.5, y: 0.5 };
  var target = { x: 0.5, y: 0.5 };
  var start = Date.now();

  function onMove(e) {
    target.x = e.clientX / window.innerWidth;
    target.y = e.clientY / window.innerHeight;
  }

  function onTouch(e) {
    if (e.touches.length) {
      target.x = e.touches[0].clientX / window.innerWidth;
      target.y = e.touches[0].clientY / window.innerHeight;
    }
  }

  function animate() {
    var t = (Date.now() - start) / 1000;
    mouse.x += (target.x - mouse.x) * 0.03;
    mouse.y += (target.y - mouse.y) * 0.03;

    blobs.forEach(function (blob, i) {
      var pull = 0.08 + (i % 4) * 0.02;
      var mouseX = (mouse.x - 0.5) * 35 * (i * 0.7 + 1);
      var mouseY = (mouse.y - 0.5) * 35 * (i * 0.7 + 1);
      var driftX = Math.sin(t * 0.15 + i * 1.2) * 12 + Math.sin(t * 0.08 + i) * 8;
      var driftY = Math.cos(t * 0.12 + i * 0.9) * 10 + Math.cos(t * 0.1 + i * 1.5) * 6;
      var baseRot = parseFloat(blob.dataset.rotation || 0);
      var rot = baseRot + Math.sin(t * 0.07 + i) * 3;
      var x = parseFloat(blob.dataset.x || 0) + (mouseX + driftX - parseFloat(blob.dataset.x || 0)) * pull;
      var y = parseFloat(blob.dataset.y || 0) + (mouseY + driftY - parseFloat(blob.dataset.y || 0)) * pull;
      blob.dataset.x = x;
      blob.dataset.y = y;
      blob.style.transform = 'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px)) rotate(' + rot + 'deg)';
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('touchmove', onTouch, { passive: true });
  requestAnimationFrame(animate);
})();
