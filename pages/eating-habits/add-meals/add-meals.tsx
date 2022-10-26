import type { NextPage } from "next"
import React from "react"
import MenuList from "../../../components/molecules/MenuList"
import TopSection from "../../../components/molecules/TopSection"
import DaysSwiper from "../../../components/molecules/DaysSwiper"
import {
  formatDate,
  getNextDay,
  getPreviousDay,
  getToBeAddedMealId,
  calcCalendar,
  filterNutrients,
} from "../../../bussiness_logic/data_functions"
import { MEALS, API_KEY } from "../../../bussiness_logic/constans"
import AddSection from "../../../components/layouts/AddSection"
import { useSelector, useDispatch } from "../../../store/store"
import Head from "next/head"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import { appStorage } from "../../../store/storage"
import { addProduct, setProducts } from "../../../store/slices/productsSlice"
import axios from "axios"
import AmountInput from "../../../components/atoms/AmountInput"
import { setDate } from "../../../store/slices/dateSlice"
import {
  PHASE_PRODUCTION_BUILD,
  TEMPORARY_REDIRECT_STATUS,
} from "next/dist/shared/lib/constants"

const AddMeal = () => {
  const today = new Date()
  const fromatedToday = formatDate(today)
  const [menu, setMenu] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const activeDate = useSelector((state) => state.date.date)
  React.useEffect(() => {
    const base_url = `https://api.nal.usda.gov/fdc/v1/`
    const foo = Object.keys(localStorage)
    // const keys = foo
    //   .map((key) => +key)
    //   .map((key) => key + "")
    //   .filter((key) => key !== "NaN")
    // console.log(keys)
    // const foods = keys.map((key) => JSON.parse(appStorage(key)))
    // const getData = async () => {
    //   foods.map(
    //     async ({ id, amount, date, meal }) =>
    //       await axios
    //         .get(`${base_url}/food/${id + ""}?api_key=${API_KEY}`)
    //         .then((res) => {
    //           const product = {
    //             name: res.data.description + " " + (res.data.brandName || ""),
    //             id: res.data.fdcId,
    //             amount: +amount,
    //             meal: meal,
    //             date: date,
    //             nutrients: {
    //               f: res.data.foodNutrients.reduce(
    //                 (value: number, nutrient: any) => {
    //                   if (nutrient.nutrient.name === "Total lipid (fat)") {
    //                     value = nutrient.amount
    //                   }
    //                   return value
    //                 },
    //                 0
    //               ),

    //               p: res.data.foodNutrients.reduce(
    //                 (value: number, nutrient: any) => {
    //                   if (nutrient.nutrient.name === "Protein") {
    //                     value = nutrient.amount
    //                   }
    //                   return value
    //                 },
    //                 0
    //               ),

    //               c: res.data.foodNutrients.reduce(
    //                 (value: number, nutrient: any) => {
    //                   if (
    //                     nutrient.nutrient.name === "Carbohydrate, by difference"
    //                   ) {
    //                     value = nutrient.amount
    //                   }
    //                   return value
    //                 },
    //                 0
    //               ),
    //             },
    //           }

    //           products.indexOf(product) === -1
    //             ? dispatch(addProduct(product))
    //             : null
    //         })

    //         .catch((err) => console.log(err))
    //   )
    // }
    // getData()

    dispatch(setDate(fromatedToday.join()))
  }, [])
  console.log("Wszystkie produkty w pamięci", products)

  const calendar = calcCalendar()
  return (
    <>
      <Head>
        <title>WHOseating: Your Meals</title>
      </Head>
      <main>
        {menu ? (
          <MenuList close={() => setMenu(!menu)} />
        ) : (
          <div>
            <TopSection title={activeDate} close={() => setMenu(!menu)} />
            <DaysSwiper dates={calendar} />
            {MEALS.map((meal) => (
              <AddSection
                key={meal.header}
                header={meal.header}
                btnText={meal.btnText}
                url={getToBeAddedMealId([meal]).reduce((acc, meal) => {
                  acc = meal.params.id
                  return acc
                }, "")}
                products={
                  products.length > 0
                    ? products.filter(
                        (product) =>
                          product.meal === meal.url &&
                          product.date === activeDate
                      )
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default AddMeal
