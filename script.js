// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message){
    formMessage.textContent = 'Thank you! Your message has been sent.';
    formMessage.style.color = 'green';
    contactForm.reset();
  } else {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  }
});
