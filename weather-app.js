//a601b74fc83a288

var weatherWidget = {};

weatherWidget.apiUrl = 'http://api.wunderground.com/api/a601b747fc83a288/conditions/q/CANADA/toronto.json';

weatherWidget.init = function() {
	//The code in here is used to initialize our application
	weatherWidget.getData();
};

// When the page loads get some data
// Make an AJAX call to the wundergrounds API
weatherWidget.getData = function () {
	$.ajax( {
		url: weatherWidget.apiUrl,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(weatherData) {
		// console.log(weatherData);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};

weatherWidget.displayWeather = function(weather) {
	console.log(weather);

	var image = weather.icon_url;
		$('.weather_image').attr('src', image);

	var current = weather.weather;
		$('.weather_string').text(current);

	var temp = weather.temp_c;
		$('.temp_c').text(temp);

	var city = weather.display_location.city;
		$('.city_name').text(city);

	var dateTime = weather.local_time_rfc822;
		$('.date_time').text(dateTime);
};


//My Code//
// $.ajax( {
// 	url: 'http://api.wunderground.com/api/a601b747fc83a288/conditions/q/CA/San_Francisco.json',
// 	method: 'GET',
// 	dataType: 'json',
// 	data: {
// 		feature: 'conditions',
// 		feature: 'forcast'
// 	}

// }).then(function(data) {
// 	console.log(data);

// 	var weather = data.current_observation.weather;
// 	$('.weather_string').html('<span>' + weather + '</span>');

// 	var temp = data.current_observation.temp_c;
// 	$('.temp_c').html('<span>' + temp + '</span>');

// 	var city = data.current_observation.display_location.city;
// 	$('.city_name').html('<p>' + city + '</p>');

// 	var dateTime = data.current_observation.display_location.city;
// 	$('.date_time').html('<p>' + dateTime + '</p>');
// });

// // When the data returns, we want to display specific things (found on the HTML page)

$(document).ready(function(){
	weatherWidget.init();
});