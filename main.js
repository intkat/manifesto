

$(document).ready(function() {
	
	$('.js--choice_show').dblclick( function(){
		$('.hello').hide();
		$('.choice').show();
	});
	

	if($(window).width() < 1440){
		$('.js--choice_show').click( function(){
			$('.hello').hide();
			$('.choice').show();
		});
	}

	var i = 0;

	function removeImg() {
		$('.pics .img-small').removeClass('img-active');
		i=0;
		console.log("deleted");
}

	$('body').on('click', '.js--img-active', function(){
		if(!$('.pics .img-small').hasClass('img-active')) {
			setTimeout(removeImg,20000);
		}
		const imgCount = $('.pics .img-small').length;
		if ($('html').hasClass('img-active')) {
			if (i <= imgCount) {
				$('.pics .img-small').eq(i).addClass('img-active');
			}
		}
		console.log("added");
		i = i + 1;
	});

	var a = 1;

	if($('body').hasClass('manifest')) {
		$('body').on('click', '.row', function(){
			if ( a & 1 ) {
				$('.row').addClass('reverse');
				$('.container').addClass('black');
				$('.manifest').addClass('black');
				a = a+1;
			} else {
				$('.row').removeClass('reverse');
				$('.container').removeClass('black');
				$('.manifest').removeClass('black');
				a = a+1;	
			}
		})
	}
	else {
		$('body').on('click', '.row-inner', function(){
			if ( a & 1 ) {
				$('.row-inner').addClass('reverse');
				a = a+1;
			} else {
				$('.row-inner').removeClass('reverse');
				a = a+1;	
			}
		})
	}



	var count = 0;

	$('.img-small').on('click', function(){
		var src = $(this).attr('src');
		var text = $(this).attr('data-text');
		console.log(text);
		$('.img-big').attr("src", src);
		$('.img-text').text(text);
	})

	$("body").on("click", ".js--gallery-item-descr", function(){
		var imgMain = $(this).data('main-img');
		var textMain =$(this).data('text-main');
		var imgOne = $(this).data('img-1');
		var imgTwo = $(this).data('img-2');
		var textOne = $(this).data('text-1');
		var textTwo = $(this).data('text-2');
		console.log('imgMain');

		$('.js--gallery-main-img img').attr("src", imgMain);
		$('.js--gallery-main-text').text(textMain);
		$('.js--gallery-info-descr-img-first img').attr("src", imgOne);
		$('.js--gallery-info-descr-text-first').text(textOne);
		$('.js--gallery-info-descr-img-last img').attr("src", imgTwo);
		$('.js--gallery-info-descr-text-last').text(textTwo);
	})

});
