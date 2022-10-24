import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom'

import {authActions} from '../slice/AuthSlice';

import './css/Shop.css'

const Shop = () => {

    const [productImageArr, setProductImageArr] = useState<any>([]);
    const [brandImageArr, setBrandImageArr] = useState<any>([]);
    const [price, setPrice] = useState(100)

    const [filter, setFilter] = useState(false);
    const [sort, setSort] = useState(false);

    const[makeup, setMakeup] = useState(true)
    const[hair, setHair] = useState(true)
    const[nails, setNails] = useState(true)
    const[skin, setSkin] = useState(true)

    const dispatch = useDispatch();
    
      
    useEffect(() => {

        window.scrollTo(0, 0)
        
        async function fetchData(){
            let allProductData = await axios.get('/getAllProducts');
            let allBrandsData = await axios.get('/getAllBrands');
            
            console.log(allBrandsData.data)
            getImages(allProductData.data, 'product')
            getImages(allBrandsData.data, 'brand')
        }

        const getImages = async(data: any, type: any) => {


            let imageArr: any = []

            for(let i = 0; i < data.length; i++){

                if(type == 'product'){

                    imageArr.push(data[i].thumbnail)

                } else if (type == 'brand'){
                    
                    imageArr.push(data[i].logo)
                }

            }

            let images = await axios.post('/getImages', { imageArr })

            console.log(images)

            let cache: any = {}

           for(let i = 0; i < images.data.length; i++){

                cache[images.data[i].id] = images.data[i]

           }

           let newArr: any = []

           for(let i = 0; i < data.length; i++){

                if(type == 'product'){

                    data[i]['image'] = cache[data[i].thumbnail]
                    newArr.push(data[i])

                } else if (type == 'brand'){
                    
                    data[i]['image'] = cache[data[i].logo]
                    newArr.push(data[i])
                }
           }

           console.log(newArr);

           if(type == 'brand'){

                setBrandImageArr([...newArr])

            } else if (type == 'product'){

                setProductImageArr([...newArr])
            }


        }

        fetchData()
        

    }, [])

    console.log("brands", brandImageArr);
    console.log("Products with images", productImageArr);

    const openFilter = (e: any) => {

        e.preventDefault();

        if(filter == false){
            setSort(false)
            setFilter(true)
        } else {
            setSort(false)
            setFilter(false)
        }
        
    }

    const openSort = (e: any) => {

        e.preventDefault();

        if(sort == false){
            setFilter(false)
            setSort(true)
        } else {
            setFilter(false)
            setSort(false)
        }

    }

  return (
    <div className='font-Caslon'>
        <div className="flex pageTop">
            <div>
            <div className="text-lg font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">The Bodega</div>
            </div>

            <div>
            </div>

        </div>

        <div className="sortButtons">
            <button onClick={openFilter} className="filterButton px-10 py-2 border-2 border-tan">FILTER</button>
            <button onClick={openSort} className="sortButton px-12 py-2 border-2 border-tan">SORT</button>

             {filter ? 
             <div className="dropdown-content">
                <div className="dropdown-item">
                    <div>PRICE {price}: </div>
                    <input type="range" min="1" max="100" value={price.toString()} className="slider" onChange={e=>setPrice(parseInt(e.target.value))}></input>
                </div>
                <div className="dropdown-item">
                    <div>HIDE SKIN</div>
                    <input type="checkbox" onChange={()=>setSkin(skin ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>HIDE MAKEUP</div>
                    <input type="checkbox" onChange={()=>setMakeup(makeup ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>HIDE HAIR</div>
                    <input type="checkbox" onChange={()=>setHair(hair ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>HIDE NAILS</div>
                    <input type="checkbox" onChange={()=>setNails(nails ? false : true)}/>
                </div>
            </div>
            :
            <></>
            }

             {sort ? 
             <div className="dropdown-content">
                <div className="dropdown-item">
                    To Be Added
                </div>

            </div>
            :
            <></>
            }

        </div>

        <div className="shopContainer"> 


        {skin ? 

            <div>
                <div className="categoryTop">
                <div className="text-lg font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">Skin</div>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'skin' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image} className='image w-[100px] h-[100px] object-scale-down'/>
                                            <p>{obj.name}</p>
                                            <p>${obj.price}</p>
                                    </Link>
                                </>
                                
                            </div>
                            : <></>}
                        </>
                    );
                })}
                
                </div>

                <div className ="flex brandCont">
                    <div className="brandPicture">
                        {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[0]))} to="/brand">
                        <img src={brandImageArr[0].image.image} />
                        
                        </Link>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                     <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[1]))} to="/brand">
                         <img src={brandImageArr[1].image.image}/>
                     </Link>
                        :
                        <></>
                    }
                    </div>
                </div>

            </div>
            :
            <></>
        }

        {makeup ? 
            <div>
                <div className="categoryTop">
                <div className="text-lg font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">Makeup</div>
                </div>

               <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'makeup' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image} className='image w-[100px] h-[100px] object-scale-down'/>
                                            <p>{obj.name}</p>
                                            <p>${obj.price}</p>
                                    </Link>
                                </>
                                
                            </div>
                            : <></>}
                        </>
                    );
                })}
                
                </div>

                <div className ="flex brandCont">
                    <div className="brandPicture">
                        {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[1]))} to="/brand">
                            <img src={brandImageArr[1].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[2]))} to="/brand">
                            <img src={brandImageArr[2].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                </div>

            </div> 

            :
            <></>
        }

        {hair ?
            <div>
                <div className="categoryTop">
                <div className="text-lg font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">Hair</div>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'hair' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image} className='image w-[100px] h-[100px] object-scale-down'/>
                                            <p>{obj.name}</p>
                                            <p>${obj.price}</p>
                                    </Link>
                                </>
                                
                            </div>
                            : <></>}
                        </>
                    );
                })}
                
                </div>

                <div className ="flex brandCont">
                    <div className="brandPicture">
                        {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[2]))} to="/brand">
                            <img src={brandImageArr[2].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[0]))} to="/brand">
                            <img src={brandImageArr[0].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                </div>
                
            </div>
            :
            <></>

        }


        {nails ?
            <div>
                <div className="categoryTop">
                <div className="text-lg font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">Nails</div>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'nails' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                        <img src={obj.image.image} className='image w-[100px] h-[100px] object-scale-down'/>
                                        <p>{obj.name}</p>
                                        <p>${obj.price}</p>
                                    </Link>
                                </>
                                
                            </div>
                            : <></>}
                        </>
                    );
                })}
                
                </div>

                <div className ="flex brandCont">
                    <div className="brandPicture items-center">
                        {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[0]))} to="/brand">
                            <img src={brandImageArr[0].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <Link onClick={()=>dispatch(authActions.setBrand(brandImageArr[1]))} to="/brand">
                            <img src={brandImageArr[1].image.image}/>
                        </Link>
                        :
                        <></>
                    }
                    </div>
                </div>

            </div>
            :
            <></>
        }

        </div>


    </div>
  )
}

export default Shop