const axios = require("axios");

const api = axios.create({
    baseURL: 'http://localhost:3334',
    timeout: 10000,
});

module.exports = api;