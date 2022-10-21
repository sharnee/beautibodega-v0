import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  return (
    <>
    <div className='font-Caslon'>

<nav className="text-white border-gray-200  rounded bg-black">
    <div className="py-3 px-4 mx-auto max-w-screen-xl  md:px-6">
        <div className="flex justify-around">
            <ul className="flex flex-row  mr-6 space-x-8 text-md font-medium">
                <li>
                {showSidebar ? (
    <button
      className="flex fixed text-3xl text-black items-center top-3 left-0 cursor-pointer pl-5 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className=" z-30 flex items-center cursor-pointer top-30 relative left-10"
      fill="#2563EB"
      viewBox="0 0 100 40"
      width="40"
      height="40"
    >
      <rect width="80" height="8" className='fill-white'></rect>
      <rect y="20" width="80" height="8" className='fill-white'></rect>
      <rect y="40" width="80" height="8" className='fill-white'></rect>
    </svg>
  )}

  <div
    className={` fixed left-0 top-0 w-[275px] bg-beige rounded-tr-[100px] p-10 pl-10 text-black  h-full z-40  ease-in-out duration-300 ${
      showSidebar ? "translate-x-0 " : "translate-y-full"
    }`}
    
  >
<div className="container  w-[220px] text-xl h-full rounded-tr-[100px]">
<div className="flex flex-col  w-72   border-gray-300">
    <a className="flex items-center w-full h-16 " href="#">
      <img src="Beauty_Bodega.png" className="pt-16 pl-10 w-1/2 " alt="" />
    </a>
    <div className=""><hr className="relative top-16 p-0.5 rounded-lg w-[200px] bg-black "/></div>
    <a className=" flex-shrink-0 w-10 h-10 mt-20  rounded hover:bg-gray-300" href="/shop">
        <p>Shop</p>
    </a>
    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="/brands">
        <p>Brands</p>
    </a>
    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
        <p>Profile</p>
    </a>

    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>
    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>
    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>
    <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>


</div>
</div>
  </div>
                </li>
                <li className='mt-2'>
                    <a onClick={()=>navigate('/')} className="text-gray-900 dark:text-white pl-5 text-sm hover:underline" aria-current="page">Home</a>
                </li>
                <li className='mt-2'>
                    <a onClick={()=>navigate('/profile')} className="text-gray-900 dark:text-white text-sm hover:underline">Creators</a>
                </li >
                <li className='mt-2'>
                    <a href="#" className="text-gray-900 dark:text-white text-sm hover:underline">Products</a>
                </li>
                <li className='mt-2'>
                    <a href="#" className="text-gray-900 dark:text-white text-sm hover:underline">Brands</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</div>
    </>
  );
};

export default Sidebar;
