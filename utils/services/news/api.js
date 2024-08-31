import axios from "axios";

export default axios.create({

    // baseURL: "http://79.175.177.113:15800/AimoonxNewsHUB/",
    baseURL: "http://192.168.88.85:8000/api/",

    withCredentials: true,
    withXSRFToken: true,
    
})