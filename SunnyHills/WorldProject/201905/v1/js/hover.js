$(function() {
	// Fade Slow

	// Fade First
		var nav = $('.menu li');
	nav.hover(
		function(){
			$(this).fadeTo(400,0.7);
		},
		function () {
			$(this).fadeTo(400,1);
		}
	);
	// Fade First
});