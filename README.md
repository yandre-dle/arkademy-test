# Arkademy Test

Berikut adalah jawaban dari soal seleksi arkademy bootcamp #2

## Soal Nomor 1 s/d 5

Directory Soal 1 - 5 :

* [soal 1 s/d 5](https://github.com/tmfadhlul/arkademy-test/tree/master/code/soal-1-5) - Menggunakan javascript;

### package.json

```
{
  "name": "arkademy-test",
  "version": "1.0.0",
  "description": "Jawaban test seleksi bootcampt arckademy",
  "scripts": {
    "soal-1": "node soal-1.js",
    "soal-2": "node soal-2.js",
    "soal-3": "node soal-3.js",
    "soal-4": "node soal-4.js",
    "soal-5": "node soal-5.js",
    "soal-6": "node soal-6.js",
    "soal-7": "node soal-7.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tmfadhlul/arkademy-test.git"
  },
  "author": "Teuku Fadhlul",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/tmfadhlul/arkademy-test/issues"
  },
  "homepage": "https://github.com/tmfadhlul/arkademy-test#readme"
}
```

## Soal Nomor 6
Directory Soal 6 :
* [SQLITE](https://github.com/tmfadhlul/arkademy-test/tree/master/code/soal-6) - beserta documentasi dan querry;

### Querry
```
sqlite3 (database_name);

CREATE TABLE users (
                id INTEGER,
                username STRING,
                CONSTRAINT users_PK PRIMARY KEY (id)
);

CREATE TABLE posts (
                id INTEGER,
                title STRING,
                content STRING,
                createdBy INTEGER,
                CONSTRAINT posts_PK PRIMARY KEY (id),
                CONSTRAINT posts_users_FK FOREIGN KEY (createdBy) REFERENCES users(id)
);

CREATE TABLE comments (
                id INTEGER,
                comment STRING,
                postId INTEGER,
                CONSTRAINT comments_PK PRIMARY KEY (id),
                CONSTRAINT comments_posts_FK FOREIGN KEY (postId) REFERENCES posts(id)
);

INSERT INTO users (username) VALUES ("Teuku Fadhlul");
INSERT INTO posts (title, content, createdBy) VALUES ("Berita MotoGP", "Marquez tercepat di FP 1 MotoGP Prancis", 1); 
INSERT INTO comments (comment, postId) VALUES ("ah masa", 1);
INSERT INTO comments (comment, postId) VALUES ("serius?", 1);
INSERT INTO comments (comment, postId) VALUES ("bonbin mana?", 1);
```
## Soal Nomor 7

Request data dari data.db yang dibuat pada soal nomor 6 :
* [Arkademy Test](https://github.com/tmfadhlul/arkademy-test/tree/master/code/soal-7) - website akan berjalan di port: 8000;

### Installasi
* [Install node js](https://nodejs.org/en/download/) - Untuk Local Server
* Install required library
    ```
    npm init
    npm install express;
    ```
* Jalankan server dengan
    ```
    node index.js
    ```
### Built With
* [Kripken sql.js](https://github.com/kripken/sql.js/tree/master/js) - SQLite compiled to JavaScript through Emscripten 
* [express](https://expressjs.com/) - Node.js web application framework

## Authors

* **Teuku Fadhlul** - Dibuat untuk seleksi Arkademy #2


