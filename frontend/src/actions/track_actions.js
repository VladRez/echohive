import {
  getTracks,
  getSingleTrack,
  createTrack,
  postTrack,
  getUserTracks,
  getComment,
  getComments,
  postComment

} from "../util/track_api_util";


export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";

export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";
// export const RECEIVE_ALL_TRACK_COMMENTS = "RECEIVE_ALL_TRACK_COMMENTS";
export const RECEIVE_USER_TRACKS = "RECEIVE_USER_TRACKS";

export const RECEIVE_TRACK_COMMENTS = "RECEIVE_TRACK_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";


export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveSingleTrack = track => ({
  type: RECEIVE_SINGLE_TRACK,
  track
});


export const receiveTrackComments = comments => ({
  type: RECEIVE_TRACK_COMMENTS,
  comments
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});


export const receiveUserTracks = tracks => ({
  type: RECEIVE_USER_TRACKS,
  tracks
});


export const fetchComments = (trackId) => dispatch => {
  return getComments(trackId).then(comments => {
    console.log(comments)
    let trackComments = comments.data;
    return dispatch(receiveTrackComments(trackComments));
  });
};

export const createComment = data => dispatch => {
  return postComment(data).then(comment =>
    dispatch(receiveNewComment(comment))
  );
};


export const fetchTracks = () => dispatch =>
  getTracks()
    .then(tracks => dispatch(receiveTracks(tracks)))
    .catch(err => {
      console.log(err);
    });

export const fetchSingleTrack = id => dispatch =>
  getSingleTrack(id)
    .then(track => {
      return dispatch(receiveSingleTrack(track));
    })
    .catch(err => console.log(err));


export const fetchUserTracks = id => dispatch => (
    getUserTracks(id)
        .then(tracks => dispatch(receiveUserTracks(tracks)))
        .catch(err => console.log(err))
);

export const postTrackFile = (data, trackname, user, history) => dispatch => {
  return createTrack(data)
    .then(res => {
      let track = {};
      track.trackname = trackname;
      track.id = user;
      track.src_url = res.data.src_url;
      postTrack(track).then(mres => {
        new Promise((resolve, reject) => {
        dispatch(receiveSingleTrack(mres));
        resolve()
        }).then(() => {
            history.push(`/tracks/${track.id}`)
            });
      });
    })
    .catch(err => console.log(err));
};

