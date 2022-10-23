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
                <h1>Bodega Brands</h1>
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

        <div className="flex brandCont_bl">

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


    </>
  )
}

export default Brands