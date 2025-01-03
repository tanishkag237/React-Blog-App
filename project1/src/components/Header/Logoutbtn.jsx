import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/configuration'
import {logout} from '../../store/authSlice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{dispatch(logout())})
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LOGOUT</button>
  )
}

export default Logoutbtn