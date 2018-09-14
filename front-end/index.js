//parallax js
$(document).ready(function(){
  var $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});

//menu transition js
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    	  if (scroll > 0) {
	    $(".navbar").addClass("navbar-scroll");
        }
    	  else{
		  $(".navbar").removeClass("navbar-scroll");
	  }
	  if (scroll > 200) {
	    $(".navbar").addClass("bg-primary");
	  }

	  else{
		  $(".navbar").removeClass("bg-primary");
	  }
  })
})


$(".myBox").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
        setTimeout(function() {
            $("."+selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});
