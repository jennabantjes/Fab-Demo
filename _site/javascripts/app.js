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

    $( ".accordion" ).accordion({
      collapsible: true
    });

    $('body').on('click', '.icon-menu-1', function() {
      console.log('clicking');
      $('#top-nav > ul').toggleClass('visible');
    });

    $('body').on('click', 'header, section, #top-nav a', function(){
      console.log('clicking off');
      $('#top-nav > ul').removeClass('visible');
    });
});