const merge = require('easy-pdf-merge');

/**
 * Merges multiple PDFs into a single PDF
 * @param filesPaths
 * @param destinationPath
 */
const mergePdf = (filesPaths, destinationPath) => {
    merge(filesPaths, destinationPath, (e) => {
        if (e) {
            console.log('Error!')
            console.log(e)
        }
        console.log('Success!')
    })
    return 'ok'
}

module.exports = mergePdf;
