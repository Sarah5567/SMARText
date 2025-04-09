const Document = require("../models/document");
const {Types} = require("mongoose");

async function getDocument(req, res){
    const objId = new Types.ObjectId(req.query.id);

    try {
        const document = await Document.findById(objId);
        if(!document)
            return res.status(404).json({message : `document ${objId} not found`})
        res.status(200).json(document)
    }
    catch (error) {
        res.status(500).json({massage: error.message })
    }
}

async function createDocument(req, res){
    const {title, content} = req.body;
    try {
        // Create a new document with provided title and content
        const document = await new Document({ title, content });
        await document.save();
        return res.status(200).json(document);
    }
    // if occurred an error, returns the error message
    catch (error) {
        res.status(500).json({massage: error.massage})
    }

}

module.exports = {
    getDocument,
    createDocument
}