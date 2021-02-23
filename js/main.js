
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
//end
var mybutton = document.getElementById("scroll-top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
//   document.documentElement.animate= 1000;
// }
$('#topFunction').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });

  $(function() {
     
      $('.dropdown').has('.dropdown-menu')
      .mouseover(function(){
        $(this).children('.dropdown-menu').css('visibility','visible');
      })
      .mouseout(function(){
        $(this).children('.dropdown-menu').css('visibility','hidden');
      })
    
  });
  //image carsoul auto play
  $('.carousel').carousel()