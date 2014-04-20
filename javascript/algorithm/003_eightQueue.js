
var queuePlaces,
	board,
	count;

function initArray(rows, cols, init) {
	var array = new Array(rows);
	for (var i = 0; i < rows; i++) {
		array[i] = new Array(cols);
		for (var j = 0; j < cols; j++) {
			array[i][j] = init;
			//console.log(i + ':' + j + ' = ' + init);
		}	
	}	
	return array;
}

function logArray (array) {
	var out = '';
	for (var i = 0; i < array.length; i++) {
		out += array[i].toString() + '\n';
	}
	console.log(array);
}

function placeQueue(ithQueue) {
	if(ithQueue == 8) {
		count ++;
		return;
	}

	for (var i = 0; i < 8; i++) {

		if(board[i][ithQueue] == -1) {

			board[i][ithQueue] = ithQueue;
			for (var k = count; k < 92; k++) {
				queuePlaces[k][ithQueue] = i + 1;
			}

			for (var r = 0; r < 8; r++) {
				for (var s = 0; s < 8; s++) {	
					if(board[r][s] == -1 && (r == i || s == ithQueue || Math.abs(r - i) == Math.abs(s - ithQueue))){
						board[r][s] = ithQueue;
					}
				}
			}
			placeQueue(ithQueue + 1);

			for (var r = 0; r < 8; r++) {
				for (var s = 0; s < 8; s++) {	
					if(board[r][s] == ithQueue){
						board[r][s] == -1;
					}
				}
			}
		}
	}
}

count = 0;
queuePlaces = initArray(92, 8, 0),	
board = initArray(8, 8, -1);
// logArray(queuePlaces);
// logArray(board);
placeQueue(0);

logArray(queuePlaces);
	