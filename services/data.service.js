const axios = require('axios')
const fs = require('fs')

const getData = (dataUrl) => {
    return axios({
        method: "get",
        url: dataUrl,
        responseType: "json"
    })
}

module.exports = getData;
