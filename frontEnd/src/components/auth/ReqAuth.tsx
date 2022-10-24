import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const ReqAuth = (props: any) => {

    const token = useSelector((state: {user: {token: string}}) => state.user.token)
    const navigate = useNavigate()

    useEffect(() => {

        if(token == ""){
            navigate('/login')
        }

    }, []);

  return props.children
}

export default ReqAuth