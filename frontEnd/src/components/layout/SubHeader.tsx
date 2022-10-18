import React from 'react'

const SubHeader = () => {
  return (
    <div className=''>

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                <div className="flex justify-around">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                        {/* <img id="avatarButton"  data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown"/> */}
                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer" id="avatarButton"  data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start">
                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>

                            {/* <div id="userDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                                </div>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                </ul>
                                <div className="py-1">
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </div>
                            </div> */}
                            
                        </li>
                        <li>
                            <a className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a className="text-gray-900 dark:text-white hover:underline">Company</a>
                        </li>
                        <li>
                            <a className="text-gray-900 dark:text-white hover:underline">Team</a>
                        </li>
                        <li>
                            <a className="text-gray-900 dark:text-white hover:underline">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default SubHeader