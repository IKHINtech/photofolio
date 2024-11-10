type Props = {
  href: string
  icon: React.ReactNode
  title: string
  sort: string
}

export const MenuPage: React.FC<Props> = (props) => {

  return <div className="flex justify-between">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#94E2D5] font-bold"
      target="_blank"
      href={props.href}
      rel="noopener noreferrer"
    >
      {props.icon}
      {props.title}
    </a>
    <p className="text-red-400 font-bold" >{props.sort}</p>
  </div>
}
