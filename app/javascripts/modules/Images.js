var Images = {

	init: function () {

		this.rotateImages();

	},

	rotateImages : function() {

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

	}
};

