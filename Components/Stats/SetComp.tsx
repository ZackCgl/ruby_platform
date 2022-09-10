import { getSession, useSession } from 'next-auth/react';
import  { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import db, { storage } from '../../Components/StateGlobal/db/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import Link from 'next/link';


function SetComp() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [image, setImage] = useState<any>(null);
    const [url, setUrl] = useState<any>(null);
    const [user, setUser] = useState<any>();
    const [settings, setSettings] = useState<any>();
    const router = useRouter()
    useEffect(() => {
     
      db.collection("Settings").onSnapshot((snapshot: any) => {
  
        setSettings(snapshot.docs.map((set: { data: () => any; id: any; }) => ({...set.data(), id: set.id })))
    })
  
    }, [settings])
  
    const handleImageChange = (e:any) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
  
    const handleSubmit = () => {
      const imageRef = ref(storage, "image");
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrl(url)
              setImage(null);
             
            })
            .catch((error) => {
              console.log(error.message, "error getting the image url");
            });
          setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  
    const verzendDataPage = (e: { preventDefault: () => void }) => {
      console.log(url)
      e.preventDefault()
    const ref = db.collection("Settings")
    if(url != null){
        ref.add({
          FactuurImg: url,
          LOGIN: session?.user?.email,
        })
        setIsLoading(true)
        setTimeout(() => {
        router.push("/account/instellingen")
        setIsLoading(false)
      }, 2000); 
    }
    else{
      setIsLoading(false)
    }
    }
  return (
    <div><div className="w-screen overflow-hidden bg-white shadow rounded-lg mr-6 ">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Settings</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Persoonlijke Instellingen</p>
    </div>
    <div className="border-t border-gray-200">
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Naam</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{session?.user?.name}</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Naam Bedrijf</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Alexis Becker B.V.</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Email address</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{session?.user?.email}</dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Factuurafbeelding</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {settings ? <div>
          {settings.map((set: any, id: any) => {
            return(<><div><img style={{ width: 150, height: 150 }} src={set.FactuurImg} alt="" /><Link href={`/account/instellingen/bewerken/${set.id}`}><button>Bewerk</button></Link></div></>) 
          })}
          </div> : "Upload an image"}
          
      
      
          </dd>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500"></dt>
          
          {/*if you have an image*/}
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <div>{settings != ""  ? "" : <div>
          <input className='standardButton mt-3' type="file" onChange={handleImageChange} />
         <button onClick={handleSubmit} type="button" className="standardButton ml-4 mr-4">
                 Apply
              
                </button> 
               <>{!isLoading && <button onClick={verzendDataPage} type="button" className="standardButton">
                 Opslaan
                 
                </button>}</>
              {isLoading && <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-900 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
            </button>}
            </div>}</div>
          </dd>
        </div>
    </div>
  </div></div>
  )
}

export default SetComp