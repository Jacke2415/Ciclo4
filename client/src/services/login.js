import axios from 'axios';

const baseURL = 'http://localhost:5000/singin'

axios.defaults.withCredentials = true;

const login = async credentials => 
{
    const { data } = await axios.post(baseURL, credentials);
    return data;
}

export default login