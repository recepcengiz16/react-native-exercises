import axios from "axios";
import {API_URL} from "@env"

const appAxios = axios.create({
    baseURL:API_URL,
    withCredentials:false
});

export default appAxios;