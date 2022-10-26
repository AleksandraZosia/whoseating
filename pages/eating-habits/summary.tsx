import { useSelector } from "../../store/store"
import { formatDate } from "../../bussiness_logic/data_functions"
import LongButton from "../../components/atoms/LongButton"
import TopSection from "../../components/molecules/TopSection"
import Head from "next/head"
import React from "react"
import SecondaryHeader from "../../components/atoms/SecondaryHeader"
import FoodChart from "../../components/atoms/Chart"

const FoodSummary = () => {
  const date = formatDate(new Date())
  const [menu, setMenu] = React.useState<boolean>(false)
  return (
    <>
      <Head>
        <title>WHOs eating: Summary</title>
      </Head>
      <main>
        <TopSection
          title={date[0] + ", " + date[1]}
          close={() => setMenu(!menu)}
        />
        <SecondaryHeader title="Today's summary" />
        <div>
          <h3>Macronutritiens composition</h3>
          <div className="h-40 border-2 border-green">
            <FoodChart />
          </div>
        </div>
        <LongButton
          text="+ ADD TODAY'S MEAL"
          href="/eating-habits/add-meals/add-meals"
        />
      </main>
    </>
  )
}

export default FoodSummary
