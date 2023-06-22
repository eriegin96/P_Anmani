export const setting = {
	draggable: false,
	dots: false,
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
