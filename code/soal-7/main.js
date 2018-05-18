var xhr = new XMLHttpRequest();
xhr.open('GET', '/data.db', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  var db = new SQL.Database(uInt8Array);


  const buttonSubmit = document.getElementById('inputUsername');
        buttonSubmit.addEventListener('click',(e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('username').value;
            // db.run("INSERT INTO users VALUES (?,?)", [3,'Yola']);

            const hasil = db.exec('SELECT * FROM users JOIN posts ON users.id = posts.createdBy JOIN comments ON posts.id = comments.postId');
            console.log('hasil: ', hasil);

        })
};
xhr.send();

