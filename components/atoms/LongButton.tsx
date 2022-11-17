import { useRouter } from "next/router"

interface Props {
  text: string
  href: string
}

const LongButton = ({ text, href }: Props) => {
  const router = useRouter()

  return (
    <button
      className="bg-opacity-80 py-1 rounded-2xl text-xs bg-lightpink text-white text-center w-full backdrop-blur-sm h-[18%] cursor-pointer"
      onClick={() => router.push(href)}
    >
      {text}
    </button>
  )
}

export default LongButton
