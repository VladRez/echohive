import { getTracks, getSingleTrack, createTrack } from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";
export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";

export const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const receiveSingleTrack = track => ({
    type: RECEIVE_SINGLE_TRACK,
    track
});

export const receiveNewTrack = track => ({
    type: RECEIVE_NEW_TRACK,
    track
})

export const fetchTracks = () => dispatch => (
    getTracks()
        .then(tracks => dispatch(receiveTracks(tracks)))
        .catch((err) => {
            
            console.log(err);
            
        })
);

export const fetchSingleTrack = id => dispatch => (
    getSingleTrack(id)
        .then(track => dispatch(receiveSingleTrack(track)))
        .catch(err => console.log(err))
);

export const postTrack = data => dispatch => (
    createTrack(data)
        .then(track => dispatch(receiveNewTrack(track)))
        .catch(err => console.log(err))
);