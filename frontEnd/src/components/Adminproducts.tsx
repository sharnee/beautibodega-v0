import React from 'react'


function Adminproducts() {
  return (
    <>
<div className="flex w-screen h-[100vh] text-gray-700 bg-beige bg-cover font-Caslon font-light">

<div className="flex flex-col items-center w-72 pb-4 overflow-auto  border-gray-300">
    <a className="flex items-center justify-center flex-shrink-0 w-full h-16 " href="#">
      <img src="placeholderAssets/MissJessiesLogo.png" alt="" />
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Products</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
      <p>Customers</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Analytics</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Orders</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Beauti Aisle</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>
</div>
<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>

<div className="overflow-x-auto relative  shadow-md sm:rounded-lg px-5  w-3/4">
<div className="flex flex-col flex-grow">

<div className="flex-grow py-6 overflow-auto bg-beige pt-20">
<div className="grid grid-cols-5   gap-6">
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Total Sales</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Online Sessions</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Returning Customers</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Abandon Cart</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Sales Today</div>


</div>
</div>
</div>

<div className="grid grid-cols-4 gap-3 ">

<div className="col-span-1  bg-white"></div>
<div className="col-span-3 left-0 bg-white">
<table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 ">
<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white ">
  Products
  <p className="mt-1 text-sm font-normal flex justify-end text-gray-500 dark:text-gray-400">       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button></p>
</caption>
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
  <tr>
      <th scope="col" className="p-4">
          <div className="flex items-center">
              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  "></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </th>
      <th scope="col" className="py-3 px-6">
          Product name
      </th>
      <th scope="col" className="py-3 px-6">
          Color
      </th>
      <th scope="col" className="py-3 px-6">
          Category
      </th>
      <th scope="col" className="py-3 px-6">
          Price
      </th>
      <th scope="col" className="py-3 px-6">
          Action
      </th>
  </tr>
</thead>
<tbody>
  <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
  <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
  <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
  <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
  <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
  <tr className="bg-white  hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
          <div className="flex items-center">
              <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label  className="sr-only">checkbox</label>
          </div>
      </td>
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
          Blank
      </th>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          Blank
      </td>
      <td className="py-4 px-6">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
      </td>
  </tr>
</tbody>
</table>
<div className='p-12 flex justify-center '>
<a className=" flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
            href="#">
            <span className="ml-2 leading-none pt-3"> Add New Customer</span>
        </a>
        </div>

</div>
</div>
</div>

<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>
<div className="flex flex-col w-72   border-gray-300">


    <div className="flex flex-col flex-grow p-4 overflow-auto">
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>

    </div>

</div>


</div>



    </>
  )
}

export default Adminproducts