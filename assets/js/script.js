window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');

  } else {
    navbar.classList.remove('scrolled');

  }
});

$(document).ready(function () {
  $('#menu').click(function () {
    $('#nav').toggleClass('hidden');
    $('#menu').toggleClass('fa-x');
  });
});





