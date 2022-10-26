interface Props {
  title?: string
  onClick?: ()=>void
}

const SecondaryHeader = ({ title, onClick }: Props) => {
  return <h2 className="text-secondaryHeader" onClick={onClick} >{title}</h2>
}

export default SecondaryHeader
