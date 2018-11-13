var modal = document.getElementById('myModal');
var modalb = document.getElementById('myModal-b');
var modalc = document.getElementById('myModal-c');

var btn = document.getElementById("myBtn");
var btnB = document.getElementById("myBtn-b");
var btnC = document.getElementById("myBtn-c");
var btnD = document.getElementById("myBtn-d");
var btnE = document.getElementById("myBtn-e");

var span = document.getElementsByClassName("close")[0];
var spanb = document.getElementsByClassName("close-b")[0];
var spanc = document.getElementsByClassName("close-c")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btnB.onclick = function() {
    modal.style.display = "block";
}
btnC.onclick = function() {
    modalb.style.display = "block";
}
btnD.onclick = function() {
    modalb.style.display = "block";
}
btnE.onclick = function() {
    modalc.style.display = "block";
    player.playVideo();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalb) {
        modalb.style.display = "none";
    }
    if (event.target == modalc) {
        player.pauseVideo();
        modalc.style.display = "none";
    }
}
span.onclick = function() {
    modal.style.display = "none";
}
spanb.onclick = function() {
    modalb.style.display = "none";
}
spanc.onclick = function() {    
    modalc.style.display = "none";
    player.pauseVideo();
}
//desktop menu
  $(document).ready(function () {
    var img = $("#section6").find(".table-picture img");
    var t1_btn = $("#section6").find(".t1_btn");
    var t2_btn = $("#section6").find(".t2_btn");
    var t3_btn = $("#section6").find(".t3_btn");
    var t4_btn = $("#section6").find(".t4_btn");
    var table_m = $("#section6").find(".table-m");
    var t1 = "img/t1.jpg",
        t2 = "img/t2.jpg",
        t3 = "img/t3.jpg",
        t4 = "img/t4.jpg";
        if($(window).width() < 1011 ) {
          var t1 = "img/all_t.jpg",
              t2 = "img/book_t.jpg",
              t3 = "img/fone_t.jpg",
              t4 = "img/pad_t.jpg",
              d1 = "desktop/tablet-all.jpg",
              d2 = "desktop/tablet-zenbook.jpg",
              d3 = "desktop/tablet-zenfone.jpg",
              d4 = "desktop/tablet-zenpad.jpg";
        }
        if($(window).width() < 641 ) {
          var t1 = "img/all_m.jpg",
              t2 = "img/book_m.jpg",
              t3 = "img/fone_m.jpg",
              t4 = "img/pad_m.jpg",
              d1 = "desktop/mobile-all.jpg",
              d2 = "desktop/mobile-zenbook.jpg",
              d3 = "desktop/mobile-zenfone.jpg",
              d4 = "desktop/mobile-zenpad.jpg";
        }

    img.attr('src',t1)   
    t1_btn.on( 'click', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      table_m.find("a").attr('href',d1);
      img.fadeOut(500, function(){ $(this).attr('src',t1).fadeIn(300);});
      return false; 
    });    
    t2_btn.on( 'click', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      table_m.find("a").attr('href',d2);
      img.fadeOut(500, function(){ $(this).attr('src',t2).fadeIn(300);}); 
      return false;
    });
    t3_btn.on( 'click', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      table_m.find("a").attr('href',d3);
      img.fadeOut(500, function(){ $(this).attr('src',t3).fadeIn(300);});
      return false; 
    });
    t4_btn.on( 'click', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      table_m.find("a").attr('href',d4);
      img.fadeOut(500, function(){ $(this).attr('src',t4).fadeIn(300);});
      return false; 
    });


});