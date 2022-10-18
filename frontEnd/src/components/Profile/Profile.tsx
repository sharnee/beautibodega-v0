import React from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Profile = () => {

  const user = useSelector((state:{auth: {user: {}}}) => state.auth.user)

  return (
    <div>
        
        <h2>Profile</h2>

    </div>
  )
}

export default Profile