import Image from "next/image";
import { MainMenu } from "./components/mainMenu";
import { SosmedMenu } from "./components/sosmedMenu";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col w-1/2" >
        <div className="flex justify-center">
          <Image
            aria-hidden
            src="/logo.svg"
            alt="Logo"
            width={500}
            height={120}
          />
        </div>
        <h2 className="font-extrabold text-center">Fullstack Developer</h2>
        <div className="text-sm text-center text-[#F9E2AF] overflow-auto">I work with Nuxt, React, Go (Golang), and Flutter,</div>
        <div className="text-sm text-center text-[#F9E2AF] overflow-auto"> specializing in building efficient and innovative web and mobile applications</div>
        <MainMenu />
        <SosmedMenu />
      </div>
    </div>
  );
}
