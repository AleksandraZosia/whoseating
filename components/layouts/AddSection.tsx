import SecondaryHeader from "../atoms/SecondaryHeader"
import ProductsList from "../organisms/ProductsList"
import Button from "../atoms/Button"
import Description from "../atoms/Description"

interface Props {
  header?: string
  btnText: string
  handleClick?: () => void
  products?: Array<any>
  url: string
}

const AddSection = ({ header, btnText, url, products }: Props) => {
  const bg = "bg-[#4B7150] rounded-b-xl pb-2 px-2 bg-opacity-30"
  return (
    <section className="grid-rows-3 space-y-3 py-1 justify-evenly">
      <SecondaryHeader title={header} />
      {products && products.length > 0 ? (
        <ProductsList bg={bg} products={products} />
      ) : (
        <Description text="No ingridients added yet" />
      )}
      <Button text={btnText} href={`/eating-habits/add-meals/${url}`} />
    </section>
  )
}

export default AddSection
