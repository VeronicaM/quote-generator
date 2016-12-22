	$window = $(window);
	$body = $('body');
var author = $(".cover-heading"),
    quoteBody = $(".quoteBody"),
    twitter = $("#twitter"),
    nextButton = $("#next"),
    index = 0;
    $imageEls = $('.toggle-image'); // Get the images to be cycled.

    $(document).ready(function(){
	    setInterval(function(){
	        index = index + 1 < $imageEls.length ? index + 1 : 0;
	        // Show the next image.
	        $imageEls.eq(index).addClass('show');
	        // Hide the previous image.
	        $imageEls.eq(index - 1).removeClass('show');
			
	     }, 23000);	
    });
       
	 nextButton.click(function(){
	 	 getQuoteData();
	 });
	function displayData(response){
		  		var authorN = response.quoteAuthor || "Unknown";
					author.text(authorN);
					quoteBody.text(response.quoteText);
	};
	 twitter.click(function(){
	 	     var textToTweet = quoteBody.text()+"by "+author.text();
		 	 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
		 	 window.open(twtLink,'_blank');
	 });
	 function getQuoteData(){
		// var script = document.createElement("script"); 
		// script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=displayData"; 
		// document.getElementsByTagName("head")[0].appendChild(script);
    	$.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    	 function(response){
    	 	 displayData(response);
    	 	 $body.removeClass('loading');
    	 	 $(".site-wrapper").removeClass('hideOnLoad');
    	 });
	};

