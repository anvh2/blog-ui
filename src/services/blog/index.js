import axios from "axios";

export const blogClient = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN_BLOG,
    timeout: 3000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
    }
});

export const imageClient = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN_IMAGES,
    timeout: 3000,
    headers: {
        Accept: 'application/json',
        "Content-Type": "multipart/form-data; boundary=AaB03x",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS'
    }
})

