$( document ).ready(function() {
	//for burger
	$('.menu-burger').on('click', function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});


	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 400);
	    return false;
	});
	
	//for bug with 100vh on mobile
	let h = window.innerHeight;
	let w = window.innerWidth;
	const head = document.querySelector('.head');
	if(w <= 425){;
	 	head.style.height = h +"px";
	}
	else{
		head.style.height = 100 +"vh";
	}
	//for header padding
	let headerHeight = $('.header').height();

		
	$('.head').css('padding-top', headerHeight + 'px');
	//articles-slider
	$('.articles-slider').slick({
		slidesToShow: 3,
		arrows: true,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 994,
		      settings: {
		        slidesToShow: 2,
		        dots: true,
		        arrows: false
		      }
		    },
		     {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        dots: true,
		        arrows: false
		        
		      }
		    }
 		 ]
	});

	//clients-slider
	$('.clients-slider').slick({
		slidesToShow: 4,
		dots: false,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 860,
		      settings: {
		        slidesToShow: 3,
		        dots: true,
		         arrows: false
		      }
		    },
		     {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        dots: true,
		        arrows: false
		        
		      }
		    }
 		 ]
	});
	//portfolio-slider
	$('.portfolio-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 640,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		        
		      }
		    },
		     {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
 		 ]
	});

	$('.consult-slider').slick({
		fade: true,
		dots: false,
		arrows: false,
		autoplay: true
	});
	$('.blog-slider').slick({
	  slidesToShow: 3,
	  arrows: false,
	  dots: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	//portfolio-slider filter
	$('.portfolio__filter-li').click(function(){
		$('.portfolio-slider').removeClass('show');
		let i = $(this).data('filter');

		$('.portfolio-slider.f_' + i).toggleClass('show');
		$(".portfolio-slider").css({
			"transform": "rotate(0deg) !important", 
		});
	});

	// circle progress bar
	const circle = document.querySelectorAll('.progress-bar__circle');
	for(var i = 0; i <= circle.length; i++){
		const percent = circle[i].dataset.percent; 
		const r = circle[i].r.baseVal.value;
		const l = 2 * Math.PI * r;

		circle[i].style.strokeDasharray = `${l} ${l}`;
		circle[i].style.strokeDashoffset = l;

		function set(percent){
			const offset = l - percent / 100 * l;
			circle[i].style.strokeDashoffset = offset;
		}
		set(percent);
	}


	$('.footer__bottom-input input').on('click', function(){
		$(this).removeClass('active');

	});

	$(document).on('click', function(e){
		if(!e.target.closest('.footer__bottom-input input')){
			$('.footer__bottom-input input').addClass('active');
		}
	});


});

  