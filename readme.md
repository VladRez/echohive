<h1 align="center">EchoHive</h1>
<div align="center">Discover and enjoy the greatest selection of sound samples from the most diverse audio engineers.</div>

<div align="center">
  <!-- Stability -->
<img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  <!-- NPM version -->
  <img src="https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen"
      alt="NPM version" />
  <!-- Build Status -->
 <img src="https://img.shields.io/badge/build-passing-brightgreen"
      alt="Build Status" />
</div>

[Live Site][1]

## Table of Contents

---

- [Features](#features)
- [Background](#background)

## Features

- Login / Registration Authentication
- AWS Storage
- React Redux Store
- Audio Sample Playback
- Playing songs with a progress bar and continuous play when navigating the site
- Users can add comments on to a song
- Users have their own profile pages to show other users

### Authentication


![session](docs/echo_hero.png)

Implements Authentication with BCrypt & JavaScript Web Token

```js
// config

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      done();
    })
  );
};
```

### AWS

Setting up aws and multer configuration for aws file storage.

```js
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const ACCESS_KEY = require("../config/keys").AWS_ACCESS_KEY;
const SECRET_ACCESS_KEY = require("../config/keys").AWS_SECRET_ACCESS_KEY;

aws.config.update({
  secretAccessKey: SECRET_ACCESS_KEY,
  accessKeyId: ACCESS_KEY,
  region: "us-east-2"
});
var s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "audio/mp3" ||
    file.mimetype === "audio/wav" ||
    file.mimetype === "audio/flac"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid Mime Type, only MP3, WAV and FLAC allowed" + file.mimetype
      ),
      false
    );
  }
};

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "echo-hive-dev",
    acl: "public-read",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING_META_DATA" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});
```

---

## Background

### Technologies and Technical Challenges

EchoHive is a minimal viable product that tackles three challenges in application development, software engineering, and user experience. 

Primarily built with MERN (MongoDB, Express, React, Node)

### MongoDB Models

Users

```js

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

```
Tracks 

```js

const TrackSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    trackname: {
        type: String,
        required: true
    },
    comment_ids: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    src_url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
```

Comments

```js
const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {  //added this, still testing
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: "tracks"
  }
});
```
### Express Routes

API Routes

+ `/api/users/` - Register / Login users
+ `/api/tracks/` - Tracks CRUD
+ `/api/comments/` - User Comments CRUD

### React Store

Frontend React-Redux store layout.

```js
{
    entities: {
        users: {
                0: {
                    id: 0,
                    username: 'string',
                    profile_avatar_url: `path/to/image`
                }
        },
        tracks: {
            0: {
                id: 0,
                artist_id: 1,
                comment_id: [1,2,3],
                name: 'string',
            }
        },
        comments: {
            0 : {
                id: 0,
                track_id: 1,
                author_id: 0,
                body: 'string'
            }
        }
    },
    errors: {
        session: [],
        profile: []
    },
    session: {
        userId: 0
    }
}
```


[1]: http://echohive.herokuapp.com/#/
