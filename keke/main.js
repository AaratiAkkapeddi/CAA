
/*
黑色 black
白色 white
黄色 yellow
宝蓝 sapphire blue
红 red
蓝 blue
绿 green
*/



var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
   	  var height = $('.container').height()
      var frame = data[i];

		// var black = frame["黑色"] * 2
		var white = frame["白色"] * 2
		var yellow = frame["黄色"] * 2
		var bblue = frame["宝蓝"] * 2
		var red = frame["红"] * 2
		var blue = frame["蓝"] * 2
		var green = frame["绿"] * 2
		var total = frame["FIELD8"] * 2

		// $('.black').css('height', black + 'px')
		$('.container').height(total + 'px')
		$('.white').css('height', white + 'px')
		$('.yellow').css('height', yellow + 'px')
		$('.bblue').css('height', bblue + 'px')
		$('.red').css('height', red + 'px')
		$('.blue').css('height', blue + 'px')
		$('.green').css('height', green + 'px')

          //  your code here
      i = i+2;                     //  increment the counter
      if (i < data.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 100)
}

myLoop(); 



	

