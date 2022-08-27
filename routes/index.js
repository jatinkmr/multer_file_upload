const router = require('express').Router()
const Controller = require('../Controller')
const path = require('path')

const multer = require('multer')
// for storage
const storageForDocs = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

// for uploading single files
const uploadFile = multer({
    storage: storageForDocs
}).single("image")

// for uploading multiple file
const multipleStorage = multer.memoryStorage();
const uploadMultiple = multer({
    storage: multipleStorage
})

router.get('/', Controller.homecontroller)

// for single file route
router.post('/singleupload', (req, res, next) => {
    uploadFile(req, res, (err) => {
        if (err) {
            res.send({
                error: true,
                ...err
            })
        } else {
            if (req.file == undefined) {
                res.send({
                    error: true,
                    message: "Error: No File Selected!!"
                })
            } else {
                next()
            }
        }
    })
}, Controller.singleUploadController)

// for multiple files
router.post('/mutlipleupload', uploadMultiple.array('myFiles', 4), Controller.mutlipleUploadController)

module.exports = router