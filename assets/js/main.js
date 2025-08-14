// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Client-side form validation + placeholder submit
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const consent = form.querySelector('#consent');
    if (!consent.checked) {
      status.textContent = 'Zaznacz zgodę RODO.';
      return;
    }
    // Basic HTML5 validity
    if (!form.checkValidity()) {
      status.textContent = 'Uzupełnij wymagane pola.';
      return;
    }

    // Replace with your integration (Formspree/EmailJS). See README.md.
    status.textContent = 'Wysyłam...';
    try {
      await new Promise(r => setTimeout(r, 600));
      status.textContent = 'Dziękuję. Odezwię się wkrótce.';
      form.reset();
    } catch (err) {
      status.textContent = 'Błąd wysyłki. Spróbuj ponownie.';
    }
  });
}
