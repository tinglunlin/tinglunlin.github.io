$(document).ready(function() {
	
	$("body").imagesLoaded().always( onAlways );
	
	function onAlways() {
		loadingpage();
		fullpageJS();
		menu_set();		
		gobackOnepage();
		ac_product();
		acDisplayRwd();
		MNinfo();
		download();
		slideOn();	
	}

	var screenWidth = $(window).width();
	var pageBody = $('body');

	function loadingpage() {
		var vwdith = $(window).innerWidth();
    	var vheight = $(window).innerHeight();

		$('.s-body').sakura();
		$('#allpage').addClass('an');

		if ( vwdith <= 1169 ){
			$('body').css('overflow','hidden');
			$('body').css('position','fixed');
		}

        //other click skip
        $(".btn-skip").click(function(){
        	$('.s1-notebook').removeClass("an-notebook-top");
          $('.s1-notebook').removeClass("an-notebook-top-mo");
          $('.s1-notebook').removeClass("an-notebook-top-mo-l");
          $('.s1-text').removeClass("an-transform-top");
          $('.s1-text').removeClass("an-transform-top-txt");
          $('.s1-kv-flower').removeClass("flower-an-op");
        //mobile-P
        	if ( vwdith <= 1169 && vheight > vwdith) {
        		$('body').css('position','inherit');
        		$('.s1-kv-flower').addClass("flower-an-mo");
        		setTimeout(function(){ 
        			$('.s1-notebook').addClass("an-notebook-top-mo"); 
        			$('body').css('overflow','visible'); 
        		}, 2600);
        		location.replace('#section1');
        	} 
        	//mobile-L
        	if ( vwdith <= 1169 && vheight < vwdith ) {
        		$('body').css('position','inherit');
        		$('.s1-kv-flower').addClass("flower-an-mo-l");
        		setTimeout(function(){
					$('.s1-notebook').addClass("an-notebook-top-mo-l");
					$('body').css('overflow','visible');
				}, 2600);
				location.replace('#section1');
        	} 
        	//desktop
        	if ( vwdith >= 1170 ) {
        		$('.s1-kv-flower').addClass("flower-an");
				setTimeout(function(){ $('.s1-notebook').addClass("an-notebook-top"); }, 2600);
				location.replace('#home');
        	}

        	$('.s-body').delay(2000).fadeOut(500);

			setTimeout(function(){ $('.s-body').sakura("stop"); }, 2300);
			setTimeout(function(){ $('.s1-kv-flower').addClass("flower-an-op"); }, 2400);
			setTimeout(function(){ $('.s1-text').addClass("an-transform-top"); $('.goback-1st-v').addClass("an-transform-top"); }, 2600);
			setTimeout(function(){ $('.vh100').css('display','none'); }, 2800);
          // $('.s-body').fadeOut(500);
          // $('.s-body').sakura("stop");
          $('.vh100').css('display','block'); 
          // location.replace('#section1');
                    
        });

        $(".btn-startint").click(function(){      
          $(".s-body").show(); 
          $('.s-body').sakura();
          if ( vwdith < 1170 ) { location.replace('#section1'); }
          if ( vwdith >= 1170 ) { location.replace('#home'); }
        }); 
        
	}

	// Menu 
	function menu_set() {
		$('#nav-toggle').click(function() {
		  $(this).toggleClass('active');
		  $('#overlay').toggleClass('open');
		});

		$('header .overlay li a, header .overlay li.btn-startint').click(function() {
		  $('#overlay').removeClass('open');
		  $('#nav-toggle').removeClass('active');
		  $('.overlay-menu .brand').removeClass('on');
		});

		$('.overlay-menu .brand').click(function() {
			$(this).toggleClass('on');
		});

		$('.buy').click(function() {
		  $(this).toggleClass('active');
		});
	}

	//goback first webpage
	function gobackOnepage() {

		$('.goback-section, .goback-1st-v-mo').click(function(){
			$('#overlay-slide').css('z-index','1001');
			$('#overlay-slide').css('display','block');

			$('#overlay-slide div:nth-of-type(1)').animate({  textIndent: 0 }, {
				step: function(go) {
					$(this).css('transform','translateX('+go+')');
				}
			});
			$('#overlay-slide div:nth-of-type(2)').delay(300).animate({  textIndent: 0 }, {
				step: function(go) {
					$(this).css('transform','translateX('+go+')');
				}
			});
			$('#overlay-slide div:nth-of-type(3)').delay(550).animate({  textIndent: 0 }, {
				step: function(go) {
					$(this).css('transform','translateX('+go+')');
				},
				complete: function(){ 
					// window.open('2016/index.html');
					location.href="2016/index.html";
				}
			});

			//isIE <= IE9
			var isIE = document.all && !window.atob;

			if (isIE){
				$('#overlay-slide div').css('left','-100%');
				$('#overlay-slide div:nth-of-type(1)').animate({
		            left: 0
		        }, 500);
		        $('#overlay-slide div:nth-of-type(2)').delay(300).animate({
		            left: 0
		        }, 500);
		        $('#overlay-slide div:nth-of-type(3)').delay(350).animate({
		            left: 0
		        }, 500);
			} 

		});

		$('.goback-1st-v-mo').click(function(){
			$('.goback-section').trigger("click");
		});
	}
	
	// 周邊手機版
	function ac_product() {
		var ac_product = $('#ac-product');
		var pageBody = $('body');

		//accessories-product-nav
		$('#section7 .ac-nav .ac-a').click(function(){
			$('body.fp-viewing-accessories').removeClass('ac-red');
			$('body.fp-viewing-accessories').addClass('ac-blue');
			$('.wireframe.accessories').removeClass('ac-notebook-shell');
			$('.wireframe.accessories').addClass('ac-notebook-bag');
			$('.wireframe-content.accessories-product.notebook-bag').fadeIn(800);
			$('.wireframe-content.accessories-product.notebook-shell').fadeOut(500);
			$('.scrollpane').scrollTop(0);
		});

		$('#section7 .ac-nav .ac-b').click(function(){
			$('body.fp-viewing-accessories').removeClass('ac-blue');
			$('body.fp-viewing-accessories').addClass('ac-red');
			$('.wireframe.accessories').removeClass('ac-notebook-bag');
			$('.wireframe.accessories').addClass('ac-notebook-shell');
			$('.wireframe-content.accessories-product.notebook-shell').fadeIn(800);
			$('.wireframe-content.accessories-product.notebook-bag').fadeOut(500);
			$('.scrollpane').scrollTop(0);
		});

		$('#section7 .ac-close').click(function(){
			acMainRest();
		});

	}

	function acMainRest() {
		$('.wireframe-content.ac-main-menu').fadeIn(300);
		$('#section7 .wireframe-content.accessories-product.notebook-bag').fadeOut(500);
		$('#section7 .wireframe-content.accessories-product.notebook-shell').fadeOut(500);
		$('#section7 .ac-nav').fadeOut(500);
		$('body.fp-viewing-accessories').removeClass('ac-red');
		$('body.fp-viewing-accessories').removeClass('ac-blue');
		$('.wireframe.accessories').removeClass('ac-notebook-shell');
		$('.wireframe.accessories').removeClass('ac-notebook-bag');
	}

	//accessories-product-display and rwd
	function acDisplayRwd() {
		var ac_product = $('#ac-product');
		var pageBody = $('body');
		var notebagClone = $('.wireframe-content.accessories-product.notebook-bag').clone( );
		var noteshellClone = $('.wireframe-content.accessories-product.notebook-shell').clone( );


		if ( screenWidth < 1170 ) {
			$('.wireframe-content.ac-main-menu .product-left').click(function(){
				$('.ac-lightbox .ac-content').empty();
				$('.ac-lightbox .ac-content').append(notebagClone);
				ac_product.removeClass('downout');
				ac_product.css('display','block');
			    pageBody.css('overflow','hidden');
			    $('.ac-lightbox .wireframe-content.accessories-product.notebook-bag').css('display','block');

			});
			$('.wireframe-content.ac-main-menu .product-right').click(function(){
				$('.ac-lightbox .ac-content').empty();
				$('.ac-lightbox .ac-content').append(noteshellClone);
				ac_product.removeClass('downout');
				ac_product.css('display','block');
			    pageBody.css('overflow','hidden');
			    $('.ac-lightbox .wireframe-content.accessories-product.notebook-shell').css('display','block');

			});
			$('.ac-lightbox .close_btn').click(function(){
				close_btn_1();
			});
		} 
		if ( screenWidth >= 1170 ) {
			$('.wireframe-content.ac-main-menu .product-left').click(function(){
				$('.wireframe-content.ac-main-menu').fadeOut(300);
				$('.wireframe.accessories').addClass('ac-notebook-bag');
				$('.wireframe-content.accessories-product.notebook-bag').fadeIn(500);
				$('#section7 .ac-nav').fadeIn(500);
				$('body.fp-viewing-accessories').addClass('ac-blue');
				$('.scrollpane').scrollTop(0);

			});
			$('.wireframe-content.ac-main-menu .product-right').click(function(){
				$('.wireframe-content.ac-main-menu').fadeOut(300);
				$('.wireframe.accessories').addClass('ac-notebook-shell');
				$('.wireframe-content.accessories-product.notebook-shell').fadeIn(500);
				$('#section7 .ac-nav').fadeIn(500);
				$('body.fp-viewing-accessories').addClass('ac-red');
				$('.scrollpane').scrollTop(0);
			});
		}
	}

	function fullpageJS() {

		$('#fullpage').fullpage({
	        anchors: ['home', 'zenbook3-deluxe-info', 'zenbook3-deluxe-fullhd', 'zenbook3-deluxe-info2', 'zenbook-ux490', 'zenbook-ux490-info', 'accessories', 'gallery', 'blogger', 'download'],
	        normalScrollElements: '.scrollpane',
	        responsiveWidth: 1170,
	        afterResponsive: function(isResponsive){

	        },
	        onLeave: function(anchorLink, index){
	        	if(index == 1){
					$("#section1 .s1-text").removeClass("an-transform-top");
					$("#section1 .s1-text").removeClass("an-transform-top-txt");  
					$("#section1 .s1-text").removeClass("text-back");
					$("#section1 .s1-text").addClass("an-transform-top-txt");         
				}
				if(index == 2){
					$("#section1 .s1-text").addClass("text-back");
					$("#section3 .s3-text").addClass("text-back");

				}
				if(index == 3){
					$("#section3 .s3-text").removeClass("an-transform-top-txt");
					$("#section3 .s3-text").removeClass("an-op-txt");
					$("#section3 .s3-text").removeClass("text-back");
					$("#section3 .s3-text").addClass("an-transform-top-txt");
				}
				if(index == 4){
					$("#section3 .s3-text").addClass("text-back");					
					$("#section5 .s5-text").addClass("text-back");     
				}
				if(index == 5){
					$("#section5 .s5-text").removeClass("an-transform-top-txt");
					$("#section5 .s5-text").removeClass("an-op-txt");
					$("#section5 .s5-text").removeClass("text-back"); 
					$("#section5 .s5-text").addClass("an-transform-top-txt");
				}
				if(index == 6){
					$("#section5 .s5-text").addClass("text-back");    
					$('body').removeClass('ac-red');
					$('body').removeClass('ac-blue');        
				}
				if(index == 7){	
					acMainRest();
				}
				if(index == 8){
					$('body').removeClass('ac-red');
					$('body').removeClass('ac-blue');
				}
	        }

		});
	}

	function download() {
		var downloadLINK = $('#section10 .v-mobile .btn-incline');
		var deskshow = $('#section10 .v-desktop .Download-show img');
		var desknav = $('#section10 .v-desktop .Download-nav div');
		var mobileshow = $('#section10 .v-mobile .Download-show img');
		var mobilenav = $('#section10 .v-mobile .Download-nav div');
		var showKV01 = "images/download/01.jpg",
			showKV02 = "images/download/02.jpg",
			showKV03 = "images/download/03.jpg",
			showKV01m = "images/download/ipad-01.jpg",
			showKV02m = "images/download/ipad-02.jpg",
			showKV03m = "images/download/ipad-03.jpg";

		if($(window).width() >= 1024 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			var downKV01 = "images/download/pad/1_zenpad_2048x1536.jpg",
				downKV02 = "images/download/pad/2_zenpad_2048x1536.jpg",
				downKV03 = "images/download/pad/3_zenpad_2048x1536.jpg";

			downloadLINK.on( 'click', function(){
				ga('send', {
				  hitType: 'event',
				  eventCategory: 'button',
				  eventAction: 'clicked',
				  eventLabel: 'download_ZenPad'
				});
			}); 
        }
        if( 640 < $(window).width() < 1024 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var downKV01 = "images/download/pad/1_zenbook_1280x800.jpg",
				downKV02 = "images/download/pad/2_zenbook_1280x800.jpg",
				downKV03 = "images/download/pad/3_zenbook_1280x800.jpg";

			downloadLINK.on( 'click', function(){
				ga('send', {
				  hitType: 'event',
				  eventCategory: 'button',
				  eventAction: 'clicked',
				  eventLabel: 'download_ZenPad'
				});
			}); 

        }
        if( $(window).width() < 640 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var downKV01 = "images/download/phone/1_zenFone4_1080x1920.jpg",
				downKV02 = "images/download/phone/2_zenFone4_1080x1920.jpg",
				downKV03 = "images/download/phone/3_zenFone4_1080x1920.jpg";
			
			downloadLINK.on( 'click', function(){
				ga('send', {
				  hitType: 'event',
				  eventCategory: 'button',
				  eventAction: 'clicked',
				  eventLabel: 'download_ZenFone'
				});
			}); 
        }

        downloadLINK.attr('href',downKV01);

		$('.download-kv01').on( 'click', function(){
			downloadLINK.attr('href',downKV01);
		});
		$('.download-kv02').on( 'click', function(){
			downloadLINK.attr('href',downKV02);
		});
		$('.download-kv03').on( 'click', function(){
			downloadLINK.attr('href',downKV03);
		});

		//desktop
		$('#section10 .v-desktop .Download-nav div:nth-of-type(1)').on( 'click', function(){
			deskshow.fadeOut(300, function(){ $(this).attr('src',showKV01).fadeIn(300);}); 
			desknav.removeClass('active');
			$(this).addClass('active');
		});
		$('#section10 .v-desktop .Download-nav div:nth-of-type(2)').on( 'click', function(){
			deskshow.fadeOut(300, function(){ $(this).attr('src',showKV02).fadeIn(300);}); 
			desknav.removeClass('active');
			$(this).addClass('active');
		});
		$('#section10 .v-desktop .Download-nav div:nth-of-type(3)').on( 'click', function(){
			deskshow.fadeOut(300, function(){ $(this).attr('src',showKV03).fadeIn(300);}); 
			desknav.removeClass('active');
			$(this).addClass('active');
		});

		//mobile
		$('#section10 .v-mobile .Download-nav div:nth-of-type(1)').on( 'click', function(){
			mobileshow.fadeOut(300, function(){ $(this).attr('src',showKV01m).fadeIn(300);}); 
			mobilenav.removeClass('active');
			$(this).addClass('active');
		});
		$('#section10 .v-mobile .Download-nav div:nth-of-type(2)').on( 'click', function(){
			mobileshow.fadeOut(300, function(){ $(this).attr('src',showKV02m).fadeIn(300);}); 
			mobilenav.removeClass('active');
			$(this).addClass('active');
		});
		$('#section10 .v-mobile .Download-nav div:nth-of-type(3)').on( 'click', function(){
			mobileshow.fadeOut(300, function(){ $(this).attr('src',showKV03m).fadeIn(300);}); 
			mobilenav.removeClass('active');
			$(this).addClass('active');
		});
	}

	function slideOn() {
		$('.Media-show').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			// speed: 1000,
			// autoplay: true,
			// autoplaySpeed: 2000,
			asNavFor: '.Media-nav',
			swipe: false, //only coming soon
			touchMove: false, //only coming soon
		});

		$('.Media-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.Media-show',
			dots: false,
			// speed: 1000,
			// autoplay: true,
			// autoplaySpeed: 2000,
			centerMode: true,
			focusOnSelect: true,

			responsive: [
				{
				  breakpoint: 1170,
				  settings: {
				    slidesToShow: 3
				  }
				},
				{
				  breakpoint: 640,
				  settings: {
				    slidesToShow: 2
				  }
				}
			]
		});

		goslick();
		slideBloggerFill();
	}

	function slideBloggerFill() {
		var $slider_ori = $('.slideBlogger');
		var $slider = $('.slideBlogger.slick-slider');
		var $slider_clone = $slider.clone( true, true ); 

		$( '.tab-all').on( 'click', function(){
			$(".Blogger-nav > a").removeClass("selected");
			$(this).addClass("on");

			var $new_slider = $slider_clone.clone( true, true );

			$slider_ori.slick( 'unslick' );
			$slider.empty(); 

			$slider.append( $new_slider.find( '.deluxe, .ux430' ) );
			goslick();
		});

		$( '.tab-deluxe').on( 'click', function(){
			$(".Blogger-nav > a").removeClass("on");
			$(this).addClass("on");

			var $new_slider = $slider_clone.clone( true, true );

			$slider_ori.slick( 'unslick' );
			$slider.empty(); 

			$slider.append( $new_slider.find( '.deluxe' ) );
			goslick();
		});

		$( '.tab-ux430').on( 'click', function(){
			$(".Blogger-nav > a").removeClass("on");
			$(this).addClass("on");

			var $new_slider = $slider_clone.clone( true, true );

			$slider_ori.slick( 'unslick' );
			$slider.empty(); 

			$slider.append( $new_slider.find( '.ux430' ) );
			goslick();
		});
	}

	function goslick () {
		$('.slideBlogger').slick({
		    slidesToShow: 5,
		    slidesToScroll: 5,
		    infinite: false,

		    responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        vertical: true,
		      }
		    }

		  ]
		});
	}

	//Lightbox
	function MNinfo() {
		$('#section1 .teacher-info').click(function(){
			showMNinfo();
		});
		$('#teacherInfo .close_btn').click(function(){
			closebtnTeach();
		});

		$('#section8 .showVideo').click(function(){
			showVD();
			player.playVideo();
		});
		$('#section8 .showVideo2').click(function(){
			showVD2();
			player2.playVideo();
		});
		$('#youtube-vd .close_btn').click(function(){
			closebtnVD();
			player.pauseVideo();
		});
		$('#youtube-vd2 .close_btn').click(function(){
			closebtnVD2();
			player2.pauseVideo();
		});
	}

	function showMNinfo() {
		var teacherInfo = $('#teacherInfo');
		teacherInfo.fadeIn(300);
		if ( screenWidth < 1170 ) {
			pageBody.css('position','fixed');
		}
		
	} 
	
	function showVD() {
		var VD = $('#youtube-vd');
		VD.fadeIn(300);
	} 

	function showVD2() {
		var VD2 = $('#youtube-vd2');
		VD2.fadeIn(300);
	} 

	function close_btn_1() {
		var ac_product = $('#ac-product');
		ac_product.addClass('downout');
		ac_product.fadeOut(300);
		pageBody.css('overflow','visible');
	}

	function closebtnTeach() {
		var teacherInfo = $('#teacherInfo');
		teacherInfo.fadeOut(300);
		if ( screenWidth < 1170 ) {
			pageBody.css('position','inherit');
		}
	}

	function closebtnVD() {
		var VD = $('#youtube-vd');
		VD.fadeOut(300);
	}
	function closebtnVD2() {
		var VD2 = $('#youtube-vd2');
		VD2.fadeOut(300);
	}

});


$(function(){
	var screenWidth = $(window).width();

	if ( screenWidth > 999 ) {
		$('#section9 .blogger-img').click(function(){
			var linkopen = $(this).find('a').attr('href');
			window.open(linkopen);
		});
	}

	if( screenWidth < 1170 ) {		
		$('.wireframe a.logo').attr('href','#section1');
	}
	
});

