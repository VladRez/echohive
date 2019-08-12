# EchohHive 

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
    + Auth Backend routes
    + Auth Frontend Components
+ Day 2
    + Finish Redux store
    + Component Skeleton and Styling
        + user profile
        + track feed
        + user profile track index
        + track show page
+ Day 3
    + Backend Audio Upload
    + Frontend Audio Playback
+ Day 4
    + integrate 
    + Styling and UI/UX
+ Day 5

## Team 
+ Leap Soto
+ Mac Scheer
+ 