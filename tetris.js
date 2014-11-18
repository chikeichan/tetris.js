var tetris = {};

//Draw the grid
tetris.drawPlayField = function(){
	for(var row=0;row<22;row++){
		$('#playfield').append('<tr class="'+row+'"></tr>');
		for (var col=0;col<10;col++){
			$('.'+row).append('<td id="'+col+'"></td>');
		}
	}
}




$(document).ready(function(){
	
	tetris.drawPlayField();

})