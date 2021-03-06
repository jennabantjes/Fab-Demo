var Accordion = {

	init: function () {

		this.triggerAccordion();

		this.closeAccordion();

	},

	triggerAccordion : function () {

		var trigger = '.accordion-trigger',
			content = 'accordion-content';

		$(trigger).on('click',function(e) {
			e.preventDefault();
			// console.log('clicked');

			$(this).parent().attr('id');

			if($(this).hasClass('is-open')) {

				$(this).removeClass('is-open');
				console.log('open');
			}

			else {
				$('.accordion-trigger').removeClass('is-open');
				$(this).addClass('is-open');
				console.log('closed');

			} // if is-open

		}); // click
	},

	closeAccordion : function () {

		if($('.accordion').length > 0){

			$(window).on('resize', function(){
			// window.addEventListener("resize", function () {

				console.log('resize');

				size = window.getComputedStyle(document.body,':before').getPropertyValue('content');

				if(size && size.indexOf("largescreen") !=-1) {

					$('#top-nav').mouseleave(function() {
						$('.accordion-trigger').removeClass('is-open');
					});

				}

				else {
					$('#top-nav').unbind();
				}

				//}, false);

			}).resize();
		}
	}

};