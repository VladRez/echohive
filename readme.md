# EchoHive 

Where artist echos the world. Platform to upload and share sounds.

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
+ Index
    + Feed
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
                    tracks: [1,2, 3], // track id's
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

+ Day 1
    + User Register Auth - Vlad
    + User Login Auth - Mac
    + Feed - Leap
+ Day 2
   + AWS setup - Vlad
   + User Profile - Mac
   + Track Show Page - Leap
+ Day 3
    + Audio Upload - Vlad
    + Audio Playback - Mac
    + Audio UI - Leap
+ Day 4
    + styling - Vlad/Mac/Leap
+ Day 5
    + Produciton Readme - Vlad/Mac/Leap

## Team 
+ Leap Soto
+ Mac Scheer
+ Vlad Rez