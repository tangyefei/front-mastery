 var s1 = 'BBC ABCDAB ABCDABCDABDE', 
 	 s2 = 'ABCDABD',
 	 s3 = 'ABCDABE',
 	 s4 = 'DAB ABCDAB',

 	 /*
 	 calculate str's common len between pre and aft
 	 aftCommonPre('abc') == 0 
 	 aftCommonPre('abca') == 1
 	 aftCommonPre('abcab') == 2 
 	 aftCommonPre('abcabd') == 0 
 	 */
 	 aftCommonPre = function(str) {
 		var count = 0;
 		for (var i = 0, len = str.length; i < len - 1; i++) {
 			var pre = str.substring(0, i + 1);
 			var aft = str.substring(str.length - i - 1);
 			if(pre == aft)
 				count = pre.length;
 		}
 		return count;
 	},

 	isSubString = function(s1, s2) {
 	 	var hash = {'':0};
 	 	//record sub string's common pre/after length
 	 	for(var i = 0, len = s2.length; i < len; i++) 
 	 	{
 	 		var sub = s2.substring(0, i + 1);
 	 		hash[sub] = aftCommonPre(sub);
 	 	}

 	 	var init = 0, commonStr;

 	 	for (var i = init; i < s1.length - s2.length; i++) {

 	 		commonStr = '';

 	 		for(var j = 0; j < s2.length; j++) {

 	 			var sub1 = s1.substr(init, j + 1);
 	 			var sub2 = s2.substr(0, j + 1);

 	 			if(sub1 == sub2) {
 	 				if(j == s2.length - 1) 
 	 					return true;
 	 				else 
 	 					commonStr = sub1;
 	 			}
 	 			else{
 	 				init += (commonStr.length > 0 ? (commonStr.length - hash[commonStr]) : 1);
 	 				break;
 	 			} 
 	 			
 	 		}
 	 	}
	 	return false;
 	 };


console.log('"' + s2 + '" ' + (isSubString(s1, s2) ? 'is' : 'not') + ' substring of "' + s1 + '"');
console.log('"' + s3 + '" ' + (isSubString(s1, s3) ? 'is' : 'not') + ' substring of "' + s3 + '"');
console.log('"' + s4 + '" ' + (isSubString(s1, s4) ? 'is' : 'not') + ' substring of "' + s4 + '"');
