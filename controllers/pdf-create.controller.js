const fs = require('fs');
const pdf = require('html-pdf');
const builder = require('../builders/html-table-builder');

/**
 * Creates PDF from HTML
 * @param responseData
 * @param path
 */
const createPDFfromHTML = (responseData, path) => {

  return new Promise(resolve => {
      pdf.create(builder(responseData))
          .toStream((err, stream) => {
              stream.pipe(fs.createWriteStream(path))
              resolve()
          })
  })
}

module.exports = createPDFfromHTML;
