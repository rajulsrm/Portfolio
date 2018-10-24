$(document).ready(function(){
    $('#slider-area').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        infinite: true,
        slideSpeed : 300,
        items : 1, 
    })

    $('#project-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        nav: false,
        infinite: true,
        slideSpeed : 300,
        items : 1, 
    })
  });

  function showMenu(){
    $(".nav-menubar").show();
    $(".cross-anchor").show();
    $(".icon-anchor").hide();
  }

  function hideMenu(){
    $(".nav-menubar").hide();
    $(".cross-anchor").hide();
    $(".icon-anchor").show();
  }
