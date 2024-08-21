import axios from "axios";

export default axios.create({

    baseURL: "http://79.175.177.113:15800/AimoonxNewsHUB/News/",
    withCredentials: true,
    withXSRFToken: true,
})