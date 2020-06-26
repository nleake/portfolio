$(document).ready(function(){

    $('.grid a').mouseover(function(){
      //moving the div left a bit is completely optional
      //but should have the effect of growing the image from the middle.
      $(this).stop().animate({"width": "102%","left":"0px","top":"0px", "right":"0px"}, 300,'swing');
    }).mouseout(function(){
      $(this).stop().animate({"width": "100%","left":"5px","top":"5px", "right":"5px"}, 200,'swing');
    });;
});