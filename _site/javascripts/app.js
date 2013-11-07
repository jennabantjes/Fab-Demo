var mouse_inside = false;

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
  });

    var activateAccordion = function () {
        $( ".accordion" ).accordion({
        collapsible: true,
        active: false
      });
      };

    activateAccordion();

    $('.popup-nav, #top-nav').hover( function () {
        mouse_inside = true;
    }, function () {
        mouse_inside = false;
    });

    $('body').click( function() {
        if (!mouse_inside) {
            $('.accordion').accordion({active: '-1'});
        }
    });

    $('body').on('click', '.icon-menu-1', function() {
      console.log('clicking');
      $('#top-nav > ul').toggleClass('visible');
    });

    // $('body').on('click', 'header, section, #top-nav a', function(){
    //   console.log('clicking off');
    //   $('#top-nav > ul').removeClass('visible');
    // });

    // $('.sticky-area').waypoint(function(direction) {
    //   $(this).addClass('sticky');
    // });



});