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
tetris.origin = {row:5,col:5};
tetris.currentShape = 'L';
tetris.currentCoor;


//Fill the cells
tetris.fillCells = function(coordinates,fillColor){
	for(var i=0;i<coordinates.length;i++){
		var row = coordinates[i].row;
		var col = coordinates[i].col;
		var $coor = $('.'+row).find('#'+col);
		$coor.attr('bgcolor',fillColor);
	}
}

//Move current shape
tetris.move = function(direction){
	var reverse = false;
	this.fillCells(this.currentCoor,'');
	
	for(var i=0;i<this.currentCoor.length;i++){
		if(direction === 'right'){
			this.currentCoor[i].col++;
			if(this.currentCoor[i].col>9){
				reverse = true;
			}
		} else if (direction === 'left'){
			this.currentCoor[i].col--;
			if(this.currentCoor[i].col<0){
				reverse = true;
			}
		}
	}
	this.fillCells(this.currentCoor,'black');

	if(reverse && direction === 'left'){
		this.move('right');
	} else if (reverse && direction === 'right'){
		this.move('left');
	}
}

//
tetris.shapeToCoor = function(shape,origin){
	if(shape === 'L'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col+1}]
	} else if(shape === 'J'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row+1,col:origin.col},{row:origin.row+1,col:origin.col-1}]
	} else if(shape === 'I'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-2,col:origin.col},{row:origin.row+1,col:origin.col}]
	} else if(shape === 'O'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col+1},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'S'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row-1,col:origin.col+1}]
	} else if(shape === 'T'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	} else if(shape === 'Z'){
		return [{row:origin.row,col:origin.col},{row:origin.row-1,col:origin.col},{row:origin.row-1,col:origin.col-1},{row:origin.row,col:origin.col+1}]
	}
}


$(document).ready(function(){
	
	tetris.drawPlayField();
	tetris.currentCoor = tetris.shapeToCoor(tetris.currentShape,tetris.origin);
	tetris.fillCells(tetris.currentCoor,'black');

	$(document).keydown(function(e){
		console.log(e.keyCode);
		if(e.keyCode === 39){
			tetris.move('right');
		} else if (e.keyCode === 37){
			tetris.move('left');
		}
	})

})