import React from 'react'

function TopComp() {
  return (
    <div><div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ml-2">
    <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Best verkochte producten</h3>
    <div className="">
       <table className="items-center w-content bg-transparent border-collapse">
          <thead>
             <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Beste Product</th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">Percentage</th>
             </tr>
          </thead>
          <tbody className="">
             <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
              
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">30%</span>
                      <div className="relative w-20">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-cyan-600 h-2 rounded-sm" ></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
             <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
             
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">24%</span>
                      <div className="relative w-full">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-orange-300 h-2 rounded-sm"></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
             <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
              
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">18%</span>
                      <div className="relative w-full">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-teal-400 h-2 rounded-sm" ></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
             <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
               
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">12%</span>
                      <div className="relative w-full">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-pink-600 h-2 rounded-sm" ></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
             <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
              
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">9%</span>
                      <div className="relative w-full">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-indigo-600 h-2 rounded-sm" ></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
             <tr className="text-gray-500">
                <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
              
                <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                   <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">7%</span>
                      <div className="relative w-full">
                         <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div className="bg-purple-500 h-2 rounded-sm" ></div>
                         </div>
                      </div>
                   </div>
                </td>
             </tr>
          </tbody>
       </table>
    </div>
 </div>
</div>
  )
}

export default TopComp