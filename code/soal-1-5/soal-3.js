const serialNumber = () => {
    let license = new Array(12).join((Math.random().toString(36)).slice(2, 18)).slice(0, 16);
    return license.toUpperCase().replace(/(\w{4})/g, '$1' + "-").substr(0, 19);
}

const generate = (loop) => {
    for (let i = 0; i < loop; i++) {
        console.log(serialNumber())
    }    
}

generate(300)
