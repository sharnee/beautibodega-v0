import express, { Express, Request, Response, Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'


const router = Router();

let db = require('../models')

router.post('/register', async (req: Request, res: Response) => {
    console.log('Registering user');

    try {
      // console.log(req.body)
      // scrape info from the header
      let { email, password, name, gender } = req.body

      //encrypt password
      password = bcrypt.hashSync(password, 10)

      console.log(db.users)
      // create user in db
      let user = await db.users.create({
        id: uuidv4(),
        email,
        password,
        name,
        gender,
      })

      res.status(200).send(user)

    } catch (error) {
      console.log(error);
      res.status(404).send(error)
    }
  });

module.exports = router;

