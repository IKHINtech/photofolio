import { ProfileMenu } from "./profileMenu"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const SosmedMenu = () => {
  return <>

    <div className="flex justify-center gap-4" >
      <ProfileMenu
        icon={<FaGithub
          size={24}
        />}
        href="https://github.com/IKHINtech"
      />

      <ProfileMenu
        icon={<FaLinkedin
          size={24}
        />}
        href="https://www.linkedin.com/in/sarikhin"
      />
      <ProfileMenu
        icon={<FaInstagram
          size={28}
        />}
        href="https://instagram.com/ikhintech"
      />
      <ProfileMenu
        icon={<MdOutlineEmail
          size={30}
        />}
        href="mailto:sarikhinlovestory@gmail.com"
      />
    </div>
  </>
}
