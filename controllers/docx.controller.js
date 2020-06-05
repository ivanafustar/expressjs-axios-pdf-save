const docService = require('../services/docx.service');

const docxLoc = '/home/ivana/Downloads/BOM_LogiSito.docx';
const jsonReplace = {
    'Enclosure Name': 'Enclosure 1',
    'Customer Name': 'Name Surname',
}

const docxController = async (req, res) => {
    try {
        await docService.docParser(docxLoc, jsonReplace);
        res.status(200).send('success!');

    } catch (err) {
        console.log(err)
        return res.status(400).send({
            message: err.message
        })
    }
}

module.exports = docxController;
