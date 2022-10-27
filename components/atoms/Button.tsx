import Link from "next/link"

interface Props {
  text: string
  href: string
}

const Button = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <button className="bg-green text-white py-1 px-4 text-xs rounded-2xl text-center w-fit">
        {text}
      </button>
    </Link>
  )
}

export default Button
