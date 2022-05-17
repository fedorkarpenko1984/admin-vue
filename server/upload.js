const path = require('path')
const  multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'public/images')
    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({
    storage, fileFilter
})