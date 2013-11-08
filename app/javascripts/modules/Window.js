var Window = {

	init: function () {

		this.resizeWindow();

	},

	resizeWindow : function(){

		$(window).resize(function() {
				if(this.resizeTO) clearTimeout(this.resizeTO);
				this.resizeTO = setTimeout(function() {
						$(this).trigger('resizeEnd');
				}, 500);
		});

		$(window).bind('resizeEnd', function() {
				location.reload();
		});
	}
};