//1. PERULANGAN GANJIL GENAP

for (var i = 1; i < 101; i++) {
    if (i % 2 == 0) {
        console.log('Counter ke ' + i + ' = GENAP');
    } else {
        console.log('Counter ke ' + i + ' = GANJIL');
    }
}

//2. PERULANGAN KELIPATAN 3

for (var j = 1; j < 101; j += 2) {
    if (j % 3 == 0 ) {
        console.log('Counter sekarang ' + j + ' = ' + j + ' kelipatan 3');
    } else {
        console.log('Counter sekarang ' + j + ' = ');
    }
}

//3. PERULANGAN KELIPATAN 6

for (var k = 1; k < 101; k += 5) {
    if (k % 6 == 0 ) {
        console.log('Counter sekarang ' + k + ' = ' + k + ' kelipatan 6');
    } else {
        console.log('Counter sekarang ' + k + ' = ');
    }
}

//4. PERULANGAN KELIPATAN 10

for (var l = 1; l < 101; l += 9) {
    if (l % 10 == 0 ) {
        console.log('Counter sekarang ' + l + ' = ' + l + ' kelipatan 10');
    } else {
        console.log('Counter sekarang ' + l + ' = ');
    }
}