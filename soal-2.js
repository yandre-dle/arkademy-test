const userValidation = (username) => {
    let user = /[^a-z\d ]/;
    return !(user.test(username));
}
const emailValidation = (email) => {
    let userEmail = /\S+@\S+\.\S+/;
    return userEmail.test(email)
}

const phoneValidation = (phone_number) => {
    let userPhone = /[^ +\d]/
    return !(userPhone.test(phone_number))
}

function validator(username, email, phone_number) {
    if (userValidation(username) == true) {
        console.log("Username Valid!");
    } else {
        console.log("Username Invalid, hanya boleh berisi (0-9 | lower case)");
    }
    if (emailValidation(email) == true) {
        console.log("Email Valid!");
    } else {
        console.log("Email Invalid, Hanya boleh berisi example@example.com");
    }
    if (phoneValidation(phone_number) == true) {
        console.log("Nomor HP Valid!");
    } else {
        console.log("Nomor HP Invalid, Hanya Boleh Berisi (0-9 | + | space)");
    }
}

validator("tmfadhlul", "tmfadhlul@gmail.com", "+62822 1828 1678")