import express, { Express, Request, Response, Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
var FormData = require('form-data');
const Api404Error = require('./api404error')


const router = Router();

let db = require('../models')

router.post('/uploadProduct', async(req, res)=>{

        let {brand, imageName, imageURL, name, price, salesPrice, description, quantity, instructions, ingredients, category} = req.body
        
        let id = uuidv4()
    
        price = parseFloat(price);
        salesPrice= parseFloat(salesPrice);
        quantity= parseFloat(quantity);
    
        let image = await db.images.create({
            id: imageName,
            image: imageURL
          })
    
        let product = await db.products.create({
            id,
            name,
            price,
            sales_price: salesPrice,
            description,
            quantity,
            instructions,
            ingredients,
            product_type: category,
            images: imageName,
            thumbnail: imageName
    
        })

        let updateBrand = await db.brands.update({
            products: brand.products + id + ', '
        }, {
            where: {
                products : brand.products
            }
        })
    
})
router.post('/editProduct', async(req, res)=>{

        let {changedPhoto, id, brand, imageName, imageURL, name, price, salesPrice, description, quantity, instructions, ingredients, category} = req.body

    
        price = parseFloat(price);
        salesPrice= parseFloat(salesPrice);
        quantity= parseFloat(quantity);

        
        if(changedPhoto == true){
            
            let image = await db.images.create({
                id: imageName,
                image: imageURL
            })

        }
    
        let product = await db.products.update({
            name,
            price,
            sales_price: salesPrice,
            description,
            quantity,
            instructions,
            ingredients,
            product_type: category,
            images: imageName,
            thumbnail: imageName
    
        }, {
            where: {
                id: id
            }
        })
    
})

router.post('/deleteProduct', async(req, res)=>{

     let {product, user} = req.body

     console.log(user);
     console.log(product);
     
     const brand = await db.brands.findOne({where: {
        admin_user : user.id
    }});

    let products = brand.products.split(', ')

    console.log(products);

    let newArr: any = []

    products.forEach((obj: any)=>{

        let productString = ""

        if(obj == product.id || obj == ""){

            let index = products.indexOf(obj)
            products.splice(index, 1)

        }
    })

    console.log(products)

    let productString = ''

    products.forEach((obj:any)=>{

        console.log(obj)
        
        productString = productString + obj + ', '
    })


    let updateBrand = await db.brands.update({
        products: productString
    }, {
        where: {
            products : brand.products
        }
    })

     let del = await db.products.destroy({
        where: {
            id : product.id
        }
     })
})

router.post('/uploadImage', async(req, res)=>{

    const {URL, imageName} = req.body

    let image = await db.images.create({
        id: imageName,
        image: URL
      })


})

router.get('/getBrandByAdmin/:id', async(req, res)=>{

    const userID = req.params.id

    const brand = await db.brands.findOne({where: {
        admin_user : userID
    }});

    res.send(brand)
})

router.get('/getImage/:id', async(req, res)=>{

    const imageID = req.params.id

    const image = await db.images.findByPk(imageID)

    res.send(image)
})

router.get('/getAllProducts', async(req, res)=>{

    const products = await db.products.findAll({})

    res.send(products)
})

router.get('/getAllBrands', async(req, res)=>{

    const brands = await db.brands.findAll({})

    res.send(brands)
})

router.get('/getProduct/:id', async(req, res)=>{

    const productID = req.params.id

    const products = await db.products.findByPk(productID)

    res.send(products)
})

router.get('/getBrands/:id', async(req, res)=>{

    const brandID = req.params.id

    console.log(brandID)

    const products = await db.brands.findByPk(brandID)

    console.log(products, "inside getbrand")

    res.send(products)
})

router.get('/getReviews/:id', async(req, res)=>{

    const ID = req.params.id

    const reviews = await db.reviews.findAll({where:{reviewForID: ID}})

    res.send(reviews)
})

router.get('/getCreators', async(req, res)=>{

    let creators = await db.users.findAll({where: {role: 'Influencer'}})
    console.log(creators, "creators in get creators");
    res.send(creators)

})

router.post('/getProfile', async(req, res)=>{

    console.log(req.body, "in backend getprofile");

    let user = await db.users.findAll({where: {id: req.body.ID}})
    let profilePic = await db.images.findByPk(user[0].dataValues.profile_picture)

    res.json({user: user, profilePic: profilePic.dataValues.image})
    
})

router.post('/updateProfile', async(req, res)=>{

   
    console.log(req.body.conpressedFileURL, "check", req.body.pic);

    switch(true){

        case !(req.body.conpressedFileURL == req.body.pic):
            console.log("update profile pic in update profile", req.body.imageName, "image name", req.body.URL, "image url");
            let image = await db.images.create({
                id: req.body.imageName,
                image: req.body.URL
              });
              
            await db.users.update({profile_picture: req.body.imageName}, {where:{id: req.body.ID}})

        case (true):
            console.log(req.body.tags.toString(), "update profile data in update profile");
            let splitTags = req.body.tags.toString()
            await db.users.update({name: req.body.name, tags: splitTags, role: req.body.role}, {where:{id: req.body.ID}})
       
    }
    console.log("update profile sending infor back for state")
    let user = await db.users.findAll({where: {id: req.body.ID}})
    let profilePic = await db.images.findByPk(user[0].dataValues.profile_picture)

    res.json({user: user, profilePic: profilePic.dataValues.image})


    console.log(req.body);



    // await db.users.update({},{where:{id: ID}})

})

module.exports = router;

