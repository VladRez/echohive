# EchoHive 
live site: http://echohive.herokuapp.com/#/
EchoHive lets people discover and enjoy the greatest selection of sound samples from the most diverse audio engineers. 

# Background and Overview

EchoHive is a minimal viable product that tackles three challenges in application development, software engineering, and user experience.

Primarily built with the combination of following technologies: 

+ MongoDB
+ Express
+ React
+ Node

# Functionality and MVP

+ Audio Sample show page and playback
+ Playing songs with a progress bar and continuous play when navigating the site
+ Users can add comments on to a song
+ Users have their own profile pages to show other users

**TBD**

+ Visual Waves
+ Playlists
+ Likes

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
+ Audio Player

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
+ Multer

Frontend:

+ React
+ React Native with Redux
+ Axios 

# Group Members and Work Plan Breakdown

## Team 

+ Leap Soto
+ Mac Scheer
+ Vlad Rez

## Plan

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
