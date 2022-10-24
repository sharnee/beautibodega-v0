import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';

import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import {updateProfile} from '../../slice/UserSlice';

const Profile = () => {

  let { id } = useParams();

    const dispatch = useDispatch()

  const yourUser = useSelector((state:{user: {user: any}}) => state.user.user)
  // const pic = useSelector((state:{user: {pic: string}}) => state.user.pic)

  const [check, setCheck] = useState(false)
  const [ifYou, setIfYou] = useState(false)
  const [tags, setTags] = useState([])
  const [user, setUser] = useState<any>({user: [{}], profilePic: ""})
  const [followers, setFollowers] = useState<any>([])


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
    if(yourUser.following.includes(profile.data.user.secondary_id)){
      setCheck(true)
    }
    setFollowers(yourUser.following)
    if(yourUser.secondary_id == profile.data.user.secondary_id){
      setIfYou(true)
    }
  })
  

  // if(user.tags != null || user.tags != undefined){
  //   console.log("get out");
  //   setTags(user.tags.split(","))
  // }
  

}, [])

const handleFollow = ()=>{

  if(check){
    
    dispatch(updateProfile({following: [followers.filter((follower:string)=>follower != user.user[0].secondary_id)], follower: [user.user[0].following.filter((following: string)=>following != user.user[0].secondary_id)], otherID: user.user[0].id }))
    // setFollowers(followers.filter((follower:string)=>follower != user.user.secondary_id))
    setCheck(false)
  }
  else{
    console.log(user.user[0].secondary_id, "secondary id");
    if(yourUser.following == null){
      if(user.user[0].follower == undefined){
        dispatch(updateProfile({following: [user.user[0].secondary_id], follower: [yourUser.secondary_id], ID: yourUser.id, otherID: user.user[0].id}))
      }
      else{
      dispatch(updateProfile({following: [user.user[0].secondary_id], follower: [...user.user[0].follower, yourUser.secondary_id], ID: yourUser.id, otherID: user.user[0].id}))
      }
    }
    else{
      console.log(user.user[0].id, "user.user[0].id")
      dispatch(updateProfile({following: [...yourUser.following, user.user[0].secondary_id], follower: [...user.user[0].follower, yourUser.secondary_id], ID: yourUser.id, otherID: user.user[0].id}))
    }

    // setFollowers([...followers, user.user.secondary_id])
    setCheck(true)
  }

}

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
        {ifYou ? null : check ? <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={()=>handleFollow()}>UnFollow</button> :<button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800" onClick={()=>handleFollow()}>Follow</button>}


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