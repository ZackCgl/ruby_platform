import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import db from '../../../Components/StateGlobal/db/firebase'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import { TrashIcon } from '@heroicons/react/24/outline'
import ProComp from '../../../Components/Stats/ProComp'

const Producten = () => {

  const { data: session } = useSession();
  const [productenFin, setProductenFin] = useState([]);
  const router = useRouter()

  useEffect(() => {
    db.collection("Producten").onSnapshot((snapshot:any) => (
      setProductenFin(snapshot.docs.map((doc: any) => doc.data()))
    ))
    
  }, [])
  
   
     
  return (
    <div className='flex'>
       <Sidebar />
    <div className='flex-col'>
      
        
    <div className='p-3'>
      <Link href={"/account/producten/aanmaken"}><button className="standardButton">Product aanmaken</button></Link>
    </div>
    
    <div className='w-72'>
    <ProComp />
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
    props: { }
  }
  
}
  


export default Producten