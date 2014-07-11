	$(function(){
	   $(".includedContent").each(function(index, value){
			var url = $(this).attr('href');
			if ($(this).html() && $(this).html()!="")
				url += '?' + $(this).html();
			$(this).load(url); 
		});
		
		$('head').append('<link rel="stylesheet" href="css/style.css" type="text/css" />');
		
	});