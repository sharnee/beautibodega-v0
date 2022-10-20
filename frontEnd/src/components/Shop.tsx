import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';

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
    
      
    useEffect(() => {
        
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
                <div className="pageTop">
                    <img width="75px" src="shoppingBag.png" alt=""/>
                </div>
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
                    <div>SKIN</div>
                    <input type="checkbox" checked onChange={()=>setSkin(skin ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>MAKEUP</div>
                    <input type="checkbox" checked onChange={()=>setMakeup(makeup ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>HAIR</div>
                    <input type="checkbox" checked onChange={()=>setHair(hair ? false : true)}/>
                </div>
                <div className="dropdown-item">
                    <div>NAILS</div>
                    <input type="checkbox" checked onChange={()=>setNails(nails ? false : true)}/>
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
                                    <img src={obj.image.image}/>
                                    <p>{obj.name}</p>
                                    <p>${obj.price}</p>
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
                                    <img src={obj.image.image}/>
                                    <p>{obj.name}</p>
                                    <p>${obj.price}</p>
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
                                    <img src={obj.image.image}/>
                                    <p>{obj.name}</p>
                                    <p>${obj.price}</p>
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
                                    <img src={obj.image.image}/>
                                    <p>{obj.name}</p>
                                    <p>${obj.price}</p>
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

        </div>


    </>
  )
}

export default Shop