const generatePath = require('../helpers/helpers');
const pdfService = require('../services/pdf.service');
const getData = require('../services/data.service');

const fileUrl = 'https://www.cpd.org.au/wp-content/uploads/2014/11/placeholder.pdf';
const fileLoc = generatePath('my.pdf');
const dataPath = 'https://jsonplaceholder.typicode.com/posts';
const createdPath = generatePath('created.pdf');

const downloadMergeMultiplePdfs = async (req, res) => {
    try {
        pdfService.downloadPdf(fileUrl, fileLoc);
        const response = await getData(dataPath);
        await pdfService.createPDFfromHTML(response.data, createdPath);
        const mergedRes = await pdfService.mergePdf([fileLoc, createdPath], generatePath('merged.pdf'));

        return res.status(200).send(mergedRes);
    } catch (err) {
        return res.status(400).send({
            message: err.message
        })
    }
}

module.exports = {
    downloadMergeMultiplePdfs
}
