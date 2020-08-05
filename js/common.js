/*画面をスライドすると現れる追従ボタン */
$(window).on("scroll", function() {
  if (100 < $(this).scrollTop()) {
    $(".floating").css({
      display: "block",
    });
  } else {
    $(".floating").css({
      display: "none",
    });
  }
});

//ここからスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
      $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 500; // ミリ秒
          // 移動先を取得
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          // 移動先を数値で取得
          var position = target.offset().top;
          // スムーススクロール
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
      });
  });
//ここまでスムーススクロール
