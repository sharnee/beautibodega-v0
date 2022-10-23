import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom'

import {authActions} from '../slice/AuthSlice';

import './css/Shop.css'

const Brands = () => {

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
            

            getImages(allProductData.data, 'product')
            getImages(allBrandsData.data, 'brand')
        }

        const getImages = async(data: any, type: any) => {

            let arr:any = [];

            for(let i = 0; i < data.length; i++){

                let image: any = {}

                if(type == 'brand'){

                     image = await axios.get(`/getImage/${data[i].logo}`)
    
                } else if (type == 'product'){
    
                     image = await axios.get(`/getImage/${data[i].thumbnail}`)
                }

                data[i]['image'] = image.data
                arr.push(data[i])

            }

            if(type == 'brand'){

                setBrandImageArr([...arr])

            } else if (type == 'product'){

                setProductImageArr([...arr])
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
    <>
        <div className="flex pageTop">
            <div>
                <h3>Shop</h3>
                <h1>The Boedga</h1>
            </div>

            <div>
            </div>

        </div>

        <div className="sortButtons">
            <button onClick={openFilter} className="filterButton">FILTER</button>
            <button onClick={openSort} className="sortButton">SORT</button>

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
                    <h3>Shop</h3>
                    <h1>Skin</h1>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'skin' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image}/>
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
                        <img src={brandImageArr[0].image.image}/>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <img src={brandImageArr[1].image.image}/>
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
                    <h3>Shop</h3>
                    <h1>Makeup</h1>
                </div>

               <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'makeup' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image}/>
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
                        <img src={brandImageArr[1].image.image}/>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <img src={brandImageArr[2].image.image}/>
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
                    <h3>Shop</h3>
                    <h1>Hair</h1>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'hair' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image}/>
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
                        <img src={brandImageArr[2].image.image}/>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <img src={brandImageArr[0].image.image}/>
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
                    <h3>Shop</h3>
                    <h1>Nails</h1>
                </div>

                <div className="flex products">
                {productImageArr.map((obj:any)=>{

                    return(
                        <>
                        {obj.product_type == 'nails' && obj.price <= price ? 
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                        <img src={obj.image.image}/>
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
                        <img src={brandImageArr[0].image.image}/>
                        :
                        <></>
                    }
                    </div>
                    <div className="brandPicture">
                    {brandImageArr.length > 0 ? 
                        <img src={brandImageArr[1].image.image}/>
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


    </>
  )
}

export default Brands