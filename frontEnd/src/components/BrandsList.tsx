import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom'

import {authActions} from '../slice/AuthSlice';

import './css/Brands.css'

const Brands = () => {

    const [productImageArr, setProductImageArr] = useState<any>([]);
    const [brandImageArr, setBrandImageArr] = useState<any>([]);
    const [price, setPrice] = useState(100)

    const [filter, setFilter] = useState(false);
    const [sort, setSort] = useState(false);

    // const[makeup, setMakeup] = useState(true)
    // const[hair, setHair] = useState(true)
    // const[nails, setNails] = useState(true)
    // const[skin, setSkin] = useState(true)

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

                cache[`${images.data[i].id}`] = images.data[i]

           }

           let newArr: any = []

           for(let i = 0; i < data.length; i++){

                if(type == 'product'){

                    data[i]['image'] = cache[`${data[i].thumbnail}`]
                    newArr.push(data[i])

                } else if (type == 'brand'){
                    
                    data[i]['image'] = cache[`${data[i].logo}`]
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
<div className="text-3xl font-semibold ">Bodega Brands</div>
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
                    To Be Added
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

        <div className="flex brandCont_bl pt-4">

                {brandImageArr.map((obj: any) => {

                    return (<>

                    <Link onClick={()=>dispatch(authActions.setBrand(obj))} className="flex brandPicCont_bl" to="/brand">

                            <div className="brandPicture_bl">

                                <img src={obj.image.image}/>

                            </div>

                            <p className="brand-name-bl">{obj.brand_name}</p>

                    </Link>


                    </>);

                })}
        </div>
       
        </div>


    </div>
  )
}

export default Brands