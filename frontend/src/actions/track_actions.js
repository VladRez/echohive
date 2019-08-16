import {
  getTracks,
  getSingleTrack,
  createTrack,
  postTrack,
  getComments,
  postComment
} from "../util/track_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";
export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";
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

export const receiveNewTrack = track => ({
  type: RECEIVE_NEW_TRACK,
  track
});

///////////

export const receiveTrackComments = comments => ({
  type: RECEIVE_TRACK_COMMENTS,
  comments
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});

export const fetchComments = id => dispatch => {
  return getComments().then(comments => {
    let trackComments = comments.filter(com => com.track_id === id);
    return dispatch(receiveTrackComments(trackComments));
  });
};

export const createComment = data => dispatch => {
  return postComment(data).then(comment =>
    dispatch(receiveNewComment(comment))
  );
};
///////////////////

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

export const postTrackFile = (data, trackname, user) => dispatch => {
  return createTrack(data)
    .then(res => {
      let track = {};
      track.trackname = trackname;
      track.id = user;
      track.src_url = res.data.src_url;
      postTrack(track).then(mres => {
        dispatch(receiveNewTrack(mres));
      });
    })
    .catch(err => console.log(err));
};
