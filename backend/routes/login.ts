import express, { Express, Request, Response, Router } from 'express'
import passport from 'passport'


const router = Router();

let db = require('../models')

router.post('/login', (req, res) => {
    db.users.fi
})

module.exports = router;

