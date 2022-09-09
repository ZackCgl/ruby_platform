import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'

function SidebarComponent({text, icon}:any) {
  return (
    
      <div className="hidden md:flex ml-4 ">
        <p className="text-base font-medium text-gray-900 cursor-pointer">{text}</p>
     </div>
  )
}

export default SidebarComponent