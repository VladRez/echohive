# EchoHive 

EchoHive lets people discover and enjoy the greatest selection of sounds from the most diverse creators. 

# Background and Overview

A minimal viable product that tackles three challenges in application development, software engineering, and user experience.

Primarily built with the MERN stack, a combination of following four technologies: 

+ MongoDB
+ Express
+ React
+ Node

# Functionality and MVP

+ Song (CRUD)
+ Playing songs with progress bar, with continuous play
+ Comments on a song
+ Profile pages

**TBD** - Wave Forms

**TBD** - Playlists

**TBD** - Likes


# Technologies and Technical Challenges

### Site Map

+ Auth
    + Register
    + Login
    + Logout
+ Feed
    + Track index
+ Show - Artist/User
    + Index - Artist/User Tracks
    + Show - Artist/User Track

### Redux Store

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

Backend: 

+ Mongodb
+ Nodejs
+ Express

Frontend:

+ React
+ React Native with Redux

# Group Members and Work Breakdown

## Team 

+ Leap Soto
+ Mac Scheer
+ Vlad Rez

+ Day 1
    + Session Auth API Setup - Vlad
    + AWS and Mongodb Setup - Mac
    + Main User Feed API Setup - Leap

+ Day 2
   + Session Signup/Login UI - Vlad
   + Upload Track API and UI - Mac
   + Track Show backend API and UI - Leap

+ Day 3
    + User Profile- Vlad
    + User Comments - Mac
    + Track Audio Player Controller - Leap

+ Day 4
    + Refactor and CSS - Vlad/Mac/Leap

+ Day 5
    + Deploy to Heroku - Vlad/Mac/Leap
    + Produciton Readme - Vlad/Mac/Leap
