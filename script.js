document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Form submission handler
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Validate form fields
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
          alert('Please fill out all fields.');
          return;
      }

      // Prepare form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach(function (value, key) {
          data[key] = value;
      });

      // Simulate form submission (for demonstration)
      console.log('Form submitted:', data);

      // Clear form fields after submission
      form.reset();

      // Show feedback submission confirmation modal
      const modal = document.getElementById('modal');
      modal.style.display = 'block';

      // Close modal after 3 seconds
      setTimeout(function () {
          modal.style.display = 'none';
      }, 3000);
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', function (event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
