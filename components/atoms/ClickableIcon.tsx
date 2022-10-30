import Image from "next/image"
interface Props {
  handleClick?: () => void
  src: string
  alt?: string
  h?: number
  w?: number
}

const ClickableIcon = ({ handleClick, src, alt, h = 24, w = 24 }: Props) => {
  const darkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  console.log(darkMode())
  return (
    <div onClick={handleClick} className="h-fit w-fit">
      <Image
        src={src}
        alt={alt}
        height={h}
        width={w}
        className="dark:text-white"
        style={darkMode() ? { color: "white" } : {}}
      />
    </div>
  )
}

export default ClickableIcon
