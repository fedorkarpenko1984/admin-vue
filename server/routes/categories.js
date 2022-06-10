const { Router } = require('express')
const { JSON_DB_READ_NOTES, JSON_DB_ADD_NOTE, JSON_DB_REMOVE_NOTE } = require('../JSON_DB/JSON_DB_HANDLER')
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
        JSON_DB_ADD_NOTE('categories', req.body)
        res.status(201).send()
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

// api/categories/remove
router.post('/remove', (req, res) => {
    try {
        const removedCategoryName = req.body.name

        console.log(removedCategoryName)

        JSON_DB_REMOVE_NOTE('categories', 'name', removedCategoryName)
        res.status(204).send()
    } catch (e) {
        res.status(500).json({message: 'ШЕФ! УСЁ ПРОПАЛО!'})
    }
})

module.exports = router