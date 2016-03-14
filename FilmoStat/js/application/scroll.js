 
    $(document).ready(function(){
     $('body').scrollspy({target: ".navbar", offset: 50});   

     $("#myNavbar a").on('click', function(event) {

       event.preventDefault();

       var hash = this.hash;
       $('html, body').animate({
          scrollTop: ($(hash).offset().top)-50
      }, 900, function(){


          window.location.hash = hash;
      });
   });
 });

 