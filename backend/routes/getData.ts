import express, { Express, Request, Response, Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
var FormData = require('form-data');


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

        let brandProducts = await db.brands.findOne({where : {
            products: brand.products
        }})

        if(brandProducts.products == null || brandProducts.products == "" || brandProducts.products == ', '){

            let updateBrand = await db.brands.update({
                products: id + ', '
            }, {
                where: {
                    products : brand.products
                }
            })
        } else {

            let updateBrand = await db.brands.update({
                products: brand.products + id + ', '
            }, {
                where: {
                    products : brand.products
                }
            })
        }

    
})

router.post('/registerBrand', async(req, res)=>{

        let {logoName, imageURL, brandName, email, description, founder, phone, websiteURL, videoLink, admin} = req.body
        
        let id = uuidv4()
    
        let image = await db.images.create({
            id: logoName,
            image: imageURL
          })
    
        let brand = await db.brands.create({
            id,
            brand_name: brandName,
            admin_user: admin,
            email,
            founder,
            description,
            logo: logoName,
            phone,
            websiteURL,
            video_link: videoLink
    
        })

        let updateUser = await db.users.update({
            role: 'Business'
        }, {
            where: {
                id : admin
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

router.post('/getImages', async(req, res)=>{

    const {imageArr} = req.body

    let data: any= []

    for(let i = 0; i < imageArr.length; i++){

        const query = await db.images.findByPk(imageArr[i])

        data.push(query)

    }

    res.send(data)
})
router.post('/getProductsForBrand', async(req, res)=>{

    const {productsArr} = req.body

    let data: any= []

    for(let i = 0; i < productsArr.length; i++){

        const query = await db.products.findByPk(productsArr[i])

        data.push(query)

    }

    res.send(data)

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

    const brands = await db.brands.findByPk(brandID)

    res.send(brands)
})

router.get('/getFrontPage', async(req, res)=>{

    // let cache: any[] = []

    // const brands = await db.brands.findAll({where: {popular_brand: true}})
    // console.log(brands)
    // brands.map((brand:any)=>{
    //     db.images.findByPk(brand.logo).then((image:any)=> {
    //         console.log(image.dataValues.image)
    //         cache.push(image.dataValues.image)
    //     })
    //     console.log(cache, "cache")
    // })
    
    // db.images.findByPk({where: {id: brands.logo}})

    const data = await db.sequelize.query('SELECT * FROM brands, images WHERE brands.popular_brand = true AND images.id = brands.logo')

    // console.log("first")
    console.log(data[0])
    res.send(data[0])
})

router.get('/getReviews/:id', async(req, res)=>{

    const ID = req.params.id

    const reviews = await db.reviews.findAll({where:{reviewForID: ID}})

    res.send(reviews)
})

router.get('/getCreators', async(req, res)=>{

    const data = await db.sequelize.query("SELECT * FROM users, images WHERE users.role = 'Influencer' AND images.id = users.profile_picture")

    // const data = await db.sequelize.query("SELECT * FROM users LEFT OUTER JOIN images ON users.role = 'Influencer'")

    // const data = await db.users.findAll({where: {role: 'Influencer'}, include: {model: db.images, as: db.users.profile_picture}})

    console.log(data[0])

    // let creators = await db.users.findAll({where: {role: 'Influencer'}})
    // console.log(creators, "creators in get creators");
    res.send(data[0])

})

router.post('/getProfile', async(req, res)=>{

    console.log(req.body, "in backend getprofile");

    let user = await db.users.findAll({where: {secondary_id: req.body.ID}})
    let profilePic = await db.images.findByPk(user[0].dataValues.profile_picture)

    console.log("inside getProfile");

    res.json({user: user, profilePic: profilePic.dataValues.image})
    
})

router.post('/updateProfile', async(req, res)=>{

   
    console.log(req.body.conpressedFileURL, "check", req.body.pic);
    console.log(req.body.follower, "follower")
    console.log(req.body.following, "following")
    console.log(req.body.otherID, "otherID");
    console.log(req.body.ID, "ID");

    switch(true){

        case !(req.body.conpressedFileURL == req.body.pic):
            console.log("update profile pic in update profile", req.body.imageName, "image name", req.body.URL, "image url");
            let image = await db.images.create({
                id: req.body.imageName,
                image: req.body.URL
              });
              
            await db.users.update({profile_picture: req.body.imageName}, {where:{id: req.body.ID}})

        case(req.body.follower !== undefined):
        console.log("in req.body.follower case");
        let splitFollowers = req.body.follower.toString()
        console.log(splitFollowers);
        await db.users.update({followers: splitFollowers},{where: {id: req.body.otherID}})
        
        case(req.body.following !== undefined):
        console.log("in req.body.following case");
        let splitFollowing = req.body.following.toString()
        await db.users.update({following: splitFollowing}, {where:{id: req.body.ID}})

        case (req.body.tags):
            if(typeof req.body.tags === undefined){
            console.log(req.body.tags,"in req.body.tags case");
            console.log(req.body.tags.toString(), "update profile data in update profile");
            let splitTags = req.body.tags.toString()
            await db.users.update({name: req.body.name, tags: splitTags, role: req.body.role}, {where:{id: req.body.ID}})
            }
       
    }
    console.log("update profile sending infor back for state")
    let user = await db.users.findAll({where: {id: req.body.ID}})
    let profilePic = await db.images.findByPk(user[0].dataValues.profile_picture)

    res.json({user: user, profilePic: profilePic.dataValues.image})


    console.log(req.body);



    // await db.users.update({},{where:{id: ID}})

})

// router.get('/updateFollow', async(req, res)=>{

//     const products = await db.products.findAll({})

//     await db.users.update({following: req.body.name}, {where:{id: req.body.yourID}})
//     await db.users.update({followers: req.body.name}, {where:{id: req.body.otherID}})

//     let user = await db.users.findAll({where: {id: req.body.yourID}})

//     res.json({user: user})
// })

module.exports = router;

