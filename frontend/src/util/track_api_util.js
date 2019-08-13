import axios from 'axios';

export const getTracks = () => {
    return axios.get('/api/tracks/')
};

export const getSingleTrack = id => {
    return axios.get(`/api/user/${id}`)
};

export const createTrack = data => {
    return axios.post('/api/tracks/', data)
}