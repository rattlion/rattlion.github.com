!function(){
  $("pre code").each(function() { $(this).addClass('prettyprint'); }); prettyPrint();
  function resize() { if($(window).heigh() < $("#main").height()) { $('#main').css('height', $(window).height()); } }; resize(); $(window).resize(resize);
}();
