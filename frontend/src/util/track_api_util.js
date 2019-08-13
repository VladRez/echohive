import axios from 'axios';

export const getTracks = () => {
    return axios.get('/api/tracks')
};

export const getSingleTrack = id => {
    return axios.get(`/api/user/${id}`)
};

export const postTrack = data => {
    return axios.post('/api/tweets/', data)
}