(function () {
  'use strict';

  var layer = document.getElementById('smoke-layer');
  if (!layer) return;

  var blobs = layer.querySelectorAll('.smoke-blob');
  if (!blobs.length) return;

  var mouse = { x: 0.5, y: 0.5 };
  var target = { x: 0.5, y: 0.5 };
  var raf = 0;

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
    mouse.x += (target.x - mouse.x) * 0.04;
    mouse.y += (target.y - mouse.y) * 0.04;

    blobs.forEach(function (blob, i) {
      var pull = 0.12 + (i % 3) * 0.04;
      var offsetX = (mouse.x - 0.5) * 25 * (i + 1);
      var offsetY = (mouse.y - 0.5) * 25 * (i + 1);
      var x = parseFloat(blob.dataset.x || 0) + (offsetX - parseFloat(blob.dataset.x || 0)) * pull;
      var y = parseFloat(blob.dataset.y || 0) + (offsetY - parseFloat(blob.dataset.y || 0)) * pull;
      blob.dataset.x = x;
      blob.dataset.y = y;
      blob.style.transform = 'translate(calc(-50% + ' + x + 'px), calc(-50% + ' + y + 'px))';
    });

    raf = requestAnimationFrame(animate);
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('touchmove', onTouch, { passive: true });
  raf = requestAnimationFrame(animate);
})();
