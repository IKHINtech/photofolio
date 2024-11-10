"use client"

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaCodeBranch, FaReact } from "react-icons/fa";
import { Clock } from './clock';
export const Footer = () => {

  //STATE:
  const [path, setPath] = useState<string>("~")
  const [mode, setMode] = useState<string>("NORMAL")
  const [bgr, setBgr] = useState<string>("#7aa2f7")

  //HOOKS:
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === "/") {
      setPath("~")
    } else {
      const newpath = "~/" + pathname.split("/")[1]
      setPath(newpath)
    }
  }, [pathname])

  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'v':
          setMode("VISUAL")
          setBgr("#bb9af7")
          break;
        case 'n':
          setMode("NORMAL")
          setBgr("#7aa2f7")
          break;
        case 'i':
          setMode("INSERT")
          setBgr("#9ece6a")
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);


  return (
    <footer className="flex  w-full pb-1 font-mono" >
      <div className="flex flex-row justify-between mt-8 h-4 w-full" >
        <div className="flex justify-start items-center shrink">
          <div className="text-xs px-2" style={{ backgroundColor: bgr, color: "#1a1b26" }} >
            {mode}
          </div>
          <div className={`w-0 h-0
           border-t-[8px] border-t-[#565f89] border-l-[8px] border-b-[8px] border-b-[#565f89]` } style={{ borderLeftColor: bgr }} >
          </div>
          <div className={`flex items-center gap-1 text-xs bg-[#565f89] pl-2 pr-2`} style={{ color: bgr }}>
            <FaCodeBranch />
            main
          </div>
          <div className="w-0 h-0
           border-t-[8px] border-t-transparent border-l-[8px] border-l-[#565f89] border-b-[8px] border-b-transparent">
          </div>
          <div className={`flex items-center gap-2 pl-2 text-xs`} style={{ color: bgr }}>
            <FaReact />
            {path}
          </div>
        </div>
        <div className="text-xs items-center shrink hidden md:flex">
          © Sarikhin 2024
        </div>
        <div className="flex items-end justify-end shrink">

          <div className={`w-0 h-0
           border-t-[8px] border-t-transparent border-r-[8px] border-b-[8px] border-b-transparent`} style={{ borderRightColor: bgr }}>
          </div>
          <div className={`text-[#1a1b26] px-2`} style={{ backgroundColor: bgr }}>
            <Clock />
          </div>
        </div>
      </div>
    </footer >
  )
}
