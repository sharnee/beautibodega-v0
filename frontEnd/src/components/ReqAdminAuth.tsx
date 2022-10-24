import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const ReqAdminAuth = (props: any) => {

    const role = useSelector((state:{user: {user: {role: string}}}) => state.user.user.role)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(role);

        if(!(role === "Business" || role === "Super Admin")){
            navigate('/login')
        }

    }, []);

  return props.children
}

export default ReqAdminAuth