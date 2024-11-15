type Props = {
  href: string
  icon: React.ReactNode
  title?: string
}

export const ProfileMenu: React.FC<Props> = (props) => {

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:dark:text-[#94E2D5] hover:text-[#2959aa] font-bold"
    >{props.icon}
      {props.title}
    </a>
  )
}
