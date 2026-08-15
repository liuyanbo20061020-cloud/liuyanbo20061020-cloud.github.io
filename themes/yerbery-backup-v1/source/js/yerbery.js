(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var menuToggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  var progress = document.getElementById('reading-progress');
  var year = document.getElementById('current-year');

  if (year) year.textContent = new Date().getFullYear();

  var saved = localStorage.getItem('yerbery-theme');
  if (saved) root.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('yerbery-theme', next);
    });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function updateProgress() {
    if (!progress || !document.querySelector('.article-content')) return;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    progress.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
