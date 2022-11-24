import { BiSearch } from "react-icons/bi"
import ClickableIcon from "../atoms/ClickableIcon"
import axios from "axios"
import React from "react"
import { API_KEY } from "../../bussiness_logic/constans"

interface Props {
  clickClose: (arg: any) => void
  setFoods: (arg: any) => void
}

const ProductInput = ({ clickClose, setFoods }: Props) => {
  const [productName, setProductName] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.currentTarget.value.toLowerCase())
  }

  React.useEffect(() => {
    const base_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}`

    const getData = async () => {
      await axios
        .get(`${base_url}&query=${productName}`)
        .then((res) => setFoods(res.data.foods))
        .catch((err) => console.log(err))
    }
    productName.length > 2 ? getData() : null
  }, [productName])

  return (
    <div className="flex border items-center mt-2 w-fit bg-white px-1 text-xs gap-2 justify-between rounded-xl text-darkestgreen active:border-darkgreen border-none">
      <BiSearch className="text-xs" />
      <input
        placeholder="search ingridients"
        type="text"
        onChange={(e) => handleChange(e)}
        aria-label="search ingridients"
        value={productName}
        className="bg-transparent py-0.5 text-sm"
      />
      <ClickableIcon
        src="/close.svg"
        alt="clear search"
        handleClick={() => {
          setProductName("")
          setFoods([])
          clickClose([])
        }}
        h={10}
        w={10}
      />
    </div>
  )
}

export default ProductInput
