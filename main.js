

$(document).ready(function() {
	
	$('.js--content_show').dblclick( function(){
		$('.hello').addClass('hide');
		$('.row').addClass('row-active');
	});

	if($(window).width() < 1440){
		$('.js--content_show').click( function(){
			$('.hello').addClass('hide');
			$('.row').addClass('row-active');
		});
	}

	var i = 0;


	$('body').on('click', function(){
		const imgCount = $('.pics img').length;
		if ($('.hello').hasClass('hide')) {
			if (i <= imgCount) {
				$('.pics img').eq(i).addClass('img-active');
				i = i + 1;
			}
		}
	});

	var count = 0;

	$('.img-small').on('click', function(){
		var src = $(this).attr('src');
		var text = $(this).attr('data-text');
		console.log(text);
		$('.img-big').attr("src", src);
		$('.img-text').text(text);
	})

});
