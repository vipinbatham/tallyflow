
$(document).ready(function () {
  $('#menu').click(function () {
    $('#nav').toggleClass('shown');
    $('#menu').toggleClass('fa-bars fa-x ');
    
  });
});



$(document).ready(function(){

  $(".new-card").on("click",function () {
    $(".new-card").removeClass("active");
    $(this).addClass("active");
  });
  
})

$(document).ready(function () {
  $('#btn').click(function () {
      $('#price-container').toggle();
  });
});