import axios from "axios";

export default axios.create({

    // baseURL: "http://79.175.177.113:15800/AimoonxNewsHUB/News",
    baseURL: "http://localhost:8000",
    
    withCredentials: true,
    withXSRFToken: true,
    
})