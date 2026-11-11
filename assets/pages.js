// inner pages: header state, mobile menu, scroll reveal
(function () {
  var top = document.querySelector('.top'), nav = document.querySelector('.top nav'), bur = document.querySelector('.burger');
  var onScroll = function () { top.classList.toggle('sc', window.scrollY > 40); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (bur) bur.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); bur.setAttribute('aria-expanded', String(o)); document.body.style.overflow = o ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); if (bur) bur.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }); });
  var els = document.querySelectorAll('[data-r],.h1,.h2,.stg');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      if (el.classList.contains('stg')) [].forEach.call(el.children, function (c, i) { c.style.transitionDelay = (i * 0.07) + 's'; });
      el.classList.add('in'); io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (e) { io.observe(e); });
})();
