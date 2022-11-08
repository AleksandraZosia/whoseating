import {
  formatDate,
  calcMacros,
  sumAmount,
  calcFrequency,
  calcVarietyPoints,
} from "./data_functions"

const macrosData = (arg: Array<any>) => [
  {
    name: "proteins",
    color: "hsl(177,43%, 61%)",
    loc: +calcMacros(arg, "p", sumAmount(arg)),
  },
  {
    name: "carbohydrates",
    color: "hsl(128, 74%, 21%)",
    loc: +calcMacros(arg, "c", sumAmount(arg)),
  },
  {
    name: "fat",
    color: "hsl(45, 90%, 66%)",
    loc: +calcMacros(arg, "f", sumAmount(arg)),
  },
]

const varietyPointsData = (arg: Array<any>) => {
  const varietyPoints = calcVarietyPoints(calcFrequency(arg))
  return [
    {
      name: `${varietyPoints}/100`,
      color: "hsla(128, 74%, 21%, 1)",
      loc: varietyPoints,
    },
    {
      name: "",
      color: "hsla(0, 0%, 85%, 1)",
      loc: 100 - varietyPoints,
    },
  ]
}

export { varietyPointsData, macrosData }
