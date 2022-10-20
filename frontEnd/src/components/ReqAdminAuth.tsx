import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const ReqAdminAuth = (props: any) => {

    const role = useSelector((state:{auth: {user: {role: string}}}) => state.auth.user.role)
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