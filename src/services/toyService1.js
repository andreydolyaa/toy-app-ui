
import axios from 'axios';

const baseUrl = (process.env.NODE_ENV !== 'development') ? '/api/toy' : '//localhost:3030/api/toy';


export const toyService = {
    query,
    getById,
    save,
    getEmptyToy,
    remove,
    update
}







function query(filter, type) {
    if (type) {
        if (type === 'all') {
            return axios.get(`${baseUrl}`)
                .then(res => res.data);
        } else {
            return axios.get(`${baseUrl}?type=${type}`)
                .then(res => res.data);
        }
    }
    else if (filter === 'byStock') {
        return axios.get(`${baseUrl}?inStock=true`)
            .then(res => res.data);
    }
    else if (filter) {
        return axios.get(`${baseUrl}?name=${filter}`)
            .then(res => res.data);
    } else {
        return axios.get(`${baseUrl}`)
            .then(res => res.data);
    }
}



function getById(toyId) {
    return axios.get(`${baseUrl}/${toyId}`)
        .then(res => res.data)
}


function update(toy) {
    return axios.put(`${baseUrl}/${toy._id}`, toy)
        .then(res => {
                return res.data
        })
}



function save(toy, toyId) {
    if (!toy._id) {
        // toy.__id = makeId();
        // toy.createdAt = new Date();
        return axios.post(`${baseUrl}`, toy)
            .then(res => res.data);
    } else {
        return axios.put(`${baseUrl}/${toy._id}`, toy)
            .then(res => {
                
                return res.data;
            })
    }
}


function remove(toyId) {
    return axios.delete(`${baseUrl}/${toyId}`)
        .then(res => res.data)
}




function getEmptyToy() {
    return {
        name: '',
        price: '',
        type: '',
        createdAt: '',
        inStock: true
    }
}


function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}