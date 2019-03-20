$(function() {
    $('.slider').slick({    	  
            nextArrow: '<div id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'    	    	
    });
    $('.js-slider-mib').slick({
    	centerMode: true,
  		centerPadding: '60px',
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		nextArrow: '<div id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
  		responsive: [  
			{
		      breakpoint: 768,
		      settings: {		    			        
		        slidesToShow: 1
		      	}
			}
		]
    })    
});
