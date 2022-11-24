interface Props {
  title?: string
}

const MainHeader = ({ title }: Props) => {
  return (
    <h1 className="text-center text-md font-black text-darkgreen ">{title}</h1>
  )
}

export default MainHeader
