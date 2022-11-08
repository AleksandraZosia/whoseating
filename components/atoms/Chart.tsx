import {
  ResponsiveSunburst,
  SunburstCustomLayerProps,
  ComputedDatum,
} from "@nivo/sunburst"
import {
  formatDate,
  calcMacros,
  sumAmount,
} from "../../bussiness_logic/data_functions"
import { PERFECT_MACROS } from "../../bussiness_logic/constans"
import { useSelector } from "../../store/store"
import { checkMacrosPercentage } from "../../bussiness_logic/data_functions"
import Bad from "../../public/emoji-bad.svg"
import Great from "../../public/emoji-great.svg"
import SoSo from "../../public/emoji-so-so.svg"

interface Child {
  name: string
  color: string
  loc: number
}

interface Props {
  childrenData: Child[]
}

interface RawDatum {
  name: string
}

const CenteredMetric = ({
  nodes,
  centerX,
  centerY,
}: SunburstCustomLayerProps<RawDatum>) => {
  const total = nodes.length === 3 ? checkMacrosPercentage(nodes) : "great"
  const dimensions = 61
  const x = centerX - dimensions / 2
  const y = centerY - dimensions / 2

  return total === "bad" ? (
    <Bad x={x} y={y} />
  ) : total === "great" ? (
    <Great x={x} y={y} />
  ) : (
    <SoSo x={x} y={y} />
  )

  // <text
  //   x={centerX}
  //   y={centerY}
  //   textAnchor="middle"
  //   dominantBaseline="central"
  // >
  //   <p>

  //   </p>
  // </text>
}

const FoodChart = ({ childrenData }: Props) => {
  const foods = useSelector((state) => state.products.products)
  const today = formatDate(new Date())
  const todaysFoods = foods.filter(
    (product) => product.date === today.join(",")
  )

  const data = {
    name: "nivo",
    color: "hsl(217, 70%, 50%)",
    children: childrenData,
  }
  const colors = [
    "hsla(177, 43%, 61%, 1)",

    "hsla(128, 74%, 21%, 1)",
    "hsla(45, 90%, 66%, 1)",
  ]

  return (
    <div className="h-40 bg-white rounded-xl">
      <ResponsiveSunburst
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={colors}
        childColor={{
          from: "color",
        }}
        inheritColorFromParent={false}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 1.4]],
        }}
        layers={["arcs", "arcLabels", CenteredMetric]}
      />
    </div>
  )
}

export default FoodChart
