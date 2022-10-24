import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { authActions } from '../../slice/AuthSlice';
import { userActions } from '../../slice/UserSlice'


const Logout = () => {

const dispatch = useDispatch()
const navigate = useNavigate()


    useEffect(() => {

        dispatch(authActions.logout({}))
        dispatch(userActions.logout(""))
        navigate('/login')

    }, []);

    return(
        <></>
    )

}

export default Logout