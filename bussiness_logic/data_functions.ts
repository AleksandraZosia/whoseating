const formatToPercentage = (arg: number) => {
  const percentage = arg * 100 + "%"
  return percentage
}

const calcMacros = (arr: Array<any>, nutrient: string, amount: number) => {
  const gramsOfNutrientInMeal = arr.reduce((acc, product) => {
    acc = acc + +product.amount * (product.nutrients[nutrient] / 100)
    return acc
  }, 0)

  const nutrientPercentage = (gramsOfNutrientInMeal / amount) * 100

  return nutrientPercentage.toFixed(2)
}

const sumAmount = (arr: Array<any>) =>
  arr.reduce((acc, product) => {
    acc = acc + +product.amount
    return acc
  }, 0)

const sumMacros = (arr: Array<number>) => {
  return arr.reduce((a, b) => a + b, 0)
}

const calcFrequency = (arr: Array<any>) => {
  const occuranceFrequency = Object.entries(
    arr.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1
      return a
    }, {})
  )

  return occuranceFrequency
}

const calcVarietyPoints = (arr: Array<any>) => {
  const one100percent = arr.reduce((a, b) => a + b[1], 0)
  const precentagesInDiet = arr.map(([name, amount]) => [
    name,
    (amount / one100percent) * 100,
  ])
  let varietyPoints = precentagesInDiet.reduce((acc, [_, percentage]) => {
    percentage >= 25.5 ? (acc = acc - Math.round(percentage)) : null
    return acc
  }, 100)

  return varietyPoints
}

const calcAverage = (arr: Array<number>) => {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length
  return average
}

const formatDate = (date: Date) => {
  const [weekDay] = date.toString().split(" ")
  const date1 = date.toLocaleDateString()
  return [weekDay, " " + date1]
}
const padString = (str: string) => {
  const newStr = str.padStart(20, " ")
  console.log(newStr)
  return newStr
}

const getNextDay = (numberOfDays: number = 1) =>
  new Date(Date.now() + numberOfDays * 864e5)

const getPreviousDay = (numberOfDays: number = 1) =>
  new Date(Date.now() - numberOfDays * 864e5)

const calcCalendar = () => {
  const today = formatDate(new Date())
  const daysOfTheWeek = [today]
  for (let i = 0; i < 7; i++) {
    const [condition] = daysOfTheWeek[0]

    if (condition !== "Mon") {
      daysOfTheWeek.unshift(formatDate(getPreviousDay(i + 1)))
    }
  }
  for (let i = 0; i < 7; i++) {
    const [condition] = daysOfTheWeek[daysOfTheWeek.length - 1]
    if (condition !== "Sun") {
      daysOfTheWeek.push(formatDate(getNextDay(i + 1)))
    }
  }
  return daysOfTheWeek
}

const filterNutrients = (data: Array<any>, nutrientName: string, i: number) =>
  data[i].foodNutrients.reduce((value: number, nutrient: any) => {
    if (nutrient.nutrientName === nutrientName) {
      value = nutrient.value
    }
    return value
  }, 0)

const getToBeAddedMealId = (
  data: Array<{ header: string; btnText: string; url: string }>
) => {
  return data.map((item) => {
    return {
      params: {
        id: item.url,
      },
    }
  })
}

const getMealAndDate = (id: string) => {
  const meal = id
  return { id, title: meal }
}

export {
  calcAverage,
  formatToPercentage,
  calcFrequency,
  calcVarietyPoints,
  formatDate,
  padString,
  getNextDay,
  getPreviousDay,
  filterNutrients,
  getToBeAddedMealId,
  getMealAndDate,
  calcCalendar,
  calcMacros,
  sumAmount,
}
