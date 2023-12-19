import axios from 'axios';

const apiBack = axios.create({ baseURL: 'http://127.0.0.1:8000/api/user/'});

export default apiBack;