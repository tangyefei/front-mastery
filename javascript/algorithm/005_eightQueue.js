
var queuePlaces,
	result,
	lineVetical,
	line1 ,
	line2,
	count;

function initArray(init, rows, cols) {
	var array = new Array(rows);
	for (var i = 0; i < rows; i++) {
		if(arguments.length == 3) {
			array[i] = new Array(cols);
			for (var j = 0; j < cols; j++) {
				array[i][j] = init;
			}	
		}	
		else if(arguments.length ==2) {
			array[i] = init;
		}
	}
	return array;
}

function logArray (array) {
	var out = '';
	for (var i = 0; i < array.length; i++) {
		out += array[i].toString() + '\n';
	}
	console.log(out);
}

function placeQueue(i) {
	if(i == 8) {
		for (var j = 0; j < 8; j++) {
			queuePlaces[count][j] = result[j] + 1;
		}
		count ++;
		return;
	}

	for (var j = 0; j < 8; j++) {

		if(lineVetical[j] && line1[j + i] && line2[i - j + 9])
		{
			result[i] = j;

			lineVetical[j] = line1[j + i] = line2[i - j + 9] = false;
			placeQueue(i + 1);
			lineVetical[j] = line1[j + i] = line2[i - j + 9] = true;
		}
	}
}

count = 0;
queuePlaces = initArray(0, 92, 8),	
result = initArray(0, 8);
lineVetical = initArray(true, 8);
line1 = initArray(true, 17);
line2 = initArray(true, 17);

placeQueue(0);
logArray(queuePlaces);
	