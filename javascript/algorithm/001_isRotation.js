String.prototype.replaceAt=function(index, character) { 
     return this.substr(0, index) + character + this.substr(index+character.length); 
} 

var str = '123456789',
n = 3, 
len = str.length, 
reverse = function(s, e) { 
     var temp; while(s < e) { 
          temp = str[s]; 
          str = str.replaceAt(s, str[e]);
          str = str.replaceAt(e, temp);
          s ++; 
          e --; 
     } 
}; 
reverse(0, n - 1); 
reverse(n, len - 1); 
reverse(0, len - 1); 
alert(str);