import { getSession } from 'next-auth/react';
import React from 'react'
import Sidebar from '../../../Components/Sidebar/Sidebar';
import SetComp from '../../../Components/Stats/SetComp';



const Home = () => {

  return (
    <div className='flex'>
      <Sidebar />
      <SetComp />
  </div>
  
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

export default Home