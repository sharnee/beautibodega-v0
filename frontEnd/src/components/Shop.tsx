import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';

import './css/Shop.css'

const Shop = () => {

    const [products, setProducts] = useState<any>([]);
    const [brands, setBrands] = useState<any>([]);
    const [productImageArr, setProductImageArr] = useState<any>([]);
    
      
    useEffect(() => {
        
        async function fetchData(){
            let allProductData = await axios.get('/getAllProducts');
            let allBrandsData = await axios.get('/getAllBrands');
            
            setBrands(allBrandsData);

            getImages(allProductData.data)
        }

        const getImages = async(data: any) => {

            let arr:any = [];

            for(let i = 0; i < data.length; i++){

                let image = await axios.get(`/getImage/${data[i].thumbnail}`)

                arr.push(image)
            }

            setProductImageArr([...arr])

        }

        fetchData()
        

    }, [])

    console.log("products", products);
    console.log("brands", brands);
    console.log("images", productImageArr);

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
            <button className="filterButton">FILTER</button>
            <button className="sortButton">SORT</button>
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
                        <div className="products">
                            <img width="100px" height="100px" src={obj.data.image}/>
                        </div>
                    );
                })}

                </div>
            </div>

            <div>
                <div className="categoryTop">
                    <h3>Shop</h3>
                    <h1>Makeup</h1>
                </div>

                <div className="productList">

                </div>
            </div>

            <div>
                <div className="categoryTop">
                    <h3>Shop</h3>
                    <h1>Hair</h1>
                </div>
            </div>

            <div>
                <div className="categoryTop">
                    <h3>Shop</h3>
                    <h1>Nails</h1>
                </div>
            </div>

        </div>


    </>
  )
}

export default Shop