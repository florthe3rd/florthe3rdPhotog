AOS.init();

$(document).ready(function(){


//nav toggle 
		$('.toggle').on("click", function(){
			$('.display').toggleClass('active');
			$('.toggle').toggleClass('active');
			$('.overlay').toggleClass('active');
		});
		$('nav ul li a').on("click", function(){
					$('.display').removeClass('active');
					$('.toggle').removeClass('active');
					$('.overlay').removeClass('active');
			});


//pic scroll lock
		$('.scroll').click(function(){
				$('body').css({
					"overflow":"hidden"
				});
		});


//pic scroll unlock
		//	
		$('.lb-close').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});
		$('.lightboxOverlay').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});

		$('.lightbox').click(function(){
			$('body').css({
					"overflow":"auto"
				});
		});
});

	
