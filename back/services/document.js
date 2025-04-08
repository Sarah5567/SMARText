const Document = require('../models/document')

async function getDocument(id) {

    try {
        // Check if document exists and return it
        const document = await Document.findById(id);
        if (!document) {
            return res.status(404).json({error: 'Document not found'});
        }
        return res.status(200).json(document)
    }
        // if occurred an error, returns the error message
    catch (error) {
        return res.status(500).json({error: error.message})
    }
}

async function createDocument(req, res) {
    const { title, content } = req.body;

    try {
        // Create a new document with provided title and content
        const document = new Document({ title, content });
        await document.save();
        return res.status(201).json(document);
    }
        // if occurred an error, returns the error message
    catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    getDocument,
    createDocument
}