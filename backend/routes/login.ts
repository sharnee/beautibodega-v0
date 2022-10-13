import express, { Express, Request, Response, Router } from 'express'
import passport from 'passport'


const router = Router();

let db = require('../models')

// router.post('/login',
//     function(req: Request, res: Response) {
//         console.log('logging in')
//         res.send('hello');
//     }
// )

router.post('/login', passport.authenticate('jwt', { session: false }),
    function(req: Request, res: Response) {
        res.send(req.user);
    }
)

module.exports = router;

