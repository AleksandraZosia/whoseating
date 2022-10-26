interface Props {
  text?: string
}

const Description = ({ text }: Props) => {
  return <p className="text-xs font-normal">{text}</p>
}

export default Description
