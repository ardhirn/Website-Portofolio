// Select elements
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar');

// Add event listener
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
