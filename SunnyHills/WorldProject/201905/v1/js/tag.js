
$(function(){
	$('#top').click(function(){
		jQuery('html,body').animate({scrollTop: '0px'}, 800);
	}); 
	
	jQuery('#ct1').click(function(){
		jQuery('html,body').animate({scrollTop:jQuery('#sec1').offset().top}, 900);
	});




});

