const { Router } = require('express')
const { JSON_DB_READ_NOTES, JSON_DB_ADD_NOTE, JSON_DB_REMOVE_NOTE } = require('../JSON_DB/JSON_DP_HANDLER')
const router = Router()
const upload = require('../upload')

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
        const newProduct = {...req.body, photo: req.file.filename}
        JSON_DB_ADD_NOTE('products', newProduct)
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