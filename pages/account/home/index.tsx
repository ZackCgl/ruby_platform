import { getProviders, getSession, useSession } from 'next-auth/react'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Header from '../../../Components/Header/Header'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import Login from '../../login'
import Dashboard from './dashboard'


const dashboardindex = () => {
  const { data: session } = useSession();
  const router = useRouter()
  useEffect(() => {
   
     
  }, [])
  return (

   <><div className='flex'>
      <Sidebar/>
      <Dashboard/>
    </div></>
  )
}
export async function getServerSideProps(context: any) {
  const session = getSession(context);
  
  if (!session) {
    return{
      redirect:{
        destination: "/login",
        permanent: true,
      },
    }
  }
  return{
    props: {  }
  }
  
}
export default dashboardindex