import axios from "axios";
import config from '../config/config.json';

const axiosConf = axios.create({
    baseURL: config.baseUrl
});

export default axiosConf;