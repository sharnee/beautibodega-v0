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
      let { email, password, name } = req.body

      const picture = "e1e59465-d939-4eb7-8e2d-4a30a65551e0"
      //profilepic col need to be fixed


      console.log(db.users)
      // create user in db
      let user = await db.users.create({
        id: uuidv4(),
        secondary_id: uuidv4(),
        email,
        password: bcrypt.hashSync(password, 10),
        name,
        profile_picture: "e1e59465-d939-4eb7-8e2d-4a30a65551e0",
        role: "Shopper"
        
      })

      res.status(200).send({
        seccess: true,
        message: 'User Created successfully',
        user
      })

    } catch (error) {
      console.log(error);
      res.status(404).send({
        success: false,
        message: `Something went wrong!`,
        error
      })
    }
  });

  router.post('/registerAdmin', async (req: Request, res: Response) => {
    console.log('Registering user');

    try {
      // console.log(req.body)
      // scrape info from the header
      let { email, password, name } = req.body

      const picture = "e1e59465-d939-4eb7-8e2d-4a30a65551e0"
      //profilepic col need to be fixed


      console.log(db.users)
      // create user in db
      let user = await db.users.create({
        id: uuidv4(),
        secondary_id: uuidv4(),
        email,
        password: bcrypt.hashSync(password, 10),
        name,
        profile_picture: "e1e59465-d939-4eb7-8e2d-4a30a65551e0",
        role: "Business"
        
      })

      res.status(200).send({
        seccess: true,
        message: 'User Created successfully',
        user
      })

    } catch (error) {
      console.log(error);
      res.status(404).send({
        success: false,
        message: `Something went wrong!`,
        error
      })
    }
  });

module.exports = router;

