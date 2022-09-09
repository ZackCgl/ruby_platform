import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import NewsComponent from '../../../Components/News/NewsComponent';
import db from '../../../Components/StateGlobal/db/firebase';
import Stats from "../../../Components/Stats/Stats"


const Dashboard = ()=> {


  return (
    <div className='flex'>
      <Stats />
      <div className='hidden lg:flex ml-4 mr-4 w-96'>
      <NewsComponent />
      </div>
        </div>
  )
}
export default Dashboard