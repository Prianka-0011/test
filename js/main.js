
function openTab(evt,rent){
    var i, tabcontent, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    evt.currentTarget.className += " active";
}
//nav bar scrolling start
$(window).on('scroll',function(){
  if ($(window).scrollTop())
  {
    $('nav').addClass('scrolling-active');
  }
  else{
    $('nav').removeClass('scrolling-active');
  }
   
   });
//nav bar scrolling end