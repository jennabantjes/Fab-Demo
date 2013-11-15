var Nav = {

	init: function () {

		this.showNavIcon();

		this.toggleMenu();

		this.stickNav();

	},

	showNavIcon : function () {

		$('#search').blur(function(){
			$(this).removeClass("selected");
			$('.icon-search').removeClass('selected');
		})
			.focus(function() {
			$(this).addClass("selected");
			$('.icon-search').addClass('selected');
		});
	},

	toggleMenu : function () {

		$('body').on('click', '.icon-menu-1', function() {
			$('#top-nav > ul').toggleClass('visible');
		});

		$('body').on('click', 'header, section', function(){
			$('#top-nav > ul').removeClass('visible');
		});
	},

	stickNav : function () {

		$(window).on('resize', function(){
		// window.addEventListener("resize", function () {

			size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

			if(size && size.indexOf("largescreen") !=-1) {

				console.log('sticky');

				$('.sticky-area').waypoint(function(up) {
					$(this).toggleClass('sticky');
					$('.meta').toggleClass('nav-fixed');
				});

			}

			else {
				console.log('unsticky');
				$('.sticky-area').unbind();
			}

			//}, false);

		}).resize();

	}

};