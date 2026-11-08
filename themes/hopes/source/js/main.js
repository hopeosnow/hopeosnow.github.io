// 滚动淡入动画
(function () {
  var els = document.querySelectorAll('.fade-in');
  function check() {
    els.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('load', check);
  check();
})();
