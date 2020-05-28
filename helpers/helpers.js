const path = require('path');

/**
 * Creates file location with provided file name. Include file extension in the fileName.
 * @param fileName
 * @returns {string}
 */
const generatePath = (fileName) => {
    return path.join(__dirname, '../', fileName)
}

module.exports = generatePath;
