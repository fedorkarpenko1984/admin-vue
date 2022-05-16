const { Router }= require('express')
const { JSON_DB_READ_NOTES, JSON_DB_WRITE_NOTES } = require('../JSON_DB/JSON_DP_HANDLER')
const router = Router()

// api/categories/list
router.get('/list', (req, res) => {
    try {
        const json = JSON_DB_READ_NOTES('categories')
        res.status(200).send(json)
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

// api/categories/create
router.post('/create', (req, res) => {
    try {
        const newCategory = req.body
        const categories = JSON.parse(JSON_DB_READ_NOTES('categories'))
        categories.push(newCategory)
        console.log('categories', categories)
        JSON_DB_WRITE_NOTES('categories', categories)
        res.status(201).send()
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

// api/categories/remove
router.post('/remove', (req, res) => {

})

module.exports = router