const express = require('express')
const router = express.Router();
router.use(express.json())
const Dogs = require('../schemes/dogModel')


router.get('/', (req, res) => {
    Dogs.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/:name', (req, res) => {
    Dogs.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/:id', (req, res) => {
    Dogs.find({id: req.params.id})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    const dog = new Dogs(req.body)
    dog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.put('/:id', (req, res) => {

    Dogs.updateOne({id: req.params.id}, req.body)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.delete('/:id', (req, res) => {

    Dogs.deleteOne({id: req.params.id})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router