import React from 'react'
import AuthScreen from '../home/AuthScreen'
import HomeScreen from '../home/HomeScreen'
import { useAuthStore } from '../../store/authUser';



const HomePage = () => {

  const{ user} = useAuthStore();

  return (<> {user? <HomeScreen /> : <AuthScreen />}</>
    
  )
}

export default HomePage