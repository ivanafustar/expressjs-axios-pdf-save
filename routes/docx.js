const express = require('express');
const router = express.Router();

const docxController = require('../controllers/docx.controller');

/* GET pdf */
router.get('/', docxController);

module.exports = router;
