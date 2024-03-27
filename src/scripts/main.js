$('#fullpage').fullpage({
  afterLoad: function(origin, destination, direction){
    if(destination.index == 0){
      document.querySelector('.header__bg').play();
    }
  }
});

$('#nextPage').on('click', function() {
  $.fn.fullpage.moveSectionDown();
});
