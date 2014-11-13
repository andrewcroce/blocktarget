(function($){

	$.blocktarget = function( options ){

		var settings = $.extend({
			'linkClass' : 'block-target-link',
			'blockClass' : 'block-target'
		}, options );

		$('.'+settings.blockClass).on('click touchend',function(){
			var small_target = $(this).find('.'+settings.linkClass),
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
	};

	$(document).ready(function(){
		$.blocktarget();
	});

})(jQuery);