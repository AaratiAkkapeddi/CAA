console.log('hi')



for (var i = data.length - 1; i >= 0; i--) {
	var strawberry = $('<div class="strawberry ' + data[i]["country"] + " " + data[i]["shape"] +'"></div>')
    
    strawberry.css("width", data[i]["duration (seconds)"]/100 + "px")

	$('.container').append(strawberry)

}