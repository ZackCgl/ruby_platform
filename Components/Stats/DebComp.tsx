import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import React, { useEffect, useState } from 'react'
import db from '../StateGlobal/db/firebase';



const DebComp = () => {
   const { data: session } = useSession();
  const [relatie, setRelatie] = useState<any>([]);
  useEffect(() => {
   db.collection("Relaties").onSnapshot((snapshot:any) => (
      setRelatie(snapshot.docs.map((rel: { data: () => any; id: any; }) => ({...rel.data(), id: rel.id })))
    ))
    if (!session) {
      router.push("/login")
        }
  }, [session])
  return (
    <div>
       <div className=" bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full ">
      <div className="">
          <h3 className="text-xl font-bold leading-none text-gray-900">Debiteuren</h3>
          <Link href="/account/relaties"><a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
           Bekijk meer
          </a></Link>
       </div>
      <ul role="list" className="">
      {relatie.map((rel: any, id: React.Key | null | undefined )=> (<div key={id}>

         {rel.LOGIN == session?.user?.email && 
         <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                   <div className="flex-shrink-0">
                   <FaceSmileIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600"/>
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                         {rel.Bedrijfsnaam}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                         {rel.email}
                      </p>
                   </div>
                   <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      <Link href={`/account/relaties/bewerken/${rel.id}`}><small className='cursor-pointer text-blue-500'>Bewerk</small></Link>
                   </div>
                </div>
             </li>
             
             }
        
       </div>))}
       </ul>
       </div>
    </div>
  )
}

export default DebComp