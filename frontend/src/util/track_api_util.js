import axios from "axios";

export const getTracks = () => {
  return axios.get("/api/tracks/");
};

export const getUserTracks = id => {
    return axios.get(`/api/tracks/users/${id}`);
}

export const getSingleTrack = id => {
  return axios.get(`/api/tracks/${id}`);
};

export const getNavTrack = id => {
  return axios.get(`/api/tracks/${id}`);
};

export const createTrack = data => {
  return axios.post("/api/newtrack/", data);
};

export const postTrack = data => {
  return axios.post("/api/tracks/", data);
};

export const getComments = (trackId) => {
  return axios.get(`/api/comments/${trackId}`);
};

export const postComment = data => {
  return axios.post("/api/comments/", data);

};
