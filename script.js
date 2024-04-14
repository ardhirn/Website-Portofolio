// Select elements
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar');

// Add event listener
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// halaman contact start
$(document).ready(function(){
  $('#contactForm').submit(function(e){
    e.preventDefault();

    var fullname = $('#fullname').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var valid = true;

    $('.error').remove();

    if(fullname.length > 50) {
      $('#fullname').after('<span class="error">Full name must be less than 50 characters</span>');
      valid = false;
    }

    if(!isValidEmail(email)) {
      $('#email').after('<span class="error">Enter a valid email address</span>');
      valid = false;
    }

    if(phone.length < 10 || phone.length > 15) {
      $('#phone').after('<span class="error">Phone number must be between 10 and 15 digits</span>');
      valid = false;
    }

    if(message.length > 500) {
      $('#message').after('<span class="error">Message must be less than 500 characters</span>');
      valid = false;
    }

    if(valid) {
      // Jika semua validasi terpenuhi, kirim formulir
      $('#contactForm')[0].submit();
    }
  });

  // Fungsi untuk memeriksa validitas email menggunakan regex
  function isValidEmail(email) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }
});

// halaman contact end
