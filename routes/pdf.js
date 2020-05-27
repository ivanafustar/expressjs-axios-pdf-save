const express = require('express');
const router = express.Router();
const path = require('path');

const downloadPdf = require('../services/pdf.service');
const getData = require('../services/data.service');
const createPDFfromHTML = require('../controllers/pdf-create.controller');
const mergePdf = require('../controllers/pdf-merge.controller');

/* GET pdf */
router.get('/', (req, res) => {
    const fileUrl = 'https://www.cpd.org.au/wp-content/uploads/2014/11/placeholder.pdf';
    const fileLoc = path.join(__dirname, '../my.pdf');
    const dataPath = 'https://jsonplaceholder.typicode.com/posts';

    downloadPdf(fileUrl, fileLoc)
        .then(() => getData(dataPath))
        .then((response) => createPDFfromHTML(response.data, path.join(__dirname, '../created.pdf')))
        .then(() => mergePdf([fileLoc, path.join(__dirname, '../created.pdf')], path.join(__dirname, '../merged.pdf')))
        .then((response) => {
            return res.status(200).send(
                response
            )
        })
        .catch(err => {
            console.log(err);

            return res.status(500).send({
                message: err.message
            })
        })
});

module.exports = router;
