(function() {
	var quoteButton = $('.quote-button');
			blockquote = $('blockquote');
	
	quoteButton.on('click', function(e) {
			e.preventDefault();
			var quoteButtonText = quoteButton.text();
		
			blockquote.sliceToggle(200, function() {
				quoteButtonText == "Show more" ? quoteButton.text("Show less") : quoteButton.text("Show more");
			});
	});
	
})();