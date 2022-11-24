import ClickableIcon from "../atoms/ClickableIcon"
import React from "react"
import { useDispatch, useSelector } from "../../store/store"
import { addProduct, deleteProduct } from "../../store/slices/productsSlice"
import { addSearchedProduct } from "../../store/slices/searchedProductsSlice"
import ProductSummary from "../atoms/ProductSummary"
import AmountInput from "../atoms/AmountInput"

interface Props {
  ingName: string
  ingAmount: number
  meal: string
  date: string
  nutrients?: any
  id: string
  handleClick?: (arg: any) => void
  addSearch?: (arg: any) => void
}

const Ingridient = ({
  ingName,
  ingAmount,
  meal,
  nutrients,
  id,
  handleClick = () => null,
  addSearch,
}: Props) => {
  const dispatch = useDispatch()
  const [isChoosen, setIsChoosen] = React.useState<boolean>(false)
  const [amount, setAmount] = React.useState<number>(0)
  const choosenDate = useSelector((state) => state.date.date)
  const recentSearches = useSelector(
    (state) => state.searchedProducts.searchedProducts
  )
  return (
    <div className="flex flex-col py-1 ">
      <div className="flex justify-between px-2 items-center gap-1">
        <div
          className={`flex flex-col text-sm w-full ${
            ingAmount ? "text-green" : "text-darkestgreen"
          }`}
        >
          <p className="font-semibold">{ingName}</p>
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
            }}
          />
        ) : (
          <ClickableIcon
            src="/add_ing.svg"
            alt="add product"
            h={20}
            w={20}
            handleClick={() => {
              setIsChoosen(!isChoosen)
              dispatch(
                addSearchedProduct({
                  name: ingName,
                  id: id,
                  nutrients: {
                    f: nutrients.f,
                    c: nutrients.c,
                    p: nutrients.p,
                  },
                })
              )
            }}
          />
        )}
      </div>
      {isChoosen ? (
        <div className="bg-[#E8E4DA] flex px-1 py-2 justify-between text-darkestgreen ">
          <AmountInput
            handleChange={setAmount}
            amount={amount}
            measuringUnit="grams"
          />
          <button
            className="bg-lightpink bg-opacity-80 py-1 rounded-md text-xs text-white px-2"
            onClick={() => {
              amount
                ? dispatch(
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
                : null
              setIsChoosen(!isChoosen)
              handleClick([])
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
