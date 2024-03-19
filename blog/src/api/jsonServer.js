import axios from 'axios';

export default axios.create({
    baseURL: "http://192.168.12.191:3000/blogpost"
});