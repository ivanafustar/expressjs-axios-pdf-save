const getData = require('./data.service');
const axios = require('axios')
const fs = require('fs')

const downloadPdf = (fileUrl, fileLocPath, dataPath) => {
    return axios({
        method: "get",
        url: fileUrl,
        responseType: "stream"
    }).then((response) => {
            response.data.pipe(fs.createWriteStream("./my.pdf"));
            return getData(dataPath);
        }
    )
}

module.exports = downloadPdf;
