import React, { useEffect, useState } from 'react'
import  Link  from 'next/link'
import { useSession, signIn} from "next-auth/react"
import { getSession } from 'next-auth/react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  var account = null;

const [metamaskaccount, setMetamaskaccount] = useState<any>()
const [web3Modal, setWeb3Modal] = useState<any>([])
  const providerOptions = {
    binancechainwallet: {
      package: true
      },
      walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "3cf2d8833a2143b795b7796087fff369"
      }
    },
    walletlink: {
      package: WalletLink, 
      options: {
        appName: "Net2Dev NFT Minter", 
        infuraId: "3cf2d8833a2143b795b7796087fff369",
        rpc: "", 
        chainId: 1, 
        appLogoUrl: null, 
        darkMode: true 
      }
      },
  };
  
  

useEffect(() =>{
  const web3func = () => {
    setWeb3Modal(new Web3Modal({
      network: "mainnet",
      theme: {
        background: "rgb(10, 10, 20)",
        main: "rgb(100, 100, 100)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(10, 10, 0, 0.2)",
        hover: "rgb(0, 026, 50)"
      },
      cacheProvider: true,
      providerOptions 
      }));
  }
  web3func()
},[])

    async function connectwallet() { 
      var provider = await web3Modal.connect();
      var web3 = new Web3(provider); 
      await provider.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      account = accounts[0]; 
     setMetamaskaccount(account); 
    }
    
      const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        window.localStorage.clear();
      setMetamaskaccount(null); 
    }
  return (
    <Popover className="relative bg-white">
      <div className="mb-5 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Link href={"/"}><img className='cursor-pointer' width={120} src="https://i.imgur.com/eKtqcbY.png" alt='' /></Link>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Oplossingen</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Prijs
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Over Ons
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    )}
                  >
                    <span>Meer</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-20 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          {!metamaskaccount && <button onClick={connectwallet} type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800  dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <svg aria-hidden="true" className="mr-2 -ml-1 w-6 h-5" viewBox="0 0 2405 2501" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1512_1323)"> <path d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> </g> <defs> <clipPath id="clip0_1512_1323"> <rect width="2404" height="2500" fill="white" transform="translate(0.519043 0.132812)"/> </clipPath> </defs> </svg>
            Connect with MetaMask
          </button>}
          {metamaskaccount && <button onClick={disconnect} type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800  dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <svg aria-hidden="true" className="mr-2 -ml-1 w-6 h-5" viewBox="0 0 2405 2501" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1512_1323)"> <path d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z" fill="#E2761B" stroke="#E2761B" stroke-width="5.94955"/> <path d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z" fill="#E4761B" stroke="#E4761B" stroke-width="5.94955"/> <path d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="5.94955"/> <path d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z" fill="#CD6116" stroke="#CD6116" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z" fill="#233447" stroke="#233447" stroke-width="5.94955"/> <path d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z" fill="#763D16" stroke="#763D16" stroke-width="5.94955"/> <path d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z" fill="#E4751F" stroke="#E4751F" stroke-width="5.94955"/> <path d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z" fill="#F6851B" stroke="#F6851B" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="5.94955"/> <path d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> <path d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z" fill="#161616" stroke="#161616" stroke-width="5.94955"/> </g> <defs> <clipPath id="clip0_1512_1323"> <rect width="2404" height="2500" fill="white" transform="translate(0.519043 0.132812)"/> </clipPath> </defs> </svg>
            Disconnect
          </button>}
          </div>
         
        </div>
      </div>
      <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>

              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
