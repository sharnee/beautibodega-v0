import React from 'react'
import SeachHeader from './SeachHeader';
import SubHeader from './SubHeader';
import Footer from './Footer';

import '../css/BL.css'

const BasicLayout = (props: any) => {
  return (
    <div className=' bg-greenish '>

        <div className=' '>

            <SeachHeader/>
            <SubHeader/>
            

        </div>
        <div className='mx-auto px-4 bg-white BL'>
        {props.children}
        </div>
        <Footer/>

    </div>
  )
}

export default BasicLayout