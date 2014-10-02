var sales1 = $('.sales1')
var salesDetails1 = $('.sales__details1')

var buttonClickHandler = function () {
	var currentState = salesDetails1.attr('data-state');
	
	if (currentState == 'active') {
		salesDetails1.attr('data-state', 'inactive')
	} else {
		salesDetails1.attr('data-state', 'active')	
	}
};

sales1.on('click', buttonClickHandler);