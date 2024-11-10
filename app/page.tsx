import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{ textAlign: 'center', marginTop: '200px', }} >
        <Image
          aria-hidden
          src="/logo.svg"
          alt="Logo"
          width={500}
          height={120}
        />
        <h2 className="text-2xl font-extrabold">Fullstack Developer</h2>
        <p></p>
        <div className="flex gap-2 flex-wrap flex-col" >
          <div className="flex justify-between">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#94E2D5] font-bold"
              target="_blank"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="Home"
                width={16}
                height={16}
              />
              Home
            </a>
            <p className="text-[#F9E2AF] font-bold" >h</p>
          </div>
          <div className="flex justify-between">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#94E2D5] font-bold"
              target="_blank"
              href="/projects"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Projects"
                width={16}
                height={16}
              />
              Projects
            </a>
            <p className="text-[#F9E2AF] font-bold"> p</p>
          </div>
          <div className="flex justify-between">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#94E2D5] font-bold"
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="About Me"
                width={16}
                height={16}
              />
              About Me
            </a>
            <p className="text-[#F9E2AF] font-bold"> a</p>
          </div>
        </div>
      </div >
    </div >
  );
}
