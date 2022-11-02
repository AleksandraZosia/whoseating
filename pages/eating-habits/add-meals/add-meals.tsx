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
  const today = formatDate(new Date())
  const [menu, setMenu] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const activeDate = useSelector((state) => state.date.date)
  React.useEffect(() => {
    if (!activeDate) dispatch(setDate(today.join()))
  }, [])

  const calendar = calcCalendar()
  return (
    <>
      <Head>
        <title>WHOseating: Your Meals</title>
      </Head>
      <main className="min-h-screen max-w-screen-sm">
        <MenuList close={() => setMenu(false)} open={menu} />

        <div>
          <TopSection
            title={`My meals, ${
              activeDate === today.join()
                ? "today"
                : activeDate.slice(0, 3) + activeDate.slice(4, -5)
            }
            `}
            close={() => setMenu(!menu)}
          />
          <div className="pt-4 pb-3">
            <DaysSwiper dates={calendar} />
          </div>
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
                        product.meal === meal.url && product.date === activeDate
                    )
                  : undefined
              }
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default AddMeal
