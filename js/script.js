$(function(){
  var height = window.innerHeight;
  var conceptPos = height;
  var infoPos = height * 2;
  var exhibitPos = height * 3;
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    setAnimation($('#about'),scrollPos,0,conceptPos);
    setAnimation($('#concept'),scrollPos,conceptPos,infoPos);
    setAnimation($('#info'),scrollPos,infoPos,exhibitPos);
    $('#nav').css({'top':scrollPos/height/5 * $('header').height()});
  });
  
  $('header a').click(function() {
    var speed = 3000;
    var target= $(this).attr("href");
    var position = 0;
    switch (target) {
      case "#about":
        position = 0;
        break;
      case "#concept":
        position = conceptPos + height * 2/3;
        break;
      case "#info":
        position = infoPos + height * 2/3;
        break;
      default:
        position = 0;
    }
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;  
   });
});

function setAnimation(element,pos,min,max){
  if(pos < min || max < pos){
    element.css({'transform':'scale(0)'});
  }else{
    var len = max - min;
    var p = pos - min;
    var scale = 0;
    var len = max - min;
    var opacity = 0;
    var showStartPos = len/3;
    var hideStartPos = len/3*2;
    if(p < showStartPos){
      opacity = p/showStartPos;
      scale = p/showStartPos;
    }else{
      if(p < hideStartPos){
        opacity = 1;
        scale = 1;
      }else{
        var delta = (p-hideStartPos)/(len/3);
        opacity = 1- delta;
        scale = 1 + delta;
      }
    }
    element.css({'transform':'scale(' + scale + ')'});
    element.css({'opacity': opacity });
  }

}