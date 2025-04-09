const express = require('express')
const router = express.Router();
const DocumentController = require('../controllers/document')
const {authenticateToken} = require('../middlewares/auth')

router.get('/getDocument', authenticateToken,  DocumentController.getDocument)

router.post('/createDocument', authenticateToken, DocumentController.createDocument)

module.exports = router