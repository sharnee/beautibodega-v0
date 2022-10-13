import express, { Express, Request, Response, Router } from 'express'


const router = Router();

let db = require('../models')

router.get('/product', async(req, res)=>{

    const product = await db.products.findByPk('45bcfbcb-0781-465d-98d1-8302173b42bc')

    res.send(product)
})

module.exports = router;

