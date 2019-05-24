//1. LOOPING


var rows1 = 5;

for (i = 1; i <= rows1; i++){
    console.log('*');
}


//2. NESTED LOOPING PART 1

var rows2 = 5;
var word = '';

for (var i = 1; i <= rows2; i++) {
    for(var j = 1; j <= rows2; j++) {
        word += '*'
    }
    console.log(word);
    word = '';
}


//3. NESTED LOOPING PART 2

var rows3 = 5;

for (var i = rows3; i >= 1; i--) {
    var word = '';                                              
    for (var j = i; j <= rows3; j++) {
    word += '*';
    }
    console.log(word);
}