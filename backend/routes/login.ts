import express, { Express, Request, Response, Router } from 'express'
import passport from 'passport'
import jwt from 'jwt-simple'
import dotenv from 'dotenv';
dotenv.config();


const router = Router();

let db = require('../models')

const token = (userRecord: any) => {
    
    let timestamp = new Date().getTime(); // current time in ms 

    return jwt.encode({sub: userRecord.id, iat: timestamp }, `${process.env.JWT_SECRET}` )
}

// router.post('/login',
//     function(req: Request, res: Response) {
//         console.log('logging in')
//         res.send('hello');
//     }
// )

router.post('/login', passport.authenticate('local', {session:false}),  (req, res)=>{

    //req.user 

    res.json({token: token(req.user)})
})

module.exports = router;

