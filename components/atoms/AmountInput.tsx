import { useDispatch } from "../../store/store"
import React from "react"

interface Props {
  handleChange: (arg: any) => void
  measuringUnit?: string
  amount: number
}

const AmountInput = ({ handleChange, measuringUnit, amount }: Props) => {
  const dispatch = useDispatch()

  return (
    <label className="flex gap-2 w-1/5">
      <input
        type="number"
        onChange={(e) => handleChange(e.target.value)}
        value={amount}
        className="bg-white rounded-md"
      />
      <p>{measuringUnit}</p>
    </label>
  )
}

export default AmountInput
