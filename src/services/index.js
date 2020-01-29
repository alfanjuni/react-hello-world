import axios from 'axios';

const RootPath = 'http://localhost:3004/';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
        .then((result)=>{
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
}

const getNewsBlog = Get('posts?_sort=id&_order=desc');

Const API = {
    getNewsBlog
}

export default API;

