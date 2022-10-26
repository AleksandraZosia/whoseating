interface Props {
  name?: string
}

const Benefit = ({ name }: Props) => {
  return (
    <div className="flex flex-col text-center max-w-xs items-center text-xs">
      <div className="rounded-full bg-green w-10 h-10"></div>
      <p>{name}</p>
    </div>
  )
}
export default Benefit
