$(function(){
  $('#my-name').animate({'opacity':'1'},1000);



  $('header').find('a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop':position
    },500);
  });

  $('#show').click(function(){
    $(this).css({'display':'none'});
    $('header').find('a').css('display','block').delay(50).animate({'opacity':'1'},500);
    $('#hide').css('display','block').delay(50).animate({'opacity':'1'},500);
  });
  $('#hide').click(function(){
    $(this).css({'display':'none'});
    $('header').find('a').animate({'opacity':'0'}).delay(50).css('display','none');    
    $('#show').animate({'opacity':'1'}).delay(50).css('display','block');
  });

  //$('header').find('a').hover(function(){
    //$(this).animate({'background-color':'rgba(5, 2, 2, 0.519)'},1000);
  //},
  //function(){
    //$(this).animate({'background-color':'none'},1000);
  //});


//スクロールしたら表示される奴
  $('.effect div, .effect i').css("opacity","0");
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("div, i",this).css("opacity","1" );
      } else {
        $("div",this).css("opacity","0" );
      }
    });
  });

  //worksのアニメーション
  $('.work').hover(function(){
    $(this).css( "box-shadow", "0 0 12px #ffffff");
    $(this).css({
      'position':'relative',
      'bottom':'3px'
    });
    $(this).find('.fadeIn').css({
      'opacity':'1',
      'margin-right':'0'
    }
    );
  },
  function(){
    $(this).css( "box-shadow", "none");
    $(this).css({
      'position':'relative',
      'bottom':'0'
    });
    $(this).find('.fadeIn').css({
      'margin-right':'-50px',
      'opacity':'0'
    });
    
  });



});
