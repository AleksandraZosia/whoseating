import Image from "next/image"
interface Props {
  handleClick?: () => void
  src: string
  alt?: string
  h?: number
  w?: number
}

const ClickableIcon = ({ handleClick, src, alt, h = 24, w = 24 }: Props) => {
  return (
    <div onClick={handleClick} className="h-fit w-fit lg:cursor-pointer">
      <Image src={src} alt={alt} height={h} width={w} className="dark:invert" />
    </div>
  )
}

export default ClickableIcon
