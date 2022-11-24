import Image from "next/image"
interface Props {
  handleClick?: () => void
  src: string
  alt?: string
  h?: number
  w?: number
}

const ClickableIcon = ({ handleClick, src, alt, h = 20, w = 20 }: Props) => {
  return (
    <div
      onClick={handleClick}
      className="h-fit w-fit lg:cursor-pointer flex place-content-center"
    >
      <Image src={src} alt={alt} height={h} width={w} />
    </div>
  )
}

export default ClickableIcon
