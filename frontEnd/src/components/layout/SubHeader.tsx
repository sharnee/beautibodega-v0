import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";


const Sidebar = () => {

  const token = useSelector((state: {user: {token: string}}) => state.user.token)
  const role = useSelector((state:{user: {user: {role: string}}}) => state.user.user.role)
  const user = useSelector((state:{user: {user: any}}) => state.user.user)

  const [showSidebar, setShowSidebar] = useState(false);
  const [loggedin, setLoggedin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    console.log(token)
    if(token != ""){
      setLoggedin(true)
    }

    if(role === "Business" || role === "Super Admin"){
      setIsAdmin(true)
    }
    

  }, [])

  console.log(loggedin)
  console.log(isAdmin)
  console.log(user.secondary_id);
  

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
      className=" z-30 flex items-center cursor-pointer top-30 relative left-8"
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
    className={` fixed left-0 top-0 w-[325px] bg-white rounded-tr-[100px] p-10 pl-10 text-black  h-full z-40  ease-in-out duration-300 ${
      showSidebar ? "translate-x-0 " : "translate-y-full"
    }`}
    
  >
<div className="container  w-[325px] text-xl h-full rounded-tr-[100px]">

    <div className="absolute  top-0 left-0  ">
      <img src="placeholderAssets/bb-menu.jpeg" className=" w-[325px] rounded-tr-[100px] rounded-bl-[100px] h-[100px] opacity-70 object-cover" alt="" />
    </div>
    <div className='absolute top-32 left-5 '>
    <ul className="w-72 text-sm font-medium text-gray-900 bg-white   ">

  {loggedin && !isAdmin ? 

  <>
  
    <Link to="/logout">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Logout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
    <Link to="/editprofile">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Edit Your Profile<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
    <Link to="/registerbrand">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Register A Brand<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>


  </>
  
  :
<></>
}
  {loggedin && isAdmin ? 

  <>
  
    <Link to="/logout">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Logout<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
    <Link to="/editprofile">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Edit Your Profile<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
    <Link to="/adminproducts">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Your Brand Page<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>

  </>
  
  :
<></>
}
  {!loggedin ? 

  <>
  
    <Link to="/login">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Login<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
    <Link to="/register">
      <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Register<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg></li>
    </Link>
         
  </>
  
  :
<></>
}

</ul> 

{loggedin ? 
  <ul className="absolute top-[600px] bg-greenish w-72 text-sm font-medium text-white   ">
  <Link to={`/profile/${user.secondary_id}`}>
        <li className="flex py-2 px-4 w-full  border-b border-gray-200 ">Your Profile<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-64">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg></li>
  </Link>
  </ul>
:
<></>
}

</div>

    {/* <a className=" flex-shrink-0 w-10 h-10 mt-2 rounded hover:bg-gray-300" href="#">
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
    </a> */}



</div>
  </div>
                </li>
                <li className='mt-2'>
                    <a onClick={()=>navigate('/')} className="text-gray-900 dark:text-white pl-3 text-sm hover:underline" aria-current="page">Home</a>
                </li>
                <li className='mt-2'>
                    <a onClick={()=>navigate('/profile')} className="text-gray-900 dark:text-white text-sm hover:underline">Creators</a>
                </li >
                <li className='mt-2'>
                    <Link to="/shop" className="text-gray-900 dark:text-white text-sm hover:underline">Products</Link>
                </li>
                <li className='mt-2'>
                    <a href="/brands" className="text-gray-900 dark:text-white text-sm hover:underline">Brands</a>
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
