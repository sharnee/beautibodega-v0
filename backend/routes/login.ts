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

router.post('/login', passport.authenticate('local', {session:false}), async (req, res)=>{

    //req.user 
    console.log(req.body)
    let { email } = req.body
    let user = await db.users.findAll({where: {email: email}})
    // console.log(user, "user1")
    // console.log(user[0].dataValues, "dataValues")
    // console.log(user[0], "user 0")
    console.log(user[0].dataValues.profile_picture, "userpic")
    let profilePic = await db.images.findByPk(user[0].dataValues.profile_picture)
    console.log(profilePic, "userpic2");
    console.log(user, "user2")

    res.json({token: token(req.user), user: user, profilePic: profilePic.dataValues.image})
})



module.exports = router;

