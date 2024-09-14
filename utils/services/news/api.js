import axios from "axios";

export default axios.create({

    baseURL: "http://79.175.177.113:15800/AimoonxNewsHUB/",

    headers: {
        'Accept-Version': 1,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': '92223bf504efcfd0e6e000ba1f4d53f4'
    },

    withCredentials: true,
    withXSRFToken: true,
    
})