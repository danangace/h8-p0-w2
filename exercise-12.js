function konversiMenit(menit) {

    var jamBaru = menit/60
    var jamKu = Math.floor(jamBaru)
    var menitBaru = menit % 60

if (menitBaru < 10){
        menitBaru = '0' + menitBaru
    }
    
    var hasil = Math.floor(jamBaru) + ":" + menitBaru
    
    return hasil
}    

  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));