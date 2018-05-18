const print = () => {
    const kata = [
        [0, 1, 5, 11],
        [0, 2, 5, 11],
        [0, 3, 5, 8, 11],
        [0, 3, 5, 7, 8, 9, 11],
        [0, 2, 5, 6, 10, 11],
        [0, 1, 5, 11],
    ]
    let baris = '';
    kata.forEach(element => {
        for (let i = 0; i <= 11; i++) {
            if (element.includes(i)) {
                baris += 'DW'
            } else {
                baris += '  '
            }
        }
        baris += '\n'
    })
    return baris
}

console.log(print())