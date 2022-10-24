import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Creators = () => {

    const navigate = useNavigate()

    const [creators, setCreators] = useState<any>([])
    const [currentCreator, setCurrentCreator] = useState<any>()
    const [modal, setModal] = useState(false)

    useEffect(() => {

        axios.get('/getCreators')
        .then((response:any)=>{
            console.log(response, "response")
            setCreators(response.data)
        })

    }, [])
    
    console.log(creators)

    const handleClick = (data:any)=>{


        setCurrentCreator(data)
        setModal(true)

    }
    


  return (
    <div className='font-Caslon'>

<div className="text-md font-light pt-5 ">Shop</div>
<div className="text-3xl font-semibold ">Creators</div>

<hr className="my-4  w-28 h-2 bg-tan "/>
    <div className='grid grid-cols-3 gap-1 pt-6'>
    {creators.map((creator:any)=>{
        return <div className=''>
            {/* <p className="text-base ..." onClick={()=>handleClick(creator)}>{creator.name}<img src={creator.image} alt="" /></p> */}
            <p className="text-base ..." onClick={()=>navigate(`/profile/${creator.secondary_id}`)}><div className='inline'><img src={creator.image} className="  object-cover top-10 object-top w-[125px] h-[125px] p-1  col-span-1 rounded-xl" alt="" /></div></p>
        {/* {modal ? 
        <div id="defaultModal"  className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
           
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {currentCreator.name}
                    </h3>
                    
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>setModal(false)}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only" >Close modal</span>
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe pariatur corrupti est suscipit maiores itaque consequuntur ipsum, reiciendis eos consequatur, modi numquam veniam vero illum odit nisi iusto officia.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ducimus, doloremque magnam quae mollitia omnis impedit eos asperiores, commodi nemo et ullam earum libero eum totam explicabo voluptates dolore. Animi!
                    </p>
                </div>

                <div className='flex flex-row'> 
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Following: {currentCreator.following ? currentCreator.following : 0} </button>
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Followers: {currentCreator.followers ? currentCreator.followers : 0}</button>
                </div>

                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Follow</button>
                </div>
            </div>
        </div>
    </div>
        : null} */}
        </div>
    })}
    </div>



    <div className="text-xl pt-10 pb-2">Shop The Beauti Aisles</div> 

<div className='flex flex-row pt-3 pb-8 justify-center'>
  <button type="button" className="text-xs" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-6.png" className="w-[100px] h-[100px] object-scale-down " alt="" />Shop Skin</button>
  <button type="button" className="text-xs" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-9.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Makeup</button>
  <button type="button" className="text-xs" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-2.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Hair</button>
  <button type="button" className="text-xs" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Nail-Polish-Collection-Thumbnial.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Nails</button>


</div>
    </div>
    
    
  )
}

export default Creators