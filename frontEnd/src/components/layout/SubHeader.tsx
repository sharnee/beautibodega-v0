import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
    <div className=''>

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
      className=" z-30 flex items-center cursor-pointer top-35 relative left-10"
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
<div className="container  w-[220px] h-full rounded-tr-[100px]">
    <div className="mt-10 bg-gray-200 rounded-tr-[100px] ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
    <div className=" bg-gray-200 ">Hello</div>
    <div className=" bg-white ">Hello</div>
</div>
  </div>
                </li>
                <li className='mt-1.5'>
                    <a href="#" className="text-gray-900 dark:text-white pl-5  hover:underline" aria-current="page">Home</a>
                </li>
                <li className='mt-1.5'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                </li >
                <li className='mt-1.5'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li className='mt-1.5'>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
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
