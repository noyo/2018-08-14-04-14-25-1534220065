var ss = [['._.', '...', '._.', '._.',   '...',   '._.',   '._.',   '._.',   '._.',   '._.'],
			['|.|', '..|', '._|', '._|',   '|_|',   '|_.',   '|_.',   '..|',   '|_|',   '|_|'],
			['|_|', '..|', '|_.', '._|',   '..|',   '._|',   '|_|',   '..|',   '|_|',   '..|']];

function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}

module.exports = function main(var1) {
	var len = strlen(var1);
	console.log(len);
	var res = '';
	for (var i = 0; i < 3; i++) {
		res = res + ss[i][Number(var1[0])];
		for (var j = 1; j < len; j++) {
			var k = Number(var1[j]);
			res = res + ' ' + ss[i][k];
		}
		res = res + '\n';
	}
	
	return res;
};