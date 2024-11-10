import Link from "next/link"

type Props = {
  href: string
  icon: React.ReactNode
  title: string
  sort: string
}

export const MenuPage: React.FC<Props> = (props) => {

  return <div className="flex justify-between">
    <Link
      className="text-xs md:text-base flex items-center gap-2 hover:underline hover:underline-offset-4 dark:text-[#94E2D5] font-bold"
      href={props.href}
    >
      {props.icon}
      {props.title}
    </Link>
    <p className="text-xs md:text-base dark:text-red-400 font-bold" >{props.sort}</p>
  </div>
}
