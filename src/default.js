const axios = require('axios');
const values = {};

values.protocol = 'https';
values.hostName = '://pokeapi.co';
values.versionPath = '/api/v2/';
values.offset = 0;
values.limit = 100000;
values.timeout = 20 * 1000; // 20 seconds
values.axiosInstance = axios.default;

values.setProtocol = newProtocol => {
    values.protocol = newProtocol;
}
values.setHostName = newHostName => {
    values.hostName = `://${newHostName}`;
}
values.setVersionPath = newVersionPath => {
    values.versionPath = newVersionPath;
}
values.setOffset = newOffset => {
    values.offset = newOffset - 1;
}
values.setLimit = newLimit => {
    values.limit = newLimit + 1;
}
values.setTimeout = newTimeout => {
    values.timeout = newTimeout;
}

values.setAxiosInstance = axiosInstance => {
    values.axiosInstance = axiosInstance;
}

exports.values = values
