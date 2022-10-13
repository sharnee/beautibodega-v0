import React from 'react'

const SubHeader = () => {
  return (
    <div className=''>

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                <div className="flex justify-around">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default SubHeader