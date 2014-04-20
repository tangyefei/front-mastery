$(function(){
	$body = $('body');
	
	$('.nav').on('click', 'a', function(){
		var cls = $(this).parent().attr('class');
		$body.attr('id', cls);
		return false;
	})
})
