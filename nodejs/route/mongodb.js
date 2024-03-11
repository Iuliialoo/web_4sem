const express = require("express")
const router = express.Router()

const commentsController = require("../controllers/mongodb.js");


router.get('/', (req, res) => {
    res.send('Data Base')
})

router.get('/comments', commentsController.getComments)

router.get('/comment/:id', commentsController.getComment)

router.post('/comments', commentsController.postComments)

module.exports = router;