var Accordion = {

	init: function () {

		this.checkSize();

		this.triggerAccordion();

	},

		triggerAccordion : function () {

		var trigger = '.accordion-trigger',
			content = 'accordion-content';

		$(trigger).on('click',function(e) {
			e.preventDefault();
			console.log('clicked');

			if($(content).hasClass('is-open')) {

				$(this).removeClass('is-open');
				console.log('open');

			}

			else {

				$(this).addClass('is-open');
				console.log('closed');

			} // if is-open

		}); // click
	},

	checkSize : function () {

		if($('.accordion').length > 0){

			$(window).on('resize', function(){
			// window.addEventListener("resize", function () {

				size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

				if(size && size.indexOf("smallscreen") !=-1) {
					console.log('create');
				} else {
					console.log('destroy');
				}// if

				//}, false);

			});
		}
	}

};