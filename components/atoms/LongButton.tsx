import { useRouter } from "next/router"

interface Props {
  text: string
  href: string
}

const LongButton = ({ text, href }: Props) => {
  const router = useRouter()

  return (
    <button
      className="bg-opacity-[0.85] py-1 rounded-2xl text-xs bg-green text-white text-center w-10/12"
      onClick={() => router.push(href)}
    >
      {text}
    </button>
  )
}

export default LongButton
