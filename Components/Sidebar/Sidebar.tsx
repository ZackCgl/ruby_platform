import {getSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SidebarComponent from './SidebarComponent';
import { Popover, Transition } from '@headlessui/react'
import {ClipboardDocumentIcon,Cog6ToothIcon, DocumentTextIcon,HomeIcon,UserGroupIcon,} from '@heroicons/react/24/outline'
import { AiOutlineLogout } from 'react-icons/ai';


const Sidebar:React.FC = ({}) => {
  const { data: session } = useSession();
 
useEffect(() =>{

},[session])
const userImage =  session?.user?.image as HTMLImageElement | null | string | any;


  return (
    <div className='flex flex-col'>
    <div className='flex flex-col lg:ml-8 mr-8'>
      
      <Link href={'/account/home'}><div className='flex m-2 hover:scale-105 group duration-200'>
      <HomeIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></HomeIcon> <SidebarComponent text="Dashboard"/>
      </div></Link>
      <Link href={'/account/facturen'}><div className='flex m-2 hover:scale-105 group duration-200'>
      <DocumentTextIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></DocumentTextIcon> <SidebarComponent text="Facturen"/>
      </div></Link>
      <Link href={'/account/relaties'}><div className='flex m-2 hover:scale-105 group duration-200'>
      <UserGroupIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></UserGroupIcon> <SidebarComponent text="Relaties"/>
      </div></Link>
      <Link href={'/account/producten'}><div className='flex m-2 hover:scale-105 group duration-200'>
      <ClipboardDocumentIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></ClipboardDocumentIcon> <SidebarComponent text="Producten"/>
      </div></Link>
      <Link href={'/account/instellingen'}><div className='flex m-2 hover:scale-105 group duration-200'>
      <Cog6ToothIcon className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></Cog6ToothIcon> <SidebarComponent text="Instellingen"/>
      </div></Link>
      
      </div>
      <div className=" mt-72">
        <div className="flex flex-col m-4 items-left">
          <Link href={'/account/instellingen'}><div className=" cursor-pointer flex">
          <img className="h-10 w-10 rounded-full border-indigo-500 border-solid border-2 " src={userImage} alt="" />
          </div></Link>
          <div onClick={() => signOut()} className='flex cursor-pointer hover:scale-105 group duration-200 mt-10 ml-2'>
          <AiOutlineLogout className="h-6 w-6 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600" aria-hidden="true"></AiOutlineLogout> 
          </div>
          </div>
          
      </div>
      
                     
    
    </div>
  )
}
export async function getServerSideProps(context: any) {
  const session = getSession(context);
  
  if (!session) {
    return{
      redirect:{
        destination: "/login",
        permanent: true,
      },
    }
  }
  return{
    props: {  }
  }
  
}

export default Sidebar