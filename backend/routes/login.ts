import express, { Express, Request, Response, Router } from 'express'
import passport from 'passport'


const router = Router();

let db = require('../models')

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'  

}))

module.exports = router;

