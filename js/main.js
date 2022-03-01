$(function () {



  // Owl carousal 
  $('#slider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
    }
  });




  // slider nav buttons 
  $('#slider span[aria-label="Previous"]').html('<i class="fas fa-chevron-left"></i>');
  $('#slider span[aria-label="Next"]').html('<i class="fas fa-chevron-right"></i>');
  // Owl carousal 
  $('#slider2').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
      },
    }
  });




  // slider nav buttons 
  $('#slider2 span[aria-label="Previous"]').html('<i class="fas fa-chevron-left"></i>');
  $('#slider2 span[aria-label="Next"]').html('<i class="fas fa-chevron-right"></i>');
});