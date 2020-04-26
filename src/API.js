import Axios from 'axios';

const baseURL = 'https://api.unsplash.com';

const API = Axios.create({
  baseURL,
});

API.interceptors.request.use(request => {
  request.headers['Authorization'] = 'Client-ID 04baf238d1d2cef0eff0c622cafe1e5940c8dca6e5a3fb0de532ae2b3357b82a';
  return request;
});

API.interceptors.response.use(response => {
    localStorage.setItem('data', JSON.stringify(response.data));
    return response;
})


export default API;