import Router from 'next/router';
import React from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import GoogleNormal from "../images/googlenormal.png"
import Image from 'next/image';
import Head from 'next/head';



function Login() {
    const session = useSession();

    if (session) {

      }
      return (
        
        <div className='flex items-center justify-center h-screen bg-gray-100 '>
          <Head>
          <title>Login | Ruby Finance </title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className='bg-white w-96 p-6 rounded shadow-sm'>
          <strong>Welkom bij Ruby</strong>
          <p>Login om je boekhouding te doen.</p>
          <p>Ruby is een gratis factuurprogramma.</p>
          <div className='sm:mt-2 lg:mt-10'>
         <Image className="cursor-pointer"  width={150}
            height={40} onClick={() => signIn()} src={GoogleNormal} alt=""/>
            </div>
            </div>
        </div>
      )
    }
    export async function getServerSideProps(context: any) {
      const session = await getSession(context);
    
      if (!session) {
        return{
          redirect:{
            destination: "/noacces",
            permanent: false,
          },
        }
      }
    
      return{
        props: { session }
      }
    }
export default Login