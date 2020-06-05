const fs = require('fs');
const PizZip = require('pizzip');
const DocxTemplater = require('docxtemplater');

const options = {
    delimiters: {
        start: '<',
        end: '>'
    },
    parser: (tag) => {
        return {
            get: (scope) => {
                if (tag === '.') {

                    return scope;
                } else {
                    if (scope[tag]) {
                        return scope[tag];
                    }
                    return `<${tag}>`;
                }
            }
        };
    },
};

const docParser = async (absoluteFilePath, jsonParsingData) => {
    let doc;
    const content = fs.readFileSync(absoluteFilePath, 'binary');
    const zip = new PizZip(content);

    doc = new DocxTemplater(zip, options);

    doc.setData(jsonParsingData);
    doc.render();

    const buf = doc.getZip().generate({type: 'nodebuffer'});

    fs.writeFileSync(absoluteFilePath, buf);

    return true;
}

module.exports = {
    docParser
};
