const JwtStrategy = require('passport-jwt').Strategy
const LocalStrategy = require('passport-local').Strategy
// const GoogleStrategy = require('passport-google-oidc')
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const db = require('../models')
import { ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET,
}

//! replace these variables with .env variables
// GOOGLE_CLIENT_ID = '907968964497-e8jrp7mfu09fadm1ep4iibefm0t6tkgm.apps.googleusercontent.com'
// GOOGLE_CLIENT_SECRET = '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'

const init = (passport: any) => {

    //* Local Strategy *\\
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email: any, password: any, done: any) => {
        try {
            // check if there's a user with that email
            let records = await db.users.findAll({where: {email:email}})

            if (records){
                //found a matching email
                let record = records[0]

                //checking if passwords match
                bcrypt.compare(password, record.password, (err, match) => {
                    if(match){
                        console.log('passwords match!');
                        return done(null, record)
                    }
                    else{
                        console.log('Passwords didnt match');
                        return done(null, false)
                    }
                })

            }
            else{

                //username doesnt match
                return done(null, false)
            }

        } catch (error) {
            //db error
            return done(error)
        }
    }))

    //* JWT Strategy *\\
    passport.use(new JwtStrategy(opts, async (payload: any, done: any)=>{

        try{
    
            let userID = payload.sub 
    
            //check if user is in db
    
            let user = await db.users.findByPk(userID);  //{} or null 
    
            if(user){
                return done(null, user) //place the user object on req.user
                //req.user  = {id, email, password}
            }
            else{
                //no user found
                return done(null, false)
    
            }
        }
        catch(error){
            //error reading db 
    
            return done(error)
        }
        
    }))

    //! Coming Soon!!
    // Instagram authentication strategy
//     passport.use(new GoogleStrategy({
//         clientID: GOOGLE_CLIENT_ID,
//         clientSecret: GOOGLE_CLIENT_SECRET,
//         callbackURL: 'http://localhost:3000/google/callback',
//     },
//     async function(refreshToken, profile, done){
//         try {
//             let email = profile.emails[0].value
//             let records = await db.users.findAll({where: {email}})

//             if (records[0]){
//                 //user already exists in our database we return the user
//                 console.log('logging into existing google account');

//                 return done(null, records[0])
//             }
//             else{
//                 //user has never logged in so we create a new account
//                 console.log('creating new user from google email');
//                 let insertRecord = await db.users.create({email})
//                 let user = await db.users.findAll({where: {email}})

//                 return done(null, user[0])
//             }

//         } catch (error) {
//             //db error
//             return done(error)
//         }

//     }))

//     passport.serializeUser((user, done) => {
//         console.log(user.dataValues);
//         done(null, user.dataValues.id)
//     })

//     passport.deserializeUser(async (id, done) => {
//         try {
//             let result = await db.users.findByPk(id)
//             if(result){
//                 done(null, result)
//             }
//             else{
//                 done(null, false)
//             }
//         } catch (error) {
//             done(error)
//         }
//     })
}

module.exports = init