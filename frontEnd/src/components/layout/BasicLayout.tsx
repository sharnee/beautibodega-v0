import React from 'react'
import SeachHeader from './SeachHeader';
import SubHeader from './SubHeader';

const BasicLayout = (props: any) => {
  return (
    <div className=' px-4 bg-gray-800'>

        <div className='container mx-auto'>

            <SeachHeader/>
            <SubHeader/>
            {props.children}

        </div>

    </div>
  )
}

export default BasicLayout