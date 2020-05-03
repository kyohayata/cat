var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  //見出しのフェードイン
  $(".left-pararax").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+50) {
      $(this).addClass("left-fadein");
    } else {
      $(this).removeClass("left-fadein");
    }
  });

  //説明文のフェードイン
  $(".right-pararax").each(function() {
    var elem_pos1 = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos1));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos1 - window_h+150) {
      $(this).addClass("right-fadein");
    } else {
      $(this).removeClass("right-fadein");
    }
  });
});



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





