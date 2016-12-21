	$window = $(window);
	$body = $('body');
var author = $(".cover-heading"),
    quoteBody = $(".lead quoteBody"),
    nextButton = $("#next");
    $(document).ready(function(){
	    setInterval(function(){
	    try{
	    	var imageUrl = "https://unsplash.it/1000/?image="+Math.round(Math.random()*1080);
	        $('body').css("background-image",'url('+imageUrl+')'); 
	      }catch(ex){
             console.log(ex);
	      }  
	    	
	     }, 13000);	
    });
    