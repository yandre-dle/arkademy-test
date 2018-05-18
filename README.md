# Arkademy Test

Berikut adalah jawaban dari soal seleksi arkademy bootcamp #2

## Soal Nomor 1 s/d 5

Soal 1 - 5 berada pada direktori :

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

* [Direktory Jawaban](https://github.com/tmfadhlul/arkademy-test/tree/master/code/soal-6) - beserta documentasi dan querry;

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

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

