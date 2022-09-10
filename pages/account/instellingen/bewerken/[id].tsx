import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useSession } from 'next-auth/react';
import router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import db, { storage } from '../../../../Components/StateGlobal/db/firebase';

const id = () => {
    const router = useRouter()
    const idset:any = router.query
    const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<any>(null);
  const [url, setUrl] = useState<any>(null);
  const [settings, setSettings] = useState<any>([]);

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
    e.preventDefault()
  const ref = db.collection("Settings")
  if(url != null){
    db.collection("Settings").doc(idset.id).update({
        FactuurImg: url,
        LOGIN: session?.user?.email
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

  useEffect(() => {
   
    db.collection("Settings").onSnapshot((snapshot: any) => (
      setSettings(snapshot.docs.map((set: { data: () => any; id: any; }) => ({...set.data(), id: set.id })))
    ))
  }, [session, settings])


  return (
    <div>{settings.map((set: { FactuurImg: any; }, id: any) => {
        return (<div key={id}><img style={{ width: 150, height: 150 }} src={set.FactuurImg} alt="" /><input className='standardButton mt-3' type="file" onChange={handleImageChange} /></div>
        )
    })}
    <div className='mt-5'>
    <button onClick={handleSubmit} type="button" className="standardButton mr-4">
                 Apply
                 
                </button>
          {!isLoading && <button onClick={verzendDataPage} type="button" className="standardButton">
                 Opslaan
                 
                </button>}
              {isLoading && <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-gray-800 dark:hover:bg-gray-900 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
            </button>}
            </div></div>)
  
}

export default id