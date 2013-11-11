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

		$('.sticky-area').waypoint(function(direction) {
			$(this).toggleClass('sticky');
			$('.meta').toggleClass('nav-fixed');
		});
	}

};