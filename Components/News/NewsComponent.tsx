import React from 'react'

function NewsComponent() {
  return (
    
<ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10">  
<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Updates</span>                
    <li className="mb-10 ml-6 mt-5">            
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-600">
            <svg aria-hidden="true" className="w-3 h-3 text-indigo-600 dark:text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Ruby Finance v2.0.0 </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Uitgebracht op 9 September 2022</time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Verbeterde facturen aanmaak functie, verbeterde dashboard functies, verbeterde login pagina, bugs verwijderd die facturen zou tegen houden in de database.</p>
        
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-600">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Ruby Finance v1.3.0</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Uitgebracht op 2 Augustus 2022</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Uitgebreid dashboard info, metamask login functionaliteit, Updates functionaliteit.</p>
    </li>
    <li className="ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-600">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 ">Ruby Finance v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Uitgebracht op 8 Juli 2022</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Begin functionaliteit van de applicatie, facturen aanmaken/bewerken, debiteuren aanmaken/bewerken, producten aanmaken/bewerken, instellingen, dashboard info. </p>
    </li>
</ol>

  )
}

export default NewsComponent