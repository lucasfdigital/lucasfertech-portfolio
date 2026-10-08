// Reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(s => io.observe(s));

// Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Balance count-up (estilo Velara balance-preview)
const balEl = document.getElementById('balance');
let target = 24850, cur = 0;
function fmt(v){ return 'R$ ' + v.toLocaleString('pt-BR'); }
const balIO = new IntersectionObserver(es => {
  if (es[0].isIntersecting) {
    const t = setInterval(() => {
      cur += Math.ceil((target - cur) / 12);
      if (cur >= target) { cur = target; clearInterval(t); }
      balEl.textContent = fmt(cur);
    }, 40);
    balIO.disconnect();
  }
}, { threshold: 0.4 });
if (balEl) balIO.observe(balEl);

// Pricing toggle mensal / projeto (estilo Velara monthly/yearly)
const btnProj = document.getElementById('btnProj');
const btnMensal = document.getElementById('btnMensal');
function setMode(mode){
  const isProj = mode === 'proj';
  btnProj.classList.toggle('active', isProj);
  btnMensal.classList.toggle('active', !isProj);
  document.querySelectorAll('.price').forEach(p => {
    p.textContent = isProj ? p.dataset.proj : p.dataset.mensal;
  });
}
btnProj.addEventListener('click', () => setMode('proj'));
btnMensal.addEventListener('click', () => setMode('mensal'));

// Form -> mailto
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('fName').value;
  const email = document.getElementById('fEmail').value;
  const type = document.getElementById('fType').value;
  const msg = document.getElementById('fMsg').value;
  const subject = encodeURIComponent(`Contato portfólio [${type}] — ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email}) [${type}]`);
  window.location.href = `mailto:contato@lucasfernandes.dev?subject=${subject}&body=${body}`;
  return false;
}
