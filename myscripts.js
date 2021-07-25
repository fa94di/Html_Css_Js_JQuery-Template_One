    // Start Scrolling
$(document).ready(function(){

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });
//   End Scrolling

//   Start Header Icon
$("#icon").click(function (){
    $(".header .links ul").toggle(400);
});
$("#portofolio").click(function (){
    $("#portofolio").slideUp("size");
});
    // End Header Icon