import React, { useEffect, useState } from 'react'
import { BeakerIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import db from '../StateGlobal/db/firebase';

function ProComp() {
    const { data: session } = useSession();
    const [productenFin, setProductenFin] = useState([]);
  
    useEffect(() => {
        db.collection("Producten").onSnapshot((snapshot:any) => (
         setProductenFin(snapshot.docs.map((pro: { data: () => any; id: any; }) => ({...pro.data(), id: pro.id })))
        ))
        if(!session){
          router.push("/login")
        }
      }, [session])
  return (
   <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
   <div className="">
       <h3 className="text-xl font-bold leading-none text-gray-900">Facturen</h3>
       <Link href="/account/facturen"><a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
        Bekijk meer
       </a></Link>
    </div><ul role="list" className="">
    {productenFin.map((pro: any, id: React.Key | null | undefined )=> (<div key={id}>
       {pro.LOGIN == session?.user?.email && 
       <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                 <div className="flex-shrink-0">
                 <BeakerIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600"/>
                 </div>
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                    {pro.Productnaam}
                      
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                    {pro.Omschrijving}
                    </p>
                 </div>
                 <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    €{pro.Prijs}/{pro.ProductEenheid}
                 </div>
                 <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      <Link href={`/account/producten/bewerken/${pro.id}`}><small className='cursor-pointer text-blue-500'>Bewerk</small></Link>
                   </div>
              </div>
           </li>
           }
      
     </div>))}
     </ul></div>
  )
}

export default ProComp