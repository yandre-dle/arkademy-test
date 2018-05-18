const jumlahUang = (uang) => {
    const jenisUang = [50000, 20000, 10000, 5000, 2000, 1000, 500]
    const uangTerpakai = [];

    let sisa = uang;

    const check = () => {
        jenisUang.forEach(element => {
            if (element <= sisa) {
                uangTerpakai.push(element);
                sisa -= element
                check()
            }
        });
    }

    check();

    const countNumber = (x) => {
        return uangTerpakai.filter(i => i === x).length;
    };

    let kata = '';
    jenisUang.forEach((element, index) => {
        const jumlah = countNumber(element);
        if (jumlah > 0) {
            if (element <= 500) {
                kata += `- ${jumlah} koin uang ${element}\n`
                return;
            }
            kata += `- ${jumlah === 1 ? 'se' : jumlah + ' '}lembar uang ${element}\n`
        }
    });


    return kata;
}

console.log(jumlahUang(122500))
