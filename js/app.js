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
       
	 nextButton.click(function(){
	 	 getQuoteData();
	 });
	function displayData(response){
		  		var authorN = response.quoteAuthor || "Unknown";
					author.text(authorN);
					quoteBody.text(response.quoteText);
	};
	 twitter.click(function(){
	 	 getQuoteData();
	 });
	 function getQuoteData(){
		var script = document.createElement("script"); 
		script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=displayData"; 
		document.getElementsByTagName("head")[0].appendChild(script);
	};