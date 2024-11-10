import { FaCircleInfo } from "react-icons/fa6"
import { MenuPage } from "./menu"
import { MdOutlineWork } from "react-icons/md"
import { AiFillProject } from "react-icons/ai"

export const MainMenu = () => {
  return <>

    <div className="my-6 flex gap-2 flex-wrap flex-col md:px-24 lg:px-28" >
      <MenuPage icon={
        <FaCircleInfo />
      }
        sort="a"
        title="About Me"
        href="/about"
      />

      <MenuPage icon={
        <MdOutlineWork />
      }
        sort="x"
        title="Experience"
        href="/experience"
      />
      <MenuPage icon={
        <AiFillProject />
      }
        sort="p"
        title="Projects"
        href="/projects"
      />
    </div>
  </>
}
