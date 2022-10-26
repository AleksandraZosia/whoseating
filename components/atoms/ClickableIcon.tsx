import Image from "next/image"
interface Props {
  handleClick?: () => void
  src: string
  alt?: string
  h?: number
  w?: number
}

const ClickableIcon = ({ handleClick, src, alt, h = 25, w = 25 }: Props) => {
  return (
    <div onClick={handleClick} className="h-fit w-fit">
      <Image src={src} alt={alt} height={h} width={w} />
    </div>
  )
}

export default ClickableIcon
