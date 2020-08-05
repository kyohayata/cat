/*画面をスライドすると現れる追従ボタン */
$(function(){
  jQuery(window).on("scroll", function() {
    if (700 < jQuery(this).scrollTop()) {  //700より大きくすると画面の一番上からボタンが現れるまでの位置を下げることができる
      jQuery(".floating").css({
        display: "block",
      });
    } else {
      jQuery(".floating").css({
        display: "none",
      });
    }
  });
});
