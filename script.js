/* LOADER */
const ld = document.getElementById('ld'), ldp = document.getElementById('ldp');
let lv = 0;
const lt = setInterval(() => {
    lv += Math.random() * 12 + 6;
    if (lv >= 100) { lv = 100; clearInterval(lt); setTimeout(() => ld.classList.add('off'), 450); }
    ldp.textContent = Math.floor(lv) + '%';
}, 60);

/* CURSOR */
const c1 = document.getElementById('cur'), c2 = document.getElementById('cur2');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; c1.style.left = mx + 'px'; c1.style.top = my + 'px'; });
(function a() { rx += (mx - rx) * .11; ry += (my - ry) * .11; c2.style.left = rx + 'px'; c2.style.top = ry + 'px'; requestAnimationFrame(a); })();
document.querySelectorAll('a,button,.sk,.pj,.ai,.ctlk,.sa,.fsa,.sbox').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hv'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hv'));
});

/* SCROLL PROGRESS + NAV */
const pb = document.getElementById('pb'), nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    pb.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
    nav.classList.toggle('sc', scrollY > 60);
}, { passive: true });

/* MOBILE MENU */
const mBtn = document.getElementById('mBtn'), mDr = document.getElementById('mDr'), mOv = document.getElementById('mOv');
mBtn.addEventListener('click', () => {
    const o = mDr.classList.toggle('op');
    mOv.classList.toggle('op', o);
    mBtn.innerHTML = o ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
mOv.addEventListener('click', cM);
function cM() { mDr.classList.remove('op'); mOv.classList.remove('op'); mBtn.innerHTML = '<i class="fas fa-bars"></i>'; }
window.cM = cM;

/* MARQUEE */
const items = ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis', 'SQL', 'Scikit-Learn', 'Deep Learning', 'Git & GitHub', 'AI Engineering', 'Prompt Engineering', 'Pandas', 'NumPy', 'Keras'];
const mt = document.getElementById('mtrk');
mt.innerHTML = [...items, ...items].map(t => `<div class="mqi"><i class="fas fa-diamond"></i>${t}</div>`).join('');

/* TYPEWRITER */
const roles = ['Data Science Student', 'AI Enthusiast', 'ML Engineer in Progress', 'Problem Solver', 'Future Data Scientist'];
let ri = 0, ci = 0, dl = false;
const tyE = document.getElementById('tyt');
function ty() {
    const w = roles[ri];
    if (!dl) { tyE.textContent = w.slice(0, ++ci); if (ci === w.length) { dl = true; setTimeout(ty, 2000); return; } setTimeout(ty, 70); }
    else { tyE.textContent = w.slice(0, --ci); if (ci === 0) { dl = false; ri = (ri + 1) % roles.length; setTimeout(ty, 300); return; } setTimeout(ty, 36); }
}
setTimeout(ty, 1800);

/* REVEAL */
const rvO = new IntersectionObserver(entries => {
    entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), i * 80); rvO.unobserve(e.target); } });
}, { threshold: 0.07 });
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el => rvO.observe(el));

/* SKILL BARS */
const skO = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('iv'); skO.unobserve(e.target); } });
}, { threshold: 0.25 });
document.querySelectorAll('.sk').forEach(el => skO.observe(el));

/* COUNTERS */
function cUp(el, t) { let n = 0; const inc = Math.ceil(t / 28), tm = setInterval(() => { n += inc; if (n >= t) { el.textContent = t + '+'; clearInterval(tm); } else el.textContent = n + '+'; }, 46); }
const cO = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { const t = parseInt(e.target.dataset.t); if (!isNaN(t)) cUp(e.target, t); cO.unobserve(e.target); } });
}, { threshold: 0.6 });
document.querySelectorAll('.sv[data-t]').forEach(el => cO.observe(el));

/* ACTIVE NAV */
const secs = document.querySelectorAll('section[id]'), nAs = document.querySelectorAll('.nl a');
const aO = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) nAs.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); });
}, { threshold: 0.4 });
secs.forEach(s => aO.observe(s));

/* FORM */
const cFrm = document.getElementById('cFrm');
const fBtn = document.getElementById('fBtn');
const fTxt = document.getElementById('fTxt');
const fIco = document.getElementById('fIco');
cFrm.addEventListener('submit', function (e) {
    e.preventDefault();
    fTxt.textContent = 'Sending...';
    fIco.className = 'fas fa-spinner fa-spin';
    fBtn.disabled = true;
    setTimeout(function () {
        fTxt.textContent = 'Message Sent!';
        fIco.className = 'fas fa-check';
        cFrm.reset();
        setTimeout(function () {
            fTxt.textContent = 'Send Message';
            fIco.className = 'fas fa-paper-plane';
            fBtn.disabled = false;
        }, 3000);
    }, 1700);
});