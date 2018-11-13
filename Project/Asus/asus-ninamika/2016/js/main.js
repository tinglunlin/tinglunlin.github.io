
$(document).ready(function() {
  if($(window).width() < 1010 ) { 

      $(window).scroll(function() {

                if ($(this).scrollTop() > 286) {
            $('#section1 .page1-title').addClass('page1-title-start');
            $('#section1 .cont-p1-mov').addClass('cont-p1-mov-start');
            $('#section2 .cont-p2-mov').addClass('cont-p2-mov-start');
            $('#section3 .cont-p3-mov').addClass('cont-p3-mov-start');
                }
                if ($(this).scrollTop() > 980) {
            $('#section2 .page2-title').addClass('page2-title-start');
                }
   
                if ($(this).scrollTop() > 1708) {
            $('#section3 .page3-title').addClass('page3-title-start');
                }   

    });

  }
}); 

//moving bg-check checked
$(document).ready(function() {
  $("#nav-menu").click(function(){
    $(".bg-check").prop('checked', false); 
  });
});

$(document).ready(function() {
  var buy1 = $("#section1").find(".buy");
  var buy2 = $("#section2").find(".buy");
  var buy3 = $("#section3").find(".buy");
    buy1.click(function(){
    $(this).toggleClass("active");
    $(this).find(".shop-menu").toggle();
  });
    buy2.click(function(){
    $(this).toggleClass("active");
    $(this).find(".shop-menu").toggle();  
  });
    buy3.click(function(){
    $(this).toggleClass("active");
    $(this).find(".shop-menu").toggle(); 
  });
});


