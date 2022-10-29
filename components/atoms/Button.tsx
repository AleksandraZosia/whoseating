import { useRouter } from "next/router"

interface Props {
  text: string
  href: string
}

const Button = ({ text, href }: Props) => {
  const router = useRouter()

  return (
    <button
      className="bg-green text-white py-1 px-4 text-xs rounded-2xl text-center w-fit"
      onClick={() => router.push(href)}
    >
      {text}
    </button>
  )
}

export default Button
