import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import db from '../../../Components/StateGlobal/db/firebase'
import { useStateValue } from '../../../Components/StateGlobal/StateGlobal/StateProvider'
import { getSession, useSession } from 'next-auth/react'
import router from 'next/router'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import { TrashIcon } from '@heroicons/react/24/outline'
import DebComp from '../../../Components/Stats/DebComp'

const Debiteuren = () => {
  const { data: session } = useSession();

  useEffect(() => {
  
   
  }, [])

  
  return (
    <div className='flex'>
      <Sidebar />
    <div className='flex-col'>
      
        
    <div className='p-3'>
    <Link href={"/account/relaties/aanmaken"}><button className="standardButton">Relatie aanmaken</button></Link>
    </div>
    <div className='w-72'>
   <DebComp />
   </div>
        
</div>
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

export default Debiteuren