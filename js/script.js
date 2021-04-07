$(function(){
    //動画切り替え
    $('#movie1,.prev-button2').click(function(){
        $('.movie-wrapper2,.movie-wrapper3,.movie-wrapper4').fadeOut(0);
        $('.movie-wrapper1').fadeIn();
    });

    $('#movie2,.next-button1,.prev-button3').click(function(){
        $('.movie-wrapper1,.movie-wrapper3,.movie-wrapper4').fadeOut(0);
        $('.movie-wrapper2').fadeIn();
    });

    $('#movie3,.next-button2,.prev-button4').click(function(){
        $('.movie-wrapper1,.movie-wrapper2,.movie-wrapper4').fadeOut(0);
        $('.movie-wrapper3').fadeIn();
    });

    $('#movie4,.next-button3').click(function(){
        $('.movie-wrapper1,.movie-wrapper2,.movie-wrapper3').fadeOut(0);
        $('.movie-wrapper4').fadeIn();
    });
});


//ページ読み込み後の実行プログラム
window.onload = function() {
    //
    
};