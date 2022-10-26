interface Props {
  date: Array<string>
}

const DaySlide = ({ date }: Props) => {
  return (
    <div className="rounded-xl bg-white p-2 text-xs text-center">
      <p>{date[1]}</p>
      <p>{date[0]}</p>
    </div>
  )
}

export default DaySlide
