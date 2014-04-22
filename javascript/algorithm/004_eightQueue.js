var count,
	ans,
	results;

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
	console.log(out);
}


function putQueue(i) { // i 代表行
	if(i == 8) {
		for(var j = 0; j < 8; j++) {
			ans[count][j] = results[j] + 1;
		}
		count ++;
		return;
	}
	for (var j = 0; j < 8; j++) {
		for(var k = 0; k < i/*results.length*/; k++) {
			if(results[k] == j || Math.abs(i - k) == Math.abs(results[k] - j))
				break;
		}
		if(k == i) {
			results[i] = j;
			putQueue(i + 1);
		}
	}
}
count = 0;
results = new Array(8);
ans = initArray(92, 8, 0);
putQueue(0);
logArray(ans);


