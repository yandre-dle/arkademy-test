let xhr = new XMLHttpRequest();
xhr.open('GET', '/data.db', true);
xhr.responseType = 'arraybuffer';

let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');

const tableHead = (input) => {
    input.forEach(element => {
        let th = document.createElement('th')
        let data = document.createTextNode(element.toUpperCase());

        th.appendChild(data);
        thead.appendChild(th);
    });
}

const tableBody = (input) => {
    input.forEach((data) => {
        let tr = document.createElement('tr');
        data.forEach((value) => {
            let td = document.createElement('td');
            let txt = document.createTextNode(value);

            td.appendChild(txt);
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    })
}

xhr.onload = function (e) {
    let uInt8Array = new Uint8Array(this.response);
    let db = new SQL.Database(uInt8Array);

    const hasil = db.exec('SELECT * FROM users JOIN posts ON users.id = posts.createdBy JOIN comments ON posts.id = comments.postId');
    hasil.forEach((data) => {
        tableHead(data.columns)
        tableBody(data.values)
    })
    console.log(hasil)
}
xhr.send();

