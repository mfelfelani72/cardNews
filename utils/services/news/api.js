import axios from "axios";

export default axios.create({

    // baseURL: "http://79.175.177.113:15800/AimoonxNewsHUB/",
    baseURL: "http://localhost:8001/api/",

    withCredentials: true,
    withXSRFToken: true,
    
})