const Obj = (name, address, hobbies, is_married, highSchool, university, professional,basic) => {

    const arrayError = [];

    if (!(typeof name === 'string')){
        arrayError.push('Nama bukan tipe String')
    }
    if (!(typeof address === 'string')){
        arrayError.push('Address bukan tipe String')
    }
    if (!(Array.isArray(hobbies))){
        arrayError.push('Hobbies bukan tipe array')
    }
    if (!(typeof is_married === 'boolean')){
        arrayError.push('is_married bukan tipe String')
    }
    if (!(typeof highSchool === 'string')){
        arrayError.push('High School bukan tipe String')
    }
    if (!(typeof university === 'string')){
        arrayError.push('university bukan tipe String')
    }
    if (!(typeof professional === 'string')){
        arrayError.push('university bukan tipe String')
    }
    if (!(typeof basic === 'string')){
        arrayError.push('university bukan tipe String')
    }

    if (arrayError.length !== 0){
        return JSON.stringify({arrayError});
    }

    return {
        name,
        address,
        hobbies,
        is_married,
        school : {
            highSchool,
            university 
        },
        skill: [{
            professional
        },
        {
            basic
        }]
    }
}

console.log(Obj("TM Fadhlul Mardhatillah", "Jalan Caman Raya No.25 A, Jatibening, Pondokgede, Kota Bekasi", ["membaca", "menulis"], false, "SMAN 4 BANDA ACEH", "-", "Photoshop, Premiere Pro & After Effect", "Javascript"))
