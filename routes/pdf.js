const express = require('express');
const router = express.Router();
const axios = require('axios')
const fs = require('fs')

/* GET pdf */
router.get('/', function (req, res, next) {

    axios({
        method: "get",
        url: "https://www.cpd.org.au/wp-content/uploads/2014/11/placeholder.pdf",
        responseType: "stream"
    }).then(function (response) {
        console.log(response.data)
        response.data.pipe(fs.createWriteStream("./my.pdf"));
        res.status(200).send({
            message: 'The file has been saved.'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: err.message
        })
    })
});

module.exports = router;
