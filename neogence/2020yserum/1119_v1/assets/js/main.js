"use strict";!function(o){AOS.init({duration:800});var e=o(window).innerHeight()-o(".header-bg").innerHeight()-o(".nav-bg").innerHeight();o(window).width();o(".section01").height(e),o("a[data-scroll]").on("click",function(){var e=o(this).attr("href"),a=o("header").height(),a="#s5"===e?o(e).offset().top+a:o(e).offset().top-a;o("html,body").animate({scrollTop:a},1e3)}),o("#arrow_s1").on("click",function(){var e=o("#s2").offset().top-50;o("html,body").animate({scrollTop:e},1e3)}),o("#arrow_s2").on("click",function(){var e=o("#s3").offset().top-50;o("html,body").animate({scrollTop:e},1e3)});var a=document.getElementById("kvVideo");o(".section02-vd-sound").on("click",function(){o(this).toggleClass("active"),o(this).hasClass("active")?a.muted=!1:a.muted=!0});var n={useEasing:!0,useGrouping:!0,separator:"",decimal:"",prefix:"",suffix:""},t=o("#section04Num01").text(),s=o("#section04Num02").text(),e=o("#section04Num03").text(),i=new countUp("section04Num01",0,t,0,1,n),c=new countUp("section04Num02",0,s,0,1,n),r=new countUp("section04Num03",0,e,0,1,n);o(window).on("scroll",function(){var e=o(window).innerHeight()/2,a=o("#s2").offset().top-e,n=o("#s2").innerHeight(),t=o("#s4").offset().top-e,e=o(this).scrollTop();a<e&&e<a+n?o(".section02-vd-sound").fadeIn(300):o(".section02-vd-sound").fadeOut(300),t<e&&(i.start(),c.start(),r.start())}),o("#formSubmit").on("click",function(){o("#game").show();var e=o("#game").offset().top-50;o("html,body").animate({scrollTop:e},500)}),o("#selectorA").on("click",function(){o(this).addClass("active"),o(".game-selector-item").addClass("anStop");var e=o(".game-canvas-line-01"),a=o(".game-canvas-line-10"),n=o(".game-canvas-line-05"),t=o(".game-canvas-line-12"),s=o(".game-canvas-line-06");o(".game-selector-item").css("pointer-events","none"),e.addClass("game-canvas-active"),e.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){a.addClass("game-canvas-active"),e.addClass("game-canvas-clean")}),a.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){n.addClass("game-canvas-active"),a.addClass("game-canvas-clean")}),n.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){t.addClass("game-canvas-active"),n.addClass("game-canvas-clean")}),t.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){s.addClass("game-canvas-active"),t.addClass("game-canvas-clean")}),s.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){setTimeout(function(){o('.popupLightBox[data-prize="A_cash100"]').fadeIn(300)},300)})}),o("#selectorB").on("click",function(){o(this).addClass("active"),o(".game-selector-item").addClass("anStop");var e=o(".game-canvas-line-02"),a=o(".game-canvas-line-10"),n=o(".game-canvas-line-04"),t=o(".game-canvas-line-11"),s=o(".game-canvas-line-09");o(".game-selector-item").css("pointer-events","none"),e.addClass("game-canvas-active"),e.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){a.addClass("game-canvas-active"),a.addClass("an-start-right"),e.addClass("game-canvas-clean")}),a.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){n.addClass("game-canvas-active"),a.addClass("game-canvas-clean")}),n.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){t.addClass("game-canvas-active"),n.addClass("game-canvas-clean")}),t.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){s.addClass("game-canvas-active"),t.addClass("game-canvas-clean")}),s.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){setTimeout(function(){o('.popupLightBox[data-prize="B_cash150"]').fadeIn(300)},300)})}),o("#selectorC").on("click",function(){o(this).addClass("active"),o(".game-selector-item").addClass("anStop");var e=o(".game-canvas-line-03"),a=o(".game-canvas-line-12"),n=o(".game-canvas-line-07"),t=o(".game-canvas-line-11"),s=o(".game-canvas-line-08");o(".game-selector-item").css("pointer-events","none"),e.addClass("game-canvas-active"),e.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){a.addClass("game-canvas-active"),a.addClass("an-start-right"),e.addClass("game-canvas-clean")}),a.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){n.addClass("game-canvas-active"),a.addClass("game-canvas-clean")}),n.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){t.addClass("game-canvas-active"),t.addClass("an-start-right"),n.addClass("game-canvas-clean")}),t.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){s.addClass("game-canvas-active"),t.addClass("game-canvas-clean")}),s.children(".game-canvas-line-progress").on("transitionend webkitTransitionEnd oTransitionEnd",function(){setTimeout(function(){o('.popupLightBox[data-prize="C_cash100"]').fadeIn(300)},300)})}),o(".popupLightBox-close").on("click",function(){o(".popupLightBox").fadeOut(300)}),o(".popup-txt-cash-code-copy").on("click",function(){o(this).next().select(),document.execCommand("Copy"),alert("已複製您的專屬折扣碼。")}),o(".popup-button2").on("click",function(){o(this).prevAll(".popup-txt-cash-code").children(".popup-txt-cash-code-input").select(),document.execCommand("Copy"),alert("已複製您的專屬折扣碼。"),o(".popupLightBox").fadeOut(300),setTimeout(function(){var e=o("header").height();o("html,body").animate({scrollTop:o("#s8").offset().top-e},500)},300)}),o(window).on("resize",function(){o(this).width();var e=o(window).innerHeight()-o(".header-bg").innerHeight()-o(".nav-bg").innerHeight();o(".section01").height(e)})}($);var tween_scene1=(new TimelineMax).add([TweenMax.fromTo("#s5-product",2,{x:"-=150",y:"-=150",opacity:0},{x:0,y:0,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt01",1,{y:"100",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut})]),tween_scene1_productScale=(new TimelineMax).add([TweenMax.fromTo("#s5-product-scale",1,{scale:1},{scale:25,rotation:4,ease:Power3.easeInOut}),TweenMax.fromTo(".section05-txt-01",1,{opacity:1},{opacity:0,ease:Power3.easeInOut}),TweenMax.fromTo(".section05-scene-bg2",1,{opacity:0},{opacity:1,ease:Power3.easeInOut})]),tween_scene1_productOpacity=(new TimelineMax).add([TweenMax.fromTo("#s5-product-opacity",1,{opacity:1},{opacity:0,ease:Power3.easeInOut}),TweenMax.fromTo(".section05-scene-bg",1,{opacity:1},{opacity:0,ease:Power3.easeInOut})]),tween_sceneBg2=(new TimelineMax).add([]),tween_scene2_txt=(new TimelineMax).add([TweenMax.fromTo("#s5-txt02",1,{opacity:0},{opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-arrowUp",2,{y:"20",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt03",3,{y:"20",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsUp-img",4,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsTxt01",5,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsTxt02",5,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsTxt03",5,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsTxt04",5,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsTxt05",5,{scale:.5,opacity:0},{scale:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt04",6,{y:"20",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut})]),tween_scene2_end=(new TimelineMax).add([TweenMax.fromTo(".section05_scene2_end",1,{opacity:1},{opacity:0,ease:Power3.easeInOut}),TweenMax.fromTo(".section05-scene-bg2",2,{y:0},{y:"-100%",ease:Power3.easeInOut}),TweenMax.fromTo(".section05-scene-bg3",2,{y:"100%",opacity:0},{y:"0%",opacity:1,ease:Power3.easeInOut})]),tween_scene3=(new TimelineMax).add([TweenMax.fromTo("#s5-txtNote",1,{opacity:0},{opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt05",1,{opacity:0},{opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-arrowDown",2,{y:"-20",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt06",3,{y:"20",opacity:0},{y:0,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-graphicsDown",4,{scaleY:0,opacity:0},{scaleY:1,opacity:1,ease:Power3.easeInOut}),TweenMax.fromTo("#s5-txt07",5,{y:"20",opacity:0},{y:"0",opacity:1,ease:Power3.easeInOut})]),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:500,offset:0}).setTween(tween_scene1).addTo(controller),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:500,offset:500}).setTween(tween_scene1_productScale).addTo(controller),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:300,offset:1e3}).setTween(tween_scene1_productOpacity).addTo(controller),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:500,offset:700}).setTween(tween_scene2_txt).addTo(controller),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:500,offset:1200}).setTween(tween_scene2_end).addTo(controller),scene=new ScrollMagic.Scene({triggerElement:"#scene-trigger1",duration:500,offset:1500}).setTween(tween_scene3).addTo(controller);