(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Go to TOP
	$('.btn_gotop').click(function(){
		$('html, body').animate({scrollTop:0},1000);
		return false;
	});

	// Go to TOP HIDE
	$window.scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.btn_gotop').show();
		} else{
			$('.btn_gotop').hide();
		}
	});

	// nav menu Btn
	const toggleBtn = document.querySelector('.navBtn');
	const menu = document.querySelector('#menu');

	toggleBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
		toggleBtn.classList.toggle('active')
	});

})(jQuery);