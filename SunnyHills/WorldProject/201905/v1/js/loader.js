$(document).ready(function() {
  /* Query Loader 2 */
  // $("body").queryLoader2({
  //     backgroundColor: "#000",
  //     percentage: false,
  //     deepSearch: true,
  //     barHeight: 0,
  // barColor:"#f4e8a3",
  //     completeAnimation: "fade",
  //     onLoadComplete: function() {
  //         new WOW().init();
  //     }
  // });

  /* wow.js */
  wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0
  });
  wow.init();
});
