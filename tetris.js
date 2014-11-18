var tetris = {};

//Draw the grid
tetris.drawPlayField = function(){
	for(var row=0;row<22;row++){
		$('#playfield').append('<tr class="'+row+'"></tr>');
		for (var col=0;col<10;col++){
			$('tr.'+row).append('<td id="'+col+'"></td>');
		}
	}
}

//Variable to store current coordiates
tetris.currentCoor = [{row:1,col:1},
											{row:1,col:2},
											{row:2,col:1},
											{row:2,col:2}];


//Fill the cells
tetris.fillCells = function(coordinates,fillColor){
	for(var i=0;i<coordinates.length;i++){
		var row = coordinates[i].row;
		var col = coordinates[i].col;
		var $coor = $('.'+row).find('#'+col);
		$coor.attr('bgcolor',fillColor);
	}
}


$(document).ready(function(){
	
	tetris.drawPlayField();
	tetris.fillCells(tetris.currentCoor,'black');

})