$(document).ready(function() {

    $('#search').blur(function(){
        $(this).removeClass("selected");
        $('.icon-search').removeClass('selected');
      })
             .focus(function() {
               $(this).addClass("selected")
               $('.icon-search').addClass('selected');
      });

  $(".owl-carousel").owlCarousel({

      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

    $(".main-rotator").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  var revealNav = function(navId){
    $('body').on('mouseover', navId, function(){

      console.log(navId);
      $('.popup-nav').removeClass('visible');
      $(navId+'-nav').addClass('visible');

    });

    $('body').on('click', function(){

      $('.popup-nav').removeClass('visible');

    });
  };

  revealNav('#women');
  //revealNav('#men');
});