const axios = require('axios')

const getData = (dataUrl) => {
    return axios({
        method: 'get',
        url: dataUrl,
        responseType: 'json'
    })
}

module.exports = getData;
