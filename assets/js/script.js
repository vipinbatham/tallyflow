window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
 
  if (window.scrollY > 50) {
    navbar.classList.add('fixed-top');
   lo
  } else {
    navbar.classList.remove('fixed-top');
    
  }
});

$(document).ready(function () {
  $('#menu').click(function () {
    $('#nav').toggleClass('hidden');
    $('#menu').toggleClass('fa-x');
    
  });
});





