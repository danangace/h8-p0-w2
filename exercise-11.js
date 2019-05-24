function balikKata(kata) {
    var j = '';
    var length = kata.length-1;
  
    for ( i = length ; i >= 0; i-- ){
        j += kata[i];
    }
    return j     
  }
  
  
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS