import Ingridient from "../molecules/Ingridient"
import ProductSummary from "../atoms/ProductSummary"
import { calcMacros, sumAmount } from "../../bussiness_logic/data_functions"
interface Props {
  bg?: string
  products: Array<any>
  handleClick?: (arg: any) => void
}

const ProductsList = ({ bg, products, handleClick }: Props) => {
  return (
    <>
      <div className="rounded-xl bg-white flex flex-col gap-2 pt-2  text-xs divide-y dark:bg-darkgreen">
        {products?.map((product) => (
          <Ingridient
            ingName={product.name}
            ingAmount={product.amount}
            nutrients={product.nutrients}
            date={product.date}
            id={product.id}
            key={product.id + product.meal}
            meal={product.meal}
            handleClick={handleClick}
          />
        ))}
        {bg ? (
          <ProductSummary
            amount={sumAmount(products)}
            f={calcMacros(products, "f", sumAmount(products))}
            c={calcMacros(products, "c", sumAmount(products))}
            p={calcMacros(products, "p", sumAmount(products))}
            bg={bg}
          />
        ) : null}
      </div>
    </>
  )
}

export default ProductsList
