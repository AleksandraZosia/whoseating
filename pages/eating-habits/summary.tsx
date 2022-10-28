import { useSelector } from "../../store/store"
import { formatDate } from "../../bussiness_logic/data_functions"
import LongButton from "../../components/atoms/LongButton"
import TopSection from "../../components/molecules/TopSection"
import Head from "next/head"
import React from "react"
import SecondaryHeader from "../../components/atoms/SecondaryHeader"
import FoodChart from "../../components/atoms/Chart"
import MenuList from "../../components/molecules/MenuList"
import { macrosData, varietyPointsData } from "../../bussiness_logic/chartsData"
import {
  calcFrequency,
  calcVarietyPoints,
} from "../../bussiness_logic/data_functions"

const FoodSummary = () => {
  const date = formatDate(new Date())
  const [menu, setMenu] = React.useState<boolean>(false)
  const foods = useSelector((state) => state.products.products)
  const todaysFoods = foods.filter((food) => food.date === date.join(","))
  console.log(
    varietyPointsData(todaysFoods.map((food) => food.name)),
    calcFrequency(todaysFoods.map((food) => food.name)),
    calcVarietyPoints(calcFrequency(todaysFoods.map((food) => food.name)))
  )
  return (
    <>
      <Head>
        <title>WHOs eating: Summary</title>
      </Head>
      <main>
        <MenuList close={() => setMenu(false)} open={menu} />
        <TopSection
          title={date[0] + ", " + date[1]}
          close={() => setMenu(!menu)}
        />
        {todaysFoods.length ? (
          <div>
            <SecondaryHeader title="Today's summary" />
            <div>
              <h3>Macronutritiens composition</h3>
              <div className="h-40 border-2 border-green">
                <FoodChart children={macrosData(todaysFoods)} />
              </div>
              <h3>Variety Points</h3>
              <div className="h-40">
                <FoodChart
                  children={varietyPointsData(
                    todaysFoods.map((food) => food.name)
                  )}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>You haven't added any ingridinets</div>
        )}
        <LongButton
          text="+ ADD TODAY'S MEAL"
          href="/eating-habits/add-meals/add-meals"
        />
      </main>
    </>
  )
}

export default FoodSummary
