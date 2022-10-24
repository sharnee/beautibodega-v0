import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {

  let { id } = useParams();

  const yourID = useSelector((state:{user: {user: any}}) => state.user.user.secondary_id)
  // const pic = useSelector((state:{user: {pic: string}}) => state.user.pic)

  const [check, setCheck] = useState(false)
  const [tags, setTags] = useState([])
  const [user, setUser] = useState<any>({user: [{}], profilePic: ""})


  // const [tags, setTags] = useState<any>(user.tags.split(","))

  const navigate = useNavigate();
useEffect(() => {
  axios.post('/getProfile',{ID: id} )
  .then(profile=> {
    console.log(profile.data)
    setUser(profile.data)
    if(profile.data.user.tags != null || profile.data.user.tags != undefined){
      console.log("get out");
      setTags(profile.data.user.tags.split(","))
    }
  })
  

  // if(user.tags != null || user.tags != undefined){
  //   console.log("get out");
  //   setTags(user.tags.split(","))
  // }
  

}, [])

// console.log(tags, "tags after");
console.log(user);

  return (
    <div>
        
        <h2 className='text-2xl'><strong>Profile</strong></h2>
        <div className='flex flex-row'>
        <img className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 m-1 cursor-pointer" src={user.profilePic} alt="Bordered avatar" onClick={()=>navigate("/editprofile")}/>
        <div className='basis-1/4 p-3'>{user.user[0].name}</div>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Following: {user.user[0].following ? tags.length : 0} </button>
        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Followers: {user.user[0].followers ? tags.length : 0}</button>
        </div>

        <div className='flex flex-row'>
        {tags? tags.map((tag:any)=>{return<span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{tag}</span>}): null}
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">The</p>
          <p className="text-xl ...">Holy-Grails</p>
          {user.user[0].favorite_products ? null : <div>oops... There doesn't seem to be anything here</div>}
          
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">The</p>
          <p className="text-xl ...">Favorite Brands</p>
          {user.user[0].favorite_brands ? null : <div>oops... There doesn't seem to be anything here</div>}
        </div>

        <div className='p-1 pb-5 pt-5'>
          <p className="text-base ...">The</p>
          <p className="text-xl ...">Best Reviews</p>
          {user.user[0].reviews ? null : <div>oops... There doesn't seem to be anything here</div>}
        </div>



    </div>
  )
}

export default Profile