import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:27017/geek4tv'
});

export default instance;
