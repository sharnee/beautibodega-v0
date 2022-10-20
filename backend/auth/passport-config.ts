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

const init = (passport: any) => {

    //* Local Strategy *\\
    passport.use(new LocalStrategy({usernameField: 'email'}, async (email: string, password: string, done: any) => {
        try {
            // check if there's a user with that email
            console.log(email, password)
            let records = await db.users.findAll({where: {email:email}})
            console.log(records, "records")
            if (records.length > 0){
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
                console.log('username dosent match')
                //username doesnt match
                return done(null, false)
            }

        } catch (error) {
            //db error
            console.log(error, "error")
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

}

module.exports = init