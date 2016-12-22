	$window = $(window);
	$body = $('body');
var author = $(".cover-heading"),
    quoteBody = $(".quoteBody"),
    twitter = $("#twitter"),
    nextButton = $("#next");
    $(document).ready(function(){
	    setInterval(function(){
	       var imageUrl = "img/"+Math.round(Math.random()*5+1)+".jpg";
	        $('body').css("background-image",'url('+imageUrl+')'); 	
			
	     }, 13000);	
    });
        function getQuote(){
	    	$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',function(response){
				var authorN = response.quoteAuthor || "Unknown";
				author.text(authorN);
				quoteBody.text(response.quoteText);
			});
	  }
	 nextButton.click(function(){
	 	 getQuote();
	 });

	 twitter.click(function(){
	 	 getQuote();
	 }) 