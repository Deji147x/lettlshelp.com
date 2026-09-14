// Mobile navigation + wireframe-notes toggle. No other JavaScript is needed.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  var key = 'tls-wireframe-notes';
  var button = document.querySelector('.wf-toggle');
  function setNotes(on) {
    document.body.classList.toggle('show-notes', on);
    if (button) {
      button.setAttribute('aria-pressed', String(on));
      button.textContent = on ? 'Hide wireframe notes' : 'Show wireframe notes';
    }
    try { localStorage.setItem(key, on ? '1' : '0'); } catch (e) {}
  }
  var saved = false;
  try { saved = localStorage.getItem(key) === '1'; } catch (e) {}
  setNotes(saved);
  if (button) {
    button.addEventListener('click', function () {
      setNotes(!document.body.classList.contains('show-notes'));
    });
  }
})();
