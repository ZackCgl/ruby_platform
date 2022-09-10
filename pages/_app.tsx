import '../styles/globals.css'
import reducer, { initialState } from '../Components/StateGlobal/StateGlobal/reducer';
import {StateProvider} from "../Components/StateGlobal/StateGlobal/StateProvider"
import Header from '../Components/Header/Header';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps, session }:any) {
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
    <SessionProvider session={session}>
    <Header {...pageProps}/>
      <Component {...pageProps} />
      </SessionProvider>
  </StateProvider>
  )
}

export default MyApp
