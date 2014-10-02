var sales1 = $('.sales1');
var salesD1 = $('.sales__details1');

var buttonClickHandler = function () {
	var currentState = salesD1.attr('data-state');
	
	if (currentState == 'active') {
		salesD1.attr('data-state', 'inactive')
	} else {
		salesD1.attr('data-state', 'active')	
	}
};

sales1.on('click', buttonClickHandler);