const express = require('express');
const router = express.Router();

const pdfController = require('../controllers/pdf.controller');

/* GET pdf */
router.get('/', pdfController.downloadMergeMultiplePdfs);

module.exports = router;
