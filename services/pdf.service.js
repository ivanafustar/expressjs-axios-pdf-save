const axios = require('axios')
const fs = require('fs')

const downloadPdf = (fileUrl, fileLocPath) => {
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream'
    }).then((response) => {
        response.data.pipe(fs.createWriteStream(fileLocPath));
    })
}

module.exports = downloadPdf;
