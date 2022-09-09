import { BanknotesIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import React, { useEffect, useState } from 'react'
import db from '../StateGlobal/db/firebase';

function InvComp() {
   const { data: session } = useSession();
  const [productenFin, setProductenFin] = useState([]);

  useEffect(() => {
   if (!session) {
      router.push("/login")
        }
    db.collection("Facturen").onSnapshot((snapshot: any) => (
      setProductenFin(snapshot.docs.map((doc: any) => doc.data()))
    ))
  }, [session])
  return (
    <div>
       <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
      <div className="">
          <h3 className="text-xl font-bold leading-none text-gray-900">Facturen</h3>
          <Link href="/account/facturen"><a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
           Bekijk meer
          </a></Link>
       </div>
      <ul role="list" className="">
      {productenFin.map((pro: any, i ) => {

      return (<div key={i}>
         
         {pro.LOGIN == session?.user?.email && 
         <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                   <div className="flex-shrink-0">
                      <BanknotesIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600"/>
                   </div>
                   <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                         {pro.Factuurnr}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                         {pro.Datum}
                      </p>
                   </div>
                   <div className="inline-flex items-center text-base font-semibold text-gray-900">
                     € {pro.totalWithTax}
                   </div>
                </div>
             </li>
             }
        
       </div>)})}
       </ul>
       </div>
    </div>
  )
}

export default InvComp