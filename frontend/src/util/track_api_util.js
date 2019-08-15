import axios from 'axios';

export const getTracks = (id) => {
    return axios.get('/api/tracks/', id)
};

export const getSingleTrack = id => {
    return axios.get(`/api/tracks/${id}`)
};

export const createTrack = data => {
    return axios.post('/api/newtrack/', data)
}

export const postTrack = data => {
    return axios.post('/api/tracks/', data)
};

export const getUserTracks = id => {
    return axios.get(`/api/tracks/user/${id}`)
};