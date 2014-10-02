var sales1 = $('.sales1');
var salesD1 = $('.sales__details1');
var sales2 = $('.sales2');
var salesD2 = $('.sales__details2');

var buttonClickHandler = function () {
	var currentState = salesD1.attr('data-state');
	
	if (currentState == 'active') {
		salesD1.attr('data-state', 'inactive')
	} else {
		salesD1.attr('data-state', 'active')	
	}
};

sales1.on('click', buttonClickHandler);

var buttonClickHandler = function () {
	var currentState = salesD2.attr('data-state');
	
	if (currentState == 'active') {
		salesD2.attr('data-state', 'inactive')
	} else {
		salesD2.attr('data-state', 'active')	
	}
};

sales2.on('click', buttonClickHandler);