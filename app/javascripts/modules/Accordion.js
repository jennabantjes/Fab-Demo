var Accordion = {

	init: function () {

		this.activateAccordion();

		this.closeAccordion();

	},

	activateAccordion : function () {
			$( ".accordion" ).accordion({
			collapsible: true,
			active: false
		});
	},

	closeAccordion : function () {

		$('.popup-nav, #top-nav').hover( function () {
			mouse_inside = true;
		}, function () {
			mouse_inside = false;
		});

		$('section, header').click( function() {
			if (!mouse_inside) {
					$('.accordion').accordion({active: '-1'});
			}
		});
	}

};