import React from 'react'
import SeachHeader from './SeachHeader';
import SubHeader from './SubHeader';
import Footer from './Footer';

const BasicLayout = (props: any) => {
  return (
    <div className='  bg-gray-800'>

        <div className='container mx-auto px-4'>

            <SeachHeader/>
            <SubHeader/>
            {props.children}
            

        </div>

        <Footer/>

    </div>
  )
}

export default BasicLayout