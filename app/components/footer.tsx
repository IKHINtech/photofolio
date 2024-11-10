"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaCodeBranch, FaReact } from "react-icons/fa";
import { Clock } from './clock';
export const Footer = () => {
  const [path, setPath] = useState<string>("~")
  const pathname = usePathname()
  useEffect(() => {
    if (pathname === "/") {
      setPath("~")
    } else {
      const newpath = "~/" + pathname.split("/")[1]
      setPath(newpath)
    }
  }, [pathname])


  return (
    <footer className="flex absolute bottom-0 w-full pb-1 font-mono" >
      <div className="flex flex-row justify-between mt-8 h-4 w-full" >
        <div className="flex justify-start items-center shrink">
          <div className="text-xs bg-[#7aa2f7] text-[#1a1b26] px-2">
            NORMAL
          </div>
          <div className="w-0 h-0
           border-t-[8px] border-t-[#565f89] border-l-[8px] border-l-[#7aa2f7] border-b-[8px] border-b-[#565f89]">
          </div>
          <div className="flex items-center gap-1 text-xs text-[#7aa2f7] bg-[#565f89] pl-2 pr-2">
            <FaCodeBranch />
            main
          </div>
          <div className="w-0 h-0
           border-t-[8px] border-t-transparent border-l-[8px] border-l-[#565f89] border-b-[8px] border-b-transparent">
          </div>
          <div className="flex items-center gap-2 pl-2 text-xs text-[#7aa2f7]">
            <FaReact />
            {path}
          </div>
        </div>
        <div className="text-xs items-center shrink ">
          © Sarikhin 2024
        </div>
        <div className="flex items-end justify-end shrink">

          <div className="w-0 h-0
           border-t-[8px] border-t-transparent border-r-[8px] border-r-[#7aa2f7] border-b-[8px] border-b-transparent">
          </div>
          <div className='bg-[#7aa2f7] text-[#1a1b26] px-2'>
            <Clock />
          </div>
        </div>
      </div>
    </footer>
  )
}
