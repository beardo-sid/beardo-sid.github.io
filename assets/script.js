const searchItems = [
  { section: 'Page', title: 'Home', text: 'backend systems modernization security', url: 'index.html' },
  { section: 'Page', title: 'Projects', text: 'AI dependency uplift toolkit modernization CVE testing observability', url: 'projects.html' },
  { section: 'Page', title: 'Work', text: 'Oracle Health Cerner Healthcare Software Engineer timeline', url: 'work.html' },
  { section: 'Page', title: 'About', text: 'skills Java Spring Boot microservices CI/CD AWS Docker Kubernetes', url: 'about.html' },
  { section: 'Page', title: 'Resume', text: 'download PDF Siddharth Srivastava resume', url: 'resume.html' },
  { section: 'Page', title: 'Contact', text: 'email LinkedIn phone get in touch', url: 'contact.html' },
  { section: 'Project', title: 'AI Dependency Uplift Toolkit', text: 'Oracle Hackathon automation 80 percent upgrade reduction', url: 'projects.html#ai-uplift-toolkit' },
  { section: 'Project', title: 'Framework Modernization Program', text: '200 repositories dependency uplift Spring Boot Java', url: 'projects.html#framework-modernization' },
  { section: 'Project', title: 'CVE Remediation Workstream', text: '2000 CVEs security scanning compliance', url: 'projects.html#security-remediation' },
  { section: 'Project', title: 'Test Coverage Uplift', text: 'JUnit Mockito Postman integration testing 60 to 90 percent', url: 'projects.html#quality-uplift' },
  { section: 'Work', title: 'Application Software Engineer - Oracle Health', text: 'Mar 2024 present modernization vulnerability CI/CD production support', url: 'work.html#oracle-health-application-software-engineer' },
  { section: 'Work', title: 'Software Engineer - Oracle Health', text: 'Jun 2022 Mar 2024 microservices Spring Security Hibernate', url: 'work.html#oracle-health-software-engineer' },
  { section: 'Work', title: 'Software Engineer - Cerner Healthcare', text: 'Aug 2020 Jun 2022 REST APIs healthcare testing', url: 'work.html#cerner-software-engineer' }
];

const modal = document.querySelector('[data-search-modal]');
const input = document.querySelector('[data-search-input]');
const results = document.querySelector('[data-search-results]');
const triggers = document.querySelectorAll('[data-search-open]');
const closeButton = document.querySelector('[data-search-close]');
const menuButton = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

function renderResults(query = '') {
  if (!results) return;
  const normalized = query.trim().toLowerCase();
  const filtered = searchItems.filter((item) => {
    const haystack = `${item.section} ${item.title} ${item.text}`.toLowerCase();
    return !normalized || haystack.includes(normalized);
  }).slice(0, 10);

  results.innerHTML = filtered.map((item) => `
    <a class="search-result" href="${item.url}">
      <span>${item.section}</span>
      <strong>${item.title}</strong>
    </a>
  `).join('') || '<p class="form-note" style="padding: 1rem;">No results. Try Java, Oracle, CVE, testing, or resume.</p>';
}

function openSearch() {
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  renderResults(input ? input.value : '');
  window.setTimeout(() => input && input.focus(), 50);
}

function closeSearch() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

triggers.forEach((trigger) => trigger.addEventListener('click', openSearch));
if (closeButton) closeButton.addEventListener('click', closeSearch);
if (input) input.addEventListener('input', (event) => renderResults(event.target.value));
if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeSearch();
  });
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.metaKey || event.ctrlKey) && key === 'k') {
    event.preventDefault();
    openSearch();
  }
  if (key === 'escape') {
    closeSearch();
    if (mobileNav) mobileNav.classList.remove('open');
  }
});

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const message = encodeURIComponent(data.get('message') || '');
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:sid98sksofficial@gmail.com?subject=Portfolio%20message%20from%20${name}&body=${body}`;
  });
}

function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let frame = 0;
  let raf = null;
  const labels = ['Java', 'Spring', 'REST', 'CI/CD', 'CVE', 'Tests', 'APM', 'K8s'];
  const nodes = labels.map((label, index) => ({ label, index, orbit: 95 + (index % 3) * 43 }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    const cx = width / 2;
    const cy = height / 2;
    const t = frame / 80;

    context.save();
    context.translate(cx, cy);

    for (let i = 0; i < 4; i += 1) {
      context.beginPath();
      context.ellipse(0, 0, 92 + i * 45, 26 + i * 14, (i * Math.PI) / 5 + t * 0.08, 0, Math.PI * 2);
      context.strokeStyle = `rgba(148, 163, 184, ${0.08 + i * 0.035})`;
      context.lineWidth = 1;
      context.stroke();
    }

    const positions = nodes.map((node) => {
      const angle = t * (0.42 + node.index * 0.02) + node.index * (Math.PI * 2 / nodes.length);
      const x = Math.cos(angle) * node.orbit;
      const y = Math.sin(angle) * (node.orbit * 0.42);
      return { ...node, x, y, angle };
    });

    for (let i = 0; i < positions.length; i += 1) {
      const a = positions[i];
      const b = positions[(i + 3) % positions.length];
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.strokeStyle = 'rgba(94, 234, 212, 0.08)';
      context.lineWidth = 1;
      context.stroke();
    }

    positions.forEach((node) => {
      context.beginPath();
      context.arc(node.x, node.y, 4.5, 0, Math.PI * 2);
      context.fillStyle = 'rgba(94, 234, 212, 0.95)';
      context.shadowColor = 'rgba(94, 234, 212, 0.75)';
      context.shadowBlur = 18;
      context.fill();
      context.shadowBlur = 0;
      context.font = '12px SFMono-Regular, Consolas, monospace';
      context.fillStyle = 'rgba(226, 232, 240, 0.78)';
      context.fillText(node.label, node.x + 9, node.y - 9);
    });

    context.restore();
    frame += 1;
    if (!reduceMotion) raf = window.requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) draw();
  });
  return () => raf && window.cancelAnimationFrame(raf);
}

initHeroCanvas();
renderResults();
