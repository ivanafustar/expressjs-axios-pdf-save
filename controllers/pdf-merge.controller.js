const merge = require('easy-pdf-merge');

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

module.exports = mergePdf;
