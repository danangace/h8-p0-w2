var nama = 'Mikael';
var peran = 'Tabib';

if (nama === 'Mikael'&& peran === '') {
    console.log('"Halo Mikael, Pilih peranmu untuk memulai game!"');
} else if (nama === 'Nina' && peran === 'Ksatria') {
    console.log('"Selamat datang di dunia Proxytia, Nina"');
    console.log('"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"');
} else if (nama === 'Danu' && peran === 'Tabib') {
    console.log('"Selamat datang di dunia Proxytia, Danu"');
    console.log('"Halo Tabib Danu, kamu akan membantu temanmu yang terluka!"');
} else if (nama === 'Zero' && peran === 'Penyihir') {
    console.log('"Selamat datang didunia Proxytia, Zero"');
    console.log('"Halo penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"');
} else {
    console.log('"Nama harus diisi!"');
}