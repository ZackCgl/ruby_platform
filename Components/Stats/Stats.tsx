import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react'
import db from '../StateGlobal/db/firebase';
import DebComp from './DebComp';
import TopComp from './TopComp';

function Stats() {
    const [InvoiceID, setInvoiceID] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
   
    db.collection("Facturen").onSnapshot((snapshot: any) => (
      setInvoiceID(snapshot.docs.map((doc: { data: () => any; id: any; }) =>  ({...doc.data() , id: doc.id })))
      
    ))
     
  }, [])
 

  const totalTax = InvoiceID.map((inv: any) => ( inv.LOGIN == session?.user?.email && inv.totalNoTax));
  const totalSum = totalTax.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <>
<div>
   <div className="flex overflow-hidden bg-white">
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content">
         <main>
            <div className="px-4 pt-6">
               <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">€{totalSum}</span>
                           <h3 className="text-base font-normal text-gray-500">Verdiend in totaal</h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           14.6%
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">€{totalSum}</span>
                           <h3 className="text-base font-normal text-gray-500">Verdiend dit kwartaal</h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           32.9%
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0</span>
                           <h3 className="text-base font-normal text-gray-500">NFT's verdiend</h3>
                        </div>
                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-blue-500 text-base font-bold">
                           0%
                        </div>
                     </div>
                  </div>
               </div>
               <div className='lg:flex mt-4'>
                  <div className='lg:w-96'>
               <DebComp />
               </div>
               <TopComp />
               </div>
               </div>
         </main>
        
      </div>
   </div>
   <script async defer src="https://buttons.github.io/buttons.js"></script>
   <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
</div>
</>
  )
}

export default Stats