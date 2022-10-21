import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Profile = () => {

  const user = useSelector((state:{user: {user: any}}) => state.user.user)
  const pic = useSelector((state:{user: {pic: string}}) => state.user.pic)

  console.log(user.name);

  // const [tags, setTags] = useState<any>(user.tags.split(","))
  const tags = user.tags.split(",")


  const navigate = useNavigate();
// useEffect(() => {
//   console.log(user.tags, "userTags")
//   // if(!user.tags == null){setTags(user.tags.split(","))}
  

// }, [])

// console.log(tags, "tags after");

  return (
    <div>
        
        <h2 className='text-2xl'><strong>Profile</strong></h2>
        <div className='flex flex-row'>
        <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 m-1 cursor-pointer" src={pic} alt="Bordered avatar" onClick={()=>navigate("/editprofile")}/>
        <div className='basis-1/4 p-3'>{user.name}</div>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Following: {user.following ? user.following : 0} </button>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Followers: {user.followers ? user.followers : 0}</button>
        </div>

        <div className='flex flex-row'>
        {tags.map((tag:any)=>{return<span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{tag}</span>})}
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">Shop Your</p>
          <p className="text-xl ...">Holy-Grails</p>
          <div>oops... there seem to be nothere here</div>
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">Shop Your</p>
          <p className="text-xl ...">Favorite Brands</p>
          <div>oops... there seem to be nothere here</div>
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">See Your</p>
          <p className="text-xl ...">Best Reviews</p>
          <div>oops... there seem to be nothere here</div>
        </div>



    </div>
  )
}

export default Profile