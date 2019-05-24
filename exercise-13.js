function xo(str) {
    var hitungX = 0;
    var hitungO = 0;
    var length = str.length-1
  
    for (i = 0; i <= length; i++){
      if ( str[i] === 'x' || str[i] === 'X'){
        hitungX = hitungX + 1;
      } else 
        hitungO = hitungO + 1;
    } 
  
    if ( hitungX === hitungO){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true