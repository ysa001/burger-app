import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-81ace-default-rtdb.firebaseio.com/'
});

export default instance;