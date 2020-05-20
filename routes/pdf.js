const express = require('express');
const router = express.Router();
const downloadPdf = require('../services/pdf.service');

/* GET pdf */
router.get('/', function (req, res, next) {

    const fileUrl = "https://www.cpd.org.au/wp-content/uploads/2014/11/placeholder.pdf";
    const fileLoc = "./my.pdf";
    const dataPath = "https://jsonplaceholder.typicode.com/posts";

    downloadPdf(fileUrl, fileLoc, dataPath)
        .then(function (response) {
            console.log(response.data)
            res.status(200).send({
                message: response.data
            })
        }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: err.message
        })
    })
});

module.exports = router;
