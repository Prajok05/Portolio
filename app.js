$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    // $('.carousel.carousel-slider').carousel({
    //   fullWidth: true,
    //   indicators: true
    // });
    $(".slider").slider({ full_width: true });  
    $('.parallax').parallax()
    $('.carousel').carousel({
      padding:50,
    });
  });

function modalTrigger(){
    var inst=M.Modal.getInstance($('#modal1'))
    inst.open()
}