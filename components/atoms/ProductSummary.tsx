interface Props {
  f?: string
  c?: string
  p?: string
  amount?: number
  bg?: string
}
const ProductSummary = ({ f, c, p, amount, bg = "" }: Props) => {
  return (
    <span className={` flex justify-between ${bg} pt-0.5 text-xs`}>
      <p>P: {p}%</p>
      <p>F: {f}%</p>
      <p>C: {c}%</p>
      {amount ? <p className="font-bold">{amount} g</p> : null}
    </span>
  )
}

export default ProductSummary
