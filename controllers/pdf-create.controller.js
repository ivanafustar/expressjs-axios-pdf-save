const fs = require('fs');
const pdf = require('html-pdf');
const builder = require('../builders/html-table-builder');

/**
 * Creates PDF from HTML
 * @param responseData
 * @param path
 */
const createPDFfromHTML = (responseData, path) => {

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

module.exports = createPDFfromHTML;
