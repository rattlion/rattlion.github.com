!function(){
  $("pre code").each(function() { $(this).addClass('prettyprint'); }); prettyPrint();
  function resize() { if($("#main").height() < $(window).height()) { $('#main').css('height', $(window).height()); } }; resize(); $(window).resize(resize);
}();
