import React from 'react'
import SeachHeader from './SeachHeader';
import SubHeader from './SubHeader';
import Footer from './Footer';

const BasicLayout = (props: any) => {
  return (
    <div className=' bg-greenish '>

        <div className=' '>

            <SeachHeader/>
            <SubHeader/>
            

        </div>
        <div className='container mx-auto px-4 bg-white'>
        {props.children}
        </div>
        <Footer/>

    </div>
  )
}

export default BasicLayout