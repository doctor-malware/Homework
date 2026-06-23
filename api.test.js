import {BASE_URL} from './config.js';
import checkResponse from './helpers.js';
console.log('Base URL:', BASE_URL);
console.log('Function:', checkResponse);

const getUser = async () => {
    const response = await fetch(`${BASE_URL}/users/2`);
    const isSuccess = checkResponse(response);

    if (isSuccess) {
        const data = await response.json();
        console.log('Email пользователя:', data.data.email); }
    };
getUser()

const getBrokenData = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users/23/сломанный_путь');
        const data = await response.json(); }
    catch (error) {
        console.log(`Тест не упал, но мы поймали ошибку: ${error.message}`); }
};
getBrokenData();