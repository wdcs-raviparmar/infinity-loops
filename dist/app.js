const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open menu');
}
menu.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menu.focus();
  }
});
document.querySelectorAll('[data-plan]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#plan-select').value = button.dataset.plan;
    document.querySelector('#contact').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    document.querySelector('input[name="name"]').focus({ preventScroll: true });
  });
});
const dialog = document.querySelector('#enquiry-dialog');
let brief = '';
document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  brief = `INFINITY LOOPS — ENQUIRY BRIEF\n\nName: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}\nBrand: ${data.get('business').trim()}\nPackage: ${data.get('plan')}\n\nGoals:\n${data.get('goals').trim()}\n\nDemo preview only. This enquiry has not been sent.`;
  document.querySelector('#brief-preview').textContent = brief;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
document.querySelector('#download-brief').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'infinity-loops-enquiry.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
