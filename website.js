
$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() >= 50){
         $('header').addClass('header-bg');
        }
         else if($('header').hasClass('header-bg')){
           $('header').removeClass('header-bg');
         
       }

    });
    $('.nav-icon .bars').click(function(){
        $('.bars .bar:first-child').toggleClass('bar-top-rotated');
        $('.bars .bar:nth-child(2)').toggleClass('bar-middle-disapeared');
        $('.bars .bar:last-child').toggleClass('bar-bottom-rotated');
        $('.own-navbar').toggleClass('navbar-active');
        
        
    });    
    $('.don-icon').click(function(){
      $('.nav-label .don-icon').toggleClass('don-icon-rotate');
      $('.nav-label .label-items').toggleClass('label-active');
      
  });
      
    
    });    
    ////////////////////////////////////////////////////////////////////////////////

    var myIndex = 0;
    carousel();
     function carousel() {
      var i;
      var x = document.getElementsByClassName("ownSlider");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "flex";  
       setTimeout(carousel, 5000); 

    }
    


 