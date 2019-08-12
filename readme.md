# MERN Project Proposal Draft - SoundCloud

## Team 
+ Leap Soto
+ Mac Scheer
+ Vlad Rez

## Core Functionality

### Features

+ Song CRUD
+ Playing songs with progress bar with continuous play
+ Comments
+ Profile pages

**TBD** - Wave Forms
**TBD** - Playlists
**TBD** - Likes

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
//store.getState()
{
    entities: {
        profiles: { 
                0: {
                    id: 0,
                    username: 'string',
                    authored_albums: [1,2,3],
                    liked_tracks: [1,2, 3], // track id's
                    profile_avatar_url: `path/to/image`
                }
        },
        tracks: {
            0: {
                id: 0,
                artist_id: 1,
                name: 'string',
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