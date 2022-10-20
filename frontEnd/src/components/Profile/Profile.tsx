import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Profile = () => {

  const user = useSelector((state:{auth: {user: {}}}) => state.auth.user)

  return (
    <div>
        
        <h2>Profile</h2>
        <div>
        {/* <img className="w-20 h-20 rounded-full m-5" src={conpressedFileURL} alt="image description"/> */}
        </div>

    </div>
  )
}

export default Profile