import SecondaryHeader from "../../../components/atoms/SecondaryHeader"
import ProductInput from "../../../components/molecules/ProductInput"
import TopSection from "../../../components/molecules/TopSection"
import ProductsList from "../../../components/organisms/ProductsList"
import React from "react"
import { useSelector } from "../../../store/store"
import {
  filterNutrients,
  getToBeAddedMealId,
  startWithCapital,
  getMealAndDate,
} from "../../../bussiness_logic/data_functions"
import { MEALS } from "../../../bussiness_logic/constans"
import { GetStaticProps, GetStaticPaths } from "next"
import Section from "../../../components/layouts/Section"

const SearchMeal = ({ meals }: any) => {
  const [data, setData] = React.useState<any>([])
  const addedProducts = useSelector((state) => state.products.products)
  const [searchedProducts, setSearchedProducts] = React.useState<any>([])
  const meal = meals.title
  const currentDate = useSelector((state) => state.date.date)
  const recentSearches = useSelector(
    (state) => state.searchedProducts.searchedProducts
  )

  React.useEffect(() => {
    setSearchedProducts(
      data.map((product: any, i: number, data: Array<any>) => {
        return {
          name: product.description + " " + (product.brandName || ""),
          id: product.fdcId + meal + currentDate,
          meal: meal,
          nutrients: {
            f: filterNutrients(data, "Total lipid (fat)", i),
            p: filterNutrients(data, "Protein", i),
            c: filterNutrients(data, "Carbohydrate, by difference", i),
          },
        }
      })
    )
  }, [data])
  console.log(currentDate.slice(0, -5))
  return (
    <main className="min-h-screen w-screen box-border">
      <TopSection title={startWithCapital(meals.title)} />
      <Section>
        <ProductInput setFoods={setData} clickClose={setSearchedProducts} />
      </Section>
      <Section>
        <SecondaryHeader title="Search Results" />
        <ProductsList
          products={searchedProducts}
          handleClick={setSearchedProducts}
        />
      </Section>
      <Section>
        <SecondaryHeader title="Selected Products" />
        <ProductsList
          products={addedProducts.filter(
            (product) => product.meal === meal && product.date === currentDate
          )}
        />
      </Section>
      <Section>
        <SecondaryHeader title="Recent Searches" />
        <ProductsList products={recentSearches} />
      </Section>
    </main>
  )
}

export default SearchMeal

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getToBeAddedMealId(MEALS)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const meals = getMealAndDate(params.id)

  return {
    props: {
      meals,
    },
  }
}
