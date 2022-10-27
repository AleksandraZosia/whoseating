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
import { MEALS } from "../../../bussiness_logic/constans"
import AddSection from "../../../components/layouts/AddSection"
import { useSelector, useDispatch } from "../../../store/store"
import Head from "next/head"
import { setDate } from "../../../store/slices/dateSlice"

const AddMeal = () => {
  const today = new Date()
  const fromatedToday = formatDate(today)
  const [menu, setMenu] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const activeDate = useSelector((state) => state.date.date)
  React.useEffect(() => {
    dispatch(setDate(fromatedToday.join()))
  }, [])

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
