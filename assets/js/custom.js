$(document).ready(function(){

	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	})

	// Header-Carousel
	$('.header-details').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:true,
		nav:true
	})

	// Header-Carousel
	$('.testimonials-item').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		nav:false
	})
	// Header-Carousel
	$('.clients').owlCarousel({
		items:5,
		loop:true,
		autoplay:true,
		dots:false,
		nav:false,
		margin:30
	})


	// Social-Carousel
	$('.social-item').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true
	})


	// Pop Up
  $('.work-popup').magnificPopup({

  	type:'image',
  	gallery:{
  		enabled:true
  	}

  });

})