import ClickableIcon from "../atoms/ClickableIcon"
import React from "react"
import { useDispatch, useSelector } from "../../store/store"
import { addProduct, deleteProduct } from "../../store/slices/productsSlice"
import ProductSummary from "../atoms/ProductSummary"
import AmountInput from "../atoms/AmountInput"

interface Props {
  ingName: string
  ingAmount: number
  meal: string
  date: string
  nutrients?: any
  id: string
}

const Ingridient = ({ ingName, ingAmount = 0, meal, nutrients, id }: Props) => {
  const dispatch = useDispatch()
  const [isChoosen, setIsChoosen] = React.useState<boolean>(false)
  const [amount, setAmount] = React.useState<number>(0)
  const choosenDate = useSelector((state) => state.date.date)
  const products = useSelector((state) => state.products.products)
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2">
        <div className="flex flex-col text-xs w-full">
          <p>{ingName}</p>
          <ProductSummary
            f={nutrients.f}
            c={nutrients.c}
            p={nutrients.p}
            amount={ingAmount}
          />
        </div>
        {ingAmount ? (
          <ClickableIcon
            src="/close.svg"
            alt="delete product"
            w={12}
            h={12}
            handleClick={() => {
              dispatch(deleteProduct(id))
              console.log(
                "Produkty po usunięciu",
                products.filter((product) => product.id !== id)
              )
            }}
          />
        ) : (
          <ClickableIcon
            src="/add_ing.svg"
            alt="add product"
            handleClick={() => setIsChoosen(!isChoosen)}
          />
        )}
      </div>
      {isChoosen ? (
        <div className="bg-[#E5E5E5] flex px-1 py-2 justify-between">
          <AmountInput
            handleChange={setAmount}
            amount={amount}
            measuringUnit="grams"
          />
          <button
            className="bg-darkgreen py-1 rounded-md text-xs text-white px-2"
            onClick={() => {
              dispatch(
                addProduct({
                  name: ingName,
                  amount: amount,
                  date: choosenDate,
                  meal: meal,
                  id: id,
                  nutrients: {
                    f: nutrients.f,
                    c: nutrients.c,
                    p: nutrients.p,
                  },
                })
              )
              // appStorage(
              //   id,
              //   JSON.stringify({
              //     date: choosenDate,
              //     amount: amount,
              //     id: id,
              //     meal: meal,
              //   })
              // )
            }}
          >
            ADD
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Ingridient
