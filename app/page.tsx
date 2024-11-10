'use client'

import Image from "next/image";
import { MainMenu } from "./components/mainMenu";
import { SosmedMenu } from "./components/sosmedMenu";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.key) {
        case 'a':
          router.push('/about');
          break;
        case 'p':
          router.push('/projects');
          break;
        case 'x':
          router.push('/experience');
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
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-courier-new-bold)]">
      <div className="flex flex-col md:w-1/2 p-8 pb-20 sm:p-20" >
        <div className="flex justify-center">
          <Image
            aria-hidden
            src="/logo.svg"
            alt="Logo"
            width={500}
            height={120}
          />
        </div>
        <h2 className="font-extrabold text-center text-sm md:text-xl">Fullstack Developer</h2>
        <div className="text-xs md:text-sm text-center dark:text-[#F9E2AF] overflow-auto">I work with Nuxt, React, Go (Golang), and Flutter,</div>
        <div className="text-xs md:text-sm text-center dark:text-[#F9E2AF] overflow-auto"> specializing in building efficient and innovative web and mobile applications</div>
        <MainMenu />
        <SosmedMenu />
      </div>
    </div>
  );
}
