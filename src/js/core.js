$(function() {
	
	if ($('body').is('.splitview')) {

		var href = $('body > nav > a.selected, body > nav > a:first-child')
			.attr('href').replace('#', '');
		
		$('#' + href).css('display', 'block');

		$('a').tap(function() {
			console.log('asd');
		});
	}
});