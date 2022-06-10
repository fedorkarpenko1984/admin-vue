const { Router } = require('express')
const { JSON_DB_READ_NOTES, JSON_DB_ADD_NOTE,JSON_DB_REPLACE_NOTE, JSON_DB_REMOVE_NOTE, JSON_DB_GET_NOTE } = require('../JSON_DB/JSON_DB_HANDLER')
const router = Router()
const upload = require('../upload')
const fileSystem = require('fs')


router.get('/list', (req, res) => {
    try {
        const json = JSON_DB_READ_NOTES('products')
        res.status(200).send(json)
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})


//api/products/create
router.post('/create', upload.single('photo'), (req, res) => {
    try {
        if (!req.file) {
            JSON_DB_ADD_NOTE('products', {...req.body, id: Date.now().toString()})
        } else {
            const id = req.file.filename.slice(5, 18)
            console.log(id)
            JSON_DB_ADD_NOTE('products', {...req.body, id, photo: req.file.filename})
        }
        res.status(201).send()
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

//api/products/replace
router.post('/replace', upload.single('photo'), (req, res) => {
    try {
        if (!req.file) {
            console.log(req.body)
            JSON_DB_REPLACE_NOTE('products', 'id', req.body)
        } else {
            console.log(req.body)
            const oldPhotoPath = req.body.photo
            console.log('oldPhotoPath', oldPhotoPath)
            JSON_DB_REPLACE_NOTE('products', 'id', {...req.body, photo: req.file.filename})
            fileSystem.unlink("./public/images/" + oldPhotoPath, function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("Файл удалён");
                }
            });
        }
        res.status(201).send()
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

// api/categories/remove
// router.post('/remove', (req, res) => {
//     try {
//         const removedProduct = req.body
//         JSON_DB_REMOVE_NOTE('products', 'id', removedProduct.id)
//         res.status(204).send()
//     } catch (e) {
//         res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
//     }
// })



module.exports = router