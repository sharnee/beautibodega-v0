import express, { Express, Request, Response, Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
var FormData = require('form-data');


const router = Router();

let db = require('../models')

router.post('/uploadImage', async(req, res)=>{

    const {URL, imageName} = req.body

    let image = await db.images.create({
        id: imageName,
        image: URL
      })


})

router.get('/getImage/:id', async(req, res)=>{

    const imageID = req.params.id

    const image = await db.images.findByPk(imageID)

    res.send(image)
})

router.get('/getAllProducts', async(req, res)=>{

    const products = await db.products.findAll({})

    res.send(products)
})

router.get('/getAllBrands', async(req, res)=>{

    const brands = await db.brands.findAll({})

    res.send(brands)
})

router.get('/getProduct/:id', async(req, res)=>{

    const productID = req.params.id

    const products = await db.products.findByPk(productID)

    res.send(products)
})

router.get('/getBrands/:id', async(req, res)=>{

    const brandID = req.params.id

    const products = await db.brands.findByPk(brandID)

    res.send(products)
})

router.get('/getReviews/:id', async(req, res)=>{

    const ID = req.params.id

    const reviews = await db.reviews.findAll({where:{reviewForID: ID}})

    res.send(reviews)
})

module.exports = router;

