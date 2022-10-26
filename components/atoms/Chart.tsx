import { ResponsiveSunburst } from "@nivo/sunburst"
import {
  formatDate,
  calcMacros,
  sumAmount,
} from "../../bussiness_logic/data_functions"
import { useSelector } from "../../store/store"

const FoodChart = () => {
  const foods = useSelector((state) => state.products.products)
  const today = formatDate(new Date())
  const todaysFoods = foods.filter(
    (product) => product.date === today.join(",")
  )

  const children = [
    {
      name: "proteins",
      color: "hsl(77,70%, 50%)",
      loc: calcMacros(todaysFoods, "p", sumAmount(todaysFoods)),
    },
    {
      name: "carbohydrates",
      color: "hsl(355, 70%, 50%)",
      loc: calcMacros(todaysFoods, "c", sumAmount(todaysFoods)),
    },
    {
      name: "fat",
      color: "hsl(13, 70%, 50%)",
      loc: calcMacros(todaysFoods, "f", sumAmount(todaysFoods)),
    },
  ]
  console.log(todaysFoods)
  const data = {
    name: "nivo",
    color: "hsl(217, 70%, 50%)",
    children: children,
  }

  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="loc"
      cornerRadius={2}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "nivo" }}
      childColor={{
        from: "color",
        modifiers: [["brighter", 0.1]],
      }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 1.4]],
      }}
    />
  )
}

export default FoodChart
