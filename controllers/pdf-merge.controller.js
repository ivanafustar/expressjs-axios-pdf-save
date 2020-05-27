const merge = require('easy-pdf-merge');

/**
 * Merges multiple PDFs into a single PDF
 * @param filesPaths
 * @param destinationPath
 */
const mergePdf = (filesPaths, destinationPath) => {
    return new Promise(resolve => {
        merge(filesPaths, destinationPath, (e) => {
            if (e) {
                console.log('Error!')
                console.log(e)
            }
            console.log('Success!')
        })
        
        resolve(destinationPath);
    })

}

module.exports = mergePdf;
