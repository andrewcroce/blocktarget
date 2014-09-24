(function($){

$(document).ready(function(){
	$('.block-target').on('click touchend',function(){
		var small_target = $(this).find('.block-target-link'),
			target = small_target.attr('target');
		if( typeof target === typeof undefined || target === false ){
			target = '_self';
		}
		try{
			window.open( small_target.attr('href'), target);
			return false;
		} catch(e){
			window.location.href = small_target.attr('href');
			return false;
		}
	});
});

})(jQuery);