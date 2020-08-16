import axios from 'axios';
import { HOST_URL } from '../constants';

const request = async (url, requestType, data = {}) => {
    let axiosInstance = axios.create({
        
      });

    let request = await axios({
        baseURL: HOST_URL,
        url: url,
        method: requestType,
        data: data
    })
    .then(response => {
        return response.data
    })
    .catch( error => {
        throw error
    })

    return request
}

export default request