import React, { useEffect, useState } from 'react'
import db from '../../../Components/StateGlobal/db/firebase'
import { useRouter } from 'next/router'
import { useStateValue } from '../../../Components/StateGlobal/StateGlobal/StateProvider'
import { getSession, useSession } from 'next-auth/react'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import axios from 'axios'


const AanmakenRe = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [kvkNew, setKvkNew] = useState<any>()
  const [kvk, setKvk] = useState<any>()
  const [{user}, dispatch] = useStateValue();

  const [bedrijfsnaam, setBedrijfsnaam] = useState<any>([]);
  const [contactpersoon, setContactpersoon] = useState<any>("");
  const [adres, setAdres] = useState<any>([]);
  const [postcode, setPostcode] = useState<any>([]);
  const [land, setLand] = useState<string>("Nederland");
  const [email, setEmail] = useState<any>([]);
  const [telefoon, setTelefoon] = useState<any>([]);
  const [plaats, setPlaats] = useState<any>([]);
  const [fax, setFax] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [verzonden, setVerzonden] = useState("");

 
useEffect(() => {

},[kvkNew,kvk])

  const sendTweet = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    if (bedrijfsnaam.length >= 4 && contactpersoon.length >= 1 && adres.length >= 3 && postcode.length >= 6 && land.length >=1){
      const ref = db.collection("Relaties")
      ref.add({
        Bedrijfsnaam: bedrijfsnaam,
        Contactpersoon: contactpersoon,
        Adres: adres,
        postcode: postcode,
        Land: land,
        email: email,
        telefoon: telefoon,
        plaats: plaats,
        LOGIN: session?.user?.email
      })
      setIsLoading(true)
      setVerzonden("")
      setTimeout(() => {
      router.push("/account/relaties")
      setIsLoading(false)
      setVerzonden("")
    }, 2000); 
    }
    else{
      setVerzonden("Vul alle velden in")
      setIsLoading(false)
    }
   
 
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }


  return (
    <div className='flex'>
      <Sidebar />



<div className="hidden sm:block " aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Relatie aanmaken</h3>
              <p className="mt-1 text-sm text-gray-600">Maak een debiteur aan om je facturen naar toe te sturen.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">

            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setBedrijfsnaam(e.target.value)}
                        value={bedrijfsnaam}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Contactpersoon
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setContactpersoon(e.target.value)}
                        value={contactpersoon}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Land
                      </label>
                      <select
                       onChange={(e) => setLand(e.target.value)}
                        value={land}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Nederland</option>
                        <option>Belgie</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setAdres(e.target.value)}
                        value={adres}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPlaats(e.target.value)}
                        value={plaats}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Telefoonnummer
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setTelefoon(e.target.value)}
                        value={telefoon}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPostcode(e.target.value)}
                        value={postcode}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-between">
                 <small className='text-red-500 mr-2'>{verzonden}</small>
                  {!isLoading && <button onClick={sendTweet} type="submit" className="standardButton">
                 Volgende
                 
                </button>}
              {isLoading && <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-900 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
            </button>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
</div>
  )
}





