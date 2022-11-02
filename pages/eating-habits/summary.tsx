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
import Section from "../../components/layouts/Section"

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
    <div>
      <Head>
        <title>WHOs eating: Summary</title>
      </Head>
      <main className="min-h-screen max-w-screen flex flex-col ">
        <MenuList close={() => setMenu(!menu)} open={menu} />
        <TopSection
          title={"My Stats, " + date[0] + " " + date[1].slice(0, -5)}
          close={() => setMenu(!menu)}
        />
        {todaysFoods.length ? (
          <div className="pt-3">
            <Section>
              <SecondaryHeader title="Today's Macronutrinents" />

              <div className="h-40 border-2 border-green">
                <FoodChart children={macrosData(todaysFoods)} />
              </div>
            </Section>
            <Section>
              <SecondaryHeader title={"Today's variety points"} />
              <div className="h-40">
                <FoodChart
                  children={varietyPointsData(
                    todaysFoods.map((food) => food.name)
                  )}
                />
              </div>
            </Section>
          </div>
        ) : (
          <div>You haven't added any ingridinets</div>
        )}
        <Section>
          <LongButton
            text="+ ADD TODAY'S MEAL"
            href="/eating-habits/add-meals/add-meals"
          />
        </Section>
      </main>
    </div>
  )
}

export default FoodSummary
