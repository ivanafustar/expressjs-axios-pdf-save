const fs = require('fs');
const axios = require('axios')
const pdf = require('html-pdf');
const merge = require('easy-pdf-merge');

const builder = require('../builders/html-table-builder');

/**
 * Downloads pdf from provided http
 * @param fileUrl
 * @param fileLocPath
 * @returns {Promise<AxiosResponse<any>>}
 */
const downloadPdf = (fileUrl, fileLocPath) => {
    return axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream'
    }).then((response) => {
        response.data.pipe(fs.createWriteStream(fileLocPath));
    })
}

/**
 * Creates PDF from HTML
 * @param responseData
 * @param path
 */
const createPDFfromHTML = (responseData, path) => {
///service
    return new Promise((resolve, reject) => {
        return pdf
            .create(builder(responseData))
            .toStream((err, stream) => {
                stream.pipe(fs.createWriteStream(path))
                    .on('error', (e) => reject(e))
                    .on('finish', () => resolve())
            })
    })
}

/**
 * Merges multiple PDFs into a single PDF
 * @param filesPaths
 * @param destinationPath
 */
const mergePdf = (filesPaths, destinationPath) => {
    return new Promise((resolve, reject) => {
        merge(filesPaths, destinationPath, (e) => {
            if (e) {
                return reject(e);
            }
            return resolve(destinationPath);
        })
    })
}

module.exports = {
    mergePdf,
    createPDFfromHTML,
    downloadPdf
};
