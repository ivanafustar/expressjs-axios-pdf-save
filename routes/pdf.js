const express = require('express');
const router = express.Router();
const generatePath = require('../helpers/helpers');

const downloadPdf = require('../services/pdf.service');
const getData = require('../services/data.service');
const createPDFfromHTML = require('../controllers/pdf-create.controller');
const mergePdf = require('../controllers/pdf-merge.controller');

/* GET pdf */
router.get('/', async (req, res) => {
    const fileUrl = 'https://www.cpd.org.au/wp-content/uploads/2014/11/placeholder.pdf';
    const fileLoc = generatePath('my.pdf');
    const dataPath = 'https://jsonplaceholder.typicode.com/posts';
    const createdPath = generatePath('created.pdf');

    try {
        downloadPdf(fileUrl, fileLoc);
        const response = await getData(dataPath);
        await createPDFfromHTML(response.data, createdPath);
        const mergedRes = await mergePdf([fileLoc, createdPath], generatePath('merged.pdf'));

        return res.status(200).send(mergedRes);
    } catch (err) {
        return res.status(400).send({
            message: err.message
        })
    }


});

module.exports = router;
