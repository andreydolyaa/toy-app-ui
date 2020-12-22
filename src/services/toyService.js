
import axios from 'axios';
import HttpService from './HttpService';

const baseUrl = (process.env.NODE_ENV !== 'development') ? '/api/toy' : '//localhost:3030/api/toy';


export const toyService = {
    query,
    getById,
    save,
    getEmptyToy,
    remove,
    update
}







function query(filterBy){
    return HttpService.get('toy');
}
// function query(q) {
//     if (!q) {
//         return HttpService.get('toy');
//     }
//     else {
//         const toys = HttpService.get(buildQuery(q));
//         return toys;
//     }
// }

// function buildQuery(q) {
//     return `toy?inStock=${q.inStock}&type=${q.type}&name=${q.name}`
// }




function getById(toyId) {
    return HttpService.get(`toy/${toyId}`);
}


function update(toy) {
    return HttpService.put(`toy/${toy._id}`, toy);
}


function save(toy) {
    return HttpService.post(`toy`, toy)
}


function remove(toyId) {
    return HttpService.delete(`toy/${toyId}`);
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