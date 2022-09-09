import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import {BsArrowDownSquare} from "react-icons/bs"
import {AiOutlinePlusCircle} from "react-icons/ai"
import db from '../../../Components/StateGlobal/db/firebase'
import { useStateValue } from '../../../Components/StateGlobal/StateGlobal/StateProvider'
import Router from 'next/router'
import { getSession, useSession } from 'next-auth/react'
import Sidebar from '../../../Components/Sidebar/Sidebar'

const aanmaken = () => {
 
  const { data: session } = useSession();
  const [InvoiceID, setInvoiceID] = useState<any>([]);
  const [newInveID, setNewInvID] = useState<any>([20220001]);
  const [verzonden, setVerzonden] = useState<any>("");
  const [show, setShow] = useState<boolean>(false)
  const [relaties, setRelaties] = useState<any>([]);
  const [producten, setProducten] = useState<any>([]);
  const [ReID, setReID] = useState<any>([]);
  const [gegevens, setGegevens] = useState<any>([]);
  const [Today, setToday] = useState<any>([0])
  const [pnr, setPnr] = useState<boolean>(false)
  const [pnr2, setPnr2] = useState<boolean>(false)
  const [pnr3, setPnr3] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)
  const [clicked2, setClicked2] = useState<boolean>(false)
  const [clicked3, setClicked3] = useState<boolean>(false)
  const [chosenPr1, setChosenPr1] = useState<any>([])
  const [chosenPr2, setChosenPr2] = useState<any>([])
  const [aantalrow1, setAantalrow1] = useState<any>([0])
  const [aantalrow2, setAantalrow2] = useState<any>([0])
  const [totaleRow1, setTotalerow1] = useState<any>([0])
  const [totaleRow2, setTotalerow2] = useState<any>([0])
  const [newProdPrijs1,setnewProdPrijs1] = useState<any>([])
  const [newProdPrijs2,setnewProdPrijs2] = useState<any>([])
  const [newProdnaam1,setnewProdnaam1] = useState<any>([])
  const [newProdnaam2,setnewProdnaam2] = useState<any>([])
  const [newOmschrijving1,setnewOmschrijving1] = useState<any>([])
  const [newOmschrijving2,setnewOmschrijving2] = useState<any>([])
  const [newBTW1,setnewBTW1] = useState<any>([])
  const [newBTW2,setnewBTW2] = useState<any>([])
  const [InvoiceNR, setInvoiceNR] = useState<number>();
  const [totaleTotal, setTotaleTotal] = useState<any>([0])
  const [totaleTotalBTW, setTotaleTotalBTW] = useState<any>([0])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [settings, setSettings] = useState<any>([]);

  useEffect(() => {
    setTotalerow1(aantalrow1 * newProdPrijs1);
    db.collection("Relaties").onSnapshot(snapshot => (
      setRelaties(snapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
     
    ))
    setTotalerow2(aantalrow2 * newProdPrijs2);
    db.collection("Relaties").onSnapshot(snapshot => (
      setRelaties(snapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
     
    ))
    
    db.collection("Producten").onSnapshot(snapshot => (
      setProducten(snapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
    ))

    db.collection("Facturen").onSnapshot(snapshot => (
      setInvoiceID(snapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
     
    ))
    db.collection("Settings").onSnapshot(snapshot => (
      setSettings(snapshot.docs.map(set => ({...set.data(), id: set.id })))
     
    ))
    setTotaleTotal(totaleRow1 + totaleRow2);
    setTotaleTotalBTW(1.21 * totaleTotal);

    
  
  }, [totaleRow1, totaleRow2, aantalrow1, aantalrow2, InvoiceNR, totaleTotal, InvoiceNR, newInveID])

  const shownot = () =>{

    setShow((current: any) => !current)
    setToday(currentDate); 
    
    {InvoiceID.filter((inv:any)=> {
     
      if(session?.user?.email == inv.LOGIN){
       
         let temp = 20220001;
         
            if (temp < inv.Factuurnr) {
              temp = inv.Factuurnr;
              setNewInvID((temp + 1))
            }
          };
          
        
         
        
      }
      
      )}
    }

  const showpnr = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    setPnr(true);
    setToday(currentDate);
  }

  const showpnr2 = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    setPnr2(true);
    setToday(currentDate);
  }

  const showpnr3 = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    setPnr3(true);
    setToday(currentDate);
  }



  const kiesdebiteur = (relatie: {
    plaats: any; Bedrijfsnaam: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; Adres: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; postcode: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined 
}) => {
  
  setReID(<div className='flex flex-col mt-10'><br></br><strong>Adresgegevens</strong><small>{relatie.Bedrijfsnaam}</small> <small>{relatie.Adres}</small> <div className='flex'><small>{relatie.postcode}</small><small>{relatie.plaats}</small></div></div>);
  setGegevens(<div className='flex flex-col mr-12'><br></br>
  {settings.map((set: { FactuurImg: any; }, id: any) => {
        return (<div><img style={{ width: 150, height: 150 }} src={set.FactuurImg} alt="" /></div>
        )
    })}
  <strong>Factuurgegevens</strong>
  
  <div>
  
  </div>
  {Today}
  <small></small>
  <strong>{newInveID}</strong> </div>)

  }




  const kiesproduct1 = (prod: { Prijs: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; Productnaam: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; Omschrijving: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; BTW: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; ProductEenheid: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined }) => {
    setAantalrow1([1])
    setnewProdPrijs1(prod.Prijs)
    setnewProdnaam1(prod.Productnaam)
    setnewOmschrijving1(prod.Omschrijving)
    setnewBTW1(prod.BTW)
    setChosenPr1(<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className="py-4 px-6 text-left">{Today}</td>
                  <td className="py-4 px-6 text-left">
                    {prod.Productnaam}
                  </td>
                  <td className="py-4 px-6 text-left">
                    {prod.Omschrijving}
                  </td >
                  <td className="py-4 px-6 text-left">
                    {prod.BTW}
                  </td>
                  <td className="py-4 px-6 text-left">
                    <small>€{prod.Prijs} / {prod.ProductEenheid}</small>
                  </td>
                </tr>);
  }
    const kiesproduct2 = (prod: any) => {
      setAantalrow2([1])
      setnewProdPrijs2(prod.Prijs)
      setnewProdnaam2(prod.Productnaam)
      setnewOmschrijving2(prod.Omschrijving)
      setnewBTW2(prod.BTW)
      setChosenPr2(<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className="py-4 px-6 text-left">{Today}</td>
                        <td className="py-4 px-6 text-left">
                          {prod.Productnaam}
                        </td>
                        <td className="py-4 px-6 text-left">
                          {prod.Omschrijving}
                        </td>
                        <td className="py-4 px-6 text-left">
                          {prod.BTW}
                        </td>
                        <td className="py-4 px-6 text-left">
                          <small>€{prod.Prijs} / {prod.ProductEenheid}</small>
                        </td>
                      </tr>);
    
     
      }


  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  const currentDate = `${day}-${month}-${year}`;

  // verzend de data voor controle naar volgend pagina
  const verzendDataPage = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (aantalrow1 >= 1){
      const ref = db.collection("Facturen")
      ref.add({
        Factuurnr: newInveID,
        Datum: Today,

        Productnaam1: newProdnaam1,
        Omschrijving1: newOmschrijving1,
        BTW1: newBTW1,
        Prijs1: newProdPrijs1,
        Aantal1: aantalrow1,
        Totaal1: totaleRow1,

        Productnaam2: newProdnaam2,
        Omschrijving2: newOmschrijving2,
        BTW2: newBTW2,
        Prijs2: newProdPrijs2,
        Aantal2: aantalrow2,
        Totaal2: totaleRow2,

        totalNoTax: totaleTotal,
        totalWithTax: totaleTotalBTW.toFixed(2),

        LOGIN: session?.user?.email
      })
      setVerzonden("")
      setIsLoading(true)
      setTimeout(() => {
      Router.push("/account/facturen")
      setIsLoading(false)
    }, 2000); 
    }
    else{
      setVerzonden("Vul alle velden in")
      setIsLoading(false)
    }
   
 
  };
 
 

  return (
    <div className='flex'>
      <Sidebar />
    <div className='lg: w-screen'>
      
        
    <div className='text-1xl font-semibold leading-loose text-gray-900'>
    <h3>Aanmaken Factuur</h3>
   
    <strong>Selecteer debiteur: </strong><strong className='arrowselect' onClick={shownot}><BsArrowDownSquare /></strong>

    {show && <div>
    {relaties.filter((filt: { LOGIN: any; Bedrijfsnaam: any }) => {
      if(
        filt.LOGIN == session?.user?.email &&
        filt.Bedrijfsnaam?.length >= 1){
       return filt
      }
     
    }).map((relatie: any) => {
      
    return(<div key={relatie.id} onClick={() => {kiesdebiteur(relatie);
      setShow((current: any) => !current)}}>
              <div  style={{display: "flex",}}>
                <div>
                   <div style={{display:"flex", alignItems:"left"}}>
                      <small className='cursor-pointer hover:text-indigo-500'>{relatie.Bedrijfsnaam}</small>
                     
                     <div></div>
                    
                     
                  </div>
              
                 
                </div>
              </div>
              <div>
              </div>
            </div>
       ) })}
       
        </div>}
        
        <div className='flex justify-between'>
            <div className='flex-col'>
              {ReID}
              
              </div>
              <div className='flex flex-col'>
            {gegevens}
              </div>
          </div>
          <div>
            <div style={{marginTop:"10px"}} className='overflow-x-auto relative shadow-md sm:rounded-lg mr-10'>
            {newProdPrijs1.length >= 1 &&  <div style={{display:"flex", }}>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <th scope="col" className="p-4">Datum</th>
                  <th scope="col" className="p-4">Productnaam</th>
                  <th scope="col" className="p-4">Omschrijving</th>
                  <th scope="col" className="p-4">BTW</th>
                  <th scope="col" className="p-4">Prijs</th>
                 
                </tr>
               {chosenPr1}

            </table>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <th scope="col" className="p-4 w-5">Aantal</th>
                  <th scope="col" className="p-4">Totaal ex. BTW</th>
                  <th scope="col" className="p-4"></th>

            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className="py-4 px-6 text-left">
                <input className='w-10' type="number" value={aantalrow1} onChange={(e) => setAantalrow1(e.target.value)}/>
                  </td>
                  <td>
                    €{totaleRow1}
                  </td>
                  <td style={{alignItems:"center", justifyContent:"center"}} >
                  {clicked2 ? "" : <AiOutlinePlusCircle size={30} onClick={showpnr2} className="click_more"/>}
                  </td>
              </tr>
            </table>
            </div> }
          
            {newProdPrijs2.length >= 1 &&  <div style={{display:"flex", }}>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <tr className='hidden'>
                  <th scope="col" className="p-4">Datum</th>
                  <th scope="col" className="p-4">Productnaam</th>
                  <th scope="col" className="p-4">Omschrijving</th>
                  <th scope="col" className="p-4">BTW</th>
                  <th scope="col" className="p-4">Prijs</th>
                 
                </tr>
               {chosenPr2}

            </table>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <tr className='hidden'>
                  <th scope="col" className="p-4 w-5">Aantal</th>
                  <th scope="col" className="p-4">Totaal ex. BTW</th>
                  <th scope="col" className="p-4"></th>

            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className="py-4 px-6 text-left">
                <input className='w-10' type="number" value={aantalrow2} onChange={(e) => setAantalrow2(e.target.value)}/>
                  </td>
                  <td >
                 €{totaleRow2}
                  </td>
                  <td>
                  {clicked3 ? "" : <AiOutlinePlusCircle size={30} onClick={showpnr3} className="click_more"/>}
                  </td>
                  
              </tr>
            </table>
            </div> }
            {!clicked && <div><strong>Selecteer Product 1: </strong><strong className='arrowselect' onClick={showpnr}><BsArrowDownSquare /></strong> </div>}
           
          
           {!pnr ? "" : <div>{producten.filter((filt: any) => {
      if(
        filt.LOGIN == session?.user?.email &&
        filt.Productnaam?.length >= 1){
       return filt
      }
     
    }).map((prod: any) =>{
              return(<div key={prod.id} onClick={() => {kiesproduct1(prod);
                setPnr(false); setClicked(true);
                }}>
                  <small className='cursor-pointer hover:text-indigo-500'>{prod.Productnaam}</small>
                  
                  </div>)
            })}</div>}
            
            {!pnr2 ? "" : <div>{producten.filter((filt: any) => {
      if(
        filt.LOGIN == session?.user?.email &&
        filt.Productnaam?.length >= 1){
       return filt
      }
     
    }).map((prod: any) =>{
              return(<div key={prod.id} onClick={() => {kiesproduct2(prod);
                setPnr2(false); setClicked2(true);
                }}>
                  <small className='cursor-pointer hover:text-indigo-500'>{prod.Productnaam}</small>
                  
                  </div>)
            })}</div>}
          
            </div>
            <div style={{marginTop:"200px", display:"flex", justifyContent:"space-between"}}>
            <div className='max-w-lg text-1xl font-semibold leading-loose text-gray-900' style={{display:"flex", flexDirection: "column"}}>

            <small >Totaal : </small>
            <strong>€ {totaleTotal} ,-</strong>
            <small>Totaal incl Btw: </small>
            <strong>€ {totaleTotalBTW} ,-</strong>
            </div>
              <div> <small style={{color: "red", fontSize: "18px"}}>{verzonden}</small></div>
              <div className='mr-10'>
              <small className='hidden'>{newInveID}</small>
              {!isLoading && <button onClick={verzendDataPage} type="button" className="standardButton">
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
            
          </div>
        
 
    </div>

    
</div>
</div>
  )
}


export default aanmaken